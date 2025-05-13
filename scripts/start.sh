#!/bin/zsh

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Project Configuration
PROJECT_ROOT=/Users/carculture/Projects/CarCulture
DEFAULT_PORT=3000
NODE_ENV=development

# Backup Configuration
BACKUP_DIR=/Users/carculture/Projects/backups
BACKUP_PREFIX=car_culture_backup_

# Development Settings
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_ENVIRONMENT=development

# Load environment variables if .env exists
if [ -f .env ]; then
    source .env
fi

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -p|--port)
            PORT="$2"
            shift 2
            ;;
        -e|--env)
            NODE_ENV="$2"
            shift 2
            ;;
        *)
            echo "${RED}Unknown option: $1${NC}"
            exit 1
            ;;
    esac
done

# Set defaults if not provided
PORT=${PORT:-$DEFAULT_PORT}
NODE_ENV=${NODE_ENV:-$DEFAULT_ENV}

# Function to check if port is available
check_port() {
    if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
        echo "${RED}Port $PORT is already in use${NC}"
        exit 1
    fi
}

# Function to start the development server
start_server() {
    echo "${GREEN}Starting development server on port $PORT...${NC}"
    echo "${YELLOW}Environment: $NODE_ENV${NC}"
    
    # Kill any existing node processes
    killall node 2>/dev/null || true
    
    # Start the server
    NODE_ENV=$NODE_ENV PORT=$PORT npm run dev
}

# Main execution
echo "${YELLOW}Checking port availability...${NC}"
check_port

echo "${YELLOW}Starting server...${NC}"
start_server 