#!/bin/bash

echo "🔍 Checking GitHub Pages status..."
echo ""

# Check if site is live
STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://ShreyasMuzumdar.github.io/reactwebsite/)

if [ "$STATUS" = "200" ]; then
    echo "✅ Site is LIVE: https://ShreyasMuzumdar.github.io/reactwebsite/"
    echo "✅ Status: $STATUS"
    
    # Check repository Pages setting
    HAS_PAGES=$(curl -s "https://api.github.com/repos/ShreyasMuzumdar/reactwebsite" | grep '"has_pages"' | grep -o 'true\|false')
    echo "✅ GitHub Pages enabled: $HAS_PAGES"
    
    # Check last deployment
    LAST_COMMIT=$(git log origin/gh-pages --oneline -1 2>/dev/null || echo "No gh-pages branch found")
    echo "✅ Last deployment: $LAST_COMMIT"
    
else
    echo "❌ Site is not responding"
    echo "❌ Status: $STATUS"
fi

echo ""
echo "🚀 To update your site, run: npm run deploy"
