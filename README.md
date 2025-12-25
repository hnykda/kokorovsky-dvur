# Kokorovsky dvur

Next.js static site for Kokorovsky Dvur.

## Development

```bash
pnpm install
pnpm dev
```

## Deployment

Deployed to Hera K8s cluster via Woodpecker CI.

**Automatic**: Push to `main` triggers build + deploy.

**Manual deploy**:
```bash
# Build and push
docker build -t localhost:32000/kokorovskydvur:latest .
docker push localhost:32000/kokorovskydvur:latest

# Deploy
helm upgrade --install kokorovskydvur ./chart --namespace apps
```
Test commit to verify Woodpecker CI pipeline - Thu Dec 25 14:38:18 CET 2025
