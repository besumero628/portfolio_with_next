import { IndexLayout } from "@/components/templates/IndexTemplate";
import { Box, Icon, Flex, Text } from "@chakra-ui/react";
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { SiQiita } from "react-icons/si"


export default function Home() {
  return (
    <>
      <IndexLayout
        firstView={{
          backgroundImage: "/top-view.jpg",
          backgroundColor: "rgba(255, 255, 255, 0.65)",
          mainText: "SHUHEI NARA",
          subText: "web aplication engineer"
        }}
        topics={{
          content: [
            {
              date: "2023/03/16",
              text: "ページを公開しました"
            },
            {
              "date": "2022/10/29",
              "text": "Qiita 記事公開 : AWS CDK初心者が爆速でLambda Layerにpythonライブラリを入れた裏技"
            },
            {
              "date": "2022/08/31",
              "text": "Qiita 記事公開 : AWS CDK初心者が爆速でS3とかlambdaとか「とりあえずそれっぽく」作る方法"
            },
          ],
        }}
        about={{
          context: `
        
        `,
          works: [
            {
              body: {
                image: {
                  src: "top-view.jpg",
                  alt: "portfolio"
                },
                title: "portfolio",
                context: "Nextjs × Vercelを使用したポートフォリオ"
              },
              links: {
                url: "",
                github: "https://github.com/besumero628/portfolio_with_next"
              }
            },
            {
              body: {
                image: {
                  src: "LABONITY.png",
                  alt: "LABONITY"
                },
                title: "LABONITY",
                context: "Railsを使用した大学・企業向けサイト"
              },
              links: {
                url: "",
                github: "https://github.com/besumero628/LABONITY"
              }
            },
            {
              body: {
                image: {
                  src: "kintaikun.png",
                  alt: "勤怠くん"
                },
                title: "勤怠くん",
                context: "Vue × Rustを使用した勤怠管理サイト"
              },
              links: {
                url: "",
                github: "https://github.com/besumero628/vue-rust-kintai-front"
              }
            },
          ]
        }}
        skill={{
          skillItemsList: {
            frontEnd: [
              {
                name: "HTML/CSS",
                level: 5
              },
              {
                name: "JavaScript",
                level: 4
              },
              {
                name: "Chakra UI",
                level: 4
              },
              {
                name: "React",
                level: 4
              },
              {
                name: "Vue",
                level: 3
              },
            ],
            backEnd: [
              {
                name: "Web Scraping",
                level: 5
              },
              {
                name: "Flask",
                level: 4
              },
              {
                name: "Ruby on Rails",
                level: 4
              },
              {
                name: "Zappa",
                level: 4
              },
              {
                name: "Django",
                level: 2
              },
            ],
            other: [
              {
                name: "Kintone",
                level: 5
              },
              {
                name: "Git",
                level: 4
              },
              {
                name: "Docker",
                level: 3
              },
              {
                name: "AWS",
                level: 3
              },
              {
                name: "SQL",
                level: 3
              },
            ]
          },
          certificationList: [
            {
              src: "ruby-silver.png",
              alt: "Ruby Certified Ruby Examination Silver 2.1"
            },
            {
              src: "ruby-gold.png",
              alt: "Ruby Certified Ruby Examination Gold 2.1"
            }
          ],
          experienceLink: "https://drive.google.com/file/d/1KOap722AQoOOqbXVNGuayWR8rha9qSaO/view?usp=share_link"
        }}
        contact={{
          mail: "besumero628@gmail.com",
          links: {
            github: "https://github.com/besumero628",
            twitter: "https://twitter.com/besumero628",
            linkedIn: "https://www.linkedin.com/in/%E8%84%A9%E5%B9%B3-%E5%A5%88%E8%89%AF-b750a6263/",
            qiita: "https://qiita.com/besmero628"
          }
        }}
      />
    </>
  )
}