#!/bin/bash

# Lighthouse audit script for Material Design Gallery
echo "🚀 Running Lighthouse Performance Audit..."

# Check if server is running
if ! curl -s http://localhost:8000 > /dev/null; then
    echo "Starting local server..."
    python -m http.server 8000 &
    SERVER_PID=$!
    sleep 3
else
    echo "Server is already running on port 8000"
fi

# Run Lighthouse audit
echo "Running Lighthouse audit..."
lighthouse http://localhost:8000 \
    --output html \
    --output json \
    --output-path lighthouse-home \
    --chrome-flags="--headless" \
    --quiet

# Audit additional pages
echo "Auditing timeline page..."
lighthouse http://localhost:8000/timeline.html \
    --output html \
    --output-path lighthouse-timeline \
    --chrome-flags="--headless" \
    --quiet

echo "Auditing designers page..."  
lighthouse http://localhost:8000/designers.html \
    --output html \
    --output-path lighthouse-designers \
    --chrome-flags="--headless" \
    --quiet

echo "Auditing about page..."
lighthouse http://localhost:8000/about.html \
    --output html \
    --output-path lighthouse-about \
    --chrome-flags="--headless" \
    --quiet

# Kill server if we started it
if [ ! -z "$SERVER_PID" ]; then
    kill $SERVER_PID
fi

echo "✅ Lighthouse audit complete!"
echo "📊 Reports generated:"
echo "   - lighthouse-home.html"
echo "   - lighthouse-timeline.html" 
echo "   - lighthouse-designers.html"
echo "   - lighthouse-about.html"