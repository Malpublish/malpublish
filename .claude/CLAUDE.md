---
project: Malpublish
stack: static
services:
  github:
    username: "InformationEcosystem"
    repo: "malpublish"
  deploy: GitHub Pages
status: active
---

# Project Configuration - Malpublish Landing

**Inherits**: `~/.claude/CLAUDE.md`

---

## Overview

Static landing page for malpublish.org - explains the concept of "malpublishing" and links to PublishingPolicy.org for the policy builder tool.

---

## Project

| Setting | Value |
|---------|-------|
| Stack | Next.js 16 (static export) |
| URL | https://malpublish.org |
| Deploy | GitHub Pages |
| Status | Active |

---

## Quick Commands

```bash
npm run dev          # Local development
npm run build        # Static export to ./out
```

---

## Deployment

Automatic via GitHub Actions on push to `main`.

Workflow: `.github/workflows/deploy.yml`

---

## No Credentials Needed

This is a static site with no backend. GitHub Pages deployment uses repository permissions.

---

## Session Lifecycle

1. `git status` → 2. Work → 3. Commit → 4. Push (auto-deploys)
