# Build stage
FROM node:24-alpine AS builder

WORKDIR /app

# Enable corepack for pnpm
RUN corepack enable

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application (static export)
RUN pnpm build

# Production stage - serve static files with nginx
FROM nginx:1.31-alpine

# Copy the static export from build stage
COPY --from=builder /app/out /usr/share/nginx/html

# Copy nginx configuration (SPA routing + first-party Plausible proxy)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Fail the build, not the rollout, if the config is malformed.
RUN nginx -t

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
