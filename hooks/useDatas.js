import datas from "../data/datas.json"; 

export function useDatas(){ 
    const {header, homepage, about, projects, socials, footer} = datas; 
    return {header,homepage, about, projects, socials, footer}; 
}
    