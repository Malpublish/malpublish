<!-- Last updated: 2026-01-31 | Status: Active -->

# Architecture

## Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js (static export) |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Hosting | GitHub Pages |
| Domain | malpublish.org |

---

## Directory Structure

```
malpublish.org/
├── src/
│   └── app/           # Next.js App Router pages
├── public/            # Static assets
├── out/               # Static export output
├── .github/           # GitHub Actions workflows
└── .claude/           # Claude configuration
```

---

## Build & Deploy

**Local development:**
```bash
npm run dev    # Start dev server
npm run build  # Generate static export to /out
```

**Production:**
- GitHub Pages serves from the `out/` directory
- CNAME configured for malpublish.org

---

## Key Patterns

### Static Export

This is a static site using Next.js's `output: 'export'` mode. No server-side rendering - all pages are pre-rendered at build time.

---

## Conventions

| Convention | Rule |
|------------|------|
| Styling | Tailwind utility classes |
| Assets | Store in `/public` |
| Components | Store in `src/components/` if created |
