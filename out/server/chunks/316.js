exports.id=316,exports.ids=[316],exports.modules={1421:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Avatar});var n=a(5910),r=a(6689),l=a.n(r);function Avatar({name:e,picture:t}){return l().createElement("div",{className:"flex items-center"},l().createElement("div",{className:"relative w-12 h-12 mr-4"},l().createElement(n.Z,{src:t.url,layout:"fill",className:"rounded-full",alt:e})),l().createElement("div",{className:"text-xl font-bold"},e))}},7100:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Container});var n=a(6689),r=a.n(n);function Container({children:e}){return r().createElement("div",{className:"container mx-auto px-5"},e)}},5910:(e,t,a)=>{"use strict";a.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var n=a(5675),r=a.n(n),l=a(6689),i=a.n(l);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}let contentfulLoader=({src:e,width:t,quality:a})=>`${e}?w=${t}&q=${a||75}`,__WEBPACK_DEFAULT_EXPORT__=e=>i().createElement(r(),_extends({loader:contentfulLoader,alt:e.alt},e))},419:(e,t,a)=>{"use strict";a.d(t,{Z:()=>CoverImage});var n=a(5910),r=a(1664),l=a.n(r),i=a(9003),c=a.n(i),s=a(6689),o=a.n(s);function CoverImage({title:e,url:t,slug:a}){let r=o().createElement(n.Z,{width:2e3,height:1e3,alt:`Cover Image for ${e}`,className:c()("shadow-small",{"hover:shadow-medium transition-shadow duration-200":a}),src:t});return o().createElement("div",{className:"sm:mx-0"},a?o().createElement(l(),{href:`/posts/${a}`,legacyBehavior:!0},o().createElement("a",{"aria-label":e},r)):r)}},6439:(e,t,a)=>{"use strict";a.d(t,{Z:()=>DateComponent});var n=a(4146),r=a(6689),l=a.n(r);function DateComponent({dateString:e}){return l().createElement("time",{dateTime:e},(0,n.format)(new Date(e),"LLLL	d, yyyy"))}},1112:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Layout});var n=a(7100),r=a(9003),l=a.n(r),i=a(150),c=a(1664),s=a.n(c),o=a(6689),m=a.n(o);function Alert({preview:e}){return m().createElement("div",{className:l()("border-b",{"bg-accent-7 border-accent-7 text-white":e,"bg-accent-1 border-accent-2":!e})},m().createElement(n.Z,null,m().createElement("div",{className:"py-2 text-center text-sm"},e?m().createElement(m().Fragment,null,"This is page is a preview."," ",m().createElement(s(),{href:"/api/exit-preview",className:"underline hover:text-cyan duration-200 transition-colors"},"Click here")," ","to exit preview mode."):m().createElement(m().Fragment,null,"The source code for this blog is"," ",m().createElement(s(),{href:`https://github.com/vercel/next.js/tree/canary/examples/${i.Ys}`,className:"underline hover:text-success duration-200 transition-colors"},"available on GitHub"),"."))))}function Footer(){return m().createElement("footer",{className:"bg-accent-1 border-t border-accent-2"},m().createElement(n.Z,null,m().createElement("div",{className:"py-28 flex flex-col lg:flex-row items-center"},m().createElement("h3",{className:"text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2"},"Statically Generated with Next.js."),m().createElement("div",{className:"flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2"},m().createElement("a",{href:"https://nextjs.org/docs/basic-features/pages",className:"mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"},"Read Documentation"),m().createElement("a",{href:`https://github.com/vercel/next.js/tree/canary/examples/${i.Ys}`,className:"mx-3 font-bold hover:underline"},"View on GitHub")))))}var u=a(968),g=a.n(u);function Meta(){return m().createElement(g(),null,m().createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),m().createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),m().createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),m().createElement("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),m().createElement("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),m().createElement("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),m().createElement("meta",{name:"msapplication-TileColor",content:"#000000"}),m().createElement("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),m().createElement("meta",{name:"theme-color",content:"#000"}),m().createElement("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),m().createElement("meta",{name:"description",content:`A statically generated blog example using Next.js and ${i.yf}.`}),m().createElement("meta",{property:"og:image",content:i.vC}))}function Layout({preview:e,children:t}){return m().createElement(m().Fragment,null,m().createElement(Meta,null),m().createElement("div",{className:"min-h-screen"},m().createElement(Alert,{preview:e}),m().createElement("main",null,t)),m().createElement(Footer,null))}},2868:(e,t,a)=>{"use strict";a.d(t,{Z:()=>MoreStories});var n=a(1664),r=a.n(n),l=a(1421),i=a(6439),c=a(419),s=a(6689),o=a.n(s);function PostPreview({title:e,coverImage:t,date:a,excerpt:n,author:s,slug:m}){return o().createElement("div",null,o().createElement("div",{className:"mb-5"},o().createElement(c.Z,{title:e,slug:m,url:t.url})),o().createElement("h3",{className:"text-3xl mb-3 leading-snug"},o().createElement(r(),{href:`/posts/${m}`,legacyBehavior:!0},o().createElement("a",{className:"hover:underline"},e))),o().createElement("div",{className:"text-lg mb-4"},o().createElement(i.Z,{dateString:a})),o().createElement("p",{className:"text-lg leading-relaxed mb-4"},n),s&&o().createElement(l.Z,{name:s.name,picture:s.picture}))}function MoreStories({posts:e}){return o().createElement("section",null,o().createElement("h2",{className:"mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight"},"More Stories"),o().createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32"},e.map(e=>o().createElement(PostPreview,{key:e.slug,title:e.title,coverImage:e.coverImage,date:e.date,author:e.author,slug:e.slug,excerpt:e.excerpt}))))}},4405:(e,t,a)=>{"use strict";a.d(t,{DT:()=>getAllPostsForHome,ds:()=>getPostAndMorePosts,h9:()=>getAllPostsWithSlug});let n=`
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
          ${n}
        }
      }
    }`);return extractPostEntries(e)}async function getAllPostsForHome(e){let t=await fetchGraphQL(`query {
      postCollection(order: date_DESC, preview: ${e?"true":"false"}) {
        items {
          ${n}
        }
      }
    }`,e);return extractPostEntries(t)}async function getPostAndMorePosts(e,t){let a=await fetchGraphQL(`query {
      postCollection(where: { slug: "${e}" }, preview: ${t?"true":"false"}, limit: 1) {
        items {
          ${n}
        }
      }
    }`,t),r=await fetchGraphQL(`query {
      postCollection(where: { slug_not_in: "${e}" }, order: date_DESC, preview: ${t?"true":"false"}, limit: 2) {
        items {
          ${n}
        }
      }
    }`,t);return{post:extractPost(a),morePosts:extractPostEntries(r)}}},150:(e,t,a)=>{"use strict";a.d(t,{Ys:()=>n,oc:()=>l,vC:()=>i,yf:()=>r});let n="cms-contentful",r="Contentful",l="https://www.contentful.com",i="https://og-image.vercel.app/Next.js%20Blog%20Example%20with%20**Contentful**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOSIgaGVpZ2h0PSIzMiI%2BCiAgPHBhdGggZmlsbD0iI0ZGRDg1RiIgZD0iTTkuNyAyMi4zQzggMjAuNyA3IDE4LjUgNyAxNnMxLTQuNyAyLjYtNi4zYzEuNC0xLjQgMS40LTMuNiAwLTVzLTMuNi0xLjQtNSAwQzEuOCA3LjYgMCAxMS42IDAgMTZzMS44IDguNCA0LjcgMTEuM2MxLjQgMS40IDMuNiAxLjQgNSAwIDEuMy0xLjQgMS4zLTMuNiAwLTV6Ij48L3BhdGg%2BCiAgPHBhdGggZmlsbD0iIzNCQjRFNyIgZD0iTTkuNyA5LjdDMTEuMyA4IDEzLjUgNyAxNiA3czQuNyAxIDYuMyAyLjZjMS40IDEuNCAzLjYgMS40IDUgMHMxLjQtMy42IDAtNUMyNC40IDEuOCAyMC40IDAgMTYgMFM3LjYgMS44IDQuNyA0LjdjLTEuNCAxLjQtMS40IDMuNiAwIDUgMS40IDEuMyAzLjYgMS4zIDUgMHoiPjwvcGF0aD4KICA8cGF0aCBmaWxsPSIjRUQ1QzY4IiBkPSJNMjIuMyAyMi4zQzIwLjcgMjQgMTguNSAyNSAxNiAyNXMtNC43LTEtNi4zLTIuNmMtMS40LTEuNC0zLjYtMS40LTUgMHMtMS40IDMuNiAwIDVDNy42IDMwLjIgMTEuNiAzMiAxNiAzMnM4LjQtMS44IDExLjMtNC43YzEuNC0xLjQgMS40LTMuNiAwLTUtMS40LTEuMy0zLjYtMS4zLTUgMHoiPjwvcGF0aD4KICA8Y2lyY2xlIGN4PSI3LjIiIGN5PSI3LjIiIHI9IjMuNSIgZmlsbD0iIzMwOEJDNSI%2BPC9jaXJjbGU%2BCiAgPGNpcmNsZSBjeD0iNy4yIiBjeT0iMjQuOCIgcj0iMy41IiBmaWxsPSIjRDU0NjVGIj48L2NpcmNsZT4KPC9zdmc%2B"},6424:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l}),a(9517);var n=a(6689),r=a.n(n);function MyApp({Component:e,pageProps:t,router:a}){return r().createElement(r().Fragment,null,r().createElement(e,t))}let l=MyApp},9517:()=>{}};