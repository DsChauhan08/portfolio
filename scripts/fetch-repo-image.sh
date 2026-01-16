#!/bin/bash

# fetch-repo-image.sh - Fetch GitHub repository image with explicit filename
# Usage: ./fetch-repo-image.sh <github-repo-url> <output-filename> [output-directory]

set -e

# Check parameters
if [ $# -lt 2 ] || [ $# -gt 3 ]; then
    echo "Usage: $0 <github-repo-url> <output-filename> [output-directory]"
    echo "Example: $0 https://github.com/DsChauhan08/docsentinel docsentinel ./static/projects"
    exit 1
fi

# Clean the URL by removing trailing slashes
REPO_URL="${1%/}"
OUTPUT_NAME="$2"

# Set output directory (default to current directory)
OUTPUT_DIR="${3:-.}"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

echo "Fetching image for: $OUTPUT_NAME"
echo "Repository: $REPO_URL"

# Extract owner/repo from URL
# Removes 'https://github.com/' prefix
REPO_PATH="${REPO_URL#https://github.com/}"

# Construct GitHub OpenGraph URL
# https://opengraph.githubassets.com/1/owner/repo
IMAGE_URL="https://opengraph.githubassets.com/1/$REPO_PATH"

echo "Using OpenGraph URL: $IMAGE_URL"

# Download the image to output directory
echo "Downloading image as ${OUTPUT_DIR}/${OUTPUT_NAME}.png..."
# GitHub OG images are usually PNGs, but let's save as png to be safe
if curl -sL -o "${OUTPUT_DIR}/${OUTPUT_NAME}.png" "$IMAGE_URL"; then
    echo "Successfully downloaded ${OUTPUT_DIR}/${OUTPUT_NAME}.png"
else
    echo "Error: Failed to download image"
    exit 1
fi

# Check if cwebp is available for conversion
if command -v cwebp &>/dev/null; then
    echo "Converting to WebP format..."
    if cwebp -q 75 "${OUTPUT_DIR}/${OUTPUT_NAME}.png" -o "${OUTPUT_DIR}/${OUTPUT_NAME}.webp" &>/dev/null; then
        echo "Successfully converted to WebP"
        # Remove the PNG file after successful conversion
        rm -f "${OUTPUT_DIR}/${OUTPUT_NAME}.png"
        echo "Done! WebP file created: ${OUTPUT_DIR}/${OUTPUT_NAME}.webp"
    else
        echo "Warning: WebP conversion failed, keeping PNG file"
    fi
else
    echo "Warning: cwebp not installed. Install with: sudo apt install webp or brew install webp"
    echo "Keeping PNG file: ${OUTPUT_DIR}/${OUTPUT_NAME}.png"
fi