const getGitPath = require('../../git/getGitPath');

describe('git/getGitPath', () => {
  test('正确获取 git path', async () => {
    const gitPath = getGitPath();
    expect(gitPath).toBe('SporeUI/dev-utils');
  });
});
