# Full-Stack System Architecture & CI/CD Pipeline (Antigravity Framework)

![ALDS Full-Stack System Architecture & CI/CD](/Users/yashasshetty/.gemini/antigravity-ide/brain/0964e3f3-803b-42ec-978c-70ea977bfcf3/alds_architecture_diagram_1788280010844.jpg)

---

## 1. High-Level Architecture Overview

```mermaid
flowchart TB
    %% CI/CD SECTION
    subgraph CICD["🚀 CI/CD DEPLOYMENT PIPELINE (Independent Release Lanes)"]
        direction LR
        Repo["🐙 Source Repository (GitHub/GitLab)"] --> CI["⚙️ CI Pipeline (Lint, Unit, E2E Tests, Security Scan)"]
        
        CI --> CD_FE["📦 Track A: Frontend Build\n(Next.js / Standalone Docker)\n→ CDN / Edge / Vercel"]
        CI --> CD_ML["🧠 Track B: ML Model Release\n(MLflow Registry Promotion)\n→ TorchServe / Triton Rolling Update"]
        CI --> CD_DB["🗄️ Track C: DB Migration\n(Flyway / Prisma Migrate)\n→ Zero-Downtime Migration"]
    end

    %% RUNTIME ARCHITECTURE
    subgraph RUNTIME["⚡ RUNTIME SYSTEM ARCHITECTURE"]
        direction TB

        subgraph FRONTEND["🖥️ 1. FRONTEND CLIENT & BFF LAYER"]
            direction TB
            UI["📱 Client Application (Next.js / React)\n• UI Components & Layouts\n• State: Zustand & TanStack Query\n• Optimistic UI Updates"]
            
            BFF["🛡️ API Gateway / BFF (Next.js Edge / FastAPI Gateway)\n• JWT & Session Verification\n• Rate Limiting & Request Throttling\n• Dynamic Request Routing\n• WebSocket / SSE Subscriptions"]
            
            UI <-->|"HTTPS / WSS / gRPC-Web"| BFF
        end

        subgraph ML_PIPELINE["🧠 2. MACHINE LEARNING PIPELINE"]
            direction TB
            Ingest["📥 Ingestion & Preprocessing\n• DICOM / Tensor Normalization\n• Augmentation & Validation"]
            
            Inference["⚡ Model Serving / Inference API\n• FastAPI / TorchServe / ONNX\n• Batching & GPU Acceleration\n• Heatmap / CAM Generation"]
            
            TrainEnv["🏋️ Training & Validation Cluster\n• PyTorch / GPU Compute\n• Experiment Tracking"]
            
            ModelReg["🏷️ Model Registry (MLflow)\n• Staged Model Versions\n• Performance Metrics & Lineage"]
            
            Ingest --> Inference
            TrainEnv -->|"Register & Version"| ModelReg
            ModelReg -->|"Hot-Swap Weights"| Inference
        end

        subgraph STORAGE["🗄️ 3. DATA & STORAGE LAYER"]
            direction TB
            RedisCache["⚡ In-Memory Cache (Redis / Upstash)\n• User Sessions & Rate Limits\n• Inference Result Caching\n• Pub/Sub Event Bus"]
            
            PrimaryDB[("🐘 Primary DB (PostgreSQL)\n• User Profiles & Role RBAC\n• Scan Metadata & Audit Logs\n• Structured Diagnostic Reports")]
            
            ObjectStore[("🪣 Object Storage (S3 / GCS / MinIO)\n• Raw DICOM Scans & Images\n• Generated Saliency Maps\n• Model Weights & Checkpoints")]
            
            FeatureStore[("📊 Feature Store (Feast / Redis)\n• Precomputed Patient Vectors\n• Clinical Tabular Embeddings")]
        end

        %% INTER-DOMAIN FLOWS
        BFF -->|"1. Check Session / Cache"| RedisCache
        BFF -->|"2. Read / Write App Data"| PrimaryDB
        BFF -->|"3. Stream / Fetch Scan"| ObjectStore
        BFF -->|"4. Dispatch Inference Request"| Ingest
        
        Inference -->|"Fetch Precomputed Features"| FeatureStore
        Inference -->|"Save Predictions & Heatmaps"| ObjectStore
        Inference -->|"Store Analysis Records"| PrimaryDB
        Inference -->|"Cache Hot Results"| RedisCache
        Ingest -->|"Fetch Raw File"| ObjectStore
    end

    %% Connect CI/CD to Runtime Targets
    CD_FE -.->|"Deploy Static & SSR"| FRONTEND
    CD_ML -.->|"Deploy Containers / Pods"| ML_PIPELINE
    CD_DB -.->|"Execute Schema Scripts"| PrimaryDB

    %% Styling
    classDef cicd fill:#1e293b,stroke:#38bdf8,stroke-width:2px,color:#f8fafc;
    classDef fe fill:#0f172a,stroke:#22c55e,stroke-width:2px,color:#f8fafc;
    classDef ml fill:#0f172a,stroke:#a855f7,stroke-width:2px,color:#f8fafc;
    classDef storage fill:#0f172a,stroke:#06b6d4,stroke-width:2px,color:#f8fafc;
    
    class CICD,Repo,CI,CD_FE,CD_ML,CD_DB cicd;
    class FRONTEND,UI,BFF fe;
    class ML_PIPELINE,Ingest,Inference,TrainEnv,ModelReg ml;
    class STORAGE,RedisCache,PrimaryDB,ObjectStore,FeatureStore storage;
```

