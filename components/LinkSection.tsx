import { Links } from "@/models/Link";

type Props = {
    links: Links
};

export default function LinkSection({ links }: Props) {
    return (
        <section className="bg-indigo-500 max-w-[350px] min-h-[350px] rounded-lg text-white">
            <ul className="flex flex-col space-y-2">
                {links.map(link => (
                    <li className="border-b-[1px] border-b-slate-900 last:border-none p-2 flex">
                        <span className="text-md w-1 h-1 mr-4">{link.symbol ?? '🛠️'}</span>
                        <a className="ml-2" href={link.anchor} target="_blank">{link.name}</a>
                    </li>
                ))}
            </ul>
        </section>
    );
}