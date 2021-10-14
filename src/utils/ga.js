export const logPageView = url => {
  if (window.gtag) {
    window?.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url
    });
  }
};

export const logEvent = ({ action, params }) => {
  if (window.gtag) {
    window?.gtag('event', action, params);
  }
};
