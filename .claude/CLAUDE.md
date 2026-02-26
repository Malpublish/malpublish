---
project: Malpublish
stack: static
services:
  github:
    username: "roar-gits"
    repo: "malpublish"
  deploy: GitHub Pages
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
| Deploy | Vercel (auto-deploy on push to main) |
| Private repo | https://github.com/roar-gits/malpublish (origin) |
| Public repo | https://github.com/Malpublish/malpublish (org remote) |
| Status | Active |

---

## Quick Commands

```bash
npm run dev          # Local development
npm run build        # Static export to ./out
```

---

## Deployment

Automatic via Vercel on push to `main` (origin).

Public mirror at `Malpublish/malpublish` org — push to `org` remote after significant updates to keep the open-source repo current.

---

## Credentials

Shares credentials with PublishingPolicy (same roar-gits account).

```bash
echo $GITHUB_TOKEN                    # Should show token (shared hobby PAT)
```

**Note**: GitHub Actions uses repo permissions for deployment. Claude needs the token for `git push`.

---

## MCP Servers

| Server | Purpose |
|--------|---------|
| GitHub | Repository operations (PRs, issues, etc.) |

---

## Session Lifecycle

**Auto-deploy enabled**: After completing work, commit and push immediately. Do not ask for deployment confirmation — GitHub Actions handles the rest.

Flow: `git status` → Work → Build → Commit → Push
