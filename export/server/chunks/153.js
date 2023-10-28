exports.id=153,exports.ids=[153],exports.modules={7262:(e,t,s)=>{"use strict";s.d(t,{Z:()=>Avatar});var r=s(997),i=s(9049);function Avatar({name:e,picture:t}){return(0,r.jsxs)("div",{className:"flex items-center",children:[r.jsx("div",{className:"relative w-12 h-12 mr-4",children:r.jsx(i.Z,{src:t.url,layout:"fill",className:"rounded-full",alt:e})}),r.jsx("div",{className:"text-xl font-bold",children:e})]})}},961:(e,t,s)=>{"use strict";s.d(t,{Z:()=>Container});var r=s(997);function Container({children:e}){return r.jsx("div",{className:"container mx-auto px-5",children:e})}},9049:(e,t,s)=>{"use strict";s.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(997),i=s(5675),n=s.n(i);let contentfulLoader=({src:e,width:t,quality:s})=>`${e}?w=${t}&q=${s||75}`,__WEBPACK_DEFAULT_EXPORT__=e=>r.jsx(n(),{loader:contentfulLoader,alt:e.alt,...e})},5041:(e,t,s)=>{"use strict";s.d(t,{Z:()=>CoverImage});var r=s(997),i=s(9049),n=s(1664),a=s.n(n),l=s(9003),o=s.n(l);function CoverImage({title:e,url:t,slug:s}){let n=r.jsx(i.Z,{width:2e3,height:1e3,alt:`Cover Image for ${e}`,className:o()("shadow-small",{"hover:shadow-medium transition-shadow duration-200":s}),src:t});return r.jsx("div",{className:"sm:mx-0",children:s?r.jsx(a(),{href:`/posts/${s}`,legacyBehavior:!0,children:r.jsx("a",{"aria-label":e,children:n})}):n})}},4267:(e,t,s)=>{"use strict";s.d(t,{Z:()=>DateComponent});var r=s(997),i=s(4384),n=s.n(i);function DateComponent({dateString:e}){return r.jsx("time",{dateTime:e,children:n()(new Date(e),"LLLL	d, yyyy")})}},3576:(e,t,s)=>{"use strict";s.d(t,{Z:()=>Layout});var r=s(997),i=s(961),n=s(9003),a=s.n(n),l=s(9916),o=s(1664),c=s.n(o);function Alert({preview:e}){return r.jsx("div",{className:a()("border-b",{"bg-accent-7 border-accent-7 text-white":e,"bg-accent-1 border-accent-2":!e}),children:r.jsx(i.Z,{children:r.jsx("div",{className:"py-2 text-center text-sm",children:e?(0,r.jsxs)(r.Fragment,{children:["This is page is a preview."," ",r.jsx(c(),{href:"/api/exit-preview",className:"underline hover:text-cyan duration-200 transition-colors",children:"Click here"})," ","to exit preview mode."]}):(0,r.jsxs)(r.Fragment,{children:["The source code for this blog is"," ",r.jsx(c(),{href:`https://github.com/vercel/next.js/tree/canary/examples/${l.Ys}`,className:"underline hover:text-success duration-200 transition-colors",children:"available on GitHub"}),"."]})})})})}function Footer(){return r.jsx("footer",{className:"bg-accent-1 border-t border-accent-2",children:r.jsx(i.Z,{children:(0,r.jsxs)("div",{className:"py-28 flex flex-col lg:flex-row items-center",children:[r.jsx("h3",{className:"text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",children:"Statically Generated with Next.js."}),(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2",children:[r.jsx("a",{href:"https://nextjs.org/docs/basic-features/pages",className:"mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0",children:"Read Documentation"}),r.jsx("a",{href:`https://github.com/vercel/next.js/tree/canary/examples/${l.Ys}`,className:"mx-3 font-bold hover:underline",children:"View on GitHub"})]})]})})})}var x=s(968),d=s.n(x);function Meta(){return(0,r.jsxs)(d(),{children:[r.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),r.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),r.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),r.jsx("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),r.jsx("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),r.jsx("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),r.jsx("meta",{name:"msapplication-TileColor",content:"#000000"}),r.jsx("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),r.jsx("meta",{name:"theme-color",content:"#000"}),r.jsx("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),r.jsx("meta",{name:"description",content:`A statically generated blog example using Next.js and ${l.yf}.`}),r.jsx("meta",{property:"og:image",content:l.vC})]})}function Layout({preview:e,children:t}){return(0,r.jsxs)(r.Fragment,{children:[r.jsx(Meta,{}),(0,r.jsxs)("div",{className:"min-h-screen",children:[r.jsx(Alert,{preview:e}),r.jsx("main",{children:t})]}),r.jsx(Footer,{})]})}s(6689)},6557:(e,t,s)=>{"use strict";s.d(t,{Z:()=>MoreStories});var r=s(997),i=s(1664),n=s.n(i),a=s(7262),l=s(4267),o=s(5041);function PostPreview({title:e,coverImage:t,date:s,excerpt:i,author:c,slug:x}){return(0,r.jsxs)("div",{children:[r.jsx("div",{className:"mb-5",children:r.jsx(o.Z,{title:e,slug:x,url:t.url})}),r.jsx("h3",{className:"text-3xl mb-3 leading-snug",children:r.jsx(n(),{href:`/posts/${x}`,legacyBehavior:!0,children:r.jsx("a",{className:"hover:underline",children:e})})}),r.jsx("div",{className:"text-lg mb-4",children:r.jsx(l.Z,{dateString:s})}),r.jsx("p",{className:"text-lg leading-relaxed mb-4",children:i}),c&&r.jsx(a.Z,{name:c.name,picture:c.picture})]})}function MoreStories({posts:e}){return(0,r.jsxs)("section",{children:[r.jsx("h2",{className:"mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight",children:"More Stories"}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32",children:e.map(e=>r.jsx(PostPreview,{title:e.title,coverImage:e.coverImage,date:e.date,author:e.author,slug:e.slug,excerpt:e.excerpt},e.slug))})]})}},1842:(e,t,s)=>{"use strict";s.d(t,{DT:()=>getAllPostsForHome,ds:()=>getPostAndMorePosts,h9:()=>getAllPostsWithSlug});let r=`
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
`;async function fetchGraphQL(e,t=!1){return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t?process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN:process.env.CONTENTFUL_ACCESS_TOKEN}`},body:JSON.stringify({query:e})}).then(e=>e.json())}function extractPost(e){return e?.data?.postCollection?.items?.[0]}function extractPostEntries(e){return e?.data?.postCollection?.items}async function getAllPostsWithSlug(){let e=await fetchGraphQL(`query {
      postCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${r}
        }
      }
    }`);return extractPostEntries(e)}async function getAllPostsForHome(e){let t=await fetchGraphQL(`query {
      postCollection(order: date_DESC, preview: ${e?"true":"false"}) {
        items {
          ${r}
        }
      }
    }`,e);return extractPostEntries(t)}async function getPostAndMorePosts(e,t){let s=await fetchGraphQL(`query {
      postCollection(where: { slug: "${e}" }, preview: ${t?"true":"false"}, limit: 1) {
        items {
          ${r}
        }
      }
    }`,t),i=await fetchGraphQL(`query {
      postCollection(where: { slug_not_in: "${e}" }, order: date_DESC, preview: ${t?"true":"false"}, limit: 2) {
        items {
          ${r}
        }
      }
    }`,t);return{post:extractPost(s),morePosts:extractPostEntries(i)}}},9916:(e,t,s)=>{"use strict";s.d(t,{Ys:()=>r,oc:()=>n,vC:()=>a,yf:()=>i});let r="cms-contentful",i="Contentful",n="https://www.contentful.com",a="https://og-image.vercel.app/Next.js%20Blog%20Example%20with%20**Contentful**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOSIgaGVpZ2h0PSIzMiI%2BCiAgPHBhdGggZmlsbD0iI0ZGRDg1RiIgZD0iTTkuNyAyMi4zQzggMjAuNyA3IDE4LjUgNyAxNnMxLTQuNyAyLjYtNi4zYzEuNC0xLjQgMS40LTMuNiAwLTVzLTMuNi0xLjQtNSAwQzEuOCA3LjYgMCAxMS42IDAgMTZzMS44IDguNCA0LjcgMTEuM2MxLjQgMS40IDMuNiAxLjQgNSAwIDEuMy0xLjQgMS4zLTMuNiAwLTV6Ij48L3BhdGg%2BCiAgPHBhdGggZmlsbD0iIzNCQjRFNyIgZD0iTTkuNyA5LjdDMTEuMyA4IDEzLjUgNyAxNiA3czQuNyAxIDYuMyAyLjZjMS40IDEuNCAzLjYgMS40IDUgMHMxLjQtMy42IDAtNUMyNC40IDEuOCAyMC40IDAgMTYgMFM3LjYgMS44IDQuNyA0LjdjLTEuNCAxLjQtMS40IDMuNiAwIDUgMS40IDEuMyAzLjYgMS4zIDUgMHoiPjwvcGF0aD4KICA8cGF0aCBmaWxsPSIjRUQ1QzY4IiBkPSJNMjIuMyAyMi4zQzIwLjcgMjQgMTguNSAyNSAxNiAyNXMtNC43LTEtNi4zLTIuNmMtMS40LTEuNC0zLjYtMS40LTUgMHMtMS40IDMuNiAwIDVDNy42IDMwLjIgMTEuNiAzMiAxNiAzMnM4LjQtMS44IDExLjMtNC43YzEuNC0xLjQgMS40LTMuNiAwLTUtMS40LTEuMy0zLjYtMS4zLTUgMHoiPjwvcGF0aD4KICA8Y2lyY2xlIGN4PSI3LjIiIGN5PSI3LjIiIHI9IjMuNSIgZmlsbD0iIzMwOEJDNSI%2BPC9jaXJjbGU%2BCiAgPGNpcmNsZSBjeD0iNy4yIiBjeT0iMjQuOCIgcj0iMy41IiBmaWxsPSIjRDU0NjVGIj48L2NpcmNsZT4KPC9zdmc%2B"},9597:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(997);function MyApp({Component:e,pageProps:t}){return r.jsx(r.Fragment,{children:r.jsx(e,{...t})})}s(9517);let i=MyApp},9517:()=>{}};