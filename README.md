TinyPNGのJavaScript API-clientのデモ

# 使い方

srcディレクトリに最適化したい画像を配置して、

```
$ yarn
$ yarn run min
```

dest以下に圧縮ファイルが作成される

## API key

Provide `TINIFY_API_KEY` in the process environment, then run `npm run min`.
The script stops before reading or uploading images if the key is missing.
Do not hard-code API keys or commit local credential files.
