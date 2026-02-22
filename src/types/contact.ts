/**
 * @description 連絡先情報
 * @property name - 連絡先の表示名
 * @property icon - アイコン名(iconMapのキーに対応)
 * @property url - 連絡先のURL
 * @property label - 表示用ラベル(ユーザー名等)
 */
export interface Contact {
  name: string
  icon: string
  url: string
  label: string
}
