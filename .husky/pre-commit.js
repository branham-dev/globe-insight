// .husky/pre-commit.js
import { execSync } from 'child_process';

try {
  execSync('npx lint-staged', { stdio: 'inherit' });
} catch (error) {
  process.exit(1); // Exit with error if lint-staged fails
}