import Link from "next/link";
import {  } from "@/context/LanguageContext";

export default function Header(){  
    return(
        <div>
            <div>
                <Link href="/"><h1>Lucas</h1></Link>
            </div>
            <div>
                <Link href="/projects">my projects</Link>
                <Link href="/contact">contact me</Link>
            </div>
        </div>
    );
}