---

## 2. End-to-End Data Flow & Domain Breakdown

### Domain 1: Frontend Client (Primary Focus)

```
[User Browser]
      │
      ▼  (Encrypted HTTPS / WSS)
[React / Next.js Client Layer]
 ├── UI State Management (Zustand: local UI filters, viewer viewport state)
 ├── Server State & Caching (TanStack Query: background polling, stale-while-revalidate)
 └── DICOM & Image Canvas Viewer (CornerstoneJS / WebGL rendering)
      │
      ▼  (BFF Protocol)
[API Gateway / BFF]
 ├── 1. Authentication Layer (JWT validation, RBAC, OAuth2/OIDC)
 ├── 2. Security & Guardrails (CORS, Rate Limiter with Redis token bucket)
 ├── 3. Dynamic Router (Separates CRUD traffic from compute-heavy ML inferences)
 └── 4. Real-time Gateway (SSE / WebSockets for asynchronous inference progress)
```

#### Key Capabilities:
- **Optimistic Updates & Instant Feedback**: Diagnostic annotations and patient triage statuses reflect immediately with fallback rollback.
- **DICOM Streaming Support**: High-resolution image chunks are streamed directly from Object Storage via signed pre-authenticated URLs, bypassing the BFF compute layer to prevent memory bottlenecks.
- **BFF Abstraction**: Encapsulates microservice topology so the frontend interacts with a single unified, type-safe API boundary (`/api/v1/*`).

---

### Domain 2: Machine Learning Pipeline

```
[Inbound Scan Event / Request]
      │
      ▼
[Data Ingestion & Preprocessing Layer]
 ├── Header extraction (anonymizes patient PHI according to HIPAA/DICOM standard)
 ├── Format normalization (converts raw HU values / Windowing to standardized tensors)
 └── Data validation (rejects corrupt slices, out-of-distribution dimensions)
      │
      ▼
[Model Serving / Inference API (FastAPI + Triton / TorchServe)]
 ├── Dynamic Batching (groups incoming requests across concurrent users to maximize GPU utilization)
 ├── Multi-Task Prediction (Nodule detection, Opacity segmentation, Pneumothorax classification)
 ├── Explainability Engine (Generates Grad-CAM / Integrated Gradients heatmap overlays)
 └── Fallback & Guardrail Engine (Flags low-confidence predictions for mandatory radiologist verification)
      ▲
      │ (Continuous Model Delivery)
[Model Registry & MLOps Lifecycle]
 ├── MLflow / W&B: Tracks hyperparameters, F1-scores, ROC-AUC, model artifacts
 ├── GPU Retraining Cluster: Triggers on new verified clinical datasets
 └── Automated Canary Validation: Compares candidate model against production baseline before promotion
```

---

