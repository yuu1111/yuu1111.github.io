import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * @description Tailwind CSSクラスを条件付きでマージする
 * @param inputs - クラス値の可変長引数
 * @returns マージされたクラス文字列
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
