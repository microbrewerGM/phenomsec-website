#!/bin/bash
# Phenom Security Phoenix Content Extraction Runner
# Securely processes network share data for website content

echo "🔥 Phenom Security Phoenix Content Extractor"
echo "=============================================="
echo "⚠️  SECURITY: All data will be anonymized"
echo "🛡️  Client confidentiality maintained"
echo ""

# Check if network share path is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <network_share_path>"
    echo "Example: $0 /Volumes/NetworkShare"
    echo ""
    echo "📁 Common network share paths:"
    echo "   macOS: /Volumes/ShareName"
    echo "   Linux: /mnt/sharename"
    echo "   SMB: /Volumes/servername/sharename"
    exit 1
fi

SHARE_PATH="$1"
OUTPUT_DIR="./extracted_content"
WEBSITE_SRC="./src/app"

echo "📁 Network share: $SHARE_PATH"
echo "📄 Output directory: $OUTPUT_DIR"
echo ""

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Run content extraction
echo "🔍 Phase 1: Content extraction and anonymization..."
python3 scripts/content-extractor.py "$SHARE_PATH" "$OUTPUT_DIR"

if [ $? -ne 0 ]; then
    echo "❌ Content extraction failed"
    exit 1
fi

echo ""
echo "✅ Phoenix content extraction complete!"
echo "🚀 Check extracted_content/ directory for anonymized data"
echo "📊 Ready to build established enterprise website"
echo ""
echo "Next steps:"
echo "1. Review generated content in $OUTPUT_DIR"
echo "2. Integrate into website components manually"
echo "3. Test website locally: npm run dev"
echo "4. Deploy to production: npm run build && vercel --prod"