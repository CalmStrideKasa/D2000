# Web学習アプリ 作成マニュアル（Claude Code用）

このファイルをClaude Codeに読み込ませた上で、「〇〇の内容でアプリを作って」と指示すれば、
以下と同じ手順でアプリを再現できます。

---

## 作成するもの

- **`index.html`** ── アプリ本体（CSS・JS込みの単一ファイル）
- **`data.js`** ── コンテンツデータ（index.htmlから `<script src="data.js">` で読み込む）

---

## index.html の設計原則

### 基本方針
- モバイルファースト（iPhoneのSafariで快適に使えること）
- 外部ライブラリ・CDN不使用（オフラインでも動作）
- 白を基調としたクリーンなデザイン
- `localStorage` でデータを永続化

### meta タグ（必須）
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

### CSS変数（デザイントークン）
```css
:root {
  --bg: #f0f2f5;
  --surface: #ffffff;
  --surface2: #f8f9fa;
  --border: #e5e7eb;
  --text: #1a1a2e;
  --text2: #6b7280;
  --accent: #4f46e5;
  --accent2: #4338ca;
  --green: #059669;
  --red: #dc2626;
  --yellow: #d97706;
  --radius: 14px;
}
```

### iPhone向けUXルール
- タップターゲットは最低44px
- `-webkit-tap-highlight-color: transparent` を全要素に設定
- `-webkit-user-select: none` をボタン類に設定
- `overflow: hidden` でバウンススクロールを防ぐ
- `height: 100dvh` でアドレスバーを考慮した全画面

---

## data.js の設計

コンテンツを配列で定義し、`index.html` から参照する。
ファイルを分けることで、コンテンツの追加・修正がしやすくなる。

### 例（英語学習アプリの場合）
```javascript
const TOPICS = [
  {
    id: "unique_id",        // 英数字・アンダースコアのみ
    title: "表示タイトル",
    sentences: [
      {
        id: "s1",
        text: "The full English sentence here.",
        glossary: [         // 省略可（[]でOK）
          { word: "difficult", ja: "難しい", note: "解説テキスト" }
        ]
      }
    ]
  }
];
```

---

## 標準的な機能セット

### 学習系アプリ
| 機能 | 実装方法 |
|---|---|
| 進捗保存 | `localStorage.setItem(KEY, JSON.stringify(data))` |
| 複数画面 | `.screen { display:none }` / `.screen.active { display:flex }` |
| 単語ポップアップ | `position:fixed` のオーバーレイ |
| 達成アニメーション | CSS `@keyframes` + JSで動的にDOM追加 |

### UI部品テンプレート
```css
/* カード */
.card {
  background: var(--surface);
  border-radius: var(--radius);
  padding: 18px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.07);
}

/* プライマリボタン */
.btn-primary {
  width: 100%;
  padding: 16px;
  border-radius: var(--radius);
  border: none;
  background: var(--accent);
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
}
```

---

## GitHubへの公開手順（GitHub Pages）

### 初回セットアップ

対象フォルダで以下を実行：
```powershell
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/ユーザー名/リポジトリ名.git
git push -u origin main
```

### GitHub Pages の有効化
1. GitHubのリポジトリページ → **Settings**
2. 左メニュー **Pages**
3. Source: **Deploy from a branch**
4. Branch: `main` / `/ (root)` → **Save**
5. 数分後に `https://ユーザー名.github.io/リポジトリ名/` で公開

### iPhoneからアクセス
- 上記URLをSafariで開く
- ホーム画面に追加（共有 → 「ホーム画面に追加」）でアプリ風に使える

### コンテンツ追加後の更新
```powershell
git add .
git commit -m "add new content"
git push
```
pushから数秒〜1分でサイトに反映される。

---

## ファイル構成チェックリスト

```
プロジェクトフォルダ/
├── index.html      ← アプリ本体（必須）
├── data.js         ← コンテンツデータ（必須）
├── README.md       ← GitHubリポジトリの説明（推奨）
└── contents.md     ← 原文・素材（参照用、任意）
```

---

## Claude Codeへの指示テンプレート

このファイルを読み込んだ上で、以下のように指示する：

```
webapp_template_prompt.md の手順に従って、以下の内容でアプリを作って。

【アプリの目的】
〇〇を暗記・練習するためのWebアプリ

【コンテンツ】
（ここに覚えたい文章・単語・問題などを貼る）

【特記事項】
- 保存先: c:\Users\takuto\OneDrive\Desktop\Git\（フォルダ名）\
- GitHubリポジトリ: https://github.com/CalmStrideKasa/（リポジトリ名）.git
```
