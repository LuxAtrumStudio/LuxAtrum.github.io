(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"16l3":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f})),a.d(t,"pageQuery",(function(){return p}));a("gu/5"),a("eoYm");var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),c=a("9eSz"),o=a.n(c),i=a("ma3e"),u=a("RMg3"),s=function(e){var t=e.children;return n.a.createElement("div",{className:"container"},n.a.createElement(u.a,null,n.a.createElement(u.b,null,"Arden Rasmussen"),n.a.createElement(u.c,{to:"/projects"},"Projects")),t)},m=a("bupk"),d=a("DTi0");function f(e){var t=e.data,a=t.allMarkdownRemark.edges,c=Object(r.useState)({filteredData:[],query:""}),u=c[0],f=c[1],p=u.filteredData,h=u.query,E=p&&""!==h?p:a;return n.a.createElement(s,null,n.a.createElement(m.a,{path:"/projects"}),n.a.createElement(d.b,null,n.a.createElement("input",{className:"u-full-width",type:"text",placeholder:"Search...",onChange:function(e){var a=e.target.value,r=(t.allMarkdownRemark.edges||[]).filter((function(e){var t=e.node.frontmatter,r=t.title,n=t.tags;return r.toLowerCase().includes(a.toLowerCase())||n.join("").toLowerCase().includes(a.toLowerCase())}));f({query:a,filteredData:r})}})),E.filter((function(e){return e.node.frontmatter.title.length>0})).map((function(e){var t=e.node,a=null;return a=null!==t.frontmatter.featuredImage?n.a.createElement(d.b,null,n.a.createElement(d.a,{width:"three"},n.a.createElement(o.a,{fluid:t.frontmatter.featuredImage.childImageSharp.fluid})),n.a.createElement(d.a,{width:"nine"},t.excerpt)):t.excerpt,n.a.createElement(m.b,{id:t.id,key:t.id},n.a.createElement(d.b,null,n.a.createElement(d.a,{width:"nine"},n.a.createElement(l.a,{className:"page-link",to:t.frontmatter.path},t.frontmatter.title),n.a.createElement("p",{className:"page-subheader"},t.frontmatter.date," ",t.timeToRead,"m")),n.a.createElement(d.a,{width:"three"},null!==t.frontmatter.github?n.a.createElement("a",{href:t.frontmatter.github},n.a.createElement(i.a,{size:"3rem"})):n.a.createElement("div",null),null!==t.frontmatter.tags?n.a.createElement("ul",{className:"tags"},t.frontmatter.tags.map((function(e){return n.a.createElement("li",{className:"tag",key:e},e)}))):n.a.createElement("ul",null))),n.a.createElement("div",null,a))})))}var p="3932453220"},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("AqHK"),a("4DPX"),a("sc67"),a("E5k/");var r=a("q1tI"),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(n),c=function(){return(c=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},o=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};function i(e){return function(t){return r.createElement(u,c({attr:c({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.createElement(t.tag,c({key:a},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var a,n=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var l=e.attr,i=e.title,u=o(e,["attr","title"]);return r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,u,{className:a,style:c({color:e.color||t.color},t.style,e.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(n)}}}]);
//# sourceMappingURL=component---src-pages-projects-js-b6f972406511aeced068.js.map