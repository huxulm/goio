"use client";
import { initGoPlay } from "@/utils/goplay";
import { PropsWithChildren, useEffect } from "react";
import "./globals.css";
import GolangTmp1 from "./tmpls/tmpl1.mdx";
import GolangTmp2 from "./tmpls/tmpl2.mdx";
import GolangTmp3 from "./tmpls/tmpl3.mdx";
import GolangTmp4 from "./tmpls/tmpl4.mdx";
import GolangTmp5 from "./tmpls/tmpl5.mdx";
import GolangTmp6 from "./tmpls/tmpl6.mdx";
import GolangTmp7 from "./tmpls/tmpl7.mdx";

function BlockWrapper({ children }: PropsWithChildren) {
  return <div className="bg-blue-500 rounded h-fit shadow">{children}</div>;
}

export default function Home() {
  useEffect(() => {
    document
      .querySelectorAll<HTMLElement>("pre+.goplay-container")
      .forEach(initGoPlay);
  }, []);
  return (
    <main>
      <header className="px-10 py-5">
        <h1 className="text-3xl">
          Golang <span className="text-red-500 font-bold">I</span>
          <span className="text-green-500 font-bold">/</span>
          <span className="text-blue-500 font-bold">O</span> Templates
        </h1>
      </header>
      <section className="flex flex-wrap gap-5 px-10">
        <BlockWrapper>
          <GolangTmp1 />
        </BlockWrapper>
        <BlockWrapper>
          <GolangTmp2 />
        </BlockWrapper>
        <BlockWrapper>
          <GolangTmp3 />
        </BlockWrapper>
        <BlockWrapper>
          <GolangTmp4 />
        </BlockWrapper>
        <BlockWrapper>
          <GolangTmp5 />
        </BlockWrapper>
        <BlockWrapper>
          <GolangTmp6 />
        </BlockWrapper>
        <BlockWrapper>
          <GolangTmp7 />
        </BlockWrapper>
      </section>
    </main>
  );
}
