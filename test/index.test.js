const fs = require('fs');
const path = require('path');

// 对比本地静态图片
it('works reading an image from the local file system', () => {
  const imageAtTestPath = path.resolve(__dirname, '../assets', 'bunny.png');

  const imageAtTest = fs.readFileSync(imageAtTestPath);

  expect(imageAtTest).toMatchImageSnapshot();
});
