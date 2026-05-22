import { ServicePage } from "@/components/site/service-page";
import { getService } from "@/lib/content/services";

const service = getService("tax-trust-asset-protection")!;

export const metadata = {
  title: service.outcomeHeadline,
  description: service.outcomeSub,
};

export default function TaxTrustAssetProtectionPage() {
  return <ServicePage service={service} />;
}
