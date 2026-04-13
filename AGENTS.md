# 開発コマンド

```bash
# 開発サーバー起動
bun dev

# ビルド (TypeScriptコンパイル + Viteビルド)
bun run build

# 型チェックのみ
bun run typecheck

# リントチェック
bun run lint

# フォーマット + unsafe自動修正
bun run format
```

# アーキテクチャ

## 技術スタック
- **フレームワーク**: React 19 + Vite
- **ルーティング**: TanStack Router (ファイルベースルーティング)
- **スタイリング**: Tailwind CSS v4
- **リンター/フォーマッター**: Biome
- **コンテンツ**: MDX
- **デプロイ**: GitHub Pages (GitHub Actions)

## ディレクトリ構造
```
src/
├── routes/          # ファイルベースルーティング
│   ├── __root.tsx   # ルートレイアウト
│   ├── index.tsx    # ホーム (/)
│   ├── about.tsx    # 自己紹介 (/about)
│   ├── contact.tsx  # 連絡先 (/contact)
│   ├── links.tsx    # リンク集 (/links)
│   ├── portfolio.tsx # ポートフォリオ (/portfolio)
│   └── blog/
│       ├── index.tsx   # ブログ一覧 (/blog)
│       └── $slug.tsx   # ブログ記事 (/blog/:slug)
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

## パスエイリアス
- `@/` → `src/`
- `@data/` → `data/`
- `@content/` → `content/`

## ルーティング
TanStack Routerは `src/routes/` 配下のファイル構造からルートを自動生成する。
- `routeTree.gen.ts` は自動生成されるため編集不可
- 動的ルートは `$param.tsx` 形式

## ブログ記事の追加
1. `content/blog/` に `slug-name.mdx` を作成
2. frontmatter に `title` と `date` を設定
3. MDXコンテンツは `import.meta.glob` で動的にインポートされる
