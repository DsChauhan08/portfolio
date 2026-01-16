# Content Management Guide

This guide explains how to add new content and manage assets for your portfolio.

## Helper Scripts

Located in the `scripts/` directory:

- `new-poetry.sh "Title"`: Creates a new poem entry.
- `new-philosophy.sh "Title"`: Creates a new philosophy entry.
- `generate-project-images.sh`: Generates WebP images for all projects defined in `project-repos.sh`.
- `fetch-repo-image.sh`: Fetches a single repo image.

## Adding New Content

### 1. Poetry
Run the helper script:
```bash
./scripts/new-poetry.sh "My New Poem"
```
This creates a file at `content/poetry/my-new-poem/+page.svx`. Open it and write your poem.

### 2. Philosophy
Run the helper script:
```bash
./scripts/new-philosophy.sh "My New Thought"
```
This creates a file at `content/philosophy/my-new-thought/+page.svx`. Open it and write your thoughts.

### 3. Projects
1. Add the project to `scripts/project-repos.sh`:
   ```bash
   "my-project" "https://github.com/Start-Automating/my-project"
   ```
2. Run the image generator:
   ```bash
   cd scripts
   ./generate-project-images.sh
   ```
3. Create the content file at `content/projects/my-project.svx`.

## Manual Content Structure

If you prefer not to use scripts, create a directory in `content/TYPE/SLUG/` and add a `+page.svx` file with this frontmatter:

```markdown
---
title:
  text: "Title Here"
description: "Description here"
published_at: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
---

Content goes here...
```
