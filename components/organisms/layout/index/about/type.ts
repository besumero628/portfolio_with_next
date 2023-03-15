import { Image } from "@/components/organisms/utils/type";

export interface WorkCardElement {
  image: Image
  title: string
  context: string
}

export interface WorkCardLink {
  url: string
  github: string
}

export interface Work {
  body: WorkCardElement
  links: WorkCardLink
}

export interface AboutType {
  context: string
  works: Work[]
}