import { c as createComponent, i as renderComponent, r as renderTemplate, f as createAstro } from '../chunks/astro/server_BlN3iGIO.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BqwEdlGL.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "App", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/Gita Aulia Hafid/Documents/UTB/oxigen/Web Oxigen/landing-page/src/components/App.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Gita Aulia Hafid/Documents/UTB/oxigen/Web Oxigen/landing-page/src/pages/[...slug].astro", void 0);

const $$file = "C:/Users/Gita Aulia Hafid/Documents/UTB/oxigen/Web Oxigen/landing-page/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
