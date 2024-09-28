# Contributing to Interview Prep

We use a simplified Git Flow process for managing changes to this project. Here's a quick guide on how to contribute:

## Git Flow Overview

1. `main` branch: Represents the official release history
2. `develop` branch: Integration branch for features
3. Feature branches: Used for developing new features or fixes

## How to Contribute

1. Fork the Repository
   - Visit the project repository on GitHub and click the "Fork" button

2. Clone Your Fork
   ```bash
   git clone https://github.com/your-username/interview-prep.git
   cd interview-prep
   ```

3. Set Up Remotes
   ```bash
   git remote add upstream https://github.com/original-org/interview-prep.git
   ```

4. Create a Feature Branch
   ```bash
   git checkout develop
   git pull upstream develop
   git checkout -b feature/your-feature-name
   ```

5. Make Your Changes
   - Develop your feature or fix
   - Commit your changes with clear, concise commit messages

6. Push Your Changes
   ```bash
   git push origin feature/your-feature-name
   ```

7. Create a Pull Request
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your feature branch and set the base branch to `develop`
   - Fill in the PR template with details about your changes

8. Code Review
   - Wait for maintainers to review your PR
   - Make any requested changes and push them to your feature branch

9. Merge
   - Once approved, a maintainer will merge your PR into `develop`

10. Sync Your Fork (after merge)
    ```bash
    git checkout develop
    git pull upstream develop
    git push origin develop
    ```

## Best Practices

- Keep your PRs focused on a single feature or fix
- Write clear commit messages
- Update documentation if you change functionality
- Add tests for new features
- Ensure your code passes all existing tests
- Follow the project's code style and conventions

## Questions?

If you have any questions about contributing, feel free to open an issue for discussion.

Thank you for contributing to Interview Prep!