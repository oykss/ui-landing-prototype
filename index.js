import{S as u,P as E,A as h,N as S,a as P,v as m}from"./assets/vendor-Cauv_7Sd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}})();new u("#hero .swiper",{modules:[E,h],loop:!0,autoplay:{delay:15e3,disableOnInteraction:!1},pagination:{el:"#hero .swiper-pagination",clickable:!0}});new u("#offer .swiper",{modules:[E],loop:!0,slidesPerView:1,pagination:{el:"#offer .swiper-pagination",clickable:!0,dynamicBullets:!0},breakpoints:{768:{slidesPerView:2},1280:{slidesPerView:3},1440:{slidesPerView:4}}});new u("#achieve .swiper",{modules:[h],loop:!0,slidesPerView:1,autoplay:{delay:1e4,disableOnInteraction:!1},breakpoints:{768:{slidesPerView:2},1280:{slidesPerView:3}}});new u("#reviews .swiper",{modules:[h,S],loop:!0,slidesPerView:1.5,spaceBetween:20,centeredSlides:!0,navigation:{nextEl:"#reviews .swiper-button-next",prevEl:"#reviews .swiper-button-prev"},autoplay:{delay:1e4,disableOnInteraction:!1},breakpoints:{768:{slidesPerView:2},1280:{slidesPerView:2},1440:{slidesPerView:2}},on:{slideChange:function(){const e=document.querySelector("#reviews .icon-untitled");e.classList.remove("animate-button"),setTimeout(()=>{e.classList.add("animate-button")},100)}}});P.init({duration:1100,offset:200,easing:"ease-in-out"});window.addEventListener("scroll",function(){const e=document.getElementById("header"),t=e.offsetTop;window.pageYOffset>t?e.classList.add("sticky"):e.classList.remove("sticky")});const c={item1:{type:"new",price:6899,img:"img-1-@1x.jpg",imgLarge:"img-1-@2x.jpg",category:"Новинки"},item2:{type:"action",price:7520,img:"img-1-@1x.jpg",imgLarge:"img-1-@2x.jpg",category:"Акції"},item3:{type:"popular",price:5190,img:"img-1-@1x.jpg",imgLarge:"img-1-@2x.jpg",category:"Популярні"},item4:{type:"new",price:6100,img:"img-2-@1x.jpg",imgLarge:"img-2-@2x.jpg",category:"Новинки"},item5:{type:"action",price:8450,img:"img-2-@1x.jpg",imgLarge:"img-2-@2x.jpg",category:"Акції"},item6:{type:"popular",price:5749,img:"img-2-@1x.jpg",imgLarge:"img-2-@2x.jpg",category:"Популярні"},item7:{type:"new",price:9025,img:"img-3-@1x.jpg",imgLarge:"img-3-@2x.jpg",category:"Новинки"},item8:{type:"action",price:6230,img:"img-3-@1x.jpg",imgLarge:"img-3-@2x.jpg",category:"Акції"},item9:{type:"popular",price:7590,img:"img-3-@1x.jpg",imgLarge:"img-3-@2x.jpg",category:"Популярні"},item10:{type:"new",price:5030,img:"img@1x.jpg",imgLarge:"img@2x.jpg",category:"Новинки"},item11:{type:"action",price:8199,img:"img@1x.jpg",imgLarge:"img@2x.jpg",category:"Акції"},item12:{type:"popular",price:9380,img:"img@1x.jpg",imgLarge:"img@2x.jpg",category:"Популярні"},item13:{type:"popular",price:5310,img:"img@1x.jpg",imgLarge:"img@2x.jpg",category:"Популярні"},item14:{type:"popular",price:7777,img:"img@1x.jpg",imgLarge:"img@2x.jpg",category:"Популярні"},item15:{type:"new",price:9997,img:"img@1x.jpg",imgLarge:"img@2x.jpg",category:"Новинки"},item16:{type:"new",price:5630,img:"img@1x.jpg",imgLarge:"img@2x.jpg",category:"Новинки"}},f="/ui-landing-prototype/",v=document.querySelector("#range .button-list"),L=document.querySelector("#range .content-list"),g=document.querySelector("#range .btn-more");let w=[],p=!1;j("new");d(3);v.addEventListener("click",e=>{e.preventDefault(),e.target.nodeName==="BUTTON"&&(L.innerHTML="",w=[],g.textContent="Смотреть все",p=!1,j(e.target.id),d(3))});g.addEventListener("click",e=>{e.preventDefault(),p?(document.getElementById("range").scrollIntoView({behavior:"smooth",block:"start"}),g.textContent="Смотреть все",d(3),p=!1):(g.textContent="Закрыть",d(),p=!0)});function j(e){O(e);for(const t in c)c[t].type===e&&w.push(`<li class="content-item">
          <a href="#">
            <img
              srcset="${f}range/${c[t].img} 1x, 
              ${f}range/${c[t].imgLarge} 2x" 
              src="${f}range/${c[t].img}" alt="Product picture" 
              width="310"
              height="165"
              />
              <div class="desc-wrap">
                <p class="desc">${c[t].category.toUpperCase()}</p>
                <h3 class="subtitle">Вже давно відомо, що читабельний зміст буде заважати зосередит...</h3>
                <p class="desc-price">От ${c[t].price}</p>
              </div>
          </a>
        </li>`)}function d(e){L.innerHTML=w.slice(0,e).join(""),L.querySelectorAll(".content-item").forEach((o,s)=>{setTimeout(()=>{o.classList.add("show")},s*200)})}function O(e){v.querySelectorAll(".btn-chois").forEach(o=>o.classList.remove("btn-chois-active"));const t=v.querySelector(`#range #${e}`);t.classList.remove("btn-chois-unactive"),t.classList.add("btn-chois-active")}const l={name:"",email:"",phone:""},r=JSON.parse(localStorage.getItem("feedback-form-state")),x=document.querySelectorAll("form"),k=document.getElementById("modal-thanks"),b=document.getElementById("modal-form");x.forEach(e=>{let{user_name:t,user_email:o,user_phone:s}=e.elements;r&&(t.value=r.name,o.value=r.email,s.value=r.phone),e.addEventListener("input",i=>{i.preventDefault(),l.name=t.value??"",l.email=o.value??"",l.phone=s.value??"",localStorage.setItem("feedback-form-state",JSON.stringify(l))}),e.addEventListener("submit",i=>{i.preventDefault();const a=e.querySelector('[type="checkbox"]').checked,n=e.querySelector(".check-mark-wrap");if(q(t,o,s,a,n)){for(const y in l)l[y]="";localStorage.removeItem("feedback-form-state"),x.forEach(y=>y.reset()),b.classList.remove("is-open"),k.classList.add("is-open"),document.body.style.overflow="hidden"}}),e.addEventListener("click",i=>{const a=i.target.dataset.action;if(!(i.target.nodeName!=="svg"&&i.target.nodeName!=="use")){switch(a.slice(6)){case"name":t.value="",r.name="";break;case"email":o.value="",r.email="";break;case"phone":s.value="",r.phone="";break}localStorage.setItem("feedback-form-state",JSON.stringify(r))}})});function q(e,t,o,s,i){const a=[{element:e,validation:!/\d/.test(e.value),empty:m.isEmpty(e.value)},{element:t,validation:m.isEmail(t.value),empty:m.isEmpty(t.value)},{element:o,validation:m.isMobilePhone(o.value,"uk-UA"),empty:m.isEmpty(o.value)}];return a.every(n=>n.validation)&&s?!0:(a.forEach(n=>{n.empty&&n.element.nextElementSibling.nextElementSibling.classList.add("no-validity-input"),setTimeout(()=>{n.element.nextElementSibling.nextElementSibling.classList.remove("no-validity-input")},2500)}),a.forEach(n=>{n.validation||n.element.classList.add("no-validity-input"),setTimeout(()=>{n.element.classList.remove("no-validity-input")},2500)}),s||I(i),!1)}function I(e){e.classList.add("no-validity-checkbox"),setTimeout(()=>{e.classList.remove("no-validity-checkbox")},2500)}document.querySelectorAll(".qustion-wrap").forEach(e=>{e.addEventListener("click",function(){this.parentElement.classList.toggle("active")})});const V=document.querySelectorAll(".btn-open"),A=document.querySelectorAll(".btn-close");V.forEach(e=>{e.addEventListener("click",()=>{b.classList.add("is-open"),document.body.style.overflow="hidden"})});A.forEach(e=>{e.addEventListener("click",function(){this.parentElement.parentElement.classList.remove("is-open"),document.body.style.overflow="auto"})});[b,k].forEach(e=>e.addEventListener("click",t=>{t.target.classList.contains("is-open")&&(e.classList.remove("is-open"),document.body.style.overflow="auto")}));
//# sourceMappingURL=index.js.map
