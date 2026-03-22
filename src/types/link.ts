/**
 * @description 外部リンク情報
 * @property name - リンクの表示名
 * @property url - リンクURL
 * @property description - リンクの説明 @optional
 * @property username - サービス上のユーザー名 @optional
 * @property category - リンクのカテゴリ
 */
export interface Link {
	name: string;
	url: string;
	description?: string;
	username?: string;
	category: "social" | "development" | "gaming" | "wishlist";
}
