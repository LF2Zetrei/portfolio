import Link from "next/link";
import Image from "next/image";

export default function Media({ url, icon, name, description }) {
  return (
    <div>
      <div>
        <Link href={url}>
          <Image src={icon} alt={name} width={32} height={32} />
        </Link>
      </div>
      <div>
        <h2>{name}</h2>
        <h3>{description}</h3>
      </div>
    </div>
  );
}
