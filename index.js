const fs = require('fs');
const tinify = require('tinify');
tinify.key = (process.env.TINIFY_API_KEY || '').trim();
if (!tinify.key) {
  throw new Error('Set TINIFY_API_KEY before running this script');
}

const srcDir = './src/';
const destDir = './dest/';
const targetFileType = /.*\.(png|PNG|jpeg|jpg|JPG|JPEG)$/;

const optimizeImage = async function (file) {
  const srcFile = srcDir + file;
  const destFile = destDir + file;

  // 最適化処理
  await tinify.fromFile(srcFile).toFile(destFile);

  // log
  console.log(`${file}  => ${Math.round(
      fs.statSync(destFile).size / fs.statSync(srcFile).size * 100)} %`);
};

fs.readdir(srcDir, (err, files) => {
  // 対象のファイルに対して最適化を実行
  files.filter(file => file.match(targetFileType)).forEach(file => {
    optimizeImage(file)
  })
});

