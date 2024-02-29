import { MenuItems } from "@/models/MenuItem";

import jiraLogo from '@/public/svgs/jira-3.svg';
import githubLogo from '@/public/svgs/github-icon-1.svg';

export const MenuLinks: MenuItems = [{
    alt: 'Jira',
    href: '/jira',
    src: jiraLogo,
    title: 'Jira - Planning and Scheduling Tasks'
}, {
    alt: 'Repositórios',
    href: '/repos',
    src: githubLogo,
    title: 'Repositórios'
}];