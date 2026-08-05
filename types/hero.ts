export interface HeroOrbitApp {
  src: string
  label: string
}

export interface HeroCta {
  label: string
  href: string
  primary: boolean
}

export interface HeroStat {
  value: string
  label: string
}

export interface HeroContent {
  badge: string
  headline: string
  subheadline: string
  ctas: HeroCta[]
  stats: HeroStat[]
  orbitApps: HeroOrbitApp[]
}
