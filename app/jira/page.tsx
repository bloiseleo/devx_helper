import LinkSection from "@/components/LinkSection";
import JiraLogo from '@/public/svgs/jira-1.svg';

export default function Page() {
    return (
        <LinkSection links={[
          {
            anchor: 'https://gestaodevx.atlassian.net/jira/core/projects/DWL/board',
            name: 'Gestão Dev X',
            symbol: JiraLogo
          }
        ]} />
    );
}