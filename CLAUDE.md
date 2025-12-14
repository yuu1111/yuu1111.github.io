# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 開発コマンド

```bash
# 開発サーバー起動
bun dev

# ビルド (TypeScriptコンパイル + Viteビルド)
bun run build

# リント・フォーマットチェック
bun run lint

# フォーマット修正
bun run format

# リント + フォーマット自動修正
bun run check
```

## アーキテクチャ

### 技術スタック
- **フレームワーク**: React 19 + Vite
- **ルーティング**: TanStack Router (ファイルベースルーティング)
- **スタイリング**: Tailwind CSS v4
- **リンター/フォーマッター**: Biome
- **コンテンツ**: MDX
- **デプロイ**: GitHub Pages (GitHub Actions)

### ディレクトリ構造
```
src/
├── routes/          # ファイルベースルーティング
│   ├── __root.tsx   # ルートレイアウト
│   ├── index.tsx    # ホーム (/)
│   ├── blog/
│   │   ├── index.tsx   # ブログ一覧 (/blog)
│   │   └── $slug.tsx   # ブログ記事 (/blog/:slug)
│   └── ...          # 他のページ
├── components/
│   ├── ui/          # 共通UIコンポーネント (shadcn/uiスタイル)
│   └── Navigation.tsx
└── types/           # 型定義

data/                # JSONデータファイル
├── projects.json    # プロジェクト一覧
├── links.json       # SNSリンク
└── contacts.json    # 連絡先

content/
└── blog/            # MDXブログ記事 (frontmatter: title, date)
```

### パスエイリアス
- `@/` → `src/`
- `@data/` → `data/`
- `@content/` → `content/`

### ルーティング
TanStack Routerは `src/routes/` 配下のファイル構造からルートを自動生成する。
- `routeTree.gen.ts` は自動生成されるため編集不可
- 動的ルートは `$param.tsx` 形式

### ブログ記事の追加
1. `content/blog/` に `slug-name.mdx` を作成
2. frontmatter に `title` と `date` を設定
3. MDXコンテンツは `import.meta.glob` で動的にインポートされる

## コード規約

### Biome設定
- インデント: スペース2つ
- 行幅: 100文字
- クォート: シングルクォート
- セミコロン: 必要な場合のみ
