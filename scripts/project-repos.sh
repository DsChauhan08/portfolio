#!/bin/zsh
# project-repos.sh - Mapping of project names to GitHub repositories
# This file is sourced by generate-project-images.sh

typeset -A PROJECT_REPOS

# Assign values to the associative array.
# Note the syntax: key followed by value, separated by spaces within the ()
PROJECT_REPOS=(
    "docsentinel" "https://github.com/DsChauhan08/docsentinel"
    "tunl" "https://github.com/DsChauhan08/tunl"
    "scrapy" "https://github.com/DsChauhan08/scrapy"
    "mixgen" "https://github.com/DsChauhan08/mixgen"
    "advent-of-code-2025" "https://github.com/DsChauhan08/ADVENT_OF_CODE_2025"
)
