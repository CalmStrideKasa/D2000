# D2000 Passage Master

英語パッセージ暗記アプリ。D2000対応の7トピックを6段階の難易度で練習できます。

## 使い方

1. トピックを選ぶ
2. Lv1（全文読む）から開始
3. 正解率80%以上で次のレベルが解放
4. Lv6（完全暗唱）を目指す

## ファイル構成

| ファイル | 内容 |
|---|---|
| `index.html` | アプリ本体 |
| `data.js` | 問題データ（単語解説含む） |
| `contents.md` | 原文テキスト（参照用） |

## 文章を追加する方法

`data.js` の `TOPICS` 配列に以下の形式で追加：

```javascript
{
  id: "topic_id",
  title: "Topic Title",
  sentences: [
    {
      id: "t1",
      text: "The full sentence text here.",
      glossary: [
        { word: "difficult word", ja: "日本語訳", note: "解説" }
      ]
    }
  ]
}
```

## GitHub Pages URL

https://calmstridekasa.github.io/D2000/
