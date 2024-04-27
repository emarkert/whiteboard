import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_Z-Hm8x9E.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#13151a;background-size:224px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}[data-astro-cid-j7pv25f6],[data-astro-cid-j7pv25f6]:before,[data-astro-cid-j7pv25f6]:after{box-sizing:border-box}[data-astro-cid-j7pv25f6]{margin:0}html,body{height:100%}body{line-height:1.5;-webkit-font-smoothing:antialiased}img[data-astro-cid-j7pv25f6],picture[data-astro-cid-j7pv25f6],video[data-astro-cid-j7pv25f6],canvas[data-astro-cid-j7pv25f6],svg[data-astro-cid-j7pv25f6]{display:block;max-width:100%}input[data-astro-cid-j7pv25f6],button[data-astro-cid-j7pv25f6],textarea[data-astro-cid-j7pv25f6],select[data-astro-cid-j7pv25f6]{font:inherit}p[data-astro-cid-j7pv25f6],h1[data-astro-cid-j7pv25f6],h2[data-astro-cid-j7pv25f6],h3[data-astro-cid-j7pv25f6],h4[data-astro-cid-j7pv25f6],h5[data-astro-cid-j7pv25f6],h6[data-astro-cid-j7pv25f6]{overflow-wrap:break-word}#root[data-astro-cid-j7pv25f6],#__next[data-astro-cid-j7pv25f6]{isolation:isolate}main[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;align-items:center}form[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;align-items:center}label[data-astro-cid-j7pv25f6]{font-size:1rem;font-weight:400;padding:.25rem 0;color:#fff}input[data-astro-cid-j7pv25f6]{padding:.25rem;border:1px solid #ccc;border-radius:4px}button[data-astro-cid-j7pv25f6]{padding:.5rem;margin:.25rem 0;border:1px solid #ccc;border-radius:4px;background-color:#f0f0f0;cursor:pointer}section[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;align-items:center}article[data-astro-cid-j7pv25f6]{padding:.25rem .5rem;border:1px solid #ccc;border-radius:4px;background-color:#fff}h1[data-astro-cid-j7pv25f6]{color:#fff}h2[data-astro-cid-j7pv25f6]{font-size:1.25rem;font-weight:400;margin:0;padding:0}.post[data-astro-cid-j7pv25f6]{font-size:1rem}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/theory/Documents/Code/whiteboard/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_CVMlljzS.mjs","/src/pages/index.astro":"chunks/pages/index_Jy-W1fTo.mjs","\u0000@astrojs-manifest":"manifest_Du9VVmI8.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_D5vyYEPx.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BaG0N1lA.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg"],"buildFormat":"directory","checkOrigin":false});

export { manifest };
