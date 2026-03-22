/**
 * @description ポートフォリオに表示するプロジェクト情報
 * @property title - プロジェクト名
 * @property description - プロジェクトの説明
 * @property tags - 使用技術のタグ一覧
 * @property url - プロジェクトのURL
 * @property fork - フォークプロジェクトかどうか @optional
 */
export interface Project {
	title: string;
	description: string;
	tags: string[];
	url: string;
	fork?: boolean;
}
