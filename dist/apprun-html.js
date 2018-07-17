!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.apprun=t():e.apprun=t()}(this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=26)}([function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(){this._events={}}on(e,t,n={}){this._events[e]=this._events[e]||[],this._events[e].push({fn:t,options:n})}off(e,t){let n=this._events[e];n&&((n=n.filter(e=>e.fn!==t)).length?this._events[e]=n:delete this._events[e])}run(e,...t){let n=this._events[e];console.assert(!!n,"No subscriber for event: "+e),n&&((n=n.filter(n=>{const{fn:o,options:i}=n;return i.delay?this.delay(e,o,t,i):o.apply(this,t),!n.options.once})).length?this._events[e]=n:delete this._events[e])}once(e,t,n={}){this.on(e,t,Object.assign({},n,{once:!0}))}delay(e,t,n,o){o._t&&clearTimeout(o._t),o._t=setTimeout(()=>{clearTimeout(o._t),t.apply(this,n)},o.delay)}}let o;t.App=n;const i=e||window;i.app&&i.app.start?o=i.app:(o=new n,i.app=o),t.default=o}).call(this,n(3))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),i=n(9),r=n(7);t.Component=r.Component;const s=n(2);t.on=s.on,t.update=s.update,t.event=s.update;const a=n(6),d=n(5);o.default.createElement=i.createElement,o.default.render=i.render,o.default.Fragment=i.Fragment,o.default.webComponent=d.default,o.default.start=((e,t,n,o,i)=>{const s=Object.assign(i||{},{render:!0,global_event:!0}),a=new r.Component(t,n,o);return i&&i.rendered&&(a.rendered=i.rendered),a.mount(e,s),a}),o.default.route||(o.default.route=a.default,o.default.on("//",e=>{}),o.default.on("#",e=>{}),o.default.on("route",e=>a.default(e)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{window.onpopstate=(()=>a.default(location.hash)),a.default(location.hash)})),t.default=o.default,o.default.on("debug",e=>0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Reflect={meta:new WeakMap,defineMetadata(e,t,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[e]=t},getMetadataKeys(e){return e=Object.getPrototypeOf(e),this.meta.get(e)?Object.keys(this.meta.get(e)):[]},getMetadata(e,t){return t=Object.getPrototypeOf(t),this.meta.get(t)?this.meta.get(t)[e]:null}},t.update=function(e,n={}){return(o,i,r)=>(e=e||i,t.Reflect.defineMetadata(`apprun-update:${e}`,{name:e,key:i,options:n},o),r)},t.on=function(e,n={}){return function(o,i){e=e||i,t.Reflect.defineMetadata(`apprun-update:${e}`,{name:e,key:i,options:n},o)}}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(8),i="_props";function r(e){const t=[],n=e=>{null!==e&&void 0!==e&&""!==e&&!1!==e&&t.push("function"==typeof e||"object"==typeof e?e:`${e}`)};return e&&e.forEach(e=>{Array.isArray(e)?e.forEach(e=>n(e)):n(e)}),t}t.createElement=function(e,t,...n){const o=r(n);return"string"==typeof e?{tag:e,props:t,children:o}:void 0===e&&n?o:Object.getPrototypeOf(e).__isAppRunComponent?{tag:e,props:t,children:o}:e(t,o)};const s={};function a(e,t,n={}){if(null!=t&&(t=o.default(t,n),e))if(Array.isArray(t))l(e,t);else{const n=t;e.firstChild?d(e.firstChild,n):e.appendChild(c(n))}}function d(e,t){console.assert(!!e),function(e,t){return e.nodeName===`${t.tag||""}`.toUpperCase()}(e,t)?(l(e,t.children),f(e,t.props)):e.parentNode.replaceChild(c(t),e)}function l(e,t){const n=Math.min(e.childNodes.length,t.length);for(let o=0;o<n;o++){const n=t[o],i=e.childNodes[o];if("string"==typeof n)i.textContent!==n&&(3===i.nodeType?i.textContent=n:e.replaceChild(u(n),i));else{const t=n.props&&n.props.key;if(t)if(i.key===t)d(e.childNodes[o],n);else{const r=t&&s[t];r?(e.replaceChild(r,i),e.appendChild(i),d(e.childNodes[o],n)):(e.appendChild(c(n),i),d(e.childNodes[o],n))}else d(e.childNodes[o],n)}}let o=e.childNodes.length;for(;o>n;)e.removeChild(e.lastChild),o--;if(t.length>n){const o=document.createDocumentFragment();for(let e=n;e<t.length;e++)o.appendChild(c(t[e]));e.appendChild(o)}}function u(e){if(0===e.indexOf("_html:")){const t=document.createElement("div");return t.insertAdjacentHTML("afterbegin",e.substring(6)),t}return document.createTextNode(e)}function c(e){if(console.assert(null!==e&&void 0!==e),"string"==typeof e)return u(e);if(!e.tag||"function"==typeof e.tag)return u(JSON.stringify(e));const t="svg"===e.tag?document.createElementNS("http://www.w3.org/2000/svg",e.tag):document.createElement(e.tag);return f(t,e.props),e.children&&e.children.forEach(e=>t.appendChild(c(e))),t}function f(e,t){console.assert(!!e),t=function(e,t){const n={};return e&&Object.keys(e).forEach(e=>n[e]=""),t&&Object.keys(t).forEach(e=>n[e]=t[e]),n}(e[i]||{},t),e[i]=t;for(let n in t){const o=t[n];if("style"===n){e.style.cssText&&(e.style.cssText="");for(let t in o)e.style[t]!==o[t]&&(e.style[t]=o[t])}else if(n.startsWith("data-")){const t=n.substring(5);e.dataset[t]!==o&&(e.dataset[t]=o)}else n.startsWith("role")||n.startsWith("aria-")?e.getAttribute(n)!==o&&e.setAttribute(n,o):(e[n]!==o&&(e[n]=o),"key"===n&&o&&(s[o]=e))}}t.updateElement=a,t.render=a,t.Fragment=function(e,...t){return r(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.customElement=((e,t={})=>(class extends HTMLElement{constructor(){super();const n=Object.assign({render:!0,shadow:!1},t);this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const o={};Array.from(this.attributes).forEach(e=>o[e.name]=e.value),this.children&&(o.children=Array.from(this.children),o.children.forEach(e=>e.parentElement.removeChild(e))),this._component=new e(o).mount(this._shadowRoot,n),this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component)}get state(){return this._component.state}})),t.default=((e,n,o)=>{customElements&&customElements.define(e,t.customElement(n,o))})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),i="//";t.default=function(e){if(e||(e="#"),e.startsWith("#")){const[t,...n]=e.split("/");o.default.run(t,...n),o.default.run(i,t,...n)}else if(e.startsWith("/")){const[t,n,...r]=e.split("/");o.default.run("/"+n,...r),o.default.run(i,"/"+n,...r)}else o.default.run(e),o.default.run(i,e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),i=n(2),r={};o.default.on("get-components",e=>e.components=r);class s{constructor(e,t,n,i){this.state=e,this.view=t,this.update=n,this.options=i,this._app=new o.App,this._actions=[],this._history=[],this._history_idx=-1,this.start=((e=null,t={render:!0})=>this.mount(e,Object.assign({},t,{render:!0})))}renderState(e){if(!this.view)return;const t=this.view(e);if(o.default.run("debug",{component:this,state:e,vdom:t||"[vdom is null - no render]"}),"object"!=typeof document)return;const n="string"==typeof this.element?document.getElementById(this.element):this.element;n&&(n._component=this),o.default.render(n,t,this),this.rendered&&this.rendered(this.state)}setState(e,t={render:!0,history:!1}){if(e instanceof Promise)e.then(e=>{this.setState(e,t)}).catch(e=>{throw console.error(e),e}),this.state=e;else{if(null==e)return;this.state=e,!1!==t.render&&this.renderState(e),!1!==t.history&&this.enable_history&&(this._history=[...this._history,e],this._history_idx=this._history.length-1),"function"==typeof t.callback&&t.callback(this.state)}}mount(e=null,t){if(console.assert(!this.element,"Component already mounted."),this.options=t=Object.assign(this.options||{},t),this.element=e,this.global_event=t.global_event,this.enable_history=!!t.history,this.enable_history){const e=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},n=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1};this.on(t.history.prev||"history-prev",e),this.on(t.history.next||"history-next",n)}return this.add_actions(),void 0===this.state&&(this.state=this.model||{}),t.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),r[e]=r[e]||[],r[e].push(this),this}is_global_event(e){return e&&(e.startsWith("#")||e.startsWith("/"))}add_action(e,t,n={}){t&&"function"==typeof t&&this.on(e,(...i)=>{const r=t(this.state,...i);o.default.run("debug",{component:this,event:e,e:i,state:this.state,newState:r,options:n}),this.setState(r,n)},n)}add_actions(){const e=this.update||{};i.Reflect.getMetadataKeys(this).forEach(t=>{if(t.startsWith("apprun-update:")){const n=i.Reflect.getMetadata(t,this);e[n.name]=[this[n.key].bind(this),n.options]}});const t={};Object.keys(e).forEach(n=>{const o=e[n];("function"==typeof o||Array.isArray(o))&&n.split(",").forEach(e=>t[e.trim()]=o)}),Object.keys(t).forEach(e=>{const n=t[e];"function"==typeof n?this.add_action(e,n):Array.isArray(n)&&this.add_action(e,n[0],n[1])})}run(e,...t){return this.global_event||this.is_global_event(e)?o.default.run(e,...t):this._app.run(e,...t)}on(e,t,n){return this._actions.push({name:e,fn:t}),this.global_event||this.is_global_event(e)?o.default.on(e,t,n):this._app.on(e,t,n)}unmount(){this._actions.forEach(e=>{const{name:t,fn:n}=e;this.global_event||this.is_global_event(t)?o.default.off(t,n):this._app.off(t,n)})}}s.__isAppRunComponent=!0,t.Component=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0);t.default=function e(t,n,i=0){if("string"==typeof t)return t;if(Array.isArray(t))return t.map(t=>e(t,n,i++));let r=t;return t&&t.tag&&Object.getPrototypeOf(t.tag).__isAppRunComponent&&(r=function(e,t,n){const{tag:i,props:r,children:s}=e;let a=r&&r.id,d=`_${i.name}_${n}`;a?d=`_${i.name}_${a}`:a=`_${i.name}_${n}`,t.__componentCache||(t.__componentCache={});let l=t.__componentCache[d];l||(l=t.__componentCache[d]=new i(Object.assign({},r,{children:s})).mount(a)),l.mounted&&l.mounted(r,s);const u=l.state;let c="";return u instanceof Promise||!l.view||(c=l.view(u),l.rendered&&l.rendered(u)),o.default.createElement("div",{id:a},c)}(t,n,i++)),r&&r.children&&(r.children=r.children.map(t=>e(t,n,i++))),r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4);t.createElement=o.createElement,t.Fragment=o.Fragment,t.render=function(e,t,n){o.updateElement(e,t,n)}},,,,,,,,,,,,,,,function(e,t,n){"use strict";var o,i="http://www.w3.org/1999/xhtml",r="undefined"==typeof document?void 0:document,s=r?r.body||r.createElement("div"):{},a=s.hasAttributeNS?function(e,t,n){return e.hasAttributeNS(t,n)}:s.hasAttribute?function(e,t,n){return e.hasAttribute(n)}:function(e,t,n){return null!=e.getAttributeNode(t,n)};function d(e,t){var n=e.nodeName,o=t.nodeName;return n===o||!!(t.actualize&&n.charCodeAt(0)<91&&o.charCodeAt(0)>90)&&n===o.toUpperCase()}function l(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n,""))}var u={OPTION:function(e,t){l(e,t,"selected")},INPUT:function(e,t){l(e,t,"checked"),l(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),a(t,null,"value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var o=e.firstChild;if(o){var i=o.nodeValue;if(i==n||!n&&i==e.placeholder)return;o.nodeValue=n}},SELECT:function(e,t){if(!a(t,null,"multiple")){for(var n=0,o=t.firstChild;o;){var i=o.nodeName;if(i&&"OPTION"===i.toUpperCase()){if(a(o,null,"selected")){n;break}n++}o=o.nextSibling}e.selectedIndex=n}}},c=1,f=3,h=8;function p(){}function m(e){return e.id}var y=function(e){return function(t,n,s){if(s||(s={}),"string"==typeof n)if("#document"===t.nodeName||"HTML"===t.nodeName){var a=n;(n=r.createElement("html")).innerHTML=a}else n=function(e){var t;return!o&&r.createRange&&(o=r.createRange()).selectNode(r.body),o&&o.createContextualFragment?t=o.createContextualFragment(e):(t=r.createElement("body")).innerHTML=e,t.childNodes[0]}(n);var l,y=s.getNodeKey||m,_=s.onBeforeNodeAdded||p,v=s.onNodeAdded||p,g=s.onBeforeElUpdated||p,b=s.onElUpdated||p,C=s.onBeforeNodeDiscarded||p,E=s.onNodeDiscarded||p,N=s.onBeforeElChildrenUpdated||p,O=!0===s.childrenOnly,x={};function j(e){l?l.push(e):l=[e]}function w(e,t,n){!1!==C(e)&&(t&&t.removeChild(e),E(e),function e(t,n){if(t.nodeType===c)for(var o=t.firstChild;o;){var i=void 0;n&&(i=y(o))?j(i):(E(o),o.firstChild&&e(o,n)),o=o.nextSibling}}(e,n))}function A(e){v(e);for(var t=e.firstChild;t;){var n=t.nextSibling,o=y(t);if(o){var i=x[o];i&&d(t,i)&&(t.parentNode.replaceChild(i,t),S(i,t))}A(t),t=n}}function S(o,i,s){var a,l=y(i);if(l&&delete x[l],!n.isSameNode||!n.isSameNode(t)){if(!s){if(!1===g(o,i))return;if(e(o,i),b(o),!1===N(o,i))return}if("TEXTAREA"!==o.nodeName){var p,m,v,C,E=i.firstChild,O=o.firstChild;e:for(;E;){for(v=E.nextSibling,p=y(E);O;){if(m=O.nextSibling,E.isSameNode&&E.isSameNode(O)){E=v,O=m;continue e}a=y(O);var M=O.nodeType,T=void 0;if(M===E.nodeType&&(M===c?(p?p!==a&&((C=x[p])?O.nextSibling===C?T=!1:(o.insertBefore(C,O),m=O.nextSibling,a?j(a):w(O,o,!0),O=C):T=!1):a&&(T=!1),(T=!1!==T&&d(O,E))&&S(O,E)):M!==f&&M!=h||(T=!0,O.nodeValue!==E.nodeValue&&(O.nodeValue=E.nodeValue))),T){E=v,O=m;continue e}a?j(a):w(O,o,!0),O=m}if(p&&(C=x[p])&&d(C,E))o.appendChild(C),S(C,E);else{var P=_(E);!1!==P&&(P&&(E=P),E.actualize&&(E=E.actualize(o.ownerDocument||r)),o.appendChild(E),A(E))}E=v,O=m}for(;O;)m=O.nextSibling,(a=y(O))?j(a):w(O,o,!0),O=m}var R=u[o.nodeName];R&&R(o,i)}}!function e(t){if(t.nodeType===c)for(var n=t.firstChild;n;){var o=y(n);o&&(x[o]=n),e(n),n=n.nextSibling}}(t);var M=t,T=M.nodeType,P=n.nodeType;if(!O)if(T===c)P===c?d(t,n)||(E(t),M=function(e,t){for(var n=e.firstChild;n;){var o=n.nextSibling;t.appendChild(n),n=o}return t}(t,function(e,t){return t&&t!==i?r.createElementNS(t,e):r.createElement(e)}(n.nodeName,n.namespaceURI))):M=n;else if(T===f||T===h){if(P===T)return M.nodeValue!==n.nodeValue&&(M.nodeValue=n.nodeValue),M;M=n}if(M===n)E(t);else if(S(M,n,O),l)for(var R=0,k=l.length;R<k;R++){var F=x[l[R]];F&&w(F,F.parentNode,!1)}return!O&&M!==t&&t.parentNode&&(M.actualize&&(M=M.actualize(t.ownerDocument||r)),t.parentNode.replaceChild(M,t)),M}}(function(e,t){var n,o,i,r,s,d=t.attributes;for(n=d.length-1;n>=0;--n)i=(o=d[n]).name,r=o.namespaceURI,s=o.value,r?(i=o.localName||i,e.getAttributeNS(r,i)!==s&&e.setAttributeNS(r,i,s)):e.getAttribute(i)!==s&&e.setAttribute(i,s);for(n=(d=e.attributes).length-1;n>=0;--n)!1!==(o=d[n]).specified&&(i=o.name,(r=o.namespaceURI)?(i=o.localName||i,a(t,r,i)||e.removeAttributeNS(r,i)):a(t,null,i)||e.removeAttribute(i))});e.exports=y},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4);t.createElement=o.createElement,t.Fragment=o.Fragment;const i=n(24);t.render=function(e,t,n){"string"==typeof t?(t=t.trim(),e.firstChild?i(e.firstChild,t):e.innerHTML=t):o.updateElement(e,t,n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1);t.Component=o.Component,t.on=o.on,t.update=o.update;const i=n(25);o.default.createElement=i.createElement,o.default.render=i.render,o.default.Fragment=i.Fragment,t.default=o.default,"object"==typeof window&&(window.Component=o.Component)}])});
//# sourceMappingURL=apprun-html.js.map