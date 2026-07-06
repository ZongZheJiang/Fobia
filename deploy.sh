#!/bin/bash

# Deployment script for fobia-web Cloud Run
# Project: fobia-web
# Deploys the Next.js app to Cloud Run

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ -f "$SCRIPT_DIR/.env" ]; then
  set -a
  . "$SCRIPT_DIR/.env"
  set +a
fi

# Configuration
SERVICE_NAME="${SERVICE_NAME:-fobia-web}"
REGION="${REGION:-us-central1}"
PROJECT_ID="${PROJECT_ID:?PROJECT_ID must be set}"

echo "Deploying to Cloud Run..."
echo "Project: $PROJECT_ID"
echo "Service: $SERVICE_NAME"
echo "Region: $REGION"
echo ""

gcloud config set project "$PROJECT_ID"

echo "Building and deploying to Cloud Run..."
gcloud run deploy "$SERVICE_NAME" \
  --source "$SCRIPT_DIR" \
  --region "$REGION" \
  --allow-unauthenticated \
  --memory 1Gi \
  --timeout 300s \
  --labels environment=production \
  --set-env-vars NODE_ENV=production \
  --set-env-vars GATEWAY_SECRET="${GATEWAY_SECRET:-}" \

echo ""
echo "Deployment complete!"
echo ""
echo "Service URL:"
gcloud run services describe "$SERVICE_NAME" --region "$REGION" --format 'value(status.url)'
