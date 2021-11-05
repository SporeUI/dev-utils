const $fs = require('fs');

/**
 * 获取 git 路径
 * @return {String} git path
 * @example
 * console.info(getGitPath());
 * // SporeUI/dev-utils
 */
function getGitPath() {
  let gitPath = '';
  const gitConfig = $fs.readFileSync('.git/config', 'utf-8').trim();
  const match = (/\[remote\s*"origin"\]([^[\]]+)\[/).exec(gitConfig);
  let info = '';
  const gitInfo = {};
  if (match[1]) {
    info = match[1].trim();
  }
  if (info) {
    info.split(/[\r\n]+/).forEach((str) => {
      const line = str.trim();
      const pair = line.split('=');
      const key = pair[0].trim();
      const val = pair[1].trim();
      gitInfo[key] = val;
    });
  }
  if (gitInfo.url) {
    let { url } = gitInfo;
    url = url.replace(/http[:/\w.]+.com\//, '');
    url = url.replace(/git@[:/\w.]+com:/, '');
    url = url.replace(/\.git$/, '');
    gitPath = url;
  }
  return gitPath;
}

module.exports = getGitPath;
