import datas from "../data/datas.json"; 

export function useDatas(){ 
    const {header, homepage, about, projects, socials, footer} = datas;
    const aboutMe = datas["about-me"];
    return {header,homepage, about, aboutMe, projects, socials, footer};
}
    