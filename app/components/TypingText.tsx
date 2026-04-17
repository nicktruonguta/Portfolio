"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const words = ["experiences.", "products.", "interfaces.", "solutions."];

export default function TypingText() {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    let wordIndex = 0;
    let tl: gsap.core.Timeline;

    const type = () => {
      const word = words[wordIndex % words.length];
      wordIndex++;

      tl = gsap.timeline({
        onComplete: () => {
          // pause then start next word
          gsap.delayedCall(1.4, type);
        },
      });

      // type each character
      tl.to(el, { duration: 0, text: "" });
      word.split("").forEach((char, i) => {
        tl.to(el, {
          duration: 0.06,
          text: word.slice(0, i + 1),
          ease: "none",
        });
      });

      // blinking cursor pause then erase
      tl.to(el, { duration: 1, opacity: 1 }) // hold
        .to(el, { duration: 0.05, opacity: 0 })
        .to(el, { duration: 0.05, opacity: 1 })
        .to(el, { duration: 0.05, opacity: 0 })
        .to(el, { duration: 0.05, opacity: 1 });

      // erase
      for (let i = word.length - 1; i >= 0; i--) {
        tl.to(el, {
          duration: 0.04,
          text: word.slice(0, i),
          ease: "none",
        });
      }
    };

    // register TextPlugin
    import("gsap/TextPlugin").then(({ TextPlugin }) => {
      gsap.registerPlugin(TextPlugin);
      type();
    });

    return () => {
      tl?.kill();
      gsap.killTweensOf(el);
    };
  }, []);

  return (
    <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-violet-400">
      <span ref={textRef} />
      <span className="animate-pulse text-indigo-400">|</span>
    </span>
  );
}
