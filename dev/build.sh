#!/usr/bin/env bash 
DOCKERFILE_NAME="${1:-Dockerfile}"
DOCKERFILE_PATH="${2:-.}"
docker build --pull --rm -f $DOCKERFILE_NAME -t darkphotonlanding:latest $DOCKERFILE_PATH