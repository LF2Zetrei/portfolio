import datas from "../data/datas.json"; 

export function useDatas(){ 
    const {header, homepage, about, projects, socials} = datas; 
    return {header,homepage, about, projects, socials}; 
}
    