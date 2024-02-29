import LinkSection from "@/components/LinkSection";

import blackBullPay from '@/public/svgs/blackbullpay.png';

export default function Page() {
    return <LinkSection links={[
          {
            anchor: 'https://github.com/blackbullpay/webservice',
            name: 'WebService',
            symbol: blackBullPay
          },
          {
            anchor: 'https://github.com/blackbullpay/white-label',
            name: 'White-Label',
            symbol: blackBullPay
          }]} 
    />
}