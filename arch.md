# Architecture & Diagrams

## ASCII Architecture Diagram

```
                   ┌────────────────────┐
                   │   CSR User (UI)    │
                   │  React.js Frontend │
                   └─────────┬──────────┘
                             │
                             ▼
         ┌────────────────────────────────────┐
         │         REST/GraphQL API Layer      │
         │     Node.js + Express Backend       │
         └───────────┬───────────────┬────────┘
                     │               │
          ┌──────────▼───────┐   ┌───▼────────────────┐
          │ Authentication   │   │   Business Logic    │
          │  Service (JWT)   │   │ Service Management  │
          └──────────┬───────┘   │ Pricing & Cart Calc │
                     │           │ Accessibility Hooks │
                     │           └─────────────────────┘
                     │
          ┌──────────▼─────────────────┐
          │        MongoDB Database     │
          │ - Customer Profiles         │
          │ - Service Lines & Plans     │
          │ - Perks & Pricing Data      │
          │ - Audit Logs                │
          └─────────────────────────────┘
```

## PNG Architecture Diagram
The PNG architecture diagram is included in the project folder as `customer_service_ui_architecture.png`.

(If you need the PNG regenerated in a different style or with more details, tell me and I will create it.)


## System Architecture Diagram

![System Architecture](customer_service_ui_architecture.png)
