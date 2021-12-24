"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2538],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var s=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?s.createElement(h,a(a({ref:t},c),{},{components:n})):s.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<r;u++)a[u]=n[u];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61037:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},CarbonAds:function(){return d},default:function(){return h}});var s=n(99518),o=n(57344),r=n(59496),a=n(49613),i=["components"],l={id:"getting-started",title:"Getting started",layout:"Guide",order:2},u=void 0,c={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"export const CarbonAds = () => {",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/cssnano/cssnano/edit/master/site/docs/getting-started.mdx",tags:[],version:"current",lastUpdatedBy:"Ludovico Fischer",lastUpdatedAt:1620223835,formattedLastUpdatedAt:"5/5/2021",frontMatter:{id:"getting-started",title:"Getting started",layout:"Guide",order:2},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/Introduction"},next:{title:"Configuration",permalink:"/docs/config-file"}},p=[{value:"What is a build process?",id:"what-is-a-build-process",children:[],level:2},{value:"Installing Node.js &amp; npm",id:"installing-nodejs--npm",children:[],level:2},{value:"Using PostCSS CLI",id:"using-postcss-cli",children:[],level:2},{value:"Alternatives to using the CLI",id:"alternatives-to-using-the-cli",children:[{value:"Grunt",id:"grunt",children:[],level:3},{value:"Gulp",id:"gulp",children:[],level:3},{value:"Webpack",id:"webpack",children:[],level:3},{value:"Others",id:"others",children:[],level:3}],level:2}],d=function(){return(0,r.useEffect)((function(){if(!document.getElementById("carbonads")){var e=document.querySelector(".carbon_ads_mdx_wrapper"),t=document.createElement("script");t.src="//cdn.carbonads.com/carbon.js?serve=CEBI62JN&placement=cssnanoco",t.async=!0,t.id="_carbonads_js",e.appendChild(t)}})),(0,a.kt)("div",{className:"carbon_ads_mdx_wrapper"})},m={toc:p,CarbonAds:d};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d,{mdxType:"CarbonAds"}),(0,a.kt)("h2",{id:"what-is-a-build-process"},"What is a build process?"),(0,a.kt)("p",null,"A build process is a sequence of tasks, usually automated, that you run each\ntime that you want to deploy a new release of your application. cssnano fits\ninto this build process as a tool that should be run on your development CSS,\nand in turn will create compressed production assets. These are then uploaded\nto your production server or CDN."),(0,a.kt)("p",null,"There are a number of different ways that you can compose a build process; we\nrecommend using the command line, but you might also want to consider an\nabstraction such as ",(0,a.kt)("a",{parentName:"p",href:"http://gulpjs.com/"},"gulp"),", especially for more complex\nsystems."),(0,a.kt)("h2",{id:"installing-nodejs--npm"},"Installing Node.js & npm"),(0,a.kt)("p",null,"cssnano is installed using the command line, using ",(0,a.kt)("a",{parentName:"p",href:"https://npmjs.com"},"npm"),"; so\nyou will need to use an application such as Terminal or the Windows Command\nPrompt. If you don't already have Node.js installed, then you'll need to\ninstall it."),(0,a.kt)("p",null,"We require a minimum of Node.js version 10.13.0  to run, and we\nrecommend that you install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/creationix/nvm"},"nvm")," to manage\nyour Node.js versions."),(0,a.kt)("p",null,"Alternately, you can ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"visit the Node.js website")," and\nfollow the instructions there to install it for your machine."),(0,a.kt)("p",null,"cssnano is a ",(0,a.kt)("a",{parentName:"p",href:"https://postcss.org/"},"PostCSS")," plugin, so running cssnano also requires installing PostCSS.\nOnce you have installed Node.js & npm, you can run this command to install\ncssnano and PostCSS into your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install cssnano postcss --save-dev\n")),(0,a.kt)("p",null,"Note that for most typical setups, we recommend that you compress your CSS\nduring your deployment step, so that when it is uploaded to your server/CDN\nit is already optimized. In most cases, you should not need to install cssnano\non your web server."),(0,a.kt)("h2",{id:"using-postcss-cli"},"Using PostCSS CLI"),(0,a.kt)("p",null,"Once you have cssnano installed, you will need a PostCSS runner in order to\nuse it to compress your CSS files. We recommend the PostCSS command line module,\nbut you can use any of the alternatives listed in the next section."),(0,a.kt)("p",null,"You can install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/postcss/postcss-cli"},"PostCSS CLI"),"\nwith this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev postcss-cli\n")),(0,a.kt)("p",null,"Once you have done this, you will need to configure cssnano by creating a\n",(0,a.kt)("inlineCode",{parentName:"p"},"postcss.config.js")," file in the root of your project. This should contain\ncssnano as well as any other ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/postcss/postcss/blob/main/docs/plugins.md"},"plugins")," that you might want for your project;\nas an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n    plugins: [\n        require('cssnano')({\n            preset: 'default',\n        }),\n    ],\n};\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Read more about presets in ",(0,a.kt)("a",{parentName:"em",href:"/docs/presets"},"our presets guide"),".")),(0,a.kt)("p",null,"You can now minify your CSS files! Try it out by creating a CSS file in your\nproject named ",(0,a.kt)("inlineCode",{parentName:"p"},"input.css"),", with some styles in there. Then, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx postcss input.css > output.css\n")),(0,a.kt)("p",null,"You should then see an ",(0,a.kt)("inlineCode",{parentName:"p"},"output.css")," with the same styles but compressed!"),(0,a.kt)("p",null,"Note that you can also find a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cssnano/cssnano/tree/master/packages/example-cli-usage"},"basic example")," in our GitHub repository."),(0,a.kt)("h2",{id:"alternatives-to-using-the-cli"},"Alternatives to using the CLI"),(0,a.kt)("p",null,"You can also use any of the other available PostCSS runners to manage your\nCSS compression; these are the most common."),(0,a.kt)("h3",{id:"grunt"},"Grunt"),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nDmitry/grunt-postcss"},"grunt-postcss"),"."),(0,a.kt)("h3",{id:"gulp"},"Gulp"),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/postcss/gulp-postcss"},"gulp-postcss"),"."),(0,a.kt)("h3",{id:"webpack"},"Webpack"),(0,a.kt)("p",null,"You can use cssnano explicitly with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/postcss/postcss-loader"},"postcss-loader"),"."),(0,a.kt)("p",null,"You can also use the cssnano with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin"},"webpack plugin")),(0,a.kt)("h3",{id:"others"},"Others"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/postcss/postcss#usage"},"PostCSS documentation")," for\nother available runners."))}h.isMDXComponent=!0}}]);