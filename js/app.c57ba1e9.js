(function(e){function t(t){for(var i,o,a=t[0],l=t[1],s=t[2],d=0,b=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(b.length)b.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var l=n[a];0!==c[l]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},c={app:0},r=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1d86":function(e,t,n){"use strict";n("c5a7")},2527:function(e,t,n){e.exports=n.p+"img/enterprise-toolkit.a7952ad3.svg"},2655:function(e,t,n){"use strict";n("b851")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),c={id:"app"},r={class:"root-container"};function o(e,t,n,o,a,l){var s=Object(i["q"])("Drops"),u=Object(i["q"])("Landing"),d=Object(i["q"])("Content"),b=Object(i["q"])("Footer");return Object(i["j"])(),Object(i["f"])("div",c,[Object(i["g"])(s),Object(i["g"])("div",r,[Object(i["g"])(u),(Object(i["j"])(!0),Object(i["f"])(i["a"],null,Object(i["p"])(o.contents,(function(e,t){return Object(i["j"])(),Object(i["f"])("div",{key:t,class:["content-wrapper",o.aligns[t]]},[Object(i["g"])(d,{content:e,align:o.aligns[t]},null,8,["content","align"])],2)})),128)),Object(i["g"])(b)])])}n("d81d");var a=Object(i["s"])("data-v-bf7e9284"),l=a((function(e,t,n,c,r,o){return Object(i["j"])(),Object(i["f"])("div",{class:["landing",e.$mq]},[Object(i["g"])("div",{class:["ngd",e.$mq]},Object(i["r"])(c.ngdName),3),Object(i["g"])("div",{class:["title",e.$mq]},Object(i["r"])(c.title),3),Object(i["g"])("div",{class:["subtitle",e.$mq]},Object(i["r"])(c.subtitle),3)],2)})),s={name:"Landing",setup:function(){var e=Object(i["i"])("mq"),t=Object(i["o"])("ngd enterprise"),n="mobile"===e.value?Object(i["o"])("Blockchain\nDeveloper\nTools"):Object(i["o"])("Blockchain Developer Tools"),c=Object(i["d"])((function(){return"mobile"===e.value?"A STANDARDS-BASED\nAPPROACH\nFOR THE SMART\nECONOMY":"A STANDARDS-BASED APPROACH\nFOR THE SMART ECONOMY"}));return{ngdName:t,title:n,subtitle:c}}};n("1d86");s.render=l,s.__scopeId="data-v-bf7e9284";var u=s,d=Object(i["s"])("data-v-2bf86cc3");Object(i["l"])("data-v-2bf86cc3");var b={class:"drops",ref:"container"};Object(i["k"])();var f=d((function(e,t,n,c,r,o){return Object(i["j"])(),Object(i["f"])("div",b,null,512)})),g=(n("99af"),n("a15b"),n("5530")),m=n("ade3"),h=n("b8bf"),p=n.n(h),j=n("2ef0"),O=n.n(j),v={name:"Drops",setup:function(){var e=Object(i["o"])(null),t=Object(i["o"])(null);return{render:e,engine:t}},mounted:function(){window.addEventListener("resize",O.a.debounce(this.renderWorld,100)),this.renderWorld()},methods:{renderWorld:function(){var e=p.a.Engine,t=p.a.Render,i=p.a.World,c=p.a.Bodies,r=p.a.Mouse,o=p.a.MouseConstraint,a=p.a.Common,l=p.a.Vertices;window.decomp=n("0dd7"),this.render&&this.engine&&(i.clear(this.engine&&this.engine.world),e.clear(this.engine),t.stop(this.render),this.render.canvas.remove(),this.render.canvas=null,this.render.context=null,this.render.textures={});var s=O.a.get(this.$refs,"container.clientHeight"),u=O.a.get(this.$refs,"container.clientWidth");if(s&&u){var d=e.create(),b=t.create({element:this.$refs.container,engine:d,options:{height:s,width:u,wireframes:!1,background:"transparent"}}),f="mobile"===this.$mq?60:150,h=function(e,t){return!t||t<3?e/2:3===t?f*Math.sqrt(3)/t:e/(2*Math.sin(180/t))},j=function(e){return e*Math.PI/180},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.2,n=Math.random()<.5;return n?Math.random()*(u*t+e):Math.random()*(u*t)+u*(1-t)-e},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;return s/2+Math.random()*(2*e)-e},y=Object(m["a"])({friction:1e-4},"friction",.01),S=function(e){for(var t=[2*e,0],n=0;n<180;n++){var i=-1,c=-1;n<90?(i=(1-Math.cos(j(n)))*e,c=Math.sin(j(n))*e):90===n?(i=e,c=e):(i=(1+Math.cos(j(180-n)))*e,c=Math.sin(j(180-n))*e),t.push(i),t.push(c)}return t.join(" ")},M=l.fromPath(S(h(f))),w=a.choose(["#00AF92"]),x=c.fromVertices(v(),k(),a.choose([M]),Object(g["a"])(Object(g["a"])({},y),{},{render:{fillStyle:w,strokeStyle:w,lineWidth:1}}),!0),q=function(e){var t=e/3*2,n=t/2,i=Math.round(n*Math.sqrt(3));return"".concat(n," 0 ").concat(t," ").concat(i," ").concat(n," ").concat(2*i," 0 ").concat(i)},P=l.fromPath(q(f)),H=a.choose(["#917CDC"]),A=c.fromVertices(v(),k(),a.choose([P]),Object(g["a"])(Object(g["a"])({},y),{},{render:{fillStyle:H,strokeStyle:H,lineWidth:1}}),!0),$=c.polygon(v(),k(),3,h(f,3),Object(g["a"])(Object(g["a"])({},y),{},{render:{fillStyle:"#DEFC78"}})),D=c.rectangle(v(),k(),f,f,Object(g["a"])(Object(g["a"])({},y),{},{render:{fillStyle:"#EF816A"}})),E=c.rectangle(v(),k(),f,f/4,Object(g["a"])(Object(g["a"])({},y),{},{render:{fillStyle:"#25AEE4"}})),T=c.polygon(v(),k(),5,h(f,5),Object(g["a"])(Object(g["a"])({},y),{},{render:{fillStyle:"#F9FAFA"}})),_=c.circle(v(),k(),f/2,Object(g["a"])(Object(g["a"])({},y),{},{render:{fillStyle:"#00E599"}})),C=10,F=20,R="transparent",N=c.rectangle(0+C,s,C,2*s,{isStatic:!0,render:{fillStyle:R}}),W=c.rectangle(u-C,s,C,2*s,{isStatic:!0,render:{fillStyle:R}}),B=c.rectangle(u/2,0,u,F,{isStatic:!0,render:{fillStyle:R}}),L=c.rectangle(u/2,s-F,u,F,{isStatic:!0,render:{fillStyle:R}});i.add(d.world,[x,$,D,E,T,A,_,B,N,W,L]);var I=r.create(b.canvas),V=o.create(d,{mouse:I,constraint:{stiffness:.01,render:{visible:!1}}});V.mouse.element.removeEventListener("mousewheel",V.mouse.mousewheel),V.mouse.element.removeEventListener("DOMMouseScroll",V.mouse.mousewheel),b.mouse=I,i.add(d.world,V),e.run(d),t.run(b),this.engine=d,this.render=b}}},unmounted:function(){window.removeEventListener("resize",this.renderWorld)}};n("2655");v.render=f,v.__scopeId="data-v-2bf86cc3";var k=v,y=(n("b0c0"),Object(i["s"])("data-v-52f06a43"));Object(i["l"])("data-v-52f06a43");var S={class:"link-container"};Object(i["k"])();var M=y((function(e,t,n,c,r,o){return Object(i["j"])(),Object(i["f"])("div",{class:["container","".concat(n.align," ").concat("mobile"===e.$mq?"":e.$mq)],style:{height:"mobile"===e.$mq?"auto":"".concat(n.content.iconPcHeight,"px")}},[Object(i["g"])("div",{class:["content-wrapper",n.align]},[Object(i["g"])("div",{class:["title",e.$mq]},Object(i["r"])(n.content.title),3),Object(i["g"])("div",{class:["tagline",e.$mq]},Object(i["r"])(n.content.tagline),3),Object(i["g"])("div",S,[(Object(i["j"])(!0),Object(i["f"])(i["a"],null,Object(i["p"])(n.content.links,(function(t,n){return Object(i["j"])(),Object(i["f"])("a",{key:n,href:t.url,class:["link",e.$mq]},Object(i["r"])(t.name),11,["href"])})),128))])],2),"mobile"===e.$mq?(Object(i["j"])(),Object(i["f"])("img",{key:0,src:n.content.icon,style:{height:"".concat(n.content.iconMobileHeight,"px")}},null,12,["src"])):(Object(i["j"])(),Object(i["f"])("img",{key:1,src:n.content.icon,style:{height:"".concat(n.content.iconPcHeight,"px"),position:"absolute",left:"right"===n.content.align?"".concat(-1*n.content.pcShift,"px"):"unset",right:"left"===n.content.align?"".concat(-1*n.content.pcShift,"px"):"unset"}},null,12,["src"]))],6)})),w={name:"Content",props:{align:String,content:Object}};n("dd6d");w.render=M,w.__scopeId="data-v-52f06a43";var x=w,q=Object(i["s"])("data-v-c3c51610");Object(i["l"])("data-v-c3c51610");var P=Object(i["g"])("div",{class:"divider"},null,-1),H={class:"email"},A={class:"address"},$={class:"address"};Object(i["k"])();var D=q((function(e,t,n,c,r,o){return Object(i["j"])(),Object(i["f"])("div",{class:["footer",e.$mq]},[P,Object(i["g"])("div",{class:["links-row",e.$mq]},[Object(i["g"])("div",{class:["ngd-link",e.$mq]},[Object(i["g"])("a",{href:c.ngd.url},Object(i["r"])(c.ngd.name),9,["href"])],2),Object(i["g"])("div",{class:["links-wrapper",e.$mq]},[(Object(i["j"])(!0),Object(i["f"])(i["a"],null,Object(i["p"])(c.links,(function(e,t){return Object(i["j"])(),Object(i["f"])("a",{key:t,href:e.url,class:"link"},Object(i["r"])(e.name),9,["href"])})),128))],2)],2),Object(i["g"])("div",{class:["contact",e.$mq]},[Object(i["g"])("div",H,Object(i["r"])(c.contact.email),1),Object(i["g"])("div",A,Object(i["r"])(c.contact.address),1),Object(i["g"])("div",$,Object(i["r"])(c.contact.copyright),1)],2)],2)})),E={name:"Footer",setup:function(){var e=Object(i["m"])({name:"ngd enterprise",url:""}),t=Object(i["m"])([{name:"Home",url:""},{name:"Neo Protocol",url:""},{name:"Developer",url:""},{name:"Docs",url:""}]),n=Object(i["m"])({email:"ngdenterprise@aaa.com",address:"8201 164th ave ne #200, redmond, wa 98052",copyright:"@2020 ngd enterprise"});return{ngd:e,links:t,contact:n}}};n("7757");E.render=D,E.__scopeId="data-v-c3c51610";var T=E,_=(n("b20f"),{name:"App",components:{Landing:u,Drops:k,Content:x,Footer:T},setup:function(){var e=Object(i["i"])("mq"),t=Object(i["m"])([{title:"Blockchain Toolkit",tagline:"develop, debug, test, deploy, track and manage your neo blockchain applications",links:[{name:"github",url:""},{name:"vs code extension",url:""},{name:"quick start",url:""}],align:"left",icon:n("984a"),iconPcHeight:272,pcShift:136,iconMobileHeight:56},{title:"Smart Contract Debugger",tagline:"debugger extension for neo smart contracts",links:[{name:"github",url:""},{name:"vs code extension",url:""},{name:"design notes",url:""}],align:"right",icon:n("c163"),iconPcHeight:390,pcShift:100,iconMobileHeight:84},{title:"Visual DevTracker",tagline:"neo express blockchain explorer that is directly available within vs code",links:[{name:"github",url:""},{name:"vs code extension",url:""},{name:"design notes",url:""}],align:"left",icon:n("6f68"),iconPcHeight:448,pcShift:112,iconMobileHeight:84},{title:"Private Net",tagline:"neo express",links:[{name:"github",url:""},{name:"quick start",url:""},{name:"design notes",url:""}],align:"right",icon:n("f5e1"),iconPcHeight:324,pcShift:206,iconMobileHeight:70},{title:"Enterprise Toolkit",tagline:"model, design, and develop standard-based artifacts based on the iwa ttf",links:[{name:"github",url:""},{name:"vs code extension",url:""},{name:"iwa ttf",url:""}],align:"left",icon:n("2527"),iconPcHeight:197,pcShift:196,iconMobileHeight:42},{title:"Visual Token Designer",tagline:"vs code extension that facilitates manipulation of artifacts in the ttf",links:[{name:"github",url:""},{name:"vs code extension",url:""}],align:"right",icon:n("b691"),iconPcHeight:288,pcShift:0,iconMobileHeight:62},{title:"Unified Programming Model",tagline:"neo fx",links:[{name:"github",url:""},{name:"design notes",url:""},{name:"unified programming model",url:""}],align:"left",icon:n("cc8f"),iconPcHeight:335,pcShift:100,iconMobileHeight:72}]),c=Object(i["d"])((function(){return t.map((function(t){return"mobile"===e.value?"mobile":t.align}))})),r=Object(i["m"])({name:"ngd enterprise",url:""});return{contents:t,aligns:c,ngd:r}}});n("be25");_.render=o;var C=_,F=n("61c2");Object(i["e"])(C).use(F["a"],{breakpoints:{mobile:992,pc:1/0},defaultBreakpoint:"mobile"}).mount("#app")},5936:function(e,t,n){},"6f68":function(e,t,n){e.exports=n.p+"img/visual-devtracker.c469dafc.svg"},7757:function(e,t,n){"use strict";n("5936")},"984a":function(e,t,n){e.exports=n.p+"img/blockchain-toolkit.625fbf31.svg"},b20f:function(e,t,n){},b43e:function(e,t,n){},b691:function(e,t,n){e.exports=n.p+"img/visual-token-designer.b0ceeabb.svg"},b851:function(e,t,n){},be25:function(e,t,n){"use strict";n("b43e")},c163:function(e,t,n){e.exports=n.p+"img/smart-contract-debugger.ebf1a684.svg"},c5a7:function(e,t,n){},cc8f:function(e,t,n){e.exports=n.p+"img/unified-programming-model.4f428133.svg"},dd6d:function(e,t,n){"use strict";n("e8a4")},e8a4:function(e,t,n){},f5e1:function(e,t,n){e.exports=n.p+"img/private-net.dd6436e7.svg"}});
//# sourceMappingURL=app.c57ba1e9.js.map