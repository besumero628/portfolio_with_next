import { FC, memo } from "react";
import { FirstView } from "../organisms/layout/index/FirstView";
import { FirstViewType } from "../organisms/layout/index/type";
import { Topics } from "../organisms/layout/index/Topics";
import { TopicsType } from "../organisms/layout/index/topics/type";
import { About } from "../organisms/layout/index/About";
import { AboutType } from "../organisms/layout/index/about/type";
import { Skills } from "../organisms/layout/index/Skills";
import { SkillType } from "../organisms/layout/index/skills/type";
import { Contact } from "../organisms/layout/index/Contact";
import { ContactType } from "../organisms/layout/index/contact/type";

type Props = {
  firstView: FirstViewType
  topics: TopicsType
  about: AboutType
  skill: SkillType
  contact: ContactType
}

export const IndexLayout: FC<Props> = memo(function IndexLayout(props) {
  const { firstView, topics, about, skill, contact } = props
  return (
    <>
      <FirstView firstView={firstView}/>

      <Topics topics={topics} />

      <About about={about}/>

      <Skills skill={skill}/>

      <Contact contact={contact} />
    </>
  )
})