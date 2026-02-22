/**
 * @description ブログ記事のフロントマター
 * @property title - 記事タイトル
 * @property date - 公開日
 * @property description - 記事の概要 @optional
 */
export interface PostFrontmatter {
  title: string
  date: string
  description?: string
}

declare module '*.mdx' {
  import type { ComponentType } from 'react'

  export const frontmatter: PostFrontmatter

  const MDXComponent: ComponentType
  export default MDXComponent
}
