# System Overview

This is a full-stack web application built with React on the frontend and Express.js on the backend, featuring a modern UI design with shadcn/ui components. The application is configured for deployment on Replit with PostgreSQL database support.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js 20 with TypeScript
- **Framework**: Express.js for REST API
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Configured for PostgreSQL session storage
- **Development**: Hot reload with tsx

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Centralized schema definition in `shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations
- **Connection**: Neon Database serverless driver for PostgreSQL

## Key Components

### Database Schema
The application currently defines a users table with:
- Primary key ID (serial)
- Username (unique, not null)
- Password (not null)
- Zod validation schemas for type safety

### Storage Interface
- **IStorage Interface**: Defines CRUD operations for data access
- **MemStorage Implementation**: In-memory storage for development
- **Database Storage**: Ready for PostgreSQL integration via Drizzle

### UI Components
- Complete shadcn/ui component library
- Custom gradient background with purple theme
- Responsive navigation and hero sections
- Scroll-based animations and interactions

### API Structure
- Express router setup in `server/routes.ts`
- Middleware for JSON parsing and CORS
- Error handling middleware
- Request/response logging for API endpoints

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Routes**: Express routes handle requests with `/api` prefix
3. **Storage Layer**: Controllers use storage interface for data operations
4. **Database**: Drizzle ORM manages PostgreSQL interactions
5. **Response**: JSON responses sent back to client with error handling

## External Dependencies

### Core Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: drizzle-orm and drizzle-kit for database operations
- **UI**: @radix-ui components for accessible UI primitives
- **State**: @tanstack/react-query for server state management
- **Forms**: @hookform/resolvers with react-hook-form
- **Validation**: zod for runtime type validation

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Full TypeScript support across frontend and backend
- **Linting**: ESLint configuration
- **Hot Reload**: Development server with hot module replacement

## Deployment Strategy

### Replit Configuration
- **Modules**: nodejs-20, web, postgresql-16
- **Development**: `npm run dev` starts both frontend and backend
- **Production Build**: Vite builds frontend, esbuild bundles backend
- **Deployment**: Autoscale deployment target with proper build commands

### Environment Setup
- **Database URL**: Required environment variable for PostgreSQL connection
- **Port Configuration**: Server runs on port 5000, mapped to external port 80
- **Static Assets**: Frontend built to `dist/public` directory

### Build Process
1. Frontend assets built with Vite to `dist/public`
2. Backend bundled with esbuild to `dist/index.js`
3. Production server serves static files and API routes
4. PostgreSQL database provisioned automatically on Replit

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- June 14, 2025: Initial setup with React/Express architecture
- June 14, 2025: Implemented Welfare Capital landing page with:
  - Green gradient background with dynamic radial overlays and flow animation
  - Compact hero section with "Unified Social Experience Architecture" theme
  - Smooth scroll animations for "Keep scrolling" text sections
  - Mouse icon scroll indicator with glow effects and slide animations
  - Final page with centered quote and professional footer
  - Dynamic background that shifts colors and position based on scroll position
  - MouseIndicator component with fixed positioning and scroll-based line visibility
  - Enhanced background with multiple gradient layers and color intensity variations
- June 14, 2025: Fixed scroll indicator visibility issues:
  - Resolved overflow-x: hidden conflicts that were hiding fixed positioned elements
  - Created dedicated MouseScrollIndicator component with proper styling
  - Added mouse icon with dotted line that appears on scroll
  - Implemented pulse and bounce animations for better user engagement
  - Component automatically hides when reaching final section
- June 14, 2025: Prepared for Vercel deployment:
  - Created vercel.json configuration with proper routing
  - Added api/index.ts for serverless functions
  - Updated package.json with vercel-build script
  - Modified API client to use relative URLs
  - Added .vercelignore and README.md
  - Configured CORS and error handling for production

## User Preferences

- Language: French
- Design Style: High-quality, professional corporate appearance with dynamic effects
- Animation Style: Smooth, fluid transitions with glow and slide effects
- Background: Gradient with smoke-like effects that respond to scroll position