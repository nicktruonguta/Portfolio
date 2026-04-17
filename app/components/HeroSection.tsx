"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import TypingText from "./TypingText";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // start everything hidden
      gsap.set(
        [
          badgeRef.current,
          line1Ref.current,
          line2Ref.current,
          paraRef.current,
          btnsRef.current,
          dividerRef.current,
        ],
        { autoAlpha: 0, y: 40 }
      );
      gsap.set(glowRef.current, { scale: 0.4, autoAlpha: 0 });

      // glow pulse in
      tl.to(glowRef.current, {
        scale: 1,
        autoAlpha: 1,
        duration: 1.6,
        ease: "power2.out",
      })
        // badge drops in
        .to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=1.0")
        // headline line 1
        .to(line1Ref.current, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.35")
        // headline line 2 (typing text)
        .to(line2Ref.current, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.45")
        // divider line grows
        .to(dividerRef.current, { autoAlpha: 1, y: 0, scaleX: 1, duration: 0.5 }, "-=0.3")
        // paragraph
        .to(paraRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.3")
        // buttons stagger
        .to(btnsRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.35");

      // subtle floating on the glow
      gsap.to(glowRef.current, {
        y: -24,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.6,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative text-center max-w-3xl w-full">
      {/* Glow */}
      <div
        ref={glowRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-indigo-600/25 blur-[130px] rounded-full pointer-events-none"
      />

      {/* Badge */}
      <span
        ref={badgeRef}
        className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-indigo-400 uppercase mb-8 border border-indigo-400/30 rounded-full px-4 py-1.5 bg-indigo-400/5"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
        Available for work
      </span>

      {/* Headline */}
      <h1 className="text-5xl sm:text-7xl font-bold text-white leading-tight tracking-tight mb-4">
        <span ref={line1Ref} className="block">
          Building digital
        </span>
        <span ref={line2Ref} className="block mt-1">
          <TypingText />
        </span>
      </h1>

      {/* Divider */}
      <div
        ref={dividerRef}
        className="mx-auto mb-8 h-px w-24 bg-linear-to-r from-transparent via-indigo-500 to-transparent"
      />

      {/* Paragraph */}
      <p
        ref={paraRef}
        className="text-zinc-400 text-lg leading-relaxed max-w-xl mx-auto mb-10"
      >
        I&apos;m a front-end developer crafting clean, performant web
        applications with React and Next.js.
      </p>

      {/* Buttons */}
      <div
        ref={btnsRef}
        className="flex flex-wrap gap-4 justify-center"
      >
        <a
          href="/projects"
          className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors shadow-lg shadow-indigo-600/20"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-3 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium transition-colors"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}
