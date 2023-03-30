import{a,i as p,o as r,e as _,f as t,k as G,F as B,l as O,b as m,t as h,h as n,u as g,m as H,p as b,j as $,q as y}from"./entry.0ce4fd9d.js";import{V as x,_ as S}from"./Footer.6f1e569e.js";const N=a({name:"overlay",components:{},data(){return{isActive:!1}},methods:{openOverlay(){this.isActive=!0},closeOverlay(){this.isActive=!1}}});const W=O('<p class="overlay__text" data-v-374413d3>Wir respektieren<br data-v-374413d3>Ihre Privatsphäre</p><div data-v-374413d3><div class="overlay__bigText overlay__space" data-v-374413d3>keine</div><div class="overlay__bigText" data-v-374413d3>Cookies</div><div class="overlay__bigText overlay__space" data-v-374413d3>kein</div><div class="overlay__bigText" data-v-374413d3>Tracking</div><div class="overlay__bigText overlay__space" data-v-374413d3>keine</div><div class="overlay__bigText" data-v-374413d3>Zugriffsprotokolle</div></div><div class="close" data-v-374413d3><div class="close__button" data-v-374413d3></div></div>',3),R=[W];function U(e,o,d,c,l,i){return r(),_(B,null,[t("div",{class:"overlayBtn",onClick:o[0]||(o[0]=s=>e.openOverlay())}),t("div",{class:G([{active:e.isActive},"overlay"]),onClick:o[1]||(o[1]=s=>e.closeOverlay())},R,2)],64)}const T=p(N,[["render",U],["__scopeId","data-v-374413d3"]]),K={class:"header--teaser"},Z={class:"header--title"},J={class:"header--title__heading"},Q={class:"header--text"},X=a({name:"PageHeader"}),Y=a({...X,props:{imageSource:{required:!0,type:String},headingText:{required:!0,type:String},teaserSource:{required:!0,type:String}},setup(e){const o=e,{$requireImg:d,$requireMd:c}=m(),l=c(o.teaserSource),i=d(o.imageSource);return(s,u)=>(r(),_("div",{id:"home",class:"header",style:H({"background-image":`url(${g(i)})`})},[t("div",K,[t("div",Z,[t("h1",J,h(e.headingText),1)]),t("div",Q,[n(g(x),{source:g(l)},null,8,["source"])])])],4))}});const w=p(Y,[["__scopeId","data-v-c33a84a4"]]),ee={class:"play_game--item"},te={class:"play_game--heading__h3"},oe={class:"play_game--image"},ne=["src","alt"],se={class:"play_game--text"},ie={class:"play_game--cta"},ae=["href"],ce={key:0,class:"play_game--cta__button",disabled:""},re={key:1,class:"play_game--cta__button"},_e=a({name:"StartGameElement"}),de=a({..._e,props:{headingText:{required:!0,type:String},imageSource:{required:!0,type:String},teaserText:{required:!0,type:String},buttonText:{required:!0,type:String},buttonLink:{required:!0,type:String},buttonEnabled:{required:!0,type:Boolean}},setup(e){const o=e,{$requireImg:d}=m(),c=d(o.imageSource);return(l,i)=>(r(),_("div",ee,[t("h3",te,h(e.headingText),1),t("div",oe,[t("img",{loading:"lazy",src:g(c),alt:`${e.headingText} logo`},null,8,ne)]),t("div",se,[n(g(x),{source:e.teaserText},null,8,["source"])]),t("div",ie,[t("a",{href:e.buttonLink},[e.buttonEnabled?(r(),_("button",re,h(e.buttonText),1)):(r(),_("button",ce,h(e.buttonText),1))],8,ae)])]))}});const k=p(de,[["__scopeId","data-v-d4b927ea"]]),le=a({name:"PlayTheGame",components:{StartGameElement:k}});const ue=e=>(b("data-v-4e6c7182"),e=e(),$(),e),pe={id:"game",class:"play_game"},ge=ue(()=>t("div",{class:"play_game--heading"},[t("h2",{class:"play_game--heading__h2"},"Starten")],-1)),he={class:"play-game--item__container"};function me(e,o,d,c,l,i){const s=k;return r(),_("div",pe,[ge,t("div",he,[n(s,{"heading-text":"Testen","image-source":"testen_sonne.svg","teaser-text":"Hier geht es direkt zu unserem Testspiel. Nur ein Klick entfernt.","button-text":"Testspiel starten","button-link":"https://preschooltest.lovemathe.de","button-enabled":!0}),n(s,{"heading-text":"Fördern","image-source":"foerdern_muschel.svg","teaser-text":"Wenn der Test auf einem Gebiet nicht erfolgreich war, gibt es hier die Möglichkeit durch gezielte Förderspiele an einer Verbesserung zu arbeiten.","button-text":"Förderspiel starten","button-link":"#","button-enabled":!1})])])}const I=p(le,[["render",me],["__scopeId","data-v-4e6c7182"]]),ve={class:"row two-rows--text"},xe={class:"two-rows--text__heading"},be={class:"two-rows--text__body"},$e={class:"row two-rows--image"},ye=["src","alt"],fe=a({name:"TwoRowsWithImage"}),Se=a({...fe,props:{heading:{required:!1,type:String},textSource:{required:!0,type:String},imageSource:{required:!0,type:String},imageAlt:{required:!0,type:String},flexDirection:{required:!0,type:String}},setup(e){const o=e,{$requireImg:d,$requireMd:c}=m(),l={"--flex-direction":o.flexDirection},i=c(o.textSource),s=d(o.imageSource);return(u,f)=>(r(),_("div",{class:"two-rows",style:l},[t("div",ve,[t("h3",xe,h(e.heading),1),t("div",be,[n(g(x),{source:g(i)},null,8,["source"])])]),t("div",$e,[t("img",{loading:"lazy",class:"two-rows--image__element",src:g(s),alt:e.imageAlt},null,8,ye)])]))}});const q=p(Se,[["__scopeId","data-v-c5a4c4e4"]]),Te={class:"lightbox"},we={key:0,class:"lightbox-content"},ke={class:"lightbox-content--box"},Ie=a({name:"ModalLightbox",data(){return{lightboxVisible:!1}},methods:{showLightbox(){this.lightboxVisible=!0,document.addEventListener("click",this.handleOutsideClick)},hideLightbox(){this.lightboxVisible=!1,document.removeEventListener("click",this.handleOutsideClick)},handleOutsideClick(e){const o=document.querySelector(".lightbox-content--box");this.lightboxVisible&&!o.contains(e.target)&&!e.target.classList.contains("lightbox-button--open")&&this.hideLightbox()}}}),qe=a({...Ie,props:{headingText:{required:!0,type:String},textSource:{required:!0,type:String},teaserText:{required:!0,type:String}},setup(e){const o=e,{$requireImg:d,$requireMd:c}=m(),l=c(o.textSource);return(i,s)=>(r(),_("div",Te,[t("button",{class:"lightbox-button--open",onClick:s[0]||(s[0]=(...u)=>i.showLightbox&&i.showLightbox(...u))},"Mehr dazu"),i.lightboxVisible?(r(),_("div",we,[t("div",ke,[t("div",{class:"lightbox-button--close",onClick:s[1]||(s[1]=(...u)=>i.hideLightbox&&i.hideLightbox(...u))}),t("h3",null,h(e.headingText),1),n(g(x),{source:g(l)},null,8,["source"])])])):y("",!0)]))}});const ze=p(qe,[["__scopeId","data-v-25deaf8f"]]),Fe={class:"full_size_text"},Pe={class:"full_size_text--heading"},Ee={class:"full_size_text--body"},Ce=a({name:"FullSizeText"}),Le=a({...Ce,props:{heading:{required:!1,type:String},textSource:{required:!0,type:String}},setup(e){const o=e,{$requireMd:d}=m(),c=d(o.textSource);return(l,i)=>(r(),_("div",Fe,[t("h3",Pe,h(e.heading),1),t("div",Ee,[n(g(x),{source:g(c)},null,8,["source"]),n(ze,{"teaser-text":"teaserText","heading-text":e.heading,"text-source":e.textSource},null,8,["heading-text","text-source"])])]))}});const v=p(Le,[["__scopeId","data-v-3ec87738"]]),Ve=a({name:"AboutUs",components:{TwoRowsWithImage:q,FullSizeText:v}});const Ae=e=>(b("data-v-cbe35d3a"),e=e(),$(),e),Me={id:"about",class:"about_us"},je=Ae(()=>t("h2",{class:"about_us--heading"},"Über das Projekt",-1));function De(e,o,d,c,l,i){const s=q,u=v;return r(),_("div",Me,[je,n(s,{heading:"Die Idee",textSource:"about_us/idea.md","image-source":"kid_writing.webp","image-alt":"writing kid","flex-direction":"row-reverse"}),n(s,{heading:"Ferry Porsche Challenge",textSource:"about_us/ferry_porsche_challenge.md","image-alt":"ferry porsche challenge","image-source":"porsche.webp","flex-direction":"row"}),n(u,{heading:"Relevanz",textSource:"about_us/relevance.md"})])}const z=p(Ve,[["render",De],["__scopeId","data-v-cbe35d3a"]]),Ge={class:"full_size_image"},Be={key:0,class:"full_size_image--heading"},Oe=["src","alt"],He=a({name:"FullSizeText"}),Ne=a({...He,props:{imageSource:{required:!0,type:String},altText:{required:!0,type:String},headingText:{required:!1,type:String}},setup(e){const o=e,{$requireImg:d}=m(),c=d(o.imageSource);return(l,i)=>(r(),_("div",Ge,[e.headingText?(r(),_("h3",Be,h(e.headingText),1)):y("",!0),t("img",{loading:"lazy",class:"full_size_image--image",src:g(c),alt:e.altText},null,8,Oe)]))}});const F=p(Ne,[["__scopeId","data-v-1ebe20b3"]]),We=a({name:"TestInstruction",components:{FullSizeText:v,FullSizeImage:F}});const Re=e=>(b("data-v-3fa1d892"),e=e(),$(),e),Ue={id:"instructions",class:"test_instruction"},Ke=Re(()=>t("h2",{class:"test_instruction--heading"},"Anleitung",-1));function Ze(e,o,d,c,l,i){const s=v,u=F;return r(),_("div",Ue,[Ke,n(s,{heading:"Testanleitung",textSource:"instruction/test_instruction.md"}),n(s,{heading:"Auswertung",textSource:"instruction/evaluation.md"}),n(u,{"image-source":"test_instruction.webp","alt-text":"Testanleitung"})])}const P=p(We,[["render",Ze],["__scopeId","data-v-3fa1d892"]]),Je=a({name:"VideoEmbed",props:{videoSource:{required:!0,type:String},videoTitle:{required:!0,type:String}}});const Qe={class:"video_hero"},Xe=["src","title"];function Ye(e,o,d,c,l,i){return r(),_("div",Qe,[t("iframe",{sandbox:"allow-scripts",loading:"lazy",width:"1120",height:"630",src:e.videoSource,frameborder:"0",title:e.videoTitle,allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:""},null,8,Xe)])}const E=p(Je,[["render",Ye],["__scopeId","data-v-ca0eb983"]]),et=a({name:"PresentationEmbed",props:{presentationSource:{required:!0,type:String},headingText:{required:!1,type:String},presentationTitle:{required:!0,type:String}}});const tt={class:"presentation_hero"},ot={key:0,class:"presentation_embed--heading"},nt={class:"presentation-container"},st=["title","src"];function it(e,o,d,c,l,i){return r(),_("div",tt,[e.headingText?(r(),_("h3",ot,h(e.headingText),1)):y("",!0),t("div",nt,[t("iframe",{sandbox:"allow-scripts",loading:"lazy",class:"presentation--iframe",title:e.presentationTitle,src:e.presentationSource,style:{border:"0"},webkitallowfullscreen:"true",mozallowfullscreen:"true"},null,8,st)])])}const C=p(et,[["render",it],["__scopeId","data-v-302dcd4a"]]),at=a({name:"ProjectDocumentation",components:{FullSizeText:v,PresentationEmbed:C}});const ct=e=>(b("data-v-97cafe5d"),e=e(),$(),e),rt={id:"documentation",class:"project_documentation"},_t=ct(()=>t("h2",{class:"project_documentation--heading"},"Dokumentation",-1));function dt(e,o,d,c,l,i){const s=C,u=v;return r(),_("div",rt,[_t,n(s,{"presentation-source":"//my.visme.co/_embed/8r46mwwk-webseite-lovemathe","heading-text":"Präsentation","presentation-title":"Präsentation lovemathe"}),n(u,{heading:"Projektbeschreibung",textSource:"documentation/project_description.md"}),n(u,{heading:"Literatur",textSource:"documentation/literature.md"})])}const L=p(at,[["render",dt],["__scopeId","data-v-97cafe5d"]]),lt=a({name:"Home",components:{PageHeader:w,VideoEmbed:E,PlayTheGame:I,AboutUs:z,TestInstruction:P,ProjectDocumentation:L,CookieButton:T,Footer:S}});const ut={class:"home"};function pt(e,o,d,c,l,i){const s=T,u=w,f=I,V=z,A=P,M=E,j=L,D=S;return r(),_("div",ut,[n(s),n(u,{"image-source":"header_background.webp",headingText:"LOVEMATHE",teaserSource:"header/header_teaser.md"}),n(f,{id:"test"}),n(V,{id:"about"}),n(A,{id:"anleitung"}),n(M,{videoSource:"https://player.vimeo.com/video/796631211?h=fcf59ebfa8&color=ff9933&byline=0&portrait=0&dnt=true","video-title":"Interview"}),n(j,{id:"dokumentation"}),n(D)])}const mt=p(lt,[["render",pt],["__scopeId","data-v-3fbcdf7d"]]);export{mt as default};
