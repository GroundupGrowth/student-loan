import { ServicePage } from "@/components/site/service-page";
import { getService } from "@/lib/content/services";

const service = getService("be-your-own-bank")!;

export const metadata = {
  title: service.outcomeHeadline,
  description: service.outcomeSub,
};

export default function BeYourOwnBankPage() {
  return <ServicePage service={service} />;
}
