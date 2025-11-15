"use client";

import { useDatas } from "@/hooks/useDatas";
import Media from "@/components/Media";

export default function Footer() {
    const { socials } = useDatas();
    return (
        <div>
            {socials.map(s => (<Media url={s.url} icon={s.icon} name={s.name} description={s.descritpion}></Media>))}
        </div>
    );
}
