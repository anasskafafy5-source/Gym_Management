# AGENTS.md

## Project Overview

Velora Fitness is a production-quality gym management dashboard built as a portfolio project.

The application manages:

- Members
- Captains and trainers
- Subscriptions
- Subscription freezing
- Financial transactions
- Sessions
- Users and authentication
- Dashboard analytics
- Application settings

The project was originally developed for a real client. This repository is an independent demo version with a separate Supabase project and fictional demo data.

## Current Goal

Improve the application into a polished SaaS-style portfolio project.

The current priority is implementing a complete dark mode without breaking the existing light mode or application behavior.

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router
- TanStack React Query
- Supabase
- Recharts
- React Hook Form
- React Hot Toast

Do not introduce TypeScript.

## Language and Direction

- The user interface is Arabic.
- The document direction is RTL.
- Preserve Arabic labels and RTL layouts.
- Code, variable names, component names, and commits must be written in English.

## Brand

Brand name: Velora Fitness

Primary brand color:

- Orange: #F97316
- Orange hover: #EA580C

The orange brand color should remain consistent in light and dark modes.

Avoid excessive gradients, glow effects, neon colors, or overdesigned UI.

The desired style is:

- Modern
- Clean
- Professional
- Premium
- Suitable for a SaaS dashboard

## Development Rules

- Inspect the relevant existing files before making changes.
- Follow the current project architecture and naming conventions.
- Prefer updating existing components over creating unnecessary duplicates.
- Keep components focused and reusable.
- Avoid large unrelated refactors.
- Do not change application behavior unless the task requires it.
- Do not rename database tables, columns, views, or RPC functions without explicit approval.
- Do not modify Supabase schema or RLS policies unless explicitly requested.
- Never expose secret keys or service-role keys in frontend code.
- Use the existing publishable Supabase key through environment variables.
- Do not hardcode demo data when it should come from Supabase.

## UI Rules

- Preserve the existing orange identity.
- Use semantic color tokens instead of scattering unrelated color values.
- Every changed component must support light and dark modes.
- Maintain sufficient contrast for text, borders, inputs, and disabled states.
- Preserve responsive behavior.
- Check hover, focus, active, disabled, loading, empty, and error states.
- Modals, dropdowns, charts, tables, forms, and toasts must support dark mode.

## Workflow

Before editing:

1. Read this file.
2. Inspect the relevant code.
3. Explain the current implementation briefly.
4. Propose a focused implementation plan.
5. Identify the files that need to change.

During implementation:

1. Work in small, reviewable steps.
2. Do not change unrelated files.
3. Preserve existing functionality.
4. Reuse existing styles and components where appropriate.

After implementation:

1. Run the relevant lint and build commands.
2. Report the files changed.
3. Explain important decisions.
4. Mention any remaining issues or manual checks.
5. Do not claim success when checks fail.

## Validation Commands

Run these when relevant:

```bash
npm run lint
npm run build