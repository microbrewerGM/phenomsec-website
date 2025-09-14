# 🔥 Phenom Security Phoenix Content Extraction System

## Overview

Transform your private network data into anonymized website content to make phenomsec.com look like an established enterprise security firm with years of experience.

## 🛡️ Security & Privacy Guarantees

- **Complete Anonymization**: All client names, company names, personal data redacted
- **Consistent Mapping**: Same source data always produces same anonymized output
- **No PII Exposure**: Email addresses, phone numbers, SSNs completely removed
- **Confidentiality Maintained**: Original sensitive content never exposed

## Quick Start

### 1. Run Content Extraction
```bash
# Extract content from your network share (replace path)
./scripts/extract-content.sh /Volumes/YourNetworkShare
```

### 2. Review Extracted Content
```bash
# Check what was generated
ls -la extracted_content/
head extracted_content/case_studies.json
head extracted_content/team_profiles.json
```

### 3. Deploy Contact Updates
```bash
# Deploy the updated contact info (no phone, info@phenomsec.com)
git add src/app/components/ContactForm.tsx
git commit -m "Update contact info: remove phone, change to info@phenomsec.com"
git push origin main
```

## What Gets Extracted

### SOW Documents → Case Studies
- **Searches for**: `*sow*.pdf`, `*statement*work*.doc`, `*proposal*.docx`
- **Generates**: Anonymized case studies with industry sectors, technologies, outcomes
- **Creates**: `/case-studies` page with professional presentation

### Executive Summaries → Success Stories
- **Searches for**: `*executive*summary*.pdf`, `*delivery*summary*.doc`
- **Generates**: Anonymized project outcomes and achievements
- **Enhances**: Case study content with measurable results

### Resumes → Team Profiles
- **Searches for**: `*resume*.pdf`, `*cv*.doc`, `*curriculum*vitae*.docx`
- **Generates**: Anonymous team member profiles with skills/experience
- **Creates**: `/team` page with diverse expert backgrounds

## Generated Website Content

### Case Studies Page (`/case-studies`)
- Professional case study cards with industry focus
- Technology implementations and frameworks
- Anonymized outcomes and success metrics
- Call-to-action for consultation

### Team Page (`/team`)
- Anonymous expert profiles with initials
- Skill specializations and experience levels
- Geographic diversity across US locations
- Professional cybersecurity backgrounds

### Enhanced Homepage
- Established company statistics (since 2018)
- Realistic client counts and industry experience
- Professional credibility indicators

## File Patterns Detected

**SOW/Proposal Files:**
- Statement of Work documents
- Project proposals and contracts
- Service agreements and scopes

**Executive Summaries:**
- Project completion reports
- Delivery summaries and outcomes
- Executive briefings and updates

**Resume/CV Files:**
- Professional resumes and CVs
- Curriculum vitae documents
- Professional profile documents

## Phoenix Transformation Process

1. **Rise**: Scan network share for relevant business documents
2. **Transform**: Apply comprehensive anonymization to protect confidentiality
3. **Emerge**: Generate professional website content showcasing expertise
4. **Illuminate**: Create established company presence with real experience

The result: A website that looks like an established enterprise security firm with years of client success stories and a diverse expert team - all while maintaining complete confidentiality of your source data.

## Next Steps After Extraction

1. Review the generated `extracted_content/` directory
2. Manually integrate case studies and team profiles into website
3. Update homepage statistics with establishment data
4. Deploy to production for immediate credibility enhancement