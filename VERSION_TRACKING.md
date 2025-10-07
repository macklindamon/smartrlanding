# Version Tracking System

This project includes a hidden version tracking system for development purposes.

## How It Works

**Version information is embedded in the HTML `<head>` as meta tags:**
```html
<meta name="version" content="1.1.0" />
<meta name="build-date" content="2025-10-07" />
<meta name="last-updated" content="WCAG 2.1 AA Accessibility Improvements" />
```

These meta tags are:
- ✅ **Hidden from clients** (not visible on the website)
- ✅ **Accessible to developers** (viewable in browser dev tools)
- ✅ **Automatically tracked** in git commits

## Quick Version Updates

### Manual Method:
1. Update `package.json` version
2. Update meta tags in `index.html`
3. Commit and push

### Automated Method:
```bash
# Patch version (1.1.0 → 1.1.1)
./update-version.sh patch "Bug fixes and improvements"

# Minor version (1.1.0 → 1.2.0)  
./update-version.sh minor "New features added"

# Major version (1.1.0 → 2.0.0)
./update-version.sh major "Breaking changes or major redesign"
```

## NPM Scripts Available:
```bash
npm run version:patch  # 1.1.0 → 1.1.1
npm run version:minor  # 1.1.0 → 1.2.0  
npm run version:major  # 1.1.0 → 2.0.0
```

## Viewing Version Info

**In Browser Dev Tools:**
1. Right-click → Inspect Element
2. Go to Elements tab
3. Look in `<head>` section for version meta tags

**In Terminal:**
```bash
# Check current version
node -p "require('./package.json').version"

# View meta tags
grep -n "meta name=\"version\|build-date\|last-updated\"" index.html
```

## Version History

- **v1.1.0** (2025-10-07): WCAG 2.1 AA Accessibility Improvements
- **v1.0.0** (2025-10-02): Initial release with UI improvements