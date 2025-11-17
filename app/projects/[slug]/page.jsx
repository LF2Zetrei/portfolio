"use client";

import { useParams } from "next/navigation";
import { useDatas } from "@/hooks/useDatas";
import Gallery from "@/components/Gallery";
import SplitSection from "@/components/SplitSection";
import FullSection from "@/components/FullSection";
import CardPhoto from "../../../components/CardPhoto";

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
            height={500}
            leftBgColor="#f0f0f0"
            rightBgColor="#f0f0f0"
            leftBgImage={null}
            rightBgImage={null}
            showDivider={false}
            leftContent={<div></div>}
            rightContent={<div></div>}
            borderBottomStyle={{ line: "none", size: "0", color: "transparent" }}
        />  
        <FullSection
                height="500px"
                padding ="10px"
                bgColor="white"
                children={<Gallery images={testImages}/>}
            />
        <FullSection
                height="500px"
                padding ="10px"
                bgColor="white"
                children={<div><CardPhoto height="400px" imageUrl={"/images/cards/pp.png"}/></div>}
            />

        
    </div>
  );
}