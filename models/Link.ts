import { StaticImageData } from "next/image";

export interface Link {
    symbol: string | StaticImageData;
    anchor: string;
    name: string;
}

export type Links = Array<Link>;