#!/bin/zsh

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Load environment variables
if [ -f .env ]; then
    source .env
fi

# Generate timestamp
TIMESTAMP=$(date "+%Y%m%d_%H%M%S")
BACKUP_NAME="${BACKUP_PREFIX}${TIMESTAMP}"

# Create backup directory
BACKUP_PATH="${BACKUP_DIR}/${BACKUP_NAME}"
mkdir -p "$BACKUP_PATH"

# Function to create backup
create_backup() {
    echo "${YELLOW}Creating backup: $BACKUP_NAME${NC}"
    
    # Copy project files
    rsync -av --exclude 'node_modules' \
             --exclude '.next' \
             --exclude '.git' \
             --exclude 'backups' \
             "$PROJECT_ROOT/" "$BACKUP_PATH/"
    
    # Create backup manifest
    echo "Backup created: $TIMESTAMP" > "$BACKUP_PATH/backup_manifest.txt"
    echo "Source: $PROJECT_ROOT" >> "$BACKUP_PATH/backup_manifest.txt"
    
    echo "${GREEN}Backup completed successfully${NC}"
    echo "Location: $BACKUP_PATH"
}

# Main execution
create_backup 