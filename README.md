# Coffee

An Nx monorepo containing a full-stack application with a .NET backend and React frontends.

## 🏗️ Project Structure

This monorepo contains the following applications:

- **`apps/api/`** - .NET 8.0 Web API backend
  - RESTful API with Swagger documentation
  - CORS enabled for local development
  - Runs on `http://localhost:5000`

- **`apps/coffee/`** - React Router v7 application
  - Server-side rendering (SSR) enabled
  - React 19 with TypeScript
  - File-based routing

- **`apps/web/`** - Additional web application
  - React with TypeScript
  - Vite build system

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) - Package manager and runtime
- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0) - For the API project
- [Node.js](https://nodejs.org/) (optional, Bun can replace Node.js)

### Installation

Install dependencies:

```sh
bun install
```

## 📦 Running the Applications

### Development Mode

Run all applications in parallel:

```sh
bun run dev
```

This starts both the API and web applications.

### Individual Applications

#### Backend API

```sh
# Serve the API
bunx nx serve api

# Or using .NET directly
cd apps/api
dotnet run
```

The API will be available at `http://localhost:5000`
- API endpoints: `http://localhost:5000/api`
- Swagger UI: `http://localhost:5000/swagger` (development mode only)

#### Coffee App (React Router)

```sh
bunx nx serve coffee
```

#### Web App

```sh
bunx nx serve web
```

### Production Builds

```sh
# Build all projects
bunx nx run-many --target=build --all

# Build specific project
bunx nx build coffee
bunx nx build api
bunx nx build web
```

## 🛠️ Available Commands

### Nx Tasks

```sh
# Show all available targets for a project
bunx nx show project coffee

# Run tests
bunx nx test coffee

# Lint code
bunx nx lint coffee

# Type check
bunx nx typecheck coffee

# Visualize project dependencies
bunx nx graph
```

### Code Generation

#### Generate React Components

```sh
bunx nx g @nx/react:component my-component --project=coffee
```

#### Generate .NET Projects

```sh
bunx nx generate @nx/dotnet:app my-api
```

#### Generate Libraries

```sh
bunx nx g @nx/react:lib mylib
```

Use `bunx nx list` to see all installed plugins and their generators.

## 🧪 Testing

Run tests for all projects:

```sh
bunx nx run-many --target=test --all
```

Run tests for a specific project:

```sh
bunx nx test coffee
```

## 🔍 Project Details

### Tech Stack

**Backend:**
- .NET 8.0
- ASP.NET Core Web API
- Swagger/OpenAPI

**Frontend:**
- React 19
- React Router v7 (for `coffee` app)
- TypeScript
- Vite
- SCSS modules

**Tools:**
- Nx for monorepo management
- Bun for package management
- ESLint for linting
- Vitest for testing
- Prettier for code formatting

### Configuration

- API runs on port `5000`
- CORS is configured for ports `4200`, `5173`, and `3000`
- Swagger is enabled in development mode
- TypeScript strict mode is enabled

## 📚 Learn More

- [Nx Documentation](https://nx.dev)
- [React Router v7 Docs](https://reactrouter.com)
- [.NET Documentation](https://learn.microsoft.com/dotnet/)
- [Bun Documentation](https://bun.sh/docs)

## 🔗 Useful Nx Commands

- `bunx nx graph` - Visualize project dependencies
- `bunx nx connect` - Connect to Nx Cloud for enhanced CI/CD
- `bunx nx list` - List available plugins and generators
