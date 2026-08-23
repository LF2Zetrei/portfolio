import datas from "@/data/datas.json";
import ProjectClient from "./ProjectClient";
 
export function generateStaticParams() {
  return datas.projects.map((project) => ({
    slug: project.slug,
  }));
}
 
export default function ProjectPage() {
  return <ProjectClient />;
}
