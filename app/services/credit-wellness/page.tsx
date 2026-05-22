import { ServicePage } from "@/components/site/service-page";
import { getService } from "@/lib/content/services";

const service = getService("credit-wellness")!;

export const metadata = {
  title: service.outcomeHeadline,
  description: service.outcomeSub,
};

export default function CreditWellnessPage() {
  return <ServicePage service={service} />;
}
