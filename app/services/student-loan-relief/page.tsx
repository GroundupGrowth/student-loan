import { ServicePage } from "@/components/site/service-page";
import { getService } from "@/lib/content/services";

const service = getService("student-loan-relief")!;

export const metadata = {
  title: service.outcomeHeadline,
  description: service.outcomeSub,
};

export default function StudentLoanReliefPage() {
  return <ServicePage service={service} />;
}
