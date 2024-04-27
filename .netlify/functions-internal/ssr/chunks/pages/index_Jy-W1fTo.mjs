import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, k as renderComponent, m as maybeRenderHead } from '../astro_Z-Hm8x9E.mjs';
import 'kleur/colors';
import 'html-escaper';
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';
import 'clsx';
/* empty css                          */

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN, {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const Post = asDrizzleTable("Post", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Post", "primaryKey": true } }, "title": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "title", "collection": "Post", "primaryKey": false, "optional": false } }, "body": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "body", "collection": "Post", "primaryKey": false, "optional": false } }, "published": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "published", "collection": "Post", "default": { "__serializedSQL": true, "sql": "CURRENT_TIMESTAMP" } } } }, "deprecated": false, "indexes": {} }, false);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/theory/Documents/Code/whiteboard/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const title = formData.get("title");
    const body = formData.get("body");
    await db.insert(Post).values({
      title,
      body
    });
    return Astro2.redirect(Astro2.url.pathname);
  }
  const posts = await db.select().from(Post).all();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>whiteboard</h1> <section data-astro-cid-j7pv25f6> <form method="POST" data-astro-cid-j7pv25f6> <label for="title" data-astro-cid-j7pv25f6>Title</label> <input type="text" id="title" name="title" data-astro-cid-j7pv25f6> <label for="body" data-astro-cid-j7pv25f6>Body</label> <input id="body" type="text" name="body" data-astro-cid-j7pv25f6> <button type="submit" data-astro-cid-j7pv25f6>Submit</button> </form> </section> <section data-astro-cid-j7pv25f6> ${posts.map((post) => renderTemplate`<article class="post" data-astro-cid-j7pv25f6> <h2 class="title" data-astro-cid-j7pv25f6>${post.title}</h2> <p class="body" data-astro-cid-j7pv25f6>${post.body}</p> <p class="date" data-astro-cid-j7pv25f6>${post.published.toLocaleDateString("en-US")}</p> </article>`)} </section> </main>  ` })}`;
}, "/home/theory/Documents/Code/whiteboard/src/pages/index.astro", void 0);

const $$file = "/home/theory/Documents/Code/whiteboard/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
