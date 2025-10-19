#!/bin/bash

# Script to set up S3 bucket with proper configuration
# Usage: ./scripts/setup-s3.sh your-bucket-name

if [ -z "$1" ]; then
    echo "Error: Bucket name is required"
    echo "Usage: ./scripts/setup-s3.sh your-bucket-name"
    exit 1
fi

BUCKET_NAME=$1
REGION=${2:-us-east-1}

echo "Creating S3 bucket: $BUCKET_NAME in region: $REGION"

# Create bucket
if [ "$REGION" = "us-east-1" ]; then
    aws s3api create-bucket --bucket $BUCKET_NAME
else
    aws s3api create-bucket --bucket $BUCKET_NAME --region $REGION \
        --create-bucket-configuration LocationConstraint=$REGION
fi

# Apply CORS configuration
echo "Applying CORS configuration..."
aws s3api put-bucket-cors --bucket $BUCKET_NAME --cors-configuration file://cors.json

# Create folders
echo "Creating folder structure..."
aws s3api put-object --bucket $BUCKET_NAME --key questions/
aws s3api put-object --bucket $BUCKET_NAME --key scores/

echo "✅ S3 bucket setup complete!"
echo ""
echo "Next steps:"
echo "1. Upload sample questions: ./scripts/upload-questions.sh $BUCKET_NAME"
echo "2. Update your .env file with:"
echo "   VITE_AWS_BUCKET_NAME=$BUCKET_NAME"
echo "   VITE_AWS_REGION=$REGION"

