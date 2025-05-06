import { execSync } from 'child_process';

try {
  execSync('npx lint-staged', { stdio: 'inherit' });
} catch (error) {
  if (error.message.includes('ESLint')) {
    console.error('ESLint configuration error:', error.message);
  } else {
    console.error('Pre-commit hook failed:', error.message);
  }
  process.exit(1); // Exit with error if lint-staged fails
}
