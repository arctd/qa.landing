"use client";

import UnicornScene from "unicornstudio-react/next";

export function HeroBackground() {
  return (
    <div className="absolute inset-0" style={{ borderRadius: "inherit", overflow: "hidden" }}>
      <UnicornScene
        projectId="2fix0q21Pb2YWQzARyII"
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.6/dist/unicornStudio.umd.js"
        width="100%"
        height="100%"
        dpi={1.5}
        fps={60}
        lazyLoad={true}
        production={false}
      />
    </div>
  );
}
