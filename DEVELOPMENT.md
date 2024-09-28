# Development Guide

This document outlines the development practices and repository structure for the Interview Prep project.

## Repository Structure

Our project uses a simplified Git Flow with the following main branches:

- `main`: The primary branch representing the official release history
- `develop`: The integration branch for features

## Branching Strategy

1. Feature Development
   - Create feature branches from `develop`
   - Name format: `feature/your-feature-name`
   - Merge back into `develop` via Pull Request

2. Releases
   - Merge `develop` into `main` for releases
   - Tag releases on `main` with version numbers

3. Hotfixes
   - For urgent fixes, branch directly from `main`
   - Merge back into both `main` and `develop`

## Development Workflow

1. Ensure you're on the `develop` branch and it's up-to-date:
   ```bash
   git checkout develop
   git pull origin develop
   ```

2. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes, commit them, and push to your feature branch:
   ```bash
   git push -u origin feature/your-feature-name
   ```

4. Create a Pull Request on GitHub to merge your feature into `develop`

5. After the PR is merged, update your local `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   ```

6. Delete your local feature branch:
   ```bash
   git branch -d feature/your-feature-name
   ```

## Release Process

1. Merge `develop` into `main`:
   ```bash
   git checkout main
   git merge --no-ff develop
   git push origin main
   ```

2. Tag the release:
   ```bash
   git tag -a v1.0.0 -m "Release version 1.0.0"
   git push origin v1.0.0
   ```

## Maintaining the Repository

- Regularly prune merged feature branches
- Keep `develop` up-to-date with `main` after hotfixes
- Ensure all team members understand and follow this workflow

## Detailed Example: Adding a New Feature

Here's a step-by-step example of how to add a new feature following our Git Flow:

1. Ensure your local `main` and `develop` branches are up to date:
   ```bash
   git checkout main
   git pull origin main
   git checkout develop
   git pull origin develop
   ```

2. Create a new feature branch:
   ```bash
   git checkout -b feature/add-new-feature
   ```

3. Make your changes, commit them:
   ```bash
   # Make changes to files
   git add .
   git commit -m "Add new feature"
   ```

4. Push the feature branch to the remote repository:
   ```bash
   git push -u origin feature/add-new-feature
   ```

5. Go to GitHub and create a Pull Request from `feature/add-new-feature` to `develop`.

6. Review and merge the Pull Request on GitHub.

7. Update your local `develop` branch:
   ```bash
   git checkout develop
   git pull origin develop
   ```

8. Merge `develop` into `main` for a release:
   ```bash
   git checkout main
   git merge --no-ff develop
   git push origin main
   ```

9. (Optional) Create a release tag:
   ```bash
   git tag -a v1.1.0 -m "Add new feature"
   git push origin v1.1.0
   ```

10. Clean up by deleting the feature branch:
    ```bash
    git branch -d feature/add-new-feature
    git push origin --delete feature/add-new-feature
    ```

This process ensures that new features are properly integrated into both the `develop` and `main` branches, following our established workflow.

For more detailed contribution guidelines for external contributors, please refer to CONTRIBUTING.md.

## Branch Protection and Maintenance

To maintain the integrity of our development process and prevent accidental loss of work, we implement the following practices:

1. Branch Protection Rules:
   - Both `main` and `develop` branches are protected on GitHub.
   - Direct pushes to these branches are not allowed.
   - All changes must go through Pull Requests.
   - Pull Requests require at least one review before merging.

2. Preserving the `develop` Branch:
   - The `develop` branch is crucial to our Git Flow process.
   - Never delete the `develop` branch, either locally or on GitHub.
   - If `develop` is accidentally deleted:
     a. Recreate it from the latest `main`: `git checkout -b develop main`
     b. Push it to GitHub: `git push -u origin develop`
     c. Re-establish branch protection rules on GitHub

3. Regular Maintenance:
   - Keep your local branches up to date: `git fetch --all --prune`
   - Regularly prune merged feature branches.
   - Ensure `develop` is always up to date with `main` after hotfixes.

Remember: Our branching strategy is key to smooth collaboration. When in doubt about Git operations, especially those affecting `main` or `develop`, consult with the team lead or refer to this guide.