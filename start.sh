#!/bin/bash

echo "📂 Current directory: $(pwd)"
echo "� Node version: $(node -v)"
echo "📦 NPM version: $(npm -v)"

echo "🚀 Starting Next.js dev server..."
# Run in background and log to file
npm run dev -- --turbo -H 0.0.0.0 > /home/user/server.log 2>&1 &
SERVER_PID=$!

echo "Server PID: $SERVER_PID"
echo "Waiting for server to start..."

# Tail the log file to stdout so we can see it in E2B logs
tail -f /home/user/server.log
