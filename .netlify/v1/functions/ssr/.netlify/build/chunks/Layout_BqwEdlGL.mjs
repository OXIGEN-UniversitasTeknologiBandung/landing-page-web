import { c as createComponent, e as addAttribute, j as renderHead, k as renderSlot, r as renderTemplate, f as createAstro } from './astro/server_BlN3iGIO.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/icon.ico"><link rel="icon" href="/icon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Oxigen UTB</title>${renderHead()}</head> </html> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body>`;
}, "C:/Users/Gita Aulia Hafid/Documents/UTB/oxigen/Web Oxigen/landing-page/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
