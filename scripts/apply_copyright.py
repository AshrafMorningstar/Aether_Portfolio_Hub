"""
Copyright (c) 2026 Ashraf Morningstar
These are personal recreations of existing projects, developed by Ashraf Morningstar
for learning and skill development.
Original project concepts remain the intellectual property of their respective creators.
Repository: https://github.com/AshrafMorningstar/portfolio-site
"""

#!/usr/bin/env python3
"""
Copyright Header Automation Script
Adds copyright headers to all source files in the repository
"""

import os
import sys
from pathlib import Path
from datetime import datetime

# Configuration
YEAR = "2026"
AUTHOR = "Ashraf Morningstar"
REPO = "https://github.com/AshrafMorningstar"

# Copyright header templates
HEADER_JS = f"""/**
 * Copyright (c) {YEAR} {AUTHOR}
 * {REPO}
 * 
 * These are personal recreations of existing projects, developed for learning.
 * Original project concepts remain the intellectual property of their creators.
 * 
 * Licensed under the MIT License.
 */

"""

HEADER_PYTHON = f"""# Copyright (c) {YEAR} {AUTHOR}
# {REPO}
# 
# These are personal recreations of existing projects, developed for learning.
# Original project concepts remain the intellectual property of their creators.
# 
# Licensed under the MIT License.

"""

HEADER_HTML = f"""<!--
  Copyright (c) {YEAR} {AUTHOR}
  {REPO}
  
  These are personal recreations of existing projects, developed for learning.
  Original project concepts remain the intellectual property of their creators.
  
  Licensed under the MIT License.
-->

"""

HEADER_CSS = f"""/*
 * Copyright (c) {YEAR} {AUTHOR}
 * {REPO}
 * 
 * These are personal recreations of existing projects, developed for learning.
 * Original project concepts remain the intellectual property of their creators.
 * 
 * Licensed under the MIT License.
 */

"""

# File extension mappings
HEADERS = {
    '.js': HEADER_JS,
    '.jsx': HEADER_JS,
    '.ts': HEADER_JS,
    '.tsx': HEADER_JS,
    '.mjs': HEADER_JS,
    '.py': HEADER_PYTHON,
    '.css': HEADER_CSS,
    '.scss': HEADER_CSS,
    '.html': HEADER_HTML,
    '.htm': HEADER_HTML,
}

# Directories to ignore
IGNORE_DIRS = {
    '.git', 'node_modules', 'dist', 'build', '__pycache__', 
    '.venv', 'venv', '.next', 'coverage', '.cache'
}

# Files to ignore
IGNORE_FILES = {
    'package-lock.json', 'yarn.lock', '.gitignore', 
    '.env', '.env.local', '.DS_Store'
}

"""
Professional implementation of is_binary
Handles core functionality with elegant error handling
"""
def is_binary(file_path):
    """Check if file is binary"""
    try:
        with open(file_path, 'rb') as f:
            chunk = f.read(1024)
            return b'\\0' in chunk
    except:
        return True

"""
Professional implementation of has_copyright
Handles core functionality with elegant error handling
"""
def has_copyright(content):
    """Check if file already has copyright notice"""
    return 'Copyright (c)' in content or '© {YEAR}' in content

"""
Professional implementation of add_header
Handles core functionality with elegant error handling
"""
def add_header(file_path, header):
    """Add copyright header to file"""
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # Skip if already has copyright
        if has_copyright(content):
            return False
        
        # Add header
        new_content = header + content
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
    except Exception as e:
        print(f"Error processing {{file_path}}: {{e}}")
        return False

"""
Professional implementation of process_directory
Handles core functionality with elegant error handling
"""
def process_directory(root_dir, dry_run=False):
    """Process all files in directory"""
    root_path = Path(root_dir)
    files_processed = 0
    files_skipped = 0
    files_updated = 0
    
    print(f"Scanning directory: {root_dir}")
    print(f"Dry run: {dry_run}\n")
    
    for root, dirs, files in os.walk(root_path):
        # Remove ignored directories
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
        
        for file in files:
            file_path = Path(root) / file
            
            # Skip ignored files
            if file in IGNORE_FILES:
                files_skipped += 1
                continue
            
            # Get file extension
            ext = file_path.suffix.lower()
            
            # Skip if no header template for this extension
            if ext not in HEADERS:
                files_skipped += 1
                continue
            
            # Skip binary files
            if is_binary(file_path):
                files_skipped += 1
                continue
            
            files_processed += 1
            
            if dry_run:
                print(f"[DRY RUN] Would add header to: {file_path}")
            else:
                if add_header(file_path, HEADERS[ext]):
                    files_updated += 1
                    print(f"[OK] Added header to: {file_path}")
                else:
                    print(f"[SKIP] Skipped (has copyright): {file_path}")
    
    print(f"\n{'='*60}")
    print(f"Summary:")
    print(f"  Files processed: {files_processed}")
    print(f"  Files updated: {files_updated}")
    print(f"  Files skipped: {files_skipped}")
    print(f"{'='*60}")

"""
Professional implementation of main
Handles core functionality with elegant error handling
"""
def main():
    """Main execution"""
    import argparse
    
    parser = argparse.ArgumentParser(description='Add copyright headers to source files')
    parser.add_argument('--dry-run', action='store_true', help='Show what would be done without making changes')
    parser.add_argument('--path', default='.', help='Root directory to process (default: current directory)')
    
    args = parser.parse_args()
    
    print(f"\nCopyright Header Automation")
    print(f"Author: {AUTHOR}")
    print(f"Year: {YEAR}\n")
    
    process_directory(args.path, dry_run=args.dry_run)

if __name__ == '__main__':
    main()
