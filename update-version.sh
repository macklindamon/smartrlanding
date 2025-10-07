#!/bin/bash

# Smartr365 Version Updater
# Usage: ./update-version.sh [patch|minor|major] "Description of changes"

VERSION_TYPE=${1:-patch}
DESCRIPTION=${2:-"Version update"}

echo "🚀 Updating Smartr365 version..."

# Update package.json version
npm run version:$VERSION_TYPE

# Get the new version
NEW_VERSION=$(node -p "require('./package.json').version")
TODAY=$(date +%Y-%m-%d)

echo "📦 New version: $NEW_VERSION"

# Update index.html meta tags
sed -i '' "s/<meta name=\"version\" content=\".*\" \/>/<meta name=\"version\" content=\"$NEW_VERSION\" \/>/" index.html
sed -i '' "s/<meta name=\"build-date\" content=\".*\" \/>/<meta name=\"build-date\" content=\"$TODAY\" \/>/" index.html
sed -i '' "s/<meta name=\"last-updated\" content=\".*\" \/>/<meta name=\"last-updated\" content=\"$DESCRIPTION\" \/>/" index.html

echo "✅ Updated version to $NEW_VERSION"
echo "📅 Build date: $TODAY"
echo "📝 Description: $DESCRIPTION"
echo ""
echo "🔍 Version tracking info (hidden from clients):"
echo "   - Version: $NEW_VERSION"
echo "   - Build Date: $TODAY"
echo "   - Last Update: $DESCRIPTION"
echo ""
echo "💡 To commit changes:"
echo "   git add ."
echo "   git commit -m \"Release v$NEW_VERSION: $DESCRIPTION\""
echo "   git push origin main"