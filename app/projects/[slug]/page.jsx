"use client";

import { useParams } from "next/navigation";
import { useDatas } from "@/hooks/useDatas";
import Gallery from "@/components/Gallery";
import SplitSection from "@/components/SplitSection";
import FullSection from "@/components/FullSection";
import CardPhoto from "../../../components/CardPhoto";
import CardText from "../../../components/CardText";
import Link from "next/link";
import Gap from "@/components/Gap";

export default function ProjectPage() {
  const { slug } = useParams();
  const { projects } = useDatas();

  if (!projects) return <p>Chargement...</p>;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p>Projet non trouvé</p>;

  const images = project.images;
  return (
    <div>
          <FullSection
                padding ="10px"
                bgColor="#edb7b3"
                borderTopStyle = { {line: "solid", size: "1px", color: "#000" }}
                borderBottomStyle = { {line: "none", size: "0", color: "#000" }}
                children={
                  <div style={{display:"flex", flexFlow:"column wrap", justifyContent: "center", alignItems: "center", padding: "40px 50px 40px 50px"}}>
                    <div style={{width: "100%", display: "flex", flexDirection: "row"}}>
                      <div style={{width: "30%"}}>
                        <h2>{project.long_title}</h2>
                        <p>{project.subtitle}</p>
                        <Gap></Gap>
                        <p>{project.non_technical_description}</p>
                        <Gap></Gap>
                        <p>{project.technical_description}</p>
                      </div>
                      <div style={{width: "70%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", paddingLeft: "30px"}}>
                        <Gallery images={images}/>
                        <div style={{width:"100%", display:"flex", flexDirection: "row", justifyContent: "space-around"}}>
                          {project.github_url && (
                            <Link href={project.github_url}>See it on GitHub !</Link>
                          )}

                          {project.extra_url && (
                            <Link href={project.extra_url}>See it online !</Link>
                          )}
                        </div>
                      </div>
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
                children={<div><CardText width="500px" backgroundColor="#c1b580" justifyContent="space-around" alignItems="flex-start" flexWrap="wrap"><div style={{display:"flex", flexFlow:"column wrap", justifyContent: "flex-start", alignItems: "flex-start", padding: "20px 0 40px 0"}}>
                <div style={{display:"flex", flexFlow:"column wrap", justifyContent: "center", alignItems: "flex-start"}}>
                <div style={{width:"80%", alignSelf:"center", textAlign:"justify"}}>
                  <h4>{project.summary_title}</h4>
                  <Gap></Gap>
                  <p>{project.global_summary}</p>
                </div>
              </div>
              </div> </CardText></div>}
            />

        
    </div>
  );
}