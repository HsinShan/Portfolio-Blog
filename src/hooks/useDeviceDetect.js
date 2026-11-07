import { useEffect, useState } from "react";

// Same media queries as the SCSS mixins in assets/style/_base.scss
// (@mixin mobile / @mixin pad), so JS and CSS always agree on the device.
const MOBILE_QUERY = "(max-width: 640px)";
const PAD_QUERY = "(max-width: 920px)";

const getDevice = () => {
  if (window.matchMedia(MOBILE_QUERY).matches) return "mobile";
  if (window.matchMedia(PAD_QUERY).matches) return "pad";
  return "laptop";
};

// Re-renders only when the window crosses a breakpoint
// (resize / phone rotation), not on every resize event.
const useDeviceDetect = () => {
  const [device, setDevice] = useState(getDevice);

  useEffect(() => {
    const queries = [MOBILE_QUERY, PAD_QUERY].map((q) => window.matchMedia(q));
    const onChange = () => setDevice(getDevice());
    // addListener: Safari < 14 has no addEventListener on MediaQueryList
    queries.forEach((mq) =>
      mq.addEventListener ? mq.addEventListener("change", onChange) : mq.addListener(onChange)
    );
    return () =>
      queries.forEach((mq) =>
        mq.removeEventListener
          ? mq.removeEventListener("change", onChange)
          : mq.removeListener(onChange)
      );
  }, []);

  return device;
};

export default useDeviceDetect;
