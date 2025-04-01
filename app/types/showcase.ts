export interface ShowcaseListGroupItem {
  domain: string
  hostname: string
  id: number
  screenshotUrl: string
  slug: string
  title: string
  url: string
}

export interface ShowcaseListGroup {
  name: string
  icon: string
  showcases: ShowcaseListGroupItem[]
}

export interface ShowcaseList {
  groups: ShowcaseListGroup[]
}
