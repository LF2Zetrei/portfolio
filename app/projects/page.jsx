"use client";

import Link from "next/link";
import Button from "@/components/Button"
import { useDatas } from "@/hooks/useDatas";
import SplitSection from "@/components/SplitSection";
import Gap from "@/components/Gap";


export default function Projects() {
  const { projects } = useDatas();

  if (!projects) return <p>Chargement...</p>;

  return (
    <div>
      {projects.map((project) => {
        
        const isSpecial = project.id%2 == 1;

        const className = isSpecial ? 'slide-left' : 'slide-right';

        const leftContent = isSpecial ? null : (
          <div style={{display:"flex", flexFlow:"column wrap", justifyContent: "center", alignItems: "flex-start"}}>
            <div style={{width:"70%", display:"felx", justifyContent: "flex-center", padding:"50px"}}>
              <h2>{project.title}</h2>
              <Gap></Gap>
              <p>{project.short_description}</p>
              <Gap height="30px"></Gap>
              <Button
                    href={`/projects/${project.slug}`}
                    text="See more"
                    borderTBSize="1px"
                    borderTBLine="#1e2130"
                    borderSideLine="#1e2130"
                    backgroundColor="#ece9e5"
                    color="#1e2130"
                />
            </div>
          </div>
        );
        const rightContent = isSpecial ? (
          <div style={{display:"flex", flexFlow:"column wrap", justifyContent: "center", alignItems: "flex-start"}}>
            <div style={{width:"70%", display:"felx", justifyContent: "flex-center", padding:"50px"}}>
              <h2>{project.title}</h2>
              <Gap></Gap>
              <p>{project.short_description}</p>
              <Gap height="30px"></Gap>
              <Button
                  href={`/projects/${project.slug}`}
                  text="See more"
                  borderTBSize="1px"
                  borderTBLine="#1e2130"
                  borderSideLine="#1e2130"
                  backgroundColor="#edb7b3"
                  color="#1e2130"
              />
            </div>
          </div>
        ) : null;

        const leftBgImage = isSpecial
          ? project.images[0]
          : "";

        const rightBgImage = isSpecial
          ? ""
          : project.images[0];

        return (
          <SplitSection
            className = {className}
            key={project.id}
            height={300}
            leftBgColor="#edb7b3"
            rightBgColor="#c1b580"
            leftBgImage={leftBgImage}
            rightBgImage={rightBgImage}
            showDivider={false}
            leftContent={leftContent}
            rightContent={rightContent}
            borderBottomStyle={{ line: "none", size: "0", color: "transparent" }}
            leftPadding = {{ top: "100px", right: "0", bottom: "50px", left: "0" }}
            rightPadding = {{ top: "100px", right: "0", bottom: "50px", left: "0" }}
          />
        );
      })}
    </div>
  );
}