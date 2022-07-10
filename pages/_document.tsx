import { Html, Head, Main, NextScript } from 'next/document';

// Headの内容を初期化するために、_document.tsxを作りました.
// Headの内容にkeyを書く、後ろのサイトに上書きさせます。

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
