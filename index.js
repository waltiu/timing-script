#!/usr/bin/env node

const argv = require("minimist")(process.argv.slice(2));
const { execSync } = require("child_process");
const name = argv.name || "Cost Time";
const shell= !argv.target.startsWith('npm')?`npm run ${argv.target}`:argv.target.replaceAll('-' ,' ')
console.log(`start timing（${name}）：`)
// 开始计时
console.time(shell);

if (!argv.target) {
  console.log("无脚本，计数退出！！！");
  return "";
}
// 脚本运行
const scriptProcess = () => {
  return new Promise((resolve) => {
    execSync(shell, { stdio: "inherit" });
    resolve();
  });
};

scriptProcess().then(() => {
  // 结束计时
  console.timeEnd(shell);
});
