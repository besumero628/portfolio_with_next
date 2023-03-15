export interface SkillItem {
  name: string
  level: number
}

export interface SkillItemsList {
  frontEnd: SkillItem[]
  backEnd: SkillItem[]
  other: SkillItem[]
}

export interface CertificationItem {
  src: string
  alt: string
}

export interface SkillType {
  skillItemsList: SkillItemsList
  certificationList: CertificationItem[]
  experienceLink: string
}