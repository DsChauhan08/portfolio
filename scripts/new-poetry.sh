#!/bin/bash

# new-poetry.sh - Create a new poetry entry
# Usage: ./new-poetry.sh "My Poem Title"

if [ -z "$1" ]; then
  echo "Usage: ./new-poetry.sh \"My Poem Title\""
  exit 1
fi

TITLE="$1"
# Create slug: lowercase, replace spaces with hyphens, remove non-alphanumeric
SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/[^a-z0-9-]//g')
DATE=$(date +%Y-%m-%d)

DIR="content/poetry/$SLUG"
mkdir -p "$DIR"

FILE="$DIR/+page.svx"

cat > "$FILE" <<EOF
---
title:
  text: "$TITLE"
description: "A short description of the poem."
published_at: "$DATE"
tags: ["poetry"]
---

Your poem goes here.
EOF

echo "Created new poem at $FILE"
echo "You can now edit it with: $EDITOR $FILE"
