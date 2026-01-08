# Artifacts

Reference documents for content managed elsewhere.

---

## Purpose

This directory contains **reference copies** of artifacts that:
- Are managed in another project or system
- Need to be available for context during development
- Should not be modified here (changes should happen at source)

---

## When to Use

| Use Case | Example |
|----------|---------|
| Email templates managed in marketing tool | Copy of template for reference |
| Shared assets from sibling project | Logo, config files |
| External API response examples | Sample JSON for testing |
| Design system exports | Colors, typography specs |

---

## Structure

```
artifacts/
├── README.md (this file)
├── {{artifact-category}}/
│   ├── README.md          # Source info, how to update
│   └── [reference files]
```

---

## Best Practices

1. **Always document the source** - Where is the canonical version?
2. **Include update instructions** - How to sync when source changes
3. **Mark clearly as reference** - Prevent accidental edits
4. **Keep minimal** - Only what's needed for development context

---

## Example

```markdown
# Platform Emails (Reference)

> **Source**: Marketing tool / Another project
> **Last synced**: YYYY-MM-DD
> **Contact**: [Who manages the source]

These are reference copies. To modify, update the source and re-sync.

## Contents
- template-welcome.html
- template-notification.html
- subjects.json
```

---

## Index

| Artifact | Date | Description |
|----------|------|-------------|
| [original-definition-google-sites.md](original-definition-google-sites.md) | 2026-01-08 | Original malpublish definition from Google Sites (canonical source) |
| [site-review-2026-01-07.md](site-review-2026-01-07.md) | 2026-01-07 | Site review with improvement opportunities |
