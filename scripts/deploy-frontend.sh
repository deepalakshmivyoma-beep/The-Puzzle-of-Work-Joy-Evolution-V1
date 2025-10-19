#!/bin/bash

# Script to build and deploy frontend to S3
# Usage: ./scripts/deploy-frontend.sh your-frontend-bucket-name

if [ -z "$1" ]; then
    echo "Error: Frontend bucket name is required"
    echo "Usage: ./scripts/deploy-frontend.sh your-frontend-bucket-name"
    exit 1
fi

BUCKET_NAME=$1

echo "Building application..."
npm run build

if [ $? -ne 0 ]; then
    echo "Build failed!"
    exit 1
fi

echo "Deploying to s3://$BUCKET_NAME/"
aws s3 sync dist/ s3://$BUCKET_NAME/ --delete

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo ""
    echo "If you've enabled static website hosting, your site should be available at:"
    echo "http://$BUCKET_NAME.s3-website-us-east-1.amazonaws.com"
else
    echo "❌ Deployment failed!"
    exit 1
fi

