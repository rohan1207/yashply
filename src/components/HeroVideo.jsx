import { useEffect, useRef } from "react";

/**
 * Home hero background video.
 * Mobile Safari/Chrome need muted + playsInline + an explicit play() retry loop.
 */
export default function HeroVideo() {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    let cancelled = false;
    let retryTimer = 0;

    // Critical for iOS: attributes must exist on the element, not only React props.
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("autoplay", "");

    const playNow = async () => {
      if (cancelled || !video) return;
      if (!video.paused && !video.ended) return;

      try {
        video.muted = true;
        video.volume = 0;
        const result = video.play();
        if (result && typeof result.then === "function") await result;
      } catch {
        if (cancelled) return;
        retryTimer = window.setTimeout(playNow, 200);
      }
    };

    const onPause = () => {
      // Keep looping while the page is visible, do not stay stopped.
      if (cancelled) return;
      if (document.visibilityState === "visible") playNow();
    };

    const onVisible = () => {
      if (document.visibilityState === "visible") playNow();
    };

    playNow();
    video.addEventListener("loadedmetadata", playNow);
    video.addEventListener("loadeddata", playNow);
    video.addEventListener("canplay", playNow);
    video.addEventListener("canplaythrough", playNow);
    video.addEventListener("pause", onPause);
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("pageshow", playNow);
    window.addEventListener("focus", playNow);

    // After preloader (~1.1s) and a few more tries while the page settles.
    const kick1 = window.setTimeout(playNow, 400);
    const kick2 = window.setTimeout(playNow, 1200);
    const kick3 = window.setTimeout(playNow, 2000);

    return () => {
      cancelled = true;
      window.clearTimeout(retryTimer);
      window.clearTimeout(kick1);
      window.clearTimeout(kick2);
      window.clearTimeout(kick3);
      video.removeEventListener("loadedmetadata", playNow);
      video.removeEventListener("loadeddata", playNow);
      video.removeEventListener("canplay", playNow);
      video.removeEventListener("canplaythrough", playNow);
      video.removeEventListener("pause", onPause);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("pageshow", playNow);
      window.removeEventListener("focus", playNow);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      src="/hero.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      controls={false}
      aria-hidden
    />
  );
}
