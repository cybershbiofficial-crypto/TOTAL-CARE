import { execSync } from 'child_process';

const opts = {
  cwd: 'c:\\Users\\Shabi\\Desktop\\TOTAL CARE [Development]',
  encoding: 'utf8',
  shell: 'cmd.exe',
  stdio: ['pipe', 'pipe', 'pipe']
};

try {
  console.log('Adding file...');
  console.log(execSync('git add src/components/site/Nav.tsx', opts));
  console.log('Committing...');
  console.log(execSync('git commit -m "Restore original header nav links"', opts));
  console.log('Pushing...');
  console.log(execSync('git push origin master', opts));
  console.log('Done!');
} catch (e) {
  console.log('stdout:', e.stdout);
  console.log('stderr:', e.stderr);
  console.log('error:', e.message);
}
