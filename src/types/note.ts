export interface Note {
  _id: string
  title: string
  slug: string
  content: string
  emoji: {
    type: string
    value: string
  }
  customDate: Date
}
