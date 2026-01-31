# Next.js Monorepo Template

A modern Next.js monorepo template with shadcn/ui, Turborepo, and Biome.

## Features

- ⚡ **Next.js 16** with Turbopack
- 🎨 **shadcn/ui** components in a shared package
- 📦 **Turborepo** for efficient monorepo builds
- 🧹 **Biome** for fast linting and formatting
- 🎯 **TypeScript** with strict mode
- 💅 **Tailwind CSS v4** for styling

## Quick Start

### Create a new project

```bash
uvx copier copy --trust gh:nishide-dev/next-monorepo-template my-awesome-project
```

### Or clone directly

```bash
git clone https://github.com/nishide-dev/next-monorepo-template.git my-project
cd my-project
pnpm install
pnpm dev
```

## Project Structure

```
.
├── apps/
│   └── web/                 # Next.js application
├── packages/
│   ├── ui/                  # Shared UI components (shadcn/ui)
│   └── typescript-config/   # Shared TypeScript configurations
├── biome.json               # Biome configuration
├── turbo.json               # Turborepo configuration
└── pnpm-workspace.yaml      # pnpm workspace configuration
```

## Adding shadcn/ui Components

Run the following command at the root of the project:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

Components will be placed in `packages/ui/src/components/`.

## Using Components

Import components from the `@workspace/ui` package:

```tsx
import { Button } from "@workspace/ui/components/button"
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm lint` | Run Biome linter |
| `pnpm lint:fix` | Run Biome linter with auto-fix |
| `pnpm format` | Format code with Biome |
| `pnpm check` | Run lint and format check |

## Requirements

- Node.js >= 20
- pnpm >= 10

## License

MIT
