const sendEvent = (event: string, data: Record<string, unknown>) => {
  // @ts-expect-error TODO: declare gtag as global
  if (typeof window !== 'undefined' && window.gtag) {
    // @ts-expect-error TODO: declare gtag as global
    window.gtag('event', event, { ...data });
  }
};

export const sendArtistModalClick = (artistName: string) => {
  sendEvent('artist_modal_click', { artistName });
};

export const sendCookiesDecision = (accepted: boolean) => {
  sendEvent('cookies', { accepted });
};
