## Development

```bash
pnpm install
pnpm dev
```

### Automated Screenshot Testing

The project includes automated screenshot capture using Playwright for visual regression testing and frontend change verification.

#### Setup
Screenshots are automatically captured using Playwright. The necessary dependencies are already included in the project.

#### Usage
```bash
# Capture screenshots of all pages at multiple viewport sizes
pnpm screenshots
```

This command will:
- Start the dev server automatically (if not already running) on port 3005
- Capture all main pages (home, pricing, use-cases, careers, press, research)
- Take screenshots at 3 viewport sizes:
  - Desktop: 1920x1080
  - Tablet: 768x1024  
  - Mobile: 375x812
- Save high-quality screenshots to `screenshots/` directory
- Output: `{page}-{viewport}.png` (e.g., `home-desktop.png`)

#### Features
- **Automatic dev server management** - Starts if needed, uses existing if running
- **Full page captures** - Captures entire page content, not just viewport
- **High quality** - 2x device scale factor for crisp images
- **Clean directory** - Removes old screenshots before capturing new ones
- **Error resilience** - Continues capturing even if individual pages fail

This tool is particularly useful for:
- Visual regression testing during CSS/Tailwind migrations
- Reviewing responsive design across viewports
- Documenting UI state before major changes
- Automated visual QA in CI/CD pipelines

## Deployment

Deployed via cloufidy. # kokorovsky-dvur
