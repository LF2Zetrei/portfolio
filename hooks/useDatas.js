import datas from "../data/datas.json"; 

export function useDatas(){ 
    const {homepage, about, projects, socials} = datas; 
    return {homepage, about, projects, socials}; 
}
    