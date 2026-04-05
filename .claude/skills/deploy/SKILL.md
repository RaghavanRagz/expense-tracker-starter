Deploy to staging. Follow these steps in order, stopping if any step fails:

1. Run all tests (`npm test`). If tests fail, report the failures and stop.
2. Run the linter (`npm run lint`). If linting fails, report the errors and stop.
3. Build the production bundle (`npm run build`). If the build fails, report the errors and stop.
4. Push the current branch to the `staging` remote branch (`git push origin HEAD:staging`). Confirm with the user before pushing.

Report the result of each step as you go.
