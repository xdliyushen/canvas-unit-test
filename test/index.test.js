const fs = require('fs');
const path = require('path');

// 对比本地静态图片
it('works reading an image from the local file system', () => {
  const imageAtTestPath = path.resolve(__dirname, '../assets', 'bunny.png');

  const imageAtTest = fs.readFileSync(imageAtTestPath);

  expect(imageAtTest).toMatchImageSnapshot();
});

// pixi 渲染结果
it('pixi render', async () => {
  // 由于 jest-puppeteer 已经帮我们建好了一个 page, 因此无需调用 browser.newPage() 来创建新 page
  await page.goto('http://localhost:9000');
  await page.waitForSelector('canvas');

  const image = await page.screenshot();
  expect(image).toMatchImageSnapshot();
});
