# event-tester

ブラウザの Pointer / Mouse / Touch イベントの発火履歴をリアルタイムに表示するデバッグ用 Web アプリ。

🔗 デモ: https://f-mm7.github.io/event-tester/

## 概要

`window` に対して以下のイベントリスナーを登録し、それぞれ最新 20 件まで履歴を画面に表示します。タッチデバイス・マウス・スタイラスなど、入力デバイスごとにどのイベントがどの順番で発火するかを目視確認するために使用します。

| カテゴリ | 監視対象イベント |
|---|---|
| Pointer | `pointerdown` / `pointerup` / `pointermove` |
| Mouse | `mousedown` / `mouseup` / `mousemove` |
| Touch | `touchstart` / `touchend` / `touchmove` |

## 開発

```bash
npm install
npm run dev      # 開発サーバ
npm run build    # ビルド
npm run lint     # ESLint
npm run deploy   # gh-pages へデプロイ
```

## 技術スタック

React 19 / TypeScript / Vite / GitHub Pages
