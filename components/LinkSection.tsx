import { Links } from "@/models/Link";
import Link from "next/link";
import Image from "next/image";

type Props = {
    links: Links
};

export default function LinkSection({ links }: Props) {
    return (
        <section className="w-full h-full p-4">
            <ul className="flex flex-wrap h-5/6 overflow-y-scroll">
                {links.map(link => (
                    <li className="ml-8 mt-8">
                        <div className="w-[200px] p-2 flex flex-col items-center border-[1px] dark:bg-[#222222] dark:border-none dark:text-white cursor-pointer rounded-lg p-4">
                            <Link href={link.anchor} className="flex flex-col items-center" target="_blank">
                                <Image src={link.symbol} alt="Alternative" className="w-[100px] h-[100px]"/>
                                <span className="mt-4">{link.name}</span>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}