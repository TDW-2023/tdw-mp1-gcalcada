"use strict";(()=>{var e={};e.id=157,e.ids=[157],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},3430:(e,t,r)=>{r.r(t),r.d(t,{config:()=>u,default:()=>l,routeModule:()=>c});var s={};r.r(s),r.d(s,{default:()=>preview});var n=r(1802),i=r(7153),a=r(6249);let o=`
slug
title
coverImage {
  url
}
date
author {
  name
  picture {
    url
  }
}
excerpt
content {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
`;async function fetchGraphQL(e,t=!1){return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t?process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN:process.env.CONTENTFUL_ACCESS_TOKEN}`},body:JSON.stringify({query:e})}).then(e=>e.json())}function extractPost(e){return e?.data?.postCollection?.items?.[0]}async function getPreviewPostBySlug(e){let t=await fetchGraphQL(`query {
      postCollection(where: { slug: "${e}" }, preview: true, limit: 1) {
        items {
          ${o}
        }
      }
    }`,!0);return extractPost(t)}async function preview(e,t){let{secret:r,slug:s}=e.query;if(r!==process.env.CONTENTFUL_PREVIEW_SECRET||!s)return t.status(401).json({message:"Invalid token"});let n=await getPreviewPostBySlug(s);if(!n)return t.status(401).json({message:"Invalid slug"});t.setPreviewData({});let i=`/posts/${n.slug}`;t.setHeader("Content-Type","text/html"),t.write(`<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${i}" />
    <script>window.location.href = '${i}'</script>
    </head>
    </html>`),t.end()}let l=(0,a.l)(s,"default"),u=(0,a.l)(s,"config"),c=new n.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/preview",pathname:"/api/preview",bundlePath:"",filename:""},userland:s})}};var t=require("../../webpack-api-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[222],()=>__webpack_exec__(3430));module.exports=r})();