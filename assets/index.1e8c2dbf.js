(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const c="/assets/compas.c9624a30.png",i=navigator.userAgent.match(/(iPod|iPhone|iPad)/)&&navigator.userAgent.match(/AppleWebKit/);class l extends HTMLElement{constructor(){super(),this.compassCircle=null,this.compass=null}connectedCallback(){this.render(),this.compassCircle=document.getElementById("compassCircle"),setTimeout(()=>{document.getElementById("startBtn").addEventListener("click",()=>this.startCompass())},0)}render(){this.innerHTML=`
      <div class="compass-arrow-wrapper">
        <div class="compass-arrow"></div>
      </div>
      <div class="compass">
        <img id="compassCircle" class="compass__img" src="${c}" alt="compass">
      </div>
    `}startCompass(){i?DeviceOrientationEvent.requestPermission().then(e=>{e==="granted"?window.addEventListener("deviceorientation",t=>this.handler(t),!0):alert("has to be allowed!")}).catch(()=>alert("not supported")):window.addEventListener("deviceorientationabsolute",e=>this.handler(e),!0)}handler(e){this.compass=e.webkitCompassHeading||Math.abs(e.alpha-360),this.compassCircle.style.transform=`rotate(${-this.compass}deg)`}}customElements.define("compass-app",l);const d="/assets/avianex.f52a200b.svg",u="/assets/explosion-solid.26e929bc.svg",p="/assets/helicopter-solid.80bda2d8.svg",m="/assets/jet-fighter-solid.8575191b.svg",g="/assets/rocket-solid.be5c00a2.svg";class h extends HTMLElement{constructor(){super(),this.compass=null,this.buttons=[{checked:!0,value:"rocket",name:"\u0440\u0430\u043A\u0435\u0442\u0430",img:g},{checked:!1,value:"jetFighter",name:"\u043B\u0456\u0442\u0430\u043A",img:m},{checked:!1,value:"helicopter",name:"\u0433\u0435\u043B\u0456\u043A\u043E\u043F\u0442\u0435\u0440",img:p},{checked:!1,value:"drone",name:"\u0431\u0435\u0437\u043F\u0456\u043B\u043E\u0442\u043D\u0438\u043A",img:d},{checked:!1,value:"explosion",name:"\u0432\u0438\u0431\u0443\u0445",img:u}]}connectedCallback(){this.render(),setTimeout(()=>{document.querySelectorAll('input[name="danger-type"]').forEach(t=>{t.addEventListener("change",n=>this.onChangeRadio(n))})},0)}render(){this.innerHTML=`
        <button id="startBtn" class="danger-type-selector__submit-btn">
            <img src="${this.getSelectedDanger().img}" class="danger-type-selector__submit-img" alt="sected danger type">
        </button>
        <div class="danger-type-selector__buttons">
            ${this.getButtonsTemplate()}
        </div>
    `}getButtonsTemplate(){return this.buttons.reduce((e,t)=>(e+=`
          <div class="danger-type-selector__buttons-item">
              <input type="radio" name="danger-type" value="${t.value}" id="${t.value}" class="danger-type-selector__radio" ${t.checked?"checked":""}>
              <label for="${t.value}" class="danger-type-selector__label">
                  <img src="${t.img}" alt="${t.name}" class="danger-type-selector__iabel-img">
                  ${t.name}
              </label>
          </div>
      `,e),"")}onChangeRadio(e){this.buttons=this.buttons.map(t=>e.target.value===t.value?{...t,checked:!0}:{...t,checked:!1}),this.render()}getSelectedDanger(){return this.buttons.find(e=>Boolean(e.checked))}}customElements.define("danger-type-selector",h);document.querySelector("#app").innerHTML=`
  <div class="app">
    <compass-app></compass-app>
    <danger-type-selector class="danger-type-selector"></danger-type-selector> 
  </div> 
`;
