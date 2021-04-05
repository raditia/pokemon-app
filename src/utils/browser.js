const MOBILE_BREAKPOINT = 768;
// const MOBILE_LANDSCAPE = 1023
const LANDSCAPE_PRIMARY = "landscape-primary";
const PORTRAIT_PRIMARY = "portrait-primary";

const isMobile = () => {
  const mql = window.matchMedia("(orientation: portrait)");
  const orientation = mql.matches ? PORTRAIT_PRIMARY : LANDSCAPE_PRIMARY;
  const { clientWidth } = window.document.documentElement;

  if (clientWidth <= MOBILE_BREAKPOINT && orientation === LANDSCAPE_PRIMARY) {
    return true;
  }
  return clientWidth <= MOBILE_BREAKPOINT;
};

export { isMobile };
