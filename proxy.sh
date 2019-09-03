#!/bin/bash

docker run --rm --name dev-nginx -p 80:80 --net="host" -v $PWD/proxy/nginx.conf:/etc/nginx/nginx.conf:ro  nginx:1.17-alpine

