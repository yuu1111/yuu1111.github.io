export interface Link {
  name: string
  url: string
  description?: string
  username?: string
  category: 'social' | 'development' | 'gaming' | 'wishlist'
}
