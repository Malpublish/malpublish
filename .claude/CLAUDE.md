---
project: Malpublish
stack: static
services:
  github:
    org: "Malpublish"
    repo: "malpublish"
  deploy: GitHub Pages
---

# Project Configuration - Malpublish Landing

**Inherits**: `~/.claude/CLAUDE.md`

---

## Overview

Static landing page for malpublish.org - explains the concept of "malpublishing" and links to PublishingPolicy.org for the policy builder tool. Open source for transparency.

---

## Project

| Setting | Value |
|---------|-------|
| Stack | Next.js 16 (static export) |
| URL | https://malpublish.org |
| Deploy | GitHub Pages (via GitHub Actions on push to main) |
| Repo | https://github.com/Malpublish/malpublish (public) |
| Status | Active |

---

## Quick Commands

```bash
npm run dev          # Local development
npm run build        # Static export to ./out
```

---

## Deployment

Automatic via GitHub Actions on push to `main`. Workflow: `.github/workflows/deploy.yml`

---

## Credentials

Uses org PAT from `~/.env.credentials/org-malpublish.env`.

```bash
echo $MALPUBLISH_GITHUB_TOKEN         # Org PAT for pushing
```

---

## MCP Servers

| Server | Purpose |
|--------|---------|
| GitHub | Repository operations (PRs, issues, etc.) |

---

## Session Lifecycle

**Auto-deploy enabled**: After completing work, commit and push immediately. Do not ask for deployment confirmation — GitHub Actions handles the rest.

Flow: `git status` → Work → Build → Commit → Push
