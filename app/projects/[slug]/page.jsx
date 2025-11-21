"use client";

import { useParams } from "next/navigation";
import { useDatas } from "@/hooks/useDatas";
import Gallery from "@/components/Gallery";
import SplitSection from "@/components/SplitSection";
import FullSection from "@/components/FullSection";
import CardPhoto from "../../../components/CardPhoto";
import CardText from "../../../components/CardText";
import Link from "next/link";

export default function ProjectPage() {
  const { slug } = useParams();
  const { projects } = useDatas();

  if (!projects) return <p>Chargement...</p>;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p>Projet non trouvé</p>;

  const testImages = [

    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',

    'https://images.unsplash.com/photo-1519681393784-d120267933ba',

    'https://images.unsplash.com/photo-1494526585095-c41746248156',

    'https://images.unsplash.com/photo-1500534623283-312aade485b7',

    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',

    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',

  ];

  return (
    <div>
      <SplitSection
            key={project.id}
            height={300}
            leftBgColor="#c6c2cd"
            rightBgColor="#c6c2cd"
            leftBgImage={null}
            rightBgImage={null}
            showDivider={false}
            leftContent={
              <div style={{display:"flex", flexFlow:"column wrap", justifyContent: "center", alignItems: "flex-start"}}>
                <div style={{width:"70%", display:"flex",  flexFlow:"column wrap", justifyContent:"flex-start", paddingLeft:"50px"}}>
                  <h2>{project.long_title}</h2>
                  <p>{project.subtitle}</p>
                </div>
              </div>
            }
            rightContent={
              <div style={{display:"flex", flexFlow:"column wrap", justifyContent: "center", alignItems: "flex-start"}}>
                <div style={{width:"70%", alignSelf:"center", textAlign:"justify"}}>
                  <p>{project.non_technical_description}</p>
                  <div style={{width:"100%", display:"flex", flexDirection: "row", justifyContent: "space-around"}}>
                    <Link href={project.github_url}>See it on github !</Link>
                    <Link href={project.extra_url}>See it on online !</Link>
                  </div>
                </div>
              </div>
            }
            borderBottomStyle={{ line: "none", size: "0", color: "transparent" }}
            leftPadding = {{ top: "0", right: "0", bottom: "0", left: "0" }}
            rightPadding = {{ top: "0", right: "0", bottom: "0", left: "0" }}
          /> 
          <FullSection
                padding ="10px"
                bgColor="#edb7b3"
                borderTopStyle = { {line: "solid", size: "1px", color: "#000" }}
                borderBottomStyle = { {line: "none", size: "0", color: "#000" }}
                children={
                  <div style={{display:"flex", flexFlow:"column wrap", justifyContent: "center", alignItems: "center"}}>
                    <div style={{width:"70%", textAlign:"justify", justifyContent:"center"}}>
                      <Gallery images={testImages}/>
                      <CardText width="40%" backgroundColor="#edb7b3" justifyContent="center" alignItems="center" flexWrap="wrap">
                        <div style={{display:"flex", flexFlow:"column wrap", justifyContent: "center", alignItems: "center"}}>
                          <div style={{display:"flex", flexFlow:"column wrap", justifyContent: "center", alignItems: "center"}}>
                            <div style={{width:"70%", justifyContent:"center", textAlign:"justify"}}>
                              <p>{project.technical_description}</p>
                            </div>
                          </div>
                        </div> 
                      </CardText>
                    </div>
                  </div>
                }
            />

        <FullSection
                height="500px"
                padding ="10px"
                bgColor="#ece9e5"
                borderTopStyle = { {line: "solid", size: "1px", color: "#000" }}
                borderBottomStyle = { {line: "none", size: "0", color: "#000" }}
                children={<div><CardText width="500px" backgroundColor="#c1b580" justifyContent="space-around" alignItems="flex-start" flexWrap="wrap"><div style={{display:"flex", flexFlow:"column wrap", justifyContent: "flex-start", alignItems: "flex-start"}}>
                <div style={{display:"flex", flexFlow:"column wrap", justifyContent: "center", alignItems: "flex-start"}}>
                <div style={{width:"70%", alignSelf:"center", textAlign:"justify"}}>
                  <p>{project.global_summary}</p>
                </div>
              </div>
              </div> </CardText></div>}
            />

        
    </div>
  );
}