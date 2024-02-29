'use client';
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MenuItems } from "@/models/MenuItem";

type Props = {
    items: MenuItems;
}

export default function Menu({ items }: Props) {
    const activePathname = usePathname();

    return (
        <nav className="bg-[#F5F5F5] dark:bg-[#444444] dark:border-[#777777] fixed bottom-10 p-4 w-1/2 left-1/2 -translate-x-1/2 rounded-lg border-[1px] flex ">
            <ul className="flex w-full space-x-4">
                {items.map(item => (
                    <li title={item.title} className="parent" >
                        <Link href={item.href} title={item.title} >
                            <Image className={activePathname == item.href ? 'animate-bounce' : 'childElement'} src={item.src} width={40} height={40} alt={item.alt} />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}