### Domain 3: Data & Storage Layer

| Storage Component | Technology | Primary Role | Read/Write Pattern |
| :--- | :--- | :--- | :--- |
| **Primary Transactional DB** | **PostgreSQL (with Timescale / pgvector)** | Stores user profiles, clinic roles, audit logs, screening metadata, and verified clinical notes. | High read concurrency, ACID transaction guarantees for medical compliance. |
| **In-Memory Cache & Bus** | **Redis Cluster** | Caches high-traffic endpoints, session states, and serves as the Pub/Sub bus for inference job status updates. | Sub-millisecond latency; LRU eviction with explicit TTL on token validation. |
| **Object Store** | **AWS S3 / GCS / Cloudflare R2** | Stores original DICOM scans, downsampled thumbnails, visual heatmaps, and ML model weights (`.pt`, `.onnx`, `.engine`). | Append-only, tiered lifecycle management (archive scans to cold storage after 90 days). |
| **Feature Store** | **Feast / Redis** | Stores precomputed spatial embeddings, historical patient biomarkers, and population baselines. | Low-latency feature retrieval during inference execution. |

---

## 3. CI/CD Deployment Pipeline (Independent Tracks)

```mermaid
sequenceDiagram
    autonumber
    actor Dev as Developer / ML Engineer
    participant Git as GitHub Repository
    participant Actions as GitHub Actions Orchestrator
    participant TrackFE as Track A: Frontend / BFF
    participant TrackML as Track B: ML Inference
    participant TrackDB as Track C: DB Migrations
    participant Live as Live Production Cluster

    Dev->>Git: Push Commit / Merge PR
    Git->>Actions: Trigger CI Pipeline (Linters, Security Scan, Matrix Tests)
    
    par Track A: Frontend Release
        Actions->>TrackFE: Trigger Next.js Build & Standalone Docker Container
        TrackFE->>TrackFE: Run E2E Playwright / Cypress UI Tests
        TrackFE->>Live: Rolling Deployment to Edge / CDN (Zero Downtime)
    and Track B: ML Pipeline Release
        Actions->>TrackML: Validate Model Artifact & Run Shadow Inference
        TrackML->>TrackML: Register to MLflow Production Stage
        TrackML->>Live: Canary Rollout (10% -> 50% -> 100% GPU Pod Traffic)
    and Track C: Database Migration
        Actions->>TrackDB: Validate Migration Script (Flyway / Prisma)
        TrackDB->>TrackDB: Test Expand/Contract Step on Staging Replica
        TrackDB->>Live: Apply Non-Blocking Schema DDL to Production DB
    end
    
    Live-->>Actions: Health Checks Passed (200 OK across all endpoints)
    Actions-->>Dev: Deployment Successful Notification
```

### Why Independent Release Tracks Matter:
1. **Frontend Velocity**: UI/UX improvements, bugfixes, and styling changes deploy within 2 minutes without re-running long ML container builds or risking database locks.
2. **Safe ML Upgrades**: ML models undergo canary rollouts (shadow testing against live queries) and can be rolled back instantly via the Model Registry without rebuilding application code.
3. **Zero-Downtime DB Migrations**: Uses the **Expand-and-Contract Pattern** (adding columns first, backfilling, updating code, and dropping deprecated columns later) so database changes never cause frontend or ML API outages.

---

## 4. End-to-End Request Lifecycle Example

1. **Intake**: Clinician uploads a DICOM scan on the Next.js frontend.
2. **Direct Ingestion**: Client requests a signed upload URL from the BFF; file uploads directly to S3/GCS Object Storage.
3. **Queue & Process**: BFF enqueues an inference task in Redis. Preprocessing worker extracts pixel arrays and validates dimensions.
4. **GPU Execution**: Triton Inference Server pulls the tensor, runs inference with the active PyTorch model, and computes Grad-CAM heatmaps.
5. **Persistence & Cache**: Heatmap images are saved to Object Storage, prediction scores are written to PostgreSQL, and the result payload is cached in Redis.
6. **Real-time Push**: WebSocket event notifies the Frontend; UI automatically renders the annotated scan and structured diagnostic report.
