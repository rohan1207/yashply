import { useEffect, useRef, useState } from "react";
import { images } from "../data/content";

/** Home hero background video — forced autoplay for mobile Safari / Chrome */
export default function HeroVideo() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        video.defaultMuted = true;
        video.muted = true;
        video.setAttribute("muted", "");
        video.playsInline = true;
        const p = video.play();
        if (p && typeof p.then === "function") await p;
        setPlaying(true);
      } catch {
        /* autoplay may still fail in rare cases; poster stays */
      }
    };

    tryPlay();

    const onVis = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    const onTouch = () => tryPlay();

    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("touchstart", onTouch, { once: true, passive: true });
    window.addEventListener("click", onTouch, { once: true });

    return () => {
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("click", onTouch);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      src="/hero.mp4"
      poster={playing ? undefined : images.hero}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      disableRemotePlayback
      onPlaying={() => setPlaying(true)}
      onLoadedData={() => {
        const video = ref.current;
        if (!video) return;
        video.play().then(() => setPlaying(true)).catch(() => {});
      }}
      aria-hidden
    />
  );
}
