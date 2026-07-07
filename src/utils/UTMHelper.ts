export function getUTMMessage(url: string, defaultMessage: string): string {
  try {
    const searchParams = new URL(url).searchParams;
    const utmCampaign = searchParams.get('utm_campaign');

    if (!utmCampaign) return defaultMessage;

    return `Halo GoDev, saya tertarik dengan solusi ${utmCampaign.toUpperCase()} tapi pusing setup-nya.`;
  } catch {
    return defaultMessage;
  }
}
