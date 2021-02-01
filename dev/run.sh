#!/usr/bin/env bash 
IMAGE_NAME="${1:-darkphotonlanding}"
IMAGE_TAG="${2:-latest}"
docker run --rm -it --name dptest1 -p 2222:80 ${IMAGE_NAME}:${IMAGE_TAG}