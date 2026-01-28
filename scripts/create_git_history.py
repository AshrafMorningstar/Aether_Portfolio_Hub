#!/usr/bin/env python3
#
# Copyright (c) 2026 Ashraf Morningstar
# These are personal recreations of existing projects, developed by Ashraf Morningstar
# for learning and skill development.
# Original project concepts remain the intellectual property of their respective creators.
# Repository: https://github.com/AshrafMorningstar
#
"""
Git History Generator - Creates backdated commits
Generates realistic commit history from January 2024 to present
"""

import os
import sys
import random
import subprocess
from datetime import datetime, timedelta
from pathlib import Path

# Configuration
START_DATE = datetime(2024, 1, 1)
END_DATE = datetime.now()
TARGET_COMMITS = 300
AUTHOR_NAME = "Ashraf Morningstar"
AUTHOR_EMAIL = "ashrafmorningstar@gmail.com"

# Commit message templates
COMMIT_TYPES = {
    'feat': [
        'Add {feature} component',
        'Implement {feature} functionality',
        'Create {feature} module',
        'Build {feature} system',
    ],
    'fix': [
        'Fix {issue} bug',
        'Resolve {issue} issue',
        'Patch {issue} error',
        'Correct {issue} problem',
    ],
    'refactor': [
        'Refactor {component} code',
        'Improve {component} structure',
        'Optimize {component} performance',
        'Clean up {component} implementation',
    ],
    'docs': [
        'Update {doc} documentation',
        'Add {doc} guide',
        'Improve {doc} README',
        'Document {doc} feature',
    ],
    'style': [
        'Update {element} styling',
        'Improve {element} UI',
        'Polish {element} design',
        'Enhance {element} appearance',
    ],
    'test': [
        'Add {test} tests',
        'Update {test} test suite',
        'Improve {test} coverage',
    ],
    'chore': [
        'Update dependencies',
        'Configure build system',
        'Update project config',
        'Maintain codebase',
    ]
}

FEATURES = [
    'navigation', 'hero section', 'projects showcase', 'skills display',
    'contact form', 'about section', 'blog preview', 'footer',
    'dark mode', 'responsive design', 'SEO optimization', 'analytics',
    'authentication', 'user profile', 'dashboard', 'settings'
]

COMPONENTS = [
    'navbar', 'footer', 'card', 'button', 'layout', 'form',
    'modal', 'sidebar', 'header', 'section'
]

ISSUES = [
    'navigation', 'routing', 'styling', 'responsiveness', 'performance',
    'accessibility', 'validation', 'rendering'
]

DOCS = [
    'API', 'setup', 'deployment', 'contributing', 'architecture'
]

ELEMENTS = [
    'buttons', 'cards', 'forms', 'typography', 'colors', 'spacing'
]

TESTS = [
    'unit', 'integration', 'component', 'E2E'
]

def generate_commit_message():
    """Generate realistic commit message"""
    commit_type = random.choice(list(COMMIT_TYPES.keys()))
    template = random.choice(COMMIT_TYPES[commit_type])
    
    replacements = {
        'feature': random.choice(FEATURES),
        'component': random.choice(COMPONENTS),
        'issue': random.choice(ISSUES),
        'doc': random.choice(DOCS),
        'element': random.choice(ELEMENTS),
        'test': random.choice(TESTS),
    }
    
    message = template.format(**replacements)
    return f"{commit_type}: {message}"

def generate_commit_dates(start, end, count):
    """Generate random commit dates between start and end"""
    delta = end - start
    dates = []
    
    for i in range(count):
        random_days = random.randint(0, delta.days)
        random_seconds = random.randint(0, 86400)
        commit_date = start + timedelta(days=random_days, seconds=random_seconds)
        dates.append(commit_date)
    
    return sorted(dates)

def make_commit(date, message):
    """Create a commit with specific date"""
    date_str = date.strftime('%Y-%m-%d %H:%M:%S')
    
    env = os.environ.copy()
    env['GIT_AUTHOR_DATE'] = date_str
    env['GIT_COMMITTER_DATE'] = date_str
    env['GIT_AUTHOR_NAME'] = AUTHOR_NAME
    env['GIT_AUTHOR_EMAIL'] = AUTHOR_EMAIL
    env['GIT_COMMITTER_NAME'] = AUTHOR_NAME
    env['GIT_COMMITTER_EMAIL'] = AUTHOR_EMAIL
    
    # Make a small change to a file
    dummy_file = Path('.git-history-marker')
    with open(dummy_file, 'a') as f:
        f.write(f"{date_str}\n")
    
    subprocess.run(['git', 'add', '.'], env=env, check=True)
    subprocess.run(['git', 'commit', '-m', message], env=env, check=True)

def create_git_history(repo_path):
    """Create full git history"""
    os.chdir(repo_path)
    
    # Initialize git if not already
    if not Path('.git').exists():
        print("Initializing Git repository...")
        subprocess.run(['git', 'init'], check=True)
        subprocess.run(['git', 'config', 'user.name', AUTHOR_NAME], check=True)
        subprocess.run(['git', 'config', 'user.email', AUTHOR_EMAIL], check=True)
    
    print(f"\nGenerating {TARGET_COMMITS} commits from {START_DATE.date()} to {END_DATE.date()}...")
    
    # Generate commit dates
    dates = generate_commit_dates(START_DATE, END_DATE, TARGET_COMMITS)
    
    # Create commits
    for i, date in enumerate(dates, 1):
        message = generate_commit_message()
        try:
            make_commit(date, message)
            if i % 50 == 0:
                print(f"Created {i}/{TARGET_COMMITS} commits...")
        except Exception as e:
            print(f"Error creating commit {i}: {e}")
    
    print(f"\n[OK] Successfully created {TARGET_COMMITS} commits!")
    print(f"\nCommit history summary:")
    subprocess.run(['git', 'log', '--oneline', '--graph', '-10'])

def main():
    """Main execution"""
    import argparse
    
    # Use global TARGET_COMMITS variable
    global TARGET_COMMITS
    
    parser = argparse.ArgumentParser(description='Generate backdated Git history')
    parser.add_argument('--path', default='.', help='Repository path (default: current directory)')
    parser.add_argument('--commits', type=int, default=TARGET_COMMITS, help=f'Number of commits (default: {TARGET_COMMITS})')
    
    args = parser.parse_args()
    
    TARGET_COMMITS = args.commits
    
    print("\n" + "="*60)
    print("Git History Generator")
    print("="*60)
    print(f"Repository: {args.path}")
    print(f"Commits: {TARGET_COMMITS}")
    print(f"Date range: {START_DATE.date()} to {END_DATE.date()}")
    print(f"Author: {AUTHOR_NAME} <{AUTHOR_EMAIL}>")
    print("="*60 + "\n")
    
    create_git_history(args.path)

if __name__ == '__main__':
    main()
