#!/bin/bash

# new-philosophy.sh - Create a new philosophy entry
# Usage: ./new-philosophy.sh "My Thought Title"

if [ -z "$1" ]; then
  echo "Usage: ./new-philosophy.sh \"My Thought Title\""
  exit 1
fi

TITLE="$1"
# Create slug: lowercase, replace spaces with hyphens, remove non-alphanumeric
SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/[^a-z0-9-]//g')
DATE=$(date +%Y-%m-%d)

DIR="content/philosophy/$SLUG"
mkdir -p "$DIR"

FILE="$DIR/+page.svx"

cat > "$FILE" <<EOF
---
title:
  text: "$TITLE"
description: "A short summary of this thought."
published_at: "$DATE"
tags: ["philosophy", "stoicism"]
---

Your philosophical thought goes here.
EOF

echo "Created new philosophy entry at $FILE"
echo "You can now edit it with: $EDITOR $FILE"
