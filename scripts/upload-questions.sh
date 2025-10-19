#!/bin/bash

# Script to upload sample questions to S3
# Usage: ./scripts/upload-questions.sh your-bucket-name

if [ -z "$1" ]; then
    echo "Error: Bucket name is required"
    echo "Usage: ./scripts/upload-questions.sh your-bucket-name"
    exit 1
fi

BUCKET_NAME=$1

echo "Uploading sample questions to s3://$BUCKET_NAME/questions/"

aws s3 cp sample-questions/ s3://$BUCKET_NAME/questions/ \
    --recursive \
    --exclude "*.md" \
    --exclude "README.md"

echo "Done! Uploaded the following files:"
aws s3 ls s3://$BUCKET_NAME/questions/

