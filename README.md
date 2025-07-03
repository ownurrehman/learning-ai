# Finance SaaS Starter

This project outlines the foundation for building a modern, multi-tenant financial application. The goal is to support multiple businesses, currencies, and users while providing invoices, quotations, expenses, and subscriptions.

## Stack Overview

- **Frontend:** Next.js with TypeScript and Tailwind CSS for styling.
- **Backend:** NestJS running on Node.js 18+ using TypeScript.
- **Database:** PostgreSQL with Prisma as the ORM.
- **Cache/Realtime:** Redis for caching currency rates and pub/sub features.
- **Authentication:** Solutions such as Auth0, Clerk, or NextAuth.js.

## Core Features

1. **Multi-Tenancy**
   - Schema-per-tenant in PostgreSQL using Prisma migrations.
   - Row level security for per-tenant isolation.
2. **User Management**
   - Roles and permissions via libraries like `casl`.
3. **Finance Modules**
   - Invoices and quotations with PDF generation.
   - Expense tracking with file uploads (stored in S3-compatible buckets).
   - Subscription management powered by Stripe Billing.
4. **Currency Support**
   - Fetch rates from an external API and cache them in Redis.
5. **API Strategy**
   - Public REST or GraphQL endpoints.
   - Internal gRPC for microservices if the app scales.

## Development Setup

```
packages/
  frontend/  # Next.js application
  backend/   # NestJS API
```

1. Clone the repo and install dependencies in each package.
2. Set up PostgreSQL and Redis containers using Docker Compose.
3. Run Prisma migrations for the core schema.
4. Start the backend and frontend in watch mode for local development.

This repo currently contains documentation only. Use it as a starting point to scaffold your own implementation. Feel free to extend it with additional modules like CRM or HRM features as your product grows.
