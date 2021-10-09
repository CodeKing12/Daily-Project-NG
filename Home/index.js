!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";(function(e){var n;function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
!function(t,n){"object"===r(e)&&"object"===r(e.exports)?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:void 0,function(o,i){var a=[],s=o.document,u=Object.getPrototypeOf,l=a.slice,c=a.concat,d=a.push,f=a.indexOf,p={},h=p.toString,v=p.hasOwnProperty,m=v.toString,y=m.call(Object),g={},b=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},w={type:!0,src:!0,nonce:!0,noModule:!0};function k(e,t,n){var r,o,i=(n=n||s).createElement("script");if(i.text=e,t)for(r in w)(o=t[r]||t.getAttribute&&t.getAttribute(r))&&i.setAttribute(r,o);n.head.appendChild(i).parentNode.removeChild(i)}function C(e){return null==e?e+"":"object"===r(e)||"function"==typeof e?p[h.call(e)]||"object":r(e)}var T=function e(t,n){return new e.fn.init(t,n)},j=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function S(e){var t=!!e&&"length"in e&&e.length,n=C(e);return!b(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}T.fn=T.prototype={jquery:"3.4.1",constructor:T,length:0,toArray:function(){return l.call(this)},get:function(e){return null==e?l.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=T.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return T.each(this,e)},map:function(e){return this.pushStack(T.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(l.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:d,sort:a.sort,splice:a.splice},T.extend=T.fn.extend=function(){var e,t,n,o,i,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[u]||{},u++),"object"===r(s)||b(s)||(s={}),u===l&&(s=this,u--);u<l;u++)if(null!=(e=arguments[u]))for(t in e)o=e[t],"__proto__"!==t&&s!==o&&(c&&o&&(T.isPlainObject(o)||(i=Array.isArray(o)))?(n=s[t],a=i&&!Array.isArray(n)?[]:i||T.isPlainObject(n)?n:{},i=!1,s[t]=T.extend(c,a,o)):void 0!==o&&(s[t]=o));return s},T.extend({expando:"jQuery"+("3.4.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==h.call(e))&&(!(t=u(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&m.call(n)===y)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){k(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(S(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(j,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(S(Object(e))?T.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:f.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,o=e.length;r<n;r++)e[o++]=t[r];return e.length=o,e},grep:function(e,t,n){for(var r=[],o=0,i=e.length,a=!n;o<i;o++)!t(e[o],o)!==a&&r.push(e[o]);return r},map:function(e,t,n){var r,o,i=0,a=[];if(S(e))for(r=e.length;i<r;i++)null!=(o=t(e[i],i,n))&&a.push(o);else for(i in e)null!=(o=t(e[i],i,n))&&a.push(o);return c.apply([],a)},guid:1,support:g}),"function"==typeof Symbol&&(T.fn[Symbol.iterator]=a[Symbol.iterator]),T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){p["[object "+t+"]"]=t.toLowerCase()});var _=
/*!
   * Sizzle CSS Selector Engine v2.3.4
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://js.foundation/
   *
   * Date: 2019-04-08
   */
function(e){var t,n,r,o,i,a,s,u,l,c,d,f,p,h,v,m,y,g,b,x="sizzle"+1*new Date,w=e.document,k=0,C=0,T=ue(),j=ue(),S=ue(),_=ue(),A=function(e,t){return e===t&&(d=!0),0},E={}.hasOwnProperty,N=[],D=N.pop,q=N.push,L=N.push,O=N.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},M="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",H="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+H+"*("+R+")(?:"+H+"*([*^$|!~]?=)"+H+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+H+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(H+"+","g"),Q=new RegExp("^"+H+"+|((?:^|[^\\\\])(?:\\\\.)*)"+H+"+$","g"),F=new RegExp("^"+H+"*,"+H+"*"),B=new RegExp("^"+H+"*([>+~]|"+H+")"+H+"*"),z=new RegExp(H+"|>"),U=new RegExp(W),X=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+H+"*(even|odd|(([+-]|)(\\d*)n|)"+H+"*(?:([+-]|)"+H+"*(\\d+)|))"+H+"*\\)|)","i"),bool:new RegExp("^(?:"+M+")$","i"),needsContext:new RegExp("^"+H+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+H+"*((?:-\\d)?\\d*)"+H+"*\\)|)(?=[^-]|$)","i")},G=/HTML$/i,J=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+H+"?|("+H+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,oe=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},ie=function(){f()},ae=xe(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{L.apply(N=O.call(w.childNodes),w.childNodes),N[w.childNodes.length].nodeType}catch(e){L={apply:N.length?function(e,t){q.apply(e,O.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function se(e,t,r,o){var i,s,l,c,d,h,y,g=t&&t.ownerDocument,k=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==k&&9!==k&&11!==k)return r;if(!o&&((t?t.ownerDocument||t:w)!==p&&f(t),t=t||p,v)){if(11!==k&&(d=Z.exec(e)))if(i=d[1]){if(9===k){if(!(l=t.getElementById(i)))return r;if(l.id===i)return r.push(l),r}else if(g&&(l=g.getElementById(i))&&b(t,l)&&l.id===i)return r.push(l),r}else{if(d[2])return L.apply(r,t.getElementsByTagName(e)),r;if((i=d[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(i)),r}if(n.qsa&&!_[e+" "]&&(!m||!m.test(e))&&(1!==k||"object"!==t.nodeName.toLowerCase())){if(y=e,g=t,1===k&&z.test(e)){for((c=t.getAttribute("id"))?c=c.replace(re,oe):t.setAttribute("id",c=x),s=(h=a(e)).length;s--;)h[s]="#"+c+" "+be(h[s]);y=h.join(","),g=ee.test(e)&&ye(t.parentNode)||t}try{return L.apply(r,g.querySelectorAll(y)),r}catch(t){_(e,!0)}finally{c===x&&t.removeAttribute("id")}}}return u(e.replace(Q,"$1"),t,r,o)}function ue(){var e=[];return function t(n,o){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=o}}function le(e){return e[x]=!0,e}function ce(e){var t=p.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function de(e,t){for(var n=e.split("|"),o=n.length;o--;)r.attrHandle[n[o]]=t}function fe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function pe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function he(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ve(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ae(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function me(e){return le(function(t){return t=+t,le(function(n,r){for(var o,i=e([],n.length,t),a=i.length;a--;)n[o=i[a]]&&(n[o]=!(r[o]=n[o]))})})}function ye(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!G.test(t||n&&n.nodeName||"HTML")},f=se.setDocument=function(e){var t,o,a=e?e.ownerDocument||e:w;return a!==p&&9===a.nodeType&&a.documentElement?(h=(p=a).documentElement,v=!i(p),w!==p&&(o=p.defaultView)&&o.top!==o&&(o.addEventListener?o.addEventListener("unload",ie,!1):o.attachEvent&&o.attachEvent("onunload",ie)),n.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ce(function(e){return e.appendChild(p.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=K.test(p.getElementsByClassName),n.getById=ce(function(e){return h.appendChild(e).id=x,!p.getElementsByName||!p.getElementsByName(x).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&v){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&v){var n,r,o,i=t.getElementById(e);if(i){if((n=i.getAttributeNode("id"))&&n.value===e)return[i];for(o=t.getElementsByName(e),r=0;i=o[r++];)if((n=i.getAttributeNode("id"))&&n.value===e)return[i]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e);if("*"===e){for(;n=i[o++];)1===n.nodeType&&r.push(n);return r}return i},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&v)return t.getElementsByClassName(e)},y=[],m=[],(n.qsa=K.test(p.querySelectorAll))&&(ce(function(e){h.appendChild(e).innerHTML="<a id='"+x+"'></a><select id='"+x+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+H+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+H+"*(?:value|"+M+")"),e.querySelectorAll("[id~="+x+"-]").length||m.push("~="),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+x+"+*").length||m.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=p.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+H+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")})),(n.matchesSelector=K.test(g=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ce(function(e){n.disconnectedMatch=g.call(e,"*"),g.call(e,"[s!='']:x"),y.push("!=",W)}),m=m.length&&new RegExp(m.join("|")),y=y.length&&new RegExp(y.join("|")),t=K.test(h.compareDocumentPosition),b=t||K.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},A=t?function(e,t){if(e===t)return d=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===p||e.ownerDocument===w&&b(w,e)?-1:t===p||t.ownerDocument===w&&b(w,t)?1:c?P(c,e)-P(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return d=!0,0;var n,r=0,o=e.parentNode,i=t.parentNode,a=[e],s=[t];if(!o||!i)return e===p?-1:t===p?1:o?-1:i?1:c?P(c,e)-P(c,t):0;if(o===i)return fe(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?fe(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},p):p},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&f(e),n.matchesSelector&&v&&!_[t+" "]&&(!y||!y.test(t))&&(!m||!m.test(t)))try{var r=g.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){_(t,!0)}return se(t,p,null,[e]).length>0},se.contains=function(e,t){return(e.ownerDocument||e)!==p&&f(e),b(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==p&&f(e);var o=r.attrHandle[t.toLowerCase()],i=o&&E.call(r.attrHandle,t.toLowerCase())?o(e,t,!v):void 0;return void 0!==i?i:n.attributes||!v?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},se.escape=function(e){return(e+"").replace(re,oe)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,r=[],o=0,i=0;if(d=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(A),d){for(;t=e[i++];)t===e[i]&&(o=r.push(i));for(;o--;)e.splice(r[o],1)}return c=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=o(t);return n},(r=se.selectors={cacheLength:50,createPseudo:le,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&U.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=T[e+" "];return t||(t=new RegExp("(^|"+H+")"+e+"("+H+"|$)"))&&T(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var o=se.attr(r,e);return null==o?"!="===t:!t||(o+="","="===t?o===n:"!="===t?o!==n:"^="===t?n&&0===o.indexOf(n):"*="===t?n&&o.indexOf(n)>-1:"$="===t?n&&o.slice(-n.length)===n:"~="===t?(" "+o.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(o===n||o.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,u){var l,c,d,f,p,h,v=i!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),g=!u&&!s,b=!1;if(m){if(i){for(;v;){for(f=t;f=f[v];)if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=v="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&g){for(b=(p=(l=(c=(d=(f=m)[x]||(f[x]={}))[f.uniqueID]||(d[f.uniqueID]={}))[e]||[])[0]===k&&l[1])&&l[2],f=p&&m.childNodes[p];f=++p&&f&&f[v]||(b=p=0)||h.pop();)if(1===f.nodeType&&++b&&f===t){c[e]=[k,p,b];break}}else if(g&&(b=p=(l=(c=(d=(f=t)[x]||(f[x]={}))[f.uniqueID]||(d[f.uniqueID]={}))[e]||[])[0]===k&&l[1]),!1===b)for(;(f=++p&&f&&f[v]||(b=p=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++b||(g&&((c=(d=f[x]||(f[x]={}))[f.uniqueID]||(d[f.uniqueID]={}))[e]=[k,b]),f!==t)););return(b-=o)===r||b%r==0&&b/r>=0}}},PSEUDO:function(e,t){var n,o=r.pseudos[e]||r.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return o[x]?o(t):o.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,n){for(var r,i=o(e,t),a=i.length;a--;)e[r=P(e,i[a])]=!(n[r]=i[a])}):function(e){return o(e,0,n)}):o}},pseudos:{not:le(function(e){var t=[],n=[],r=s(e.replace(Q,"$1"));return r[x]?le(function(e,t,n,o){for(var i,a=r(e,null,o,[]),s=e.length;s--;)(i=a[s])&&(e[s]=!(t[s]=i))}):function(e,o,i){return t[0]=e,r(t,null,i,n),t[0]=null,!n.pop()}}),has:le(function(e){return function(t){return se(e,t).length>0}}),contains:le(function(e){return e=e.replace(te,ne),function(t){return(t.textContent||o(t)).indexOf(e)>-1}}),lang:le(function(e){return X.test(e||"")||se.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=v?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ve(!1),disabled:ve(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return J.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:me(function(){return[0]}),last:me(function(e,t){return[t-1]}),eq:me(function(e,t,n){return[n<0?n+t:n]}),even:me(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:me(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:me(function(e,t,n){for(var r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r);return e}),gt:me(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=pe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=he(t);function ge(){}function be(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function xe(e,t,n){var r=t.dir,o=t.next,i=o||r,a=n&&"parentNode"===i,s=C++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,o);return!1}:function(t,n,u){var l,c,d,f=[k,s];if(u){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||a)if(c=(d=t[x]||(t[x]={}))[t.uniqueID]||(d[t.uniqueID]={}),o&&o===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[i])&&l[0]===k&&l[1]===s)return f[2]=l[2];if(c[i]=f,f[2]=e(t,n,u))return!0}return!1}}function we(e){return e.length>1?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1;return!0}:e[0]}function ke(e,t,n,r,o){for(var i,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(i=e[s])&&(n&&!n(i,r,o)||(a.push(i),l&&t.push(s)));return a}function Ce(e,t,n,r,o,i){return r&&!r[x]&&(r=Ce(r)),o&&!o[x]&&(o=Ce(o,i)),le(function(i,a,s,u){var l,c,d,f=[],p=[],h=a.length,v=i||function(e,t,n){for(var r=0,o=t.length;r<o;r++)se(e,t[r],n);return n}(t||"*",s.nodeType?[s]:s,[]),m=!e||!i&&t?v:ke(v,f,e,s,u),y=n?o||(i?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r)for(l=ke(y,p),r(l,[],s,u),c=l.length;c--;)(d=l[c])&&(y[p[c]]=!(m[p[c]]=d));if(i){if(o||e){if(o){for(l=[],c=y.length;c--;)(d=y[c])&&l.push(m[c]=d);o(null,y=[],l,u)}for(c=y.length;c--;)(d=y[c])&&(l=o?P(i,d):f[c])>-1&&(i[l]=!(a[l]=d))}}else y=ke(y===a?y.splice(h,y.length):y),o?o(null,a,y,u):L.apply(a,y)})}function Te(e){for(var t,n,o,i=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=xe(function(e){return e===t},s,!0),d=xe(function(e){return P(t,e)>-1},s,!0),f=[function(e,n,r){var o=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):d(e,n,r));return t=null,o}];u<i;u++)if(n=r.relative[e[u].type])f=[xe(we(f),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[x]){for(o=++u;o<i&&!r.relative[e[o].type];o++);return Ce(u>1&&we(f),u>1&&be(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(Q,"$1"),n,u<o&&Te(e.slice(u,o)),o<i&&Te(e=e.slice(o)),o<i&&be(e))}f.push(n)}return we(f)}return ge.prototype=r.filters=r.pseudos,r.setFilters=new ge,a=se.tokenize=function(e,t){var n,o,i,a,s,u,l,c=j[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=r.preFilter;s;){for(a in n&&!(o=F.exec(s))||(o&&(s=s.slice(o[0].length)||s),u.push(i=[])),n=!1,(o=B.exec(s))&&(n=o.shift(),i.push({value:n,type:o[0].replace(Q," ")}),s=s.slice(n.length)),r.filter)!(o=V[a].exec(s))||l[a]&&!(o=l[a](o))||(n=o.shift(),i.push({value:n,type:a,matches:o}),s=s.slice(n.length));if(!n)break}return t?s.length:s?se.error(e):j(e,u).slice(0)},s=se.compile=function(e,t){var n,o=[],i=[],s=S[e+" "];if(!s){for(t||(t=a(e)),n=t.length;n--;)(s=Te(t[n]))[x]?o.push(s):i.push(s);(s=S(e,function(e,t){var n=t.length>0,o=e.length>0,i=function(i,a,s,u,c){var d,h,m,y=0,g="0",b=i&&[],x=[],w=l,C=i||o&&r.find.TAG("*",c),T=k+=null==w?1:Math.random()||.1,j=C.length;for(c&&(l=a===p||a||c);g!==j&&null!=(d=C[g]);g++){if(o&&d){for(h=0,a||d.ownerDocument===p||(f(d),s=!v);m=e[h++];)if(m(d,a||p,s)){u.push(d);break}c&&(k=T)}n&&((d=!m&&d)&&y--,i&&b.push(d))}if(y+=g,n&&g!==y){for(h=0;m=t[h++];)m(b,x,a,s);if(i){if(y>0)for(;g--;)b[g]||x[g]||(x[g]=D.call(u));x=ke(x)}L.apply(u,x),c&&!i&&x.length>0&&y+t.length>1&&se.uniqueSort(u)}return c&&(k=T,l=w),b};return n?le(i):i}(i,o))).selector=e}return s},u=se.select=function(e,t,n,o){var i,u,l,c,d,f="function"==typeof e&&e,p=!o&&a(e=f.selector||e);if(n=n||[],1===p.length){if((u=p[0]=p[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&v&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(te,ne),t)||[])[0]))return n;f&&(t=t.parentNode),e=e.slice(u.shift().value.length)}for(i=V.needsContext.test(e)?0:u.length;i--&&(l=u[i],!r.relative[c=l.type]);)if((d=r.find[c])&&(o=d(l.matches[0].replace(te,ne),ee.test(u[0].type)&&ye(t.parentNode)||t))){if(u.splice(i,1),!(e=o.length&&be(u)))return L.apply(n,o),n;break}}return(f||s(e,p))(o,t,!v,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},n.sortStable=x.split("").sort(A).join("")===x,n.detectDuplicates=!!d,f(),n.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(p.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||de("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||de("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||de(M,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(o);T.find=_,T.expr=_.selectors,T.expr[":"]=T.expr.pseudos,T.uniqueSort=T.unique=_.uniqueSort,T.text=_.getText,T.isXMLDoc=_.isXML,T.contains=_.contains,T.escapeSelector=_.escape;var A=function(e,t,n){for(var r=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&T(e).is(n))break;r.push(e)}return r},E=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=T.expr.match.needsContext;function D(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var q=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function L(e,t,n){return b(t)?T.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?T.grep(e,function(e){return e===t!==n}):"string"!=typeof t?T.grep(e,function(e){return f.call(t,e)>-1!==n}):T.filter(t,e,n)}T.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?T.find.matchesSelector(r,e)?[r]:[]:T.find.matches(e,T.grep(t,function(e){return 1===e.nodeType}))},T.fn.extend({find:function(e){var t,n,r=this.length,o=this;if("string"!=typeof e)return this.pushStack(T(e).filter(function(){for(t=0;t<r;t++)if(T.contains(o[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)T.find(e,o[t],n);return r>1?T.uniqueSort(n):n},filter:function(e){return this.pushStack(L(this,e||[],!1))},not:function(e){return this.pushStack(L(this,e||[],!0))},is:function(e){return!!L(this,"string"==typeof e&&N.test(e)?T(e):e||[],!1).length}});var O,P=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(T.fn.init=function(e,t,n){var r,o;if(!e)return this;if(n=n||O,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:P.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof T?t[0]:t,T.merge(this,T.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:s,!0)),q.test(r[1])&&T.isPlainObject(t))for(r in t)b(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(o=s.getElementById(r[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):b(e)?void 0!==n.ready?n.ready(e):e(T):T.makeArray(e,this)}).prototype=T.fn,O=T(s);var M=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function R(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}T.fn.extend({has:function(e){var t=T(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(T.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,o=this.length,i=[],a="string"!=typeof e&&T(e);if(!N.test(e))for(;r<o;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&T.find.matchesSelector(n,e))){i.push(n);break}return this.pushStack(i.length>1?T.uniqueSort(i):i)},index:function(e){return e?"string"==typeof e?f.call(T(e),this[0]):f.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(T.uniqueSort(T.merge(this.get(),T(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),T.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return A(e,"parentNode")},parentsUntil:function(e,t,n){return A(e,"parentNode",n)},next:function(e){return R(e,"nextSibling")},prev:function(e){return R(e,"previousSibling")},nextAll:function(e){return A(e,"nextSibling")},prevAll:function(e){return A(e,"previousSibling")},nextUntil:function(e,t,n){return A(e,"nextSibling",n)},prevUntil:function(e,t,n){return A(e,"previousSibling",n)},siblings:function(e){return E((e.parentNode||{}).firstChild,e)},children:function(e){return E(e.firstChild)},contents:function(e){return void 0!==e.contentDocument?e.contentDocument:(D(e,"template")&&(e=e.content||e),T.merge([],e.childNodes))}},function(e,t){T.fn[e]=function(n,r){var o=T.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(o=T.filter(r,o)),this.length>1&&(H[e]||T.uniqueSort(o),M.test(e)&&o.reverse()),this.pushStack(o)}});var I=/[^\x20\t\r\n\f]+/g;function W(e){return e}function $(e){throw e}function Q(e,t,n,r){var o;try{e&&b(o=e.promise)?o.call(e).done(t).fail(n):e&&b(o=e.then)?o.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}T.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return T.each(e.match(I)||[],function(e,n){t[n]=!0}),t}(e):T.extend({},e);var t,n,r,o,i=[],a=[],s=-1,u=function(){for(o=o||e.once,r=t=!0;a.length;s=-1)for(n=a.shift();++s<i.length;)!1===i[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=i.length,n=!1);e.memory||(n=!1),t=!1,o&&(i=n?[]:"")},l={add:function(){return i&&(n&&!t&&(s=i.length-1,a.push(n)),function t(n){T.each(n,function(n,r){b(r)?e.unique&&l.has(r)||i.push(r):r&&r.length&&"string"!==C(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return T.each(arguments,function(e,t){for(var n;(n=T.inArray(t,i,n))>-1;)i.splice(n,1),n<=s&&s--}),this},has:function(e){return e?T.inArray(e,i)>-1:i.length>0},empty:function(){return i&&(i=[]),this},disable:function(){return o=a=[],i=n="",this},disabled:function(){return!i},lock:function(){return o=a=[],n||t||(i=n=""),this},locked:function(){return!!o},fireWith:function(e,n){return o||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l},T.extend({Deferred:function(e){var t=[["notify","progress",T.Callbacks("memory"),T.Callbacks("memory"),2],["resolve","done",T.Callbacks("once memory"),T.Callbacks("once memory"),0,"resolved"],["reject","fail",T.Callbacks("once memory"),T.Callbacks("once memory"),1,"rejected"]],n="pending",i={state:function(){return n},always:function(){return a.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return T.Deferred(function(n){T.each(t,function(t,r){var o=b(e[r[4]])&&e[r[4]];a[r[1]](function(){var e=o&&o.apply(this,arguments);e&&b(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,o?[e]:arguments)})}),e=null}).promise()},then:function(e,n,i){var a=0;function s(e,t,n,i){return function(){var u=this,l=arguments,c=function(){var o,c;if(!(e<a)){if((o=n.apply(u,l))===t.promise())throw new TypeError("Thenable self-resolution");c=o&&("object"===r(o)||"function"==typeof o)&&o.then,b(c)?i?c.call(o,s(a,t,W,i),s(a,t,$,i)):(a++,c.call(o,s(a,t,W,i),s(a,t,$,i),s(a,t,W,t.notifyWith))):(n!==W&&(u=void 0,l=[o]),(i||t.resolveWith)(u,l))}},d=i?c:function(){try{c()}catch(r){T.Deferred.exceptionHook&&T.Deferred.exceptionHook(r,d.stackTrace),e+1>=a&&(n!==$&&(u=void 0,l=[r]),t.rejectWith(u,l))}};e?d():(T.Deferred.getStackHook&&(d.stackTrace=T.Deferred.getStackHook()),o.setTimeout(d))}}return T.Deferred(function(r){t[0][3].add(s(0,r,b(i)?i:W,r.notifyWith)),t[1][3].add(s(0,r,b(e)?e:W)),t[2][3].add(s(0,r,b(n)?n:$))}).promise()},promise:function(e){return null!=e?T.extend(e,i):i}},a={};return T.each(t,function(e,r){var o=r[2],s=r[5];i[r[1]]=o.add,s&&o.add(function(){n=s},t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),o.add(r[3].fire),a[r[0]]=function(){return a[r[0]+"With"](this===a?void 0:this,arguments),this},a[r[0]+"With"]=o.fireWith}),i.promise(a),e&&e.call(a,a),a},when:function(e){var t=arguments.length,n=t,r=Array(n),o=l.call(arguments),i=T.Deferred(),a=function(e){return function(n){r[e]=this,o[e]=arguments.length>1?l.call(arguments):n,--t||i.resolveWith(r,o)}};if(t<=1&&(Q(e,i.done(a(n)).resolve,i.reject,!t),"pending"===i.state()||b(o[n]&&o[n].then)))return i.then();for(;n--;)Q(o[n],a(n),i.reject);return i.promise()}});var F=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;T.Deferred.exceptionHook=function(e,t){o.console&&o.console.warn&&e&&F.test(e.name)&&o.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},T.readyException=function(e){o.setTimeout(function(){throw e})};var B=T.Deferred();function z(){s.removeEventListener("DOMContentLoaded",z),o.removeEventListener("load",z),T.ready()}T.fn.ready=function(e){return B.then(e).catch(function(e){T.readyException(e)}),this},T.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--T.readyWait:T.isReady)||(T.isReady=!0,!0!==e&&--T.readyWait>0||B.resolveWith(s,[T]))}}),T.ready.then=B.then,"complete"===s.readyState||"loading"!==s.readyState&&!s.documentElement.doScroll?o.setTimeout(T.ready):(s.addEventListener("DOMContentLoaded",z),o.addEventListener("load",z));var U=function e(t,n,r,o,i,a,s){var u=0,l=t.length,c=null==r;if("object"===C(r))for(u in i=!0,r)e(t,n,u,r[u],!0,a,s);else if(void 0!==o&&(i=!0,b(o)||(s=!0),c&&(s?(n.call(t,o),n=null):(c=n,n=function(e,t,n){return c.call(T(e),n)})),n))for(;u<l;u++)n(t[u],r,s?o:o.call(t[u],u,n(t[u],r)));return i?t:c?n.call(t):l?n(t[0],r):a},X=/^-ms-/,V=/-([a-z])/g;function G(e,t){return t.toUpperCase()}function J(e){return e.replace(X,"ms-").replace(V,G)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function K(){this.expando=T.expando+K.uid++}K.uid=1,K.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,o=this.cache(e);if("string"==typeof t)o[J(t)]=n;else for(r in t)o[J(r)]=t[r];return o},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][J(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(J):(t=J(t))in r?[t]:t.match(I)||[]).length;for(;n--;)delete r[t[n]]}(void 0===t||T.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!T.isEmptyObject(t)}};var Z=new K,ee=new K,te=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ne=/[A-Z]/g;function re(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ne,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:te.test(e)?JSON.parse(e):e)}(n)}catch(e){}ee.set(e,t,n)}else n=void 0;return n}T.extend({hasData:function(e){return ee.hasData(e)||Z.hasData(e)},data:function(e,t,n){return ee.access(e,t,n)},removeData:function(e,t){ee.remove(e,t)},_data:function(e,t,n){return Z.access(e,t,n)},_removeData:function(e,t){Z.remove(e,t)}}),T.fn.extend({data:function(e,t){var n,o,i,a=this[0],s=a&&a.attributes;if(void 0===e){if(this.length&&(i=ee.get(a),1===a.nodeType&&!Z.get(a,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(o=s[n].name).indexOf("data-")&&(o=J(o.slice(5)),re(a,o,i[o]));Z.set(a,"hasDataAttrs",!0)}return i}return"object"===r(e)?this.each(function(){ee.set(this,e)}):U(this,function(t){var n;if(a&&void 0===t)return void 0!==(n=ee.get(a,e))?n:void 0!==(n=re(a,e))?n:void 0;this.each(function(){ee.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){ee.remove(this,e)})}}),T.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Z.get(e,t),n&&(!r||Array.isArray(n)?r=Z.access(e,t,T.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=T.queue(e,t),r=n.length,o=n.shift(),i=T._queueHooks(e,t);"inprogress"===o&&(o=n.shift(),r--),o&&("fx"===t&&n.unshift("inprogress"),delete i.stop,o.call(e,function(){T.dequeue(e,t)},i)),!r&&i&&i.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Z.get(e,n)||Z.access(e,n,{empty:T.Callbacks("once memory").add(function(){Z.remove(e,[t+"queue",n])})})}}),T.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?T.queue(this[0],e):void 0===t?this:this.each(function(){var n=T.queue(this,e,t);T._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&T.dequeue(this,e)})},dequeue:function(e){return this.each(function(){T.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,o=T.Deferred(),i=this,a=this.length,s=function(){--r||o.resolveWith(i,[i])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=Z.get(i[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),o.promise(t)}});var oe=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+oe+")([a-z%]*)$","i"),ae=["Top","Right","Bottom","Left"],se=s.documentElement,ue=function(e){return T.contains(e.ownerDocument,e)},le={composed:!0};se.getRootNode&&(ue=function(e){return T.contains(e.ownerDocument,e)||e.getRootNode(le)===e.ownerDocument});var ce=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ue(e)&&"none"===T.css(e,"display")},de=function(e,t,n,r){var o,i,a={};for(i in t)a[i]=e.style[i],e.style[i]=t[i];for(i in o=n.apply(e,r||[]),t)e.style[i]=a[i];return o};function fe(e,t,n,r){var o,i,a=20,s=r?function(){return r.cur()}:function(){return T.css(e,t,"")},u=s(),l=n&&n[3]||(T.cssNumber[t]?"":"px"),c=e.nodeType&&(T.cssNumber[t]||"px"!==l&&+u)&&ie.exec(T.css(e,t));if(c&&c[3]!==l){for(u/=2,l=l||c[3],c=+u||1;a--;)T.style(e,t,c+l),(1-i)*(1-(i=s()/u||.5))<=0&&(a=0),c/=i;c*=2,T.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,o=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=o)),o}var pe={};function he(e){var t,n=e.ownerDocument,r=e.nodeName,o=pe[r];return o||(t=n.body.appendChild(n.createElement(r)),o=T.css(t,"display"),t.parentNode.removeChild(t),"none"===o&&(o="block"),pe[r]=o,o)}function ve(e,t){for(var n,r,o=[],i=0,a=e.length;i<a;i++)(r=e[i]).style&&(n=r.style.display,t?("none"===n&&(o[i]=Z.get(r,"display")||null,o[i]||(r.style.display="")),""===r.style.display&&ce(r)&&(o[i]=he(r))):"none"!==n&&(o[i]="none",Z.set(r,"display",n)));for(i=0;i<a;i++)null!=o[i]&&(e[i].style.display=o[i]);return e}T.fn.extend({show:function(){return ve(this,!0)},hide:function(){return ve(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ce(this)?T(this).show():T(this).hide()})}});var me=/^(?:checkbox|radio)$/i,ye=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ge=/^$|^module$|\/(?:java|ecma)script/i,be={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function xe(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&D(e,t)?T.merge([e],n):n}function we(e,t){for(var n=0,r=e.length;n<r;n++)Z.set(e[n],"globalEval",!t||Z.get(t[n],"globalEval"))}be.optgroup=be.option,be.tbody=be.tfoot=be.colgroup=be.caption=be.thead,be.th=be.td;var ke=/<|&#?\w+;/;function Ce(e,t,n,r,o){for(var i,a,s,u,l,c,d=t.createDocumentFragment(),f=[],p=0,h=e.length;p<h;p++)if((i=e[p])||0===i)if("object"===C(i))T.merge(f,i.nodeType?[i]:i);else if(ke.test(i)){for(a=a||d.appendChild(t.createElement("div")),s=(ye.exec(i)||["",""])[1].toLowerCase(),u=be[s]||be._default,a.innerHTML=u[1]+T.htmlPrefilter(i)+u[2],c=u[0];c--;)a=a.lastChild;T.merge(f,a.childNodes),(a=d.firstChild).textContent=""}else f.push(t.createTextNode(i));for(d.textContent="",p=0;i=f[p++];)if(r&&T.inArray(i,r)>-1)o&&o.push(i);else if(l=ue(i),a=xe(d.appendChild(i),"script"),l&&we(a),n)for(c=0;i=a[c++];)ge.test(i.type||"")&&n.push(i);return d}!function(){var e=s.createDocumentFragment().appendChild(s.createElement("div")),t=s.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),g.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",g.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var Te=/^key/,je=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Se=/^([^.]*)(?:\.(.+)|)/;function _e(){return!0}function Ae(){return!1}function Ee(e,t){return e===function(){try{return s.activeElement}catch(e){}}()==("focus"===t)}function Ne(e,t,n,o,i,a){var s,u;if("object"===r(t)){for(u in"string"!=typeof n&&(o=o||n,n=void 0),t)Ne(e,u,n,o,t[u],a);return e}if(null==o&&null==i?(i=n,o=n=void 0):null==i&&("string"==typeof n?(i=o,o=void 0):(i=o,o=n,n=void 0)),!1===i)i=Ae;else if(!i)return e;return 1===a&&(s=i,(i=function(e){return T().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=T.guid++)),e.each(function(){T.event.add(this,t,i,o,n)})}function De(e,t,n){n?(Z.set(e,t,!1),T.event.add(e,t,{namespace:!1,handler:function(e){var r,o,i=Z.get(this,t);if(1&e.isTrigger&&this[t]){if(i.length)(T.event.special[t]||{}).delegateType&&e.stopPropagation();else if(i=l.call(arguments),Z.set(this,t,i),r=n(this,t),this[t](),i!==(o=Z.get(this,t))||r?Z.set(this,t,!1):o={},i!==o)return e.stopImmediatePropagation(),e.preventDefault(),o.value}else i.length&&(Z.set(this,t,{value:T.event.trigger(T.extend(i[0],T.Event.prototype),i.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Z.get(e,t)&&T.event.add(e,t,_e)}T.event={global:{},add:function(e,t,n,r,o){var i,a,s,u,l,c,d,f,p,h,v,m=Z.get(e);if(m)for(n.handler&&(n=(i=n).handler,o=i.selector),o&&T.find.matchesSelector(se,o),n.guid||(n.guid=T.guid++),(u=m.events)||(u=m.events={}),(a=m.handle)||(a=m.handle=function(t){return void 0!==T&&T.event.triggered!==t.type?T.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(I)||[""]).length;l--;)p=v=(s=Se.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),p&&(d=T.event.special[p]||{},p=(o?d.delegateType:d.bindType)||p,d=T.event.special[p]||{},c=T.extend({type:p,origType:v,data:r,handler:n,guid:n.guid,selector:o,needsContext:o&&T.expr.match.needsContext.test(o),namespace:h.join(".")},i),(f=u[p])||((f=u[p]=[]).delegateCount=0,d.setup&&!1!==d.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(p,a)),d.add&&(d.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),o?f.splice(f.delegateCount++,0,c):f.push(c),T.event.global[p]=!0)},remove:function(e,t,n,r,o){var i,a,s,u,l,c,d,f,p,h,v,m=Z.hasData(e)&&Z.get(e);if(m&&(u=m.events)){for(l=(t=(t||"").match(I)||[""]).length;l--;)if(p=v=(s=Se.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),p){for(d=T.event.special[p]||{},f=u[p=(r?d.delegateType:d.bindType)||p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=i=f.length;i--;)c=f[i],!o&&v!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(i,1),c.selector&&f.delegateCount--,d.remove&&d.remove.call(e,c));a&&!f.length&&(d.teardown&&!1!==d.teardown.call(e,h,m.handle)||T.removeEvent(e,p,m.handle),delete u[p])}else for(p in u)T.event.remove(e,p+t[l],n,r,!0);T.isEmptyObject(u)&&Z.remove(e,"handle events")}},dispatch:function(e){var t,n,r,o,i,a,s=T.event.fix(e),u=new Array(arguments.length),l=(Z.get(this,"events")||{})[s.type]||[],c=T.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){for(a=T.event.handlers.call(this,s,l),t=0;(o=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=o.elem,n=0;(i=o.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!1!==i.namespace&&!s.rnamespace.test(i.namespace)||(s.handleObj=i,s.data=i.data,void 0!==(r=((T.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,o,i,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(i=[],a={},n=0;n<u;n++)void 0===a[o=(r=t[n]).selector+" "]&&(a[o]=r.needsContext?T(o,this).index(l)>-1:T.find(o,this,null,[l]).length),a[o]&&i.push(r);i.length&&s.push({elem:l,handlers:i})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(T.Event.prototype,e,{enumerable:!0,configurable:!0,get:b(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[T.expando]?e:new T.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return me.test(t.type)&&t.click&&D(t,"input")&&De(t,"click",_e),!1},trigger:function(e){var t=this||e;return me.test(t.type)&&t.click&&D(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return me.test(t.type)&&t.click&&D(t,"input")&&Z.get(t,"click")||D(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},T.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},T.Event=function(e,t){if(!(this instanceof T.Event))return new T.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?_e:Ae,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&T.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[T.expando]=!0},T.Event.prototype={constructor:T.Event,isDefaultPrevented:Ae,isPropagationStopped:Ae,isImmediatePropagationStopped:Ae,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=_e,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=_e,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=_e,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},T.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&je.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},T.event.addProp),T.each({focus:"focusin",blur:"focusout"},function(e,t){T.event.special[e]={setup:function(){return De(this,e,Ee),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),T.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){T.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,o=e.handleObj;return r&&(r===this||T.contains(this,r))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),T.fn.extend({on:function(e,t,n,r){return Ne(this,e,t,n,r)},one:function(e,t,n,r){return Ne(this,e,t,n,r,1)},off:function(e,t,n){var o,i;if(e&&e.preventDefault&&e.handleObj)return o=e.handleObj,T(e.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this;if("object"===r(e)){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ae),this.each(function(){T.event.remove(this,e,n,t)})}});var qe=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Le=/<script|<style|<link/i,Oe=/checked\s*(?:[^=]|=\s*.checked.)/i,Pe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Me(e,t){return D(e,"table")&&D(11!==t.nodeType?t:t.firstChild,"tr")&&T(e).children("tbody")[0]||e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Ie(e,t){var n,r,o,i,a,s,u,l;if(1===t.nodeType){if(Z.hasData(e)&&(i=Z.access(e),a=Z.set(t,i),l=i.events))for(o in delete a.handle,a.events={},l)for(n=0,r=l[o].length;n<r;n++)T.event.add(t,o,l[o][n]);ee.hasData(e)&&(s=ee.access(e),u=T.extend({},s),ee.set(t,u))}}function We(e,t){var n=t.nodeName.toLowerCase();"input"===n&&me.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function $e(e,t,n,r){t=c.apply([],t);var o,i,a,s,u,l,d=0,f=e.length,p=f-1,h=t[0],v=b(h);if(v||f>1&&"string"==typeof h&&!g.checkClone&&Oe.test(h))return e.each(function(o){var i=e.eq(o);v&&(t[0]=h.call(this,o,i.html())),$e(i,t,n,r)});if(f&&(i=(o=Ce(t,e[0].ownerDocument,!1,e,r)).firstChild,1===o.childNodes.length&&(o=i),i||r)){for(s=(a=T.map(xe(o,"script"),He)).length;d<f;d++)u=o,d!==p&&(u=T.clone(u,!0,!0),s&&T.merge(a,xe(u,"script"))),n.call(e[d],u,d);if(s)for(l=a[a.length-1].ownerDocument,T.map(a,Re),d=0;d<s;d++)u=a[d],ge.test(u.type||"")&&!Z.access(u,"globalEval")&&T.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?T._evalUrl&&!u.noModule&&T._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):k(u.textContent.replace(Pe,""),u,l))}return e}function Qe(e,t,n){for(var r,o=t?T.filter(t,e):e,i=0;null!=(r=o[i]);i++)n||1!==r.nodeType||T.cleanData(xe(r)),r.parentNode&&(n&&ue(r)&&we(xe(r,"script")),r.parentNode.removeChild(r));return e}T.extend({htmlPrefilter:function(e){return e.replace(qe,"<$1></$2>")},clone:function(e,t,n){var r,o,i,a,s=e.cloneNode(!0),u=ue(e);if(!(g.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||T.isXMLDoc(e)))for(a=xe(s),r=0,o=(i=xe(e)).length;r<o;r++)We(i[r],a[r]);if(t)if(n)for(i=i||xe(e),a=a||xe(s),r=0,o=i.length;r<o;r++)Ie(i[r],a[r]);else Ie(e,s);return(a=xe(s,"script")).length>0&&we(a,!u&&xe(e,"script")),s},cleanData:function(e){for(var t,n,r,o=T.event.special,i=0;void 0!==(n=e[i]);i++)if(Y(n)){if(t=n[Z.expando]){if(t.events)for(r in t.events)o[r]?T.event.remove(n,r):T.removeEvent(n,r,t.handle);n[Z.expando]=void 0}n[ee.expando]&&(n[ee.expando]=void 0)}}}),T.fn.extend({detach:function(e){return Qe(this,e,!0)},remove:function(e){return Qe(this,e)},text:function(e){return U(this,function(e){return void 0===e?T.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Me(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Me(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(T.cleanData(xe(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return T.clone(this,e,t)})},html:function(e){return U(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Le.test(e)&&!be[(ye.exec(e)||["",""])[1].toLowerCase()]){e=T.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(T.cleanData(xe(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return $e(this,arguments,function(t){var n=this.parentNode;T.inArray(this,e)<0&&(T.cleanData(xe(this)),n&&n.replaceChild(t,this))},e)}}),T.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){T.fn[e]=function(e){for(var n,r=[],o=T(e),i=o.length-1,a=0;a<=i;a++)n=a===i?this:this.clone(!0),T(o[a])[t](n),d.apply(r,n.get());return this.pushStack(r)}});var Fe=new RegExp("^("+oe+")(?!px)[a-z%]+$","i"),Be=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=o),t.getComputedStyle(e)},ze=new RegExp(ae.join("|"),"i");function Ue(e,t,n){var r,o,i,a,s=e.style;return(n=n||Be(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ue(e)||(a=T.style(e,t)),!g.pixelBoxStyles()&&Fe.test(a)&&ze.test(t)&&(r=s.width,o=s.minWidth,i=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=o,s.maxWidth=i)),void 0!==a?a+"":a}function Xe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",se.appendChild(l).appendChild(c);var e=o.getComputedStyle(c);n="1%"!==e.top,u=12===t(e.marginLeft),c.style.right="60%",a=36===t(e.right),r=36===t(e.width),c.style.position="absolute",i=12===t(c.offsetWidth/3),se.removeChild(l),c=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,a,u,l=s.createElement("div"),c=s.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",g.clearCloneStyle="content-box"===c.style.backgroundClip,T.extend(g,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),a},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),u},scrollboxSize:function(){return e(),i}}))}();var Ve=["Webkit","Moz","ms"],Ge=s.createElement("div").style,Je={};function Ye(e){var t=T.cssProps[e]||Je[e];return t||(e in Ge?e:Je[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Ve.length;n--;)if((e=Ve[n]+t)in Ge)return e}(e)||e)}var Ke=/^(none|table(?!-c[ea]).+)/,Ze=/^--/,et={position:"absolute",visibility:"hidden",display:"block"},tt={letterSpacing:"0",fontWeight:"400"};function nt(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function rt(e,t,n,r,o,i){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=T.css(e,n+ae[a],!0,o)),r?("content"===n&&(u-=T.css(e,"padding"+ae[a],!0,o)),"margin"!==n&&(u-=T.css(e,"border"+ae[a]+"Width",!0,o))):(u+=T.css(e,"padding"+ae[a],!0,o),"padding"!==n?u+=T.css(e,"border"+ae[a]+"Width",!0,o):s+=T.css(e,"border"+ae[a]+"Width",!0,o));return!r&&i>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-i-u-s-.5))||0),u}function ot(e,t,n){var r=Be(e),o=(!g.boxSizingReliable()||n)&&"border-box"===T.css(e,"boxSizing",!1,r),i=o,a=Ue(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Fe.test(a)){if(!n)return a;a="auto"}return(!g.boxSizingReliable()&&o||"auto"===a||!parseFloat(a)&&"inline"===T.css(e,"display",!1,r))&&e.getClientRects().length&&(o="border-box"===T.css(e,"boxSizing",!1,r),(i=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+rt(e,t,n||(o?"border":"content"),i,r,a)+"px"}function it(e,t,n,r,o){return new it.prototype.init(e,t,n,r,o)}T.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ue(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,o){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,a,s,u=J(t),l=Ze.test(t),c=e.style;if(l||(t=Ye(u)),s=T.cssHooks[t]||T.cssHooks[u],void 0===n)return s&&"get"in s&&void 0!==(i=s.get(e,!1,o))?i:c[t];"string"===(a=r(n))&&(i=ie.exec(n))&&i[1]&&(n=fe(e,t,i),a="number"),null!=n&&n==n&&("number"!==a||l||(n+=i&&i[3]||(T.cssNumber[u]?"":"px")),g.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,o))||(l?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,r){var o,i,a,s=J(t);return Ze.test(t)||(t=Ye(s)),(a=T.cssHooks[t]||T.cssHooks[s])&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=Ue(e,t,r)),"normal"===o&&t in tt&&(o=tt[t]),""===n||n?(i=parseFloat(o),!0===n||isFinite(i)?i||0:o):o}}),T.each(["height","width"],function(e,t){T.cssHooks[t]={get:function(e,n,r){if(n)return!Ke.test(T.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,t,r):de(e,et,function(){return ot(e,t,r)})},set:function(e,n,r){var o,i=Be(e),a=!g.scrollboxSize()&&"absolute"===i.position,s=(a||r)&&"border-box"===T.css(e,"boxSizing",!1,i),u=r?rt(e,t,r,s,i):0;return s&&a&&(u-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(i[t])-rt(e,t,"border",!1,i)-.5)),u&&(o=ie.exec(n))&&"px"!==(o[3]||"px")&&(e.style[t]=n,n=T.css(e,t)),nt(0,n,u)}}}),T.cssHooks.marginLeft=Xe(g.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ue(e,"marginLeft"))||e.getBoundingClientRect().left-de(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),T.each({margin:"",padding:"",border:"Width"},function(e,t){T.cssHooks[e+t]={expand:function(n){for(var r=0,o={},i="string"==typeof n?n.split(" "):[n];r<4;r++)o[e+ae[r]+t]=i[r]||i[r-2]||i[0];return o}},"margin"!==e&&(T.cssHooks[e+t].set=nt)}),T.fn.extend({css:function(e,t){return U(this,function(e,t,n){var r,o,i={},a=0;if(Array.isArray(t)){for(r=Be(e),o=t.length;a<o;a++)i[t[a]]=T.css(e,t[a],!1,r);return i}return void 0!==n?T.style(e,t,n):T.css(e,t)},e,t,arguments.length>1)}}),T.Tween=it,it.prototype={constructor:it,init:function(e,t,n,r,o,i){this.elem=e,this.prop=n,this.easing=o||T.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=i||(T.cssNumber[n]?"":"px")},cur:function(){var e=it.propHooks[this.prop];return e&&e.get?e.get(this):it.propHooks._default.get(this)},run:function(e){var t,n=it.propHooks[this.prop];return this.options.duration?this.pos=t=T.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):it.propHooks._default.set(this),this}},it.prototype.init.prototype=it.prototype,it.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=T.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){T.fx.step[e.prop]?T.fx.step[e.prop](e):1!==e.elem.nodeType||!T.cssHooks[e.prop]&&null==e.elem.style[Ye(e.prop)]?e.elem[e.prop]=e.now:T.style(e.elem,e.prop,e.now+e.unit)}}},it.propHooks.scrollTop=it.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},T.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},T.fx=it.prototype.init,T.fx.step={};var at,st,ut=/^(?:toggle|show|hide)$/,lt=/queueHooks$/;function ct(){st&&(!1===s.hidden&&o.requestAnimationFrame?o.requestAnimationFrame(ct):o.setTimeout(ct,T.fx.interval),T.fx.tick())}function dt(){return o.setTimeout(function(){at=void 0}),at=Date.now()}function ft(e,t){var n,r=0,o={height:e};for(t=t?1:0;r<4;r+=2-t)o["margin"+(n=ae[r])]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function pt(e,t,n){for(var r,o=(ht.tweeners[t]||[]).concat(ht.tweeners["*"]),i=0,a=o.length;i<a;i++)if(r=o[i].call(n,t,e))return r}function ht(e,t,n){var r,o,i=0,a=ht.prefilters.length,s=T.Deferred().always(function(){delete u.elem}),u=function(){if(o)return!1;for(var t=at||dt(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),i=0,a=l.tweens.length;i<a;i++)l.tweens[i].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:T.extend({},t),opts:T.extend(!0,{specialEasing:{},easing:T.easing._default},n),originalProperties:t,originalOptions:n,startTime:at||dt(),duration:n.duration,tweens:[],createTween:function(t,n){var r=T.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(o)return this;for(o=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(!function(e,t){var n,r,o,i,a;for(n in e)if(o=t[r=J(n)],i=e[n],Array.isArray(i)&&(o=i[1],i=e[n]=i[0]),n!==r&&(e[r]=i,delete e[n]),(a=T.cssHooks[r])&&"expand"in a)for(n in i=a.expand(i),delete e[r],i)n in e||(e[n]=i[n],t[n]=o);else t[r]=o}(c,l.opts.specialEasing);i<a;i++)if(r=ht.prefilters[i].call(l,e,c,l.opts))return b(r.stop)&&(T._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return T.map(c,pt,l),b(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),T.fx.timer(T.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}T.Animation=T.extend(ht,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return fe(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){b(e)?(t=e,e=["*"]):e=e.match(I);for(var n,r=0,o=e.length;r<o;r++)n=e[r],ht.tweeners[n]=ht.tweeners[n]||[],ht.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,o,i,a,s,u,l,c,d="width"in t||"height"in t,f=this,p={},h=e.style,v=e.nodeType&&ce(e),m=Z.get(e,"fxshow");for(r in n.queue||(null==(a=T._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,f.always(function(){f.always(function(){a.unqueued--,T.queue(e,"fx").length||a.empty.fire()})})),t)if(o=t[r],ut.test(o)){if(delete t[r],i=i||"toggle"===o,o===(v?"hide":"show")){if("show"!==o||!m||void 0===m[r])continue;v=!0}p[r]=m&&m[r]||T.style(e,r)}if((u=!T.isEmptyObject(t))||!T.isEmptyObject(p))for(r in d&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=m&&m.display)&&(l=Z.get(e,"display")),"none"===(c=T.css(e,"display"))&&(l?c=l:(ve([e],!0),l=e.style.display||l,c=T.css(e,"display"),ve([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===T.css(e,"float")&&(u||(f.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",f.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,p)u||(m?"hidden"in m&&(v=m.hidden):m=Z.access(e,"fxshow",{display:l}),i&&(m.hidden=!v),v&&ve([e],!0),f.done(function(){for(r in v||ve([e]),Z.remove(e,"fxshow"),p)T.style(e,r,p[r])})),u=pt(v?m[r]:0,r,f),r in m||(m[r]=u.start,v&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ht.prefilters.unshift(e):ht.prefilters.push(e)}}),T.speed=function(e,t,n){var o=e&&"object"===r(e)?T.extend({},e):{complete:n||!n&&t||b(e)&&e,duration:e,easing:n&&t||t&&!b(t)&&t};return T.fx.off?o.duration=0:"number"!=typeof o.duration&&(o.duration in T.fx.speeds?o.duration=T.fx.speeds[o.duration]:o.duration=T.fx.speeds._default),null!=o.queue&&!0!==o.queue||(o.queue="fx"),o.old=o.complete,o.complete=function(){b(o.old)&&o.old.call(this),o.queue&&T.dequeue(this,o.queue)},o},T.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ce).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var o=T.isEmptyObject(e),i=T.speed(t,n,r),a=function(){var t=ht(this,T.extend({},e),i);(o||Z.get(this,"finish"))&&t.stop(!0)};return a.finish=a,o||!1===i.queue?this.each(a):this.queue(i.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,o=null!=e&&e+"queueHooks",i=T.timers,a=Z.get(this);if(o)a[o]&&a[o].stop&&r(a[o]);else for(o in a)a[o]&&a[o].stop&&lt.test(o)&&r(a[o]);for(o=i.length;o--;)i[o].elem!==this||null!=e&&i[o].queue!==e||(i[o].anim.stop(n),t=!1,i.splice(o,1));!t&&n||T.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=Z.get(this),r=n[e+"queue"],o=n[e+"queueHooks"],i=T.timers,a=r?r.length:0;for(n.finish=!0,T.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=i.length;t--;)i[t].elem===this&&i[t].queue===e&&(i[t].anim.stop(!0),i.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),T.each(["toggle","show","hide"],function(e,t){var n=T.fn[t];T.fn[t]=function(e,r,o){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ft(t,!0),e,r,o)}}),T.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){T.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),T.timers=[],T.fx.tick=function(){var e,t=0,n=T.timers;for(at=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||T.fx.stop(),at=void 0},T.fx.timer=function(e){T.timers.push(e),T.fx.start()},T.fx.interval=13,T.fx.start=function(){st||(st=!0,ct())},T.fx.stop=function(){st=null},T.fx.speeds={slow:600,fast:200,_default:400},T.fn.delay=function(e,t){return e=T.fx&&T.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(t,n){var r=o.setTimeout(t,e);n.stop=function(){o.clearTimeout(r)}})},function(){var e=s.createElement("input"),t=s.createElement("select").appendChild(s.createElement("option"));e.type="checkbox",g.checkOn=""!==e.value,g.optSelected=t.selected,(e=s.createElement("input")).value="t",e.type="radio",g.radioValue="t"===e.value}();var vt,mt=T.expr.attrHandle;T.fn.extend({attr:function(e,t){return U(this,T.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){T.removeAttr(this,e)})}}),T.extend({attr:function(e,t,n){var r,o,i=e.nodeType;if(3!==i&&8!==i&&2!==i)return void 0===e.getAttribute?T.prop(e,t,n):(1===i&&T.isXMLDoc(e)||(o=T.attrHooks[t.toLowerCase()]||(T.expr.match.bool.test(t)?vt:void 0)),void 0!==n?null===n?void T.removeAttr(e,t):o&&"set"in o&&void 0!==(r=o.set(e,n,t))?r:(e.setAttribute(t,n+""),n):o&&"get"in o&&null!==(r=o.get(e,t))?r:null==(r=T.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!g.radioValue&&"radio"===t&&D(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,o=t&&t.match(I);if(o&&1===e.nodeType)for(;n=o[r++];)e.removeAttribute(n)}}),vt={set:function(e,t,n){return!1===t?T.removeAttr(e,n):e.setAttribute(n,n),n}},T.each(T.expr.match.bool.source.match(/\w+/g),function(e,t){var n=mt[t]||T.find.attr;mt[t]=function(e,t,r){var o,i,a=t.toLowerCase();return r||(i=mt[a],mt[a]=o,o=null!=n(e,t,r)?a:null,mt[a]=i),o}});var yt=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function bt(e){return(e.match(I)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function wt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(I)||[]}T.fn.extend({prop:function(e,t){return U(this,T.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[T.propFix[e]||e]})}}),T.extend({prop:function(e,t,n){var r,o,i=e.nodeType;if(3!==i&&8!==i&&2!==i)return 1===i&&T.isXMLDoc(e)||(t=T.propFix[t]||t,o=T.propHooks[t]),void 0!==n?o&&"set"in o&&void 0!==(r=o.set(e,n,t))?r:e[t]=n:o&&"get"in o&&null!==(r=o.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=T.find.attr(e,"tabindex");return t?parseInt(t,10):yt.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),g.optSelected||(T.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),T.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){T.propFix[this.toLowerCase()]=this}),T.fn.extend({addClass:function(e){var t,n,r,o,i,a,s,u=0;if(b(e))return this.each(function(t){T(this).addClass(e.call(this,t,xt(this)))});if((t=wt(e)).length)for(;n=this[u++];)if(o=xt(n),r=1===n.nodeType&&" "+bt(o)+" "){for(a=0;i=t[a++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");o!==(s=bt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,o,i,a,s,u=0;if(b(e))return this.each(function(t){T(this).removeClass(e.call(this,t,xt(this)))});if(!arguments.length)return this.attr("class","");if((t=wt(e)).length)for(;n=this[u++];)if(o=xt(n),r=1===n.nodeType&&" "+bt(o)+" "){for(a=0;i=t[a++];)for(;r.indexOf(" "+i+" ")>-1;)r=r.replace(" "+i+" "," ");o!==(s=bt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=r(e),o="string"===n||Array.isArray(e);return"boolean"==typeof t&&o?t?this.addClass(e):this.removeClass(e):b(e)?this.each(function(n){T(this).toggleClass(e.call(this,n,xt(this),t),t)}):this.each(function(){var t,r,i,a;if(o)for(r=0,i=T(this),a=wt(e);t=a[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else void 0!==e&&"boolean"!==n||((t=xt(this))&&Z.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":Z.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+bt(xt(n))+" ").indexOf(t)>-1)return!0;return!1}});var kt=/\r/g;T.fn.extend({val:function(e){var t,n,r,o=this[0];return arguments.length?(r=b(e),this.each(function(n){var o;1===this.nodeType&&(null==(o=r?e.call(this,n,T(this).val()):e)?o="":"number"==typeof o?o+="":Array.isArray(o)&&(o=T.map(o,function(e){return null==e?"":e+""})),(t=T.valHooks[this.type]||T.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,o,"value")||(this.value=o))})):o?(t=T.valHooks[o.type]||T.valHooks[o.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(o,"value"))?n:"string"==typeof(n=o.value)?n.replace(kt,""):null==n?"":n:void 0}}),T.extend({valHooks:{option:{get:function(e){var t=T.find.attr(e,"value");return null!=t?t:bt(T.text(e))}},select:{get:function(e){var t,n,r,o=e.options,i=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?i+1:o.length;for(r=i<0?u:a?i:0;r<u;r++)if(((n=o[r]).selected||r===i)&&!n.disabled&&(!n.parentNode.disabled||!D(n.parentNode,"optgroup"))){if(t=T(n).val(),a)return t;s.push(t)}return s},set:function(e,t){for(var n,r,o=e.options,i=T.makeArray(t),a=o.length;a--;)((r=o[a]).selected=T.inArray(T.valHooks.option.get(r),i)>-1)&&(n=!0);return n||(e.selectedIndex=-1),i}}}}),T.each(["radio","checkbox"],function(){T.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=T.inArray(T(e).val(),t)>-1}},g.checkOn||(T.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),g.focusin="onfocusin"in o;var Ct=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};T.extend(T.event,{trigger:function(e,t,n,i){var a,u,l,c,d,f,p,h,m=[n||s],y=v.call(e,"type")?e.type:e,g=v.call(e,"namespace")?e.namespace.split("."):[];if(u=h=l=n=n||s,3!==n.nodeType&&8!==n.nodeType&&!Ct.test(y+T.event.triggered)&&(y.indexOf(".")>-1&&(y=(g=y.split(".")).shift(),g.sort()),d=y.indexOf(":")<0&&"on"+y,(e=e[T.expando]?e:new T.Event(y,"object"===r(e)&&e)).isTrigger=i?2:3,e.namespace=g.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:T.makeArray(t,[e]),p=T.event.special[y]||{},i||!p.trigger||!1!==p.trigger.apply(n,t))){if(!i&&!p.noBubble&&!x(n)){for(c=p.delegateType||y,Ct.test(c+y)||(u=u.parentNode);u;u=u.parentNode)m.push(u),l=u;l===(n.ownerDocument||s)&&m.push(l.defaultView||l.parentWindow||o)}for(a=0;(u=m[a++])&&!e.isPropagationStopped();)h=u,e.type=a>1?c:p.bindType||y,(f=(Z.get(u,"events")||{})[e.type]&&Z.get(u,"handle"))&&f.apply(u,t),(f=d&&u[d])&&f.apply&&Y(u)&&(e.result=f.apply(u,t),!1===e.result&&e.preventDefault());return e.type=y,i||e.isDefaultPrevented()||p._default&&!1!==p._default.apply(m.pop(),t)||!Y(n)||d&&b(n[y])&&!x(n)&&((l=n[d])&&(n[d]=null),T.event.triggered=y,e.isPropagationStopped()&&h.addEventListener(y,Tt),n[y](),e.isPropagationStopped()&&h.removeEventListener(y,Tt),T.event.triggered=void 0,l&&(n[d]=l)),e.result}},simulate:function(e,t,n){var r=T.extend(new T.Event,n,{type:e,isSimulated:!0});T.event.trigger(r,null,t)}}),T.fn.extend({trigger:function(e,t){return this.each(function(){T.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return T.event.trigger(e,t,n,!0)}}),g.focusin||T.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){T.event.simulate(t,e.target,T.event.fix(e))};T.event.special[t]={setup:function(){var r=this.ownerDocument||this,o=Z.access(r,t);o||r.addEventListener(e,n,!0),Z.access(r,t,(o||0)+1)},teardown:function(){var r=this.ownerDocument||this,o=Z.access(r,t)-1;o?Z.access(r,t,o):(r.removeEventListener(e,n,!0),Z.remove(r,t))}}});var jt=o.location,St=Date.now(),_t=/\?/;T.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new o.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||T.error("Invalid XML: "+e),t};var At=/\[\]$/,Et=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,Dt=/^(?:input|select|textarea|keygen)/i;function qt(e,t,n,o){var i;if(Array.isArray(t))T.each(t,function(t,i){n||At.test(e)?o(e,i):qt(e+"["+("object"===r(i)&&null!=i?t:"")+"]",i,n,o)});else if(n||"object"!==C(t))o(e,t);else for(i in t)qt(e+"["+i+"]",t[i],n,o)}T.param=function(e,t){var n,r=[],o=function(e,t){var n=b(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!T.isPlainObject(e))T.each(e,function(){o(this.name,this.value)});else for(n in e)qt(n,e[n],t,o);return r.join("&")},T.fn.extend({serialize:function(){return T.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=T.prop(this,"elements");return e?T.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!T(this).is(":disabled")&&Dt.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!me.test(e))}).map(function(e,t){var n=T(this).val();return null==n?null:Array.isArray(n)?T.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Lt=/%20/g,Ot=/#.*$/,Pt=/([?&])_=[^&]*/,Mt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ht=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Qt=s.createElement("a");function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,o=0,i=t.toLowerCase().match(I)||[];if(b(n))for(;r=i[o++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Bt(e,t,n,r){var o={},i=e===Wt;function a(s){var u;return o[s]=!0,T.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||i||o[l]?i?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!o["*"]&&a("*")}function zt(e,t){var n,r,o=T.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:r||(r={}))[n]=t[n]);return r&&T.extend(!0,e,r),e}Qt.href=jt.href,T.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(jt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":T.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,T.ajaxSettings),t):zt(T.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(e,t){"object"===r(e)&&(t=e,e=void 0),t=t||{};var n,i,a,u,l,c,d,f,p,h,v=T.ajaxSetup({},t),m=v.context||v,y=v.context&&(m.nodeType||m.jquery)?T(m):T.event,g=T.Deferred(),b=T.Callbacks("once memory"),x=v.statusCode||{},w={},k={},C="canceled",j={readyState:0,getResponseHeader:function(e){var t;if(d){if(!u)for(u={};t=Mt.exec(a);)u[t[1].toLowerCase()+" "]=(u[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=u[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return d?a:null},setRequestHeader:function(e,t){return null==d&&(e=k[e.toLowerCase()]=k[e.toLowerCase()]||e,w[e]=t),this},overrideMimeType:function(e){return null==d&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(d)j.always(e[j.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return n&&n.abort(t),S(0,t),this}};if(g.promise(j),v.url=((e||v.url||jt.href)+"").replace(Rt,jt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(I)||[""],null==v.crossDomain){c=s.createElement("a");try{c.href=v.url,c.href=c.href,v.crossDomain=Qt.protocol+"//"+Qt.host!=c.protocol+"//"+c.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=T.param(v.data,v.traditional)),Bt(It,v,t,j),d)return j;for(p in(f=T.event&&v.global)&&0==T.active++&&T.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ht.test(v.type),i=v.url.replace(Ot,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(h=v.url.slice(i.length),v.data&&(v.processData||"string"==typeof v.data)&&(i+=(_t.test(i)?"&":"?")+v.data,delete v.data),!1===v.cache&&(i=i.replace(Pt,"$1"),h=(_t.test(i)?"&":"?")+"_="+St+++h),v.url=i+h),v.ifModified&&(T.lastModified[i]&&j.setRequestHeader("If-Modified-Since",T.lastModified[i]),T.etag[i]&&j.setRequestHeader("If-None-Match",T.etag[i])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&j.setRequestHeader("Content-Type",v.contentType),j.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)j.setRequestHeader(p,v.headers[p]);if(v.beforeSend&&(!1===v.beforeSend.call(m,j,v)||d))return j.abort();if(C="abort",b.add(v.complete),j.done(v.success),j.fail(v.error),n=Bt(Wt,v,t,j)){if(j.readyState=1,f&&y.trigger("ajaxSend",[j,v]),d)return j;v.async&&v.timeout>0&&(l=o.setTimeout(function(){j.abort("timeout")},v.timeout));try{d=!1,n.send(w,S)}catch(e){if(d)throw e;S(-1,e)}}else S(-1,"No Transport");function S(e,t,r,s){var u,c,p,h,w,k=t;d||(d=!0,l&&o.clearTimeout(l),n=void 0,a=s||"",j.readyState=e>0?4:0,u=e>=200&&e<300||304===e,r&&(h=function(e,t,n){for(var r,o,i,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(o in s)if(s[o]&&s[o].test(r)){u.unshift(o);break}if(u[0]in n)i=u[0];else{for(o in n){if(!u[0]||e.converters[o+" "+u[0]]){i=o;break}a||(a=o)}i=i||a}if(i)return i!==u[0]&&u.unshift(i),n[i]}(v,j,r)),h=function(e,t,n,r){var o,i,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(i=c.shift();i;)if(e.responseFields[i]&&(n[e.responseFields[i]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=i,i=c.shift())if("*"===i)i=u;else if("*"!==u&&u!==i){if(!(a=l[u+" "+i]||l["* "+i]))for(o in l)if((s=o.split(" "))[1]===i&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[o]:!0!==l[o]&&(i=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+i}}}return{state:"success",data:t}}(v,h,j,u),u?(v.ifModified&&((w=j.getResponseHeader("Last-Modified"))&&(T.lastModified[i]=w),(w=j.getResponseHeader("etag"))&&(T.etag[i]=w)),204===e||"HEAD"===v.type?k="nocontent":304===e?k="notmodified":(k=h.state,c=h.data,u=!(p=h.error))):(p=k,!e&&k||(k="error",e<0&&(e=0))),j.status=e,j.statusText=(t||k)+"",u?g.resolveWith(m,[c,k,j]):g.rejectWith(m,[j,k,p]),j.statusCode(x),x=void 0,f&&y.trigger(u?"ajaxSuccess":"ajaxError",[j,v,u?c:p]),b.fireWith(m,[j,k]),f&&(y.trigger("ajaxComplete",[j,v]),--T.active||T.event.trigger("ajaxStop")))}return j},getJSON:function(e,t,n){return T.get(e,t,n,"json")},getScript:function(e,t){return T.get(e,void 0,t,"script")}}),T.each(["get","post"],function(e,t){T[t]=function(e,n,r,o){return b(n)&&(o=o||r,r=n,n=void 0),T.ajax(T.extend({url:e,type:t,dataType:o,data:n,success:r},T.isPlainObject(e)&&e))}}),T._evalUrl=function(e,t){return T.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){T.globalEval(e,t)}})},T.fn.extend({wrapAll:function(e){var t;return this[0]&&(b(e)&&(e=e.call(this[0])),t=T(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return b(e)?this.each(function(t){T(this).wrapInner(e.call(this,t))}):this.each(function(){var t=T(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b(e);return this.each(function(n){T(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){T(this).replaceWith(this.childNodes)}),this}}),T.expr.pseudos.hidden=function(e){return!T.expr.pseudos.visible(e)},T.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},T.ajaxSettings.xhr=function(){try{return new o.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=T.ajaxSettings.xhr();g.cors=!!Xt&&"withCredentials"in Xt,g.ajax=Xt=!!Xt,T.ajaxTransport(function(e){var t,n;if(g.cors||Xt&&!e.crossDomain)return{send:function(r,i){var a,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(a in e.xhrFields)s[a]=e.xhrFields[a];for(a in e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)s.setRequestHeader(a,r[a]);t=function(e){return function(){t&&(t=n=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?i(0,"error"):i(s.status,s.statusText):i(Ut[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=t(),n=s.onerror=s.ontimeout=t("error"),void 0!==s.onabort?s.onabort=n:s.onreadystatechange=function(){4===s.readyState&&o.setTimeout(function(){t&&n()})},t=t("abort");try{s.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}}),T.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),T.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return T.globalEval(e),e}}}),T.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),T.ajaxTransport("script",function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(r,o){t=T("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),s.head.appendChild(t[0])},abort:function(){n&&n()}}});var Vt=[],Gt=/(=)\?(?=&|$)|\?\?/;T.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Vt.pop()||T.expando+"_"+St++;return this[e]=!0,e}}),T.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,a,s=!1!==e.jsonp&&(Gt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gt.test(e.data)&&"data");if(s||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=b(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(Gt,"$1"+r):!1!==e.jsonp&&(e.url+=(_t.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return a||T.error(r+" was not called"),a[0]},e.dataTypes[0]="json",i=o[r],o[r]=function(){a=arguments},n.always(function(){void 0===i?T(o).removeProp(r):o[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Vt.push(r)),a&&b(i)&&i(a[0]),a=i=void 0}),"script"}),g.createHTMLDocument=function(){var e=s.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),T.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(g.createHTMLDocument?((r=(t=s.implementation.createHTMLDocument("")).createElement("base")).href=s.location.href,t.head.appendChild(r)):t=s),o=q.exec(e),i=!n&&[],o?[t.createElement(o[1])]:(o=Ce([e],t,i),i&&i.length&&T(i).remove(),T.merge([],o.childNodes)));var r,o,i},T.fn.load=function(e,t,n){var o,i,a,s=this,u=e.indexOf(" ");return u>-1&&(o=bt(e.slice(u)),e=e.slice(0,u)),b(t)?(n=t,t=void 0):t&&"object"===r(t)&&(i="POST"),s.length>0&&T.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){a=arguments,s.html(o?T("<div>").append(T.parseHTML(e)).find(o):e)}).always(n&&function(e,t){s.each(function(){n.apply(this,a||[e.responseText,t,e])})}),this},T.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){T.fn[t]=function(e){return this.on(t,e)}}),T.expr.pseudos.animated=function(e){return T.grep(T.timers,function(t){return e===t.elem}).length},T.offset={setOffset:function(e,t,n){var r,o,i,a,s,u,l=T.css(e,"position"),c=T(e),d={};"static"===l&&(e.style.position="relative"),s=c.offset(),i=T.css(e,"top"),u=T.css(e,"left"),("absolute"===l||"fixed"===l)&&(i+u).indexOf("auto")>-1?(a=(r=c.position()).top,o=r.left):(a=parseFloat(i)||0,o=parseFloat(u)||0),b(t)&&(t=t.call(e,n,T.extend({},s))),null!=t.top&&(d.top=t.top-s.top+a),null!=t.left&&(d.left=t.left-s.left+o),"using"in t?t.using.call(e,d):c.css(d)}},T.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){T.offset.setOffset(this,e,t)});var t,n,r=this[0];return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],o={top:0,left:0};if("fixed"===T.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===T.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&((o=T(e).offset()).top+=T.css(e,"borderTopWidth",!0),o.left+=T.css(e,"borderLeftWidth",!0))}return{top:t.top-o.top-T.css(r,"marginTop",!0),left:t.left-o.left-T.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===T.css(e,"position");)e=e.offsetParent;return e||se})}}),T.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;T.fn[e]=function(r){return U(this,function(e,r,o){var i;if(x(e)?i=e:9===e.nodeType&&(i=e.defaultView),void 0===o)return i?i[t]:e[r];i?i.scrollTo(n?i.pageXOffset:o,n?o:i.pageYOffset):e[r]=o},e,r,arguments.length)}}),T.each(["top","left"],function(e,t){T.cssHooks[t]=Xe(g.pixelPosition,function(e,n){if(n)return n=Ue(e,t),Fe.test(n)?T(e).position()[t]+"px":n})}),T.each({Height:"height",Width:"width"},function(e,t){T.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){T.fn[r]=function(o,i){var a=arguments.length&&(n||"boolean"!=typeof o),s=n||(!0===o||!0===i?"margin":"border");return U(this,function(t,n,o){var i;return x(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===o?T.css(t,n,s):T.style(t,n,o,s)},t,a?o:void 0,a)}})}),T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){T.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),T.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),T.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),T.proxy=function(e,t){var n,r,o;if("string"==typeof t&&(n=e[t],t=e,e=n),b(e))return r=l.call(arguments,2),(o=function(){return e.apply(t||this,r.concat(l.call(arguments)))}).guid=e.guid=e.guid||T.guid++,o},T.holdReady=function(e){e?T.readyWait++:T.ready(!0)},T.isArray=Array.isArray,T.parseJSON=JSON.parse,T.nodeName=D,T.isFunction=b,T.isWindow=x,T.camelCase=J,T.type=C,T.now=Date.now,T.isNumeric=function(e){var t=T.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},void 0===(n=function(){return T}.apply(t,[]))||(e.exports=n);var Jt=o.jQuery,Yt=o.$;return T.noConflict=function(e){return o.$===T&&(o.$=Yt),e&&o.jQuery===T&&(o.jQuery=Jt),T},i||(o.jQuery=o.$=T),T})}).call(this,n(3)(e))},function(e,t){e.exports=prestashop},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.psShowHide=
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */
function(){(0,r.default)(".ps-shown-by-js").show(),(0,r.default)(".ps-hidden-by-js").hide()},t.psGetRequestParameter=o,t.refreshCheckoutPage=function(){if(null!==o("updatedTransaction"))window.location.reload();else{var e=o();e.updatedTransaction=1;var t=[];for(var n in e){var r=e[n];t.push(n+"="+r)}window.location.href=window.location.pathname+"?"+t.join("&")}};var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0));function o(e){var t={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,function(e,n,r){t[n]=void 0!==r?r:""}),void 0!==e?t[e]?t[e]:null:t}},function(e,t,n){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){(function(t){e.exports=t}).call(this,{})},function(e,t,n){e.exports=n(6)},function(e,t,n){"use strict";var r=u(n(0));n(7),n(8),n(9),n(10),n(11),n(12),n(17),n(18),n(19),n(20);var o=u(n(1)),i=u(n(21)),a=n(2),s=u(n(22));function u(e){return e&&e.__esModule?e:{default:e}}for(var l in window.$=r.default,window.jQuery=r.default,i.default.prototype)o.default[l]=i.default.prototype[l];(0,r.default)(document).ready(function(){(0,a.psShowHide)(),(0,s.default)('input[type="email"]')})},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */(n(0));void 0===r.default.migrateMute&&(r.default.migrateMute=!window.prestashop.debug)},function(e,t,n){"use strict";var r,o;function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
 * jQuery Migrate - v3.1.0 - 2019-06-08
 * Copyright OpenJS Foundation and other contributors
 */r=[n(0)],void 0===(o=function(e){return function(e,t){function n(t){return function(e,t){for(var n=/^(\d+)\.(\d+)\.(\d+)/,r=n.exec(e)||[],o=n.exec(t)||[],i=1;i<=3;i++){if(+r[i]>+o[i])return 1;if(+r[i]<+o[i])return-1}return 0}(e.fn.jquery,t)>=0}e.migrateVersion="3.1.0",t.console&&t.console.log&&(e&&n("3.0.0")||t.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),e.migrateWarnings&&t.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),t.console.log("JQMIGRATE: Migrate is installed"+(e.migrateMute?"":" with logging active")+", version "+e.migrateVersion));var r={};function o(n){var o=t.console;r[n]||(r[n]=!0,e.migrateWarnings.push(n),o&&o.warn&&!e.migrateMute&&(o.warn("JQMIGRATE: "+n),e.migrateTrace&&o.trace&&o.trace()))}function a(e,t,n,r){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return o(r),n},set:function(e){o(r),n=e}})}function s(e,t,n,r){e[t]=function(){return o(r),n.apply(this,arguments)}}e.migrateWarnings=[],void 0===e.migrateTrace&&(e.migrateTrace=!0),e.migrateReset=function(){r={},e.migrateWarnings.length=0},"BackCompat"===t.document.compatMode&&o("jQuery is not compatible with Quirks Mode");var u,l=e.fn.init,c=e.isNumeric,d=e.find,f=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,p=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;for(u in e.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(o("jQuery( '#' ) is not a valid selector"),t[0]=[]),l.apply(this,t)},e.fn.init.prototype=e.fn,e.find=function(e){var n=Array.prototype.slice.call(arguments);if("string"==typeof e&&f.test(e))try{t.document.querySelector(e)}catch(r){e=e.replace(p,function(e,t,n,r){return"["+t+n+'"'+r+'"]'});try{t.document.querySelector(e),o("Attribute selector with '#' must be quoted: "+n[0]),n[0]=e}catch(e){o("Attribute selector with '#' was not fixed: "+n[0])}}return d.apply(this,n)},d)Object.prototype.hasOwnProperty.call(d,u)&&(e.find[u]=d[u]);e.fn.size=function(){return o("jQuery.fn.size() is deprecated and removed; use the .length property"),this.length},e.parseJSON=function(){return o("jQuery.parseJSON is deprecated; use JSON.parse"),JSON.parse.apply(null,arguments)},e.isNumeric=function(t){var n=c(t),r=function(t){var n=t&&t.toString();return!e.isArray(t)&&n-parseFloat(n)+1>=0}(t);return n!==r&&o("jQuery.isNumeric() should not be called on constructed objects"),r},n("3.3.0")&&s(e,"isWindow",function(e){return null!=e&&e===e.window},"jQuery.isWindow() is deprecated"),s(e,"holdReady",e.holdReady,"jQuery.holdReady is deprecated"),s(e,"unique",e.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),a(e.expr,"filters",e.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),a(e.expr,":",e.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),n("3.2.0")&&s(e,"nodeName",e.nodeName,"jQuery.nodeName is deprecated");var h=e.ajax;e.ajax=function(){var e=h.apply(this,arguments);return e.promise&&(s(e,"success",e.done,"jQXHR.success is deprecated and removed"),s(e,"error",e.fail,"jQXHR.error is deprecated and removed"),s(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e};var v=e.fn.removeAttr,m=e.fn.toggleClass,y=/\S+/g;e.fn.removeAttr=function(t){var n=this;return e.each(t.match(y),function(t,r){e.expr.match.bool.test(r)&&(o("jQuery.fn.removeAttr no longer sets boolean properties: "+r),n.prop(r,!1))}),v.apply(this,arguments)},e.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?m.apply(this,arguments):(o("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var n=this.getAttribute&&this.getAttribute("class")||"";n&&e.data(this,"__className__",n),this.setAttribute&&this.setAttribute("class",n||!1===t?"":e.data(this,"__className__")||"")}))};var g=!1;e.swap&&e.each(["height","width","reliableMarginRight"],function(t,n){var r=e.cssHooks[n]&&e.cssHooks[n].get;r&&(e.cssHooks[n].get=function(){var e;return g=!0,e=r.apply(this,arguments),g=!1,e})}),e.swap=function(e,t,n,r){var i,a,s={};for(a in g||o("jQuery.swap() is undocumented and deprecated"),t)s[a]=e.style[a],e.style[a]=t[a];for(a in i=n.apply(e,r||[]),t)e.style[a]=s[a];return i};var b=e.data;e.data=function(t,n,r){var a;if(n&&"object"===i(n)&&2===arguments.length){a=e.hasData(t)&&b.call(this,t);var s={};for(var u in n)u!==e.camelCase(u)?(o("jQuery.data() always sets/gets camelCased names: "+u),a[u]=n[u]):s[u]=n[u];return b.call(this,t,s),n}return n&&"string"==typeof n&&n!==e.camelCase(n)&&(a=e.hasData(t)&&b.call(this,t))&&n in a?(o("jQuery.data() always sets/gets camelCased names: "+n),arguments.length>2&&(a[n]=r),a[n]):b.apply(this,arguments)};var x=e.Tween.prototype.run,w=function(e){return e};e.Tween.prototype.run=function(){e.easing[this.easing].length>1&&(o("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),e.easing[this.easing]=w),x.apply(this,arguments)};var k=e.fx.interval||13;t.requestAnimationFrame&&Object.defineProperty(e.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return t.document.hidden||o("jQuery.fx.interval is deprecated"),k},set:function(e){o("jQuery.fx.interval is deprecated"),k=e}});var C=e.fn.load,T=e.event.add,j=e.event.fix;e.event.props=[],e.event.fixHooks={},a(e.event.props,"concat",e.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),e.event.fix=function(t){var n,r=t.type,i=this.fixHooks[r],a=e.event.props;if(a.length)for(o("jQuery.event.props are deprecated and removed: "+a.join());a.length;)e.event.addProp(a.pop());if(i&&!i._migrated_&&(i._migrated_=!0,o("jQuery.event.fixHooks are deprecated and removed: "+r),(a=i.props)&&a.length))for(;a.length;)e.event.addProp(a.pop());return n=j.call(this,t),i&&i.filter?i.filter(n,t):n},e.event.add=function(e,n){return e===t&&"load"===n&&"complete"===t.document.readyState&&o("jQuery(window).on('load'...) called after load event occurred"),T.apply(this,arguments)},e.each(["load","unload","error"],function(t,n){e.fn[n]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===n&&"string"==typeof e[0]?C.apply(this,e):(o("jQuery.fn."+n+"() is deprecated"),e.splice(0,0,n),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),e.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,n){e.fn[n]=function(e,t){return o("jQuery.fn."+n+"() event shorthand is deprecated"),arguments.length>0?this.on(n,null,e,t):this.trigger(n)}}),e(function(){e(t.document).triggerHandler("ready")}),e.event.special.ready={setup:function(){this===t.document&&o("'ready' event is deprecated")}},e.fn.extend({bind:function(e,t,n){return o("jQuery.fn.bind() is deprecated"),this.on(e,null,t,n)},unbind:function(e,t){return o("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,n,r){return o("jQuery.fn.delegate() is deprecated"),this.on(t,e,n,r)},undelegate:function(e,t,n){return o("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return o("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});var S=e.fn.offset;e.fn.offset=function(){var n,r=this[0],i={top:0,left:0};return r&&r.nodeType?(n=(r.ownerDocument||t.document).documentElement,e.contains(n,r)?S.apply(this,arguments):(o("jQuery.fn.offset() requires an element connected to a document"),i)):(o("jQuery.fn.offset() requires a valid DOM element"),i)};var _=e.param;e.param=function(t,n){var r=e.ajaxSettings&&e.ajaxSettings.traditional;return void 0===n&&r&&(o("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),n=r),_.call(this,t,n)};var A=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return o("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),A.apply(this,arguments)};var E=e.Deferred,N=[["resolve","done",e.Callbacks("once memory"),e.Callbacks("once memory"),"resolved"],["reject","fail",e.Callbacks("once memory"),e.Callbacks("once memory"),"rejected"],["notify","progress",e.Callbacks("memory"),e.Callbacks("memory")]];return e.Deferred=function(t){var n=E(),r=n.promise();return n.pipe=r.pipe=function(){var t=arguments;return o("deferred.pipe() is deprecated"),e.Deferred(function(o){e.each(N,function(i,a){var s=e.isFunction(t[i])&&t[i];n[a[1]](function(){var t=s&&s.apply(this,arguments);t&&e.isFunction(t.promise)?t.promise().done(o.resolve).fail(o.reject).progress(o.notify):o[a[0]+"With"](this===r?o.promise():this,s?[t]:arguments)})}),t=null}).promise()},t&&t.call(n,n),n},e.Deferred.exceptionHook=E.exceptionHook,e}(e,window)}.apply(t,r))||(e.exports=o)},function(e,t,n){"use strict";var r,o;r=[n(0)],void 0===(o=function(e){return function(e){function t(e){void 0===e&&(e=window.navigator.userAgent),e=e.toLowerCase();var t=/(edge)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(chrome)[ \/]([\w.]+)/.exec(e)||/(iemobile)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[],n=/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[],r={},o={browser:t[5]||t[3]||t[1]||"",version:t[2]||t[4]||"0",versionNumber:t[4]||t[2]||"0",platform:n[0]||""};if(o.browser&&(r[o.browser]=!0,r.version=o.version,r.versionNumber=parseInt(o.versionNumber,10)),o.platform&&(r[o.platform]=!0),(r.android||r.bb||r.blackberry||r.ipad||r.iphone||r.ipod||r.kindle||r.playbook||r.silk||r["windows phone"])&&(r.mobile=!0),(r.cros||r.mac||r.linux||r.win)&&(r.desktop=!0),(r.chrome||r.opr||r.safari)&&(r.webkit=!0),(r.rv||r.iemobile)&&(o.browser="msie",r.msie=!0),r.edge&&(delete r.edge,o.browser="msedge",r.msedge=!0),r.safari&&r.blackberry&&(o.browser="blackberry",r.blackberry=!0),r.safari&&r.playbook&&(o.browser="playbook",r.playbook=!0),r.bb){var i="blackberry";o.browser=i,r[i]=!0}return r.opr&&(o.browser="opera",r.opera=!0),r.safari&&r.android&&(o.browser="android",r.android=!0),r.safari&&r.kindle&&(o.browser="kindle",r.kindle=!0),r.safari&&r.silk&&(o.browser="silk",r.silk=!0),r.name=o.browser,r.platform=o.platform,r}return window.jQBrowser=t(window.navigator.userAgent),window.jQBrowser.uaMatch=t,e&&(e.browser=window.jQBrowser),window.jQBrowser}(e)}.apply(t,r))||(e.exports=o)},function(e,t,n){"use strict";var r,o,i;o=[n(0)],void 0===(i="function"==typeof(r=function(e){var t=e.fn.init;e.fn.init=function(e){var n=Array.prototype.slice.call(arguments);"string"==typeof e&&"#"===e&&(console.warn("jQuery('#') is not a valid selector"),n[0]=[]);var r=t.apply(this,arguments);return r.selector="string"==typeof e?e:"",r},e.fn.init.prototype=e.fn,void 0!==e.fn.live&&e.isFunction(e.fn.live)||e.fn.extend({live:function(t,n,r){return this.selector&&e(document).on(t,this.selector,n,r),console.warn("jQuery.live() has been removed since jquery v1.9, please use jQuery.on() instead."),this}})})?r.apply(t,o):r)||(e.exports=i)},function(e,t,n){"use strict";var r=a(n(0)),o=a(n(1)),i=n(2);function a(e){return e&&e.__esModule?e:{default:e}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */(0,r.default)(document).ready(function(){o.default.on("updateCart",function(e){o.default.cart=e.reason.cart;var t=(0,r.default)(".js-cart").data("refresh-url");if(t){var n={};e&&e.reason&&(n={id_product_attribute:e.reason.idProductAttribute,id_product:e.reason.idProduct}),r.default.post(t,n).then(function(e){(0,r.default)(".cart-detailed-totals").replaceWith(e.cart_detailed_totals),(0,r.default)(".cart-summary-items-subtotal").replaceWith(e.cart_summary_items_subtotal),(0,r.default)(".cart-summary-subtotals-container").replaceWith(e.cart_summary_subtotals_container),(0,r.default)(".cart-summary-totals").replaceWith(e.cart_summary_totals),(0,r.default)(".cart-detailed-actions").replaceWith(e.cart_detailed_actions),(0,r.default)(".cart-voucher").replaceWith(e.cart_voucher),(0,r.default)(".cart-overview").replaceWith(e.cart_detailed),(0,r.default)("#product_customization_id").val(0),(0,r.default)(".js-cart-line-product-quantity").each(function(e,t){var n=(0,r.default)(t);n.attr("value",n.val())}),(0,r.default)(".js-cart-payment-step-refresh").length&&(0,i.refreshCheckoutPage)(),o.default.emit("updatedCart",{eventType:"updateCart",resp:e})}).fail(function(e){o.default.emit("handleError",{eventType:"updateCart",resp:e})})}});var e=(0,r.default)("body");e.on("click",'[data-button-action="add-to-cart"]',function(e){if(e.preventDefault(),(0,r.default)("#quantity_wanted").val()>(0,r.default)("[data-stock]").data("stock")&&0===(0,r.default)("[data-allow-oosp]").data("allow-oosp").length)(0,r.default)('[data-button-action="add-to-cart"]').attr("disabled","disabled");else{var t=(0,r.default)(e.target).closest("form"),n=t.serialize()+"&add=1&action=update",i=t.attr("action"),a=function(e){e.parents(".product-add-to-cart").first().find(".product-minimal-quantity").addClass("error"),e.parent().find("label").addClass("error")},s=t.find("input[min]");if(!function(e){var t=!0;return e.each(function(e,n){var o=(0,r.default)(n),i=parseInt(o.attr("min"),10);i&&o.val()<i&&(a(o),t=!1)}),t}(s))return void a(s);r.default.post(i,n,null,"json").then(function(e){o.default.emit("updateCart",{reason:{idProduct:e.id_product,idProductAttribute:e.id_product_attribute,idCustomization:e.id_customization,linkAction:"add-to-cart",cart:e.cart},resp:e})}).fail(function(e){o.default.emit("handleError",{eventType:"addProductToCart",resp:e})})}}),e.on("submit",'[data-link-action="add-voucher"]',function(e){e.preventDefault();var t=(0,r.default)(e.currentTarget),n=t.attr("action");0===t.find("[name=action]").length&&t.append((0,r.default)("<input>",{type:"hidden",name:"ajax",value:1})),0===t.find("[name=action]").length&&t.append((0,r.default)("<input>",{type:"hidden",name:"action",value:"update"})),r.default.post(n,t.serialize(),null,"json").then(function(t){t.hasError?(0,r.default)(".js-error").show().find(".js-error-text").text(t.errors[0]):o.default.emit("updateCart",{reason:e.target.dataset,resp:t})}).fail(function(e){o.default.emit("handleError",{eventType:"updateCart",resp:e})})})})},function(e,t,n){"use strict";var r=l(n(0)),o=l(n(1)),i=l(n(13)),a=l(n(14)),s=l(n(15)),u=l(n(16));function l(e){return e&&e.__esModule?e:{default:e}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */function c(){(0,i.default)(),(0,a.default)(),(0,s.default)(),function(){var e=new u.default;e.getClickableSteps().on("click",function(t){var n=u.default.getClickedStep(t);n.isUnreachable()||(e.makeCurrent(n),n.hasContinueButton()?n.disableAllAfter():n.enableAllBefore()),o.default.emit("changedCheckoutStep",{event:t})})}(),(0,r.default)(".checkout-step form").submit(function(e){!0===(0,r.default)(this).data("disabled")&&e.preventDefault(),(0,r.default)(this).data("disabled",!0),(0,r.default)('button[type="submit"]',this).addClass("disabled")})}(0,r.default)(document).ready(function(){1===(0,r.default)("#checkout").length&&c()})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){(0,r.default)(".js-edit-addresses").on("click",function(e){e.stopPropagation(),(0,r.default)("#checkout-addresses-step").trigger("click"),o.default.emit("editAddress")}),(0,r.default)("#delivery-addresses input[type=radio], #invoice-addresses input[type=radio]").on("click",function(){(0,r.default)(".address-item").removeClass("selected"),(0,r.default)(".address-item:has(input[type=radio]:checked)").addClass("selected");var e=(0,r.default)(".js-address-error").prop("id").split("-").pop(),t=(0,r.default)("#not-valid-addresses").val(),n=this.name.split("_").pop(),o=(0,r.default)(".js-address-error[name=alert-"+n+"]");l(!1,e,n),""!==t&&null===s&&t.split(",").indexOf(this.value)>=0?(o.show(),l(!0,this.value,n),(0,r.default)(".js-address-error").prop("id","id-failure-address-"+this.value)):o.hide();var i=(0,r.default)(".js-address-error:visible");c(i.length<=0)})};var r=a(n(0)),o=a(n(1)),i=n(2);function a(e){return e&&e.__esModule?e:{default:e}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */var s=(0,i.psGetRequestParameter)("editAddress"),u=(0,i.psGetRequestParameter)("use_same_address");(0,r.default)(window).on("load",function(){var e=(0,r.default)(".js-address-error:visible");if(0===parseInt(u)&&(0,r.default)("#invoice-addresses input[type=radio]:checked").trigger("click"),(null!==s||(0,r.default)(".js-address-form:visible").length>1)&&e.hide(),e.length>0){var t=(0,r.default)(".js-address-error").prop("id").split("-").pop();e.each(function(){l(!0,t,(0,r.default)(this).attr("name").split("-").pop())})}e=(0,r.default)(".js-address-error:visible"),c(e.length<=0)});var l=function(e,t,n){var o="#7a7a7a";e&&((0,r.default)("#"+n+"-addresses a.edit-address").prop("style","color: #7a7a7a !important"),o="#2fb5d2"),(0,r.default)("#id-address-"+n+"-address-"+t+" a.edit-address").prop("style","color: "+o+" !important")},c=function(e){(0,r.default)("button[name=confirm-addresses]").prop("disabled",!e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */
function(){var e=(0,r.default)("body");e.on("change","#js-delivery input",function(e){var t=(0,r.default)("#js-delivery"),n=t.serialize(),a=(0,r.default)(e.currentTarget).parents(".delivery-option");r.default.post(t.data("url-update"),n).then(function(e){(0,r.default)("#js-checkout-summary").replaceWith(e.preview),(0,r.default)(".js-cart-payment-step-refresh").length&&(0,i.refreshCheckoutPage)(),o.default.emit("updatedDeliveryForm",{dataForm:t.serializeArray(),deliveryOption:a,resp:e})}).fail(function(e){o.default.trigger("handleError",{eventType:"updateDeliveryOptions",resp:e})})}),e.on("click",".js-edit-delivery",function(e){e.stopPropagation(),(0,r.default)("#checkout-delivery-step").trigger("click"),o.default.emit("editDelivery")})};var r=a(n(0)),o=a(n(1)),i=n(2);function a(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=new i;return e.init(),e};var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0));function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.confirmationSelector="#payment-confirmation",this.paymentSelector="#payment-section",this.conditionsSelector="#conditions-to-approve",this.conditionAlertSelector=".js-alert-payment-conditions",this.additionalInformatonSelector=".js-additional-information",this.optionsForm=".js-payment-option-form"}return function(e,t,n){t&&o(e.prototype,t),n&&o(e,n)}(e,[{key:"init",value:function(){(0,r.default)(this.paymentSelector+' input[type="checkbox"][disabled]').attr("disabled",!1);var e=(0,r.default)("body");e.on("change",this.conditionsSelector+' input[type="checkbox"]',r.default.proxy(this.toggleOrderButton,this)),e.on("change",'input[name="payment-option"]',r.default.proxy(this.toggleOrderButton,this)),e.on("click",this.confirmationSelector+" button",r.default.proxy(this.confirm,this)),this.collapseOptions()}},{key:"collapseOptions",value:function(){(0,r.default)(this.additionalInformatonSelector+", "+this.optionsForm).hide()}},{key:"getSelectedOption",value:function(){return(0,r.default)('input[name="payment-option"]:checked').attr("id")}},{key:"hideConfirmation",value:function(){(0,r.default)(this.confirmationSelector).hide()}},{key:"showConfirmation",value:function(){(0,r.default)(this.confirmationSelector).show()}},{key:"toggleOrderButton",value:function(){var e=!0;(0,r.default)(this.conditionsSelector+' input[type="checkbox"]').each(function(t,n){n.checked||(e=!1)}),this.collapseOptions();var t=this.getSelectedOption();if(t||(e=!1),(0,r.default)("#"+t+"-additional-information").show(),(0,r.default)("#pay-with-"+t+"-form").show(),(0,r.default)(".js-payment-binary").hide(),(0,r.default)("#"+t).hasClass("binary")){var n=this.getPaymentOptionSelector(t);this.hideConfirmation(),(0,r.default)(n).show(),e?(0,r.default)(n).removeClass("disabled"):(0,r.default)(n).addClass("disabled")}else this.showConfirmation(),(0,r.default)(this.confirmationSelector+" button").attr("disabled",!e),e?(0,r.default)(this.conditionAlertSelector).hide():(0,r.default)(this.conditionAlertSelector).show()}},{key:"getPaymentOptionSelector",value:function(e){var t=(0,r.default)("#".concat(e)).data("module-name");return".js-payment-".concat(t)}},{key:"confirm",value:function(){var e=this.getSelectedOption();e&&((0,r.default)(this.confirmationSelector+" button").prop("disabled",!0),(0,r.default)("#pay-with-"+e+"-form form").submit())}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(0));function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}var s=".".concat("js-current-step"),u=function(){function e(){o(this,e),this.$steps=(0,r.default)(".checkout-step"),this.$steps.off("click"),this.$clickableSteps=(0,r.default)(s).prevAll().andSelf(),this.$clickableSteps.addClass("-clickable")}return a(e,[{key:"getClickableSteps",value:function(){return this.$clickableSteps}},{key:"makeCurrent",value:function(e){this.$steps.removeClass("-current"),this.$steps.removeClass("js-current-step"),e.makeCurrent()}}],[{key:"getClickedStep",value:function(e){return new l((0,r.default)(e.target).closest(".checkout-step"))}}]),e}();t.default=u;var l=function(){function e(t){o(this,e),this.$step=t}return a(e,[{key:"isUnreachable",value:function(){return this.$step.hasClass("-unreachable")}},{key:"makeCurrent",value:function(){this.$step.addClass("-current"),this.$step.addClass("js-current-step")}},{key:"hasContinueButton",value:function(){return(0,r.default)("button.continue",this.$step).length>0}},{key:"disableAllAfter",value:function(){var e=this.$step.nextAll();e.addClass("-unreachable").removeClass("-complete"),(0,r.default)(".step-title",e).addClass("not-allowed")}},{key:"enableAllBefore",value:function(){var e=this.$step.nextAll(".checkout-step.-clickable");e.removeClass("-unreachable").addClass("-complete"),(0,r.default)(".step-title",e).removeClass("not-allowed")}}]),e}()},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */(n(0));var o=!1;function i(e){o=!1,prestashop.emit("updateProductList",e),window.history.pushState(e,document.title,e.current_url)}function a(){o=!1}(0,r.default)(document).ready(function(){prestashop.on("updateFacets",function(e){!function(e){if(o);else{var t=[e,e.indexOf("?")>=0?"&":"?","from-xhr"].join("");r.default.get(t,null,null,"json").then(i).fail(a)}}(e)})})},function(e,t,n){"use strict";var r=i(n(0)),o=i(n(1));function i(e){return e&&e.__esModule?e:{default:e}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */(0,r.default)(document).ready(function(){(0,r.default)("body").on("click",".quick-view",function(e){o.default.emit("clickQuickView",{dataset:(0,r.default)(e.target).closest(".js-product-miniature").data()}),e.preventDefault()})})},function(e,t,n){"use strict";var r=a(n(0)),o=a(n(1)),i=n(2);function a(e){return e&&e.__esModule?e:{default:e}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */var s=null,u=null;function l(e){void 0===e&&(e="An error occurred while processing your request"),function(e,t){var n=(0,r.default)('<div class="alert alert-danger ajax-error" role="alert">'.concat(t,"</div>"));e.replaceWith(n)}((0,r.default)(".quickview #product-availability, .page-product:not(.modal-open) .row #product-availability, .page-product:not(.modal-open) .product-container #product-availability"),e)}function c(e,t,n){var a=(0,r.default)(".product-actions"),c=a.find("#quantity_wanted"),f=a.find("form:first").serialize(),p=(0,i.psGetRequestParameter)("preview");if(p=null!==p?"&preview="+p:"",null!==n){if(!e||"keyup"!==e.type||c.val()!==c.data("old-value")){c.data("old-value",c.val()),u&&clearTimeout(u);var h=30;"updatedProductQuantity"===t&&(h=750),u=setTimeout(function(){""!==f&&(s=r.default.ajax({url:n+(-1===n.indexOf("?")?"?":"&")+f+p,method:"POST",data:{quickview:(0,r.default)(".modal.quickview.in").length,ajax:1,action:"refresh",quantity_wanted:"updatedProductCombination"===t?c.attr("min"):c.val()},dataType:"json",beforeSend:function(){null!==s&&s.abort()},error:function(e,t,n){"abort"!==t&&0===(0,r.default)("section#main > .ajax-error").length&&l()},success:function(e,n,i){var a=(0,r.default)("<div>").append(e.product_cover_thumbnails);(0,r.default)(".quickview .images-container, .page-product:not(.modal-open) .row .images-container, .page-product:not(.modal-open) .product-container .images-container").html()!==a.find(".quickview .images-container, .page-product:not(.modal-open) .row .images-container, .page-product:not(.modal-open) .product-container .images-container").html()&&(0,r.default)(".quickview .images-container, .page-product:not(.modal-open) .row .images-container, .page-product:not(.modal-open) .product-container .images-container").replaceWith(e.product_cover_thumbnails),(0,r.default)(".quickview .product-prices, .page-product:not(.modal-open) .row .product-prices, .page-product:not(.modal-open) .product-container .product-prices").first().replaceWith(e.product_prices),(0,r.default)(".quickview .product-customization, .page-product:not(.modal-open) .row .product-customization, .page-product:not(.modal-open) .product-container .product-customization").first().replaceWith(e.product_customization),(0,r.default)(".quickview .product-variants, .page-product:not(.modal-open) .row .product-variants, .page-product:not(.modal-open) .product-container .product-variants").first().replaceWith(e.product_variants),(0,r.default)(".quickview .product-discounts, .page-product:not(.modal-open) .row .product-discounts, .page-product:not(.modal-open) .product-container .product-discounts").first().replaceWith(e.product_discounts),(0,r.default)(".quickview .product-additional-info, .page-product:not(.modal-open) .row .product-additional-info, .page-product:not(.modal-open) .product-container .product-additional-info").first().replaceWith(e.product_additional_info),(0,r.default)(".quickview #product-details, #product-details").replaceWith(e.product_details),(0,r.default)(".quickview .product-flags, .page-product:not(.modal-open) .row .product-flags, .page-product:not(.modal-open) .product-container .product-flags").first().replaceWith(e.product_flags),function(e){var t=null;(0,r.default)(e.product_add_to_cart).each(function(e,n){if((0,r.default)(n).hasClass("product-add-to-cart"))return t=(0,r.default)(n),!1}),null===t&&l();var n=(0,r.default)(".product-add-to-cart");d({$addToCartSnippet:t,$targetParent:n,targetSelector:".add"}),d({$addToCartSnippet:t,$targetParent:n,targetSelector:"#product-availability"}),d({$addToCartSnippet:t,$targetParent:n,targetSelector:".product-minimal-quantity"})}(e);var s=parseInt(e.product_minimal_quantity,10);isNaN(s)||"updatedProductQuantity"===t||(c.attr("min",s),c.val(s)),o.default.emit("updatedProduct",e)},complete:function(e,t){s=null,u=null}}))}.bind(s,u),h)}}else l()}function d(e){var t=(0,r.default)(e.$targetParent.find(e.targetSelector));if(!(t.length<=0)){var n=e.$addToCartSnippet.find(e.targetSelector);n.length>0?t.replaceWith(n[0].outerHTML):t.html("")}}(0,r.default)(document).ready(function(){(0,r.default)("body").on("change touchspin.on.startspin",".product-variants *[name]",function(e){o.default.emit("updateProduct",{eventType:"updatedProductCombination",event:e,resp:{},reason:{productUrl:o.default.urls.pages.product||""}})}),(0,r.default)("body").on("click",".product-refresh",function(e,t){e.preventDefault();var n="updatedProductCombination";void 0!==t&&t.eventType&&(n=t.eventType),o.default.emit("updateProduct",{eventType:n,event:e,resp:{},reason:{productUrl:o.default.urls.pages.product||""}})}),o.default.on("updateProduct",function(e){var t=e.eventType,n=e.event;(function(){var e=r.default.Deferred(),t=(0,r.default)(".product-actions"),n=(0,r.default)("#quantity_wanted");if(null!==o.default&&null!==o.default.urls&&null!==o.default.urls.pages&&""!==o.default.urls.pages.product&&null!==o.default.urls.pages.product)return e.resolve(o.default.urls.pages.product),e.promise();var i={};return(0,r.default)(t.find("form:first").serializeArray()).each(function(e,t){i[t.name]=t.value}),r.default.ajax({url:t.find("form:first").attr("action"),method:"POST",data:Object.assign({ajax:1,action:"productrefresh",quantity_wanted:n.val()},i),dataType:"json",success:function(t){var n=t.productUrl;o.default.page.canonical=n,e.resolve(n)},error:function(t,n,r){e.reject({jqXHR:t,textStatus:n,errorThrown:r})}}),e.promise()})().done(function(e){return c(n,t,e)}).fail(function(){0===(0,r.default)("section#main > .ajax-error").length&&l()})}),o.default.on("updatedProduct",function(e){if(e.product_url&&e.id_product_attribute&&!(0,r.default)(".modal.quickview").length){var t=document.title;e.product_title&&(t=e.product_title,(0,r.default)(document).attr("title",t)),window.history.replaceState({id_product_attribute:e.id_product_attribute},t,e.product_url)}}),o.default.on("updateCart",function(e){e&&e.reason&&"add-to-cart"===e.reason.linkAction&&(0,r.default)("#quantity_wanted").val(1)}),o.default.on("showErrorNextToAddtoCartButton",function(e){e&&e.errorMessage&&l(e.errorMessage)})})},function(e,t,n){"use strict";var r=i(n(0)),o=i(n(1));function i(e){return e&&e.__esModule?e:{default:e}}(0,r.default)(document).ready(function(){!function(e){(0,r.default)("body").on("change",e.country,function(){var t={id_country:(0,r.default)(e.country).val(),id_address:(0,r.default)(e.address+" form").data("id-address")},n=(0,r.default)(e.address+" form").data("refresh-url"),i=e.address+" input";r.default.post(n,t).then(function(t){var n=[];(0,r.default)(i).each(function(){n[(0,r.default)(this).prop("name")]=(0,r.default)(this).val()}),(0,r.default)(e.address).replaceWith(t.address_form),(0,r.default)(i).each(function(){(0,r.default)(this).val(n[(0,r.default)(this).prop("name")])}),o.default.emit("updatedAddressForm",{target:(0,r.default)(e.address),resp:t})}).fail(function(e){o.default.emit("handleError",{eventType:"updateAddressForm",resp:e})})})}({country:".js-country",address:".js-address-form"})})},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function a(e){return"object"===r(e)&&null!==e}function s(e){return void 0===e}e.exports=o,o.EventEmitter=o,o.prototype._events=void 0,o.prototype._maxListeners=void 0,o.defaultMaxListeners=10,o.prototype.setMaxListeners=function(e){if(!function(e){return"number"==typeof e}(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},o.prototype.emit=function(e){var t,n,r,o,u,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||a(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var c=new Error('Uncaught, unspecified "error" event. ('+t+")");throw c.context=t,c}if(s(n=this._events[e]))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),n.apply(this,o)}else if(a(n))for(o=Array.prototype.slice.call(arguments,1),r=(l=n.slice()).length,u=0;u<r;u++)l[u].apply(this,o);return!0},o.prototype.addListener=function(e,t){var n;if(!i(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?a(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,a(this._events[e])&&!this._events[e].warned&&(n=s(this._maxListeners)?o.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},o.prototype.on=o.prototype.addListener,o.prototype.once=function(e,t){if(!i(t))throw TypeError("listener must be a function");var n=!1;function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}return r.listener=t,this.on(e,r),this},o.prototype.removeListener=function(e,t){var n,r,o,s;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(o=(n=this._events[e]).length,r=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(a(n)){for(s=o;s-->0;)if(n[s]===t||n[s].listener&&n[s].listener===t){r=s;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},o.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(i(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},o.prototype.listeners=function(e){return this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},o.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(i(t))return 1;if(t)return t.length}return 0},o.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(23));function i(e){return e&&e.__esModule?e:{default:e}}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */var a=function(e){var t=(0,r.default)(e);r.default.each(t,function(e,t){if(!t.checkValidity()){var n=t.value.split("@");o.default.toASCII(n[0])===n[0]&&(t.value=o.default.toASCII(t.value))}})};t.default=a},function(e,t,n){"use strict";(function(e,r){var o;function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*! https://mths.be/punycode v1.4.1 by @mathias */!function(a){var s="object"==i(t)&&t&&!t.nodeType&&t,u="object"==i(e)&&e&&!e.nodeType&&e,l="object"==(void 0===r?"undefined":i(r))&&r;l.global!==l&&l.window!==l&&l.self!==l||(a=l);var c,d,f=2147483647,p=36,h=1,v=26,m=38,y=700,g=72,b=128,x="-",w=/^xn--/,k=/[^\x20-\x7E]/,C=/[\x2E\u3002\uFF0E\uFF61]/g,T={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},j=p-h,S=Math.floor,_=String.fromCharCode;function A(e){throw new RangeError(T[e])}function E(e,t){for(var n=e.length,r=[];n--;)r[n]=t(e[n]);return r}function N(e,t){var n=e.split("@"),r="";return n.length>1&&(r=n[0]+"@",e=n[1]),r+E((e=e.replace(C,".")).split("."),t).join(".")}function D(e){for(var t,n,r=[],o=0,i=e.length;o<i;)(t=e.charCodeAt(o++))>=55296&&t<=56319&&o<i?56320==(64512&(n=e.charCodeAt(o++)))?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),o--):r.push(t);return r}function q(e){return E(e,function(e){var t="";return e>65535&&(t+=_((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=_(e)}).join("")}function L(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:p}function O(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function P(e,t,n){var r=0;for(e=n?S(e/y):e>>1,e+=S(e/t);e>j*v>>1;r+=p)e=S(e/j);return S(r+(j+1)*e/(e+m))}function M(e){var t,n,r,o,i,a,s,u,l,c,d=[],m=e.length,y=0,w=b,k=g;for((n=e.lastIndexOf(x))<0&&(n=0),r=0;r<n;++r)e.charCodeAt(r)>=128&&A("not-basic"),d.push(e.charCodeAt(r));for(o=n>0?n+1:0;o<m;){for(i=y,a=1,s=p;o>=m&&A("invalid-input"),((u=L(e.charCodeAt(o++)))>=p||u>S((f-y)/a))&&A("overflow"),y+=u*a,!(u<(l=s<=k?h:s>=k+v?v:s-k));s+=p)a>S(f/(c=p-l))&&A("overflow"),a*=c;k=P(y-i,t=d.length+1,0==i),S(y/t)>f-w&&A("overflow"),w+=S(y/t),y%=t,d.splice(y++,0,w)}return q(d)}function H(e){var t,n,r,o,i,a,s,u,l,c,d,m,y,w,k,C=[];for(m=(e=D(e)).length,t=b,n=0,i=g,a=0;a<m;++a)(d=e[a])<128&&C.push(_(d));for(r=o=C.length,o&&C.push(x);r<m;){for(s=f,a=0;a<m;++a)(d=e[a])>=t&&d<s&&(s=d);for(s-t>S((f-n)/(y=r+1))&&A("overflow"),n+=(s-t)*y,t=s,a=0;a<m;++a)if((d=e[a])<t&&++n>f&&A("overflow"),d==t){for(u=n,l=p;!(u<(c=l<=i?h:l>=i+v?v:l-i));l+=p)k=u-c,w=p-c,C.push(_(O(c+k%w,0))),u=S(k/w);C.push(_(O(u,0))),i=P(n,y,r==o),n=0,++r}++n,++t}return C.join("")}if(c={version:"1.4.1",ucs2:{decode:D,encode:q},decode:M,encode:H,toASCII:function(e){return N(e,function(e){return k.test(e)?"xn--"+H(e):e})},toUnicode:function(e){return N(e,function(e){return w.test(e)?M(e.slice(4).toLowerCase()):e})}},"object"==i(n(4))&&n(4))void 0===(o=function(){return c}.call(t,n,t,e))||(e.exports=o);else if(s&&u)if(e.exports==s)u.exports=c;else for(d in c)c.hasOwnProperty(d)&&(s[d]=c[d]);else a.punycode=c}(void 0)}).call(this,n(3)(e),n(24))},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o;o=function(){return this}();try{o=o||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":r(window))&&(o=window)}e.exports=o}]);/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright since 2007 PrestaShop SA and Contributors
	 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.md.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to https://devdocs.prestashop.com/ for more information.
	 *
	 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
	 * @copyright Since 2007 PrestaShop SA and Contributors
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 */
'use strict';function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj}}
__webpack_require__(2);__webpack_require__(4);__webpack_require__(5);__webpack_require__(6);__webpack_require__(7);__webpack_require__(8);__webpack_require__(11);__webpack_require__(12);__webpack_require__(13);__webpack_require__(47);__webpack_require__(49);__webpack_require__(50);__webpack_require__(51);__webpack_require__(54);__webpack_require__(56);var _prestashop=__webpack_require__(48);var _prestashop2=_interopRequireDefault(_prestashop);var _events=__webpack_require__(57);var _events2=_interopRequireDefault(_events);var _componentsDropDown=__webpack_require__(58);var _componentsDropDown2=_interopRequireDefault(_componentsDropDown);var _componentsForm=__webpack_require__(59);var _componentsForm2=_interopRequireDefault(_componentsForm);var _componentsProductMiniature=__webpack_require__(53);var _componentsProductMiniature2=_interopRequireDefault(_componentsProductMiniature);var _componentsProductSelect=__webpack_require__(55);var _componentsProductSelect2=_interopRequireDefault(_componentsProductSelect);var _componentsTopMenu=__webpack_require__(60);var _componentsTopMenu2=_interopRequireDefault(_componentsTopMenu);__webpack_require__(61);__webpack_require__(62);__webpack_require__(63);var _jquery=__webpack_require__(10);var _jquery2=_interopRequireDefault(_jquery);for(var i in _events2['default'].prototype){_prestashop2['default'][i]=_events2['default'].prototype[i]}(0,_jquery2['default'])(document).ready(function(){var dropDownEl=(0,_jquery2['default'])('.js-dropdown');var form=new _componentsForm2['default']();var topMenuEl=(0,_jquery2['default'])('.js-top-menu ul[data-depth="0"]');var dropDown=new _componentsDropDown2['default'](dropDownEl);var topMenu=new _componentsTopMenu2['default'](topMenuEl);var productMinitature=new _componentsProductMiniature2['default']();var productSelect=new _componentsProductSelect2['default']();if(!_prestashop2['default'].responsive.mobile){(0,_jquery2['default'])('#product-zoom').zoom()}
dropDown.init();form.init();topMenu.init();productMinitature.init();productSelect.init()});
/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Tether"] = __webpack_require__(3);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.4.7 */
	
	(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = factory();
	  } else {
	    root.Tether = factory();
	  }
	}(this, function() {
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var TetherBase = undefined;
	if (typeof TetherBase === 'undefined') {
	  TetherBase = { modules: [] };
	}
	
	var zeroElement = null;
	
	// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
	// if the element lies within a nested document (<frame> or <iframe>-like).
	function getActualBoundingClientRect(node) {
	  var boundingRect = node.getBoundingClientRect();
	
	  // The original object returned by getBoundingClientRect is immutable, so we clone it
	  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
	  var rect = {};
	  for (var k in boundingRect) {
	    rect[k] = boundingRect[k];
	  }
	
	  try {
	    if (node.ownerDocument !== document) {
	      var _frameElement = node.ownerDocument.defaultView.frameElement;
	      if (_frameElement) {
	        var frameRect = getActualBoundingClientRect(_frameElement);
	        rect.top += frameRect.top;
	        rect.bottom += frameRect.top;
	        rect.left += frameRect.left;
	        rect.right += frameRect.left;
	      }
	    }
	  } catch (err) {
	    // Ignore "Access is denied" in IE11/Edge
	  }
	
	  return rect;
	}
	
	function getScrollParents(el) {
	  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	  var computedStyle = getComputedStyle(el) || {};
	  var position = computedStyle.position;
	  var parents = [];
	
	  if (position === 'fixed') {
	    return [el];
	  }
	
	  var parent = el;
	  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
	    var style = undefined;
	    try {
	      style = getComputedStyle(parent);
	    } catch (err) {}
	
	    if (typeof style === 'undefined' || style === null) {
	      parents.push(parent);
	      return parents;
	    }
	
	    var _style = style;
	    var overflow = _style.overflow;
	    var overflowX = _style.overflowX;
	    var overflowY = _style.overflowY;
	
	    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
	      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
	        parents.push(parent);
	      }
	    }
	  }
	
	  parents.push(el.ownerDocument.body);
	
	  // If the node is within a frame, account for the parent window scroll
	  if (el.ownerDocument !== document) {
	    parents.push(el.ownerDocument.defaultView);
	  }
	
	  return parents;
	}
	
	var uniqueId = (function () {
	  var id = 0;
	  return function () {
	    return ++id;
	  };
	})();
	
	var zeroPosCache = {};
	var getOrigin = function getOrigin() {
	  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
	  // jitter as the user scrolls that messes with our ability to detect if two positions
	  // are equivilant or not.  We place an element at the top left of the page that will
	  // get the same jitter, so we can cancel the two out.
	  var node = zeroElement;
	  if (!node || !document.body.contains(node)) {
	    node = document.createElement('div');
	    node.setAttribute('data-tether-id', uniqueId());
	    extend(node.style, {
	      top: 0,
	      left: 0,
	      position: 'absolute'
	    });
	
	    document.body.appendChild(node);
	
	    zeroElement = node;
	  }
	
	  var id = node.getAttribute('data-tether-id');
	  if (typeof zeroPosCache[id] === 'undefined') {
	    zeroPosCache[id] = getActualBoundingClientRect(node);
	
	    // Clear the cache when this position call is done
	    defer(function () {
	      delete zeroPosCache[id];
	    });
	  }
	
	  return zeroPosCache[id];
	};
	
	function removeUtilElements() {
	  if (zeroElement) {
	    document.body.removeChild(zeroElement);
	  }
	  zeroElement = null;
	};
	
	function getBounds(el) {
	  var doc = undefined;
	  if (el === document) {
	    doc = document;
	    el = document.documentElement;
	  } else {
	    doc = el.ownerDocument;
	  }
	
	  var docEl = doc.documentElement;
	
	  var box = getActualBoundingClientRect(el);
	
	  var origin = getOrigin();
	
	  box.top -= origin.top;
	  box.left -= origin.left;
	
	  if (typeof box.width === 'undefined') {
	    box.width = document.body.scrollWidth - box.left - box.right;
	  }
	  if (typeof box.height === 'undefined') {
	    box.height = document.body.scrollHeight - box.top - box.bottom;
	  }
	
	  box.top = box.top - docEl.clientTop;
	  box.left = box.left - docEl.clientLeft;
	  box.right = doc.body.clientWidth - box.width - box.left;
	  box.bottom = doc.body.clientHeight - box.height - box.top;
	
	  return box;
	}
	
	function getOffsetParent(el) {
	  return el.offsetParent || document.documentElement;
	}
	
	var _scrollBarSize = null;
	function getScrollBarSize() {
	  if (_scrollBarSize) {
	    return _scrollBarSize;
	  }
	  var inner = document.createElement('div');
	  inner.style.width = '100%';
	  inner.style.height = '200px';
	
	  var outer = document.createElement('div');
	  extend(outer.style, {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    pointerEvents: 'none',
	    visibility: 'hidden',
	    width: '200px',
	    height: '150px',
	    overflow: 'hidden'
	  });
	
	  outer.appendChild(inner);
	
	  document.body.appendChild(outer);
	
	  var widthContained = inner.offsetWidth;
	  outer.style.overflow = 'scroll';
	  var widthScroll = inner.offsetWidth;
	
	  if (widthContained === widthScroll) {
	    widthScroll = outer.clientWidth;
	  }
	
	  document.body.removeChild(outer);
	
	  var width = widthContained - widthScroll;
	
	  _scrollBarSize = { width: width, height: width };
	  return _scrollBarSize;
	}
	
	function extend() {
	  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  var args = [];
	
	  Array.prototype.push.apply(args, arguments);
	
	  args.slice(1).forEach(function (obj) {
	    if (obj) {
	      for (var key in obj) {
	        if (({}).hasOwnProperty.call(obj, key)) {
	          out[key] = obj[key];
	        }
	      }
	    }
	  });
	
	  return out;
	}
	
	function removeClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    name.split(' ').forEach(function (cls) {
	      if (cls.trim()) {
	        el.classList.remove(cls);
	      }
	    });
	  } else {
	    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
	    var className = getClassName(el).replace(regex, ' ');
	    setClassName(el, className);
	  }
	}
	
	function addClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    name.split(' ').forEach(function (cls) {
	      if (cls.trim()) {
	        el.classList.add(cls);
	      }
	    });
	  } else {
	    removeClass(el, name);
	    var cls = getClassName(el) + (' ' + name);
	    setClassName(el, cls);
	  }
	}
	
	function hasClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    return el.classList.contains(name);
	  }
	  var className = getClassName(el);
	  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
	}
	
	function getClassName(el) {
	  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
	  // completely separately SVGAnimatedString base classes
	  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
	    return el.className.baseVal;
	  }
	  return el.className;
	}
	
	function setClassName(el, className) {
	  el.setAttribute('class', className);
	}
	
	function updateClasses(el, add, all) {
	  // Of the set of 'all' classes, we need the 'add' classes, and only the
	  // 'add' classes to be set.
	  all.forEach(function (cls) {
	    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
	      removeClass(el, cls);
	    }
	  });
	
	  add.forEach(function (cls) {
	    if (!hasClass(el, cls)) {
	      addClass(el, cls);
	    }
	  });
	}
	
	var deferred = [];
	
	var defer = function defer(fn) {
	  deferred.push(fn);
	};
	
	var flush = function flush() {
	  var fn = undefined;
	  while (fn = deferred.pop()) {
	    fn();
	  }
	};
	
	var Evented = (function () {
	  function Evented() {
	    _classCallCheck(this, Evented);
	  }
	
	  _createClass(Evented, [{
	    key: 'on',
	    value: function on(event, handler, ctx) {
	      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	
	      if (typeof this.bindings === 'undefined') {
	        this.bindings = {};
	      }
	      if (typeof this.bindings[event] === 'undefined') {
	        this.bindings[event] = [];
	      }
	      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
	    }
	  }, {
	    key: 'once',
	    value: function once(event, handler, ctx) {
	      this.on(event, handler, ctx, true);
	    }
	  }, {
	    key: 'off',
	    value: function off(event, handler) {
	      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
	        return;
	      }
	
	      if (typeof handler === 'undefined') {
	        delete this.bindings[event];
	      } else {
	        var i = 0;
	        while (i < this.bindings[event].length) {
	          if (this.bindings[event][i].handler === handler) {
	            this.bindings[event].splice(i, 1);
	          } else {
	            ++i;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'trigger',
	    value: function trigger(event) {
	      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
	        var i = 0;
	
	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }
	
	        while (i < this.bindings[event].length) {
	          var _bindings$event$i = this.bindings[event][i];
	          var handler = _bindings$event$i.handler;
	          var ctx = _bindings$event$i.ctx;
	          var once = _bindings$event$i.once;
	
	          var context = ctx;
	          if (typeof context === 'undefined') {
	            context = this;
	          }
	
	          handler.apply(context, args);
	
	          if (once) {
	            this.bindings[event].splice(i, 1);
	          } else {
	            ++i;
	          }
	        }
	      }
	    }
	  }]);
	
	  return Evented;
	})();
	
	TetherBase.Utils = {
	  getActualBoundingClientRect: getActualBoundingClientRect,
	  getScrollParents: getScrollParents,
	  getBounds: getBounds,
	  getOffsetParent: getOffsetParent,
	  extend: extend,
	  addClass: addClass,
	  removeClass: removeClass,
	  hasClass: hasClass,
	  updateClasses: updateClasses,
	  defer: defer,
	  flush: flush,
	  uniqueId: uniqueId,
	  Evented: Evented,
	  getScrollBarSize: getScrollBarSize,
	  removeUtilElements: removeUtilElements
	};
	/* globals TetherBase, performance */
	
	'use strict';
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	if (typeof TetherBase === 'undefined') {
	  throw new Error('You must include the utils.js file before tether.js');
	}
	
	var _TetherBase$Utils = TetherBase.Utils;
	var getScrollParents = _TetherBase$Utils.getScrollParents;
	var getBounds = _TetherBase$Utils.getBounds;
	var getOffsetParent = _TetherBase$Utils.getOffsetParent;
	var extend = _TetherBase$Utils.extend;
	var addClass = _TetherBase$Utils.addClass;
	var removeClass = _TetherBase$Utils.removeClass;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;
	var flush = _TetherBase$Utils.flush;
	var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
	var removeUtilElements = _TetherBase$Utils.removeUtilElements;
	
	function within(a, b) {
	  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	
	  return a + diff >= b && b >= a - diff;
	}
	
	var transformKey = (function () {
	  if (typeof document === 'undefined') {
	    return '';
	  }
	  var el = document.createElement('div');
	
	  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
	  for (var i = 0; i < transforms.length; ++i) {
	    var key = transforms[i];
	    if (el.style[key] !== undefined) {
	      return key;
	    }
	  }
	})();
	
	var tethers = [];
	
	var position = function position() {
	  tethers.forEach(function (tether) {
	    tether.position(false);
	  });
	  flush();
	};
	
	function now() {
	  if (typeof performance === 'object' && typeof performance.now === 'function') {
	    return performance.now();
	  }
	  return +new Date();
	}
	
	(function () {
	  var lastCall = null;
	  var lastDuration = null;
	  var pendingTimeout = null;
	
	  var tick = function tick() {
	    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
	      // We voluntarily throttle ourselves if we can't manage 60fps
	      lastDuration = Math.min(lastDuration - 16, 250);
	
	      // Just in case this is the last event, remember to position just once more
	      pendingTimeout = setTimeout(tick, 250);
	      return;
	    }
	
	    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
	      // Some browsers call events a little too frequently, refuse to run more than is reasonable
	      return;
	    }
	
	    if (pendingTimeout != null) {
	      clearTimeout(pendingTimeout);
	      pendingTimeout = null;
	    }
	
	    lastCall = now();
	    position();
	    lastDuration = now() - lastCall;
	  };
	
	  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
	    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
	      window.addEventListener(event, tick);
	    });
	  }
	})();
	
	var MIRROR_LR = {
	  center: 'center',
	  left: 'right',
	  right: 'left'
	};
	
	var MIRROR_TB = {
	  middle: 'middle',
	  top: 'bottom',
	  bottom: 'top'
	};
	
	var OFFSET_MAP = {
	  top: 0,
	  left: 0,
	  middle: '50%',
	  center: '50%',
	  bottom: '100%',
	  right: '100%'
	};
	
	var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
	  var left = attachment.left;
	  var top = attachment.top;
	
	  if (left === 'auto') {
	    left = MIRROR_LR[relativeToAttachment.left];
	  }
	
	  if (top === 'auto') {
	    top = MIRROR_TB[relativeToAttachment.top];
	  }
	
	  return { left: left, top: top };
	};
	
	var attachmentToOffset = function attachmentToOffset(attachment) {
	  var left = attachment.left;
	  var top = attachment.top;
	
	  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
	    left = OFFSET_MAP[attachment.left];
	  }
	
	  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
	    top = OFFSET_MAP[attachment.top];
	  }
	
	  return { left: left, top: top };
	};
	
	function addOffset() {
	  var out = { top: 0, left: 0 };
	
	  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
	    offsets[_key] = arguments[_key];
	  }
	
	  offsets.forEach(function (_ref) {
	    var top = _ref.top;
	    var left = _ref.left;
	
	    if (typeof top === 'string') {
	      top = parseFloat(top, 10);
	    }
	    if (typeof left === 'string') {
	      left = parseFloat(left, 10);
	    }
	
	    out.top += top;
	    out.left += left;
	  });
	
	  return out;
	}
	
	function offsetToPx(offset, size) {
	  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
	    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
	  }
	  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
	    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
	  }
	
	  return offset;
	}
	
	var parseOffset = function parseOffset(value) {
	  var _value$split = value.split(' ');
	
	  var _value$split2 = _slicedToArray(_value$split, 2);
	
	  var top = _value$split2[0];
	  var left = _value$split2[1];
	
	  return { top: top, left: left };
	};
	var parseAttachment = parseOffset;
	
	var TetherClass = (function (_Evented) {
	  _inherits(TetherClass, _Evented);
	
	  function TetherClass(options) {
	    var _this = this;
	
	    _classCallCheck(this, TetherClass);
	
	    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
	    this.position = this.position.bind(this);
	
	    tethers.push(this);
	
	    this.history = [];
	
	    this.setOptions(options, false);
	
	    TetherBase.modules.forEach(function (module) {
	      if (typeof module.initialize !== 'undefined') {
	        module.initialize.call(_this);
	      }
	    });
	
	    this.position();
	  }
	
	  _createClass(TetherClass, [{
	    key: 'getClass',
	    value: function getClass() {
	      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	      var classes = this.options.classes;
	
	      if (typeof classes !== 'undefined' && classes[key]) {
	        return this.options.classes[key];
	      } else if (this.options.classPrefix) {
	        return this.options.classPrefix + '-' + key;
	      } else {
	        return key;
	      }
	    }
	  }, {
	    key: 'setOptions',
	    value: function setOptions(options) {
	      var _this2 = this;
	
	      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	      var defaults = {
	        offset: '0 0',
	        targetOffset: '0 0',
	        targetAttachment: 'auto auto',
	        classPrefix: 'tether'
	      };
	
	      this.options = extend(defaults, options);
	
	      var _options = this.options;
	      var element = _options.element;
	      var target = _options.target;
	      var targetModifier = _options.targetModifier;
	
	      this.element = element;
	      this.target = target;
	      this.targetModifier = targetModifier;
	
	      if (this.target === 'viewport') {
	        this.target = document.body;
	        this.targetModifier = 'visible';
	      } else if (this.target === 'scroll-handle') {
	        this.target = document.body;
	        this.targetModifier = 'scroll-handle';
	      }
	
	      ['element', 'target'].forEach(function (key) {
	        if (typeof _this2[key] === 'undefined') {
	          throw new Error('Tether Error: Both element and target must be defined');
	        }
	
	        if (typeof _this2[key].jquery !== 'undefined') {
	          _this2[key] = _this2[key][0];
	        } else if (typeof _this2[key] === 'string') {
	          _this2[key] = document.querySelector(_this2[key]);
	        }
	      });
	
	      addClass(this.element, this.getClass('element'));
	      if (!(this.options.addTargetClasses === false)) {
	        addClass(this.target, this.getClass('target'));
	      }
	
	      if (!this.options.attachment) {
	        throw new Error('Tether Error: You must provide an attachment');
	      }
	
	      this.targetAttachment = parseAttachment(this.options.targetAttachment);
	      this.attachment = parseAttachment(this.options.attachment);
	      this.offset = parseOffset(this.options.offset);
	      this.targetOffset = parseOffset(this.options.targetOffset);
	
	      if (typeof this.scrollParents !== 'undefined') {
	        this.disable();
	      }
	
	      if (this.targetModifier === 'scroll-handle') {
	        this.scrollParents = [this.target];
	      } else {
	        this.scrollParents = getScrollParents(this.target);
	      }
	
	      if (!(this.options.enabled === false)) {
	        this.enable(pos);
	      }
	    }
	  }, {
	    key: 'getTargetBounds',
	    value: function getTargetBounds() {
	      if (typeof this.targetModifier !== 'undefined') {
	        if (this.targetModifier === 'visible') {
	          if (this.target === document.body) {
	            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
	          } else {
	            var bounds = getBounds(this.target);
	
	            var out = {
	              height: bounds.height,
	              width: bounds.width,
	              top: bounds.top,
	              left: bounds.left
	            };
	
	            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
	            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
	            out.height = Math.min(innerHeight, out.height);
	            out.height -= 2;
	
	            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
	            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
	            out.width = Math.min(innerWidth, out.width);
	            out.width -= 2;
	
	            if (out.top < pageYOffset) {
	              out.top = pageYOffset;
	            }
	            if (out.left < pageXOffset) {
	              out.left = pageXOffset;
	            }
	
	            return out;
	          }
	        } else if (this.targetModifier === 'scroll-handle') {
	          var bounds = undefined;
	          var target = this.target;
	          if (target === document.body) {
	            target = document.documentElement;
	
	            bounds = {
	              left: pageXOffset,
	              top: pageYOffset,
	              height: innerHeight,
	              width: innerWidth
	            };
	          } else {
	            bounds = getBounds(target);
	          }
	
	          var style = getComputedStyle(target);
	
	          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;
	
	          var scrollBottom = 0;
	          if (hasBottomScroll) {
	            scrollBottom = 15;
	          }
	
	          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;
	
	          var out = {
	            width: 15,
	            height: height * 0.975 * (height / target.scrollHeight),
	            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
	          };
	
	          var fitAdj = 0;
	          if (height < 408 && this.target === document.body) {
	            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
	          }
	
	          if (this.target !== document.body) {
	            out.height = Math.max(out.height, 24);
	          }
	
	          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
	          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);
	
	          if (this.target === document.body) {
	            out.height = Math.max(out.height, 24);
	          }
	
	          return out;
	        }
	      } else {
	        return getBounds(this.target);
	      }
	    }
	  }, {
	    key: 'clearCache',
	    value: function clearCache() {
	      this._cache = {};
	    }
	  }, {
	    key: 'cache',
	    value: function cache(k, getter) {
	      // More than one module will often need the same DOM info, so
	      // we keep a cache which is cleared on each position call
	      if (typeof this._cache === 'undefined') {
	        this._cache = {};
	      }
	
	      if (typeof this._cache[k] === 'undefined') {
	        this._cache[k] = getter.call(this);
	      }
	
	      return this._cache[k];
	    }
	  }, {
	    key: 'enable',
	    value: function enable() {
	      var _this3 = this;
	
	      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      if (!(this.options.addTargetClasses === false)) {
	        addClass(this.target, this.getClass('enabled'));
	      }
	      addClass(this.element, this.getClass('enabled'));
	      this.enabled = true;
	
	      this.scrollParents.forEach(function (parent) {
	        if (parent !== _this3.target.ownerDocument) {
	          parent.addEventListener('scroll', _this3.position);
	        }
	      });
	
	      if (pos) {
	        this.position();
	      }
	    }
	  }, {
	    key: 'disable',
	    value: function disable() {
	      var _this4 = this;
	
	      removeClass(this.target, this.getClass('enabled'));
	      removeClass(this.element, this.getClass('enabled'));
	      this.enabled = false;
	
	      if (typeof this.scrollParents !== 'undefined') {
	        this.scrollParents.forEach(function (parent) {
	          parent.removeEventListener('scroll', _this4.position);
	        });
	      }
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var _this5 = this;
	
	      this.disable();
	
	      tethers.forEach(function (tether, i) {
	        if (tether === _this5) {
	          tethers.splice(i, 1);
	        }
	      });
	
	      // Remove any elements we were using for convenience from the DOM
	      if (tethers.length === 0) {
	        removeUtilElements();
	      }
	    }
	  }, {
	    key: 'updateAttachClasses',
	    value: function updateAttachClasses(elementAttach, targetAttach) {
	      var _this6 = this;
	
	      elementAttach = elementAttach || this.attachment;
	      targetAttach = targetAttach || this.targetAttachment;
	      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];
	
	      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
	        // updateAttachClasses can be called more than once in a position call, so
	        // we need to clean up after ourselves such that when the last defer gets
	        // ran it doesn't add any extra classes from previous calls.
	        this._addAttachClasses.splice(0, this._addAttachClasses.length);
	      }
	
	      if (typeof this._addAttachClasses === 'undefined') {
	        this._addAttachClasses = [];
	      }
	      var add = this._addAttachClasses;
	
	      if (elementAttach.top) {
	        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
	      }
	      if (elementAttach.left) {
	        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
	      }
	      if (targetAttach.top) {
	        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
	      }
	      if (targetAttach.left) {
	        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
	      }
	
	      var all = [];
	      sides.forEach(function (side) {
	        all.push(_this6.getClass('element-attached') + '-' + side);
	        all.push(_this6.getClass('target-attached') + '-' + side);
	      });
	
	      defer(function () {
	        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
	          return;
	        }
	
	        updateClasses(_this6.element, _this6._addAttachClasses, all);
	        if (!(_this6.options.addTargetClasses === false)) {
	          updateClasses(_this6.target, _this6._addAttachClasses, all);
	        }
	
	        delete _this6._addAttachClasses;
	      });
	    }
	  }, {
	    key: 'position',
	    value: function position() {
	      var _this7 = this;
	
	      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
	      // tethers (in which case call Tether.Utils.flush yourself when you're done)
	
	      if (!this.enabled) {
	        return;
	      }
	
	      this.clearCache();
	
	      // Turn 'auto' attachments into the appropriate corner or edge
	      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);
	
	      this.updateAttachClasses(this.attachment, targetAttachment);
	
	      var elementPos = this.cache('element-bounds', function () {
	        return getBounds(_this7.element);
	      });
	
	      var width = elementPos.width;
	      var height = elementPos.height;
	
	      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
	        var _lastSize = this.lastSize;
	
	        // We cache the height and width to make it possible to position elements that are
	        // getting hidden.
	        width = _lastSize.width;
	        height = _lastSize.height;
	      } else {
	        this.lastSize = { width: width, height: height };
	      }
	
	      var targetPos = this.cache('target-bounds', function () {
	        return _this7.getTargetBounds();
	      });
	      var targetSize = targetPos;
	
	      // Get an actual px offset from the attachment
	      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
	      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);
	
	      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
	      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);
	
	      // Add the manually provided offset
	      offset = addOffset(offset, manualOffset);
	      targetOffset = addOffset(targetOffset, manualTargetOffset);
	
	      // It's now our goal to make (element position + offset) == (target position + target offset)
	      var left = targetPos.left + targetOffset.left - offset.left;
	      var top = targetPos.top + targetOffset.top - offset.top;
	
	      for (var i = 0; i < TetherBase.modules.length; ++i) {
	        var _module2 = TetherBase.modules[i];
	        var ret = _module2.position.call(this, {
	          left: left,
	          top: top,
	          targetAttachment: targetAttachment,
	          targetPos: targetPos,
	          elementPos: elementPos,
	          offset: offset,
	          targetOffset: targetOffset,
	          manualOffset: manualOffset,
	          manualTargetOffset: manualTargetOffset,
	          scrollbarSize: scrollbarSize,
	          attachment: this.attachment
	        });
	
	        if (ret === false) {
	          return false;
	        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
	          continue;
	        } else {
	          top = ret.top;
	          left = ret.left;
	        }
	      }
	
	      // We describe the position three different ways to give the optimizer
	      // a chance to decide the best possible way to position the element
	      // with the fewest repaints.
	      var next = {
	        // It's position relative to the page (absolute positioning when
	        // the element is a child of the body)
	        page: {
	          top: top,
	          left: left
	        },
	
	        // It's position relative to the viewport (fixed positioning)
	        viewport: {
	          top: top - pageYOffset,
	          bottom: pageYOffset - top - height + innerHeight,
	          left: left - pageXOffset,
	          right: pageXOffset - left - width + innerWidth
	        }
	      };
	
	      var doc = this.target.ownerDocument;
	      var win = doc.defaultView;
	
	      var scrollbarSize = undefined;
	      if (win.innerHeight > doc.documentElement.clientHeight) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.bottom -= scrollbarSize.height;
	      }
	
	      if (win.innerWidth > doc.documentElement.clientWidth) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.right -= scrollbarSize.width;
	      }
	
	      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
	        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
	        next.page.bottom = doc.body.scrollHeight - top - height;
	        next.page.right = doc.body.scrollWidth - left - width;
	      }
	
	      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
	        (function () {
	          var offsetParent = _this7.cache('target-offsetparent', function () {
	            return getOffsetParent(_this7.target);
	          });
	          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
	            return getBounds(offsetParent);
	          });
	          var offsetParentStyle = getComputedStyle(offsetParent);
	          var offsetParentSize = offsetPosition;
	
	          var offsetBorder = {};
	          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
	            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
	          });
	
	          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
	          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;
	
	          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
	            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
	              // We're within the visible part of the target's scroll parent
	              var scrollTop = offsetParent.scrollTop;
	              var scrollLeft = offsetParent.scrollLeft;
	
	              // It's position relative to the target's offset parent (absolute positioning when
	              // the element is moved to be a child of the target's offset parent).
	              next.offset = {
	                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
	                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
	              };
	            }
	          }
	        })();
	      }
	
	      // We could also travel up the DOM and try each containing context, rather than only
	      // looking at the body, but we're gonna get diminishing returns.
	
	      this.move(next);
	
	      this.history.unshift(next);
	
	      if (this.history.length > 3) {
	        this.history.pop();
	      }
	
	      if (flushChanges) {
	        flush();
	      }
	
	      return true;
	    }
	
	    // THE ISSUE
	  }, {
	    key: 'move',
	    value: function move(pos) {
	      var _this8 = this;
	
	      if (!(typeof this.element.parentNode !== 'undefined')) {
	        return;
	      }
	
	      var same = {};
	
	      for (var type in pos) {
	        same[type] = {};
	
	        for (var key in pos[type]) {
	          var found = false;
	
	          for (var i = 0; i < this.history.length; ++i) {
	            var point = this.history[i];
	            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
	              found = true;
	              break;
	            }
	          }
	
	          if (!found) {
	            same[type][key] = true;
	          }
	        }
	      }
	
	      var css = { top: '', left: '', right: '', bottom: '' };
	
	      var transcribe = function transcribe(_same, _pos) {
	        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
	        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
	        if (gpu !== false) {
	          var yPos = undefined,
	              xPos = undefined;
	          if (_same.top) {
	            css.top = 0;
	            yPos = _pos.top;
	          } else {
	            css.bottom = 0;
	            yPos = -_pos.bottom;
	          }
	
	          if (_same.left) {
	            css.left = 0;
	            xPos = _pos.left;
	          } else {
	            css.right = 0;
	            xPos = -_pos.right;
	          }
	
	          if (typeof window.devicePixelRatio === 'number' && devicePixelRatio % 1 === 0) {
	            xPos = Math.round(xPos * devicePixelRatio) / devicePixelRatio;
	            yPos = Math.round(yPos * devicePixelRatio) / devicePixelRatio;
	          }
	
	          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';
	
	          if (transformKey !== 'msTransform') {
	            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
	            // but IE9 doesn't support 3d transforms and will choke.
	            css[transformKey] += " translateZ(0)";
	          }
	        } else {
	          if (_same.top) {
	            css.top = _pos.top + 'px';
	          } else {
	            css.bottom = _pos.bottom + 'px';
	          }
	
	          if (_same.left) {
	            css.left = _pos.left + 'px';
	          } else {
	            css.right = _pos.right + 'px';
	          }
	        }
	      };
	
	      var moved = false;
	      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
	        css.position = 'absolute';
	        transcribe(same.page, pos.page);
	      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
	        css.position = 'fixed';
	        transcribe(same.viewport, pos.viewport);
	      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
	        (function () {
	          css.position = 'absolute';
	          var offsetParent = _this8.cache('target-offsetparent', function () {
	            return getOffsetParent(_this8.target);
	          });
	
	          if (getOffsetParent(_this8.element) !== offsetParent) {
	            defer(function () {
	              _this8.element.parentNode.removeChild(_this8.element);
	              offsetParent.appendChild(_this8.element);
	            });
	          }
	
	          transcribe(same.offset, pos.offset);
	          moved = true;
	        })();
	      } else {
	        css.position = 'absolute';
	        transcribe({ top: true, left: true }, pos.page);
	      }
	
	      if (!moved) {
	        if (this.options.bodyElement) {
	          if (this.element.parentNode !== this.options.bodyElement) {
	            this.options.bodyElement.appendChild(this.element);
	          }
	        } else {
	          var isFullscreenElement = function isFullscreenElement(e) {
	            var d = e.ownerDocument;
	            var fe = d.fullscreenElement || d.webkitFullscreenElement || d.mozFullScreenElement || d.msFullscreenElement;
	            return fe === e;
	          };
	
	          var offsetParentIsBody = true;
	
	          var currentNode = this.element.parentNode;
	          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY' && !isFullscreenElement(currentNode)) {
	            if (getComputedStyle(currentNode).position !== 'static') {
	              offsetParentIsBody = false;
	              break;
	            }
	
	            currentNode = currentNode.parentNode;
	          }
	
	          if (!offsetParentIsBody) {
	            this.element.parentNode.removeChild(this.element);
	            this.element.ownerDocument.body.appendChild(this.element);
	          }
	        }
	      }
	
	      // Any css change will trigger a repaint, so let's avoid one if nothing changed
	      var writeCSS = {};
	      var write = false;
	      for (var key in css) {
	        var val = css[key];
	        var elVal = this.element.style[key];
	
	        if (elVal !== val) {
	          write = true;
	          writeCSS[key] = val;
	        }
	      }
	
	      if (write) {
	        defer(function () {
	          extend(_this8.element.style, writeCSS);
	          _this8.trigger('repositioned');
	        });
	      }
	    }
	  }]);
	
	  return TetherClass;
	})(Evented);
	
	TetherClass.modules = [];
	
	TetherBase.position = position;
	
	var Tether = extend(TetherClass, TetherBase);
	/* globals TetherBase */
	
	'use strict';
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var _TetherBase$Utils = TetherBase.Utils;
	var getBounds = _TetherBase$Utils.getBounds;
	var extend = _TetherBase$Utils.extend;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;
	
	var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];
	
	function getBoundingRect(tether, to) {
	  if (to === 'scrollParent') {
	    to = tether.scrollParents[0];
	  } else if (to === 'window') {
	    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
	  }
	
	  if (to === document) {
	    to = to.documentElement;
	  }
	
	  if (typeof to.nodeType !== 'undefined') {
	    (function () {
	      var node = to;
	      var size = getBounds(to);
	      var pos = size;
	      var style = getComputedStyle(to);
	
	      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];
	
	      // Account any parent Frames scroll offset
	      if (node.ownerDocument !== document) {
	        var win = node.ownerDocument.defaultView;
	        to[0] += win.pageXOffset;
	        to[1] += win.pageYOffset;
	        to[2] += win.pageXOffset;
	        to[3] += win.pageYOffset;
	      }
	
	      BOUNDS_FORMAT.forEach(function (side, i) {
	        side = side[0].toUpperCase() + side.substr(1);
	        if (side === 'Top' || side === 'Left') {
	          to[i] += parseFloat(style['border' + side + 'Width']);
	        } else {
	          to[i] -= parseFloat(style['border' + side + 'Width']);
	        }
	      });
	    })();
	  }
	
	  return to;
	}
	
	TetherBase.modules.push({
	  position: function position(_ref) {
	    var _this = this;
	
	    var top = _ref.top;
	    var left = _ref.left;
	    var targetAttachment = _ref.targetAttachment;
	
	    if (!this.options.constraints) {
	      return true;
	    }
	
	    var _cache = this.cache('element-bounds', function () {
	      return getBounds(_this.element);
	    });
	
	    var height = _cache.height;
	    var width = _cache.width;
	
	    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
	      var _lastSize = this.lastSize;
	
	      // Handle the item getting hidden as a result of our positioning without glitching
	      // the classes in and out
	      width = _lastSize.width;
	      height = _lastSize.height;
	    }
	
	    var targetSize = this.cache('target-bounds', function () {
	      return _this.getTargetBounds();
	    });
	
	    var targetHeight = targetSize.height;
	    var targetWidth = targetSize.width;
	
	    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];
	
	    this.options.constraints.forEach(function (constraint) {
	      var outOfBoundsClass = constraint.outOfBoundsClass;
	      var pinnedClass = constraint.pinnedClass;
	
	      if (outOfBoundsClass) {
	        allClasses.push(outOfBoundsClass);
	      }
	      if (pinnedClass) {
	        allClasses.push(pinnedClass);
	      }
	    });
	
	    allClasses.forEach(function (cls) {
	      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
	        allClasses.push(cls + '-' + side);
	      });
	    });
	
	    var addClasses = [];
	
	    var tAttachment = extend({}, targetAttachment);
	    var eAttachment = extend({}, this.attachment);
	
	    this.options.constraints.forEach(function (constraint) {
	      var to = constraint.to;
	      var attachment = constraint.attachment;
	      var pin = constraint.pin;
	
	      if (typeof attachment === 'undefined') {
	        attachment = '';
	      }
	
	      var changeAttachX = undefined,
	          changeAttachY = undefined;
	      if (attachment.indexOf(' ') >= 0) {
	        var _attachment$split = attachment.split(' ');
	
	        var _attachment$split2 = _slicedToArray(_attachment$split, 2);
	
	        changeAttachY = _attachment$split2[0];
	        changeAttachX = _attachment$split2[1];
	      } else {
	        changeAttachX = changeAttachY = attachment;
	      }
	
	      var bounds = getBoundingRect(_this, to);
	
	      if (changeAttachY === 'target' || changeAttachY === 'both') {
	        if (top < bounds[1] && tAttachment.top === 'top') {
	          top += targetHeight;
	          tAttachment.top = 'bottom';
	        }
	
	        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
	          top -= targetHeight;
	          tAttachment.top = 'top';
	        }
	      }
	
	      if (changeAttachY === 'together') {
	        if (tAttachment.top === 'top') {
	          if (eAttachment.top === 'bottom' && top < bounds[1]) {
	            top += targetHeight;
	            tAttachment.top = 'bottom';
	
	            top += height;
	            eAttachment.top = 'top';
	          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
	            top -= height - targetHeight;
	            tAttachment.top = 'bottom';
	
	            eAttachment.top = 'bottom';
	          }
	        }
	
	        if (tAttachment.top === 'bottom') {
	          if (eAttachment.top === 'top' && top + height > bounds[3]) {
	            top -= targetHeight;
	            tAttachment.top = 'top';
	
	            top -= height;
	            eAttachment.top = 'bottom';
	          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
	            top += height - targetHeight;
	            tAttachment.top = 'top';
	
	            eAttachment.top = 'top';
	          }
	        }
	
	        if (tAttachment.top === 'middle') {
	          if (top + height > bounds[3] && eAttachment.top === 'top') {
	            top -= height;
	            eAttachment.top = 'bottom';
	          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
	            top += height;
	            eAttachment.top = 'top';
	          }
	        }
	      }
	
	      if (changeAttachX === 'target' || changeAttachX === 'both') {
	        if (left < bounds[0] && tAttachment.left === 'left') {
	          left += targetWidth;
	          tAttachment.left = 'right';
	        }
	
	        if (left + width > bounds[2] && tAttachment.left === 'right') {
	          left -= targetWidth;
	          tAttachment.left = 'left';
	        }
	      }
	
	      if (changeAttachX === 'together') {
	        if (left < bounds[0] && tAttachment.left === 'left') {
	          if (eAttachment.left === 'right') {
	            left += targetWidth;
	            tAttachment.left = 'right';
	
	            left += width;
	            eAttachment.left = 'left';
	          } else if (eAttachment.left === 'left') {
	            left += targetWidth;
	            tAttachment.left = 'right';
	
	            left -= width;
	            eAttachment.left = 'right';
	          }
	        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
	          if (eAttachment.left === 'left') {
	            left -= targetWidth;
	            tAttachment.left = 'left';
	
	            left -= width;
	            eAttachment.left = 'right';
	          } else if (eAttachment.left === 'right') {
	            left -= targetWidth;
	            tAttachment.left = 'left';
	
	            left += width;
	            eAttachment.left = 'left';
	          }
	        } else if (tAttachment.left === 'center') {
	          if (left + width > bounds[2] && eAttachment.left === 'left') {
	            left -= width;
	            eAttachment.left = 'right';
	          } else if (left < bounds[0] && eAttachment.left === 'right') {
	            left += width;
	            eAttachment.left = 'left';
	          }
	        }
	      }
	
	      if (changeAttachY === 'element' || changeAttachY === 'both') {
	        if (top < bounds[1] && eAttachment.top === 'bottom') {
	          top += height;
	          eAttachment.top = 'top';
	        }
	
	        if (top + height > bounds[3] && eAttachment.top === 'top') {
	          top -= height;
	          eAttachment.top = 'bottom';
	        }
	      }
	
	      if (changeAttachX === 'element' || changeAttachX === 'both') {
	        if (left < bounds[0]) {
	          if (eAttachment.left === 'right') {
	            left += width;
	            eAttachment.left = 'left';
	          } else if (eAttachment.left === 'center') {
	            left += width / 2;
	            eAttachment.left = 'left';
	          }
	        }
	
	        if (left + width > bounds[2]) {
	          if (eAttachment.left === 'left') {
	            left -= width;
	            eAttachment.left = 'right';
	          } else if (eAttachment.left === 'center') {
	            left -= width / 2;
	            eAttachment.left = 'right';
	          }
	        }
	      }
	
	      if (typeof pin === 'string') {
	        pin = pin.split(',').map(function (p) {
	          return p.trim();
	        });
	      } else if (pin === true) {
	        pin = ['top', 'left', 'right', 'bottom'];
	      }
	
	      pin = pin || [];
	
	      var pinned = [];
	      var oob = [];
	
	      if (top < bounds[1]) {
	        if (pin.indexOf('top') >= 0) {
	          top = bounds[1];
	          pinned.push('top');
	        } else {
	          oob.push('top');
	        }
	      }
	
	      if (top + height > bounds[3]) {
	        if (pin.indexOf('bottom') >= 0) {
	          top = bounds[3] - height;
	          pinned.push('bottom');
	        } else {
	          oob.push('bottom');
	        }
	      }
	
	      if (left < bounds[0]) {
	        if (pin.indexOf('left') >= 0) {
	          left = bounds[0];
	          pinned.push('left');
	        } else {
	          oob.push('left');
	        }
	      }
	
	      if (left + width > bounds[2]) {
	        if (pin.indexOf('right') >= 0) {
	          left = bounds[2] - width;
	          pinned.push('right');
	        } else {
	          oob.push('right');
	        }
	      }
	
	      if (pinned.length) {
	        (function () {
	          var pinnedClass = undefined;
	          if (typeof _this.options.pinnedClass !== 'undefined') {
	            pinnedClass = _this.options.pinnedClass;
	          } else {
	            pinnedClass = _this.getClass('pinned');
	          }
	
	          addClasses.push(pinnedClass);
	          pinned.forEach(function (side) {
	            addClasses.push(pinnedClass + '-' + side);
	          });
	        })();
	      }
	
	      if (oob.length) {
	        (function () {
	          var oobClass = undefined;
	          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
	            oobClass = _this.options.outOfBoundsClass;
	          } else {
	            oobClass = _this.getClass('out-of-bounds');
	          }
	
	          addClasses.push(oobClass);
	          oob.forEach(function (side) {
	            addClasses.push(oobClass + '-' + side);
	          });
	        })();
	      }
	
	      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
	        eAttachment.left = tAttachment.left = false;
	      }
	      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
	        eAttachment.top = tAttachment.top = false;
	      }
	
	      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
	        _this.updateAttachClasses(eAttachment, tAttachment);
	        _this.trigger('update', {
	          attachment: eAttachment,
	          targetAttachment: tAttachment
	        });
	      }
	    });
	
	    defer(function () {
	      if (!(_this.options.addTargetClasses === false)) {
	        updateClasses(_this.target, addClasses, allClasses);
	      }
	      updateClasses(_this.element, addClasses, allClasses);
	    });
	
	    return { top: top, left: left };
	  }
	});
	/* globals TetherBase */
	
	'use strict';
	
	var _TetherBase$Utils = TetherBase.Utils;
	var getBounds = _TetherBase$Utils.getBounds;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;
	
	TetherBase.modules.push({
	  position: function position(_ref) {
	    var _this = this;
	
	    var top = _ref.top;
	    var left = _ref.left;
	
	    var _cache = this.cache('element-bounds', function () {
	      return getBounds(_this.element);
	    });
	
	    var height = _cache.height;
	    var width = _cache.width;
	
	    var targetPos = this.getTargetBounds();
	
	    var bottom = top + height;
	    var right = left + width;
	
	    var abutted = [];
	    if (top <= targetPos.bottom && bottom >= targetPos.top) {
	      ['left', 'right'].forEach(function (side) {
	        var targetPosSide = targetPos[side];
	        if (targetPosSide === left || targetPosSide === right) {
	          abutted.push(side);
	        }
	      });
	    }
	
	    if (left <= targetPos.right && right >= targetPos.left) {
	      ['top', 'bottom'].forEach(function (side) {
	        var targetPosSide = targetPos[side];
	        if (targetPosSide === top || targetPosSide === bottom) {
	          abutted.push(side);
	        }
	      });
	    }
	
	    var allClasses = [];
	    var addClasses = [];
	
	    var sides = ['left', 'top', 'right', 'bottom'];
	    allClasses.push(this.getClass('abutted'));
	    sides.forEach(function (side) {
	      allClasses.push(_this.getClass('abutted') + '-' + side);
	    });
	
	    if (abutted.length) {
	      addClasses.push(this.getClass('abutted'));
	    }
	
	    abutted.forEach(function (side) {
	      addClasses.push(_this.getClass('abutted') + '-' + side);
	    });
	
	    defer(function () {
	      if (!(_this.options.addTargetClasses === false)) {
	        updateClasses(_this.target, addClasses, allClasses);
	      }
	      updateClasses(_this.element, addClasses, allClasses);
	    });
	
	    return true;
	  }
	});
	/* globals TetherBase */
	
	'use strict';
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	TetherBase.modules.push({
	  position: function position(_ref) {
	    var top = _ref.top;
	    var left = _ref.left;
	
	    if (!this.options.shift) {
	      return;
	    }
	
	    var shift = this.options.shift;
	    if (typeof this.options.shift === 'function') {
	      shift = this.options.shift.call(this, { top: top, left: left });
	    }
	
	    var shiftTop = undefined,
	        shiftLeft = undefined;
	    if (typeof shift === 'string') {
	      shift = shift.split(' ');
	      shift[1] = shift[1] || shift[0];
	
	      var _shift = shift;
	
	      var _shift2 = _slicedToArray(_shift, 2);
	
	      shiftTop = _shift2[0];
	      shiftLeft = _shift2[1];
	
	      shiftTop = parseFloat(shiftTop, 10);
	      shiftLeft = parseFloat(shiftLeft, 10);
	    } else {
	      shiftTop = shift.top;
	      shiftLeft = shift.left;
	    }
	
	    top += shiftTop;
	    left += shiftLeft;
	
	    return { top: top, left: left };
	  }
	});
	return Tether;
	
	}));


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*!
	 * Bootstrap v4.0.0-alpha.4 (http://getbootstrap.com)
	 * Copyright 2011-2016 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 */
	if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(jQuery),+function(a){"use strict";function b(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(a){function b(a){return{}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function c(a){return(a[0]||a).nodeType}function d(){return{bindType:h.end,delegateType:h.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}}}function e(){if(window.QUnit)return!1;var a=document.createElement("bootstrap");for(var b in j)if(void 0!==a.style[b])return{end:j[b]};return!1}function f(b){var c=this,d=!1;return a(this).one(k.TRANSITION_END,function(){d=!0}),setTimeout(function(){d||k.triggerTransitionEnd(c)},b),this}function g(){h=e(),a.fn.emulateTransitionEnd=f,k.supportsTransitionEnd()&&(a.event.special[k.TRANSITION_END]=d())}var h=!1,i=1e6,j={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},k={TRANSITION_END:"bsTransitionEnd",getUID:function(a){do a+=~~(Math.random()*i);while(document.getElementById(a));return a},getSelectorFromElement:function(a){var b=a.getAttribute("data-target");return b||(b=a.getAttribute("href")||"",b=/^#[a-z]/i.test(b)?b:null),b},reflow:function(a){new Function("bs","return bs")(a.offsetHeight)},triggerTransitionEnd:function(b){a(b).trigger(h.end)},supportsTransitionEnd:function(){return Boolean(h)},typeCheckConfig:function(a,d,e){for(var f in e)if(e.hasOwnProperty(f)){var g=e[f],h=d[f],i=void 0;if(i=h&&c(h)?"element":b(h),!new RegExp(g).test(i))throw new Error(a.toUpperCase()+": "+('Option "'+f+'" provided type "'+i+'" ')+('but expected type "'+g+'".'))}}};return g(),k}(jQuery),g=(function(a){var b="alert",d="4.0.0-alpha.4",g="bs.alert",h="."+g,i=".data-api",j=a.fn[b],k=150,l={DISMISS:'[data-dismiss="alert"]'},m={CLOSE:"close"+h,CLOSED:"closed"+h,CLICK_DATA_API:"click"+h+i},n={ALERT:"alert",FADE:"fade",IN:"in"},o=function(){function b(a){c(this,b),this._element=a}return e(b,[{key:"close",value:function(a){a=a||this._element;var b=this._getRootElement(a),c=this._triggerCloseEvent(b);c.isDefaultPrevented()||this._removeElement(b)}},{key:"dispose",value:function(){a.removeData(this._element,g),this._element=null}},{key:"_getRootElement",value:function(b){var c=f.getSelectorFromElement(b),d=!1;return c&&(d=a(c)[0]),d||(d=a(b).closest("."+n.ALERT)[0]),d}},{key:"_triggerCloseEvent",value:function(b){var c=a.Event(m.CLOSE);return a(b).trigger(c),c}},{key:"_removeElement",value:function(b){return a(b).removeClass(n.IN),f.supportsTransitionEnd()&&a(b).hasClass(n.FADE)?void a(b).one(f.TRANSITION_END,a.proxy(this._destroyElement,this,b)).emulateTransitionEnd(k):void this._destroyElement(b)}},{key:"_destroyElement",value:function(b){a(b).detach().trigger(m.CLOSED).remove()}}],[{key:"_jQueryInterface",value:function(c){return this.each(function(){var d=a(this),e=d.data(g);e||(e=new b(this),d.data(g,e)),"close"===c&&e[c](this)})}},{key:"_handleDismiss",value:function(a){return function(b){b&&b.preventDefault(),a.close(this)}}},{key:"VERSION",get:function(){return d}}]),b}();return a(document).on(m.CLICK_DATA_API,l.DISMISS,o._handleDismiss(new o)),a.fn[b]=o._jQueryInterface,a.fn[b].Constructor=o,a.fn[b].noConflict=function(){return a.fn[b]=j,o._jQueryInterface},o}(jQuery),function(a){var b="button",d="4.0.0-alpha.4",f="bs.button",g="."+f,h=".data-api",i=a.fn[b],j={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},k={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"},l={CLICK_DATA_API:"click"+g+h,FOCUS_BLUR_DATA_API:"focus"+g+h+" "+("blur"+g+h)},m=function(){function b(a){c(this,b),this._element=a}return e(b,[{key:"toggle",value:function(){var b=!0,c=a(this._element).closest(k.DATA_TOGGLE)[0];if(c){var d=a(this._element).find(k.INPUT)[0];if(d){if("radio"===d.type)if(d.checked&&a(this._element).hasClass(j.ACTIVE))b=!1;else{var e=a(c).find(k.ACTIVE)[0];e&&a(e).removeClass(j.ACTIVE)}b&&(d.checked=!a(this._element).hasClass(j.ACTIVE),a(this._element).trigger("change")),d.focus()}}else this._element.setAttribute("aria-pressed",!a(this._element).hasClass(j.ACTIVE));b&&a(this._element).toggleClass(j.ACTIVE)}},{key:"dispose",value:function(){a.removeData(this._element,f),this._element=null}}],[{key:"_jQueryInterface",value:function(c){return this.each(function(){var d=a(this).data(f);d||(d=new b(this),a(this).data(f,d)),"toggle"===c&&d[c]()})}},{key:"VERSION",get:function(){return d}}]),b}();return a(document).on(l.CLICK_DATA_API,k.DATA_TOGGLE_CARROT,function(b){b.preventDefault();var c=b.target;a(c).hasClass(j.BUTTON)||(c=a(c).closest(k.BUTTON)),m._jQueryInterface.call(a(c),"toggle")}).on(l.FOCUS_BLUR_DATA_API,k.DATA_TOGGLE_CARROT,function(b){var c=a(b.target).closest(k.BUTTON)[0];a(c).toggleClass(j.FOCUS,/^focus(in)?$/.test(b.type))}),a.fn[b]=m._jQueryInterface,a.fn[b].Constructor=m,a.fn[b].noConflict=function(){return a.fn[b]=i,m._jQueryInterface},m}(jQuery),function(a){var b="carousel",d="4.0.0-alpha.4",g="bs.carousel",h="."+g,i=".data-api",j=a.fn[b],k=600,l=37,m=39,n={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},o={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},p={NEXT:"next",PREVIOUS:"prev"},q={SLIDE:"slide"+h,SLID:"slid"+h,KEYDOWN:"keydown"+h,MOUSEENTER:"mouseenter"+h,MOUSELEAVE:"mouseleave"+h,LOAD_DATA_API:"load"+h+i,CLICK_DATA_API:"click"+h+i},r={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"right",LEFT:"left",ITEM:"carousel-item"},s={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".next, .prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},t=function(){function i(b,d){c(this,i),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this._config=this._getConfig(d),this._element=a(b)[0],this._indicatorsElement=a(this._element).find(s.INDICATORS)[0],this._addEventListeners()}return e(i,[{key:"next",value:function(){this._isSliding||this._slide(p.NEXT)}},{key:"nextWhenVisible",value:function(){document.hidden||this.next()}},{key:"prev",value:function(){this._isSliding||this._slide(p.PREVIOUS)}},{key:"pause",value:function(b){b||(this._isPaused=!0),a(this._element).find(s.NEXT_PREV)[0]&&f.supportsTransitionEnd()&&(f.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}},{key:"cycle",value:function(b){b||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval(a.proxy(document.visibilityState?this.nextWhenVisible:this.next,this),this._config.interval))}},{key:"to",value:function(b){var c=this;this._activeElement=a(this._element).find(s.ACTIVE_ITEM)[0];var d=this._getItemIndex(this._activeElement);if(!(b>this._items.length-1||b<0)){if(this._isSliding)return void a(this._element).one(q.SLID,function(){return c.to(b)});if(d===b)return this.pause(),void this.cycle();var e=b>d?p.NEXT:p.PREVIOUS;this._slide(e,this._items[b])}}},{key:"dispose",value:function(){a(this._element).off(h),a.removeData(this._element,g),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null}},{key:"_getConfig",value:function(c){return c=a.extend({},n,c),f.typeCheckConfig(b,c,o),c}},{key:"_addEventListeners",value:function(){this._config.keyboard&&a(this._element).on(q.KEYDOWN,a.proxy(this._keydown,this)),"hover"!==this._config.pause||"ontouchstart"in document.documentElement||a(this._element).on(q.MOUSEENTER,a.proxy(this.pause,this)).on(q.MOUSELEAVE,a.proxy(this.cycle,this))}},{key:"_keydown",value:function(a){if(a.preventDefault(),!/input|textarea/i.test(a.target.tagName))switch(a.which){case l:this.prev();break;case m:this.next();break;default:return}}},{key:"_getItemIndex",value:function(b){return this._items=a.makeArray(a(b).parent().find(s.ITEM)),this._items.indexOf(b)}},{key:"_getItemByDirection",value:function(a,b){var c=a===p.NEXT,d=a===p.PREVIOUS,e=this._getItemIndex(b),f=this._items.length-1,g=d&&0===e||c&&e===f;if(g&&!this._config.wrap)return b;var h=a===p.PREVIOUS?-1:1,i=(e+h)%this._items.length;return i===-1?this._items[this._items.length-1]:this._items[i]}},{key:"_triggerSlideEvent",value:function(b,c){var d=a.Event(q.SLIDE,{relatedTarget:b,direction:c});return a(this._element).trigger(d),d}},{key:"_setActiveIndicatorElement",value:function(b){if(this._indicatorsElement){a(this._indicatorsElement).find(s.ACTIVE).removeClass(r.ACTIVE);var c=this._indicatorsElement.children[this._getItemIndex(b)];c&&a(c).addClass(r.ACTIVE)}}},{key:"_slide",value:function(b,c){var d=this,e=a(this._element).find(s.ACTIVE_ITEM)[0],g=c||e&&this._getItemByDirection(b,e),h=Boolean(this._interval),i=b===p.NEXT?r.LEFT:r.RIGHT;if(g&&a(g).hasClass(r.ACTIVE))return void(this._isSliding=!1);var j=this._triggerSlideEvent(g,i);if(!j.isDefaultPrevented()&&e&&g){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(g);var l=a.Event(q.SLID,{relatedTarget:g,direction:i});f.supportsTransitionEnd()&&a(this._element).hasClass(r.SLIDE)?(a(g).addClass(b),f.reflow(g),a(e).addClass(i),a(g).addClass(i),a(e).one(f.TRANSITION_END,function(){a(g).removeClass(i).removeClass(b),a(g).addClass(r.ACTIVE),a(e).removeClass(r.ACTIVE).removeClass(b).removeClass(i),d._isSliding=!1,setTimeout(function(){return a(d._element).trigger(l)},0)}).emulateTransitionEnd(k)):(a(e).removeClass(r.ACTIVE),a(g).addClass(r.ACTIVE),this._isSliding=!1,a(this._element).trigger(l)),h&&this.cycle()}}}],[{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this).data(g),d=a.extend({},n,a(this).data());"object"==typeof b&&a.extend(d,b);var e="string"==typeof b?b:d.slide;if(c||(c=new i(this,d),a(this).data(g,c)),"number"==typeof b)c.to(b);else if("string"==typeof e){if(void 0===c[e])throw new Error('No method named "'+e+'"');c[e]()}else d.interval&&(c.pause(),c.cycle())})}},{key:"_dataApiClickHandler",value:function(b){var c=f.getSelectorFromElement(this);if(c){var d=a(c)[0];if(d&&a(d).hasClass(r.CAROUSEL)){var e=a.extend({},a(d).data(),a(this).data()),h=this.getAttribute("data-slide-to");h&&(e.interval=!1),i._jQueryInterface.call(a(d),e),h&&a(d).data(g).to(h),b.preventDefault()}}}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return n}}]),i}();return a(document).on(q.CLICK_DATA_API,s.DATA_SLIDE,t._dataApiClickHandler),a(window).on(q.LOAD_DATA_API,function(){a(s.DATA_RIDE).each(function(){var b=a(this);t._jQueryInterface.call(b,b.data())})}),a.fn[b]=t._jQueryInterface,a.fn[b].Constructor=t,a.fn[b].noConflict=function(){return a.fn[b]=j,t._jQueryInterface},t}(jQuery),function(a){var b="collapse",d="4.0.0-alpha.4",g="bs.collapse",h="."+g,i=".data-api",j=a.fn[b],k=600,l={toggle:!0,parent:""},m={toggle:"boolean",parent:"string"},n={SHOW:"show"+h,SHOWN:"shown"+h,HIDE:"hide"+h,HIDDEN:"hidden"+h,CLICK_DATA_API:"click"+h+i},o={IN:"in",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},p={WIDTH:"width",HEIGHT:"height"},q={ACTIVES:".panel > .in, .panel > .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},r=function(){function h(b,d){c(this,h),this._isTransitioning=!1,this._element=b,this._config=this._getConfig(d),this._triggerArray=a.makeArray(a('[data-toggle="collapse"][href="#'+b.id+'"],'+('[data-toggle="collapse"][data-target="#'+b.id+'"]'))),this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}return e(h,[{key:"toggle",value:function(){a(this._element).hasClass(o.IN)?this.hide():this.show()}},{key:"show",value:function(){var b=this;if(!this._isTransitioning&&!a(this._element).hasClass(o.IN)){var c=void 0,d=void 0;if(this._parent&&(c=a.makeArray(a(q.ACTIVES)),c.length||(c=null)),!(c&&(d=a(c).data(g),d&&d._isTransitioning))){var e=a.Event(n.SHOW);if(a(this._element).trigger(e),!e.isDefaultPrevented()){c&&(h._jQueryInterface.call(a(c),"hide"),d||a(c).data(g,null));var i=this._getDimension();a(this._element).removeClass(o.COLLAPSE).addClass(o.COLLAPSING),this._element.style[i]=0,this._element.setAttribute("aria-expanded",!0),this._triggerArray.length&&a(this._triggerArray).removeClass(o.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var j=function(){a(b._element).removeClass(o.COLLAPSING).addClass(o.COLLAPSE).addClass(o.IN),b._element.style[i]="",b.setTransitioning(!1),a(b._element).trigger(n.SHOWN)};if(!f.supportsTransitionEnd())return void j();var l=i[0].toUpperCase()+i.slice(1),m="scroll"+l;a(this._element).one(f.TRANSITION_END,j).emulateTransitionEnd(k),this._element.style[i]=this._element[m]+"px"}}}}},{key:"hide",value:function(){var b=this;if(!this._isTransitioning&&a(this._element).hasClass(o.IN)){var c=a.Event(n.HIDE);if(a(this._element).trigger(c),!c.isDefaultPrevented()){var d=this._getDimension(),e=d===p.WIDTH?"offsetWidth":"offsetHeight";this._element.style[d]=this._element[e]+"px",f.reflow(this._element),a(this._element).addClass(o.COLLAPSING).removeClass(o.COLLAPSE).removeClass(o.IN),this._element.setAttribute("aria-expanded",!1),this._triggerArray.length&&a(this._triggerArray).addClass(o.COLLAPSED).attr("aria-expanded",!1),this.setTransitioning(!0);var g=function(){b.setTransitioning(!1),a(b._element).removeClass(o.COLLAPSING).addClass(o.COLLAPSE).trigger(n.HIDDEN)};return this._element.style[d]=0,f.supportsTransitionEnd()?void a(this._element).one(f.TRANSITION_END,g).emulateTransitionEnd(k):void g()}}}},{key:"setTransitioning",value:function(a){this._isTransitioning=a}},{key:"dispose",value:function(){a.removeData(this._element,g),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null}},{key:"_getConfig",value:function(c){return c=a.extend({},l,c),c.toggle=Boolean(c.toggle),f.typeCheckConfig(b,c,m),c}},{key:"_getDimension",value:function(){var b=a(this._element).hasClass(p.WIDTH);return b?p.WIDTH:p.HEIGHT}},{key:"_getParent",value:function(){var b=this,c=a(this._config.parent)[0],d='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return a(c).find(d).each(function(a,c){b._addAriaAndCollapsedClass(h._getTargetFromElement(c),[c])}),c}},{key:"_addAriaAndCollapsedClass",value:function(b,c){if(b){var d=a(b).hasClass(o.IN);b.setAttribute("aria-expanded",d),c.length&&a(c).toggleClass(o.COLLAPSED,!d).attr("aria-expanded",d)}}}],[{key:"_getTargetFromElement",value:function(b){var c=f.getSelectorFromElement(b);return c?a(c)[0]:null}},{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this),d=c.data(g),e=a.extend({},l,c.data(),"object"==typeof b&&b);if(!d&&e.toggle&&/show|hide/.test(b)&&(e.toggle=!1),d||(d=new h(this,e),c.data(g,d)),"string"==typeof b){if(void 0===d[b])throw new Error('No method named "'+b+'"');d[b]()}})}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return l}}]),h}();return a(document).on(n.CLICK_DATA_API,q.DATA_TOGGLE,function(b){b.preventDefault();var c=r._getTargetFromElement(this),d=a(c).data(g),e=d?"toggle":a(this).data();r._jQueryInterface.call(a(c),e)}),a.fn[b]=r._jQueryInterface,a.fn[b].Constructor=r,a.fn[b].noConflict=function(){return a.fn[b]=j,r._jQueryInterface},r}(jQuery),function(a){var b="dropdown",d="4.0.0-alpha.4",g="bs.dropdown",h="."+g,i=".data-api",j=a.fn[b],k=27,l=38,m=40,n=3,o={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,CLICK:"click"+h,CLICK_DATA_API:"click"+h+i,KEYDOWN_DATA_API:"keydown"+h+i},p={BACKDROP:"dropdown-backdrop",DISABLED:"disabled",OPEN:"open"},q={BACKDROP:".dropdown-backdrop",DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",ROLE_MENU:'[role="menu"]',ROLE_LISTBOX:'[role="listbox"]',NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:'[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'},r=function(){function b(a){c(this,b),this._element=a,this._addEventListeners()}return e(b,[{key:"toggle",value:function(){if(this.disabled||a(this).hasClass(p.DISABLED))return!1;var c=b._getParentFromElement(this),d=a(c).hasClass(p.OPEN);if(b._clearMenus(),d)return!1;if("ontouchstart"in document.documentElement&&!a(c).closest(q.NAVBAR_NAV).length){var e=document.createElement("div");e.className=p.BACKDROP,a(e).insertBefore(this),a(e).on("click",b._clearMenus)}var f={relatedTarget:this},g=a.Event(o.SHOW,f);return a(c).trigger(g),!g.isDefaultPrevented()&&(this.focus(),this.setAttribute("aria-expanded","true"),a(c).toggleClass(p.OPEN),a(c).trigger(a.Event(o.SHOWN,f)),!1)}},{key:"dispose",value:function(){a.removeData(this._element,g),a(this._element).off(h),this._element=null}},{key:"_addEventListeners",value:function(){a(this._element).on(o.CLICK,this.toggle)}}],[{key:"_jQueryInterface",value:function(c){return this.each(function(){var d=a(this).data(g);if(d||a(this).data(g,d=new b(this)),"string"==typeof c){if(void 0===d[c])throw new Error('No method named "'+c+'"');d[c].call(this)}})}},{key:"_clearMenus",value:function(c){if(!c||c.which!==n){var d=a(q.BACKDROP)[0];d&&d.parentNode.removeChild(d);for(var e=a.makeArray(a(q.DATA_TOGGLE)),f=0;f<e.length;f++){var g=b._getParentFromElement(e[f]),h={relatedTarget:e[f]};if(a(g).hasClass(p.OPEN)&&!(c&&"click"===c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(g,c.target))){var i=a.Event(o.HIDE,h);a(g).trigger(i),i.isDefaultPrevented()||(e[f].setAttribute("aria-expanded","false"),a(g).removeClass(p.OPEN).trigger(a.Event(o.HIDDEN,h)))}}}}},{key:"_getParentFromElement",value:function(b){var c=void 0,d=f.getSelectorFromElement(b);return d&&(c=a(d)[0]),c||b.parentNode}},{key:"_dataApiKeydownHandler",value:function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)&&(c.preventDefault(),c.stopPropagation(),!this.disabled&&!a(this).hasClass(p.DISABLED))){var d=b._getParentFromElement(this),e=a(d).hasClass(p.OPEN);if(!e&&c.which!==k||e&&c.which===k){if(c.which===k){var f=a(d).find(q.DATA_TOGGLE)[0];a(f).trigger("focus")}return void a(this).trigger("click")}var g=a.makeArray(a(q.VISIBLE_ITEMS));if(g=g.filter(function(a){return a.offsetWidth||a.offsetHeight}),g.length){var h=g.indexOf(c.target);c.which===l&&h>0&&h--,c.which===m&&h<g.length-1&&h++,h<0&&(h=0),g[h].focus()}}}},{key:"VERSION",get:function(){return d}}]),b}();return a(document).on(o.KEYDOWN_DATA_API,q.DATA_TOGGLE,r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API,q.ROLE_MENU,r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API,q.ROLE_LISTBOX,r._dataApiKeydownHandler).on(o.CLICK_DATA_API,r._clearMenus).on(o.CLICK_DATA_API,q.DATA_TOGGLE,r.prototype.toggle).on(o.CLICK_DATA_API,q.FORM_CHILD,function(a){a.stopPropagation()}),a.fn[b]=r._jQueryInterface,a.fn[b].Constructor=r,a.fn[b].noConflict=function(){return a.fn[b]=j,r._jQueryInterface},r}(jQuery),function(a){var b="modal",d="4.0.0-alpha.4",g="bs.modal",h="."+g,i=".data-api",j=a.fn[b],k=300,l=150,m=27,n={backdrop:!0,keyboard:!0,focus:!0,show:!0},o={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},p={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,FOCUSIN:"focusin"+h,RESIZE:"resize"+h,CLICK_DISMISS:"click.dismiss"+h,KEYDOWN_DISMISS:"keydown.dismiss"+h,MOUSEUP_DISMISS:"mouseup.dismiss"+h,MOUSEDOWN_DISMISS:"mousedown.dismiss"+h,CLICK_DATA_API:"click"+h+i},q={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",IN:"in"},r={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"},s=function(){function i(b,d){c(this,i),this._config=this._getConfig(d),this._element=b,this._dialog=a(b).find(r.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}return e(i,[{key:"toggle",value:function(a){return this._isShown?this.hide():this.show(a)}},{key:"show",value:function(b){var c=this,d=a.Event(p.SHOW,{relatedTarget:b});a(this._element).trigger(d),this._isShown||d.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),a(document.body).addClass(q.OPEN),this._setEscapeEvent(),this._setResizeEvent(),a(this._element).on(p.CLICK_DISMISS,r.DATA_DISMISS,a.proxy(this.hide,this)),a(this._dialog).on(p.MOUSEDOWN_DISMISS,function(){a(c._element).one(p.MOUSEUP_DISMISS,function(b){a(b.target).is(c._element)&&(c._ignoreBackdropClick=!0)})}),this._showBackdrop(a.proxy(this._showElement,this,b)))}},{key:"hide",value:function(b){b&&b.preventDefault();var c=a.Event(p.HIDE);a(this._element).trigger(c),this._isShown&&!c.isDefaultPrevented()&&(this._isShown=!1,this._setEscapeEvent(),this._setResizeEvent(),a(document).off(p.FOCUSIN),a(this._element).removeClass(q.IN),a(this._element).off(p.CLICK_DISMISS),a(this._dialog).off(p.MOUSEDOWN_DISMISS),f.supportsTransitionEnd()&&a(this._element).hasClass(q.FADE)?a(this._element).one(f.TRANSITION_END,a.proxy(this._hideModal,this)).emulateTransitionEnd(k):this._hideModal())}},{key:"dispose",value:function(){a.removeData(this._element,g),a(window).off(h),a(document).off(h),a(this._element).off(h),a(this._backdrop).off(h),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._originalBodyPadding=null,this._scrollbarWidth=null}},{key:"_getConfig",value:function(c){return c=a.extend({},n,c),f.typeCheckConfig(b,c,o),c}},{key:"_showElement",value:function(b){var c=this,d=f.supportsTransitionEnd()&&a(this._element).hasClass(q.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,d&&f.reflow(this._element),a(this._element).addClass(q.IN),this._config.focus&&this._enforceFocus();var e=a.Event(p.SHOWN,{relatedTarget:b}),g=function(){c._config.focus&&c._element.focus(),a(c._element).trigger(e)};d?a(this._dialog).one(f.TRANSITION_END,g).emulateTransitionEnd(k):g()}},{key:"_enforceFocus",value:function(){var b=this;a(document).off(p.FOCUSIN).on(p.FOCUSIN,function(c){document===c.target||b._element===c.target||a(b._element).has(c.target).length||b._element.focus()})}},{key:"_setEscapeEvent",value:function(){var b=this;this._isShown&&this._config.keyboard?a(this._element).on(p.KEYDOWN_DISMISS,function(a){a.which===m&&b.hide()}):this._isShown||a(this._element).off(p.KEYDOWN_DISMISS)}},{key:"_setResizeEvent",value:function(){this._isShown?a(window).on(p.RESIZE,a.proxy(this._handleUpdate,this)):a(window).off(p.RESIZE)}},{key:"_hideModal",value:function(){var b=this;this._element.style.display="none",this._element.setAttribute("aria-hidden","true"),this._showBackdrop(function(){a(document.body).removeClass(q.OPEN),b._resetAdjustments(),b._resetScrollbar(),a(b._element).trigger(p.HIDDEN)})}},{key:"_removeBackdrop",value:function(){this._backdrop&&(a(this._backdrop).remove(),this._backdrop=null)}},{key:"_showBackdrop",value:function(b){var c=this,d=a(this._element).hasClass(q.FADE)?q.FADE:"";if(this._isShown&&this._config.backdrop){var e=f.supportsTransitionEnd()&&d;if(this._backdrop=document.createElement("div"),this._backdrop.className=q.BACKDROP,d&&a(this._backdrop).addClass(d),a(this._backdrop).appendTo(document.body),a(this._element).on(p.CLICK_DISMISS,function(a){return c._ignoreBackdropClick?void(c._ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"===c._config.backdrop?c._element.focus():c.hide()))}),e&&f.reflow(this._backdrop),a(this._backdrop).addClass(q.IN),!b)return;if(!e)return void b();a(this._backdrop).one(f.TRANSITION_END,b).emulateTransitionEnd(l)}else if(!this._isShown&&this._backdrop){a(this._backdrop).removeClass(q.IN);var g=function(){c._removeBackdrop(),b&&b()};f.supportsTransitionEnd()&&a(this._element).hasClass(q.FADE)?a(this._backdrop).one(f.TRANSITION_END,g).emulateTransitionEnd(l):g()}else b&&b()}},{key:"_handleUpdate",value:function(){this._adjustDialog()}},{key:"_adjustDialog",value:function(){var a=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&a&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!a&&(this._element.style.paddingRight=this._scrollbarWidth+"px")}},{key:"_resetAdjustments",value:function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}},{key:"_checkScrollbar",value:function(){this._isBodyOverflowing=document.body.clientWidth<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()}},{key:"_setScrollbar",value:function(){var b=parseInt(a(r.FIXED_CONTENT).css("padding-right")||0,10);this._originalBodyPadding=document.body.style.paddingRight||"",this._isBodyOverflowing&&(document.body.style.paddingRight=b+this._scrollbarWidth+"px")}},{key:"_resetScrollbar",value:function(){document.body.style.paddingRight=this._originalBodyPadding}},{key:"_getScrollbarWidth",value:function(){var a=document.createElement("div");a.className=q.SCROLLBAR_MEASURER,document.body.appendChild(a);var b=a.offsetWidth-a.clientWidth;return document.body.removeChild(a),b}}],[{key:"_jQueryInterface",value:function(b,c){return this.each(function(){var d=a(this).data(g),e=a.extend({},i.Default,a(this).data(),"object"==typeof b&&b);if(d||(d=new i(this,e),a(this).data(g,d)),"string"==typeof b){if(void 0===d[b])throw new Error('No method named "'+b+'"');d[b](c)}else e.show&&d.show(c)})}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return n}}]),i}();return a(document).on(p.CLICK_DATA_API,r.DATA_TOGGLE,function(b){var c=this,d=void 0,e=f.getSelectorFromElement(this);e&&(d=a(e)[0]);var h=a(d).data(g)?"toggle":a.extend({},a(d).data(),a(this).data());"A"===this.tagName&&b.preventDefault();var i=a(d).one(p.SHOW,function(b){b.isDefaultPrevented()||i.one(p.HIDDEN,function(){a(c).is(":visible")&&c.focus()})});s._jQueryInterface.call(a(d),h,this)}),a.fn[b]=s._jQueryInterface,a.fn[b].Constructor=s,a.fn[b].noConflict=function(){return a.fn[b]=j,s._jQueryInterface},s}(jQuery),function(a){var b="scrollspy",d="4.0.0-alpha.4",g="bs.scrollspy",h="."+g,i=".data-api",j=a.fn[b],k={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},m={ACTIVATE:"activate"+h,SCROLL:"scroll"+h,LOAD_DATA_API:"load"+h+i},n={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",NAV_LINK:"nav-link",NAV:"nav",ACTIVE:"active"},o={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",LIST_ITEM:".list-item",LI:"li",LI_DROPDOWN:"li.dropdown",NAV_LINKS:".nav-link",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},p={OFFSET:"offset",POSITION:"position"},q=function(){function i(b,d){c(this,i),this._element=b,this._scrollElement="BODY"===b.tagName?window:b,this._config=this._getConfig(d),this._selector=this._config.target+" "+o.NAV_LINKS+","+(this._config.target+" "+o.DROPDOWN_ITEMS),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,a(this._scrollElement).on(m.SCROLL,a.proxy(this._process,this)),this.refresh(),this._process()}return e(i,[{key:"refresh",value:function(){var b=this,c=this._scrollElement!==this._scrollElement.window?p.POSITION:p.OFFSET,d="auto"===this._config.method?c:this._config.method,e=d===p.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();var g=a.makeArray(a(this._selector));g.map(function(b){var c=void 0,g=f.getSelectorFromElement(b);return g&&(c=a(g)[0]),c&&(c.offsetWidth||c.offsetHeight)?[a(c)[d]().top+e,g]:null}).filter(function(a){return a}).sort(function(a,b){return a[0]-b[0]}).forEach(function(a){b._offsets.push(a[0]),b._targets.push(a[1])})}},{key:"dispose",value:function(){a.removeData(this._element,g),a(this._scrollElement).off(h),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null}},{key:"_getConfig",value:function(c){if(c=a.extend({},k,c),"string"!=typeof c.target){var d=a(c.target).attr("id");d||(d=f.getUID(b),a(c.target).attr("id",d)),c.target="#"+d}return f.typeCheckConfig(b,c,l),c}},{key:"_getScrollTop",value:function(){return this._scrollElement===window?this._scrollElement.scrollY:this._scrollElement.scrollTop}},{key:"_getScrollHeight",value:function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}},{key:"_process",value:function(){var a=this._getScrollTop()+this._config.offset,b=this._getScrollHeight(),c=this._config.offset+b-this._scrollElement.offsetHeight;if(this._scrollHeight!==b&&this.refresh(),a>=c){var d=this._targets[this._targets.length-1];this._activeTarget!==d&&this._activate(d)}if(this._activeTarget&&a<this._offsets[0])return this._activeTarget=null,void this._clear();for(var e=this._offsets.length;e--;){var f=this._activeTarget!==this._targets[e]&&a>=this._offsets[e]&&(void 0===this._offsets[e+1]||a<this._offsets[e+1]);f&&this._activate(this._targets[e])}}},{key:"_activate",value:function(b){this._activeTarget=b,this._clear();var c=this._selector.split(",");c=c.map(function(a){return a+'[data-target="'+b+'"],'+(a+'[href="'+b+'"]')});var d=a(c.join(","));d.hasClass(n.DROPDOWN_ITEM)?(d.closest(o.DROPDOWN).find(o.DROPDOWN_TOGGLE).addClass(n.ACTIVE),d.addClass(n.ACTIVE)):d.parents(o.LI).find(o.NAV_LINKS).addClass(n.ACTIVE),a(this._scrollElement).trigger(m.ACTIVATE,{relatedTarget:b})}},{key:"_clear",value:function(){a(this._selector).filter(o.ACTIVE).removeClass(n.ACTIVE)}}],[{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this).data(g),d="object"==typeof b&&b||null;if(c||(c=new i(this,d),a(this).data(g,c)),"string"==typeof b){if(void 0===c[b])throw new Error('No method named "'+b+'"');c[b]()}})}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return k}}]),i}();return a(window).on(m.LOAD_DATA_API,function(){for(var b=a.makeArray(a(o.DATA_SPY)),c=b.length;c--;){var d=a(b[c]);q._jQueryInterface.call(d,d.data())}}),a.fn[b]=q._jQueryInterface,a.fn[b].Constructor=q,a.fn[b].noConflict=function(){return a.fn[b]=j,q._jQueryInterface},q}(jQuery),function(a){var b="tab",d="4.0.0-alpha.4",g="bs.tab",h="."+g,i=".data-api",j=a.fn[b],k=150,l={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,CLICK_DATA_API:"click"+h+i},m={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",FADE:"fade",IN:"in"},n={A:"a",LI:"li",DROPDOWN:".dropdown",UL:"ul:not(.dropdown-menu)",FADE_CHILD:"> .nav-item .fade, > .fade",
	ACTIVE:".active",ACTIVE_CHILD:"> .nav-item > .active, > .active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},o=function(){function b(a){c(this,b),this._element=a}return e(b,[{key:"show",value:function(){var b=this;if(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE||!a(this._element).hasClass(m.ACTIVE)){var c=void 0,d=void 0,e=a(this._element).closest(n.UL)[0],g=f.getSelectorFromElement(this._element);e&&(d=a.makeArray(a(e).find(n.ACTIVE)),d=d[d.length-1]);var h=a.Event(l.HIDE,{relatedTarget:this._element}),i=a.Event(l.SHOW,{relatedTarget:d});if(d&&a(d).trigger(h),a(this._element).trigger(i),!i.isDefaultPrevented()&&!h.isDefaultPrevented()){g&&(c=a(g)[0]),this._activate(this._element,e);var j=function(){var c=a.Event(l.HIDDEN,{relatedTarget:b._element}),e=a.Event(l.SHOWN,{relatedTarget:d});a(d).trigger(c),a(b._element).trigger(e)};c?this._activate(c,c.parentNode,j):j()}}}},{key:"dispose",value:function(){a.removeClass(this._element,g),this._element=null}},{key:"_activate",value:function(b,c,d){var e=a(c).find(n.ACTIVE_CHILD)[0],g=d&&f.supportsTransitionEnd()&&(e&&a(e).hasClass(m.FADE)||Boolean(a(c).find(n.FADE_CHILD)[0])),h=a.proxy(this._transitionComplete,this,b,e,g,d);e&&g?a(e).one(f.TRANSITION_END,h).emulateTransitionEnd(k):h(),e&&a(e).removeClass(m.IN)}},{key:"_transitionComplete",value:function(b,c,d,e){if(c){a(c).removeClass(m.ACTIVE);var g=a(c).find(n.DROPDOWN_ACTIVE_CHILD)[0];g&&a(g).removeClass(m.ACTIVE),c.setAttribute("aria-expanded",!1)}if(a(b).addClass(m.ACTIVE),b.setAttribute("aria-expanded",!0),d?(f.reflow(b),a(b).addClass(m.IN)):a(b).removeClass(m.FADE),b.parentNode&&a(b.parentNode).hasClass(m.DROPDOWN_MENU)){var h=a(b).closest(n.DROPDOWN)[0];h&&a(h).find(n.DROPDOWN_TOGGLE).addClass(m.ACTIVE),b.setAttribute("aria-expanded",!0)}e&&e()}}],[{key:"_jQueryInterface",value:function(c){return this.each(function(){var d=a(this),e=d.data(g);if(e||(e=e=new b(this),d.data(g,e)),"string"==typeof c){if(void 0===e[c])throw new Error('No method named "'+c+'"');e[c]()}})}},{key:"VERSION",get:function(){return d}}]),b}();return a(document).on(l.CLICK_DATA_API,n.DATA_TOGGLE,function(b){b.preventDefault(),o._jQueryInterface.call(a(this),"show")}),a.fn[b]=o._jQueryInterface,a.fn[b].Constructor=o,a.fn[b].noConflict=function(){return a.fn[b]=j,o._jQueryInterface},o}(jQuery),function(a){if(void 0===window.Tether)throw new Error("Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)");var b="tooltip",d="4.0.0-alpha.4",g="bs.tooltip",h="."+g,i=a.fn[b],j=150,k="bs-tether",l={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:"0 0",constraints:[]},m={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"string",constraints:"array"},n={TOP:"bottom center",RIGHT:"middle left",BOTTOM:"top center",LEFT:"middle right"},o={IN:"in",OUT:"out"},p={HIDE:"hide"+h,HIDDEN:"hidden"+h,SHOW:"show"+h,SHOWN:"shown"+h,INSERTED:"inserted"+h,CLICK:"click"+h,FOCUSIN:"focusin"+h,FOCUSOUT:"focusout"+h,MOUSEENTER:"mouseenter"+h,MOUSELEAVE:"mouseleave"+h},q={FADE:"fade",IN:"in"},r={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner"},s={element:!1,enabled:!1},t={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},u=function(){function i(a,b){c(this,i),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._tether=null,this.element=a,this.config=this._getConfig(b),this.tip=null,this._setListeners()}return e(i,[{key:"enable",value:function(){this._isEnabled=!0}},{key:"disable",value:function(){this._isEnabled=!1}},{key:"toggleEnabled",value:function(){this._isEnabled=!this._isEnabled}},{key:"toggle",value:function(b){if(b){var c=this.constructor.DATA_KEY,d=a(b.currentTarget).data(c);d||(d=new this.constructor(b.currentTarget,this._getDelegateConfig()),a(b.currentTarget).data(c,d)),d._activeTrigger.click=!d._activeTrigger.click,d._isWithActiveTrigger()?d._enter(null,d):d._leave(null,d)}else{if(a(this.getTipElement()).hasClass(q.IN))return void this._leave(null,this);this._enter(null,this)}}},{key:"dispose",value:function(){clearTimeout(this._timeout),this.cleanupTether(),a.removeData(this.element,this.constructor.DATA_KEY),a(this.element).off(this.constructor.EVENT_KEY),this.tip&&a(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._tether=null,this.element=null,this.config=null,this.tip=null}},{key:"show",value:function(){var b=this,c=a.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){a(this.element).trigger(c);var d=a.contains(this.element.ownerDocument.documentElement,this.element);if(c.isDefaultPrevented()||!d)return;var e=this.getTipElement(),g=f.getUID(this.constructor.NAME);e.setAttribute("id",g),this.element.setAttribute("aria-describedby",g),this.setContent(),this.config.animation&&a(e).addClass(q.FADE);var h="function"==typeof this.config.placement?this.config.placement.call(this,e,this.element):this.config.placement,j=this._getAttachment(h);a(e).data(this.constructor.DATA_KEY,this).appendTo(document.body),a(this.element).trigger(this.constructor.Event.INSERTED),this._tether=new Tether({attachment:j,element:e,target:this.element,classes:s,classPrefix:k,offset:this.config.offset,constraints:this.config.constraints,addTargetClasses:!1}),f.reflow(e),this._tether.position(),a(e).addClass(q.IN);var l=function(){var c=b._hoverState;b._hoverState=null,a(b.element).trigger(b.constructor.Event.SHOWN),c===o.OUT&&b._leave(null,b)};if(f.supportsTransitionEnd()&&a(this.tip).hasClass(q.FADE))return void a(this.tip).one(f.TRANSITION_END,l).emulateTransitionEnd(i._TRANSITION_DURATION);l()}}},{key:"hide",value:function(b){var c=this,d=this.getTipElement(),e=a.Event(this.constructor.Event.HIDE),g=function(){c._hoverState!==o.IN&&d.parentNode&&d.parentNode.removeChild(d),c.element.removeAttribute("aria-describedby"),a(c.element).trigger(c.constructor.Event.HIDDEN),c.cleanupTether(),b&&b()};a(this.element).trigger(e),e.isDefaultPrevented()||(a(d).removeClass(q.IN),f.supportsTransitionEnd()&&a(this.tip).hasClass(q.FADE)?a(d).one(f.TRANSITION_END,g).emulateTransitionEnd(j):g(),this._hoverState="")}},{key:"isWithContent",value:function(){return Boolean(this.getTitle())}},{key:"getTipElement",value:function(){return this.tip=this.tip||a(this.config.template)[0]}},{key:"setContent",value:function(){var b=a(this.getTipElement());this.setElementContent(b.find(r.TOOLTIP_INNER),this.getTitle()),b.removeClass(q.FADE).removeClass(q.IN),this.cleanupTether()}},{key:"setElementContent",value:function(b,c){var d=this.config.html;"object"==typeof c&&(c.nodeType||c.jquery)?d?a(c).parent().is(b)||b.empty().append(c):b.text(a(c).text()):b[d?"html":"text"](c)}},{key:"getTitle",value:function(){var a=this.element.getAttribute("data-original-title");return a||(a="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),a}},{key:"cleanupTether",value:function(){this._tether&&this._tether.destroy()}},{key:"_getAttachment",value:function(a){return n[a.toUpperCase()]}},{key:"_setListeners",value:function(){var b=this,c=this.config.trigger.split(" ");c.forEach(function(c){if("click"===c)a(b.element).on(b.constructor.Event.CLICK,b.config.selector,a.proxy(b.toggle,b));else if(c!==t.MANUAL){var d=c===t.HOVER?b.constructor.Event.MOUSEENTER:b.constructor.Event.FOCUSIN,e=c===t.HOVER?b.constructor.Event.MOUSELEAVE:b.constructor.Event.FOCUSOUT;a(b.element).on(d,b.config.selector,a.proxy(b._enter,b)).on(e,b.config.selector,a.proxy(b._leave,b))}}),this.config.selector?this.config=a.extend({},this.config,{trigger:"manual",selector:""}):this._fixTitle()}},{key:"_fixTitle",value:function(){var a=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==a)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))}},{key:"_enter",value:function(b,c){var d=this.constructor.DATA_KEY;return c=c||a(b.currentTarget).data(d),c||(c=new this.constructor(b.currentTarget,this._getDelegateConfig()),a(b.currentTarget).data(d,c)),b&&(c._activeTrigger["focusin"===b.type?t.FOCUS:t.HOVER]=!0),a(c.getTipElement()).hasClass(q.IN)||c._hoverState===o.IN?void(c._hoverState=o.IN):(clearTimeout(c._timeout),c._hoverState=o.IN,c.config.delay&&c.config.delay.show?void(c._timeout=setTimeout(function(){c._hoverState===o.IN&&c.show()},c.config.delay.show)):void c.show())}},{key:"_leave",value:function(b,c){var d=this.constructor.DATA_KEY;if(c=c||a(b.currentTarget).data(d),c||(c=new this.constructor(b.currentTarget,this._getDelegateConfig()),a(b.currentTarget).data(d,c)),b&&(c._activeTrigger["focusout"===b.type?t.FOCUS:t.HOVER]=!1),!c._isWithActiveTrigger())return clearTimeout(c._timeout),c._hoverState=o.OUT,c.config.delay&&c.config.delay.hide?void(c._timeout=setTimeout(function(){c._hoverState===o.OUT&&c.hide()},c.config.delay.hide)):void c.hide()}},{key:"_isWithActiveTrigger",value:function(){for(var a in this._activeTrigger)if(this._activeTrigger[a])return!0;return!1}},{key:"_getConfig",value:function(c){return c=a.extend({},this.constructor.Default,a(this.element).data(),c),c.delay&&"number"==typeof c.delay&&(c.delay={show:c.delay,hide:c.delay}),f.typeCheckConfig(b,c,this.constructor.DefaultType),c}},{key:"_getDelegateConfig",value:function(){var a={};if(this.config)for(var b in this.config)this.constructor.Default[b]!==this.config[b]&&(a[b]=this.config[b]);return a}}],[{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this).data(g),d="object"==typeof b?b:null;if((c||!/destroy|hide/.test(b))&&(c||(c=new i(this,d),a(this).data(g,c)),"string"==typeof b)){if(void 0===c[b])throw new Error('No method named "'+b+'"');c[b]()}})}},{key:"VERSION",get:function(){return d}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return b}},{key:"DATA_KEY",get:function(){return g}},{key:"Event",get:function(){return p}},{key:"EVENT_KEY",get:function(){return h}},{key:"DefaultType",get:function(){return m}}]),i}();return a.fn[b]=u._jQueryInterface,a.fn[b].Constructor=u,a.fn[b].noConflict=function(){return a.fn[b]=i,u._jQueryInterface},u}(jQuery));(function(a){var f="popover",h="4.0.0-alpha.4",i="bs.popover",j="."+i,k=a.fn[f],l=a.extend({},g.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),m=a.extend({},g.DefaultType,{content:"(string|element|function)"}),n={FADE:"fade",IN:"in"},o={TITLE:".popover-title",CONTENT:".popover-content",ARROW:".popover-arrow"},p={HIDE:"hide"+j,HIDDEN:"hidden"+j,SHOW:"show"+j,SHOWN:"shown"+j,INSERTED:"inserted"+j,CLICK:"click"+j,FOCUSIN:"focusin"+j,FOCUSOUT:"focusout"+j,MOUSEENTER:"mouseenter"+j,MOUSELEAVE:"mouseleave"+j},q=function(g){function k(){c(this,k),d(Object.getPrototypeOf(k.prototype),"constructor",this).apply(this,arguments)}return b(k,g),e(k,[{key:"isWithContent",value:function(){return this.getTitle()||this._getContent()}},{key:"getTipElement",value:function(){return this.tip=this.tip||a(this.config.template)[0]}},{key:"setContent",value:function(){var b=a(this.getTipElement());this.setElementContent(b.find(o.TITLE),this.getTitle()),this.setElementContent(b.find(o.CONTENT),this._getContent()),b.removeClass(n.FADE).removeClass(n.IN),this.cleanupTether()}},{key:"_getContent",value:function(){return this.element.getAttribute("data-content")||("function"==typeof this.config.content?this.config.content.call(this.element):this.config.content)}}],[{key:"_jQueryInterface",value:function(b){return this.each(function(){var c=a(this).data(i),d="object"==typeof b?b:null;if((c||!/destroy|hide/.test(b))&&(c||(c=new k(this,d),a(this).data(i,c)),"string"==typeof b)){if(void 0===c[b])throw new Error('No method named "'+b+'"');c[b]()}})}},{key:"VERSION",get:function(){return h}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return f}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return p}},{key:"EVENT_KEY",get:function(){return j}},{key:"DefaultType",get:function(){return m}}]),k}(g);return a.fn[f]=q._jQueryInterface,a.fn[f].Constructor=q,a.fn[f].noConflict=function(){return a.fn[f]=k,q._jQueryInterface},q})(jQuery)}(jQuery);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(){window.flexibility={},Array.prototype.forEach||(Array.prototype.forEach=function(t){if(void 0===this||null===this)throw new TypeError(this+"is not an object");if(!(t instanceof Function))throw new TypeError(t+" is not a function");for(var e=Object(this),i=arguments[1],n=e instanceof String?e.split(""):e,r=Math.max(Math.min(n.length,9007199254740991),0)||0,o=-1;++o<r;)o in n&&t.call(i,n[o],o,e)}),function(t,e){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=e():t.computeLayout=e()}(flexibility,function(){var t=function(){function t(e){if((!e.layout||e.isDirty)&&(e.layout={width:void 0,height:void 0,top:0,left:0,right:0,bottom:0}),e.style||(e.style={}),e.children||(e.children=[]),e.style.measure&&e.children&&e.children.length)throw new Error("Using custom measure function is supported only for leaf nodes.");return e.children.forEach(t),e}function e(t){return void 0===t}function i(t){return t===q||t===G}function n(t){return t===U||t===Z}function r(t,e){if(void 0!==t.style.marginStart&&i(e))return t.style.marginStart;var n=null;switch(e){case"row":n=t.style.marginLeft;break;case"row-reverse":n=t.style.marginRight;break;case"column":n=t.style.marginTop;break;case"column-reverse":n=t.style.marginBottom}return void 0!==n?n:void 0!==t.style.margin?t.style.margin:0}function o(t,e){if(void 0!==t.style.marginEnd&&i(e))return t.style.marginEnd;var n=null;switch(e){case"row":n=t.style.marginRight;break;case"row-reverse":n=t.style.marginLeft;break;case"column":n=t.style.marginBottom;break;case"column-reverse":n=t.style.marginTop}return null!=n?n:void 0!==t.style.margin?t.style.margin:0}function l(t,e){if(void 0!==t.style.paddingStart&&t.style.paddingStart>=0&&i(e))return t.style.paddingStart;var n=null;switch(e){case"row":n=t.style.paddingLeft;break;case"row-reverse":n=t.style.paddingRight;break;case"column":n=t.style.paddingTop;break;case"column-reverse":n=t.style.paddingBottom}return null!=n&&n>=0?n:void 0!==t.style.padding&&t.style.padding>=0?t.style.padding:0}function a(t,e){if(void 0!==t.style.paddingEnd&&t.style.paddingEnd>=0&&i(e))return t.style.paddingEnd;var n=null;switch(e){case"row":n=t.style.paddingRight;break;case"row-reverse":n=t.style.paddingLeft;break;case"column":n=t.style.paddingBottom;break;case"column-reverse":n=t.style.paddingTop}return null!=n&&n>=0?n:void 0!==t.style.padding&&t.style.padding>=0?t.style.padding:0}function d(t,e){if(void 0!==t.style.borderStartWidth&&t.style.borderStartWidth>=0&&i(e))return t.style.borderStartWidth;var n=null;switch(e){case"row":n=t.style.borderLeftWidth;break;case"row-reverse":n=t.style.borderRightWidth;break;case"column":n=t.style.borderTopWidth;break;case"column-reverse":n=t.style.borderBottomWidth}return null!=n&&n>=0?n:void 0!==t.style.borderWidth&&t.style.borderWidth>=0?t.style.borderWidth:0}function s(t,e){if(void 0!==t.style.borderEndWidth&&t.style.borderEndWidth>=0&&i(e))return t.style.borderEndWidth;var n=null;switch(e){case"row":n=t.style.borderRightWidth;break;case"row-reverse":n=t.style.borderLeftWidth;break;case"column":n=t.style.borderBottomWidth;break;case"column-reverse":n=t.style.borderTopWidth}return null!=n&&n>=0?n:void 0!==t.style.borderWidth&&t.style.borderWidth>=0?t.style.borderWidth:0}function u(t,e){return l(t,e)+d(t,e)}function y(t,e){return a(t,e)+s(t,e)}function c(t,e){return d(t,e)+s(t,e)}function f(t,e){return r(t,e)+o(t,e)}function h(t,e){return u(t,e)+y(t,e)}function m(t){return t.style.justifyContent?t.style.justifyContent:"flex-start"}function v(t){return t.style.alignContent?t.style.alignContent:"flex-start"}function p(t,e){return e.style.alignSelf?e.style.alignSelf:t.style.alignItems?t.style.alignItems:"stretch"}function x(t,e){if(e===N){if(t===q)return G;if(t===G)return q}return t}function g(t,e){var i;return i=t.style.direction?t.style.direction:M,i===M&&(i=void 0===e?A:e),i}function b(t){return t.style.flexDirection?t.style.flexDirection:U}function w(t,e){return n(t)?x(q,e):U}function W(t){return t.style.position?t.style.position:"relative"}function L(t){return W(t)===tt&&t.style.flex>0}function E(t){return"wrap"===t.style.flexWrap}function S(t,e){return t.layout[ot[e]]+f(t,e)}function k(t,e){return void 0!==t.style[ot[e]]&&t.style[ot[e]]>=0}function C(t,e){return void 0!==t.style[e]}function T(t){return void 0!==t.style.measure}function H(t,e){return void 0!==t.style[e]?t.style[e]:0}function $(t,e,i){var n={row:t.style.minWidth,"row-reverse":t.style.minWidth,column:t.style.minHeight,"column-reverse":t.style.minHeight}[e],r={row:t.style.maxWidth,"row-reverse":t.style.maxWidth,column:t.style.maxHeight,"column-reverse":t.style.maxHeight}[e],o=i;return void 0!==r&&r>=0&&o>r&&(o=r),void 0!==n&&n>=0&&n>o&&(o=n),o}function z(t,e){return t>e?t:e}function B(t,e){void 0===t.layout[ot[e]]&&k(t,e)&&(t.layout[ot[e]]=z($(t,e,t.style[ot[e]]),h(t,e)))}function D(t,e,i){e.layout[nt[i]]=t.layout[ot[i]]-e.layout[ot[i]]-e.layout[rt[i]]}function I(t,e){return void 0!==t.style[it[e]]?H(t,it[e]):-H(t,nt[e])}function R(t,n,l,a){var s=g(t,a),R=x(b(t),s),M=w(R,s),A=x(q,s);B(t,R),B(t,M),t.layout.direction=s,t.layout[it[R]]+=r(t,R)+I(t,R),t.layout[nt[R]]+=o(t,R)+I(t,R),t.layout[it[M]]+=r(t,M)+I(t,M),t.layout[nt[M]]+=o(t,M)+I(t,M);var N=t.children.length,lt=h(t,A),at=h(t,U);if(T(t)){var dt=!e(t.layout[ot[A]]),st=F;st=k(t,A)?t.style.width:dt?t.layout[ot[A]]:n-f(t,A),st-=lt;var ut=F;ut=k(t,U)?t.style.height:e(t.layout[ot[U]])?l-f(t,A):t.layout[ot[U]],ut-=h(t,U);var yt=!k(t,A)&&!dt,ct=!k(t,U)&&e(t.layout[ot[U]]);if(yt||ct){var ft=t.style.measure(st,ut);yt&&(t.layout.width=ft.width+lt),ct&&(t.layout.height=ft.height+at)}if(0===N)return}var ht,mt,vt,pt,xt=E(t),gt=m(t),bt=u(t,R),wt=u(t,M),Wt=h(t,R),Lt=h(t,M),Et=!e(t.layout[ot[R]]),St=!e(t.layout[ot[M]]),kt=i(R),Ct=null,Tt=null,Ht=F;Et&&(Ht=t.layout[ot[R]]-Wt);for(var $t=0,zt=0,Bt=0,Dt=0,It=0,Rt=0;N>zt;){var jt,Ft,Mt=0,At=0,Nt=0,qt=0,Gt=Et&&gt===O||!Et&&gt!==_,Ut=Gt?N:$t,Zt=!0,Ot=N,_t=null,Jt=null,Kt=bt,Pt=0;for(ht=$t;N>ht;++ht){vt=t.children[ht],vt.lineIndex=Rt,vt.nextAbsoluteChild=null,vt.nextFlexChild=null;var Qt=p(t,vt);if(Qt===Y&&W(vt)===tt&&St&&!k(vt,M))vt.layout[ot[M]]=z($(vt,M,t.layout[ot[M]]-Lt-f(vt,M)),h(vt,M));else if(W(vt)===et)for(null===Ct&&(Ct=vt),null!==Tt&&(Tt.nextAbsoluteChild=vt),Tt=vt,mt=0;2>mt;mt++)pt=0!==mt?q:U,!e(t.layout[ot[pt]])&&!k(vt,pt)&&C(vt,it[pt])&&C(vt,nt[pt])&&(vt.layout[ot[pt]]=z($(vt,pt,t.layout[ot[pt]]-h(t,pt)-f(vt,pt)-H(vt,it[pt])-H(vt,nt[pt])),h(vt,pt)));var Vt=0;if(Et&&L(vt)?(At++,Nt+=vt.style.flex,null===_t&&(_t=vt),null!==Jt&&(Jt.nextFlexChild=vt),Jt=vt,Vt=h(vt,R)+f(vt,R)):(jt=F,Ft=F,kt?Ft=k(t,U)?t.layout[ot[U]]-at:l-f(t,U)-at:jt=k(t,A)?t.layout[ot[A]]-lt:n-f(t,A)-lt,0===Bt&&j(vt,jt,Ft,s),W(vt)===tt&&(qt++,Vt=S(vt,R))),xt&&Et&&Mt+Vt>Ht&&ht!==$t){qt--,Bt=1;break}Gt&&(W(vt)!==tt||L(vt))&&(Gt=!1,Ut=ht),Zt&&(W(vt)!==tt||Qt!==Y&&Qt!==Q||e(vt.layout[ot[M]]))&&(Zt=!1,Ot=ht),Gt&&(vt.layout[rt[R]]+=Kt,Et&&D(t,vt,R),Kt+=S(vt,R),Pt=z(Pt,$(vt,M,S(vt,M)))),Zt&&(vt.layout[rt[M]]+=Dt+wt,St&&D(t,vt,M)),Bt=0,Mt+=Vt,zt=ht+1}var Xt=0,Yt=0,te=0;if(te=Et?Ht-Mt:z(Mt,0)-Mt,0!==At){var ee,ie,ne=te/Nt;for(Jt=_t;null!==Jt;)ee=ne*Jt.style.flex+h(Jt,R),ie=$(Jt,R,ee),ee!==ie&&(te-=ie,Nt-=Jt.style.flex),Jt=Jt.nextFlexChild;for(ne=te/Nt,0>ne&&(ne=0),Jt=_t;null!==Jt;)Jt.layout[ot[R]]=$(Jt,R,ne*Jt.style.flex+h(Jt,R)),jt=F,k(t,A)?jt=t.layout[ot[A]]-lt:kt||(jt=n-f(t,A)-lt),Ft=F,k(t,U)?Ft=t.layout[ot[U]]-at:kt&&(Ft=l-f(t,U)-at),j(Jt,jt,Ft,s),vt=Jt,Jt=Jt.nextFlexChild,vt.nextFlexChild=null}else gt!==O&&(gt===_?Xt=te/2:gt===J?Xt=te:gt===K?(te=z(te,0),Yt=At+qt-1!==0?te/(At+qt-1):0):gt===P&&(Yt=te/(At+qt),Xt=Yt/2));for(Kt+=Xt,ht=Ut;zt>ht;++ht)vt=t.children[ht],W(vt)===et&&C(vt,it[R])?vt.layout[rt[R]]=H(vt,it[R])+d(t,R)+r(vt,R):(vt.layout[rt[R]]+=Kt,Et&&D(t,vt,R),W(vt)===tt&&(Kt+=Yt+S(vt,R),Pt=z(Pt,$(vt,M,S(vt,M)))));var re=t.layout[ot[M]];for(St||(re=z($(t,M,Pt+Lt),Lt)),ht=Ot;zt>ht;++ht)if(vt=t.children[ht],W(vt)===et&&C(vt,it[M]))vt.layout[rt[M]]=H(vt,it[M])+d(t,M)+r(vt,M);else{var oe=wt;if(W(vt)===tt){var Qt=p(t,vt);if(Qt===Y)e(vt.layout[ot[M]])&&(vt.layout[ot[M]]=z($(vt,M,re-Lt-f(vt,M)),h(vt,M)));else if(Qt!==Q){var le=re-Lt-S(vt,M);oe+=Qt===V?le/2:le}}vt.layout[rt[M]]+=Dt+oe,St&&D(t,vt,M)}Dt+=Pt,It=z(It,Kt),Rt+=1,$t=zt}if(Rt>1&&St){var ae=t.layout[ot[M]]-Lt,de=ae-Dt,se=0,ue=wt,ye=v(t);ye===X?ue+=de:ye===V?ue+=de/2:ye===Y&&ae>Dt&&(se=de/Rt);var ce=0;for(ht=0;Rt>ht;++ht){var fe=ce,he=0;for(mt=fe;N>mt;++mt)if(vt=t.children[mt],W(vt)===tt){if(vt.lineIndex!==ht)break;e(vt.layout[ot[M]])||(he=z(he,vt.layout[ot[M]]+f(vt,M)))}for(ce=mt,he+=se,mt=fe;ce>mt;++mt)if(vt=t.children[mt],W(vt)===tt){var me=p(t,vt);if(me===Q)vt.layout[rt[M]]=ue+r(vt,M);else if(me===X)vt.layout[rt[M]]=ue+he-o(vt,M)-vt.layout[ot[M]];else if(me===V){var ve=vt.layout[ot[M]];vt.layout[rt[M]]=ue+(he-ve)/2}else me===Y&&(vt.layout[rt[M]]=ue+r(vt,M))}ue+=he}}var pe=!1,xe=!1;if(Et||(t.layout[ot[R]]=z($(t,R,It+y(t,R)),Wt),(R===G||R===Z)&&(pe=!0)),St||(t.layout[ot[M]]=z($(t,M,Dt+Lt),Lt),(M===G||M===Z)&&(xe=!0)),pe||xe)for(ht=0;N>ht;++ht)vt=t.children[ht],pe&&D(t,vt,R),xe&&D(t,vt,M);for(Tt=Ct;null!==Tt;){for(mt=0;2>mt;mt++)pt=0!==mt?q:U,!e(t.layout[ot[pt]])&&!k(Tt,pt)&&C(Tt,it[pt])&&C(Tt,nt[pt])&&(Tt.layout[ot[pt]]=z($(Tt,pt,t.layout[ot[pt]]-c(t,pt)-f(Tt,pt)-H(Tt,it[pt])-H(Tt,nt[pt])),h(Tt,pt))),C(Tt,nt[pt])&&!C(Tt,it[pt])&&(Tt.layout[it[pt]]=t.layout[ot[pt]]-Tt.layout[ot[pt]]-H(Tt,nt[pt]));vt=Tt,Tt=Tt.nextAbsoluteChild,vt.nextAbsoluteChild=null}}function j(t,e,i,n){t.shouldUpdate=!0;var r=t.style.direction||A,o=!t.isDirty&&t.lastLayout&&t.lastLayout.requestedHeight===t.layout.height&&t.lastLayout.requestedWidth===t.layout.width&&t.lastLayout.parentMaxWidth===e&&t.lastLayout.parentMaxHeight===i&&t.lastLayout.direction===r;o?(t.layout.width=t.lastLayout.width,t.layout.height=t.lastLayout.height,t.layout.top=t.lastLayout.top,t.layout.left=t.lastLayout.left):(t.lastLayout||(t.lastLayout={}),t.lastLayout.requestedWidth=t.layout.width,t.lastLayout.requestedHeight=t.layout.height,t.lastLayout.parentMaxWidth=e,t.lastLayout.parentMaxHeight=i,t.lastLayout.direction=r,t.children.forEach(function(t){t.layout.width=void 0,t.layout.height=void 0,t.layout.top=0,t.layout.left=0}),R(t,e,i,n),t.lastLayout.width=t.layout.width,t.lastLayout.height=t.layout.height,t.lastLayout.top=t.layout.top,t.lastLayout.left=t.layout.left)}var F,M="inherit",A="ltr",N="rtl",q="row",G="row-reverse",U="column",Z="column-reverse",O="flex-start",_="center",J="flex-end",K="space-between",P="space-around",Q="flex-start",V="center",X="flex-end",Y="stretch",tt="relative",et="absolute",it={row:"left","row-reverse":"right",column:"top","column-reverse":"bottom"},nt={row:"right","row-reverse":"left",column:"bottom","column-reverse":"top"},rt={row:"left","row-reverse":"right",column:"top","column-reverse":"bottom"},ot={row:"width","row-reverse":"width",column:"height","column-reverse":"height"};return{layoutNodeImpl:R,computeLayout:j,fillNodes:t}}();return"object"==typeof exports&&(module.exports=t),function(e){t.fillNodes(e),t.computeLayout(e)}}),!window.addEventListener&&window.attachEvent&&function(){Window.prototype.addEventListener=HTMLDocument.prototype.addEventListener=Element.prototype.addEventListener=function(t,e){this.attachEvent("on"+t,e)},Window.prototype.removeEventListener=HTMLDocument.prototype.removeEventListener=Element.prototype.removeEventListener=function(t,e){this.detachEvent("on"+t,e)}}(),flexibility.detect=function(){var t=document.createElement("p");try{return t.style.display="flex","flex"===t.style.display}catch(e){return!1}},!flexibility.detect()&&document.attachEvent&&document.documentElement.currentStyle&&document.attachEvent("onreadystatechange",function(){flexibility.onresize({target:document.documentElement})}),flexibility.init=function(t){var e=t.onlayoutcomplete;return e||(e=t.onlayoutcomplete={node:t,style:{},children:[]}),e.style.display=t.currentStyle["-js-display"]||t.currentStyle.display,e};var t,e=1e3,i=15,n=document.documentElement,r=0,o=0;flexibility.onresize=function(l){if(n.clientWidth!==r||n.clientHeight!==o){r=n.clientWidth,o=n.clientHeight,clearTimeout(t),window.removeEventListener("resize",flexibility.onresize);var a=l.target&&1===l.target.nodeType?l.target:document.documentElement;flexibility.walk(a),t=setTimeout(function(){window.addEventListener("resize",flexibility.onresize)},e/i)}};var l={alignContent:{initial:"stretch",valid:/^(flex-start|flex-end|center|space-between|space-around|stretch)/},alignItems:{initial:"stretch",valid:/^(flex-start|flex-end|center|baseline|stretch)$/},boxSizing:{initial:"content-box",valid:/^(border-box|content-box)$/},flexDirection:{initial:"row",valid:/^(row|row-reverse|column|column-reverse)$/},flexWrap:{initial:"nowrap",valid:/^(nowrap|wrap|wrap-reverse)$/},justifyContent:{initial:"flex-start",valid:/^(flex-start|flex-end|center|space-between|space-around)$/}};flexibility.updateFlexContainerCache=function(t){var e=t.style,i=t.node.currentStyle,n=t.node.style,r={};(i["flex-flow"]||n["flex-flow"]||"").replace(/^(row|row-reverse|column|column-reverse)\s+(nowrap|wrap|wrap-reverse)$/i,function(t,e,i){r.flexDirection=e,r.flexWrap=i});for(var o in l){var a=o.replace(/[A-Z]/g,"-$&").toLowerCase(),d=l[o],s=i[a]||n[a];e[o]=d.valid.test(s)?s:r[o]||d.initial}};var a={alignSelf:{initial:"auto",valid:/^(auto|flex-start|flex-end|center|baseline|stretch)$/},boxSizing:{initial:"content-box",valid:/^(border-box|content-box)$/},flexBasis:{initial:"auto",valid:/^((?:[-+]?0|[-+]?[0-9]*\.?[0-9]+(?:%|ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmax|vmin|vw))|auto|fill|max-content|min-content|fit-content|content)$/},flexGrow:{initial:0,valid:/^\+?(0|[1-9][0-9]*)$/},flexShrink:{initial:0,valid:/^\+?(0|[1-9][0-9]*)$/},order:{initial:0,valid:/^([-+]?[0-9]+)$/}};flexibility.updateFlexItemCache=function(t){var e=t.style,i=t.node.currentStyle,n=t.node.style,r={};(i.flex||n.flex||"").replace(/^\+?(0|[1-9][0-9]*)/,function(t){r.flexGrow=t});for(var o in a){var l=o.replace(/[A-Z]/g,"-$&").toLowerCase(),d=a[o],s=i[l]||n[l];e[o]=d.valid.test(s)?s:r[o]||d.initial}};var d="border:0 solid;clip:rect(0 0 0 0);display:inline-block;font:0/0 serif;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;overflow:hidden;padding:0;position:absolute;width:1em;",s={medium:4,none:0,thick:6,thin:2},u={borderBottomWidth:0,borderLeftWidth:0,borderRightWidth:0,borderTopWidth:0,height:0,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,marginBottom:0,marginLeft:0,marginRight:0,marginTop:0,maxHeight:0,maxWidth:0,minHeight:0,minWidth:0,width:0},y=/^([-+]?0|[-+]?[0-9]*\.?[0-9]+)/,c=100;flexibility.updateLengthCache=function(t){var e,i,n,r=t.node,o=t.style,l=r.parentNode,a=document.createElement("_"),f=a.runtimeStyle,h=r.currentStyle;f.cssText=d+"font-size:"+h.fontSize,l.insertBefore(a,r.nextSibling),o.fontSize=a.offsetWidth,f.fontSize=o.fontSize+"px";for(var m in u){var v=h[m];y.test(v)||"auto"===v&&!/(width|height)/i.test(m)?/%$/.test(v)?(/^(bottom|height|top)$/.test(m)?(i||(i=l.offsetHeight),n=i):(e||(e=l.offsetWidth),n=e),o[m]=parseFloat(v)*n/c):(f.width=v,o[m]=a.offsetWidth):/^border/.test(m)&&v in s?o[m]=s[v]:delete o[m]}l.removeChild(a),"none"===h.borderTopStyle&&(o.borderTopWidth=0),"none"===h.borderRightStyle&&(o.borderRightWidth=0),"none"===h.borderBottomStyle&&(o.borderBottomWidth=0),"none"===h.borderLeftStyle&&(o.borderLeftWidth=0),o.originalWidth=o.width,o.originalHeight=o.height,o.width||o.minWidth||(/flex/.test(o.display)?o.width=r.offsetWidth:o.minWidth=r.offsetWidth),o.height||o.minHeight||/flex/.test(o.display)||(o.minHeight=r.offsetHeight)},flexibility.walk=function(t){var e=flexibility.init(t),i=e.style,n=i.display;if("none"===n)return{};var r=n.match(/^(inline)?flex$/);if(r&&(flexibility.updateFlexContainerCache(e),t.runtimeStyle.cssText="display:"+(r[1]?"inline-block":"block"),e.children=[]),Array.prototype.forEach.call(t.childNodes,function(t,n){if(1===t.nodeType){var o=flexibility.walk(t),l=o.style;o.index=n,r&&(flexibility.updateFlexItemCache(o),"auto"===l.alignSelf&&(l.alignSelf=i.alignItems),l.flex=l.flexGrow,t.runtimeStyle.cssText="display:inline-block",e.children.push(o))}}),r){e.children.forEach(function(t){flexibility.updateLengthCache(t)}),e.children.sort(function(t,e){return t.style.order-e.style.order||t.index-e.index}),/-reverse$/.test(i.flexDirection)&&(e.children.reverse(),i.flexDirection=i.flexDirection.replace(/-reverse$/,""),"flex-start"===i.justifyContent?i.justifyContent="flex-end":"flex-end"===i.justifyContent&&(i.justifyContent="flex-start")),flexibility.updateLengthCache(e),delete e.lastLayout,delete e.layout;var o=i.borderTopWidth,l=i.borderBottomWidth;i.borderTopWidth=0,i.borderBottomWidth=0,i.borderLeftWidth=0,"column"===i.flexDirection&&(i.width-=i.borderRightWidth),flexibility.computeLayout(e),t.runtimeStyle.cssText="box-sizing:border-box;display:block;position:relative;width:"+(e.layout.width+i.borderRightWidth)+"px;height:"+(e.layout.height+o+l)+"px";var a=[],d=1,s="column"===i.flexDirection?"width":"height";e.children.forEach(function(t){a[t.lineIndex]=Math.max(a[t.lineIndex]||0,t.layout[s]),d=Math.max(d,t.lineIndex+1)}),e.children.forEach(function(t){var e=t.layout;"stretch"===t.style.alignSelf&&(e[s]=a[t.lineIndex]),t.node.runtimeStyle.cssText="box-sizing:border-box;display:block;position:absolute;margin:0;width:"+e.width+"px;height:"+e.height+"px;top:"+e.top+"px;left:"+e.left+"px"})}return e}}();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/**
	 * Owl Carousel v2.3.4
	 * Copyright 2013-2018 David Deutsch
	 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
	 */
	!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
	animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/*
	 *  Bootstrap TouchSpin - v3.1.1
	 *  A mobile and touch friendly input spinner component for Bootstrap 3.
	 *  http://www.virtuosoft.eu/code/bootstrap-touchspin/
	 *
	 *  Made by István Ujj-Mészáros
	 *  Under Apache License v2.0 License
	 */
	(function($) {
	  'use strict';
	
	  var _currentSpinnerId = 0;
	
	  function _scopedEventName(name, id) {
	    return name + '.touchspin_' + id;
	  }
	
	  function _scopeEventNames(names, id) {
	    return $.map(names, function(name) {
	      return _scopedEventName(name, id);
	    });
	  }
	
	  $.fn.TouchSpin = function(options) {
	
	    if (options === 'destroy') {
	      this.each(function() {
	        var originalinput = $(this),
	            originalinput_data = originalinput.data();
	        $(document).off(_scopeEventNames([
	          'mouseup',
	          'touchend',
	          'touchcancel',
	          'mousemove',
	          'touchmove',
	          'scroll',
	          'scrollstart'], originalinput_data.spinnerid).join(' '));
	      });
	      return;
	    }
	
	    var defaults = {
	      min: 0,
	      max: 100,
	      initval: '',
	      replacementval: '',
	      step: 1,
	      decimals: 0,
	      stepinterval: 100,
	      forcestepdivisibility: 'round', // none | floor | round | ceil
	      stepintervaldelay: 500,
	      verticalbuttons: false,
	      verticalupclass: 'glyphicon glyphicon-chevron-up',
	      verticaldownclass: 'glyphicon glyphicon-chevron-down',
	      prefix: '',
	      postfix: '',
	      prefix_extraclass: '',
	      postfix_extraclass: '',
	      booster: true,
	      boostat: 10,
	      maxboostedstep: false,
	      mousewheel: true,
	      buttondown_class: 'btn btn-default',
	      buttonup_class: 'btn btn-default',
		  buttondown_txt: '-',
		  buttonup_txt: '+'
	    };
	
	    var attributeMap = {
	      min: 'min',
	      max: 'max',
	      initval: 'init-val',
	      replacementval: 'replacement-val',
	      step: 'step',
	      decimals: 'decimals',
	      stepinterval: 'step-interval',
	      verticalbuttons: 'vertical-buttons',
	      verticalupclass: 'vertical-up-class',
	      verticaldownclass: 'vertical-down-class',
	      forcestepdivisibility: 'force-step-divisibility',
	      stepintervaldelay: 'step-interval-delay',
	      prefix: 'prefix',
	      postfix: 'postfix',
	      prefix_extraclass: 'prefix-extra-class',
	      postfix_extraclass: 'postfix-extra-class',
	      booster: 'booster',
	      boostat: 'boostat',
	      maxboostedstep: 'max-boosted-step',
	      mousewheel: 'mouse-wheel',
	      buttondown_class: 'button-down-class',
	      buttonup_class: 'button-up-class',
		  buttondown_txt: 'button-down-txt',
		  buttonup_txt: 'button-up-txt'
	    };
	
	    return this.each(function() {
	
	      var settings,
	          originalinput = $(this),
	          originalinput_data = originalinput.data(),
	          container,
	          elements,
	          value,
	          downSpinTimer,
	          upSpinTimer,
	          downDelayTimeout,
	          upDelayTimeout,
	          spincount = 0,
	          spinning = false;
	
	      init();
	
	
	      function init() {
	        if (originalinput.data('alreadyinitialized')) {
	          return;
	        }
	
	        originalinput.data('alreadyinitialized', true);
	        _currentSpinnerId += 1;
	        originalinput.data('spinnerid', _currentSpinnerId);
	
	
	        if (!originalinput.is('input')) {
	          console.log('Must be an input.');
	          return;
	        }
	
	        _initSettings();
	        _setInitval();
	        _checkValue();
	        _buildHtml();
	        _initElements();
	        _hideEmptyPrefixPostfix();
	        _bindEvents();
	        _bindEventsInterface();
	        elements.input.css('display', 'block');
	      }
	
	      function _setInitval() {
	        if (settings.initval !== '' && originalinput.val() === '') {
	          originalinput.val(settings.initval);
	        }
	      }
	
	      function changeSettings(newsettings) {
	        _updateSettings(newsettings);
	        _checkValue();
	
	        var value = elements.input.val();
	
	        if (value !== '') {
	          value = Number(elements.input.val());
	          elements.input.val(value.toFixed(settings.decimals));
	        }
	      }
	
	      function _initSettings() {
	        settings = $.extend({}, defaults, originalinput_data, _parseAttributes(), options);
	      }
	
	      function _parseAttributes() {
	        var data = {};
	        $.each(attributeMap, function(key, value) {
	          var attrName = 'bts-' + value + '';
	          if (originalinput.is('[data-' + attrName + ']')) {
	            data[key] = originalinput.data(attrName);
	          }
	        });
	        return data;
	      }
	
	      function _updateSettings(newsettings) {
	        settings = $.extend({}, settings, newsettings);
	      }
	
	      function _buildHtml() {
	        var initval = originalinput.val(),
	            parentelement = originalinput.parent();
	
	        if (initval !== '') {
	          initval = Number(initval).toFixed(settings.decimals);
	        }
	
	        originalinput.data('initvalue', initval).val(initval);
	        originalinput.addClass('form-control');
	
	        if (parentelement.hasClass('input-group')) {
	          _advanceInputGroup(parentelement);
	        }
	        else {
	          _buildInputGroup();
	        }
	      }
	
	      function _advanceInputGroup(parentelement) {
	        parentelement.addClass('bootstrap-touchspin');
	
	        var prev = originalinput.prev(),
	            next = originalinput.next();
	
	        var downhtml,
	            uphtml,
	            prefixhtml = '<span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span>',
	            postfixhtml = '<span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span>';
	
	        if (prev.hasClass('input-group-btn')) {
	          downhtml = '<button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button>';
	          prev.append(downhtml);
	        }
	        else {
	          downhtml = '<span class="input-group-btn"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button></span>';
	          $(downhtml).insertBefore(originalinput);
	        }
	
	        if (next.hasClass('input-group-btn')) {
	          uphtml = '<button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button>';
	          next.prepend(uphtml);
	        }
	        else {
	          uphtml = '<span class="input-group-btn"><button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button></span>';
	          $(uphtml).insertAfter(originalinput);
	        }
	
	        $(prefixhtml).insertBefore(originalinput);
	        $(postfixhtml).insertAfter(originalinput);
	
	        container = parentelement;
	      }
	
	      function _buildInputGroup() {
	        var html;
	
	        if (settings.verticalbuttons) {
	          html = '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span><span class="input-group-btn-vertical"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-up" type="button"><i class="' + settings.verticalupclass + '"></i></button><button class="' + settings.buttonup_class + ' bootstrap-touchspin-down" type="button"><i class="' + settings.verticaldownclass + '"></i></button></span></div>';
	        }
	        else {
	          html = '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span><span class="input-group-btn"><button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button></span></div>';
	        }
	
	        container = $(html).insertBefore(originalinput);
	
	        $('.bootstrap-touchspin-prefix', container).after(originalinput);
	
	        if (originalinput.hasClass('input-sm')) {
	          container.addClass('input-group-sm');
	        }
	        else if (originalinput.hasClass('input-lg')) {
	          container.addClass('input-group-lg');
	        }
	      }
	
	      function _initElements() {
	        elements = {
	          down: $('.bootstrap-touchspin-down', container),
	          up: $('.bootstrap-touchspin-up', container),
	          input: $('input', container),
	          prefix: $('.bootstrap-touchspin-prefix', container).addClass(settings.prefix_extraclass),
	          postfix: $('.bootstrap-touchspin-postfix', container).addClass(settings.postfix_extraclass)
	        };
	      }
	
	      function _hideEmptyPrefixPostfix() {
	        if (settings.prefix === '') {
	          elements.prefix.hide();
	        }
	
	        if (settings.postfix === '') {
	          elements.postfix.hide();
	        }
	      }
	
	      function _bindEvents() {
	        originalinput.on('keydown', function(ev) {
	          var code = ev.keyCode || ev.which;
	
	          if (code === 38) {
	            if (spinning !== 'up') {
	              upOnce();
	              startUpSpin();
	            }
	            ev.preventDefault();
	          }
	          else if (code === 40) {
	            if (spinning !== 'down') {
	              downOnce();
	              startDownSpin();
	            }
	            ev.preventDefault();
	          }
	        });
	
	        originalinput.on('keyup', function(ev) {
	          var code = ev.keyCode || ev.which;
	
	          if (code === 38) {
	            stopSpin();
	          }
	          else if (code === 40) {
	            stopSpin();
	          }
	        });
	
	        originalinput.on('blur', function() {
	          _checkValue();
	        });
	
	        elements.down.on('keydown', function(ev) {
	          var code = ev.keyCode || ev.which;
	
	          if (code === 32 || code === 13) {
	            if (spinning !== 'down') {
	              downOnce();
	              startDownSpin();
	            }
	            ev.preventDefault();
	          }
	        });
	
	        elements.down.on('keyup', function(ev) {
	          var code = ev.keyCode || ev.which;
	
	          if (code === 32 || code === 13) {
	            stopSpin();
	          }
	        });
	
	        elements.up.on('keydown', function(ev) {
	          var code = ev.keyCode || ev.which;
	
	          if (code === 32 || code === 13) {
	            if (spinning !== 'up') {
	              upOnce();
	              startUpSpin();
	            }
	            ev.preventDefault();
	          }
	        });
	
	        elements.up.on('keyup', function(ev) {
	          var code = ev.keyCode || ev.which;
	
	          if (code === 32 || code === 13) {
	            stopSpin();
	          }
	        });
	
	        elements.down.on('mousedown.touchspin', function(ev) {
	          elements.down.off('touchstart.touchspin');  // android 4 workaround
	
	          if (originalinput.is(':disabled')) {
	            return;
	          }
	
	          downOnce();
	          startDownSpin();
	
	          ev.preventDefault();
	          ev.stopPropagation();
	        });
	
	        elements.down.on('touchstart.touchspin', function(ev) {
	          elements.down.off('mousedown.touchspin');  // android 4 workaround
	
	          if (originalinput.is(':disabled')) {
	            return;
	          }
	
	          downOnce();
	          startDownSpin();
	
	          ev.preventDefault();
	          ev.stopPropagation();
	        });
	
	        elements.up.on('mousedown.touchspin', function(ev) {
	          elements.up.off('touchstart.touchspin');  // android 4 workaround
	
	          if (originalinput.is(':disabled')) {
	            return;
	          }
	
	          upOnce();
	          startUpSpin();
	
	          ev.preventDefault();
	          ev.stopPropagation();
	        });
	
	        elements.up.on('touchstart.touchspin', function(ev) {
	          elements.up.off('mousedown.touchspin');  // android 4 workaround
	
	          if (originalinput.is(':disabled')) {
	            return;
	          }
	
	          upOnce();
	          startUpSpin();
	
	          ev.preventDefault();
	          ev.stopPropagation();
	        });
	
	        elements.up.on('mouseout touchleave touchend touchcancel', function(ev) {
	          if (!spinning) {
	            return;
	          }
	
	          ev.stopPropagation();
	          stopSpin();
	        });
	
	        elements.down.on('mouseout touchleave touchend touchcancel', function(ev) {
	          if (!spinning) {
	            return;
	          }
	
	          ev.stopPropagation();
	          stopSpin();
	        });
	
	        elements.down.on('mousemove touchmove', function(ev) {
	          if (!spinning) {
	            return;
	          }
	
	          ev.stopPropagation();
	          ev.preventDefault();
	        });
	
	        elements.up.on('mousemove touchmove', function(ev) {
	          if (!spinning) {
	            return;
	          }
	
	          ev.stopPropagation();
	          ev.preventDefault();
	        });
	
	        $(document).on(_scopeEventNames(['mouseup', 'touchend', 'touchcancel'], _currentSpinnerId).join(' '), function(ev) {
	          if (!spinning) {
	            return;
	          }
	
	          ev.preventDefault();
	          stopSpin();
	        });
	
	        $(document).on(_scopeEventNames(['mousemove', 'touchmove', 'scroll', 'scrollstart'], _currentSpinnerId).join(' '), function(ev) {
	          if (!spinning) {
	            return;
	          }
	
	          ev.preventDefault();
	          stopSpin();
	        });
	
	        originalinput.on('mousewheel DOMMouseScroll', function(ev) {
	          if (!settings.mousewheel || !originalinput.is(':focus')) {
	            return;
	          }
	
	          var delta = ev.originalEvent.wheelDelta || -ev.originalEvent.deltaY || -ev.originalEvent.detail;
	
	          ev.stopPropagation();
	          ev.preventDefault();
	
	          if (delta < 0) {
	            downOnce();
	          }
	          else {
	            upOnce();
	          }
	        });
	      }
	
	      function _bindEventsInterface() {
	        originalinput.on('touchspin.uponce', function() {
	          stopSpin();
	          upOnce();
	        });
	
	        originalinput.on('touchspin.downonce', function() {
	          stopSpin();
	          downOnce();
	        });
	
	        originalinput.on('touchspin.startupspin', function() {
	          startUpSpin();
	        });
	
	        originalinput.on('touchspin.startdownspin', function() {
	          startDownSpin();
	        });
	
	        originalinput.on('touchspin.stopspin', function() {
	          stopSpin();
	        });
	
	        originalinput.on('touchspin.updatesettings', function(e, newsettings) {
	          changeSettings(newsettings);
	        });
	      }
	
	      function _forcestepdivisibility(value) {
	        switch (settings.forcestepdivisibility) {
	          case 'round':
	            return (Math.round(value / settings.step) * settings.step).toFixed(settings.decimals);
	          case 'floor':
	            return (Math.floor(value / settings.step) * settings.step).toFixed(settings.decimals);
	          case 'ceil':
	            return (Math.ceil(value / settings.step) * settings.step).toFixed(settings.decimals);
	          default:
	            return value;
	        }
	      }
	
	      function _checkValue() {
	        var val, parsedval, returnval;
	
	        val = originalinput.val();
	
	        if (val === '') {
	          if (settings.replacementval !== '') {
	            originalinput.val(settings.replacementval);
	            originalinput.trigger('change');
	          }
	          return;
	        }
	
	        if (settings.decimals > 0 && val === '.') {
	          return;
	        }
	
	        parsedval = parseFloat(val);
	
	        if (isNaN(parsedval)) {
	          if (settings.replacementval !== '') {
	            parsedval = settings.replacementval;
	          }
	          else {
	            parsedval = 0;
	          }
	        }
	
	        returnval = parsedval;
	
	        if (parsedval.toString() !== val) {
	          returnval = parsedval;
	        }
	
	        if (parsedval < settings.min) {
	          returnval = settings.min;
	        }
	
	        if (parsedval > settings.max) {
	          returnval = settings.max;
	        }
	
	        returnval = _forcestepdivisibility(returnval);
	
	        if (Number(val).toString() !== returnval.toString()) {
	          originalinput.val(returnval);
	          originalinput.trigger('change');
	        }
	      }
	
	      function _getBoostedStep() {
	        if (!settings.booster) {
	          return settings.step;
	        }
	        else {
	          var boosted = Math.pow(2, Math.floor(spincount / settings.boostat)) * settings.step;
	
	          if (settings.maxboostedstep) {
	            if (boosted > settings.maxboostedstep) {
	              boosted = settings.maxboostedstep;
	              value = Math.round((value / boosted)) * boosted;
	            }
	          }
	
	          return Math.max(settings.step, boosted);
	        }
	      }
	
	      function upOnce() {
	        _checkValue();
	
	        value = parseFloat(elements.input.val());
	        if (isNaN(value)) {
	          value = 0;
	        }
	
	        var initvalue = value,
	            boostedstep = _getBoostedStep();
	
	        value = value + boostedstep;
	
	        if (value > settings.max) {
	          value = settings.max;
	          originalinput.trigger('touchspin.on.max');
	          stopSpin();
	        }
	
	        elements.input.val(Number(value).toFixed(settings.decimals));
	
	        if (initvalue !== value) {
	          originalinput.trigger('change');
	        }
	      }
	
	      function downOnce() {
	        _checkValue();
	
	        value = parseFloat(elements.input.val());
	        if (isNaN(value)) {
	          value = 0;
	        }
	
	        var initvalue = value,
	            boostedstep = _getBoostedStep();
	
	        value = value - boostedstep;
	
	        if (value < settings.min) {
	          value = settings.min;
	          originalinput.trigger('touchspin.on.min');
	          stopSpin();
	        }
	
	        elements.input.val(value.toFixed(settings.decimals));
	
	        if (initvalue !== value) {
	          originalinput.trigger('change');
	        }
	      }
	
	      function startDownSpin() {
	        stopSpin();
	
	        spincount = 0;
	        spinning = 'down';
	
	        originalinput.trigger('touchspin.on.startspin');
	        originalinput.trigger('touchspin.on.startdownspin');
	
	        downDelayTimeout = setTimeout(function() {
	          downSpinTimer = setInterval(function() {
	            spincount++;
	            downOnce();
	          }, settings.stepinterval);
	        }, settings.stepintervaldelay);
	      }
	
	      function startUpSpin() {
	        stopSpin();
	
	        spincount = 0;
	        spinning = 'up';
	
	        originalinput.trigger('touchspin.on.startspin');
	        originalinput.trigger('touchspin.on.startupspin');
	
	        upDelayTimeout = setTimeout(function() {
	          upSpinTimer = setInterval(function() {
	            spincount++;
	            upOnce();
	          }, settings.stepinterval);
	        }, settings.stepintervaldelay);
	      }
	
	      function stopSpin() {
	        clearTimeout(downDelayTimeout);
	        clearTimeout(upDelayTimeout);
	        clearInterval(downSpinTimer);
	        clearInterval(upSpinTimer);
	
	        switch (spinning) {
	          case 'up':
	            originalinput.trigger('touchspin.on.stopupspin');
	            originalinput.trigger('touchspin.on.stopspin');
	            break;
	          case 'down':
	            originalinput.trigger('touchspin.on.stopdownspin');
	            originalinput.trigger('touchspin.on.stopspin');
	            break;
	        }
	
	        spincount = 0;
	        spinning = false;
	      }
	
	    });
	
	  };
	
	})(jQuery);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * @fileOverview TouchSwipe - jQuery Plugin
	 * @version 1.6.18
	 *
	 * @author Matt Bryson http://www.github.com/mattbryson
	 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
	 * @see http://labs.rampinteractive.co.uk/touchSwipe/
	 * @see http://plugins.jquery.com/project/touchSwipe
	 * @license
	 * Copyright (c) 2010-2015 Matt Bryson
	 * Dual licensed under the MIT or GPL Version 2 licenses.
	 *
	 */
!function(factory){"function"=="function"&&__webpack_require__(9)&&__webpack_require__(9).jQuery?!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__(10)],__WEBPACK_AMD_DEFINE_FACTORY__=(factory),__WEBPACK_AMD_DEFINE_RESULT__=(typeof __WEBPACK_AMD_DEFINE_FACTORY__==='function'?(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__)):__WEBPACK_AMD_DEFINE_FACTORY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)):factory("undefined"!=typeof module&&module.exports?__webpack_require__(10):jQuery)}(function($){"use strict";function init(options){return!options||void 0!==options.allowPageScroll||void 0===options.swipe&&void 0===options.swipeStatus||(options.allowPageScroll=NONE),void 0!==options.click&&void 0===options.tap&&(options.tap=options.click),options||(options={}),options=$.extend({},$.fn.swipe.defaults,options),this.each(function(){var $this=$(this),plugin=$this.data(PLUGIN_NS);plugin||(plugin=new TouchSwipe(this,options),$this.data(PLUGIN_NS,plugin))})}function TouchSwipe(element,options){function touchStart(jqEvent){if(!(getTouchInProgress()||$(jqEvent.target).closest(options.excludedElements,$element).length>0)){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(!event.pointerType||"mouse"!=event.pointerType||0!=options.fallbackToMouseEvents){var ret,touches=event.touches,evt=touches?touches[0]:event;return phase=PHASE_START,touches?fingerCount=touches.length:options.preventDefaultEvents!==!1&&jqEvent.preventDefault(),distance=0,direction=null,currentDirection=null,pinchDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,maximumsMap=createMaximumsData(),cancelMultiFingerRelease(),createFingerData(0,evt),!touches||fingerCount===options.fingers||options.fingers===ALL_FINGERS||hasPinches()?(startTime=getTimeStamp(),2==fingerCount&&(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)),(options.swipeStatus||options.pinchStatus)&&(ret=triggerHandler(event,phase))):ret=!1,ret===!1?(phase=PHASE_CANCEL,triggerHandler(event,phase),ret):(options.hold&&(holdTimeout=setTimeout($.proxy(function(){$element.trigger("hold",[event.target]),options.hold&&(ret=options.hold.call($element,event,event.target))},this),options.longTapThreshold)),setTouchInProgress(!0),null)}}}function touchMove(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(phase!==PHASE_END&&phase!==PHASE_CANCEL&&!inMultiFingerRelease()){var ret,touches=event.touches,evt=touches?touches[0]:event,currentFinger=updateFingerData(evt);if(endTime=getTimeStamp(),touches&&(fingerCount=touches.length),options.hold&&clearTimeout(holdTimeout),phase=PHASE_MOVE,2==fingerCount&&(0==startTouchesDistance?(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)):(updateFingerData(touches[1]),endTouchesDistance=calculateTouchesDistance(fingerData[0].end,fingerData[1].end),pinchDirection=calculatePinchDirection(fingerData[0].end,fingerData[1].end)),pinchZoom=calculatePinchZoom(startTouchesDistance,endTouchesDistance),pinchDistance=Math.abs(startTouchesDistance-endTouchesDistance)),fingerCount===options.fingers||options.fingers===ALL_FINGERS||!touches||hasPinches()){if(direction=calculateDirection(currentFinger.start,currentFinger.end),currentDirection=calculateDirection(currentFinger.last,currentFinger.end),validateDefaultEvent(jqEvent,currentDirection),distance=calculateDistance(currentFinger.start,currentFinger.end),duration=calculateDuration(),setMaxDistance(direction,distance),ret=triggerHandler(event,phase),!options.triggerOnTouchEnd||options.triggerOnTouchLeave){var inBounds=!0;if(options.triggerOnTouchLeave){var bounds=getbounds(this);inBounds=isInBounds(currentFinger.end,bounds)}!options.triggerOnTouchEnd&&inBounds?phase=getNextPhase(PHASE_MOVE):options.triggerOnTouchLeave&&!inBounds&&(phase=getNextPhase(PHASE_END)),phase!=PHASE_CANCEL&&phase!=PHASE_END||triggerHandler(event,phase)}}else phase=PHASE_CANCEL,triggerHandler(event,phase);ret===!1&&(phase=PHASE_CANCEL,triggerHandler(event,phase))}}function touchEnd(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent,touches=event.touches;if(touches){if(touches.length&&!inMultiFingerRelease())return startMultiFingerRelease(event),!0;if(touches.length&&inMultiFingerRelease())return!0}return inMultiFingerRelease()&&(fingerCount=fingerCountAtRelease),endTime=getTimeStamp(),duration=calculateDuration(),didSwipeBackToCancel()||!validateSwipeDistance()?(phase=PHASE_CANCEL,triggerHandler(event,phase)):options.triggerOnTouchEnd||options.triggerOnTouchEnd===!1&&phase===PHASE_MOVE?(options.preventDefaultEvents!==!1&&jqEvent.cancelable!==!1&&jqEvent.preventDefault(),phase=PHASE_END,triggerHandler(event,phase)):!options.triggerOnTouchEnd&&hasTap()?(phase=PHASE_END,triggerHandlerForGesture(event,phase,TAP)):phase===PHASE_MOVE&&(phase=PHASE_CANCEL,triggerHandler(event,phase)),setTouchInProgress(!1),null}function touchCancel(){fingerCount=0,endTime=0,startTime=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,cancelMultiFingerRelease(),setTouchInProgress(!1)}function touchLeave(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;options.triggerOnTouchLeave&&(phase=getNextPhase(PHASE_END),triggerHandler(event,phase))}function removeListeners(){$element.off(START_EV,touchStart),$element.off(CANCEL_EV,touchCancel),$element.off(MOVE_EV,touchMove),$element.off(END_EV,touchEnd),LEAVE_EV&&$element.off(LEAVE_EV,touchLeave),setTouchInProgress(!1)}function getNextPhase(currentPhase){var nextPhase=currentPhase,validTime=validateSwipeTime(),validDistance=validateSwipeDistance(),didCancel=didSwipeBackToCancel();return!validTime||didCancel?nextPhase=PHASE_CANCEL:!validDistance||currentPhase!=PHASE_MOVE||options.triggerOnTouchEnd&&!options.triggerOnTouchLeave?!validDistance&&currentPhase==PHASE_END&&options.triggerOnTouchLeave&&(nextPhase=PHASE_CANCEL):nextPhase=PHASE_END,nextPhase}function triggerHandler(event,phase){var ret,touches=event.touches;return(didSwipe()||hasSwipes())&&(ret=triggerHandlerForGesture(event,phase,SWIPE)),(didPinch()||hasPinches())&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,PINCH)),didDoubleTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,DOUBLE_TAP):didLongTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,LONG_TAP):didTap()&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,TAP)),phase===PHASE_CANCEL&&touchCancel(event),phase===PHASE_END&&(touches?touches.length||touchCancel(event):touchCancel(event)),ret}function triggerHandlerForGesture(event,phase,gesture){var ret;if(gesture==SWIPE){if($element.trigger("swipeStatus",[phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection]),options.swipeStatus&&(ret=options.swipeStatus.call($element,event,phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection),ret===!1))return!1;if(phase==PHASE_END&&validateSwipe()){if(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),$element.trigger("swipe",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipe&&(ret=options.swipe.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection),ret===!1))return!1;switch(direction){case LEFT:$element.trigger("swipeLeft",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeLeft&&(ret=options.swipeLeft.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case RIGHT:$element.trigger("swipeRight",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeRight&&(ret=options.swipeRight.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case UP:$element.trigger("swipeUp",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeUp&&(ret=options.swipeUp.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case DOWN:$element.trigger("swipeDown",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeDown&&(ret=options.swipeDown.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection))}}}if(gesture==PINCH){if($element.trigger("pinchStatus",[phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchStatus&&(ret=options.pinchStatus.call($element,event,phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData),ret===!1))return!1;if(phase==PHASE_END&&validatePinch())switch(pinchDirection){case IN:$element.trigger("pinchIn",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchIn&&(ret=options.pinchIn.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData));break;case OUT:$element.trigger("pinchOut",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchOut&&(ret=options.pinchOut.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData))}}return gesture==TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),hasDoubleTap()&&!inDoubleTap()?(doubleTapStartTime=getTimeStamp(),singleTapTimeout=setTimeout($.proxy(function(){doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target))},this),options.doubleTapThreshold)):(doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target)))):gesture==DOUBLE_TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),doubleTapStartTime=null,$element.trigger("doubletap",[event.target]),options.doubleTap&&(ret=options.doubleTap.call($element,event,event.target))):gesture==LONG_TAP&&(phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),doubleTapStartTime=null,$element.trigger("longtap",[event.target]),options.longTap&&(ret=options.longTap.call($element,event,event.target)))),ret}function validateSwipeDistance(){var valid=!0;return null!==options.threshold&&(valid=distance>=options.threshold),valid}function didSwipeBackToCancel(){var cancelled=!1;return null!==options.cancelThreshold&&null!==direction&&(cancelled=getMaxDistance(direction)-distance>=options.cancelThreshold),cancelled}function validatePinchDistance(){return null!==options.pinchThreshold?pinchDistance>=options.pinchThreshold:!0}function validateSwipeTime(){var result;return result=options.maxTimeThreshold?!(duration>=options.maxTimeThreshold):!0}function validateDefaultEvent(jqEvent,direction){if(options.preventDefaultEvents!==!1)if(options.allowPageScroll===NONE)jqEvent.preventDefault();else{var auto=options.allowPageScroll===AUTO;switch(direction){case LEFT:(options.swipeLeft&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case RIGHT:(options.swipeRight&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case UP:(options.swipeUp&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case DOWN:(options.swipeDown&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case NONE:}}}function validatePinch(){var hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),hasCorrectDistance=validatePinchDistance();return hasCorrectFingerCount&&hasEndPoint&&hasCorrectDistance}function hasPinches(){return!!(options.pinchStatus||options.pinchIn||options.pinchOut)}function didPinch(){return!(!validatePinch()||!hasPinches())}function validateSwipe(){var hasValidTime=validateSwipeTime(),hasValidDistance=validateSwipeDistance(),hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),didCancel=didSwipeBackToCancel(),valid=!didCancel&&hasEndPoint&&hasCorrectFingerCount&&hasValidDistance&&hasValidTime;return valid}function hasSwipes(){return!!(options.swipe||options.swipeStatus||options.swipeLeft||options.swipeRight||options.swipeUp||options.swipeDown)}function didSwipe(){return!(!validateSwipe()||!hasSwipes())}function validateFingers(){return fingerCount===options.fingers||options.fingers===ALL_FINGERS||!SUPPORTS_TOUCH}function validateEndPoint(){return 0!==fingerData[0].end.x}function hasTap(){return!!options.tap}function hasDoubleTap(){return!!options.doubleTap}function hasLongTap(){return!!options.longTap}function validateDoubleTap(){if(null==doubleTapStartTime)return!1;var now=getTimeStamp();return hasDoubleTap()&&now-doubleTapStartTime<=options.doubleTapThreshold}function inDoubleTap(){return validateDoubleTap()}function validateTap(){return(1===fingerCount||!SUPPORTS_TOUCH)&&(isNaN(distance)||distance<options.threshold)}function validateLongTap(){return duration>options.longTapThreshold&&DOUBLE_TAP_THRESHOLD>distance}function didTap(){return!(!validateTap()||!hasTap())}function didDoubleTap(){return!(!validateDoubleTap()||!hasDoubleTap())}function didLongTap(){return!(!validateLongTap()||!hasLongTap())}function startMultiFingerRelease(event){previousTouchEndTime=getTimeStamp(),fingerCountAtRelease=event.touches.length+1}function cancelMultiFingerRelease(){previousTouchEndTime=0,fingerCountAtRelease=0}function inMultiFingerRelease(){var withinThreshold=!1;if(previousTouchEndTime){var diff=getTimeStamp()-previousTouchEndTime;diff<=options.fingerReleaseThreshold&&(withinThreshold=!0)}return withinThreshold}function getTouchInProgress(){return!($element.data(PLUGIN_NS+"_intouch")!==!0)}function setTouchInProgress(val){$element&&(val===!0?($element.on(MOVE_EV,touchMove),$element.on(END_EV,touchEnd),LEAVE_EV&&$element.on(LEAVE_EV,touchLeave)):($element.off(MOVE_EV,touchMove,!1),$element.off(END_EV,touchEnd,!1),LEAVE_EV&&$element.off(LEAVE_EV,touchLeave,!1)),$element.data(PLUGIN_NS+"_intouch",val===!0))}function createFingerData(id,evt){var f={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return f.start.x=f.last.x=f.end.x=evt.pageX||evt.clientX,f.start.y=f.last.y=f.end.y=evt.pageY||evt.clientY,fingerData[id]=f,f}function updateFingerData(evt){var id=void 0!==evt.identifier?evt.identifier:0,f=getFingerData(id);return null===f&&(f=createFingerData(id,evt)),f.last.x=f.end.x,f.last.y=f.end.y,f.end.x=evt.pageX||evt.clientX,f.end.y=evt.pageY||evt.clientY,f}function getFingerData(id){return fingerData[id]||null}function setMaxDistance(direction,distance){direction!=NONE&&(distance=Math.max(distance,getMaxDistance(direction)),maximumsMap[direction].distance=distance)}function getMaxDistance(direction){return maximumsMap[direction]?maximumsMap[direction].distance:void 0}function createMaximumsData(){var maxData={};return maxData[LEFT]=createMaximumVO(LEFT),maxData[RIGHT]=createMaximumVO(RIGHT),maxData[UP]=createMaximumVO(UP),maxData[DOWN]=createMaximumVO(DOWN),maxData}function createMaximumVO(dir){return{direction:dir,distance:0}}function calculateDuration(){return endTime-startTime}function calculateTouchesDistance(startPoint,endPoint){var diffX=Math.abs(startPoint.x-endPoint.x),diffY=Math.abs(startPoint.y-endPoint.y);return Math.round(Math.sqrt(diffX*diffX+diffY*diffY))}function calculatePinchZoom(startDistance,endDistance){var percent=endDistance/startDistance*1;return percent.toFixed(2)}function calculatePinchDirection(){return 1>pinchZoom?OUT:IN}function calculateDistance(startPoint,endPoint){return Math.round(Math.sqrt(Math.pow(endPoint.x-startPoint.x,2)+Math.pow(endPoint.y-startPoint.y,2)))}function calculateAngle(startPoint,endPoint){var x=startPoint.x-endPoint.x,y=endPoint.y-startPoint.y,r=Math.atan2(y,x),angle=Math.round(180*r/Math.PI);return 0>angle&&(angle=360-Math.abs(angle)),angle}function calculateDirection(startPoint,endPoint){if(comparePoints(startPoint,endPoint))return NONE;var angle=calculateAngle(startPoint,endPoint);return 45>=angle&&angle>=0?LEFT:360>=angle&&angle>=315?LEFT:angle>=135&&225>=angle?RIGHT:angle>45&&135>angle?DOWN:UP}function getTimeStamp(){var now=new Date;return now.getTime()}function getbounds(el){el=$(el);var offset=el.offset(),bounds={left:offset.left,right:offset.left+el.outerWidth(),top:offset.top,bottom:offset.top+el.outerHeight()};return bounds}function isInBounds(point,bounds){return point.x>bounds.left&&point.x<bounds.right&&point.y>bounds.top&&point.y<bounds.bottom}function comparePoints(pointA,pointB){return pointA.x==pointB.x&&pointA.y==pointB.y}var options=$.extend({},options),useTouchEvents=SUPPORTS_TOUCH||SUPPORTS_POINTER||!options.fallbackToMouseEvents,START_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerDown":"pointerdown":"touchstart":"mousedown",MOVE_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerMove":"pointermove":"touchmove":"mousemove",END_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerUp":"pointerup":"touchend":"mouseup",LEAVE_EV=useTouchEvents?SUPPORTS_POINTER?"mouseleave":null:"mouseleave",CANCEL_EV=SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerCancel":"pointercancel":"touchcancel",distance=0,direction=null,currentDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,pinchDirection=0,maximumsMap=null,$element=$(element),phase="start",fingerCount=0,fingerData={},startTime=0,endTime=0,previousTouchEndTime=0,fingerCountAtRelease=0,doubleTapStartTime=0,singleTapTimeout=null,holdTimeout=null;try{$element.on(START_EV,touchStart),$element.on(CANCEL_EV,touchCancel)}catch(e){$.error("events not supported "+START_EV+","+CANCEL_EV+" on jQuery.swipe")}this.enable=function(){return this.disable(),$element.on(START_EV,touchStart),$element.on(CANCEL_EV,touchCancel),$element},this.disable=function(){return removeListeners(),$element},this.destroy=function(){removeListeners(),$element.data(PLUGIN_NS,null),$element=null},this.option=function(property,value){if("object"==typeof property)options=$.extend(options,property);else if(void 0!==options[property]){if(void 0===value)return options[property];options[property]=value}else{if(!property)return options;$.error("Option "+property+" does not exist on jQuery.swipe.options")}return null}}var VERSION="1.6.18",LEFT="left",RIGHT="right",UP="up",DOWN="down",IN="in",OUT="out",NONE="none",AUTO="auto",SWIPE="swipe",PINCH="pinch",TAP="tap",DOUBLE_TAP="doubletap",LONG_TAP="longtap",HORIZONTAL="horizontal",VERTICAL="vertical",ALL_FINGERS="all",DOUBLE_TAP_THRESHOLD=10,PHASE_START="start",PHASE_MOVE="move",PHASE_END="end",PHASE_CANCEL="cancel",SUPPORTS_TOUCH="ontouchstart"in window,SUPPORTS_POINTER_IE10=window.navigator.msPointerEnabled&&!window.PointerEvent&&!SUPPORTS_TOUCH,SUPPORTS_POINTER=(window.PointerEvent||window.navigator.msPointerEnabled)&&!SUPPORTS_TOUCH,PLUGIN_NS="TouchSwipe",defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0};$.fn.swipe=function(method){var $this=$(this),plugin=$this.data(PLUGIN_NS);if(plugin&&"string"==typeof method){if(plugin[method])return plugin[method].apply(plugin,Array.prototype.slice.call(arguments,1));$.error("Method "+method+" does not exist on jQuery.swipe")}else if(plugin&&"object"==typeof method)plugin.option.apply(plugin,arguments);else if(!(plugin||"object"!=typeof method&&method))return init.apply(this,arguments);return $this},$.fn.swipe.version=VERSION,$.fn.swipe.defaults=defaults,$.fn.swipe.phases={PHASE_START:PHASE_START,PHASE_MOVE:PHASE_MOVE,PHASE_END:PHASE_END,PHASE_CANCEL:PHASE_CANCEL},$.fn.swipe.directions={LEFT:LEFT,RIGHT:RIGHT,UP:UP,DOWN:DOWN,IN:IN,OUT:OUT},$.fn.swipe.pageScroll={NONE:NONE,HORIZONTAL:HORIZONTAL,VERTICAL:VERTICAL,AUTO:AUTO},$.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:ALL_FINGERS}});
/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = jQuery;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
	 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
	 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
	 *
	 * Version: 1.3.8
	 *
	 */
	(function(e){e.fn.extend({slimScroll:function(f){var a=e.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},f);this.each(function(){function v(d){if(r){d=d||window.event;
	var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);e(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&n(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function n(d,g,e){k=!1;var f=b.outerHeight()-c.outerHeight();g&&(g=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),g=Math.min(Math.max(g,0),f),g=0<d?Math.ceil(g):Math.floor(g),c.css({top:g+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());g=
	l*(b[0].scrollHeight-b.outerHeight());e&&(g=d,d=g/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),f),c.css({top:d+"px"}));b.scrollTop(g);b.trigger("slimscrolling",~~g);w();p()}function x(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),30);c.css({height:u+"px"});var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function w(){x();clearTimeout(B);l==~~l?(k=a.allowPageScroll,C!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;C=l;u>=b.outerHeight()?k=!0:(c.stop(!0,
	!0).fadeIn("fast"),a.railVisible&&m.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(B=setTimeout(function(){a.disableFadeOut&&r||y||z||(c.fadeOut("slow"),m.fadeOut("slow"))},1E3))}var r,y,z,B,A,u,l,C,k=!1,b=e(this);if(b.parent().hasClass(a.wrapperClass)){var q=b.scrollTop(),c=b.siblings("."+a.barClass),m=b.siblings("."+a.railClass);x();if(e.isPlainObject(f)){if("height"in f&&"auto"==f.height){b.parent().css("height","auto");b.css("height","auto");var h=b.parent().parent().height();b.parent().css("height",
	h);b.css("height",h)}else"height"in f&&(h=f.height,b.parent().css("height",h),b.css("height",h));if("scrollTo"in f)q=parseInt(a.scrollTo);else if("scrollBy"in f)q+=parseInt(a.scrollBy);else if("destroy"in f){c.remove();m.remove();b.unwrap();return}n(q,!1,!0)}}else if(!(e.isPlainObject(f)&&"destroy"in f)){a.height="auto"==a.height?b.parent().height():a.height;q=e("<div></div>").addClass(a.wrapperClass).css({position:"relative",overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",
	width:a.width,height:a.height});var m=e("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=e("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,
	WebkitBorderRadius:a.borderRadius,zIndex:99}),h="right"==a.position?{right:a.distance}:{left:a.distance};m.css(h);c.css(h);b.wrap(q);b.parent().append(c);b.parent().append(m);a.railDraggable&&c.bind("mousedown",function(a){var b=e(document);z=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);n(0,c.position().top,!1)});b.bind("mouseup.slimscroll",function(a){z=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",
	function(a){a.stopPropagation();a.preventDefault();return!1});m.hover(function(){w()},function(){p()});c.hover(function(){y=!0},function(){y=!1});b.hover(function(){r=!0;w();p()},function(){r=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(A=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&(n((A-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),A=b.originalEvent.touches[0].pageY)});
	x();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),n(0,!0)):"top"!==a.start&&(n(e(a.start).position().top,null,!0),a.alwaysVisible||c.hide());window.addEventListener?(this.addEventListener("DOMMouseScroll",v,!1),this.addEventListener("mousewheel",v,!1)):document.attachEvent("onmousewheel",v)}});return this}});e.fn.extend({slimscroll:e.fn.slimScroll})})(jQuery);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/*!
	  Zoom 1.7.20
	  license: MIT
	  http://www.jacklmoore.com/zoom
	*/
	"use strict";
	
	(function (o) {
	  var t = { url: !1, callback: !1, target: !1, duration: 120, on: "mouseover", touch: !0, onZoomIn: !1, onZoomOut: !1, magnify: 1 };o.zoom = function (t, n, e, i) {
	    var u,
	        c,
	        r,
	        a,
	        m,
	        l,
	        s,
	        f = o(t),
	        h = f.css("position"),
	        d = o(n);return t.style.position = /(absolute|fixed)/.test(h) ? h : "relative", t.style.overflow = "hidden", e.style.width = e.style.height = "", o(e).addClass("zoomImg").css({ position: "absolute", top: 0, left: 0, opacity: 0, width: e.width * i, height: e.height * i, border: "none", maxWidth: "none", maxHeight: "none" }).appendTo(t), { init: function init() {
	        c = f.outerWidth(), u = f.outerHeight(), n === t ? (a = c, r = u) : (a = d.outerWidth(), r = d.outerHeight()), m = (e.width - c) / a, l = (e.height - u) / r, s = d.offset();
	      }, move: function move(o) {
	        var t = o.pageX - s.left,
	            n = o.pageY - s.top;n = Math.max(Math.min(n, r), 0), t = Math.max(Math.min(t, a), 0), e.style.left = t * -m + "px", e.style.top = n * -l + "px";
	      } };
	  }, o.fn.zoom = function (n) {
	    return this.each(function () {
	      var e = o.extend({}, t, n || {}),
	          i = e.target && o(e.target)[0] || this,
	          u = this,
	          c = o(u),
	          r = document.createElement("img"),
	          a = o(r),
	          m = "mousemove.zoom",
	          l = !1,
	          s = !1;if (!e.url) {
	        var f = u.querySelector("img");if ((f && (e.url = f.getAttribute("data-src") || f.currentSrc || f.src), !e.url)) return;
	      }c.one("zoom.destroy", (function (o, t) {
	        c.off(".zoom"), i.style.position = o, i.style.overflow = t, r.onload = null, a.remove();
	      }).bind(this, i.style.position, i.style.overflow)), r.onload = function () {
	        function t(t) {
	          f.init(), f.move(t), a.stop().fadeTo(o.support.opacity ? e.duration : 0, 1, o.isFunction(e.onZoomIn) ? e.onZoomIn.call(r) : !1);
	        }function n() {
	          a.stop().fadeTo(e.duration, 0, o.isFunction(e.onZoomOut) ? e.onZoomOut.call(r) : !1);
	        }var f = o.zoom(i, u, r, e.magnify);"grab" === e.on ? c.on("mousedown.zoom", function (e) {
	          1 === e.which && (o(document).one("mouseup.zoom", function () {
	            n(), o(document).off(m, f.move);
	          }), t(e), o(document).on(m, f.move), e.preventDefault());
	        }) : "click" === e.on ? c.on("click.zoom", function (e) {
	          return l ? void 0 : (l = !0, t(e), o(document).on(m, f.move), o(document).one("click.zoom", function () {
	            n(), l = !1, o(document).off(m, f.move);
	          }), !1);
	        }) : "toggle" === e.on ? c.on("click.zoom", function (o) {
	          l ? n() : t(o), l = !l;
	        }) : "mouseover" === e.on && (f.init(), c.on("mouseenter.zoom", t).on("mouseleave.zoom", n).on(m, f.move)), e.touch && c.on("touchstart.zoom", function (o) {
	          o.preventDefault(), s ? (s = !1, n()) : (s = !0, t(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0]));
	        }).on("touchmove.zoom", function (o) {
	          o.preventDefault(), f.move(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0]);
	        }).on("touchend.zoom", function (o) {
	          o.preventDefault(), s && (s = !1, n());
	        }), o.isFunction(e.callback) && e.callback.call(r);
	      }, r.setAttribute("role", "presentation"), r.src = e.url;
	    });
	  }, o.fn.zoom.defaults = t;
	})(window.jQuery);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright since 2007 PrestaShop SA and Contributors
	 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.md.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to https://devdocs.prestashop.com/ for more information.
	 *
	 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
	 * @copyright Since 2007 PrestaShop SA and Contributors
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 */
'use strict';function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj}}
var _jquery=__webpack_require__(10);var _jquery2=_interopRequireDefault(_jquery);var _prestashop=__webpack_require__(48);var _prestashop2=_interopRequireDefault(_prestashop);_prestashop2['default'].responsive=_prestashop2['default'].responsive||{};_prestashop2['default'].responsive.current_width=window.innerWidth;_prestashop2['default'].responsive.min_width=992;_prestashop2['default'].responsive.mobile=_prestashop2['default'].responsive.current_width<_prestashop2['default'].responsive.min_width;function swapChildren(obj1,obj2){var temp=obj2.children().detach();obj2.empty().append(obj1.children().detach());obj1.append(temp)}
function toggleMobileStyles(){if(_prestashop2['default'].responsive.mobile){(0,_jquery2['default'])("*[id^='_desktop_']").each(function(idx,el){var target=(0,_jquery2['default'])('#'+el.id.replace('_desktop_','_mobile_'));if(target.length){swapChildren((0,_jquery2['default'])(el),target)}})}else{(0,_jquery2['default'])("*[id^='_mobile_']").each(function(idx,el){var target=(0,_jquery2['default'])('#'+el.id.replace('_mobile_','_desktop_'));if(target.length){swapChildren((0,_jquery2['default'])(el),target)}})}
_prestashop2['default'].emit('responsive update',{mobile:_prestashop2['default'].responsive.mobile})}(0,_jquery2['default'])(window).on('resize',function(){var _cw=_prestashop2['default'].responsive.current_width;var _mw=_prestashop2['default'].responsive.min_width;var _w=window.innerWidth;var _toggle=_cw>=_mw&&_w<_mw||_cw<_mw&&_w>=_mw;_prestashop2['default'].responsive.current_width=_w;_prestashop2['default'].responsive.mobile=_prestashop2['default'].responsive.current_width<_prestashop2['default'].responsive.min_width;if(_toggle){toggleMobileStyles()}});(0,_jquery2['default'])(document).ready(function(){if(_prestashop2['default'].responsive.mobile){toggleMobileStyles()}});
/***/ }),
/* 48 */
/***/ (function(module, exports) {

	module.exports = prestashop;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright since 2007 PrestaShop SA and Contributors
	 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.md.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to https://devdocs.prestashop.com/ for more information.
	 *
	 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
	 * @copyright Since 2007 PrestaShop SA and Contributors
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 */
'use strict';function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj}}
var _jquery=__webpack_require__(10);var _jquery2=_interopRequireDefault(_jquery);var _prestashop=__webpack_require__(48);var _prestashop2=_interopRequireDefault(_prestashop);function setUpCheckout(){(0,_jquery2['default'])('.js-terms a').on('click',function(event){event.preventDefault();var url=(0,_jquery2['default'])(event.target).attr('href');if(url){url+='?content_only=1';_jquery2['default'].get(url,function(content){(0,_jquery2['default'])('#modal').find('.js-modal-content').html((0,_jquery2['default'])(content).find('.page-cms').contents())}).fail(function(resp){_prestashop2['default'].emit('handleError',{eventType:'clickTerms',resp:resp})})}(0,_jquery2['default'])('#modal').modal('show')});(0,_jquery2['default'])('.js-gift-checkbox').on('click',function(event){(0,_jquery2['default'])('#gift').collapse('toggle')})}
function toggleImage(){(0,_jquery2['default'])('.card-block .cart-summary-products p a').on('click',function(icon){icon=(0,_jquery2['default'])(this).find('i.material-icons');if(icon.text()=='expand_more'){icon.text('expand_less')}else{icon.text('expand_more')}})}(0,_jquery2['default'])(document).ready(function(){if((0,_jquery2['default'])('body#checkout').length===1){setUpCheckout();toggleImage()}
_prestashop2['default'].on('updatedDeliveryForm',function(params){if(typeof params.deliveryOption==='undefined'||0===params.deliveryOption.length){return}(0,_jquery2['default'])(".carrier-extra-content").hide();params.deliveryOption.next(".carrier-extra-content").slideDown()})});
/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright since 2007 PrestaShop SA and Contributors
	 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.md.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to https://devdocs.prestashop.com/ for more information.
	 *
	 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
	 * @copyright Since 2007 PrestaShop SA and Contributors
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 */
'use strict';function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj}}
var _jquery=__webpack_require__(10);var _jquery2=_interopRequireDefault(_jquery);function initRmaItemSelector(){(0,_jquery2['default'])('#order-return-form table thead input[type=checkbox]').on('click',function(){var checked=(0,_jquery2['default'])(this).prop('checked');(0,_jquery2['default'])('#order-return-form table tbody input[type=checkbox]').each(function(_,checkbox){(0,_jquery2['default'])(checkbox).prop('checked',checked)})})}
function setupCustomerScripts(){if((0,_jquery2['default'])('body#order-detail')){initRmaItemSelector()}}(0,_jquery2['default'])(document).ready(setupCustomerScripts);
/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright since 2007 PrestaShop SA and Contributors
	 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.md.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to https://devdocs.prestashop.com/ for more information.
	 *
	 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
	 * @copyright Since 2007 PrestaShop SA and Contributors
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 */
'use strict';function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj}}
var _jquery=__webpack_require__(10);var _jquery2=_interopRequireDefault(_jquery);var _prestashop=__webpack_require__(48);var _prestashop2=_interopRequireDefault(_prestashop);__webpack_require__(52);var _componentsProductMiniature=__webpack_require__(53);var _componentsProductMiniature2=_interopRequireDefault(_componentsProductMiniature);(0,_jquery2['default'])(document).ready(function(){_prestashop2['default'].on('clickQuickView',function(elm){var data={'action':'quickview','id_product':elm.dataset.idProduct,'id_product_attribute':elm.dataset.idProductAttribute};_jquery2['default'].post(_prestashop2['default'].urls.pages.product,data,null,'json').then(function(resp){(0,_jquery2['default'])('body').append(resp.quickview_html);var productModal=(0,_jquery2['default'])('#quickview-modal-'+resp.product.id+'-'+resp.product.id_product_attribute);productModal.modal('show');productConfig(productModal);productModal.on('hidden.bs.modal',function(){(0,_jquery2['default'])("body").removeAttr("style");productModal.remove()});(0,_jquery2['default'])('.qv-carousel').owlCarousel({nav:!0,margin:15,loop:!1,dots:!1,rewind:!0,rtl:(0,_jquery2['default'])('body').hasClass('lang-rtl')?!0:!1,navText:["<i class='material-icons'></i>","<i class='material-icons'></i>"],responsive:{0:{items:2},443:{items:3},544:{items:4},768:{items:3},992:{items:3},1200:{items:4}}});(0,_jquery2['default'])('.qv-carousel').css('position','relative')}).fail(function(resp){_prestashop2['default'].emit('handleError',{eventType:'clickQuickView',resp:resp})})});var productConfig=function productConfig(qv){var MAX_THUMBS=3;var $arrows=(0,_jquery2['default'])('.js-arrows');var $thumbnails=qv.find('.js-qv-product-images');(0,_jquery2['default'])('.js-thumb').on('click',function(event){if((0,_jquery2['default'])('.js-thumb').hasClass('selected')){(0,_jquery2['default'])('.js-thumb').removeClass('selected')}(0,_jquery2['default'])(event.currentTarget).addClass('selected');(0,_jquery2['default'])('.js-qv-product-cover').attr('src',(0,_jquery2['default'])(event.target).data('image-large-src'))});if($thumbnails.find('li').length<=MAX_THUMBS){$arrows.hide()}else{$arrows.on('click',function(event){if((0,_jquery2['default'])(event.target).hasClass('arrow-up')&&(0,_jquery2['default'])('.js-qv-product-images').position().top<0){move('up');(0,_jquery2['default'])('.arrow-down').css('opacity','1')}else if((0,_jquery2['default'])(event.target).hasClass('arrow-down')&&$thumbnails.position().top+$thumbnails.height()>(0,_jquery2['default'])('.js-qv-mask').height()){move('down');(0,_jquery2['default'])('.arrow-up').css('opacity','1')}})}
qv.find('#quantity_wanted').TouchSpin({verticalbuttons:!0,verticalupclass:'material-icons touchspin-up',verticaldownclass:'material-icons touchspin-down',buttondown_class:'btn btn-touchspin js-touchspin',buttonup_class:'btn btn-touchspin js-touchspin',min:1,max:1000000})};var move=function move(direction){var THUMB_MARGIN=20;var $thumbnails=(0,_jquery2['default'])('.js-qv-product-images');var thumbHeight=(0,_jquery2['default'])('.js-qv-product-images li img').height()+THUMB_MARGIN;var currentPosition=$thumbnails.position().top;$thumbnails.velocity({translateY:direction==='up'?currentPosition+thumbHeight:currentPosition-thumbHeight},function(){if($thumbnails.position().top>=0){(0,_jquery2['default'])('.arrow-up').css('opacity','.2')}else if($thumbnails.position().top+$thumbnails.height()<=(0,_jquery2['default'])('.js-qv-mask').height()){(0,_jquery2['default'])('.arrow-down').css('opacity','.2')}})};(0,_jquery2['default'])('body').on('click','#search_filter_toggler',function(){(0,_jquery2['default'])('#search_filters_wrapper').removeClass('hidden-md-down');(0,_jquery2['default'])('#content-wrapper').addClass('hidden-md-down')});(0,_jquery2['default'])('#search_filter_controls .clear').on('click',function(){(0,_jquery2['default'])('#search_filters_wrapper').addClass('hidden-md-down');(0,_jquery2['default'])('#content-wrapper').removeClass('hidden-md-down')});(0,_jquery2['default'])('#search_filter_controls .ok').on('click',function(){(0,_jquery2['default'])('#search_filters_wrapper').addClass('hidden-md-down');(0,_jquery2['default'])('#content-wrapper').removeClass('hidden-md-down')});var parseSearchUrl=function parseSearchUrl(event){if(event.target.dataset.searchUrl!==undefined){return event.target.dataset.searchUrl}
if((0,_jquery2['default'])(event.target).parent()[0].dataset.searchUrl===undefined){throw new Error('Can not parse search URL')}
return(0,_jquery2['default'])(event.target).parent()[0].dataset.searchUrl};(0,_jquery2['default'])('body').on('change','#search_filters input[data-search-url]',function(event){_prestashop2['default'].emit('updateFacets',parseSearchUrl(event))});(0,_jquery2['default'])('body').on('click','.js-search-filters-clear-all',function(event){_prestashop2['default'].emit('updateFacets',parseSearchUrl(event))});(0,_jquery2['default'])('body').on('click','.js-search-link',function(event){event.preventDefault();_prestashop2['default'].emit('updateFacets',(0,_jquery2['default'])(event.target).closest('a').get(0).href)});(0,_jquery2['default'])('body').on('change','#search_filters select',function(event){var form=(0,_jquery2['default'])(event.target).closest('form');_prestashop2['default'].emit('updateFacets','?'+form.serialize())});_prestashop2['default'].on('updateProductList',function(data){updateProductListDOM(data);window.scrollTo(0,0);var layout=_jquery2['default'].totalStorage('productLayout');setProductLayout(layout)})});function updateProductListDOM(data){(0,_jquery2['default'])('#search_filters').replaceWith(data.rendered_facets);(0,_jquery2['default'])('#js-active-search-filters').replaceWith(data.rendered_active_filters);(0,_jquery2['default'])('#js-product-list-top').replaceWith(data.rendered_products_top);(0,_jquery2['default'])('#js-product-list').replaceWith(data.rendered_products);(0,_jquery2['default'])('#js-product-list-bottom').replaceWith(data.rendered_products_bottom);if(data.rendered_products_header){(0,_jquery2['default'])('#js-product-list-header').replaceWith(data.rendered_products_header)}
var productMinitature=new _componentsProductMiniature2['default']();productMinitature.init()}
/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! VelocityJS.org (1.5.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*************************
	 Velocity jQuery Shim
	 *************************/
	
	/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
	/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
	/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */
	
	(function(window) {
		"use strict";
		/***************
		 Setup
		 ***************/
	
		/* If jQuery is already loaded, there's no point in loading this shim. */
		if (window.jQuery) {
			return;
		}
	
		/* jQuery base. */
		var $ = function(selector, context) {
			return new $.fn.init(selector, context);
		};
	
		/********************
		 Private Methods
		 ********************/
	
		/* jQuery */
		$.isWindow = function(obj) {
			/* jshint eqeqeq: false */
			return obj && obj === obj.window;
		};
	
		/* jQuery */
		$.type = function(obj) {
			if (!obj) {
				return obj + "";
			}
	
			return typeof obj === "object" || typeof obj === "function" ?
					class2type[toString.call(obj)] || "object" :
					typeof obj;
		};
	
		/* jQuery */
		$.isArray = Array.isArray || function(obj) {
			return $.type(obj) === "array";
		};
	
		/* jQuery */
		function isArraylike(obj) {
			var length = obj.length,
					type = $.type(obj);
	
			if (type === "function" || $.isWindow(obj)) {
				return false;
			}
	
			if (obj.nodeType === 1 && length) {
				return true;
			}
	
			return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
		}
	
		/***************
		 $ Methods
		 ***************/
	
		/* jQuery: Support removed for IE<9. */
		$.isPlainObject = function(obj) {
			var key;
	
			if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
				return false;
			}
	
			try {
				if (obj.constructor &&
						!hasOwn.call(obj, "constructor") &&
						!hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
					return false;
				}
			} catch (e) {
				return false;
			}
	
			for (key in obj) {
			}
	
			return key === undefined || hasOwn.call(obj, key);
		};
	
		/* jQuery */
		$.each = function(obj, callback, args) {
			var value,
					i = 0,
					length = obj.length,
					isArray = isArraylike(obj);
	
			if (args) {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.apply(obj[i], args);
	
						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						if (!obj.hasOwnProperty(i)) {
							continue;
						}
						value = callback.apply(obj[i], args);
	
						if (value === false) {
							break;
						}
					}
				}
	
			} else {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.call(obj[i], i, obj[i]);
	
						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						if (!obj.hasOwnProperty(i)) {
							continue;
						}
						value = callback.call(obj[i], i, obj[i]);
	
						if (value === false) {
							break;
						}
					}
				}
			}
	
			return obj;
		};
	
		/* Custom */
		$.data = function(node, key, value) {
			/* $.getData() */
			if (value === undefined) {
				var getId = node[$.expando],
						store = getId && cache[getId];
	
				if (key === undefined) {
					return store;
				} else if (store) {
					if (key in store) {
						return store[key];
					}
				}
				/* $.setData() */
			} else if (key !== undefined) {
				var setId = node[$.expando] || (node[$.expando] = ++$.uuid);
	
				cache[setId] = cache[setId] || {};
				cache[setId][key] = value;
	
				return value;
			}
		};
	
		/* Custom */
		$.removeData = function(node, keys) {
			var id = node[$.expando],
					store = id && cache[id];
	
			if (store) {
				// Cleanup the entire store if no keys are provided.
				if (!keys) {
					delete cache[id];
				} else {
					$.each(keys, function(_, key) {
						delete store[key];
					});
				}
			}
		};
	
		/* jQuery */
		$.extend = function() {
			var src, copyIsArray, copy, name, options, clone,
					target = arguments[0] || {},
					i = 1,
					length = arguments.length,
					deep = false;
	
			if (typeof target === "boolean") {
				deep = target;
	
				target = arguments[i] || {};
				i++;
			}
	
			if (typeof target !== "object" && $.type(target) !== "function") {
				target = {};
			}
	
			if (i === length) {
				target = this;
				i--;
			}
	
			for (; i < length; i++) {
				if ((options = arguments[i])) {
					for (name in options) {
						if (!options.hasOwnProperty(name)) {
							continue;
						}
						src = target[name];
						copy = options[name];
	
						if (target === copy) {
							continue;
						}
	
						if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && $.isArray(src) ? src : [];
	
							} else {
								clone = src && $.isPlainObject(src) ? src : {};
							}
	
							target[name] = $.extend(deep, clone, copy);
	
						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
			}
	
			return target;
		};
	
		/* jQuery 1.4.3 */
		$.queue = function(elem, type, data) {
			function $makeArray(arr, results) {
				var ret = results || [];
	
				if (arr) {
					if (isArraylike(Object(arr))) {
						/* $.merge */
						(function(first, second) {
							var len = +second.length,
									j = 0,
									i = first.length;
	
							while (j < len) {
								first[i++] = second[j++];
							}
	
							if (len !== len) {
								while (second[j] !== undefined) {
									first[i++] = second[j++];
								}
							}
	
							first.length = i;
	
							return first;
						})(ret, typeof arr === "string" ? [arr] : arr);
					} else {
						[].push.call(ret, arr);
					}
				}
	
				return ret;
			}
	
			if (!elem) {
				return;
			}
	
			type = (type || "fx") + "queue";
	
			var q = $.data(elem, type);
	
			if (!data) {
				return q || [];
			}
	
			if (!q || $.isArray(data)) {
				q = $.data(elem, type, $makeArray(data));
			} else {
				q.push(data);
			}
	
			return q;
		};
	
		/* jQuery 1.4.3 */
		$.dequeue = function(elems, type) {
			/* Custom: Embed element iteration. */
			$.each(elems.nodeType ? [elems] : elems, function(i, elem) {
				type = type || "fx";
	
				var queue = $.queue(elem, type),
						fn = queue.shift();
	
				if (fn === "inprogress") {
					fn = queue.shift();
				}
	
				if (fn) {
					if (type === "fx") {
						queue.unshift("inprogress");
					}
	
					fn.call(elem, function() {
						$.dequeue(elem, type);
					});
				}
			});
		};
	
		/******************
		 $.fn Methods
		 ******************/
	
		/* jQuery */
		$.fn = $.prototype = {
			init: function(selector) {
				/* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
				if (selector.nodeType) {
					this[0] = selector;
	
					return this;
				} else {
					throw new Error("Not a DOM node.");
				}
			},
			offset: function() {
				/* jQuery altered code: Dropped disconnected DOM node checking. */
				var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};
	
				return {
					top: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
					left: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
				};
			},
			position: function() {
				/* jQuery */
				function offsetParentFn(elem) {
					var offsetParent = elem.offsetParent;
	
					while (offsetParent && (offsetParent.nodeName.toLowerCase() !== "html" && offsetParent.style && offsetParent.style.position.toLowerCase() === "static")) {
						offsetParent = offsetParent.offsetParent;
					}
	
					return offsetParent || document;
				}
	
				/* Zepto */
				var elem = this[0],
						offsetParent = offsetParentFn(elem),
						offset = this.offset(),
						parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? {top: 0, left: 0} : $(offsetParent).offset();
	
				offset.top -= parseFloat(elem.style.marginTop) || 0;
				offset.left -= parseFloat(elem.style.marginLeft) || 0;
	
				if (offsetParent.style) {
					parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;
					parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;
				}
	
				return {
					top: offset.top - parentOffset.top,
					left: offset.left - parentOffset.left
				};
			}
		};
	
		/**********************
		 Private Variables
		 **********************/
	
		/* For $.data() */
		var cache = {};
		$.expando = "velocity" + (new Date().getTime());
		$.uuid = 0;
	
		/* For $.queue() */
		var class2type = {},
				hasOwn = class2type.hasOwnProperty,
				toString = class2type.toString;
	
		var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
		for (var i = 0; i < types.length; i++) {
			class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
		}
	
		/* Makes $(node) possible, without having to call init. */
		$.fn.init.prototype = $.fn;
	
		/* Globalize Velocity onto the window, and assign its Utilities property. */
		window.Velocity = {Utilities: $};
	})(window);
	
	/******************
	 Velocity.js
	 ******************/
	
	(function(factory) {
		"use strict";
		/* CommonJS module. */
		if (typeof module === "object" && typeof module.exports === "object") {
			module.exports = factory();
			/* AMD module. */
		} else if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			/* Browser globals. */
		} else {
			factory();
		}
	}(function() {
		"use strict";
		return function(global, window, document, undefined) {
	
			/***************
			 Summary
			 ***************/
	
			/*
			 - CSS: CSS stack that works independently from the rest of Velocity.
			 - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
			 - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
			 - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
			 Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
			 - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
			 - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
			 - completeCall(): Handles the cleanup process for each Velocity call.
			 */
	
			/*********************
			 Helper Functions
			 *********************/
	
			/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
			var IE = (function() {
				if (document.documentMode) {
					return document.documentMode;
				} else {
					for (var i = 7; i > 4; i--) {
						var div = document.createElement("div");
	
						div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";
	
						if (div.getElementsByTagName("span").length) {
							div = null;
	
							return i;
						}
					}
				}
	
				return undefined;
			})();
	
			/* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */
			var rAFShim = (function() {
				var timeLast = 0;
	
				return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
					var timeCurrent = (new Date()).getTime(),
							timeDelta;
	
					/* Dynamically set delay on a per-tick basis to match 60fps. */
					/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
					timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
					timeLast = timeCurrent + timeDelta;
	
					return setTimeout(function() {
						callback(timeCurrent + timeDelta);
					}, timeDelta);
				};
			})();
	
			var performance = (function() {
				var perf = window.performance || {};
	
				if (typeof perf.now !== "function") {
					var nowOffset = perf.timing && perf.timing.navigationStart ? perf.timing.navigationStart : (new Date()).getTime();
	
					perf.now = function() {
						return (new Date()).getTime() - nowOffset;
					};
				}
				return perf;
			})();
	
			/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
			function compactSparseArray(array) {
				var index = -1,
						length = array ? array.length : 0,
						result = [];
	
				while (++index < length) {
					var value = array[index];
	
					if (value) {
						result.push(value);
					}
				}
	
				return result;
			}
	
			/**
			 * Shim for "fixing" IE's lack of support (IE < 9) for applying slice
			 * on host objects like NamedNodeMap, NodeList, and HTMLCollection
			 * (technically, since host objects have been implementation-dependent,
			 * at least before ES2015, IE hasn't needed to work this way).
			 * Also works on strings, fixes IE < 9 to allow an explicit undefined
			 * for the 2nd argument (as in Firefox), and prevents errors when
			 * called on other DOM objects.
			 */
			var _slice = (function() {
				var slice = Array.prototype.slice;
	
				try {
					// Can't be used with DOM elements in IE < 9
					slice.call(document.documentElement);
					return slice;
				} catch (e) { // Fails in IE < 9
	
					// This will work for genuine arrays, array-like objects, 
					// NamedNodeMap (attributes, entities, notations),
					// NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
					// and will not fail on other DOM objects (as do DOM elements in IE < 9)
					return function(begin, end) {
						var len = this.length;
	
						if (typeof begin !== "number") {
							begin = 0;
						}
						// IE < 9 gets unhappy with an undefined end argument
						if (typeof end !== "number") {
							end = len;
						}
						// For native Array objects, we use the native slice function
						if (this.slice) {
							return slice.call(this, begin, end);
						}
						// For array like object we handle it ourselves.
						var i,
								cloned = [],
								// Handle negative value for "begin"
								start = (begin >= 0) ? begin : Math.max(0, len + begin),
								// Handle negative value for "end"
								upTo = end < 0 ? len + end : Math.min(end, len),
								// Actual expected size of the slice
								size = upTo - start;
	
						if (size > 0) {
							cloned = new Array(size);
							if (this.charAt) {
								for (i = 0; i < size; i++) {
									cloned[i] = this.charAt(start + i);
								}
							} else {
								for (i = 0; i < size; i++) {
									cloned[i] = this[start + i];
								}
							}
						}
						return cloned;
					};
				}
			})();
	
			/* .indexOf doesn't exist in IE<9 */
			var _inArray = (function() {
				if (Array.prototype.includes) {
					return function(arr, val) {
						return arr.includes(val);
					};
				}
				if (Array.prototype.indexOf) {
					return function(arr, val) {
						return arr.indexOf(val) >= 0;
					};
				}
				return function(arr, val) {
					for (var i = 0; i < arr.length; i++) {
						if (arr[i] === val) {
							return true;
						}
					}
					return false;
				};
			});
	
			function sanitizeElements(elements) {
				/* Unwrap jQuery/Zepto objects. */
				if (Type.isWrapped(elements)) {
					elements = _slice.call(elements);
					/* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */
				} else if (Type.isNode(elements)) {
					elements = [elements];
				}
	
				return elements;
			}
	
			var Type = {
				isNumber: function(variable) {
					return (typeof variable === "number");
				},
				isString: function(variable) {
					return (typeof variable === "string");
				},
				isArray: Array.isArray || function(variable) {
					return Object.prototype.toString.call(variable) === "[object Array]";
				},
				isFunction: function(variable) {
					return Object.prototype.toString.call(variable) === "[object Function]";
				},
				isNode: function(variable) {
					return variable && variable.nodeType;
				},
				/* Determine if variable is an array-like wrapped jQuery, Zepto or similar element, or even a NodeList etc. */
				/* NOTE: HTMLFormElements also have a length. */
				isWrapped: function(variable) {
					return variable
							&& variable !== window
							&& Type.isNumber(variable.length)
							&& !Type.isString(variable)
							&& !Type.isFunction(variable)
							&& !Type.isNode(variable)
							&& (variable.length === 0 || Type.isNode(variable[0]));
				},
				isSVG: function(variable) {
					return window.SVGElement && (variable instanceof window.SVGElement);
				},
				isEmptyObject: function(variable) {
					for (var name in variable) {
						if (variable.hasOwnProperty(name)) {
							return false;
						}
					}
	
					return true;
				}
			};
	
			/*****************
			 Dependencies
			 *****************/
	
			var $,
					isJQuery = false;
	
			if (global.fn && global.fn.jquery) {
				$ = global;
				isJQuery = true;
			} else {
				$ = window.Velocity.Utilities;
			}
	
			if (IE <= 8 && !isJQuery) {
				throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
			} else if (IE <= 7) {
				/* Revert to jQuery's $.animate(), and lose Velocity's extra features. */
				jQuery.fn.velocity = jQuery.fn.animate;
	
				/* Now that $.fn.velocity is aliased, abort this Velocity declaration. */
				return;
			}
	
			/*****************
			 Constants
			 *****************/
	
			var DURATION_DEFAULT = 400,
					EASING_DEFAULT = "swing";
	
			/*************
			 State
			 *************/
	
			var Velocity = {
				/* Container for page-wide Velocity state data. */
				State: {
					/* Detect mobile devices to determine if mobileHA should be turned on. */
					isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent),
					/* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
					isAndroid: /Android/i.test(window.navigator.userAgent),
					isGingerbread: /Android 2\.3\.[3-7]/i.test(window.navigator.userAgent),
					isChrome: window.chrome,
					isFirefox: /Firefox/i.test(window.navigator.userAgent),
					/* Create a cached element for re-use when checking for CSS property prefixes. */
					prefixElement: document.createElement("div"),
					/* Cache every prefix match to avoid repeating lookups. */
					prefixMatches: {},
					/* Cache the anchor used for animating window scrolling. */
					scrollAnchor: null,
					/* Cache the browser-specific property names associated with the scroll anchor. */
					scrollPropertyLeft: null,
					scrollPropertyTop: null,
					/* Keep track of whether our RAF tick is running. */
					isTicking: false,
					/* Container for every in-progress call to Velocity. */
					calls: [],
					delayedElements: {
						count: 0
					}
				},
				/* Velocity's custom CSS stack. Made global for unit testing. */
				CSS: {/* Defined below. */},
				/* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
				Utilities: $,
				/* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
				Redirects: {/* Manually registered by the user. */},
				Easings: {/* Defined below. */},
				/* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
				Promise: window.Promise,
				/* Velocity option defaults, which can be overriden by the user. */
				defaults: {
					queue: "",
					duration: DURATION_DEFAULT,
					easing: EASING_DEFAULT,
					begin: undefined,
					complete: undefined,
					progress: undefined,
					display: undefined,
					visibility: undefined,
					loop: false,
					delay: false,
					mobileHA: true,
					/* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
					_cacheValues: true,
					/* Advanced: Set to false if the promise should always resolve on empty element lists. */
					promiseRejectEmpty: true
				},
				/* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
				init: function(element) {
					$.data(element, "velocity", {
						/* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
						isSVG: Type.isSVG(element),
						/* Keep track of whether the element is currently being animated by Velocity.
						 This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
						isAnimating: false,
						/* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
						computedStyle: null,
						/* Tween data is cached for each animation on the element so that data can be passed across calls --
						 in particular, end values are used as subsequent start values in consecutive Velocity calls. */
						tweensContainer: null,
						/* The full root property values of each CSS hook being animated on this element are cached so that:
						 1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
						 2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
						rootPropertyValueCache: {},
						/* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
						transformCache: {}
					});
				},
				/* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */
				hook: null, /* Defined below. */
				/* Velocity-wide animation time remapping for testing purposes. */
				mock: false,
				version: {major: 1, minor: 5, patch: 2},
				/* Set to 1 or 2 (most verbose) to output debug info to console. */
				debug: false,
				/* Use rAF high resolution timestamp when available */
				timestamp: true,
				/* Pause all animations */
				pauseAll: function(queueName) {
					var currentTime = (new Date()).getTime();
	
					$.each(Velocity.State.calls, function(i, activeCall) {
	
						if (activeCall) {
	
							/* If we have a queueName and this call is not on that queue, skip */
							if (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {
								return true;
							}
	
							/* Set call to paused */
							activeCall[5] = {
								resume: false
							};
						}
					});
	
					/* Pause timers on any currently delayed calls */
					$.each(Velocity.State.delayedElements, function(k, element) {
						if (!element) {
							return;
						}
						pauseDelayOnElement(element, currentTime);
					});
				},
				/* Resume all animations */
				resumeAll: function(queueName) {
					var currentTime = (new Date()).getTime();
	
					$.each(Velocity.State.calls, function(i, activeCall) {
	
						if (activeCall) {
	
							/* If we have a queueName and this call is not on that queue, skip */
							if (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {
								return true;
							}
	
							/* Set call to resumed if it was paused */
							if (activeCall[5]) {
								activeCall[5].resume = true;
							}
						}
					});
					/* Resume timers on any currently delayed calls */
					$.each(Velocity.State.delayedElements, function(k, element) {
						if (!element) {
							return;
						}
						resumeDelayOnElement(element, currentTime);
					});
				}
			};
	
			/* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
			if (window.pageYOffset !== undefined) {
				Velocity.State.scrollAnchor = window;
				Velocity.State.scrollPropertyLeft = "pageXOffset";
				Velocity.State.scrollPropertyTop = "pageYOffset";
			} else {
				Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
				Velocity.State.scrollPropertyLeft = "scrollLeft";
				Velocity.State.scrollPropertyTop = "scrollTop";
			}
	
			/* Shorthand alias for jQuery's $.data() utility. */
			function Data(element) {
				/* Hardcode a reference to the plugin name. */
				var response = $.data(element, "velocity");
	
				/* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */
				return response === null ? undefined : response;
			}
	
			/**************
			 Delay Timer
			 **************/
	
			function pauseDelayOnElement(element, currentTime) {
				/* Check for any delay timers, and pause the set timeouts (while preserving time data)
				 to be resumed when the "resume" command is issued */
				var data = Data(element);
				if (data && data.delayTimer && !data.delayPaused) {
					data.delayRemaining = data.delay - currentTime + data.delayBegin;
					data.delayPaused = true;
					clearTimeout(data.delayTimer.setTimeout);
				}
			}
	
			function resumeDelayOnElement(element, currentTime) {
				/* Check for any paused timers and resume */
				var data = Data(element);
				if (data && data.delayTimer && data.delayPaused) {
					/* If the element was mid-delay, re initiate the timeout with the remaining delay */
					data.delayPaused = false;
					data.delayTimer.setTimeout = setTimeout(data.delayTimer.next, data.delayRemaining);
				}
			}
	
	
	
			/**************
			 Easing
			 **************/
	
			/* Step easing generator. */
			function generateStep(steps) {
				return function(p) {
					return Math.round(p * steps) * (1 / steps);
				};
			}
	
			/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
			function generateBezier(mX1, mY1, mX2, mY2) {
				var NEWTON_ITERATIONS = 4,
						NEWTON_MIN_SLOPE = 0.001,
						SUBDIVISION_PRECISION = 0.0000001,
						SUBDIVISION_MAX_ITERATIONS = 10,
						kSplineTableSize = 11,
						kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
						float32ArraySupported = "Float32Array" in window;
	
				/* Must contain four arguments. */
				if (arguments.length !== 4) {
					return false;
				}
	
				/* Arguments must be numbers. */
				for (var i = 0; i < 4; ++i) {
					if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
						return false;
					}
				}
	
				/* X values must be in the [0, 1] range. */
				mX1 = Math.min(mX1, 1);
				mX2 = Math.min(mX2, 1);
				mX1 = Math.max(mX1, 0);
				mX2 = Math.max(mX2, 0);
	
				var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
	
				function A(aA1, aA2) {
					return 1.0 - 3.0 * aA2 + 3.0 * aA1;
				}
				function B(aA1, aA2) {
					return 3.0 * aA2 - 6.0 * aA1;
				}
				function C(aA1) {
					return 3.0 * aA1;
				}
	
				function calcBezier(aT, aA1, aA2) {
					return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
				}
	
				function getSlope(aT, aA1, aA2) {
					return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
				}
	
				function newtonRaphsonIterate(aX, aGuessT) {
					for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
						var currentSlope = getSlope(aGuessT, mX1, mX2);
	
						if (currentSlope === 0.0) {
							return aGuessT;
						}
	
						var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
						aGuessT -= currentX / currentSlope;
					}
	
					return aGuessT;
				}
	
				function calcSampleValues() {
					for (var i = 0; i < kSplineTableSize; ++i) {
						mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
					}
				}
	
				function binarySubdivide(aX, aA, aB) {
					var currentX, currentT, i = 0;
	
					do {
						currentT = aA + (aB - aA) / 2.0;
						currentX = calcBezier(currentT, mX1, mX2) - aX;
						if (currentX > 0.0) {
							aB = currentT;
						} else {
							aA = currentT;
						}
					} while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
	
					return currentT;
				}
	
				function getTForX(aX) {
					var intervalStart = 0.0,
							currentSample = 1,
							lastSample = kSplineTableSize - 1;
	
					for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
						intervalStart += kSampleStepSize;
					}
	
					--currentSample;
	
					var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
							guessForT = intervalStart + dist * kSampleStepSize,
							initialSlope = getSlope(guessForT, mX1, mX2);
	
					if (initialSlope >= NEWTON_MIN_SLOPE) {
						return newtonRaphsonIterate(aX, guessForT);
					} else if (initialSlope === 0.0) {
						return guessForT;
					} else {
						return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
					}
				}
	
				var _precomputed = false;
	
				function precompute() {
					_precomputed = true;
					if (mX1 !== mY1 || mX2 !== mY2) {
						calcSampleValues();
					}
				}
	
				var f = function(aX) {
					if (!_precomputed) {
						precompute();
					}
					if (mX1 === mY1 && mX2 === mY2) {
						return aX;
					}
					if (aX === 0) {
						return 0;
					}
					if (aX === 1) {
						return 1;
					}
	
					return calcBezier(getTForX(aX), mY1, mY2);
				};
	
				f.getControlPoints = function() {
					return [{x: mX1, y: mY1}, {x: mX2, y: mY2}];
				};
	
				var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
				f.toString = function() {
					return str;
				};
	
				return f;
			}
	
			/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
			/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
			 then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
			var generateSpringRK4 = (function() {
				function springAccelerationForState(state) {
					return (-state.tension * state.x) - (state.friction * state.v);
				}
	
				function springEvaluateStateWithDerivative(initialState, dt, derivative) {
					var state = {
						x: initialState.x + derivative.dx * dt,
						v: initialState.v + derivative.dv * dt,
						tension: initialState.tension,
						friction: initialState.friction
					};
	
					return {dx: state.v, dv: springAccelerationForState(state)};
				}
	
				function springIntegrateState(state, dt) {
					var a = {
						dx: state.v,
						dv: springAccelerationForState(state)
					},
							b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
							c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
							d = springEvaluateStateWithDerivative(state, dt, c),
							dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
							dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);
	
					state.x = state.x + dxdt * dt;
					state.v = state.v + dvdt * dt;
	
					return state;
				}
	
				return function springRK4Factory(tension, friction, duration) {
	
					var initState = {
						x: -1,
						v: 0,
						tension: null,
						friction: null
					},
							path = [0],
							time_lapsed = 0,
							tolerance = 1 / 10000,
							DT = 16 / 1000,
							have_duration, dt, last_state;
	
					tension = parseFloat(tension) || 500;
					friction = parseFloat(friction) || 20;
					duration = duration || null;
	
					initState.tension = tension;
					initState.friction = friction;
	
					have_duration = duration !== null;
	
					/* Calculate the actual time it takes for this animation to complete with the provided conditions. */
					if (have_duration) {
						/* Run the simulation without a duration. */
						time_lapsed = springRK4Factory(tension, friction);
						/* Compute the adjusted time delta. */
						dt = time_lapsed / duration * DT;
					} else {
						dt = DT;
					}
	
					while (true) {
						/* Next/step function .*/
						last_state = springIntegrateState(last_state || initState, dt);
						/* Store the position. */
						path.push(1 + last_state.x);
						time_lapsed += 16;
						/* If the change threshold is reached, break. */
						if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
							break;
						}
					}
	
					/* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
					 computed path and returns a snapshot of the position according to a given percentComplete. */
					return !have_duration ? time_lapsed : function(percentComplete) {
						return path[ (percentComplete * (path.length - 1)) | 0 ];
					};
				};
			}());
	
			/* jQuery easings. */
			Velocity.Easings = {
				linear: function(p) {
					return p;
				},
				swing: function(p) {
					return 0.5 - Math.cos(p * Math.PI) / 2;
				},
				/* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
				spring: function(p) {
					return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6));
				}
			};
	
			/* CSS3 and Robert Penner easings. */
			$.each(
					[
						["ease", [0.25, 0.1, 0.25, 1.0]],
						["ease-in", [0.42, 0.0, 1.00, 1.0]],
						["ease-out", [0.00, 0.0, 0.58, 1.0]],
						["ease-in-out", [0.42, 0.0, 0.58, 1.0]],
						["easeInSine", [0.47, 0, 0.745, 0.715]],
						["easeOutSine", [0.39, 0.575, 0.565, 1]],
						["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
						["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
						["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
						["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
						["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
						["easeOutCubic", [0.215, 0.61, 0.355, 1]],
						["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
						["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
						["easeOutQuart", [0.165, 0.84, 0.44, 1]],
						["easeInOutQuart", [0.77, 0, 0.175, 1]],
						["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
						["easeOutQuint", [0.23, 1, 0.32, 1]],
						["easeInOutQuint", [0.86, 0, 0.07, 1]],
						["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
						["easeOutExpo", [0.19, 1, 0.22, 1]],
						["easeInOutExpo", [1, 0, 0, 1]],
						["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
						["easeOutCirc", [0.075, 0.82, 0.165, 1]],
						["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]
					], function(i, easingArray) {
				Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
			});
	
			/* Determine the appropriate easing type given an easing input. */
			function getEasing(value, duration) {
				var easing = value;
	
				/* The easing option can either be a string that references a pre-registered easing,
				 or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */
				if (Type.isString(value)) {
					/* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
					if (!Velocity.Easings[value]) {
						easing = false;
					}
				} else if (Type.isArray(value) && value.length === 1) {
					easing = generateStep.apply(null, value);
				} else if (Type.isArray(value) && value.length === 2) {
					/* springRK4 must be passed the animation's duration. */
					/* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
					 function generated with default tension and friction values. */
					easing = generateSpringRK4.apply(null, value.concat([duration]));
				} else if (Type.isArray(value) && value.length === 4) {
					/* Note: If the bezier array contains non-numbers, generateBezier() returns false. */
					easing = generateBezier.apply(null, value);
				} else {
					easing = false;
				}
	
				/* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
				 if the Velocity-wide default has been incorrectly modified. */
				if (easing === false) {
					if (Velocity.Easings[Velocity.defaults.easing]) {
						easing = Velocity.defaults.easing;
					} else {
						easing = EASING_DEFAULT;
					}
				}
	
				return easing;
			}
	
			/*****************
			 CSS Stack
			 *****************/
	
			/* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
			 It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */
			/* Note: A "CSS" shorthand is aliased so that our code is easier to read. */
			var CSS = Velocity.CSS = {
				/*************
				 RegEx
				 *************/
	
				RegEx: {
					isHex: /^#([A-f\d]{3}){1,2}$/i,
					/* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
					valueUnwrap: /^[A-z]+\((.*)\)$/i,
					wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
					/* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
					valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
				},
				/************
				 Lists
				 ************/
	
				Lists: {
					colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
					transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
					transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
					units: [
						"%", // relative
						"em", "ex", "ch", "rem", // font relative
						"vw", "vh", "vmin", "vmax", // viewport relative
						"cm", "mm", "Q", "in", "pc", "pt", "px", // absolute lengths
						"deg", "grad", "rad", "turn", // angles
						"s", "ms" // time
					],
					colorNames: {
						"aliceblue": "240,248,255",
						"antiquewhite": "250,235,215",
						"aquamarine": "127,255,212",
						"aqua": "0,255,255",
						"azure": "240,255,255",
						"beige": "245,245,220",
						"bisque": "255,228,196",
						"black": "0,0,0",
						"blanchedalmond": "255,235,205",
						"blueviolet": "138,43,226",
						"blue": "0,0,255",
						"brown": "165,42,42",
						"burlywood": "222,184,135",
						"cadetblue": "95,158,160",
						"chartreuse": "127,255,0",
						"chocolate": "210,105,30",
						"coral": "255,127,80",
						"cornflowerblue": "100,149,237",
						"cornsilk": "255,248,220",
						"crimson": "220,20,60",
						"cyan": "0,255,255",
						"darkblue": "0,0,139",
						"darkcyan": "0,139,139",
						"darkgoldenrod": "184,134,11",
						"darkgray": "169,169,169",
						"darkgrey": "169,169,169",
						"darkgreen": "0,100,0",
						"darkkhaki": "189,183,107",
						"darkmagenta": "139,0,139",
						"darkolivegreen": "85,107,47",
						"darkorange": "255,140,0",
						"darkorchid": "153,50,204",
						"darkred": "139,0,0",
						"darksalmon": "233,150,122",
						"darkseagreen": "143,188,143",
						"darkslateblue": "72,61,139",
						"darkslategray": "47,79,79",
						"darkturquoise": "0,206,209",
						"darkviolet": "148,0,211",
						"deeppink": "255,20,147",
						"deepskyblue": "0,191,255",
						"dimgray": "105,105,105",
						"dimgrey": "105,105,105",
						"dodgerblue": "30,144,255",
						"firebrick": "178,34,34",
						"floralwhite": "255,250,240",
						"forestgreen": "34,139,34",
						"fuchsia": "255,0,255",
						"gainsboro": "220,220,220",
						"ghostwhite": "248,248,255",
						"gold": "255,215,0",
						"goldenrod": "218,165,32",
						"gray": "128,128,128",
						"grey": "128,128,128",
						"greenyellow": "173,255,47",
						"green": "0,128,0",
						"honeydew": "240,255,240",
						"hotpink": "255,105,180",
						"indianred": "205,92,92",
						"indigo": "75,0,130",
						"ivory": "255,255,240",
						"khaki": "240,230,140",
						"lavenderblush": "255,240,245",
						"lavender": "230,230,250",
						"lawngreen": "124,252,0",
						"lemonchiffon": "255,250,205",
						"lightblue": "173,216,230",
						"lightcoral": "240,128,128",
						"lightcyan": "224,255,255",
						"lightgoldenrodyellow": "250,250,210",
						"lightgray": "211,211,211",
						"lightgrey": "211,211,211",
						"lightgreen": "144,238,144",
						"lightpink": "255,182,193",
						"lightsalmon": "255,160,122",
						"lightseagreen": "32,178,170",
						"lightskyblue": "135,206,250",
						"lightslategray": "119,136,153",
						"lightsteelblue": "176,196,222",
						"lightyellow": "255,255,224",
						"limegreen": "50,205,50",
						"lime": "0,255,0",
						"linen": "250,240,230",
						"magenta": "255,0,255",
						"maroon": "128,0,0",
						"mediumaquamarine": "102,205,170",
						"mediumblue": "0,0,205",
						"mediumorchid": "186,85,211",
						"mediumpurple": "147,112,219",
						"mediumseagreen": "60,179,113",
						"mediumslateblue": "123,104,238",
						"mediumspringgreen": "0,250,154",
						"mediumturquoise": "72,209,204",
						"mediumvioletred": "199,21,133",
						"midnightblue": "25,25,112",
						"mintcream": "245,255,250",
						"mistyrose": "255,228,225",
						"moccasin": "255,228,181",
						"navajowhite": "255,222,173",
						"navy": "0,0,128",
						"oldlace": "253,245,230",
						"olivedrab": "107,142,35",
						"olive": "128,128,0",
						"orangered": "255,69,0",
						"orange": "255,165,0",
						"orchid": "218,112,214",
						"palegoldenrod": "238,232,170",
						"palegreen": "152,251,152",
						"paleturquoise": "175,238,238",
						"palevioletred": "219,112,147",
						"papayawhip": "255,239,213",
						"peachpuff": "255,218,185",
						"peru": "205,133,63",
						"pink": "255,192,203",
						"plum": "221,160,221",
						"powderblue": "176,224,230",
						"purple": "128,0,128",
						"red": "255,0,0",
						"rosybrown": "188,143,143",
						"royalblue": "65,105,225",
						"saddlebrown": "139,69,19",
						"salmon": "250,128,114",
						"sandybrown": "244,164,96",
						"seagreen": "46,139,87",
						"seashell": "255,245,238",
						"sienna": "160,82,45",
						"silver": "192,192,192",
						"skyblue": "135,206,235",
						"slateblue": "106,90,205",
						"slategray": "112,128,144",
						"snow": "255,250,250",
						"springgreen": "0,255,127",
						"steelblue": "70,130,180",
						"tan": "210,180,140",
						"teal": "0,128,128",
						"thistle": "216,191,216",
						"tomato": "255,99,71",
						"turquoise": "64,224,208",
						"violet": "238,130,238",
						"wheat": "245,222,179",
						"whitesmoke": "245,245,245",
						"white": "255,255,255",
						"yellowgreen": "154,205,50",
						"yellow": "255,255,0"
					}
				},
				/************
				 Hooks
				 ************/
	
				/* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
				 (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */
				/* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
				 tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
				Hooks: {
					/********************
					 Registration
					 ********************/
	
					/* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
					/* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
					templates: {
						"textShadow": ["Color X Y Blur", "black 0px 0px 0px"],
						"boxShadow": ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
						"clip": ["Top Right Bottom Left", "0px 0px 0px 0px"],
						"backgroundPosition": ["X Y", "0% 0%"],
						"transformOrigin": ["X Y Z", "50% 50% 0px"],
						"perspectiveOrigin": ["X Y", "50% 50%"]
					},
					/* A "registered" hook is one that has been converted from its template form into a live,
					 tweenable property. It contains data to associate it with its root property. */
					registered: {
						/* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
						 which consists of the subproperty's name, the associated root property's name,
						 and the subproperty's position in the root's value. */
					},
					/* Convert the templates into individual hooks then append them to the registered object above. */
					register: function() {
						/* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
						 currently set to "transparent" default to their respective template below when color-animated,
						 and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
						 which is almost always set closer to black than white. */
						for (var i = 0; i < CSS.Lists.colors.length; i++) {
							var rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";
							CSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha", rgbComponents];
						}
	
						var rootProperty,
								hookTemplate,
								hookNames;
	
						/* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
						 Thus, we re-arrange the templates accordingly. */
						if (IE) {
							for (rootProperty in CSS.Hooks.templates) {
								if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
									continue;
								}
								hookTemplate = CSS.Hooks.templates[rootProperty];
								hookNames = hookTemplate[0].split(" ");
	
								var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);
	
								if (hookNames[0] === "Color") {
									/* Reposition both the hook's name and its default value to the end of their respective strings. */
									hookNames.push(hookNames.shift());
									defaultValues.push(defaultValues.shift());
	
									/* Replace the existing template for the hook's root property. */
									CSS.Hooks.templates[rootProperty] = [hookNames.join(" "), defaultValues.join(" ")];
								}
							}
						}
	
						/* Hook registration. */
						for (rootProperty in CSS.Hooks.templates) {
							if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
								continue;
							}
							hookTemplate = CSS.Hooks.templates[rootProperty];
							hookNames = hookTemplate[0].split(" ");
	
							for (var j in hookNames) {
								if (!hookNames.hasOwnProperty(j)) {
									continue;
								}
								var fullHookName = rootProperty + hookNames[j],
										hookPosition = j;
	
								/* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
								 and the hook's position in its template's default value string. */
								CSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition];
							}
						}
					},
					/*****************************
					 Injection and Extraction
					 *****************************/
	
					/* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */
					/* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
					getRoot: function(property) {
						var hookData = CSS.Hooks.registered[property];
	
						if (hookData) {
							return hookData[0];
						} else {
							/* If there was no hook match, return the property name untouched. */
							return property;
						}
					},
					getUnit: function(str, start) {
						var unit = (str.substr(start || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
	
						if (unit && _inArray(CSS.Lists.units, unit)) {
							return unit;
						}
						return "";
					},
					fixColors: function(str) {
						return str.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function($0, $1, $2) {
							if (CSS.Lists.colorNames.hasOwnProperty($2)) {
								return ($1 ? $1 : "rgba(") + CSS.Lists.colorNames[$2] + ($1 ? "" : ",1)");
							}
							return $1 + $2;
						});
					},
					/* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
					 the targeted hook can be injected or extracted at its standard position. */
					cleanRootPropertyValue: function(rootProperty, rootPropertyValue) {
						/* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
						if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
							rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
						}
	
						/* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
						 default to the root's default value as defined in CSS.Hooks.templates. */
						/* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
						 zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */
						if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
							rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
						}
	
						return rootPropertyValue;
					},
					/* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
					extractValue: function(fullHookName, rootPropertyValue) {
						var hookData = CSS.Hooks.registered[fullHookName];
	
						if (hookData) {
							var hookRoot = hookData[0],
									hookPosition = hookData[1];
	
							rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
	
							/* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
							return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
						} else {
							/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
							return rootPropertyValue;
						}
					},
					/* Inject the hook's value into its root property's value. This is used to piece back together the root property
					 once Velocity has updated one of its individually hooked values through tweening. */
					injectValue: function(fullHookName, hookValue, rootPropertyValue) {
						var hookData = CSS.Hooks.registered[fullHookName];
	
						if (hookData) {
							var hookRoot = hookData[0],
									hookPosition = hookData[1],
									rootPropertyValueParts,
									rootPropertyValueUpdated;
	
							rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
	
							/* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
							 then reconstruct the rootPropertyValue string. */
							rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
							rootPropertyValueParts[hookPosition] = hookValue;
							rootPropertyValueUpdated = rootPropertyValueParts.join(" ");
	
							return rootPropertyValueUpdated;
						} else {
							/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
							return rootPropertyValue;
						}
					}
				},
				/*******************
				 Normalizations
				 *******************/
	
				/* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
				 and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
				Normalizations: {
					/* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
					 the targeted element (which may need to be queried), and the targeted property value. */
					registered: {
						clip: function(type, element, propertyValue) {
							switch (type) {
								case "name":
									return "clip";
									/* Clip needs to be unwrapped and stripped of its commas during extraction. */
								case "extract":
									var extracted;
	
									/* If Velocity also extracted this value, skip extraction. */
									if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
										extracted = propertyValue;
									} else {
										/* Remove the "rect()" wrapper. */
										extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);
	
										/* Strip off commas. */
										extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
									}
	
									return extracted;
									/* Clip needs to be re-wrapped during injection. */
								case "inject":
									return "rect(" + propertyValue + ")";
							}
						},
						blur: function(type, element, propertyValue) {
							switch (type) {
								case "name":
									return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
								case "extract":
									var extracted = parseFloat(propertyValue);
	
									/* If extracted is NaN, meaning the value isn't already extracted. */
									if (!(extracted || extracted === 0)) {
										var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
	
										/* If the filter string had a blur component, return just the blur value and unit type. */
										if (blurComponent) {
											extracted = blurComponent[1];
											/* If the component doesn't exist, default blur to 0. */
										} else {
											extracted = 0;
										}
									}
	
									return extracted;
									/* Blur needs to be re-wrapped during injection. */
								case "inject":
									/* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
									if (!parseFloat(propertyValue)) {
										return "none";
									} else {
										return "blur(" + propertyValue + ")";
									}
							}
						},
						/* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
						opacity: function(type, element, propertyValue) {
							if (IE <= 8) {
								switch (type) {
									case "name":
										return "filter";
									case "extract":
										/* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
										 Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
										var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);
	
										if (extracted) {
											/* Convert to decimal value. */
											propertyValue = extracted[1] / 100;
										} else {
											/* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */
											propertyValue = 1;
										}
	
										return propertyValue;
									case "inject":
										/* Opacified elements are required to have their zoom property set to a non-zero value. */
										element.style.zoom = 1;
	
										/* Setting the filter property on elements with certain font property combinations can result in a
										 highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
										 value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
										if (parseFloat(propertyValue) >= 1) {
											return "";
										} else {
											/* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */
											return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
										}
								}
								/* With all other browsers, normalization is not required; return the same values that were passed in. */
							} else {
								switch (type) {
									case "name":
										return "opacity";
									case "extract":
										return propertyValue;
									case "inject":
										return propertyValue;
								}
							}
						}
					},
					/*****************************
					 Batched Registrations
					 *****************************/
	
					/* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
					register: function() {
	
						/*****************
						 Transforms
						 *****************/
	
						/* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
						 so that they can be referenced in a properties map by their individual names. */
						/* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
						 setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
						 Transform setting is batched in this way to improve performance: the transform style only needs to be updated
						 once when multiple transform subproperties are being animated simultaneously. */
						/* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
						 transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
						 from being normalized for these browsers so that tweening skips these properties altogether
						 (since it will ignore them as being unsupported by the browser.) */
						if ((!IE || IE > 9) && !Velocity.State.isGingerbread) {
							/* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
							 share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
							CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
						}
	
						for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
							/* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
							 paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
							(function() {
								var transformName = CSS.Lists.transformsBase[i];
	
								CSS.Normalizations.registered[transformName] = function(type, element, propertyValue) {
									switch (type) {
										/* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
										case "name":
											return "transform";
											/* Transform values are cached onto a per-element transformCache object. */
										case "extract":
											/* If this transform has yet to be assigned a value, return its null value. */
											if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
												/* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */
												return /^scale/i.test(transformName) ? 1 : 0;
												/* When transform values are set, they are wrapped in parentheses as per the CSS spec.
												 Thus, when extracting their values (for tween calculations), we strip off the parentheses. */
											}
											return Data(element).transformCache[transformName].replace(/[()]/g, "");
										case "inject":
											var invalid = false;
	
											/* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
											 Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
											/* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */
											switch (transformName.substr(0, transformName.length - 1)) {
												/* Whitelist unit types for each transform. */
												case "translate":
													invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
													break;
													/* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */
												case "scal":
												case "scale":
													/* Chrome on Android has a bug in which scaled elements blur if their initial scale
													 value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
													 and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
													if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
														propertyValue = 1;
													}
	
													invalid = !/(\d)$/i.test(propertyValue);
													break;
												case "skew":
													invalid = !/(deg|\d)$/i.test(propertyValue);
													break;
												case "rotate":
													invalid = !/(deg|\d)$/i.test(propertyValue);
													break;
											}
	
											if (!invalid) {
												/* As per the CSS spec, wrap the value in parentheses. */
												Data(element).transformCache[transformName] = "(" + propertyValue + ")";
											}
	
											/* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
											return Data(element).transformCache[transformName];
									}
								};
							})();
						}
	
						/*************
						 Colors
						 *************/
	
						/* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
						 Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */
						for (var j = 0; j < CSS.Lists.colors.length; j++) {
							/* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
							 (Otherwise, all functions would take the final for loop's colorName.) */
							(function() {
								var colorName = CSS.Lists.colors[j];
	
								/* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */
								CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {
									switch (type) {
										case "name":
											return colorName;
											/* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */
										case "extract":
											var extracted;
	
											/* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */
											if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
												extracted = propertyValue;
											} else {
												var converted,
														colorNames = {
															black: "rgb(0, 0, 0)",
															blue: "rgb(0, 0, 255)",
															gray: "rgb(128, 128, 128)",
															green: "rgb(0, 128, 0)",
															red: "rgb(255, 0, 0)",
															white: "rgb(255, 255, 255)"
														};
	
												/* Convert color names to rgb. */
												if (/^[A-z]+$/i.test(propertyValue)) {
													if (colorNames[propertyValue] !== undefined) {
														converted = colorNames[propertyValue];
													} else {
														/* If an unmatched color name is provided, default to black. */
														converted = colorNames.black;
													}
													/* Convert hex values to rgb. */
												} else if (CSS.RegEx.isHex.test(propertyValue)) {
													converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
													/* If the provided color doesn't match any of the accepted color formats, default to black. */
												} else if (!(/^rgba?\(/i.test(propertyValue))) {
													converted = colorNames.black;
												}
	
												/* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
												 repeated spaces (in case the value included spaces to begin with). */
												extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
											}
	
											/* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
											if ((!IE || IE > 8) && extracted.split(" ").length === 3) {
												extracted += " 1";
											}
	
											return extracted;
										case "inject":
											/* If we have a pattern then it might already have the right values */
											if (/^rgb/.test(propertyValue)) {
												return propertyValue;
											}
	
											/* If this is IE<=8 and an alpha component exists, strip it off. */
											if (IE <= 8) {
												if (propertyValue.split(" ").length === 4) {
													propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
												}
												/* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
											} else if (propertyValue.split(" ").length === 3) {
												propertyValue += " 1";
											}
	
											/* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
											 on all values but the fourth (R, G, and B only accept whole numbers). */
											return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
									}
								};
							})();
						}
	
						/**************
						 Dimensions
						 **************/
						function augmentDimension(name, element, wantInner) {
							var isBorderBox = CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() === "border-box";
	
							if (isBorderBox === (wantInner || false)) {
								/* in box-sizing mode, the CSS width / height accessors already give the outerWidth / outerHeight. */
								var i,
										value,
										augment = 0,
										sides = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"],
										fields = ["padding" + sides[0], "padding" + sides[1], "border" + sides[0] + "Width", "border" + sides[1] + "Width"];
	
								for (i = 0; i < fields.length; i++) {
									value = parseFloat(CSS.getPropertyValue(element, fields[i]));
									if (!isNaN(value)) {
										augment += value;
									}
								}
								return wantInner ? -augment : augment;
							}
							return 0;
						}
						function getDimension(name, wantInner) {
							return function(type, element, propertyValue) {
								switch (type) {
									case "name":
										return name;
									case "extract":
										return parseFloat(propertyValue) + augmentDimension(name, element, wantInner);
									case "inject":
										return (parseFloat(propertyValue) - augmentDimension(name, element, wantInner)) + "px";
								}
							};
						}
						CSS.Normalizations.registered.innerWidth = getDimension("width", true);
						CSS.Normalizations.registered.innerHeight = getDimension("height", true);
						CSS.Normalizations.registered.outerWidth = getDimension("width");
						CSS.Normalizations.registered.outerHeight = getDimension("height");
					}
				},
				/************************
				 CSS Property Names
				 ************************/
	
				Names: {
					/* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
					 Camelcasing is used to normalize property names between and across calls. */
					camelCase: function(property) {
						return property.replace(/-(\w)/g, function(match, subMatch) {
							return subMatch.toUpperCase();
						});
					},
					/* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
					SVGAttribute: function(property) {
						var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
	
						/* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */
						if (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {
							SVGAttributes += "|transform";
						}
	
						return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
					},
					/* Determine whether a property should be set with a vendor prefix. */
					/* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
					 If the property is not at all supported by the browser, return a false flag. */
					prefixCheck: function(property) {
						/* If this property has already been checked, return the cached value. */
						if (Velocity.State.prefixMatches[property]) {
							return [Velocity.State.prefixMatches[property], true];
						} else {
							var vendors = ["", "Webkit", "Moz", "ms", "O"];
	
							for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
								var propertyPrefixed;
	
								if (i === 0) {
									propertyPrefixed = property;
								} else {
									/* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */
									propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) {
										return match.toUpperCase();
									});
								}
	
								/* Check if the browser supports this property as prefixed. */
								if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
									/* Cache the match. */
									Velocity.State.prefixMatches[property] = propertyPrefixed;
	
									return [propertyPrefixed, true];
								}
							}
	
							/* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */
							return [property, false];
						}
					}
				},
				/************************
				 CSS Property Values
				 ************************/
	
				Values: {
					/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
					hexToRgb: function(hex) {
						var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
								longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
								rgbParts;
	
						hex = hex.replace(shortformRegex, function(m, r, g, b) {
							return r + r + g + g + b + b;
						});
	
						rgbParts = longformRegex.exec(hex);
	
						return rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0];
					},
					isCSSNullValue: function(value) {
						/* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
						 Thus, we check for both falsiness and these special strings. */
						/* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
						 templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */
						/* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
						return (!value || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value));
					},
					/* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
					getUnitType: function(property) {
						if (/^(rotate|skew)/i.test(property)) {
							return "deg";
						} else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
							/* The above properties are unitless. */
							return "";
						} else {
							/* Default to px for all other properties. */
							return "px";
						}
					},
					/* HTML elements default to an associated display type when they're not set to display:none. */
					/* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
					getDisplayType: function(element) {
						var tagName = element && element.tagName.toString().toLowerCase();
	
						if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
							return "inline";
						} else if (/^(li)$/i.test(tagName)) {
							return "list-item";
						} else if (/^(tr)$/i.test(tagName)) {
							return "table-row";
						} else if (/^(table)$/i.test(tagName)) {
							return "table";
						} else if (/^(tbody)$/i.test(tagName)) {
							return "table-row-group";
							/* Default to "block" when no match is found. */
						} else {
							return "block";
						}
					},
					/* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
					addClass: function(element, className) {
						if (element) {
							if (element.classList) {
								element.classList.add(className);
							} else if (Type.isString(element.className)) {
								// Element.className is around 15% faster then set/getAttribute
								element.className += (element.className.length ? " " : "") + className;
							} else {
								// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
								var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";
	
								element.setAttribute("class", currentClass + (currentClass ? " " : "") + className);
							}
						}
					},
					removeClass: function(element, className) {
						if (element) {
							if (element.classList) {
								element.classList.remove(className);
							} else if (Type.isString(element.className)) {
								// Element.className is around 15% faster then set/getAttribute
								// TODO: Need some jsperf tests on performance - can we get rid of the regex and maybe use split / array manipulation?
								element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
							} else {
								// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
								var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";
	
								element.setAttribute("class", currentClass.replace(new RegExp("(^|\s)" + className.split(" ").join("|") + "(\s|$)", "gi"), " "));
							}
						}
					}
				},
				/****************************
				 Style Getting & Setting
				 ****************************/
	
				/* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
				getPropertyValue: function(element, property, rootPropertyValue, forceStyleLookup) {
					/* Get an element's computed property value. */
					/* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
					 style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
					 *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
					function computePropertyValue(element, property) {
						/* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
						 element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
						 offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
						 We subtract border and padding to get the sum of interior + scrollbar. */
						var computedValue = 0;
	
						/* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
						 of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
						 codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
						 Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */
						if (IE <= 8) {
							computedValue = $.css(element, property); /* GET */
							/* All other browsers support getComputedStyle. The returned live object reference is cached onto its
							 associated element so that it does not need to be refetched upon every GET. */
						} else {
							/* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
							 toggle display to the element type's default value. */
							var toggleDisplay = false;
	
							if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
								toggleDisplay = true;
								CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
							}
	
							var revertDisplay = function() {
								if (toggleDisplay) {
									CSS.setPropertyValue(element, "display", "none");
								}
							};
	
							if (!forceStyleLookup) {
								if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
									var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
									revertDisplay();
	
									return contentBoxHeight;
								} else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
									var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
									revertDisplay();
	
									return contentBoxWidth;
								}
							}
	
							var computedStyle;
	
							/* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
							 of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
							if (Data(element) === undefined) {
								computedStyle = window.getComputedStyle(element, null); /* GET */
								/* If the computedStyle object has yet to be cached, do so now. */
							} else if (!Data(element).computedStyle) {
								computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */
								/* If computedStyle is cached, use it. */
							} else {
								computedStyle = Data(element).computedStyle;
							}
	
							/* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
							 Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
							 So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
							if (property === "borderColor") {
								property = "borderTopColor";
							}
	
							/* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
							 instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */
							if (IE === 9 && property === "filter") {
								computedValue = computedStyle.getPropertyValue(property); /* GET */
							} else {
								computedValue = computedStyle[property];
							}
	
							/* Fall back to the property's style value (if defined) when computedValue returns nothing,
							 which can happen when the element hasn't been painted. */
							if (computedValue === "" || computedValue === null) {
								computedValue = element.style[property];
							}
	
							revertDisplay();
						}
	
						/* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
						 defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
						 effect as being set to 0, so no conversion is necessary.) */
						/* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
						 property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
						 to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
						if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
							var position = computePropertyValue(element, "position"); /* GET */
	
							/* For absolute positioning, jQuery's $.position() only returns values for top and left;
							 right and bottom will have their "auto" value reverted to 0. */
							/* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
							 Not a big deal since we're currently in a GET batch anyway. */
							if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {
								/* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
								computedValue = $(element).position()[property] + "px"; /* GET */
							}
						}
	
						return computedValue;
					}
	
					var propertyValue;
	
					/* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
					 extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */
					if (CSS.Hooks.registered[property]) {
						var hook = property,
								hookRoot = CSS.Hooks.getRoot(hook);
	
						/* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
						 query the DOM for the root property's value. */
						if (rootPropertyValue === undefined) {
							/* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
							rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */
						}
	
						/* If this root has a normalization registered, peform the associated normalization extraction. */
						if (CSS.Normalizations.registered[hookRoot]) {
							rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
						}
	
						/* Extract the hook's value. */
						propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);
	
						/* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
						 normalize the property's name and value, and handle the special case of transforms. */
						/* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
						 numerical and therefore do not require normalization extraction. */
					} else if (CSS.Normalizations.registered[property]) {
						var normalizedPropertyName,
								normalizedPropertyValue;
	
						normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);
	
						/* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
						 At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
						 This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
						 thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
						if (normalizedPropertyName !== "transform") {
							normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */
	
							/* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
							if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
								normalizedPropertyValue = CSS.Hooks.templates[property][1];
							}
						}
	
						propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
					}
	
					/* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */
					if (!/^[\d-]/.test(propertyValue)) {
						/* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
						 their HTML attribute values instead of their CSS style values. */
						var data = Data(element);
	
						if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
							/* Since the height/width attribute values must be set manually, they don't reflect computed values.
							 Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
							if (/^(height|width)$/i.test(property)) {
								/* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
								try {
									propertyValue = element.getBBox()[property];
								} catch (error) {
									propertyValue = 0;
								}
								/* Otherwise, access the attribute value directly. */
							} else {
								propertyValue = element.getAttribute(property);
							}
						} else {
							propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */
						}
					}
	
					/* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
					 convert CSS null-values to an integer of value 0. */
					if (CSS.Values.isCSSNullValue(propertyValue)) {
						propertyValue = 0;
					}
	
					if (Velocity.debug >= 2) {
						console.log("Get " + property + ": " + propertyValue);
					}
	
					return propertyValue;
				},
				/* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
				setPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {
					var propertyName = property;
	
					/* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */
					if (property === "scroll") {
						/* If a container option is present, scroll the container instead of the browser window. */
						if (scrollData.container) {
							scrollData.container["scroll" + scrollData.direction] = propertyValue;
							/* Otherwise, Velocity defaults to scrolling the browser window. */
						} else {
							if (scrollData.direction === "Left") {
								window.scrollTo(propertyValue, scrollData.alternateValue);
							} else {
								window.scrollTo(scrollData.alternateValue, propertyValue);
							}
						}
					} else {
						/* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
						 Thus, for now, we merely cache transforms being SET. */
						if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
							/* Perform a normalization injection. */
							/* Note: The normalization logic handles the transformCache updating. */
							CSS.Normalizations.registered[property]("inject", element, propertyValue);
	
							propertyName = "transform";
							propertyValue = Data(element).transformCache[property];
						} else {
							/* Inject hooks. */
							if (CSS.Hooks.registered[property]) {
								var hookName = property,
										hookRoot = CSS.Hooks.getRoot(property);
	
								/* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */
								rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */
	
								propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
								property = hookRoot;
							}
	
							/* Normalize names and values. */
							if (CSS.Normalizations.registered[property]) {
								propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
								property = CSS.Normalizations.registered[property]("name", element);
							}
	
							/* Assign the appropriate vendor prefix before performing an official style update. */
							propertyName = CSS.Names.prefixCheck(property)[0];
	
							/* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
							 Try/catch is avoided for other browsers since it incurs a performance overhead. */
							if (IE <= 8) {
								try {
									element.style[propertyName] = propertyValue;
								} catch (error) {
									if (Velocity.debug) {
										console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]");
									}
								}
								/* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */
								/* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */
							} else {
								var data = Data(element);
	
								if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
									/* Note: For SVG attributes, vendor-prefixed property names are never used. */
									/* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
									element.setAttribute(property, propertyValue);
								} else {
									element.style[propertyName] = propertyValue;
								}
							}
	
							if (Velocity.debug >= 2) {
								console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
							}
						}
					}
	
					/* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */
					return [propertyName, propertyValue];
				},
				/* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
				/* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
				flushTransformCache: function(element) {
					var transformString = "",
							data = Data(element);
	
					/* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
					 (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */
					if ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && data && data.isSVG) {
						/* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
						 Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
						var getTransformFloat = function(transformProperty) {
							return parseFloat(CSS.getPropertyValue(element, transformProperty));
						};
	
						/* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
						 we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */
						var SVGTransforms = {
							translate: [getTransformFloat("translateX"), getTransformFloat("translateY")],
							skewX: [getTransformFloat("skewX")], skewY: [getTransformFloat("skewY")],
							/* If the scale property is set (non-1), use that value for the scaleX and scaleY values
							 (this behavior mimics the result of animating all these properties at once on HTML elements). */
							scale: getTransformFloat("scale") !== 1 ? [getTransformFloat("scale"), getTransformFloat("scale")] : [getTransformFloat("scaleX"), getTransformFloat("scaleY")],
							/* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
							 defining the rotation's origin point. We ignore the origin values (default them to 0). */
							rotate: [getTransformFloat("rotateZ"), 0, 0]
						};
	
						/* Iterate through the transform properties in the user-defined property map order.
						 (This mimics the behavior of non-SVG transform animation.) */
						$.each(Data(element).transformCache, function(transformName) {
							/* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
							 properties so that they match up with SVG's accepted transform properties. */
							if (/^translate/i.test(transformName)) {
								transformName = "translate";
							} else if (/^scale/i.test(transformName)) {
								transformName = "scale";
							} else if (/^rotate/i.test(transformName)) {
								transformName = "rotate";
							}
	
							/* Check that we haven't yet deleted the property from the SVGTransforms container. */
							if (SVGTransforms[transformName]) {
								/* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
								transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";
	
								/* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
								 re-insert the same master property if we encounter another one of its axis-specific properties. */
								delete SVGTransforms[transformName];
							}
						});
					} else {
						var transformValue,
								perspective;
	
						/* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */
						$.each(Data(element).transformCache, function(transformName) {
							transformValue = Data(element).transformCache[transformName];
	
							/* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
							if (transformName === "transformPerspective") {
								perspective = transformValue;
								return true;
							}
	
							/* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */
							if (IE === 9 && transformName === "rotateZ") {
								transformName = "rotate";
							}
	
							transformString += transformName + transformValue + " ";
						});
	
						/* If present, set the perspective subproperty first. */
						if (perspective) {
							transformString = "perspective" + perspective + " " + transformString;
						}
					}
	
					CSS.setPropertyValue(element, "transform", transformString);
				}
			};
	
			/* Register hooks and normalizations. */
			CSS.Hooks.register();
			CSS.Normalizations.register();
	
			/* Allow hook setting in the same fashion as jQuery's $.css(). */
			Velocity.hook = function(elements, arg2, arg3) {
				var value;
	
				elements = sanitizeElements(elements);
	
				$.each(elements, function(i, element) {
					/* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
					if (Data(element) === undefined) {
						Velocity.init(element);
					}
	
					/* Get property value. If an element set was passed in, only return the value for the first element. */
					if (arg3 === undefined) {
						if (value === undefined) {
							value = CSS.getPropertyValue(element, arg2);
						}
						/* Set property value. */
					} else {
						/* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
						var adjustedSet = CSS.setPropertyValue(element, arg2, arg3);
	
						/* Transform properties don't automatically set. They have to be flushed to the DOM. */
						if (adjustedSet[0] === "transform") {
							Velocity.CSS.flushTransformCache(element);
						}
	
						value = adjustedSet;
					}
				});
	
				return value;
			};
	
			/*****************
			 Animation
			 *****************/
	
			var animate = function() {
				var opts;
	
				/******************
				 Call Chain
				 ******************/
	
				/* Logic for determining what to return to the call stack when exiting out of Velocity. */
				function getChain() {
					/* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
					 default to null instead of returning the targeted elements so that utility function's return value is standardized. */
					if (isUtility) {
						return promiseData.promise || null;
						/* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */
					} else {
						return elementsWrapped;
					}
				}
	
				/*************************
				 Arguments Assignment
				 *************************/
	
				/* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
				 objects are defined on a container object that's passed in as Velocity's sole argument. */
				/* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */
				var syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),
						/* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
						isUtility,
						/* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
						 passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
						elementsWrapped,
						argumentIndex;
	
				var elements,
						propertiesMap,
						options;
	
				/* Detect jQuery/Zepto elements being animated via the $.fn method. */
				if (Type.isWrapped(this)) {
					isUtility = false;
	
					argumentIndex = 0;
					elements = this;
					elementsWrapped = this;
					/* Otherwise, raw elements are being animated via the utility function. */
				} else {
					isUtility = true;
	
					argumentIndex = 1;
					elements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];
				}
	
				/***************
				 Promises
				 ***************/
	
				var promiseData = {
					promise: null,
					resolver: null,
					rejecter: null
				};
	
				/* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
				 promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
				 method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
				 call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
				/* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
				 triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
				 grouped together for the purposes of resolving and rejecting a promise. */
				if (isUtility && Velocity.Promise) {
					promiseData.promise = new Velocity.Promise(function(resolve, reject) {
						promiseData.resolver = resolve;
						promiseData.rejecter = reject;
					});
				}
	
				if (syntacticSugar) {
					propertiesMap = arguments[0].properties || arguments[0].p;
					options = arguments[0].options || arguments[0].o;
				} else {
					propertiesMap = arguments[argumentIndex];
					options = arguments[argumentIndex + 1];
				}
	
				elements = sanitizeElements(elements);
	
				if (!elements) {
					if (promiseData.promise) {
						if (!propertiesMap || !options || options.promiseRejectEmpty !== false) {
							promiseData.rejecter();
						} else {
							promiseData.resolver();
						}
					}
					return;
				}
	
				/* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
				 single raw DOM element is passed in (which doesn't contain a length property). */
				var elementsLength = elements.length,
						elementsIndex = 0;
	
				/***************************
				 Argument Overloading
				 ***************************/
	
				/* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
				 Overloading is detected by checking for the absence of an object being passed into options. */
				/* Note: The stop/finish/pause/resume actions do not accept animation options, and are therefore excluded from this check. */
				if (!/^(stop|finish|finishAll|pause|resume)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
					/* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
					var startingArgumentPosition = argumentIndex + 1;
	
					options = {};
	
					/* Iterate through all options arguments */
					for (var i = startingArgumentPosition; i < arguments.length; i++) {
						/* Treat a number as a duration. Parse it out. */
						/* Note: The following RegEx will return true if passed an array with a number as its first item.
						 Thus, arrays are skipped from this check. */
						if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
							options.duration = arguments[i];
							/* Treat strings and arrays as easings. */
						} else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
							options.easing = arguments[i];
							/* Treat a function as a complete callback. */
						} else if (Type.isFunction(arguments[i])) {
							options.complete = arguments[i];
						}
					}
				}
	
				/*********************
				 Action Detection
				 *********************/
	
				/* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
				 or they can be started, stopped, paused, resumed, or reversed . If a literal or referenced properties map is passed in as Velocity's
				 first argument, the associated action is "start". Alternatively, "scroll", "reverse", "pause", "resume" or "stop" can be passed in 
				 instead of a properties map. */
				var action;
	
				switch (propertiesMap) {
					case "scroll":
						action = "scroll";
						break;
	
					case "reverse":
						action = "reverse";
						break;
	
					case "pause":
	
						/*******************
						 Action: Pause
						 *******************/
	
						var currentTime = (new Date()).getTime();
	
						/* Handle delay timers */
						$.each(elements, function(i, element) {
							pauseDelayOnElement(element, currentTime);
						});
	
						/* Pause and Resume are call-wide (not on a per element basis). Thus, calling pause or resume on a 
						 single element will cause any calls that containt tweens for that element to be paused/resumed
						 as well. */
	
						/* Iterate through all calls and pause any that contain any of our elements */
						$.each(Velocity.State.calls, function(i, activeCall) {
	
							var found = false;
							/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
							if (activeCall) {
								/* Iterate through the active call's targeted elements. */
								$.each(activeCall[1], function(k, activeElement) {
									var queueName = (options === undefined) ? "" : options;
	
									if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
										return true;
									}
	
									/* Iterate through the calls targeted by the stop command. */
									$.each(elements, function(l, element) {
										/* Check that this call was applied to the target element. */
										if (element === activeElement) {
	
											/* Set call to paused */
											activeCall[5] = {
												resume: false
											};
	
											/* Once we match an element, we can bounce out to the next call entirely */
											found = true;
											return false;
										}
									});
	
									/* Proceed to check next call if we have already matched */
									if (found) {
										return false;
									}
								});
							}
	
						});
	
						/* Since pause creates no new tweens, exit out of Velocity. */
						return getChain();
	
					case "resume":
	
						/*******************
						 Action: Resume
						 *******************/
	
						/* Handle delay timers */
						$.each(elements, function(i, element) {
							resumeDelayOnElement(element, currentTime);
						});
	
						/* Pause and Resume are call-wide (not on a per elemnt basis). Thus, calling pause or resume on a 
						 single element will cause any calls that containt tweens for that element to be paused/resumed
						 as well. */
	
						/* Iterate through all calls and pause any that contain any of our elements */
						$.each(Velocity.State.calls, function(i, activeCall) {
							var found = false;
							/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
							if (activeCall) {
								/* Iterate through the active call's targeted elements. */
								$.each(activeCall[1], function(k, activeElement) {
									var queueName = (options === undefined) ? "" : options;
	
									if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
										return true;
									}
	
									/* Skip any calls that have never been paused */
									if (!activeCall[5]) {
										return true;
									}
	
									/* Iterate through the calls targeted by the stop command. */
									$.each(elements, function(l, element) {
										/* Check that this call was applied to the target element. */
										if (element === activeElement) {
	
											/* Flag a pause object to be resumed, which will occur during the next tick. In
											 addition, the pause object will at that time be deleted */
											activeCall[5].resume = true;
	
											/* Once we match an element, we can bounce out to the next call entirely */
											found = true;
											return false;
										}
									});
	
									/* Proceed to check next call if we have already matched */
									if (found) {
										return false;
									}
								});
							}
	
						});
	
						/* Since resume creates no new tweens, exit out of Velocity. */
						return getChain();
	
					case "finish":
					case "finishAll":
					case "stop":
						/*******************
						 Action: Stop
						 *******************/
	
						/* Clear the currently-active delay on each targeted element. */
						$.each(elements, function(i, element) {
							if (Data(element) && Data(element).delayTimer) {
								/* Stop the timer from triggering its cached next() function. */
								clearTimeout(Data(element).delayTimer.setTimeout);
	
								/* Manually call the next() function so that the subsequent queue items can progress. */
								if (Data(element).delayTimer.next) {
									Data(element).delayTimer.next();
								}
	
								delete Data(element).delayTimer;
							}
	
							/* If we want to finish everything in the queue, we have to iterate through it
							 and call each function. This will make them active calls below, which will
							 cause them to be applied via the duration setting. */
							if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
								/* Iterate through the items in the element's queue. */
								$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
									/* The queue array can contain an "inprogress" string, which we skip. */
									if (Type.isFunction(item)) {
										item();
									}
								});
	
								/* Clearing the $.queue() array is achieved by resetting it to []. */
								$.queue(element, Type.isString(options) ? options : "", []);
							}
						});
	
						var callsToStop = [];
	
						/* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
						 been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
						 is stopped, the next item in its animation queue is immediately triggered. */
						/* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
						 or a custom queue string can be passed in. */
						/* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
						 regardless of the element's current queue state. */
	
						/* Iterate through every active call. */
						$.each(Velocity.State.calls, function(i, activeCall) {
							/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
							if (activeCall) {
								/* Iterate through the active call's targeted elements. */
								$.each(activeCall[1], function(k, activeElement) {
									/* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
									 clear calls associated with the relevant queue. */
									/* Call stopping logic works as follows:
									 - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
									 - options === undefined --> stop current queue:"" call and all queue:false calls.
									 - options === false --> stop only queue:false calls.
									 - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
									var queueName = (options === undefined) ? "" : options;
	
									if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
										return true;
									}
	
									/* Iterate through the calls targeted by the stop command. */
									$.each(elements, function(l, element) {
										/* Check that this call was applied to the target element. */
										if (element === activeElement) {
											/* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
											 due to the queue-clearing above. */
											if (options === true || Type.isString(options)) {
												/* Iterate through the items in the element's queue. */
												$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
													/* The queue array can contain an "inprogress" string, which we skip. */
													if (Type.isFunction(item)) {
														/* Pass the item's callback a flag indicating that we want to abort from the queue call.
														 (Specifically, the queue will resolve the call's associated promise then abort.)  */
														item(null, true);
													}
												});
	
												/* Clearing the $.queue() array is achieved by resetting it to []. */
												$.queue(element, Type.isString(options) ? options : "", []);
											}
	
											if (propertiesMap === "stop") {
												/* Since "reverse" uses cached start values (the previous call's endValues), these values must be
												 changed to reflect the final value that the elements were actually tweened to. */
												/* Note: If only queue:false/queue:"custom" animations are currently running on an element, it won't have a tweensContainer
												 object. Also, queue:false/queue:"custom" animations can't be reversed. */
												var data = Data(element);
												if (data && data.tweensContainer && (queueName === true || queueName === "")) {
													$.each(data.tweensContainer, function(m, activeTween) {
														activeTween.endValue = activeTween.currentValue;
													});
												}
	
												callsToStop.push(i);
											} else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
												/* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
												 they finish upon the next rAf tick then proceed with normal call completion logic. */
												activeCall[2].duration = 1;
											}
										}
									});
								});
							}
						});
	
						/* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
						 that the complete callback and display:none setting should be skipped since we're completing prematurely. */
						if (propertiesMap === "stop") {
							$.each(callsToStop, function(i, j) {
								completeCall(j, true);
							});
	
							if (promiseData.promise) {
								/* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
								promiseData.resolver(elements);
							}
						}
	
						/* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */
						return getChain();
	
					default:
						/* Treat a non-empty plain object as a literal properties map. */
						if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
							action = "start";
	
							/****************
							 Redirects
							 ****************/
	
							/* Check if a string matches a registered redirect (see Redirects above). */
						} else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
							opts = $.extend({}, options);
	
							var durationOriginal = opts.duration,
									delayOriginal = opts.delay || 0;
	
							/* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
							if (opts.backwards === true) {
								elements = $.extend(true, [], elements).reverse();
							}
	
							/* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */
							$.each(elements, function(elementIndex, element) {
								/* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
								if (parseFloat(opts.stagger)) {
									opts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);
								} else if (Type.isFunction(opts.stagger)) {
									opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
								}
	
								/* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
								 the duration of each element's animation, using floors to prevent producing very short durations. */
								if (opts.drag) {
									/* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
									opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);
	
									/* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
									 B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
									 The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
									opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
								}
	
								/* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
								 reduce the opts checking logic required inside the redirect. */
								Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
							});
	
							/* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
							 (The performance overhead up to this point is virtually non-existant.) */
							/* Note: The jQuery call chain is kept intact by returning the complete element set. */
							return getChain();
						} else {
							var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";
	
							if (promiseData.promise) {
								promiseData.rejecter(new Error(abortError));
							} else if (window.console) {
								console.log(abortError);
							}
	
							return getChain();
						}
				}
	
				/**************************
				 Call-Wide Variables
				 **************************/
	
				/* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
				 being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
				 avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
				 conversion metrics across Velocity animations that are not immediately consecutively chained. */
				var callUnitConversionData = {
					lastParent: null,
					lastPosition: null,
					lastFontSize: null,
					lastPercentToPxWidth: null,
					lastPercentToPxHeight: null,
					lastEmToPx: null,
					remToPx: null,
					vwToPx: null,
					vhToPx: null
				};
	
				/* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
				 Velocity.State.calls array that is processed during animation ticking. */
				var call = [];
	
				/************************
				 Element Processing
				 ************************/
	
				/* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
				 1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
				 2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
				 3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
				 `elementArrayIndex` allows passing index of the element in the original array to value functions.
				 If `elementsIndex` were used instead the index would be determined by the elements' per-element queue.
				 */
				function processElement(element, elementArrayIndex) {
	
					/*************************
					 Part I: Pre-Queueing
					 *************************/
	
					/***************************
					 Element-Wide Variables
					 ***************************/
	
					var /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
							opts = $.extend({}, Velocity.defaults, options),
							/* A container for the processed data associated with each property in the propertyMap.
							 (Each property in the map produces its own "tween".) */
							tweensContainer = {},
							elementUnitConversionData;
	
					/******************
					 Element Init
					 ******************/
	
					if (Data(element) === undefined) {
						Velocity.init(element);
					}
	
					/******************
					 Option: Delay
					 ******************/
	
					/* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
					/* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
					 (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */
					if (parseFloat(opts.delay) && opts.queue !== false) {
						$.queue(element, opts.queue, function(next, clearQueue) {
							if (clearQueue === true) {
								/* Do not continue with animation queueing. */
								return true;
							}
	
							/* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
							Velocity.velocityQueueEntryFlag = true;
	
							/* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
							 The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command, and
							 delayBegin/delayTime is used to ensure we can "pause" and "resume" a tween that is still mid-delay. */
	
							/* Temporarily store delayed elements to facilite access for global pause/resume */
							var callIndex = Velocity.State.delayedElements.count++;
							Velocity.State.delayedElements[callIndex] = element;
	
							var delayComplete = (function(index) {
								return function() {
									/* Clear the temporary element */
									Velocity.State.delayedElements[index] = false;
	
									/* Finally, issue the call */
									next();
								};
							})(callIndex);
	
	
							Data(element).delayBegin = (new Date()).getTime();
							Data(element).delay = parseFloat(opts.delay);
							Data(element).delayTimer = {
								setTimeout: setTimeout(next, parseFloat(opts.delay)),
								next: delayComplete
							};
						});
					}
	
					/*********************
					 Option: Duration
					 *********************/
	
					/* Support for jQuery's named durations. */
					switch (opts.duration.toString().toLowerCase()) {
						case "fast":
							opts.duration = 200;
							break;
	
						case "normal":
							opts.duration = DURATION_DEFAULT;
							break;
	
						case "slow":
							opts.duration = 600;
							break;
	
						default:
							/* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
							opts.duration = parseFloat(opts.duration) || 1;
					}
	
					/************************
					 Global Option: Mock
					 ************************/
	
					if (Velocity.mock !== false) {
						/* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
						 Alternatively, a multiplier can be passed in to time remap all delays and durations. */
						if (Velocity.mock === true) {
							opts.duration = opts.delay = 1;
						} else {
							opts.duration *= parseFloat(Velocity.mock) || 1;
							opts.delay *= parseFloat(Velocity.mock) || 1;
						}
					}
	
					/*******************
					 Option: Easing
					 *******************/
	
					opts.easing = getEasing(opts.easing, opts.duration);
	
					/**********************
					 Option: Callbacks
					 **********************/
	
					/* Callbacks must functions. Otherwise, default to null. */
					if (opts.begin && !Type.isFunction(opts.begin)) {
						opts.begin = null;
					}
	
					if (opts.progress && !Type.isFunction(opts.progress)) {
						opts.progress = null;
					}
	
					if (opts.complete && !Type.isFunction(opts.complete)) {
						opts.complete = null;
					}
	
					/*********************************
					 Option: Display & Visibility
					 *********************************/
	
					/* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
					/* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */
					if (opts.display !== undefined && opts.display !== null) {
						opts.display = opts.display.toString().toLowerCase();
	
						/* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
						if (opts.display === "auto") {
							opts.display = Velocity.CSS.Values.getDisplayType(element);
						}
					}
	
					if (opts.visibility !== undefined && opts.visibility !== null) {
						opts.visibility = opts.visibility.toString().toLowerCase();
					}
	
					/**********************
					 Option: mobileHA
					 **********************/
	
					/* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
					 on animating elements. HA is removed from the element at the completion of its animation. */
					/* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
					/* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */
					opts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);
	
					/***********************
					 Part II: Queueing
					 ***********************/
	
					/* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
					 In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
					/* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
					 the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
					function buildQueue(next) {
						var data, lastTweensContainer;
	
						/*******************
						 Option: Begin
						 *******************/
	
						/* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
						if (opts.begin && elementsIndex === 0) {
							/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
							try {
								opts.begin.call(elements, elements);
							} catch (error) {
								setTimeout(function() {
									throw error;
								}, 1);
							}
						}
	
						/*****************************************
						 Tween Data Construction (for Scroll)
						 *****************************************/
	
						/* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */
						if (action === "scroll") {
							/* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
							var scrollDirection = (/^x$/i.test(opts.axis) ? "Left" : "Top"),
									scrollOffset = parseFloat(opts.offset) || 0,
									scrollPositionCurrent,
									scrollPositionCurrentAlternate,
									scrollPositionEnd;
	
							/* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
							 as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */
							if (opts.container) {
								/* Ensure that either a jQuery object or a raw DOM element was passed in. */
								if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
									/* Extract the raw DOM element from the jQuery wrapper. */
									opts.container = opts.container[0] || opts.container;
									/* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
									 (due to the user's natural interaction with the page). */
									scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */
	
									/* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
									 -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
									 the scroll container's current scroll position. */
									scrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */
									/* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */
								} else {
									opts.container = null;
								}
							} else {
								/* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
								 the appropriate cached property names (which differ based on browser type). */
								scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */
								/* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
								scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]]; /* GET */
	
								/* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
								 and therefore end values do not need to be compounded onto current values. */
								scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
							}
	
							/* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */
							tweensContainer = {
								scroll: {
									rootPropertyValue: false,
									startValue: scrollPositionCurrent,
									currentValue: scrollPositionCurrent,
									endValue: scrollPositionEnd,
									unitType: "",
									easing: opts.easing,
									scrollData: {
										container: opts.container,
										direction: scrollDirection,
										alternateValue: scrollPositionCurrentAlternate
									}
								},
								element: element
							};
	
							if (Velocity.debug) {
								console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);
							}
	
							/******************************************
							 Tween Data Construction (for Reverse)
							 ******************************************/
	
							/* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
							 that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
							 the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */
							/* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */
							/* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
							 there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
							 as reverting to the element's values as they were prior to the previous *Velocity* call. */
						} else if (action === "reverse") {
							data = Data(element);
	
							/* Abort if there is no prior animation data to reverse to. */
							if (!data) {
								return;
							}
	
							if (!data.tweensContainer) {
								/* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
								$.dequeue(element, opts.queue);
	
								return;
							} else {
								/*********************
								 Options Parsing
								 *********************/
	
								/* If the element was hidden via the display option in the previous call,
								 revert display to "auto" prior to reversal so that the element is visible again. */
								if (data.opts.display === "none") {
									data.opts.display = "auto";
								}
	
								if (data.opts.visibility === "hidden") {
									data.opts.visibility = "visible";
								}
	
								/* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
								 Further, remove the previous call's callback options; typically, users do not want these to be refired. */
								data.opts.loop = false;
								data.opts.begin = null;
								data.opts.complete = null;
	
								/* Since we're extending an opts object that has already been extended with the defaults options object,
								 we remove non-explicitly-defined properties that are auto-assigned values. */
								if (!options.easing) {
									delete opts.easing;
								}
	
								if (!options.duration) {
									delete opts.duration;
								}
	
								/* The opts object used for reversal is an extension of the options object optionally passed into this
								 reverse call plus the options used in the previous Velocity call. */
								opts = $.extend({}, data.opts, opts);
	
								/*************************************
								 Tweens Container Reconstruction
								 *************************************/
	
								/* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
								lastTweensContainer = $.extend(true, {}, data ? data.tweensContainer : null);
	
								/* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */
								for (var lastTween in lastTweensContainer) {
									/* In addition to tween data, tweensContainers contain an element property that we ignore here. */
									if (lastTweensContainer.hasOwnProperty(lastTween) && lastTween !== "element") {
										var lastStartValue = lastTweensContainer[lastTween].startValue;
	
										lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
										lastTweensContainer[lastTween].endValue = lastStartValue;
	
										/* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
										 Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
										 The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
										if (!Type.isEmptyObject(options)) {
											lastTweensContainer[lastTween].easing = opts.easing;
										}
	
										if (Velocity.debug) {
											console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
										}
									}
								}
	
								tweensContainer = lastTweensContainer;
							}
	
							/*****************************************
							 Tween Data Construction (for Start)
							 *****************************************/
	
						} else if (action === "start") {
	
							/*************************
							 Value Transferring
							 *************************/
	
							/* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
							 while the element was in the process of being animated by Velocity, then this current call is safe to use
							 the end values from the prior call as its start values. Velocity attempts to perform this value transfer
							 process whenever possible in order to avoid requerying the DOM. */
							/* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
							 then the DOM is queried for the element's current values as a last resort. */
							/* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */
	
							data = Data(element);
	
							/* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
							 to transfer over end values to use as start values. If it's set to true and there is a previous
							 Velocity call to pull values from, do so. */
							if (data && data.tweensContainer && data.isAnimating === true) {
								lastTweensContainer = data.tweensContainer;
							}
	
							/***************************
							 Tween Data Calculation
							 ***************************/
	
							/* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
							/* Property map values can either take the form of 1) a single value representing the end value,
							 or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
							 The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
							 the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
							var parsePropertyValue = function(valueData, skipResolvingEasing) {
								var endValue, easing, startValue;
	
								/* If we have a function as the main argument then resolve it first, in case it returns an array that needs to be split */
								if (Type.isFunction(valueData)) {
									valueData = valueData.call(element, elementArrayIndex, elementsLength);
								}
	
								/* Handle the array format, which can be structured as one of three potential overloads:
								 A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
								if (Type.isArray(valueData)) {
									/* endValue is always the first item in the array. Don't bother validating endValue's value now
									 since the ensuing property cycling logic does that. */
									endValue = valueData[0];
	
									/* Two-item array format: If the second item is a number, function, or hex string, treat it as a
									 start value since easings can only be non-hex strings or arrays. */
									if ((!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
										startValue = valueData[1];
										/* Two or three-item array: If the second item is a non-hex string easing name or an array, treat it as an easing. */
									} else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1]) && Velocity.Easings[valueData[1]]) || Type.isArray(valueData[1])) {
										easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);
	
										/* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
										startValue = valueData[2];
									} else {
										startValue = valueData[1] || valueData[2];
									}
									/* Handle the single-value format. */
								} else {
									endValue = valueData;
								}
	
								/* Default to the call's easing if a per-property easing type was not defined. */
								if (!skipResolvingEasing) {
									easing = easing || opts.easing;
								}
	
								/* If functions were passed in as values, pass the function the current element as its context,
								 plus the element's index and the element set's size as arguments. Then, assign the returned value. */
								if (Type.isFunction(endValue)) {
									endValue = endValue.call(element, elementArrayIndex, elementsLength);
								}
	
								if (Type.isFunction(startValue)) {
									startValue = startValue.call(element, elementArrayIndex, elementsLength);
								}
	
								/* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
								return [endValue || 0, easing, startValue];
							};
	
							var fixPropertyValue = function(property, valueData) {
								/* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
								var rootProperty = CSS.Hooks.getRoot(property),
										rootPropertyValue = false,
										/* Parse out endValue, easing, and startValue from the property's data. */
										endValue = valueData[0],
										easing = valueData[1],
										startValue = valueData[2],
										pattern;
	
								/**************************
								 Start Value Sourcing
								 **************************/
	
								/* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
								 inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
								 Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
								/* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
								 there is no way to check for their explicit browser support, and so we skip skip this check for them. */
								if ((!data || !data.isSVG) && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
									if (Velocity.debug) {
										console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");
									}
									return;
								}
	
								/* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
								 animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
								 a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
								if (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
									startValue = 0;
								}
	
								/* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
								 for all of the current call's properties that were *also* animated in the previous call. */
								/* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */
								if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
									if (startValue === undefined) {
										startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
									}
	
									/* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
									 instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
									 attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */
									rootPropertyValue = data.rootPropertyValueCache[rootProperty];
									/* If values were not transferred from a previous Velocity call, query the DOM as needed. */
								} else {
									/* Handle hooked properties. */
									if (CSS.Hooks.registered[property]) {
										if (startValue === undefined) {
											rootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */
											/* Note: The following getPropertyValue() call does not actually trigger a DOM query;
											 getPropertyValue() will extract the hook from rootPropertyValue. */
											startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
											/* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
											 just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
											 root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
											 to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */
										} else {
											/* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
											rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
										}
										/* Handle non-hooked properties that haven't already been defined via forcefeeding. */
									} else if (startValue === undefined) {
										startValue = CSS.getPropertyValue(element, property); /* GET */
									}
								}
	
								/**************************
								 Value Data Extraction
								 **************************/
	
								var separatedValue,
										endValueUnitType,
										startValueUnitType,
										operator = false;
	
								/* Separates a property value into its numeric value and its unit type. */
								var separateValue = function(property, value) {
									var unitType,
											numericValue;
	
									numericValue = (value || "0")
											.toString()
											.toLowerCase()
											/* Match the unit type at the end of the value. */
											.replace(/[%A-z]+$/, function(match) {
												/* Grab the unit type. */
												unitType = match;
	
												/* Strip the unit type off of value. */
												return "";
											});
	
									/* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
									if (!unitType) {
										unitType = CSS.Values.getUnitType(property);
									}
	
									return [numericValue, unitType];
								};
	
								if (startValue !== endValue && Type.isString(startValue) && Type.isString(endValue)) {
									pattern = "";
									var iStart = 0, // index in startValue
											iEnd = 0, // index in endValue
											aStart = [], // array of startValue numbers
											aEnd = [], // array of endValue numbers
											inCalc = 0, // Keep track of being inside a "calc()" so we don't duplicate it
											inRGB = 0, // Keep track of being inside an RGB as we can't use fractional values
											inRGBA = 0; // Keep track of being inside an RGBA as we must pass fractional for the alpha channel
	
									startValue = CSS.Hooks.fixColors(startValue);
									endValue = CSS.Hooks.fixColors(endValue);
									while (iStart < startValue.length && iEnd < endValue.length) {
										var cStart = startValue[iStart],
												cEnd = endValue[iEnd];
	
										if (/[\d\.-]/.test(cStart) && /[\d\.-]/.test(cEnd)) {
											var tStart = cStart, // temporary character buffer
													tEnd = cEnd, // temporary character buffer
													dotStart = ".", // Make sure we can only ever match a single dot in a decimal
													dotEnd = "."; // Make sure we can only ever match a single dot in a decimal
	
											while (++iStart < startValue.length) {
												cStart = startValue[iStart];
												if (cStart === dotStart) {
													dotStart = ".."; // Can never match two characters
												} else if (!/\d/.test(cStart)) {
													break;
												}
												tStart += cStart;
											}
											while (++iEnd < endValue.length) {
												cEnd = endValue[iEnd];
												if (cEnd === dotEnd) {
													dotEnd = ".."; // Can never match two characters
												} else if (!/\d/.test(cEnd)) {
													break;
												}
												tEnd += cEnd;
											}
											var uStart = CSS.Hooks.getUnit(startValue, iStart), // temporary unit type
													uEnd = CSS.Hooks.getUnit(endValue, iEnd); // temporary unit type
	
											iStart += uStart.length;
											iEnd += uEnd.length;
											if (uStart === uEnd) {
												// Same units
												if (tStart === tEnd) {
													// Same numbers, so just copy over
													pattern += tStart + uStart;
												} else {
													// Different numbers, so store them
													pattern += "{" + aStart.length + (inRGB ? "!" : "") + "}" + uStart;
													aStart.push(parseFloat(tStart));
													aEnd.push(parseFloat(tEnd));
												}
											} else {
												// Different units, so put into a "calc(from + to)" and animate each side to/from zero
												var nStart = parseFloat(tStart),
														nEnd = parseFloat(tEnd);
	
												pattern += (inCalc < 5 ? "calc" : "") + "("
														+ (nStart ? "{" + aStart.length + (inRGB ? "!" : "") + "}" : "0") + uStart
														+ " + "
														+ (nEnd ? "{" + (aStart.length + (nStart ? 1 : 0)) + (inRGB ? "!" : "") + "}" : "0") + uEnd
														+ ")";
												if (nStart) {
													aStart.push(nStart);
													aEnd.push(0);
												}
												if (nEnd) {
													aStart.push(0);
													aEnd.push(nEnd);
												}
											}
										} else if (cStart === cEnd) {
											pattern += cStart;
											iStart++;
											iEnd++;
											// Keep track of being inside a calc()
											if (inCalc === 0 && cStart === "c"
													|| inCalc === 1 && cStart === "a"
													|| inCalc === 2 && cStart === "l"
													|| inCalc === 3 && cStart === "c"
													|| inCalc >= 4 && cStart === "("
													) {
												inCalc++;
											} else if ((inCalc && inCalc < 5)
													|| inCalc >= 4 && cStart === ")" && --inCalc < 5) {
												inCalc = 0;
											}
											// Keep track of being inside an rgb() / rgba()
											if (inRGB === 0 && cStart === "r"
													|| inRGB === 1 && cStart === "g"
													|| inRGB === 2 && cStart === "b"
													|| inRGB === 3 && cStart === "a"
													|| inRGB >= 3 && cStart === "("
													) {
												if (inRGB === 3 && cStart === "a") {
													inRGBA = 1;
												}
												inRGB++;
											} else if (inRGBA && cStart === ",") {
												if (++inRGBA > 3) {
													inRGB = inRGBA = 0;
												}
											} else if ((inRGBA && inRGB < (inRGBA ? 5 : 4))
													|| inRGB >= (inRGBA ? 4 : 3) && cStart === ")" && --inRGB < (inRGBA ? 5 : 4)) {
												inRGB = inRGBA = 0;
											}
										} else {
											inCalc = 0;
											// TODO: changing units, fixing colours
											break;
										}
									}
									if (iStart !== startValue.length || iEnd !== endValue.length) {
										if (Velocity.debug) {
											console.error("Trying to pattern match mis-matched strings [\"" + endValue + "\", \"" + startValue + "\"]");
										}
										pattern = undefined;
									}
									if (pattern) {
										if (aStart.length) {
											if (Velocity.debug) {
												console.log("Pattern found \"" + pattern + "\" -> ", aStart, aEnd, "[" + startValue + "," + endValue + "]");
											}
											startValue = aStart;
											endValue = aEnd;
											endValueUnitType = startValueUnitType = "";
										} else {
											pattern = undefined;
										}
									}
								}
	
								if (!pattern) {
									/* Separate startValue. */
									separatedValue = separateValue(property, startValue);
									startValue = separatedValue[0];
									startValueUnitType = separatedValue[1];
	
									/* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */
									separatedValue = separateValue(property, endValue);
									endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {
										operator = subMatch;
	
										/* Strip the operator off of the value. */
										return "";
									});
									endValueUnitType = separatedValue[1];
	
									/* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */
									startValue = parseFloat(startValue) || 0;
									endValue = parseFloat(endValue) || 0;
	
									/***************************************
									 Property-Specific Value Conversion
									 ***************************************/
	
									/* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
									if (endValueUnitType === "%") {
										/* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
										 which is identical to the em unit's behavior, so we piggyback off of that. */
										if (/^(fontSize|lineHeight)$/.test(property)) {
											/* Convert % into an em decimal value. */
											endValue = endValue / 100;
											endValueUnitType = "em";
											/* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
										} else if (/^scale/.test(property)) {
											endValue = endValue / 100;
											endValueUnitType = "";
											/* For RGB components, take the defined percentage of 255 and strip off the unit type. */
										} else if (/(Red|Green|Blue)$/i.test(property)) {
											endValue = (endValue / 100) * 255;
											endValueUnitType = "";
										}
									}
								}
	
								/***************************
								 Unit Ratio Calculation
								 ***************************/
	
								/* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
								 %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
								 for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
								 from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
								 1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
								 2) Converting startValue into the same unit of measurement as endValue based on these ratios. */
								/* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
								 setting values with the target unit type then comparing the returned pixel value. */
								/* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
								 of batching the SETs and GETs together upfront outweights the potential overhead
								 of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */
								/* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */
								var calculateUnitRatios = function() {
	
									/************************
									 Same Ratio Checks
									 ************************/
	
									/* The properties below are used to determine whether the element differs sufficiently from this call's
									 previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
									 of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
									 this is done to minimize DOM querying. */
									var sameRatioIndicators = {
										myParent: element.parentNode || document.body, /* GET */
										position: CSS.getPropertyValue(element, "position"), /* GET */
										fontSize: CSS.getPropertyValue(element, "fontSize") /* GET */
									},
											/* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
											samePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),
											/* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
											sameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);
	
									/* Store these ratio indicators call-wide for the next element to compare against. */
									callUnitConversionData.lastParent = sameRatioIndicators.myParent;
									callUnitConversionData.lastPosition = sameRatioIndicators.position;
									callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;
	
									/***************************
									 Element-Specific Units
									 ***************************/
	
									/* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
									 of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */
									var measurement = 100,
											unitRatios = {};
	
									if (!sameEmRatio || !samePercentRatio) {
										var dummy = data && data.isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");
	
										Velocity.init(dummy);
										sameRatioIndicators.myParent.appendChild(dummy);
	
										/* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
										 Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
										/* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
										$.each(["overflow", "overflowX", "overflowY"], function(i, property) {
											Velocity.CSS.setPropertyValue(dummy, property, "hidden");
										});
										Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
										Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
										Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");
	
										/* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
										$.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(i, property) {
											Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
										});
										/* paddingLeft arbitrarily acts as our proxy property for the em ratio. */
										Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");
	
										/* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
										unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement; /* GET */
										unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement; /* GET */
										unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement; /* GET */
	
										sameRatioIndicators.myParent.removeChild(dummy);
									} else {
										unitRatios.emToPx = callUnitConversionData.lastEmToPx;
										unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
										unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
									}
	
									/***************************
									 Element-Agnostic Units
									 ***************************/
	
									/* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
									 once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
									 that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
									 so we calculate it now. */
									if (callUnitConversionData.remToPx === null) {
										/* Default to browsers' default fontSize of 16px in the case of 0. */
										callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16; /* GET */
									}
	
									/* Similarly, viewport units are %-relative to the window's inner dimensions. */
									if (callUnitConversionData.vwToPx === null) {
										callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */
										callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */
									}
	
									unitRatios.remToPx = callUnitConversionData.remToPx;
									unitRatios.vwToPx = callUnitConversionData.vwToPx;
									unitRatios.vhToPx = callUnitConversionData.vhToPx;
	
									if (Velocity.debug >= 1) {
										console.log("Unit ratios: " + JSON.stringify(unitRatios), element);
									}
									return unitRatios;
								};
	
								/********************
								 Unit Conversion
								 ********************/
	
								/* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
								if (/[\/*]/.test(operator)) {
									endValueUnitType = startValueUnitType;
									/* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
									 is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
									 on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
									 would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */
									/* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */
								} else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {
									/* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
									/* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
									 match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
									 which remains past the point of the animation's completion. */
									if (endValue === 0) {
										endValueUnitType = startValueUnitType;
									} else {
										/* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
										 If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
										elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();
	
										/* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
										/* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
										var axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x") ? "x" : "y";
	
										/* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
										 1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */
										switch (startValueUnitType) {
											case "%":
												/* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
												 Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
												 to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
												startValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
												break;
	
											case "px":
												/* px acts as our midpoint in the unit conversion process; do nothing. */
												break;
	
											default:
												startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
										}
	
										/* Invert the px ratios to convert into to the target unit. */
										switch (endValueUnitType) {
											case "%":
												startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
												break;
	
											case "px":
												/* startValue is already in px, do nothing; we're done. */
												break;
	
											default:
												startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
										}
									}
								}
	
								/*********************
								 Relative Values
								 *********************/
	
								/* Operator logic must be performed last since it requires unit-normalized start and end values. */
								/* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
								 to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
								 50 points is added on top of the current % value. */
								switch (operator) {
									case "+":
										endValue = startValue + endValue;
										break;
	
									case "-":
										endValue = startValue - endValue;
										break;
	
									case "*":
										endValue = startValue * endValue;
										break;
	
									case "/":
										endValue = startValue / endValue;
										break;
								}
	
								/**************************
								 tweensContainer Push
								 **************************/
	
								/* Construct the per-property tween object, and push it to the element's tweensContainer. */
								tweensContainer[property] = {
									rootPropertyValue: rootPropertyValue,
									startValue: startValue,
									currentValue: startValue,
									endValue: endValue,
									unitType: endValueUnitType,
									easing: easing
								};
								if (pattern) {
									tweensContainer[property].pattern = pattern;
								}
	
								if (Velocity.debug) {
									console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
								}
							};
	
							/* Create a tween out of each property, and append its associated data to tweensContainer. */
							for (var property in propertiesMap) {
	
								if (!propertiesMap.hasOwnProperty(property)) {
									continue;
								}
								/* The original property name's format must be used for the parsePropertyValue() lookup,
								 but we then use its camelCase styling to normalize it for manipulation. */
								var propertyName = CSS.Names.camelCase(property),
										valueData = parsePropertyValue(propertiesMap[property]);
	
								/* Find shorthand color properties that have been passed a hex string. */
								/* Would be quicker to use CSS.Lists.colors.includes() if possible */
								if (_inArray(CSS.Lists.colors, propertyName)) {
									/* Parse the value data for each shorthand. */
									var endValue = valueData[0],
											easing = valueData[1],
											startValue = valueData[2];
	
									if (CSS.RegEx.isHex.test(endValue)) {
										/* Convert the hex strings into their RGB component arrays. */
										var colorComponents = ["Red", "Green", "Blue"],
												endValueRGB = CSS.Values.hexToRgb(endValue),
												startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;
	
										/* Inject the RGB component tweens into propertiesMap. */
										for (var i = 0; i < colorComponents.length; i++) {
											var dataArray = [endValueRGB[i]];
	
											if (easing) {
												dataArray.push(easing);
											}
	
											if (startValueRGB !== undefined) {
												dataArray.push(startValueRGB[i]);
											}
	
											fixPropertyValue(propertyName + colorComponents[i], dataArray);
										}
										/* If we have replaced a shortcut color value then don't update the standard property name */
										continue;
									}
								}
								fixPropertyValue(propertyName, valueData);
							}
	
							/* Along with its property data, store a reference to the element itself onto tweensContainer. */
							tweensContainer.element = element;
						}
	
						/*****************
						 Call Push
						 *****************/
	
						/* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
						 being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */
						if (tweensContainer.element) {
							/* Apply the "velocity-animating" indicator class. */
							CSS.Values.addClass(element, "velocity-animating");
	
							/* The call array houses the tweensContainers for each element being animated in the current call. */
							call.push(tweensContainer);
	
							data = Data(element);
	
							if (data) {
								/* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
								if (opts.queue === "") {
	
									data.tweensContainer = tweensContainer;
									data.opts = opts;
								}
	
								/* Switch on the element's animating flag. */
								data.isAnimating = true;
							}
	
							/* Once the final element in this call's element set has been processed, push the call array onto
							 Velocity.State.calls for the animation tick to immediately begin processing. */
							if (elementsIndex === elementsLength - 1) {
								/* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
								 Anything on this call container is subjected to tick() processing. */
								Velocity.State.calls.push([call, elements, opts, null, promiseData.resolver, null, 0]);
	
								/* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
								if (Velocity.State.isTicking === false) {
									Velocity.State.isTicking = true;
	
									/* Start the tick loop. */
									tick();
								}
							} else {
								elementsIndex++;
							}
						}
					}
	
					/* When the queue option is set to false, the call skips the element's queue and fires immediately. */
					if (opts.queue === false) {
						/* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
						 we manually inject the delay property here with an explicit setTimeout. */
						if (opts.delay) {
	
							/* Temporarily store delayed elements to facilitate access for global pause/resume */
							var callIndex = Velocity.State.delayedElements.count++;
							Velocity.State.delayedElements[callIndex] = element;
	
							var delayComplete = (function(index) {
								return function() {
									/* Clear the temporary element */
									Velocity.State.delayedElements[index] = false;
	
									/* Finally, issue the call */
									buildQueue();
								};
							})(callIndex);
	
							Data(element).delayBegin = (new Date()).getTime();
							Data(element).delay = parseFloat(opts.delay);
							Data(element).delayTimer = {
								setTimeout: setTimeout(buildQueue, parseFloat(opts.delay)),
								next: delayComplete
							};
						} else {
							buildQueue();
						}
						/* Otherwise, the call undergoes element queueing as normal. */
						/* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */
					} else {
						$.queue(element, opts.queue, function(next, clearQueue) {
							/* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
							 so it's fine if this is repeatedly triggered for each element in the associated call.) */
							if (clearQueue === true) {
								if (promiseData.promise) {
									promiseData.resolver(elements);
								}
	
								/* Do not continue with animation queueing. */
								return true;
							}
	
							/* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
							 See completeCall() for further details. */
							Velocity.velocityQueueEntryFlag = true;
	
							buildQueue(next);
						});
					}
	
					/*********************
					 Auto-Dequeuing
					 *********************/
	
					/* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
					 must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
					 for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
					 queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
					 first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
					/* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
					 each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
					/* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
					 Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */
					if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
						$.dequeue(element);
					}
				}
	
				/**************************
				 Element Set Iteration
				 **************************/
	
				/* If the "nodeType" property exists on the elements variable, we're animating a single element.
				 Place it in an array so that $.each() can iterate over it. */
				$.each(elements, function(i, element) {
					/* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
					if (Type.isNode(element)) {
						processElement(element, i);
					}
				});
	
				/******************
				 Option: Loop
				 ******************/
	
				/* The loop option accepts an integer indicating how many times the element should loop between the values in the
				 current call's properties map and the element's property values prior to this call. */
				/* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
				 to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
				 which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */
				opts = $.extend({}, Velocity.defaults, options);
				opts.loop = parseInt(opts.loop, 10);
				var reverseCallsCount = (opts.loop * 2) - 1;
	
				if (opts.loop) {
					/* Double the loop count to convert it into its appropriate number of "reverse" calls.
					 Subtract 1 from the resulting value since the current call is included in the total alternation count. */
					for (var x = 0; x < reverseCallsCount; x++) {
						/* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
						 isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
						 call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
						var reverseOptions = {
							delay: opts.delay,
							progress: opts.progress
						};
	
						/* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
						 so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */
						if (x === reverseCallsCount - 1) {
							reverseOptions.display = opts.display;
							reverseOptions.visibility = opts.visibility;
							reverseOptions.complete = opts.complete;
						}
	
						animate(elements, "reverse", reverseOptions);
					}
				}
	
				/***************
				 Chaining
				 ***************/
	
				/* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
				return getChain();
			};
	
			/* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */
			Velocity = $.extend(animate, Velocity);
			/* For legacy support, also expose the literal animate method. */
			Velocity.animate = animate;
	
			/**************
			 Timing
			 **************/
	
			/* Ticker function. */
			var ticker = window.requestAnimationFrame || rAFShim;
	
			/* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
			 To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
			 devices to avoid wasting battery power on inactive tabs. */
			/* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */
			if (!Velocity.State.isMobile && document.hidden !== undefined) {
				var updateTicker = function() {
					/* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
					if (document.hidden) {
						ticker = function(callback) {
							/* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
							return setTimeout(function() {
								callback(true);
							}, 16);
						};
	
						/* The rAF loop has been paused by the browser, so we manually restart the tick. */
						tick();
					} else {
						ticker = window.requestAnimationFrame || rAFShim;
					}
				};
	
				/* Page could be sitting in the background at this time (i.e. opened as new tab) so making sure we use correct ticker from the start */
				updateTicker();
	
				/* And then run check again every time visibility changes */
				document.addEventListener("visibilitychange", updateTicker);
			}
	
			/************
			 Tick
			 ************/
	
			/* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */
			function tick(timestamp) {
				/* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
				 We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
				 the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
				 calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
				 the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
				 by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
				if (timestamp) {
					/* We normally use RAF's high resolution timestamp but as it can be significantly offset when the browser is
					 under high stress we give the option for choppiness over allowing the browser to drop huge chunks of frames.
					 We use performance.now() and shim it if it doesn't exist for when the tab is hidden. */
					var timeCurrent = Velocity.timestamp && timestamp !== true ? timestamp : performance.now();
	
					/********************
					 Call Iteration
					 ********************/
	
					var callsLength = Velocity.State.calls.length;
	
					/* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
					 when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
					 has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
					if (callsLength > 10000) {
						Velocity.State.calls = compactSparseArray(Velocity.State.calls);
						callsLength = Velocity.State.calls.length;
					}
	
					/* Iterate through each active call. */
					for (var i = 0; i < callsLength; i++) {
						/* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
						if (!Velocity.State.calls[i]) {
							continue;
						}
	
						/************************
						 Call-Wide Variables
						 ************************/
	
						var callContainer = Velocity.State.calls[i],
								call = callContainer[0],
								opts = callContainer[2],
								timeStart = callContainer[3],
								firstTick = !timeStart,
								tweenDummyValue = null,
								pauseObject = callContainer[5],
								millisecondsEllapsed = callContainer[6];
	
	
	
						/* If timeStart is undefined, then this is the first time that this call has been processed by tick().
						 We assign timeStart now so that its value is as close to the real animation start time as possible.
						 (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
						 between that time and now would cause the first few frames of the tween to be skipped since
						 percentComplete is calculated relative to timeStart.) */
						/* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
						 first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
						 same style value as the element's current value. */
						if (!timeStart) {
							timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
						}
	
						/* If a pause object is present, skip processing unless it has been set to resume */
						if (pauseObject) {
							if (pauseObject.resume === true) {
								/* Update the time start to accomodate the paused completion amount */
								timeStart = callContainer[3] = Math.round(timeCurrent - millisecondsEllapsed - 16);
	
								/* Remove pause object after processing */
								callContainer[5] = null;
							} else {
								continue;
							}
						}
	
						millisecondsEllapsed = callContainer[6] = timeCurrent - timeStart;
	
						/* The tween's completion percentage is relative to the tween's start time, not the tween's start value
						 (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
						 Accordingly, we ensure that percentComplete does not exceed 1. */
						var percentComplete = Math.min((millisecondsEllapsed) / opts.duration, 1);
	
						/**********************
						 Element Iteration
						 **********************/
	
						/* For every call, iterate through each of the elements in its set. */
						for (var j = 0, callLength = call.length; j < callLength; j++) {
							var tweensContainer = call[j],
									element = tweensContainer.element;
	
							/* Check to see if this element has been deleted midway through the animation by checking for the
							 continued existence of its data cache. If it's gone, or the element is currently paused, skip animating this element. */
							if (!Data(element)) {
								continue;
							}
	
							var transformPropertyExists = false;
	
							/**********************************
							 Display & Visibility Toggling
							 **********************************/
	
							/* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
							 (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */
							if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
								if (opts.display === "flex") {
									var flexValues = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
	
									$.each(flexValues, function(i, flexValue) {
										CSS.setPropertyValue(element, "display", flexValue);
									});
								}
	
								CSS.setPropertyValue(element, "display", opts.display);
							}
	
							/* Same goes with the visibility option, but its "none" equivalent is "hidden". */
							if (opts.visibility !== undefined && opts.visibility !== "hidden") {
								CSS.setPropertyValue(element, "visibility", opts.visibility);
							}
	
							/************************
							 Property Iteration
							 ************************/
	
							/* For every element, iterate through each property. */
							for (var property in tweensContainer) {
								/* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
								if (tweensContainer.hasOwnProperty(property) && property !== "element") {
									var tween = tweensContainer[property],
											currentValue,
											/* Easing can either be a pre-genereated function or a string that references a pre-registered easing
											 on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
											easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;
	
									/******************************
									 Current Value Calculation
									 ******************************/
	
									if (Type.isString(tween.pattern)) {
										var patternReplace = percentComplete === 1 ?
												function($0, index, round) {
													var result = tween.endValue[index];
	
													return round ? Math.round(result) : result;
												} :
												function($0, index, round) {
													var startValue = tween.startValue[index],
															tweenDelta = tween.endValue[index] - startValue,
															result = startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));
	
													return round ? Math.round(result) : result;
												};
	
										currentValue = tween.pattern.replace(/{(\d+)(!)?}/g, patternReplace);
									} else if (percentComplete === 1) {
										/* If this is the last tick pass (if we've reached 100% completion for this tween),
										 ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
										currentValue = tween.endValue;
									} else {
										/* Otherwise, calculate currentValue based on the current delta from startValue. */
										var tweenDelta = tween.endValue - tween.startValue;
	
										currentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));
										/* If no value change is occurring, don't proceed with DOM updating. */
									}
									if (!firstTick && (currentValue === tween.currentValue)) {
										continue;
									}
	
									tween.currentValue = currentValue;
	
									/* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
									 it can be passed into the progress callback. */
									if (property === "tween") {
										tweenDummyValue = currentValue;
									} else {
										/******************
										 Hooks: Part I
										 ******************/
										var hookRoot;
	
										/* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
										 for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
										 rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
										 updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
										 subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
										if (CSS.Hooks.registered[property]) {
											hookRoot = CSS.Hooks.getRoot(property);
	
											var rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];
	
											if (rootPropertyValueCache) {
												tween.rootPropertyValue = rootPropertyValueCache;
											}
										}
	
										/*****************
										 DOM Update
										 *****************/
	
										/* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
										/* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */
										var adjustedSetData = CSS.setPropertyValue(element, /* SET */
												property,
												tween.currentValue + (IE < 9 && parseFloat(currentValue) === 0 ? "" : tween.unitType),
												tween.rootPropertyValue,
												tween.scrollData);
	
										/*******************
										 Hooks: Part II
										 *******************/
	
										/* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */
										if (CSS.Hooks.registered[property]) {
											/* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
											if (CSS.Normalizations.registered[hookRoot]) {
												Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
											} else {
												Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
											}
										}
	
										/***************
										 Transforms
										 ***************/
	
										/* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */
										if (adjustedSetData[0] === "transform") {
											transformPropertyExists = true;
										}
	
									}
								}
							}
	
							/****************
							 mobileHA
							 ****************/
	
							/* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
							 It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */
							if (opts.mobileHA) {
								/* Don't set the null transform hack if we've already done so. */
								if (Data(element).transformCache.translate3d === undefined) {
									/* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
									Data(element).transformCache.translate3d = "(0px, 0px, 0px)";
	
									transformPropertyExists = true;
								}
							}
	
							if (transformPropertyExists) {
								CSS.flushTransformCache(element);
							}
						}
	
						/* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
						 Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */
						if (opts.display !== undefined && opts.display !== "none") {
							Velocity.State.calls[i][2].display = false;
						}
						if (opts.visibility !== undefined && opts.visibility !== "hidden") {
							Velocity.State.calls[i][2].visibility = false;
						}
	
						/* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */
						if (opts.progress) {
							opts.progress.call(callContainer[1],
									callContainer[1],
									percentComplete,
									Math.max(0, (timeStart + opts.duration) - timeCurrent),
									timeStart,
									tweenDummyValue);
						}
	
						/* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */
						if (percentComplete === 1) {
							completeCall(i);
						}
					}
				}
	
				/* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */
				if (Velocity.State.isTicking) {
					ticker(tick);
				}
			}
	
			/**********************
			 Call Completion
			 **********************/
	
			/* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */
			function completeCall(callIndex, isStopped) {
				/* Ensure the call exists. */
				if (!Velocity.State.calls[callIndex]) {
					return false;
				}
	
				/* Pull the metadata from the call. */
				var call = Velocity.State.calls[callIndex][0],
						elements = Velocity.State.calls[callIndex][1],
						opts = Velocity.State.calls[callIndex][2],
						resolver = Velocity.State.calls[callIndex][4];
	
				var remainingCallsExist = false;
	
				/*************************
				 Element Finalization
				 *************************/
	
				for (var i = 0, callLength = call.length; i < callLength; i++) {
					var element = call[i].element;
	
					/* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
					/* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */
					/* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
					if (!isStopped && !opts.loop) {
						if (opts.display === "none") {
							CSS.setPropertyValue(element, "display", opts.display);
						}
	
						if (opts.visibility === "hidden") {
							CSS.setPropertyValue(element, "visibility", opts.visibility);
						}
					}
	
					/* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
					 a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
					 an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
					 we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
					 is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */
					var data = Data(element);
	
					if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
						/* The element may have been deleted. Ensure that its data cache still exists before acting on it. */
						if (data) {
							data.isAnimating = false;
							/* Clear the element's rootPropertyValueCache, which will become stale. */
							data.rootPropertyValueCache = {};
	
							var transformHAPropertyExists = false;
							/* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */
							$.each(CSS.Lists.transforms3D, function(i, transformName) {
								var defaultValue = /^scale/.test(transformName) ? 1 : 0,
										currentValue = data.transformCache[transformName];
	
								if (data.transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
									transformHAPropertyExists = true;
	
									delete data.transformCache[transformName];
								}
							});
	
							/* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
							if (opts.mobileHA) {
								transformHAPropertyExists = true;
								delete data.transformCache.translate3d;
							}
	
							/* Flush the subproperty removals to the DOM. */
							if (transformHAPropertyExists) {
								CSS.flushTransformCache(element);
							}
	
							/* Remove the "velocity-animating" indicator class. */
							CSS.Values.removeClass(element, "velocity-animating");
						}
					}
	
					/*********************
					 Option: Complete
					 *********************/
	
					/* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
					/* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */
					if (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {
						/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
						try {
							opts.complete.call(elements, elements);
						} catch (error) {
							setTimeout(function() {
								throw error;
							}, 1);
						}
					}
	
					/**********************
					 Promise Resolving
					 **********************/
	
					/* Note: Infinite loops don't return promises. */
					if (resolver && opts.loop !== true) {
						resolver(elements);
					}
	
					/****************************
					 Option: Loop (Infinite)
					 ****************************/
	
					if (data && opts.loop === true && !isStopped) {
						/* If a rotateX/Y/Z property is being animated by 360 deg with loop:true, swap tween start/end values to enable
						 continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
						$.each(data.tweensContainer, function(propertyName, tweenContainer) {
							if (/^rotate/.test(propertyName) && ((parseFloat(tweenContainer.startValue) - parseFloat(tweenContainer.endValue)) % 360 === 0)) {
								var oldStartValue = tweenContainer.startValue;
	
								tweenContainer.startValue = tweenContainer.endValue;
								tweenContainer.endValue = oldStartValue;
							}
	
							if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
								tweenContainer.endValue = 0;
								tweenContainer.startValue = 100;
							}
						});
	
						Velocity(element, "reverse", {loop: true, delay: opts.delay});
					}
	
					/***************
					 Dequeueing
					 ***************/
	
					/* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
					 which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
					 $.dequeue() must still be called in order to completely clear jQuery's animation queue. */
					if (opts.queue !== false) {
						$.dequeue(element, opts.queue);
					}
				}
	
				/************************
				 Calls Array Cleanup
				 ************************/
	
				/* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
				 (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */
				Velocity.State.calls[callIndex] = false;
	
				/* Iterate through the calls array to determine if this was the final in-progress animation.
				 If so, set a flag to end ticking and clear the calls array. */
				for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
					if (Velocity.State.calls[j] !== false) {
						remainingCallsExist = true;
	
						break;
					}
				}
	
				if (remainingCallsExist === false) {
					/* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
					Velocity.State.isTicking = false;
	
					/* Clear the calls array so that its length is reset. */
					delete Velocity.State.calls;
					Velocity.State.calls = [];
				}
			}
	
			/******************
			 Frameworks
			 ******************/
	
			/* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
			 If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
			 also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
			 accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
			 (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
			global.Velocity = Velocity;
	
			if (global !== window) {
				/* Assign the element function to Velocity's core animate() method. */
				global.fn.velocity = animate;
				/* Assign the object function's defaults to Velocity's global defaults object. */
				global.fn.velocity.defaults = Velocity.defaults;
			}
	
			/***********************
			 Packaged Redirects
			 ***********************/
	
			/* slideUp, slideDown */
			$.each(["Down", "Up"], function(i, direction) {
				Velocity.Redirects["slide" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
					var opts = $.extend({}, options),
							begin = opts.begin,
							complete = opts.complete,
							inlineValues = {},
							computedValues = {height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: ""};
	
					if (opts.display === undefined) {
						/* Show the element before slideDown begins and hide the element after slideUp completes. */
						/* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
						opts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none");
					}
	
					opts.begin = function() {
						/* If the user passed in a begin callback, fire it now. */
						if (elementsIndex === 0 && begin) {
							begin.call(elements, elements);
						}
	
						/* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
						for (var property in computedValues) {
							if (!computedValues.hasOwnProperty(property)) {
								continue;
							}
							inlineValues[property] = element.style[property];
	
							/* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
							 use forcefeeding to start from computed values and animate down to 0. */
							var propertyValue = CSS.getPropertyValue(element, property);
							computedValues[property] = (direction === "Down") ? [propertyValue, 0] : [0, propertyValue];
						}
	
						/* Force vertical overflow content to clip so that sliding works as expected. */
						inlineValues.overflow = element.style.overflow;
						element.style.overflow = "hidden";
					};
	
					opts.complete = function() {
						/* Reset element to its pre-slide inline values once its slide animation is complete. */
						for (var property in inlineValues) {
							if (inlineValues.hasOwnProperty(property)) {
								element.style[property] = inlineValues[property];
							}
						}
	
						/* If the user passed in a complete callback, fire it now. */
						if (elementsIndex === elementsSize - 1) {
							if (complete) {
								complete.call(elements, elements);
							}
							if (promiseData) {
								promiseData.resolver(elements);
							}
						}
					};
	
					Velocity(element, computedValues, opts);
				};
			});
	
			/* fadeIn, fadeOut */
			$.each(["In", "Out"], function(i, direction) {
				Velocity.Redirects["fade" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
					var opts = $.extend({}, options),
							complete = opts.complete,
							propertiesMap = {opacity: (direction === "In") ? 1 : 0};
	
					/* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
					 callbacks by firing them only when the final element has been reached. */
					if (elementsIndex !== 0) {
						opts.begin = null;
					}
					if (elementsIndex !== elementsSize - 1) {
						opts.complete = null;
					} else {
						opts.complete = function() {
							if (complete) {
								complete.call(elements, elements);
							}
							if (promiseData) {
								promiseData.resolver(elements);
							}
						};
					}
	
					/* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
					/* Note: We allow users to pass in "null" to skip display setting altogether. */
					if (opts.display === undefined) {
						opts.display = (direction === "In" ? "auto" : "none");
					}
	
					Velocity(this, propertiesMap, opts);
				};
			});
	
			return Velocity;
		}((window.jQuery || window.Zepto || window), window, (window ? window.document : undefined));
	}));
	
	/******************
	 Known Issues
	 ******************/
	
	/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
	 Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
	 will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright since 2007 PrestaShop SA and Contributors
	 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.md.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to https://devdocs.prestashop.com/ for more information.
	 *
	 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
	 * @copyright Since 2007 PrestaShop SA and Contributors
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 */
'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if('value' in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}})();function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj}}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}
var _jquery=__webpack_require__(10);var _jquery2=_interopRequireDefault(_jquery);var ProductMinitature=(function(){function ProductMinitature(){_classCallCheck(this,ProductMinitature)}
_createClass(ProductMinitature,[{key:'init',value:function init(){(0,_jquery2['default'])('.js-product-miniature').each(function(index,element){if((0,_jquery2['default'])(element).find('.color').length>5){(function(){var count=0;(0,_jquery2['default'])(element).find('.color').each(function(index,element){if(index>4){(0,_jquery2['default'])(element).hide();count++}});(0,_jquery2['default'])(element).find('.js-count').append('+'+count)})()}})}}]);return ProductMinitature})();exports['default']=ProductMinitature;module.exports=exports['default'];
/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright since 2007 PrestaShop SA and Contributors
	 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.md.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to https://devdocs.prestashop.com/ for more information.
	 *
	 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
	 * @copyright Since 2007 PrestaShop SA and Contributors
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 */
'use strict';function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj}}
var _jquery=__webpack_require__(10);var _jquery2=_interopRequireDefault(_jquery);var _prestashop=__webpack_require__(48);var _prestashop2=_interopRequireDefault(_prestashop);var _componentsProductSelect=__webpack_require__(55);var _componentsProductSelect2=_interopRequireDefault(_componentsProductSelect);(0,_jquery2['default'])(document).ready(function(){createProductSpin();createInputFile();coverImage();imageScrollBox();_prestashop2['default'].on('updatedProduct',function(event){createInputFile();coverImage();if(event&&event.product_minimal_quantity){var minimalProductQuantity=parseInt(event.product_minimal_quantity,10);var quantityInputSelector='#quantity_wanted';var quantityInput=(0,_jquery2['default'])(quantityInputSelector);quantityInput.trigger('touchspin.updatesettings',{min:minimalProductQuantity})}
imageScrollBox();(0,_jquery2['default'])((0,_jquery2['default'])('.tabs .nav-link.active').attr('href')).addClass('active').removeClass('fade');(0,_jquery2['default'])('.js-product-images-modal').replaceWith(event.product_images_modal);(0,_jquery2['default'])('.js-qv-loader').hide(0);(0,_jquery2['default'])('.qv-carousel').owlCarousel({nav:!0,margin:15,dots:!1,loop:!1,rewind:!0,rtl:(0,_jquery2['default'])('body').hasClass('lang-rtl')?!0:!1,navText:["<i class='material-icons'></i>","<i class='material-icons'></i>"],responsive:{0:{items:2},443:{items:3},544:{items:4},768:{items:3},992:{items:3},1200:{items:4}}});var productSelect=new _componentsProductSelect2['default']();productSelect.init()});function coverImage(){(0,_jquery2['default'])('.js-thumb').on('click',function(event){(0,_jquery2['default'])('.js-modal-product-cover').attr('src',(0,_jquery2['default'])(event.target).data('image-large-src'));(0,_jquery2['default'])('#product-zoom .zoomImg').remove();if(!_prestashop2['default'].responsive.mobile){(0,_jquery2['default'])('#product-zoom').zoom({url:(0,_jquery2['default'])(event.target).data('image-large-src')})}(0,_jquery2['default'])('.selected').removeClass('selected');(0,_jquery2['default'])(event.target).addClass('selected');(0,_jquery2['default'])('.js-qv-product-cover').prop('src',(0,_jquery2['default'])(event.currentTarget).data('image-large-src'))})}
function imageScrollBox(){if((0,_jquery2['default'])('#main .js-qv-product-images li').length>2){(0,_jquery2['default'])('#main .js-qv-mask').addClass('scroll');(0,_jquery2['default'])('.scroll-box-arrows').addClass('scroll');(0,_jquery2['default'])('#main .js-qv-mask').scrollbox({direction:'h',distance:113,autoPlay:!1});(0,_jquery2['default'])('.scroll-box-arrows .left').click(function(){(0,_jquery2['default'])('#main .js-qv-mask').trigger('backward')});(0,_jquery2['default'])('.scroll-box-arrows .right').click(function(){(0,_jquery2['default'])('#main .js-qv-mask').trigger('forward')})}else{(0,_jquery2['default'])('#main .js-qv-mask').removeClass('scroll');(0,_jquery2['default'])('.scroll-box-arrows').removeClass('scroll')}}
function createInputFile(){(0,_jquery2['default'])('.js-file-input').on('change',function(event){var target=undefined,file=undefined;if((target=(0,_jquery2['default'])(event.currentTarget)[0])&&(file=target.files[0])){(0,_jquery2['default'])(target).prev().text(file.name)}})}
function createProductSpin(){var $quantityInput=(0,_jquery2['default'])('#quantity_wanted');$quantityInput.TouchSpin({verticalbuttons:!0,verticalupclass:'material-icons touchspin-up',verticaldownclass:'material-icons touchspin-down',buttondown_class:'btn btn-touchspin js-touchspin',buttonup_class:'btn btn-touchspin js-touchspin',min:parseInt($quantityInput.attr('min'),10),max:1000000});(0,_jquery2['default'])('body').on('change keyup','#quantity_wanted',function(e){(0,_jquery2['default'])(e.currentTarget).trigger('touchspin.stopspin');_prestashop2['default'].emit('updateProduct',{eventType:'updatedProductQuantity',event:event})})}});
/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright since 2007 PrestaShop SA and Contributors
	 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.md.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to https://devdocs.prestashop.com/ for more information.
	 *
	 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
	 * @copyright Since 2007 PrestaShop SA and Contributors
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 */
'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if('value' in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}})();function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj}}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}
var _jquery=__webpack_require__(10);var _jquery2=_interopRequireDefault(_jquery);__webpack_require__(52);var ProductSelect=(function(){function ProductSelect(){_classCallCheck(this,ProductSelect)}
_createClass(ProductSelect,[{key:'init',value:function init(){var _this=this;var MAX_THUMBS=5;var $arrows=(0,_jquery2['default'])('.js-modal-arrows');var $thumbnails=(0,_jquery2['default'])('.js-modal-product-images');(0,_jquery2['default'])('body').on('click','.js-modal-thumb',function(event){if((0,_jquery2['default'])('.js-modal-thumb').hasClass('selected')){(0,_jquery2['default'])('.js-modal-thumb').removeClass('selected')}(0,_jquery2['default'])(event.currentTarget).addClass('selected');(0,_jquery2['default'])('.js-modal-product-cover').attr('src',(0,_jquery2['default'])(event.target).data('image-large-src'));(0,_jquery2['default'])('.js-modal-product-cover').attr('title',(0,_jquery2['default'])(event.target).attr('title'));(0,_jquery2['default'])('.js-modal-product-cover').attr('alt',(0,_jquery2['default'])(event.target).attr('alt'))}).on('click','aside#thumbnails',function(event){if(event.target.id=='thumbnails'){(0,_jquery2['default'])('#product-modal').modal('hide')}});if((0,_jquery2['default'])('.js-modal-product-images li').length<=MAX_THUMBS){$arrows.css('opacity','.2')}else{$arrows.on('click',function(event){if((0,_jquery2['default'])(event.target).hasClass('arrow-up')&&$thumbnails.position().top<0){_this.move('up');(0,_jquery2['default'])('.js-modal-arrow-down').css('opacity','1')}else if((0,_jquery2['default'])(event.target).hasClass('arrow-down')&&$thumbnails.position().top+$thumbnails.height()>(0,_jquery2['default'])('.js-modal-mask').height()){_this.move('down');(0,_jquery2['default'])('.js-modal-arrow-up').css('opacity','1')}})}}},{key:'move',value:function move(direction){var THUMB_MARGIN=10;var $thumbnails=(0,_jquery2['default'])('.js-modal-product-images');var thumbHeight=(0,_jquery2['default'])('.js-modal-product-images li img').height()+THUMB_MARGIN;var currentPosition=$thumbnails.position().top;$thumbnails.velocity({translateY:direction==='up'?currentPosition+thumbHeight:currentPosition-thumbHeight},function(){if($thumbnails.position().top>=0){(0,_jquery2['default'])('.js-modal-arrow-up').css('opacity','.2')}else if($thumbnails.position().top+$thumbnails.height()<=(0,_jquery2['default'])('.js-modal-mask').height()){(0,_jquery2['default'])('.js-modal-arrow-down').css('opacity','.2')}})}}]);return ProductSelect})();exports['default']=ProductSelect;module.exports=exports['default'];
/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jquery = __webpack_require__(10);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _prestashop = __webpack_require__(48);
	
	var _prestashop2 = _interopRequireDefault(_prestashop);
	
	_prestashop2['default'].cart = _prestashop2['default'].cart || {};
	
	_prestashop2['default'].cart.active_inputs = null;
	
	var spinnerSelector = 'input[name="product-quantity-spin"]';
	var hasError = false;
	var isUpdateOperation = false;
	var errorMsg = '';
	
	/**
	 * Attach Bootstrap TouchSpin event handlers
	 */
	function createSpin() {
	  _jquery2['default'].each((0, _jquery2['default'])(spinnerSelector), function (index, spinner) {
	    (0, _jquery2['default'])(spinner).TouchSpin({
	      verticalbuttons: true,
	      verticalupclass: 'material-icons touchspin-up',
	      verticaldownclass: 'material-icons touchspin-down',
	      buttondown_class: 'btn btn-touchspin js-touchspin js-increase-product-quantity',
	      buttonup_class: 'btn btn-touchspin js-touchspin js-decrease-product-quantity',
	      min: parseInt((0, _jquery2['default'])(spinner).attr('min'), 10),
	      max: 1000000
	    });
	  });
	
	  CheckUpdateQuantityOperations.switchErrorStat();
	}
	
	(0, _jquery2['default'])(document).ready(function () {
	  var productLineInCartSelector = '.js-cart-line-product-quantity';
	  var promises = [];
	
	  _prestashop2['default'].on('updateCart', function () {
	    (0, _jquery2['default'])('.quickview').modal('hide');
	  });
	
	  _prestashop2['default'].on('updatedCart', function () {
	    createSpin();
	  });
	
	  createSpin();
	
	  var $body = (0, _jquery2['default'])('body');
	
	  function isTouchSpin(namespace) {
	    return namespace === 'on.startupspin' || namespace === 'on.startdownspin';
	  }
	
	  function shouldIncreaseProductQuantity(namespace) {
	    return namespace === 'on.startupspin';
	  }
	
	  function findCartLineProductQuantityInput($target) {
	    var $input = $target.parents('.bootstrap-touchspin').find(productLineInCartSelector);
	
	    if ($input.is(':focus')) {
	      return null;
	    }
	
	    return $input;
	  }
	
	  function camelize(subject) {
	    var actionTypeParts = subject.split('-');
	    var i = undefined;
	    var part = undefined;
	    var camelizedSubject = '';
	
	    for (i = 0; i < actionTypeParts.length; i++) {
	      part = actionTypeParts[i];
	
	      if (0 !== i) {
	        part = part.substring(0, 1).toUpperCase() + part.substring(1);
	      }
	
	      camelizedSubject = camelizedSubject + part;
	    }
	
	    return camelizedSubject;
	  }
	
	  function parseCartAction($target, namespace) {
	    if (!isTouchSpin(namespace)) {
	      return {
	        url: $target.attr('href'),
	        type: camelize($target.data('link-action'))
	      };
	    }
	
	    var $input = findCartLineProductQuantityInput($target);
	    if (!$input) {
	      return;
	    }
	
	    var cartAction = {};
	    if (shouldIncreaseProductQuantity(namespace)) {
	      cartAction = {
	        url: $input.data('up-url'),
	        type: 'increaseProductQuantity'
	      };
	    } else {
	      cartAction = {
	        url: $input.data('down-url'),
	        type: 'decreaseProductQuantity'
	      };
	    }
	
	    return cartAction;
	  }
	
	  var abortPreviousRequests = function abortPreviousRequests() {
	    var promise;
	    while (promises.length > 0) {
	      promise = promises.pop();
	      promise.abort();
	    }
	  };
	
	  var getTouchSpinInput = function getTouchSpinInput($button) {
	    return (0, _jquery2['default'])($button.parents('.bootstrap-touchspin').find('input'));
	  };
	
	  var handleCartAction = function handleCartAction(event) {
	    event.preventDefault();
	
	    var $target = (0, _jquery2['default'])(event.currentTarget);
	    var dataset = event.currentTarget.dataset;
	
	    var cartAction = parseCartAction($target, event.namespace);
	    var requestData = {
	      ajax: '1',
	      action: 'update'
	    };
	
	    if (typeof cartAction === 'undefined') {
	      return;
	    }
	
	    abortPreviousRequests();
	    _jquery2['default'].ajax({
	      url: cartAction.url,
	      method: 'POST',
	      data: requestData,
	      dataType: 'json',
	      beforeSend: function beforeSend(jqXHR) {
	        promises.push(jqXHR);
	      }
	    }).then(function (resp) {
	      CheckUpdateQuantityOperations.checkUpdateOpertation(resp);
	      var $quantityInput = getTouchSpinInput($target);
	      $quantityInput.val(resp.quantity);
	
	      // Refresh cart preview
	      _prestashop2['default'].emit('updateCart', {
	        reason: dataset
	      });
	    }).fail(function (resp) {
	      _prestashop2['default'].emit('handleError', {
	        eventType: 'updateProductInCart',
	        resp: resp,
	        cartAction: cartAction.type
	      });
	    });
	  };
	
	  $body.on('click', '[data-link-action="delete-from-cart"], [data-link-action="remove-voucher"]', handleCartAction);
	
	  $body.on('touchspin.on.startdownspin', spinnerSelector, handleCartAction);
	  $body.on('touchspin.on.startupspin', spinnerSelector, handleCartAction);
	
	  function sendUpdateQuantityInCartRequest(updateQuantityInCartUrl, requestData, $target) {
	    abortPreviousRequests();
	
	    return _jquery2['default'].ajax({
	      url: updateQuantityInCartUrl,
	      method: 'POST',
	      data: requestData,
	      dataType: 'json',
	      beforeSend: function beforeSend(jqXHR) {
	        promises.push(jqXHR);
	      }
	    }).then(function (resp) {
	      CheckUpdateQuantityOperations.checkUpdateOpertation(resp);
	      $target.val(resp.quantity);
	
	      var dataset;
	      if ($target && $target.dataset) {
	        dataset = $target.dataset;
	      } else {
	        dataset = resp;
	      }
	
	      // Refresh cart preview
	      _prestashop2['default'].emit('updateCart', {
	        reason: dataset
	      });
	    }).fail(function (resp) {
	      _prestashop2['default'].emit('handleError', { eventType: 'updateProductQuantityInCart', resp: resp });
	    });
	  }
	
	  function getRequestData(quantity) {
	    return {
	      ajax: '1',
	      qty: Math.abs(quantity),
	      action: 'update',
	      op: getQuantityChangeType(quantity)
	    };
	  }
	
	  function getQuantityChangeType($quantity) {
	    return $quantity > 0 ? 'up' : 'down';
	  }
	
	  function updateProductQuantityInCart(event) {
	    var $target = (0, _jquery2['default'])(event.currentTarget);
	    var updateQuantityInCartUrl = $target.data('update-url');
	    var baseValue = $target.attr('value');
	
	    // There should be a valid product quantity in cart
	    var targetValue = $target.val();
	    if (targetValue != parseInt(targetValue) || targetValue < 0 || isNaN(targetValue)) {
	      $target.val(baseValue);
	      return;
	    }
	
	    // There should be a new product quantity in cart
	    var qty = targetValue - baseValue;
	    if (qty === 0) {
	      return;
	    }
	
	    $target.attr('value', targetValue);
	    sendUpdateQuantityInCartRequest(updateQuantityInCartUrl, getRequestData(qty), $target);
	  }
	
	  $body.on('focusout keyup', productLineInCartSelector, function (event) {
	    if (event.type === 'keyup') {
	      if (event.keyCode === 13) {
	        updateProductQuantityInCart(event);
	      }
	      return false;
	    }
	
	    updateProductQuantityInCart(event);
	  });
	
	  var $timeoutEffect = 400;
	
	  $body.on('hidden.bs.collapse', '#promo-code', function () {
	    (0, _jquery2['default'])('.display-promo').show($timeoutEffect);
	  });
	
	  $body.on('click', '.promo-code-button', function (event) {
	    event.preventDefault();
	
	    (0, _jquery2['default'])('#promo-code').collapse('toggle');
	  });
	
	  $body.on('click', '.display-promo', function (event) {
	    (0, _jquery2['default'])(event.currentTarget).hide($timeoutEffect);
	  });
	
	  $body.on('click', '.js-discount .code', function (event) {
	    event.stopPropagation();
	
	    var $code = (0, _jquery2['default'])(event.currentTarget);
	    var $discountInput = (0, _jquery2['default'])('[name=discount_name]');
	
	    $discountInput.val($code.text());
	    // Show promo code field
	    (0, _jquery2['default'])('#promo-code').collapse('show');
	    (0, _jquery2['default'])('.display-promo').hide($timeoutEffect);
	
	    return false;
	  });
	});
	
	var CheckUpdateQuantityOperations = {
	  'switchErrorStat': function switchErrorStat() {
	    /**
	     * if errorMsg is not empty or if notifications are shown, we have error to display
	     * if hasError is true, quantity was not updated : we don't disable checkout button
	     */
	    var $checkoutBtn = (0, _jquery2['default'])('.checkout a');
	    if ((0, _jquery2['default'])("#notifications article.alert-danger").length || '' !== errorMsg && !hasError) {
	      $checkoutBtn.addClass('disabled');
	    }
	
	    if ('' !== errorMsg) {
	      var strError = ' <article class="alert alert-danger" role="alert" data-alert="danger"><ul><li>' + errorMsg + '</li></ul></article>';
	      (0, _jquery2['default'])('#notifications .container').html(strError);
	      errorMsg = '';
	      isUpdateOperation = false;
	      if (hasError) {
	        // if hasError is true, quantity was not updated : allow checkout
	        $checkoutBtn.removeClass('disabled');
	      }
	    } else if (!hasError && isUpdateOperation) {
	      hasError = false;
	      isUpdateOperation = false;
	      (0, _jquery2['default'])('#notifications .container').html('');
	      $checkoutBtn.removeClass('disabled');
	    }
	  },
	  'checkUpdateOpertation': function checkUpdateOpertation(resp) {
	    /**
	     * resp.hasError can be not defined but resp.errors not empty: quantity is updated but order cannot be placed
	     * when resp.hasError=true, quantity is not updated
	     */
	    hasError = resp.hasOwnProperty('hasError');
	    var errors = resp.errors || "";
	    // 1.7.2.x returns errors as string, 1.7.3.x returns array
	    if (errors instanceof Array) {
	      errorMsg = errors.join(" ");
	    } else {
	      errorMsg = errors;
	    }
	
	    isUpdateOperation = true;
	  }
	};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright since 2007 PrestaShop SA and Contributors
	 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.md.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to https://devdocs.prestashop.com/ for more information.
	 *
	 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
	 * @copyright Since 2007 PrestaShop SA and Contributors
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 */
'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if('value' in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}})();function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj}}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}
var _jquery=__webpack_require__(10);var _jquery2=_interopRequireDefault(_jquery);var DropDown=(function(){function DropDown(el){_classCallCheck(this,DropDown);this.el=el}
_createClass(DropDown,[{key:'init',value:function init(){this.el.on('show.bs.dropdown',function(e,el){if(el){(0,_jquery2['default'])('#'+el).find('.dropdown-menu').first().stop(!0,!0).slideDown()}else{(0,_jquery2['default'])(e.target).find('.dropdown-menu').first().stop(!0,!0).slideDown()}});this.el.on('hide.bs.dropdown',function(e,el){if(el){(0,_jquery2['default'])('#'+el).find('.dropdown-menu').first().stop(!0,!0).slideUp()}else{(0,_jquery2['default'])(e.target).find('.dropdown-menu').first().stop(!0,!0).slideUp()}});this.el.find('select.link').each(function(idx,el){(0,_jquery2['default'])(el).on('change',function(event){window.location=(0,_jquery2['default'])(this).val()})})}}]);return DropDown})();exports['default']=DropDown;module.exports=exports['default'];
/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright since 2007 PrestaShop SA and Contributors
	 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.md.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to https://devdocs.prestashop.com/ for more information.
	 *
	 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
	 * @copyright Since 2007 PrestaShop SA and Contributors
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 */
'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if('value' in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}})();function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj}}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}
var _jquery=__webpack_require__(10);var _jquery2=_interopRequireDefault(_jquery);var Form=(function(){function Form(){_classCallCheck(this,Form)}
_createClass(Form,[{key:'init',value:function init(){this.parentFocus();this.togglePasswordVisibility()}},{key:'parentFocus',value:function parentFocus(){(0,_jquery2['default'])('.js-child-focus').focus(function(){(0,_jquery2['default'])(this).closest('.js-parent-focus').addClass('focus')});(0,_jquery2['default'])('.js-child-focus').focusout(function(){(0,_jquery2['default'])(this).closest('.js-parent-focus').removeClass('focus')})}},{key:'togglePasswordVisibility',value:function togglePasswordVisibility(){(0,_jquery2['default'])('button[data-action="show-password"]').on('click',function(){var elm=(0,_jquery2['default'])(this).closest('.input-group').children('input.js-visible-password');if(elm.attr('type')==='password'){elm.attr('type','text');(0,_jquery2['default'])(this).text((0,_jquery2['default'])(this).data('textHide'))}else{elm.attr('type','password');(0,_jquery2['default'])(this).text((0,_jquery2['default'])(this).data('textShow'))}})}}]);return Form})();exports['default']=Form;module.exports=exports['default'];
/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright since 2007 PrestaShop SA and Contributors
	 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.md.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to https://devdocs.prestashop.com/ for more information.
	 *
	 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
	 * @copyright Since 2007 PrestaShop SA and Contributors
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 */
'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1;descriptor.configurable=!0;if('value' in descriptor)descriptor.writable=!0;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}})();var _get=function get(_x,_x2,_x3){var _again=!0;_function:while(_again){var object=_x,property=_x2,receiver=_x3;_again=!1;if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined}else{_x=parent;_x2=property;_x3=receiver;_again=!0;desc=parent=undefined;continue _function}}else if('value' in desc){return desc.value}else{var getter=desc.get;if(getter===undefined){return undefined}return getter.call(receiver)}}};function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj}}
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}
function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
var _jquery=__webpack_require__(10);var _jquery2=_interopRequireDefault(_jquery);var _dropDown=__webpack_require__(58);var _dropDown2=_interopRequireDefault(_dropDown);var TopMenu=(function(_DropDown){_inherits(TopMenu,_DropDown);function TopMenu(){_classCallCheck(this,TopMenu);_get(Object.getPrototypeOf(TopMenu.prototype),'constructor',this).apply(this,arguments)}
_createClass(TopMenu,[{key:'init',value:function init(){var _this=this;var elmtClass=undefined;var self=this;/*
	                       this.el.find('li').hover(e => {
	                       if (this.el.parent().hasClass('mobile')) {
	                       return;
	                       }
	                       const currentTargetClass = $(e.currentTarget).attr('class');
	                       if (elmtClass !== currentTargetClass) {
	                       const classesSelected = Array.prototype.slice.call(e.currentTarget.classList).map(e => (typeof e === 'string' ? `.${e}` : false));
	                       elmtClass = classesSelected.join('');
	                       if (elmtClass && $(e.target).data('depth') === 0) {
	                       $(`${elmtClass} .js-sub-menu`).css({
	                       top: $(`${elmtClass}`).height() + $(`${elmtClass}`).position().top
	                       });
	                       }
	                       }
	                       });*/
	      (0, _jquery2['default'])('#menu-icon').on('click', function () {
	        if ((0, _jquery2['default'])('body').hasClass('lang-rtl')) {
	          (0, _jquery2['default'])('#mobile_top_menu_wrapper').toggle("slide", { direction: "right" }, 400);
	        } else {
	          (0, _jquery2['default'])('#mobile_top_menu_wrapper').toggle("slide");
	        }
	        (0, _jquery2['default'])('.mobile-menu-overlay').toggleClass("active");
	        self.toggleMobileMenu();
	      });
	
	      (0, _jquery2['default'])('#top_menu_closer i').on('click', function () {
	        if ((0, _jquery2['default'])('body').hasClass('lang-rtl')) {
	          (0, _jquery2['default'])('#mobile_top_menu_wrapper').toggle("slide", { direction: "right" }, 400);
	        } else {
	          (0, _jquery2['default'])('#mobile_top_menu_wrapper').toggle("slide");
	        }
	        (0, _jquery2['default'])('.mobile-menu-overlay').toggleClass("active");
	      });
	
	      (0, _jquery2['default'])('.mobile-menu-overlay').on('click', function () {
	        (0, _jquery2['default'])("#mobile_top_menu_wrapper").animate({
	          width: "toggle"
	        });
	        (0, _jquery2['default'])('.mobile-menu-overlay').toggleClass("active");
	      });
	
	      (0, _jquery2['default'])('.js-top-menu').mouseleave(function () {
	        if (_this.el.parent().hasClass('mobile')) {}
	        (0, _jquery2['default'])(elmtClass + ' .js-sub-menu').hide();
	      });
	      this.el.on('click', function (e) {
	        if (_this.el.parent().hasClass('mobile')) {
	          return;
	        }
	        e.stopPropagation();
	      });
	      prestashop.on('responsive update', function (event) {
	        (0, _jquery2['default'])('.js-sub-menu').removeAttr('style');
	        self.toggleMobileMenu();
	      });
	      _get(Object.getPrototypeOf(TopMenu.prototype), 'init', this).call(this);
	    }
	  }, {
	    key: 'toggleMobileMenu',
	    value: function toggleMobileMenu() {
	      /*if ($('#mobile_top_menu_wrapper').is(':visible')) {
	        $('#notifications').hide();
	        $('#wrapper').hide();
	        $('#footer').hide();
	      } else {
	        $('#notifications').show();
	        $('#wrapper').show();
	        $('#footer').show();
	      }*/
	    }
	  }]);
	
	  return TopMenu;
	})(_dropDown2['default']);
	
	exports['default'] = TopMenu;
	module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	/**
	 * Copyright since 2007 PrestaShop SA and Contributors
	 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.md.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to https://devdocs.prestashop.com/ for more information.
	 *
	 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
	 * @copyright Since 2007 PrestaShop SA and Contributors
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 */
"use strict";(function($){var nextId=0;var Filestyle=function Filestyle(element,options){this.options=options;this.$elementFilestyle=[];this.$element=$(element)};Filestyle.prototype={clear:function clear(){this.$element.val("");this.$elementFilestyle.find(":text").val("");this.$elementFilestyle.find(".badge").remove()},destroy:function destroy(){this.$element.removeAttr("style").removeData("filestyle");this.$elementFilestyle.remove()},disabled:function disabled(value){if(value===!0){if(!this.options.disabled){this.$element.attr("disabled","true");this.$elementFilestyle.find("label").attr("disabled","true");this.options.disabled=!0}}else{if(value===!1){if(this.options.disabled){this.$element.removeAttr("disabled");this.$elementFilestyle.find("label").removeAttr("disabled");this.options.disabled=!1}}else{return this.options.disabled}}},buttonBefore:function buttonBefore(value){if(value===!0){if(!this.options.buttonBefore){this.options.buttonBefore=!0;if(this.options.input){this.$elementFilestyle.remove();this.constructor();this.pushNameFiles()}}}else{if(value===!1){if(this.options.buttonBefore){this.options.buttonBefore=!1;if(this.options.input){this.$elementFilestyle.remove();this.constructor();this.pushNameFiles()}}}else{return this.options.buttonBefore}}},icon:function icon(value){if(value===!0){if(!this.options.icon){this.options.icon=!0;this.$elementFilestyle.find("label").prepend(this.htmlIcon())}}else{if(value===!1){if(this.options.icon){this.options.icon=!1;this.$elementFilestyle.find(".icon-span-filestyle").remove()}}else{return this.options.icon}}},input:function input(value){if(value===!0){if(!this.options.input){this.options.input=!0;if(this.options.buttonBefore){this.$elementFilestyle.append(this.htmlInput())}else{this.$elementFilestyle.prepend(this.htmlInput())}this.$elementFilestyle.find(".badge").remove();this.pushNameFiles();this.$elementFilestyle.find(".group-span-filestyle").addClass("input-group-btn")}}else{if(value===!1){if(this.options.input){this.options.input=!1;this.$elementFilestyle.find(":text").remove();var files=this.pushNameFiles();if(files.length>0&&this.options.badge){this.$elementFilestyle.find("label").append(' <span class="badge">'+files.length+"</span>")}this.$elementFilestyle.find(".group-span-filestyle").removeClass("input-group-btn")}}else{return this.options.input}}},size:function size(value){if(value!==undefined){var btn=this.$elementFilestyle.find("label"),input=this.$elementFilestyle.find("input");btn.removeClass("btn-lg btn-sm");input.removeClass("input-lg input-sm");if(value!="nr"){btn.addClass("btn-"+value);input.addClass("input-"+value)}}else{return this.options.size}},placeholder:function placeholder(value){if(value!==undefined){this.options.placeholder=value;this.$elementFilestyle.find("input").attr("placeholder",value)}else{return this.options.placeholder}},buttonText:function buttonText(value){if(value!==undefined){this.options.buttonText=value;this.$elementFilestyle.find("label .buttonText").html(this.options.buttonText)}else{return this.options.buttonText}},buttonName:function buttonName(value){if(value!==undefined){this.options.buttonName=value;this.$elementFilestyle.find("label").attr({"class":"btn "+this.options.buttonName})}else{return this.options.buttonName}},iconName:function iconName(value){if(value!==undefined){this.$elementFilestyle.find(".icon-span-filestyle").attr({"class":"icon-span-filestyle "+this.options.iconName})}else{return this.options.iconName}},htmlIcon:function htmlIcon(){if(this.options.icon){return'<span class="icon-span-filestyle '+this.options.iconName+'"></span> '}else{return""}},htmlInput:function htmlInput(){if(this.options.input){return'<input type="text" class="form-control '+(this.options.size=="nr"?"":"input-"+this.options.size)+'" placeholder="'+this.options.placeholder+'" disabled> '}else{return""}},pushNameFiles:function pushNameFiles(){var content="",files=[];if(this.$element[0].files===undefined){files[0]={name:this.$element[0]&&this.$element[0].value}}else{files=this.$element[0].files}for(var i=0;i<files.length;i++){content+=files[i].name.split("\\").pop()+", "}if(content!==""){this.$elementFilestyle.find(":text").val(content.replace(/\, $/g,""))}else{this.$elementFilestyle.find(":text").val("")}return files},constructor:function constructor(){var _self=this,html="",id=_self.$element.attr("id"),files=[],btn="",$label;if(id===""||!id){id="filestyle-"+nextId;_self.$element.attr({id:id});nextId++}btn='<span class="group-span-filestyle '+(_self.options.input?"input-group-btn":"")+'"><label for="'+id+'" class="btn '+_self.options.buttonName+" "+(_self.options.size=="nr"?"":"btn-"+_self.options.size)+'" '+(_self.options.disabled?'disabled="true"':"")+">"+_self.htmlIcon()+'<span class="buttonText">'+_self.options.buttonText+"</span></label></span>";html=_self.options.buttonBefore?btn+_self.htmlInput():_self.htmlInput()+btn;_self.$elementFilestyle=$('<div class="bootstrap-filestyle input-group">'+html+"</div>");_self.$elementFilestyle.find(".group-span-filestyle").attr("tabindex","0").keypress(function(e){if(e.keyCode===13||e.charCode===32){_self.$elementFilestyle.find("label").click();return!1}});_self.$element.css({position:"absolute",clip:"rect(0px 0px 0px 0px)"}).attr("tabindex","-1").after(_self.$elementFilestyle);if(_self.options.disabled){_self.$element.attr("disabled","true")}_self.$element.change(function(){var files=_self.pushNameFiles();if(_self.options.input==!1&&_self.options.badge){if(_self.$elementFilestyle.find(".badge").length==0){_self.$elementFilestyle.find("label").append(' <span class="badge">'+files.length+"</span>")}else{if(files.length==0){_self.$elementFilestyle.find(".badge").remove()}else{_self.$elementFilestyle.find(".badge").html(files.length)}}}else{_self.$elementFilestyle.find(".badge").remove()}});if(window.navigator.userAgent.search(/firefox/i)>-1){_self.$elementFilestyle.find("label").click(function(){_self.$element.click();return!1})}}};var old=$.fn.filestyle;$.fn.filestyle=function(option,value){var get="",element=this.each(function(){if($(this).attr("type")==="file"){var $this=$(this),data=$this.data("filestyle"),options=$.extend({},$.fn.filestyle.defaults,option,typeof option==="object"&&option);if(!data){$this.data("filestyle",data=new Filestyle(this,options));data.constructor()}if(typeof option==="string"){get=data[option](value)}}});if(typeof get!==undefined){return get}else{return element}};$.fn.filestyle.defaults={buttonText:"Choose file",iconName:"glyphicon glyphicon-folder-open",buttonName:"btn-default",size:"nr",input:!0,badge:!0,icon:!0,buttonBefore:!1,disabled:!1,placeholder:""};$.fn.filestyle.noConflict=function(){$.fn.filestyle=old;return this};$(function(){$(".filestyle").each(function(){var $this=$(this),options={input:$this.attr("data-input")==="false"?!1:!0,icon:$this.attr("data-icon")==="false"?!1:!0,buttonBefore:$this.attr("data-buttonBefore")==="true"?!0:!1,disabled:$this.attr("data-disabled")==="true"?!0:!1,size:$this.attr("data-size"),buttonText:$this.attr("data-buttonText"),buttonName:$this.attr("data-buttonName"),iconName:$this.attr("data-iconName"),badge:$this.attr("data-badge")==="false"?!1:!0,placeholder:$this.attr("data-placeholder")};$this.filestyle(options)})})})(window.jQuery);
/***/ }),
/* 62 */
/***/ (function(module, exports) {

	/**
	 * Copyright since 2007 PrestaShop SA and Contributors
	 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.md.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to https://devdocs.prestashop.com/ for more information.
	 *
	 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
	 * @copyright Since 2007 PrestaShop SA and Contributors
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 */
"use strict";(function($){$.fn.scrollbox=function(config){var defConfig={linear:!1,startDelay:2,delay:3,step:5,speed:32,switchItems:1,direction:"vertical",distance:"auto",autoPlay:!0,onMouseOverPause:!0,paused:!1,queue:null,listElement:"ul",listItemElement:"li",infiniteLoop:!0,switchAmount:0,afterForward:null,afterBackward:null,triggerStackable:!1};config=$.extend(defConfig,config);config.scrollOffset=config.direction==="vertical"?"scrollTop":"scrollLeft";if(config.queue){config.queue=$("#"+config.queue)}return this.each(function(){var container=$(this),containerUL,scrollingId=null,nextScrollId=null,paused=!1,releaseStack,backward,forward,resetClock,scrollForward,scrollBackward,forwardHover,pauseHover,switchCount=0,stackedTriggerIndex=0;if(config.onMouseOverPause){container.bind("mouseover",function(){paused=!0});container.bind("mouseout",function(){paused=!1})}containerUL=container.children(config.listElement+":first-child");if(config.infiniteLoop===!1&&config.switchAmount===0){config.switchAmount=containerUL.children().length}scrollForward=function(){if(paused){return}var curLi,i,newScrollOffset,scrollDistance,theStep;curLi=containerUL.children(config.listItemElement+":first-child");scrollDistance=config.distance!=="auto"?config.distance:config.direction==="vertical"?curLi.outerHeight(!0):curLi.outerWidth(!0);if(!config.linear){theStep=Math.max(3,parseInt((scrollDistance-container[0][config.scrollOffset])*.3,10));newScrollOffset=Math.min(container[0][config.scrollOffset]+theStep,scrollDistance)}else{newScrollOffset=Math.min(container[0][config.scrollOffset]+config.step,scrollDistance)}container[0][config.scrollOffset]=newScrollOffset;if(newScrollOffset>=scrollDistance){for(i=0;i<config.switchItems;i++){if(config.queue&&config.queue.find(config.listItemElement).length>0){containerUL.append(config.queue.find(config.listItemElement)[0]);containerUL.children(config.listItemElement+":first-child").remove()}else{containerUL.append(containerUL.children(config.listItemElement+":first-child"))}++switchCount}container[0][config.scrollOffset]=0;clearInterval(scrollingId);scrollingId=null;if($.isFunction(config.afterForward)){config.afterForward.call(container,{switchCount:switchCount,currentFirstChild:containerUL.children(config.listItemElement+":first-child")})}if(config.triggerStackable&&stackedTriggerIndex!==0){releaseStack();return}if(config.infiniteLoop===!1&&switchCount>=config.switchAmount){return}if(config.autoPlay){nextScrollId=setTimeout(forward,config.delay*1e3)}}};scrollBackward=function(){if(paused){return}var curLi,i,newScrollOffset,scrollDistance,theStep;if(container[0][config.scrollOffset]===0){for(i=0;i<config.switchItems;i++){containerUL.children(config.listItemElement+":last-child").insertBefore(containerUL.children(config.listItemElement+":first-child"))}curLi=containerUL.children(config.listItemElement+":first-child");scrollDistance=config.distance!=="auto"?config.distance:config.direction==="vertical"?curLi.height():curLi.width();container[0][config.scrollOffset]=scrollDistance}if(!config.linear){theStep=Math.max(3,parseInt(container[0][config.scrollOffset]*.3,10));newScrollOffset=Math.max(container[0][config.scrollOffset]-theStep,0)}else{newScrollOffset=Math.max(container[0][config.scrollOffset]-config.step,0)}container[0][config.scrollOffset]=newScrollOffset;if(newScrollOffset===0){--switchCount;clearInterval(scrollingId);scrollingId=null;if($.isFunction(config.afterBackward)){config.afterBackward.call(container,{switchCount:switchCount,currentFirstChild:containerUL.children(config.listItemElement+":first-child")})}if(config.triggerStackable&&stackedTriggerIndex!==0){releaseStack();return}if(config.autoPlay){nextScrollId=setTimeout(forward,config.delay*1e3)}}};releaseStack=function(){if(stackedTriggerIndex===0){return}if(stackedTriggerIndex>0){stackedTriggerIndex--;nextScrollId=setTimeout(forward,0)}else{stackedTriggerIndex++;nextScrollId=setTimeout(backward,0)}};forward=function(){clearInterval(scrollingId);scrollingId=setInterval(scrollForward,config.speed)};backward=function(){clearInterval(scrollingId);scrollingId=setInterval(scrollBackward,config.speed)};forwardHover=function(){config.autoPlay=!0;paused=!1;clearInterval(scrollingId);scrollingId=setInterval(scrollForward,config.speed)};pauseHover=function(){paused=!0};resetClock=function(delay){config.delay=delay||config.delay;clearTimeout(nextScrollId);if(config.autoPlay){nextScrollId=setTimeout(forward,config.delay*1e3)}};if(config.autoPlay){nextScrollId=setTimeout(forward,config.startDelay*1e3)}container.bind("resetClock",function(delay){resetClock(delay)});container.bind("forward",function(){if(config.triggerStackable){if(scrollingId!==null){stackedTriggerIndex++}else{forward()}}else{clearTimeout(nextScrollId);forward()}});container.bind("backward",function(){if(config.triggerStackable){if(scrollingId!==null){stackedTriggerIndex--}else{backward()}}else{clearTimeout(nextScrollId);backward()}});container.bind("pauseHover",function(){pauseHover()});container.bind("forwardHover",function(){forwardHover()});container.bind("speedUp",function(event,speed){if(speed==="undefined"){speed=Math.max(1,parseInt(config.speed/2,10))}config.speed=speed});container.bind("speedDown",function(event,speed){if(speed==="undefined"){speed=config.speed*2}config.speed=speed});container.bind("updateConfig",function(event,options){config=$.extend(config,options)})})}})(jQuery);
/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright since 2007 PrestaShop SA and Contributors
	 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
	 *
	 * NOTICE OF LICENSE
	 *
	 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
	 * that is bundled with this package in the file LICENSE.md.
	 * It is also available through the world-wide-web at this URL:
	 * https://opensource.org/licenses/AFL-3.0
	 * If you did not receive a copy of the license and are unable to
	 * obtain it through the world-wide-web, please send an email
	 * to license@prestashop.com so we can send you a copy immediately.
	 *
	 * DISCLAIMER
	 *
	 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
	 * versions in the future. If you wish to customize PrestaShop for your
	 * needs please refer to https://devdocs.prestashop.com/ for more information.
	 *
	 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
	 * @copyright Since 2007 PrestaShop SA and Contributors
	 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
	 */
'use strict';function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj}}
var _prestashop=__webpack_require__(48);var _prestashop2=_interopRequireDefault(_prestashop);var _jquery=__webpack_require__(10);var _jquery2=_interopRequireDefault(_jquery);_prestashop2['default'].blockcart=_prestashop2['default'].blockcart||{};_prestashop2['default'].blockcart.showModal=function(html){function getBlockCartModal(){return(0,_jquery2['default'])('#blockcart-modal')}
var $blockCartModal=getBlockCartModal();if($blockCartModal.length){$blockCartModal.remove()}(0,_jquery2['default'])('body').append(html);$blockCartModal=getBlockCartModal();$blockCartModal.modal('show').on('hidden.bs.modal',function(event){(0,_jquery2['default'])("body").removeAttr("style");_prestashop2['default'].emit('updateProduct',{reason:event.currentTarget.dataset,event:event})})}})]);/**
 * 2007-2020 PrestaShop.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2020 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
$(document).ready(function(){$('.block_newsletter form').on('submit',function(){var psemailsubscriptionForm=$(this);if(typeof psemailsubscription_subscription==='undefined'){return!0}
$('.block_newsletter_alert').remove();$.ajax({type:'POST',dataType:'JSON',url:psemailsubscription_subscription,cache:!1,data:$(this).serialize(),success:function(data){if(data.nw_error){psemailsubscriptionForm.prepend('<p class="alert alert-danger block_newsletter_alert">'+data.msg+'</p>')}else{psemailsubscriptionForm.prepend('<p class="alert alert-success block_newsletter_alert">'+data.msg+'</p>')}},error:function(err){console.log(err)}});return!1})});/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./_dev/front/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_dev/front/front.scss":
/*!*******************************!*\
  !*** ./_dev/front/front.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./front.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./_dev/front/front.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./_dev/front/index.js":
/*!*****************************!*\
  !*** ./_dev/front/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./front.scss */ "./_dev/front/front.scss");
/* harmony import */ var _front_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_front_scss__WEBPACK_IMPORTED_MODULE_0__);
/**
 * 2007-2019 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA
 * @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
$(window).ready(function(){$('.blockreassurance_product img.svg, .blockreassurance img.svg').each(function(){var imgObject=$(this);var imgID=imgObject.attr('id');var imgClass=imgObject.attr('class');var imgURL=imgObject.attr('src');$.ajax({url:imgURL,type:'GET',success:function(data){if($.isXMLDoc(data)){var $svg=$(data).find('svg');$svg=typeof imgID!=='undefined'?$svg.attr('id',imgID):$svg;$svg=typeof imgClass!=='undefined'?$svg.attr('class',imgClass+' replaced-svg'):$svg.attr('class',' replaced-svg');$svg.removeClass('invisible');$svg=$svg.attr('data-img-url',imgURL);$svg=$svg.removeAttr('xmlns:a');$svg.find('path[fill]').attr('fill',psr_icon_color);$svg.find('path:not([fill])').css('fill',psr_icon_color);imgObject.replaceWith($svg)}
imgObject.removeClass('invisible')}})})})}),"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./_dev/front/front.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./_dev/front/front.scss ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
(function(module,exports,__webpack_require__){}),"./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
(function(module,exports,__webpack_require__){var stylesInDom={};var memoize=function(fn){var memo;return function(){if(typeof memo==="undefined")memo=fn.apply(this,arguments);return memo}};var isOldIE=memoize(function(){return window&&document&&document.all&&!window.atob});var getTarget=function(target,parent){if(parent){return parent.querySelector(target)}
return document.querySelector(target)};var getElement=(function(fn){var memo={};return function(target,parent){if(typeof target==='function'){return target()}
if(typeof memo[target]==="undefined"){var styleTarget=getTarget.call(this,target,parent);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}}
memo[target]=styleTarget}
return memo[target]}})();var singleton=null;var singletonCounter=0;var stylesInsertedAtTop=[];var fixUrls=__webpack_require__(/*! ./urls */"./node_modules/style-loader/lib/urls.js");module.exports=function(list,options){if(typeof DEBUG!=="undefined"&&DEBUG){if(typeof document!=="object")throw new Error("The style-loader cannot be used in a non-browser environment")}
options=options||{};options.attrs=typeof options.attrs==="object"?options.attrs:{};if(!options.singleton&&typeof options.singleton!=="boolean")options.singleton=isOldIE();if(!options.insertInto)options.insertInto="head";if(!options.insertAt)options.insertAt="bottom";var styles=listToStyles(list,options);addStylesToDom(styles,options);return function update(newList){var mayRemove=[];for(var i=0;i<styles.length;i++){var item=styles[i];var domStyle=stylesInDom[item.id];domStyle.refs--;mayRemove.push(domStyle)}
if(newList){var newStyles=listToStyles(newList,options);addStylesToDom(newStyles,options)}
for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(domStyle.refs===0){for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j]();delete stylesInDom[domStyle.id]}}}};function addStylesToDom(styles,options){for(var i=0;i<styles.length;i++){var item=styles[i];var domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++){domStyle.parts[j](item.parts[j])}
for(;j<item.parts.length;j++){domStyle.parts.push(addStyle(item.parts[j],options))}}else{var parts=[];for(var j=0;j<item.parts.length;j++){parts.push(addStyle(item.parts[j],options))}
stylesInDom[item.id]={id:item.id,refs:1,parts:parts}}}}
function listToStyles(list,options){var styles=[];var newStyles={};for(var i=0;i<list.length;i++){var item=list[i];var id=options.base?item[0]+options.base:item[0];var css=item[1];var media=item[2];var sourceMap=item[3];var part={css:css,media:media,sourceMap:sourceMap};if(!newStyles[id])styles.push(newStyles[id]={id:id,parts:[part]});else newStyles[id].parts.push(part)}
return styles}
function insertStyleElement(options,style){var target=getElement(options.insertInto)
if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.")}
var lastStyleElementInsertedAtTop=stylesInsertedAtTop[stylesInsertedAtTop.length-1];if(options.insertAt==="top"){if(!lastStyleElementInsertedAtTop){target.insertBefore(style,target.firstChild)}else if(lastStyleElementInsertedAtTop.nextSibling){target.insertBefore(style,lastStyleElementInsertedAtTop.nextSibling)}else{target.appendChild(style)}
stylesInsertedAtTop.push(style)}else if(options.insertAt==="bottom"){target.appendChild(style)}else if(typeof options.insertAt==="object"&&options.insertAt.before){var nextSibling=getElement(options.insertAt.before,target);target.insertBefore(style,nextSibling)}else{throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n")}}
function removeStyleElement(style){if(style.parentNode===null)return!1;style.parentNode.removeChild(style);var idx=stylesInsertedAtTop.indexOf(style);if(idx>=0){stylesInsertedAtTop.splice(idx,1)}}
function createStyleElement(options){var style=document.createElement("style");if(options.attrs.type===undefined){options.attrs.type="text/css"}
if(options.attrs.nonce===undefined){var nonce=getNonce();if(nonce){options.attrs.nonce=nonce}}
addAttrs(style,options.attrs);insertStyleElement(options,style);return style}
function createLinkElement(options){var link=document.createElement("link");if(options.attrs.type===undefined){options.attrs.type="text/css"}
options.attrs.rel="stylesheet";addAttrs(link,options.attrs);insertStyleElement(options,link);return link}
function addAttrs(el,attrs){Object.keys(attrs).forEach(function(key){el.setAttribute(key,attrs[key])})}
function getNonce(){if(!1){}
return __webpack_require__.nc}
function addStyle(obj,options){var style,update,remove,result;if(options.transform&&obj.css){result=typeof options.transform==='function'?options.transform(obj.css):options.transform.default(obj.css);if(result){obj.css=result}else{return function(){}}}
if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=createStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,!1);remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else if(obj.sourceMap&&typeof URL==="function"&&typeof URL.createObjectURL==="function"&&typeof URL.revokeObjectURL==="function"&&typeof Blob==="function"&&typeof btoa==="function"){style=createLinkElement(options);update=updateLink.bind(null,style,options);remove=function(){removeStyleElement(style);if(style.href)URL.revokeObjectURL(style.href)}}else{style=createStyleElement(options);update=applyToTag.bind(null,style);remove=function(){removeStyleElement(style)}}
update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return}
update(obj=newObj)}else{remove()}}}
var replaceText=(function(){var textStore=[];return function(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n')}})();function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.css;if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css)}else{var cssNode=document.createTextNode(css);var childNodes=style.childNodes;if(childNodes[index])style.removeChild(childNodes[index]);if(childNodes.length){style.insertBefore(cssNode,childNodes[index])}else{style.appendChild(cssNode)}}}
function applyToTag(style,obj){var css=obj.css;var media=obj.media;if(media){style.setAttribute("media",media)}
if(style.styleSheet){style.styleSheet.cssText=css}else{while(style.firstChild){style.removeChild(style.firstChild)}
style.appendChild(document.createTextNode(css))}}
function updateLink(link,options,obj){var css=obj.css;var sourceMap=obj.sourceMap;var autoFixUrls=options.convertToAbsoluteUrls===undefined&&sourceMap;if(options.convertToAbsoluteUrls||autoFixUrls){css=fixUrls(css)}
if(sourceMap){css+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */"}
var blob=new Blob([css],{type:"text/css"});var oldSrc=link.href;link.href=URL.createObjectURL(blob);if(oldSrc)URL.revokeObjectURL(oldSrc)}}),"./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
(function(module,exports){module.exports=function(css){var location=typeof window!=="undefined"&&window.location;if(!location){throw new Error("fixUrls requires window.location")}
if(!css||typeof css!=="string"){return css}
var baseUrl=location.protocol+"//"+location.host;var currentDir=baseUrl+location.pathname.replace(/\/[^\/]*$/,"/");var fixedCss=css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(fullMatch,origUrl){var unquotedOrigUrl=origUrl.trim().replace(/^"(.*)"$/,function(o,$1){return $1}).replace(/^'(.*)'$/,function(o,$1){return $1});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)){return fullMatch}
var newUrl;if(unquotedOrigUrl.indexOf("//")===0){newUrl=unquotedOrigUrl}else if(unquotedOrigUrl.indexOf("/")===0){newUrl=baseUrl+unquotedOrigUrl}else{newUrl=currentDir+unquotedOrigUrl.replace(/^\.\//,"")}
return"url("+JSON.stringify(newUrl)+")"});return fixedCss}})});/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 */
jQuery.fn.rating=function(generalOptions){const $ratings=$(this);$ratings.each(function initRating(){const $ratingComponent=$(this);var options=generalOptions?generalOptions:{};if(!options.grade&&$ratingComponent.data('grade')){options.grade=$ratingComponent.data('grade')}
if(!options.min&&$ratingComponent.data('min')){options.min=$ratingComponent.data('min')}
if(!options.max&&$ratingComponent.data('max')){options.max=$ratingComponent.data('max')}
if(!options.input&&$ratingComponent.data('input')){options.input=$ratingComponent.data('input')}
var componentOptions=jQuery.extend({grade:null,input:null,min:1,max:5,starWidth:20},options);const minValue=Math.min(componentOptions.min,componentOptions.max);const maxValue=Math.max(componentOptions.min,componentOptions.max);const ratingValue=Math.min(Math.max(minValue,componentOptions.grade),maxValue);$ratingComponent.html('');$ratingComponent.append('<div class="star-content star-empty clearfix"></div>');$ratingComponent.append('<div class="star-content star-full clearfix"></div>');const emptyStars=$('.star-empty',this);const fullStars=$('.star-full',this);const emptyStar=$('<div class="star"></div>');const fullStar=$('<div class="star-on"></div>');var ratingInput;if(componentOptions.input){ratingInput=$('<input type="number" name="'+componentOptions.input+'" id="'+componentOptions.input+'" />');ratingInput.val(ratingValue);ratingInput.css('display','none');ratingInput.change(displayInteractiveGrade);$ratingComponent.append(ratingInput);initInteractiveGrade()}else{displayGrade(ratingValue)}
function initInteractiveGrade(){emptyStars.html('');fullStars.html('');var newStar;for(var i=minValue;i<=maxValue;++i){newStar=emptyStar.clone();newStar.data('grade',i);newStar.hover(function overStar(){var overIndex=$('.star',fullStars).index($(this));$('.star',fullStars).each(function overStars(){$(this).removeClass('star-on');var starIndex=$('.star',fullStars).index($(this));if(starIndex<=overIndex){$(this).addClass('star-hover')}else{$(this).removeClass('star-hover')}})});newStar.click(function selectGrade(){var selectedGrade=$(this).data('grade');ratingInput.val(selectedGrade)});fullStars.append(newStar)}
fullStars.hover(function(){},displayInteractiveGrade);displayInteractiveGrade()}
function displayInteractiveGrade(){$('.star',fullStars).each(function displayStar(){var starValue=$(this).data('grade');$(this).removeClass('star-hover');if(starValue<=ratingInput.val()){$(this).addClass('star-on')}else{$(this).removeClass('star-on')}})}
function displayGrade(grade){emptyStars.html('');fullStars.html('');var newStar;for(var i=minValue;i<=maxValue;++i){if(i<=Math.floor(grade)){newStar=emptyStar.clone();newStar.css('visibility','hidden');emptyStars.append(newStar);fullStars.append(fullStar.clone())}else if(i>Math.ceil(grade)){newStar=emptyStar.clone();emptyStars.append(newStar.clone())}else{var fullWidth=(grade-i+1)*componentOptions.starWidth;var emptyWidth=componentOptions.starWidth-fullWidth;newStar=emptyStar.clone();newStar.css('visibility','hidden');newStar.css('width',fullWidth);emptyStars.append(newStar);newStar=emptyStar.clone();newStar.css('width',emptyWidth);newStar.css('background-position','0px -'+fullWidth+'px');newStar.css('background-position','-'+fullWidth+'px 0px');newStar.css('marginLeft',0);emptyStars.append(newStar);fullStar.css('width',fullWidth);fullStars.append(fullStar.clone())}}}})};/**
 * 2007-2019 PrestaShop SA and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
$(document).ready(function(){productListingComments.init();productListingComments.load()});var productListingComments=(function(){var data={productIDs:[],commentsLoadingInProgress:!1,ajaxIDsLimit:50,ajaxUrl:''}
var DOMStrings={productListReviewsContainer:'.product-list-reviews',productListReviewsNumberOfComments:'.comments-nb',productListReviewsStarsContainer:'.grade-stars',productContainer:'.thumbnail-container'};var DOMClasses={inProgress:'reviews-loading',reviewsLoaded:'reviews-loaded',hasReviews:'has-reviews'};function setEvents(){prestashop.on('updateProductList',function(){addProductsIDs()})}
function setAjaxUrl(){if(data.ajaxUrl!=='')
return;var url=$(DOMStrings.productListReviewsContainer).first().data('url');data.ajaxUrl=url}
function getNewProductsReviewsElements(){var $productListReviews=$(DOMStrings.productContainer).not('.'+DOMClasses.reviewsLoaded+', .'+DOMClasses.inProgress).addClass(DOMClasses.inProgress).find(DOMStrings.productListReviewsContainer);return $productListReviews}
function addProductsIDs(){var $productsList=getNewProductsReviewsElements(),seenIds={};$productsList.each(function(){var id=$(this).data('id');seenIds[id]=!0});var IDsArray=Object.keys(seenIds);var prevDataIDs=data.productIDs.splice(0);data.productIDs=prevDataIDs.concat(IDsArray);if(!data.commentsLoadingInProgress){loadProductsData()}}
function loadProductsData(){if(data.productIDs.length===0)
return;data.commentsLoadingInProgress=!0;var dataIDsCopy=data.productIDs.slice(0);selectedProductIDs=dataIDsCopy.splice(0,data.ajaxIDsLimit);$.get(data.ajaxUrl,{id_products:selectedProductIDs},function(jsonData){if(jsonData){$.each(jsonData.products,function(i,elem){var productData=elem;var $productsReviewsContainer=$('.product-list-reviews[data-id="'+productData.id_product+'"]');$productsReviewsContainer.each(function(){var $self=$(this);if(productData.comments_nb>0){$self.find(DOMStrings.productListReviewsStarsContainer).rating({grade:productData.average_grade,starWidth:16});$self.find(DOMStrings.productListReviewsNumberOfComments).text('('+productData.comments_nb+')');$self.closest(DOMStrings.productContainer).addClass(DOMClasses.hasReviews);$self.css('visibility','visible')}
$self.closest(DOMStrings.productContainer).addClass(DOMClasses.reviewsLoaded);$self.closest(DOMStrings.productContainer).removeClass(DOMClasses.inProgress)});data.productIDs.shift()});data.commentsLoadingInProgress=!1;if(data.productIDs.length>0){loadProductsData()}}})}
return{load:function(){addProductsIDs()},init:function(){setAjaxUrl();setEvents()}}})();
/******************

 * Ishi Technolabs  Framework for Prestashop 1.7.x 
 * @package   	ishiblockwishlist
 * @version   	1.0
 * @author   	http://ishitechnolabs.com/
 * @license   GNU General Public License version 1
 
 * *****************/
var wishlistProductsIds=[];$(document).ready(function(){wishlistRefreshStatus();$(document).on('change','select[name=wishlists]',function(){WishlistChangeDefault('wishlist_block_list',$(this).val())});$('.wishlist').each(function(){current=$(this);$(this).children('.wishlist_button_list').popover({html:!0,content:function(){return current.children('.popover-content').html()}})})});function WishlistCart(id,action,id_product,id_product_attribute,quantity,id_wishlist){if(typeof id_wishlist==="undefined"){id_wishlist=""}
$.ajax({type:'GET',url:baseDir+'modules/ishiblockwishlist/cart.php?rand='+new Date().getTime(),headers:{"cache-control":"no-cache"},async:!0,cache:!1,data:'action='+action+'&id_product='+id_product+'&quantity='+quantity+'&token='+static_token+'&id_product_attribute='+id_product_attribute+'&id_wishlist='+id_wishlist,success:function(data){if(action=='add'){if(isLogged==!0){wishlistProductsIdsAdd(id_product);wishlistRefreshStatus();if(!!$.prototype.fancybox)
$.fancybox.open([{type:'inline',autoScale:!0,minHeight:30,content:'<p class="fancybox-error">'+added_to_wishlist+'</p>'}],{padding:0});else{$("body").append("<div class='modal fade' id='WishlistModal'>"+"<div class='modal-dialog'><div class='modal-content'>"+"<div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-label='Close'><i class='material-icons close'>close</i></button></div>"+"<div class='modal-body'>"+added_to_wishlist+" <a href='"+wishlist_url+"'"+">"+wishlist_url_text+"</a></div></div></div></div>");$('#WishlistModal').modal('show');$('#WishlistModal').on('hidden.bs.modal',function(){$('#WishlistModal').remove()})}}else{if(!!$.prototype.fancybox)
$.fancybox.open([{type:'inline',autoScale:!0,minHeight:30,content:'<p class="fancybox-error">'+loggin_required+'</p>'}],{padding:0});else{$("body").append("<div class='modal fade' id='WishlistModal'>"+"<div class='modal-dialog'><div class='modal-content'>"+"<div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-label='Close'><i class='material-icons close'>close</i></button></div>"+"<div class='modal-body'>"+loggin_required+" <a href='"+loggin_url+"'"+">"+loggin_url_text+"</a></div></div></div></div>");$('#WishlistModal').modal('show');$('#WishlistModal').on('hidden.bs.modal',function(){$('#WishlistModal').remove()})}}}
if(action=='delete'){wishlistProductsIdsRemove(id_product);wishlistRefreshStatus()}
if($('#'+id).length!=0){$('#'+id).slideUp('normal');document.getElementById(id).innerHTML=data;$('#'+id).slideDown('normal')}}})}
function WishlistChangeDefault(id,id_wishlist){$.ajax({type:'GET',url:baseDir+'modules/ishiblockwishlist/cart.php?rand='+new Date().getTime(),headers:{"cache-control":"no-cache"},async:!0,data:'id_wishlist='+id_wishlist+'&token='+static_token,cache:!1,success:function(data){$('#'+id).slideUp('normal');document.getElementById(id).innerHTML=data;$('#'+id).slideDown('normal')}})}
function WishlistBuyProduct(token,id_product,id_product_attribute,id_quantity,button,ajax){if(ajax)
ajaxCart.add(id_product,id_product_attribute,!1,button,1,[token,id_quantity]);else{$('#'+id_quantity).val(0);WishlistAddProductCart(token,id_product,id_product_attribute,id_quantity)
document.forms['addtocart'+'_'+id_product+'_'+id_product_attribute].method='POST';document.forms['addtocart'+'_'+id_product+'_'+id_product_attribute].action=baseUri+'?controller=cart';document.forms['addtocart'+'_'+id_product+'_'+id_product_attribute].elements.token.value=static_token;document.forms['addtocart'+'_'+id_product+'_'+id_product_attribute].submit()}
return(!0)}
function WishlistAddProductCart(token,id_product,id_product_attribute,id_quantity){if($('#'+id_quantity).val()<=0)
return(!1);$.ajax({type:'GET',url:baseDir+'modules/ishiblockwishlist/buywishlistproduct.php?rand='+new Date().getTime(),headers:{"cache-control":"no-cache"},data:'token='+token+'&static_token='+static_token+'&id_product='+id_product+'&id_product_attribute='+id_product_attribute,async:!0,cache:!1,success:function(data){if(data){if(!!$.prototype.fancybox)
$.fancybox.open([{type:'inline',autoScale:!0,minHeight:30,content:'<p class="fancybox-error">'+data+'</p>'}],{padding:0});else alert(data)}else $('#'+id_quantity).val($('#'+id_quantity).val()-1)}});return(!0)}
function WishlistManage(id,id_wishlist){$.ajax({type:'GET',async:!0,url:baseDir+'modules/ishiblockwishlist/managewishlist.php?rand='+new Date().getTime(),headers:{"cache-control":"no-cache"},data:'id_wishlist='+id_wishlist+'&refresh='+!1,cache:!1,success:function(data){$('#'+id).hide();document.getElementById(id).innerHTML=data;$('#'+id).fadeIn('slow');$('.wishlist_change_button').each(function(index){$(this).change(function(){wishlistProductChange($('option:selected',this).attr('data-id-product'),$('option:selected',this).attr('data-id-product-attribute'),$('option:selected',this).attr('data-id-old-wishlist'),$('option:selected',this).attr('data-id-new-wishlist'))})})}})}
function WishlistProductManage(id,action,id_wishlist,id_product,id_product_attribute,quantity,priority){$.ajax({type:'GET',async:!0,url:baseDir+'modules/ishiblockwishlist/managewishlist.php?rand='+new Date().getTime(),headers:{"cache-control":"no-cache"},data:'action='+action+'&id_wishlist='+id_wishlist+'&id_product='+id_product+'&id_product_attribute='+id_product_attribute+'&quantity='+quantity+'&priority='+priority+'&refresh='+!0,cache:!1,success:function(data){if(action=='delete')
$('#wlp_'+id_product+'_'+id_product_attribute).fadeOut('fast');else if(action=='update'){$('#wlp_'+id_product+'_'+id_product_attribute).fadeOut('fast');$('#wlp_'+id_product+'_'+id_product_attribute).fadeIn('fast')}
nb_products=0;$("[id^='quantity']").each(function(index,element){nb_products+=parseInt(element.value)});$("#wishlist_"+id_wishlist).children('td').eq(1).html(nb_products)}})}
function WishlistDelete(id,id_wishlist,msg){var res=confirm(msg);if(res==!1)
return(!1);if(typeof mywishlist_url=='undefined')
return(!1);$.ajax({type:'GET',async:!0,dataType:"json",url:mywishlist_url,headers:{"cache-control":"no-cache"},cache:!1,data:{rand:new Date().getTime(),deleted:1,myajax:1,id_wishlist:id_wishlist,action:'deletelist'},success:function(data){var mywishlist_siblings_count=$('#'+id).siblings().length;$('#'+id).fadeOut('slow').remove();$("#block-order-detail").html('');if(mywishlist_siblings_count==0)
$("#block-history").remove();if(data.id_default){var td_default=$("#wishlist_"+data.id_default+" > .wishlist_default");$("#wishlist_"+data.id_default+" > .wishlist_default > a").remove();td_default.append('<p class="is_wish_list_default"><i class="material-icons">check_circle </i></p>')}}})}
function WishlistDefault(id,id_wishlist){if(typeof mywishlist_url=='undefined')
return(!1);$.ajax({type:'GET',async:!0,url:mywishlist_url,headers:{"cache-control":"no-cache"},cache:!1,data:{rand:new Date().getTime(),'default':1,id_wishlist:id_wishlist,myajax:1,action:'setdefault'},success:function(data){var old_default_id=$(".is_wish_list_default").parents("tr").attr("id");var td_check=$(".is_wish_list_default").parent();$(".is_wish_list_default").remove();td_check.append('<a href="#" onclick="javascript:event.preventDefault();(WishlistDefault(\''+old_default_id+'\', \''+old_default_id.replace("wishlist_","")+'\'));"><i class="material-icons">done</i></a>');var td_default=$("#"+id+" > .wishlist_default");$("#"+id+" > .wishlist_default > a").remove();td_default.append('<p class="is_wish_list_default"><i class="material-icons">check_circle </i></p>')}})}
function WishlistVisibility(bought_class,id_button){if($('#hide'+id_button).is(':hidden')){$('.'+bought_class).slideDown('fast');$('#show'+id_button).hide();$('#hide'+id_button).css('display','block')}else{$('.'+bought_class).slideUp('fast');$('#hide'+id_button).hide();$('#show'+id_button).css('display','block')}
$('html, body').animate({scrollTop:$("#wishlist_form").offset().top},3000)}
function WishlistSend(id,id_wishlist,id_email){$.post(baseDir+'modules/ishiblockwishlist/sendwishlist.php',{token:static_token,id_wishlist:id_wishlist,email1:$('#'+id_email+'1').val(),email2:$('#'+id_email+'2').val(),email3:$('#'+id_email+'3').val(),email4:$('#'+id_email+'4').val(),email5:$('#'+id_email+'5').val(),email6:$('#'+id_email+'6').val(),email7:$('#'+id_email+'7').val(),email8:$('#'+id_email+'8').val(),email9:$('#'+id_email+'9').val(),email10:$('#'+id_email+'10').val()},function(data){if(data){if(!!$.prototype.fancybox)
$.fancybox.open([{type:'inline',autoScale:!0,minHeight:30,content:'<p class="fancybox-error">'+data+'</p>'}],{padding:0});else alert(data)}else WishlistVisibility(id,'hideSendWishlist')})}
function wishlistProductsIdsAdd(id){if($.inArray(parseInt(id),wishlistProductsIds)==-1)
wishlistProductsIds.push(parseInt(id))}
function wishlistProductsIdsRemove(id){wishlistProductsIds.splice($.inArray(parseInt(id),wishlistProductsIds),1)}
function wishlistRefreshStatus(){$('.addToWishlist').each(function(){if($.inArray(parseInt($(this).data('rel')),wishlistProductsIds)!=-1)
$(this).addClass('checked');else $(this).removeClass('checked')})}
function wishlistProductChange(id_product,id_product_attribute,id_old_wishlist,id_new_wishlist){if(typeof mywishlist_url=='undefined')
return(!1);var quantity=$('#quantity_'+id_product+'_'+id_product_attribute).val();$.ajax({type:'GET',url:mywishlist_url,headers:{"cache-control":"no-cache"},async:!0,cache:!1,dataType:"json",data:{id_product:id_product,id_product_attribute:id_product_attribute,quantity:quantity,priority:$('#priority_'+id_product+'_'+id_product_attribute).val(),id_old_wishlist:id_old_wishlist,id_new_wishlist:id_new_wishlist,myajax:1,action:'productchangewishlist'},success:function(data){console.log(data);console.log(data.msg);if(data.success==!0){$('#wlp_'+id_product+'_'+id_product_attribute).fadeOut('slow');$('#wishlist_'+id_old_wishlist+' td:nth-child(2)').text($('#wishlist_'+id_old_wishlist+' td:nth-child(2)').text()-quantity);$('#wishlist_'+id_new_wishlist+' td:nth-child(2)').text(+$('#wishlist_'+id_new_wishlist+' td:nth-child(2)').text()+ +quantity)}else{if(!!$.prototype.fancybox)
$.fancybox.open([{type:'inline',autoScale:!0,minHeight:30,content:'<p class="fancybox-error">'+data.error+'</p>'}],{padding:0})}}})};/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
!function(a,b){function e(b,c){var d,e,g,h=b.nodeName.toLowerCase();return"area"===h?(d=b.parentNode,e=d.name,!(!b.href||!e||"map"!==d.nodeName.toLowerCase())&&(g=a("img[usemap=#"+e+"]")[0],!!g&&f(g))):(/input|select|textarea|button|object/.test(h)?!b.disabled:"a"===h?b.href||c:c)&&f(b)}function f(b){return a.expr.filters.visible(b)&&!a(b).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}var c=0,d=/^ui-id-\d+$/;a.ui=a.ui||{},a.extend(a.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({focus:function(b){return function(c,d){return"number"==typeof c?this.each(function(){var b=this;setTimeout(function(){a(b).focus(),d&&d.call(b)},c)}):b.apply(this,arguments)}}(a.fn.focus),scrollParent:function(){var b;return b=a.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.css(this,"position"))&&/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length)for(var e,f,d=a(this[0]);d.length&&d[0]!==document;){if(e=d.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(f=parseInt(d.css("zIndex"),10),!isNaN(f)&&0!==f))return f;d=d.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++c)})},removeUniqueId:function(){return this.each(function(){d.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return e(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var c=a.attr(b,"tabindex"),d=isNaN(c);return(d||c>=0)&&e(b,!d)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(c,d){function h(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===d?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?g["inner"+d].call(this):this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return"number"!=typeof b?g["outer"+d].call(this,b):this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData)),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.support.selectstart="onselectstart"in document.createElement("div"),a.fn.extend({disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c){var d,e=a.plugins[b];if(e&&a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType)for(d=0;d<e.length;d++)a.options[e[d][0]]&&e[d][1].apply(a.element,c)}},hasScroll:function(b,c){if("hidden"===a(b).css("overflow"))return!1;var d=c&&"left"===c?"scrollLeft":"scrollTop",e=!1;return b[d]>0||(b[d]=1,e=b[d]>0,b[d]=0,e)}})}(jQuery),function(a,b){var c=0,d=Array.prototype.slice,e=a.cleanData;a.cleanData=function(b){for(var d,c=0;null!=(d=b[c]);c++)try{a(d).triggerHandler("remove")}catch(a){}e(b)},a.widget=function(b,c,d){var e,f,g,h,i={},j=b.split(".")[0];b=b.split(".")[1],e=j+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][e.toLowerCase()]=function(b){return!!a.data(b,e)},a[j]=a[j]||{},f=a[j][b],g=a[j][b]=function(a,b){return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new g(a,b)},a.extend(g,f,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),h=new c,h.options=a.widget.extend({},h.options),a.each(d,function(b,d){return a.isFunction(d)?void(i[b]=function(){var a=function(){return c.prototype[b].apply(this,arguments)},e=function(a){return c.prototype[b].apply(this,a)};return function(){var f,b=this._super,c=this._superApply;return this._super=a,this._superApply=e,f=d.apply(this,arguments),this._super=b,this._superApply=c,f}}()):void(i[b]=d)}),g.prototype=a.widget.extend(h,{widgetEventPrefix:f?h.widgetEventPrefix:b},i,{constructor:g,namespace:j,widgetName:b,widgetFullName:e}),f?(a.each(f._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,g,c._proto)}),delete f._childConstructors):c._childConstructors.push(g),a.widget.bridge(b,g)},a.widget.extend=function(c){for(var h,i,e=d.call(arguments,1),f=0,g=e.length;f<g;f++)for(h in e[f])i=e[f][h],e[f].hasOwnProperty(h)&&i!==b&&(a.isPlainObject(i)?c[h]=a.isPlainObject(c[h])?a.widget.extend({},c[h],i):a.widget.extend({},i):c[h]=i);return c},a.widget.bridge=function(c,e){var f=e.prototype.widgetFullName||c;a.fn[c]=function(g){var h="string"==typeof g,i=d.call(arguments,1),j=this;return g=!h&&i.length?a.widget.extend.apply(null,[g].concat(i)):g,h?this.each(function(){var d,e=a.data(this,f);return e?a.isFunction(e[g])&&"_"!==g.charAt(0)?(d=e[g].apply(e,i),d!==e&&d!==b?(j=d&&d.jquery?j.pushStack(d.get()):d,!1):void 0):a.error("no such method '"+g+"' for "+c+" widget instance"):a.error("cannot call methods on "+c+" prior to initialization; attempted to call method '"+g+"'")}):this.each(function(){var b=a.data(this,f);b?b.option(g||{})._init():a.data(this,f,new e(g,this))}),j}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(b,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=a.widget.extend({},this.options,this._getCreateOptions(),b),this.bindings=a(),this.hoverable=a(),this.focusable=a(),d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(c,d){var f,g,h,e=c;if(0===arguments.length)return a.widget.extend({},this.options);if("string"==typeof c)if(e={},f=c.split("."),c=f.shift(),f.length){for(g=e[c]=a.widget.extend({},this.options[c]),h=0;h<f.length-1;h++)g[f[h]]=g[f[h]]||{},g=g[f[h]];if(c=f.pop(),d===b)return g[c]===b?null:g[c];g[c]=d}else{if(d===b)return this.options[c]===b?null:this.options[c];e[c]=d}return this._setOptions(e),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return this.options[a]=b,"disabled"===a&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!b).attr("aria-disabled",b),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(b,c,d){var e,f=this;"boolean"!=typeof b&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){if(b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled"))return("string"==typeof g?f[g]:g).apply(f,arguments)}"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^(\w+)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.delegate(k,j,h):c.bind(j,h)})},_off:function(a,b){b=(b||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,a.unbind(b).undelegate(b)},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){a(b.currentTarget).addClass("ui-state-hover")},mouseleave:function(b){a(b.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){a(b.currentTarget).addClass("ui-state-focus")},focusout:function(b){a(b.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}})}(jQuery),function(a,b){var c=!1;a(document).mouseup(function(){c=!1}),a.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){if(!c){this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=1===b.which,f=!("string"!=typeof this.options.cancel||!b.target.nodeName)&&a(b.target).closest(this.options.cancel).length;return!(e&&!f&&this._mouseCapture(b))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(b)!==!1,!this._mouseStarted)?(b.preventDefault(),!0):(!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0,!0))}},_mouseMove:function(b){return a.ui.ie&&(!document.documentMode||document.documentMode<9)&&!b.button?this._mouseUp(b):this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted)},_mouseUp:function(b){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target===this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}(jQuery),function(a,b){a.widget("ui.draggable",a.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(b){var c=this.options;return!(this.helper||c.disabled||a(b.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(b),!!this.handle&&(a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")}),!0))},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_mouseDrag:function(b,c){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp({}),!1;this.position=d.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=this,d=!1;return a.ui.ddmanager&&!this.options.dropBehaviour&&(d=a.ui.ddmanager.drop(this,b)),this.dropped&&(d=this.dropped,this.dropped=!1),!("original"===this.options.helper&&!a.contains(this.element[0].ownerDocument,this.element[0]))&&("invalid"===this.options.revert&&!d||"valid"===this.options.revert&&d||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)?a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",b)!==!1&&c._clear()}):this._trigger("stop",b)!==!1&&this._clear(),!1)},_mouseUp:function(b){return a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(b){return!this.options.handle||!!a(b.target).closest(this.element.find(this.options.handle)).length},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):"clone"===c.helper?this.element.clone().removeAttr("id"):this.element;return d.parents("body").length||d.appendTo("parent"===c.appendTo?this.element[0].parentNode:c.appendTo),d[0]===this.element[0]||/(fixed|absolute)/.test(d.css("position"))||d.css("position","absolute"),d},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){var b=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&a.ui.ie)&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options;return e.containment?"window"===e.containment?void(this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===e.containment?void(this.containment=[0,0,a(document).width()-this.helperProportions.width-this.margins.left,(a(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):e.containment.constructor===Array?void(this.containment=e.containment):("parent"===e.containment&&(e.containment=this.helper[0].parentNode),c=a(e.containment),d=c[0],void(d&&(b="hidden"!==c.css("overflow"),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(b?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(b?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c))):void(this.containment=null)},_convertPositionTo:function(b,c){c||(c=this.position);var d="absolute"===b?1:-1,e="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:e.scrollTop(),left:e.scrollLeft()}),{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*d,left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*d}},_generatePosition:function(b){var c,d,e,f,g=this.options,h="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=b.pageX,j=b.pageY;return this.offset.scroll||(this.offset.scroll={top:h.scrollTop(),left:h.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(d=this.relative_container.offset(),c=[this.containment[0]+d.left,this.containment[1]+d.top,this.containment[2]+d.left,this.containment[3]+d.top]):c=this.containment,b.pageX-this.offset.click.left<c[0]&&(i=c[0]+this.offset.click.left),b.pageY-this.offset.click.top<c[1]&&(j=c[1]+this.offset.click.top),b.pageX-this.offset.click.left>c[2]&&(i=c[2]+this.offset.click.left),b.pageY-this.offset.click.top>c[3]&&(j=c[3]+this.offset.click.top)),g.grid&&(e=g.grid[1]?this.originalPageY+Math.round((j-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY,j=c?e-this.offset.click.top>=c[1]||e-this.offset.click.top>c[3]?e:e-this.offset.click.top>=c[1]?e-g.grid[1]:e+g.grid[1]:e,f=g.grid[0]?this.originalPageX+Math.round((i-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX,i=c?f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2]?f:f-this.offset.click.left>=c[0]?f-g.grid[0]:f+g.grid[0]:f)),{top:j-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:i-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),"drag"===b&&(this.positionAbs=this._convertPositionTo("absolute")),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("ui-draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"ui-sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("ui-draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,"original"===d.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("ui-draggable"),e=this;a.each(d.sortables,function(){var f=!1,g=this;this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(f=!0,a.each(d.sortables,function(){return this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this!==g&&this.instance._intersectsWith(this.instance.containerCache)&&a.contains(g.instance.element[0],this.instance.element[0])&&(f=!1),f})),f?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(){var b=a("body"),c=a(this).data("ui-draggable").options;b.css("cursor")&&(c._cursor=b.css("cursor")),b.css("cursor",c.cursor)},stop:function(){var b=a(this).data("ui-draggable").options;b._cursor&&a("body").css("cursor",b._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("ui-draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("ui-draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(){var b=a(this).data("ui-draggable");b.scrollParent[0]!==document&&"HTML"!==b.scrollParent[0].tagName&&(b.overflowOffset=b.scrollParent.offset())},drag:function(b){var c=a(this).data("ui-draggable"),d=c.options,e=!1;c.scrollParent[0]!==document&&"HTML"!==c.scrollParent[0].tagName?(d.axis&&"x"===d.axis||(c.overflowOffset.top+c.scrollParent[0].offsetHeight-b.pageY<d.scrollSensitivity?c.scrollParent[0].scrollTop=e=c.scrollParent[0].scrollTop+d.scrollSpeed:b.pageY-c.overflowOffset.top<d.scrollSensitivity&&(c.scrollParent[0].scrollTop=e=c.scrollParent[0].scrollTop-d.scrollSpeed)),d.axis&&"y"===d.axis||(c.overflowOffset.left+c.scrollParent[0].offsetWidth-b.pageX<d.scrollSensitivity?c.scrollParent[0].scrollLeft=e=c.scrollParent[0].scrollLeft+d.scrollSpeed:b.pageX-c.overflowOffset.left<d.scrollSensitivity&&(c.scrollParent[0].scrollLeft=e=c.scrollParent[0].scrollLeft-d.scrollSpeed))):(d.axis&&"x"===d.axis||(b.pageY-a(document).scrollTop()<d.scrollSensitivity?e=a(document).scrollTop(a(document).scrollTop()-d.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<d.scrollSensitivity&&(e=a(document).scrollTop(a(document).scrollTop()+d.scrollSpeed))),d.axis&&"y"===d.axis||(b.pageX-a(document).scrollLeft()<d.scrollSensitivity?e=a(document).scrollLeft(a(document).scrollLeft()-d.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<d.scrollSensitivity&&(e=a(document).scrollLeft(a(document).scrollLeft()+d.scrollSpeed)))),e!==!1&&a.ui.ddmanager&&!d.dropBehaviour&&a.ui.ddmanager.prepareOffsets(c,b)}}),a.ui.plugin.add("draggable","snap",{start:function(){var b=a(this).data("ui-draggable"),c=b.options;b.snapElements=[],a(c.snap.constructor!==String?c.snap.items||":data(ui-draggable)":c.snap).each(function(){var c=a(this),d=c.offset();this!==b.element[0]&&b.snapElements.push({item:this,width:c.outerWidth(),height:c.outerHeight(),top:d.top,left:d.left})})},drag:function(b,c){var d,e,f,g,h,i,j,k,l,m,n=a(this).data("ui-draggable"),o=n.options,p=o.snapTolerance,q=c.offset.left,r=q+n.helperProportions.width,s=c.offset.top,t=s+n.helperProportions.height;for(l=n.snapElements.length-1;l>=0;l--)h=n.snapElements[l].left,i=h+n.snapElements[l].width,j=n.snapElements[l].top,k=j+n.snapElements[l].height,r<h-p||q>i+p||t<j-p||s>k+p||!a.contains(n.snapElements[l].item.ownerDocument,n.snapElements[l].item)?(n.snapElements[l].snapping&&n.options.snap.release&&n.options.snap.release.call(n.element,b,a.extend(n._uiHash(),{snapItem:n.snapElements[l].item})),n.snapElements[l].snapping=!1):("inner"!==o.snapMode&&(d=Math.abs(j-t)<=p,e=Math.abs(k-s)<=p,f=Math.abs(h-r)<=p,g=Math.abs(i-q)<=p,d&&(c.position.top=n._convertPositionTo("relative",{top:j-n.helperProportions.height,left:0}).top-n.margins.top),e&&(c.position.top=n._convertPositionTo("relative",{top:k,left:0}).top-n.margins.top),f&&(c.position.left=n._convertPositionTo("relative",{top:0,left:h-n.helperProportions.width}).left-n.margins.left),g&&(c.position.left=n._convertPositionTo("relative",{top:0,left:i}).left-n.margins.left)),m=d||e||f||g,"outer"!==o.snapMode&&(d=Math.abs(j-s)<=p,e=Math.abs(k-t)<=p,f=Math.abs(h-q)<=p,g=Math.abs(i-r)<=p,d&&(c.position.top=n._convertPositionTo("relative",{top:j,left:0}).top-n.margins.top),e&&(c.position.top=n._convertPositionTo("relative",{top:k-n.helperProportions.height,left:0}).top-n.margins.top),f&&(c.position.left=n._convertPositionTo("relative",{top:0,left:h}).left-n.margins.left),g&&(c.position.left=n._convertPositionTo("relative",{top:0,left:i-n.helperProportions.width}).left-n.margins.left)),!n.snapElements[l].snapping&&(d||e||f||g||m)&&n.options.snap.snap&&n.options.snap.snap.call(n.element,b,a.extend(n._uiHash(),{snapItem:n.snapElements[l].item})),n.snapElements[l].snapping=d||e||f||g||m)}}),a.ui.plugin.add("draggable","stack",{start:function(){var b,c=this.data("ui-draggable").options,d=a.makeArray(a(c.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});d.length&&(b=parseInt(a(d[0]).css("zIndex"),10)||0,a(d).each(function(c){a(this).css("zIndex",b+c)}),this.css("zIndex",b+d.length))}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("ui-draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("ui-draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})}(jQuery),function(a,b){function c(a,b,c){return a>b&&a<b+c}a.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var b=this.options,c=b.accept;this.isover=!1,this.isout=!0,this.accept=a.isFunction(c)?c:function(a){return a.is(c)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},a.ui.ddmanager.droppables[b.scope]=a.ui.ddmanager.droppables[b.scope]||[],a.ui.ddmanager.droppables[b.scope].push(this),b.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var b=0,c=a.ui.ddmanager.droppables[this.options.scope];b<c.length;b++)c[b]===this&&c.splice(b,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(b,c){"accept"===b&&(this.accept=a.isFunction(c)?c:function(a){return a.is(c)}),a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),c&&this._trigger("activate",b,this.ui(c))},_deactivate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),c&&this._trigger("deactivate",b,this.ui(c))},_over:function(b){var c=a.ui.ddmanager.current;c&&(c.currentItem||c.element)[0]!==this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",b,this.ui(c)))},_out:function(b){var c=a.ui.ddmanager.current;c&&(c.currentItem||c.element)[0]!==this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",b,this.ui(c)))},_drop:function(b,c){var d=c||a.ui.ddmanager.current,e=!1;return!(!d||(d.currentItem||d.element)[0]===this.element[0])&&(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var b=a.data(this,"ui-droppable");if(b.options.greedy&&!b.options.disabled&&b.options.scope===d.options.scope&&b.accept.call(b.element[0],d.currentItem||d.element)&&a.ui.intersect(d,a.extend(b,{offset:b.element.offset()}),b.options.tolerance))return e=!0,!1}),!e&&(!!this.accept.call(this.element[0],d.currentItem||d.element)&&(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",b,this.ui(d)),this.element)))},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}}),a.ui.intersect=function(a,b,d){if(!b.offset)return!1;var e,f,g=(a.positionAbs||a.position.absolute).left,h=g+a.helperProportions.width,i=(a.positionAbs||a.position.absolute).top,j=i+a.helperProportions.height,k=b.offset.left,l=k+b.proportions.width,m=b.offset.top,n=m+b.proportions.height;switch(d){case"fit":return k<=g&&h<=l&&m<=i&&j<=n;case"intersect":return k<g+a.helperProportions.width/2&&h-a.helperProportions.width/2<l&&m<i+a.helperProportions.height/2&&j-a.helperProportions.height/2<n;case"pointer":return e=(a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left,f=(a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top,c(f,m,b.proportions.height)&&c(e,k,b.proportions.width);case"touch":return(i>=m&&i<=n||j>=m&&j<=n||i<m&&j>n)&&(g>=k&&g<=l||h>=k&&h<=l||g<k&&h>l);default:return!1}},a.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(b,c){var d,e,f=a.ui.ddmanager.droppables[b.options.scope]||[],g=c?c.type:null,h=(b.currentItem||b.element).find(":data(ui-droppable)").addBack();a:for(d=0;d<f.length;d++)if(!(f[d].options.disabled||b&&!f[d].accept.call(f[d].element[0],b.currentItem||b.element))){for(e=0;e<h.length;e++)if(h[e]===f[d].element[0]){f[d].proportions.height=0;continue a}f[d].visible="none"!==f[d].element.css("display"),f[d].visible&&("mousedown"===g&&f[d]._activate.call(f[d],c),f[d].offset=f[d].element.offset(),f[d].proportions={width:f[d].element[0].offsetWidth,height:f[d].element[0].offsetHeight})}},drop:function(b,c){var d=!1;return a.each((a.ui.ddmanager.droppables[b.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance)&&(d=this._drop.call(this,c)||d),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],b.currentItem||b.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,c)))}),d},dragStart:function(b,c){b.element.parentsUntil("body").bind("scroll.droppable",function(){b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)})},drag:function(b,c){b.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(b,c),a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var d,e,f,g=a.ui.intersect(b,this,this.options.tolerance),h=!g&&this.isover?"isout":g&&!this.isover?"isover":null;h&&(this.options.greedy&&(e=this.options.scope,f=this.element.parents(":data(ui-droppable)").filter(function(){return a.data(this,"ui-droppable").options.scope===e}),f.length&&(d=a.data(f[0],"ui-droppable"),d.greedyChild="isover"===h)),d&&"isover"===h&&(d.isover=!1,d.isout=!0,d._out.call(d,c)),this[h]=!0,this["isout"===h?"isover":"isout"]=!1,this["isover"===h?"_over":"_out"].call(this,c),d&&"isout"===h&&(d.isout=!1,d.isover=!0,d._over.call(d,c)))}})},dragStop:function(b,c){b.element.parentsUntil("body").unbind("scroll.droppable"),b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)}}}(jQuery),function(a,b){function c(a){return parseInt(a,10)||0}function d(a){return!isNaN(parseInt(a,10))}a.widget("ui.resizable",a.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var b,c,d,e,f,g=this,h=this.options;if(this.element.addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!h.aspectRatio,aspectRatio:h.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:h.helper||h.ghost||h.animate?h.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=h.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),b=this.handles.split(","),this.handles={},c=0;c<b.length;c++)d=a.trim(b[c]),f="ui-resizable-"+d,e=a("<div class='ui-resizable-handle "+f+"'></div>"),e.css({zIndex:h.zIndex}),"se"===d&&e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[d]=".ui-resizable-"+d,this.element.append(e);this._renderAxis=function(b){var c,d,e,f;b=b||this.element;for(c in this.handles)this.handles[c].constructor===String&&(this.handles[c]=a(this.handles[c],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(d=a(this.handles[c],this.element),f=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth(),e=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join(""),b.css(e,f),this._proportionallyResize()),a(this.handles[c]).length},this._renderAxis(this.element),this._handles=a(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){g.resizing||(this.className&&(e=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),g.axis=e&&e[1]?e[1]:"se")}),h.autoHide&&(this._handles.hide(),a(this.element).addClass("ui-resizable-autohide").mouseenter(function(){h.disabled||(a(this).removeClass("ui-resizable-autohide"),g._handles.show())}).mouseleave(function(){h.disabled||g.resizing||(a(this).addClass("ui-resizable-autohide"),g._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var b,c=function(b){a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(c(this.element),b=this.element,this.originalElement.css({position:b.css("position"),width:b.outerWidth(),height:b.outerHeight(),top:b.css("top"),left:b.css("left")}).insertAfter(b),b.remove()),this.originalElement.css("resize",this.originalResizeStyle),c(this.originalElement),this},_mouseCapture:function(b){var c,d,e=!1;for(c in this.handles)d=a(this.handles[c])[0],(d===b.target||a.contains(d,b.target))&&(e=!0);return!this.options.disabled&&e},_mouseStart:function(b){var d,e,f,g=this.options,h=this.element.position(),i=this.element;return this.resizing=!0,/absolute/.test(i.css("position"))?i.css({position:"absolute",top:i.css("top"),left:i.css("left")}):i.is(".ui-draggable")&&i.css({position:"absolute",top:h.top,left:h.left}),this._renderProxy(),d=c(this.helper.css("left")),e=c(this.helper.css("top")),g.containment&&(d+=a(g.containment).scrollLeft()||0,e+=a(g.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:d,top:e},this.size=this._helper?{width:i.outerWidth(),height:i.outerHeight()}:{width:i.width(),height:i.height()},this.originalSize=this._helper?{width:i.outerWidth(),height:i.outerHeight()}:{width:i.width(),height:i.height()},this.originalPosition={left:d,top:e},this.sizeDiff={width:i.outerWidth()-i.width(),height:i.outerHeight()-i.height()},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio="number"==typeof g.aspectRatio?g.aspectRatio:this.originalSize.width/this.originalSize.height||1,f=a(".ui-resizable-"+this.axis).css("cursor"),a("body").css("cursor","auto"===f?this.axis+"-resize":f),i.addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){var c,d=this.helper,e={},f=this.originalMousePosition,g=this.axis,h=this.position.top,i=this.position.left,j=this.size.width,k=this.size.height,l=b.pageX-f.left||0,m=b.pageY-f.top||0,n=this._change[g];return!!n&&(c=n.apply(this,[b,l,m]),this._updateVirtualBoundaries(b.shiftKey),(this._aspectRatio||b.shiftKey)&&(c=this._updateRatio(c,b)),c=this._respectSize(c,b),this._updateCache(c),this._propagate("resize",b),this.position.top!==h&&(e.top=this.position.top+"px"),this.position.left!==i&&(e.left=this.position.left+"px"),this.size.width!==j&&(e.width=this.size.width+"px"),this.size.height!==k&&(e.height=this.size.height+"px"),d.css(e),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),a.isEmptyObject(e)||this._trigger("resize",b,this.ui()),!1)},_mouseStop:function(b){this.resizing=!1;var c,d,e,f,g,h,i,j=this.options,k=this;return this._helper&&(c=this._proportionallyResizeElements,d=c.length&&/textarea/i.test(c[0].nodeName),e=d&&a.ui.hasScroll(c[0],"left")?0:k.sizeDiff.height,f=d?0:k.sizeDiff.width,g={width:k.helper.width()-f,height:k.helper.height()-e},h=parseInt(k.element.css("left"),10)+(k.position.left-k.originalPosition.left)||null,i=parseInt(k.element.css("top"),10)+(k.position.top-k.originalPosition.top)||null,j.animate||this.element.css(a.extend(g,{top:i,left:h})),k.helper.height(k.size.height),k.helper.width(k.size.width),this._helper&&!j.animate&&this._proportionallyResize()),a("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(a){var b,c,e,f,g,h=this.options;g={minWidth:d(h.minWidth)?h.minWidth:0,maxWidth:d(h.maxWidth)?h.maxWidth:1/0,minHeight:d(h.minHeight)?h.minHeight:0,maxHeight:d(h.maxHeight)?h.maxHeight:1/0},(this._aspectRatio||a)&&(b=g.minHeight*this.aspectRatio,e=g.minWidth/this.aspectRatio,c=g.maxHeight*this.aspectRatio,f=g.maxWidth/this.aspectRatio,b>g.minWidth&&(g.minWidth=b),e>g.minHeight&&(g.minHeight=e),c<g.maxWidth&&(g.maxWidth=c),f<g.maxHeight&&(g.maxHeight=f)),this._vBoundaries=g},_updateCache:function(a){this.offset=this.helper.offset(),d(a.left)&&(this.position.left=a.left),d(a.top)&&(this.position.top=a.top),d(a.height)&&(this.size.height=a.height),d(a.width)&&(this.size.width=a.width)},_updateRatio:function(a){var b=this.position,c=this.size,e=this.axis;return d(a.height)?a.width=a.height*this.aspectRatio:d(a.width)&&(a.height=a.width/this.aspectRatio),"sw"===e&&(a.left=b.left+(c.width-a.width),a.top=null),"nw"===e&&(a.top=b.top+(c.height-a.height),a.left=b.left+(c.width-a.width)),a},_respectSize:function(a){var b=this._vBoundaries,c=this.axis,e=d(a.width)&&b.maxWidth&&b.maxWidth<a.width,f=d(a.height)&&b.maxHeight&&b.maxHeight<a.height,g=d(a.width)&&b.minWidth&&b.minWidth>a.width,h=d(a.height)&&b.minHeight&&b.minHeight>a.height,i=this.originalPosition.left+this.originalSize.width,j=this.position.top+this.size.height,k=/sw|nw|w/.test(c),l=/nw|ne|n/.test(c);return g&&(a.width=b.minWidth),h&&(a.height=b.minHeight),e&&(a.width=b.maxWidth),f&&(a.height=b.maxHeight),g&&k&&(a.left=i-b.minWidth),e&&k&&(a.left=i-b.maxWidth),h&&l&&(a.top=j-b.minHeight),f&&l&&(a.top=j-b.maxHeight),a.width||a.height||a.left||!a.top?a.width||a.height||a.top||!a.left||(a.left=null):a.top=null,a},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var a,b,c,d,e,f=this.helper||this.element;for(a=0;a<this._proportionallyResizeElements.length;a++){if(e=this._proportionallyResizeElements[a],!this.borderDif)for(this.borderDif=[],c=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],d=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")],b=0;b<c.length;b++)this.borderDif[b]=(parseInt(c[b],10)||0)+(parseInt(d[b],10)||0);e.css({height:f.height()-this.borderDif[0]-this.borderDif[2]||0,width:f.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset(),this._helper?(this.helper=this.helper||a("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(a,b){return{width:this.originalSize.width+b}},w:function(a,b){var c=this.originalSize,d=this.originalPosition;return{left:d.left+b,width:c.width-b}},n:function(a,b,c){var d=this.originalSize,e=this.originalPosition;return{top:e.top+c,height:d.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),"resize"!==b&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.ui.plugin.add("resizable","animate",{stop:function(b){var c=a(this).data("ui-resizable"),d=c.options,e=c._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&a.ui.hasScroll(e[0],"left")?0:c.sizeDiff.height,h=f?0:c.sizeDiff.width,i={width:c.size.width-h,height:c.size.height-g},j=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null,k=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null;c.element.animate(a.extend(i,k&&j?{top:k,left:j}:{}),{duration:d.animateDuration,easing:d.animateEasing,step:function(){var d={width:parseInt(c.element.css("width"),10),height:parseInt(c.element.css("height"),10),top:parseInt(c.element.css("top"),10),left:parseInt(c.element.css("left"),10)};e&&e.length&&a(e[0]).css({width:d.width,height:d.height}),c._updateCache(d),c._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(){var b,d,e,f,g,h,i,j=a(this).data("ui-resizable"),k=j.options,l=j.element,m=k.containment,n=m instanceof a?m.get(0):/parent/.test(m)?l.parent().get(0):m;n&&(j.containerElement=a(n),/document/.test(m)||m===document?(j.containerOffset={left:0,top:0},j.containerPosition={left:0,top:0},j.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight}):(b=a(n),d=[],a(["Top","Right","Left","Bottom"]).each(function(a,e){d[a]=c(b.css("padding"+e))}),j.containerOffset=b.offset(),j.containerPosition=b.position(),j.containerSize={height:b.innerHeight()-d[3],width:b.innerWidth()-d[1]},e=j.containerOffset,f=j.containerSize.height,g=j.containerSize.width,h=a.ui.hasScroll(n,"left")?n.scrollWidth:g,i=a.ui.hasScroll(n)?n.scrollHeight:f,j.parentData={element:n,left:e.left,top:e.top,width:h,height:i}))},resize:function(b){var c,d,e,f,g=a(this).data("ui-resizable"),h=g.options,i=g.containerOffset,j=g.position,k=g._aspectRatio||b.shiftKey,l={top:0,left:0},m=g.containerElement;m[0]!==document&&/static/.test(m.css("position"))&&(l=i),j.left<(g._helper?i.left:0)&&(g.size.width=g.size.width+(g._helper?g.position.left-i.left:g.position.left-l.left),k&&(g.size.height=g.size.width/g.aspectRatio),g.position.left=h.helper?i.left:0),j.top<(g._helper?i.top:0)&&(g.size.height=g.size.height+(g._helper?g.position.top-i.top:g.position.top),k&&(g.size.width=g.size.height*g.aspectRatio),g.position.top=g._helper?i.top:0),g.offset.left=g.parentData.left+g.position.left,g.offset.top=g.parentData.top+g.position.top,c=Math.abs((g._helper?g.offset.left-l.left:g.offset.left-l.left)+g.sizeDiff.width),d=Math.abs((g._helper?g.offset.top-l.top:g.offset.top-i.top)+g.sizeDiff.height),e=g.containerElement.get(0)===g.element.parent().get(0),f=/relative|absolute/.test(g.containerElement.css("position")),e&&f&&(c-=g.parentData.left),c+g.size.width>=g.parentData.width&&(g.size.width=g.parentData.width-c,k&&(g.size.height=g.size.width/g.aspectRatio)),d+g.size.height>=g.parentData.height&&(g.size.height=g.parentData.height-d,k&&(g.size.width=g.size.height*g.aspectRatio))},stop:function(){var b=a(this).data("ui-resizable"),c=b.options,d=b.containerOffset,e=b.containerPosition,f=b.containerElement,g=a(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width,j=g.outerHeight()-b.sizeDiff.height;b._helper&&!c.animate&&/relative/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j}),b._helper&&!c.animate&&/static/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j})}}),a.ui.plugin.add("resizable","alsoResize",{start:function(){var b=a(this).data("ui-resizable"),c=b.options,d=function(b){a(b).each(function(){var b=a(this);b.data("ui-resizable-alsoresize",{width:parseInt(b.width(),10),height:parseInt(b.height(),10),left:parseInt(b.css("left"),10),top:parseInt(b.css("top"),10)})})};"object"!=typeof c.alsoResize||c.alsoResize.parentNode?d(c.alsoResize):c.alsoResize.length?(c.alsoResize=c.alsoResize[0],d(c.alsoResize)):a.each(c.alsoResize,function(a){d(a)})},resize:function(b,c){var d=a(this).data("ui-resizable"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0},i=function(b,d){a(b).each(function(){var b=a(this),e=a(this).data("ui-resizable-alsoresize"),f={},g=d&&d.length?d:b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(g,function(a,b){var c=(e[b]||0)+(h[b]||0);c&&c>=0&&(f[b]=c||null)}),b.css(f)})};"object"!=typeof e.alsoResize||e.alsoResize.nodeType?i(e.alsoResize):a.each(e.alsoResize,function(a,b){i(a,b)})},stop:function(){a(this).removeData("resizable-alsoresize")}}),a.ui.plugin.add("resizable","ghost",{start:function(){var b=a(this).data("ui-resizable"),c=b.options,d=b.size;b.ghost=b.originalElement.clone(),b.ghost.css({opacity:.25,display:"block",position:"relative",height:d.height,width:d.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof c.ghost?c.ghost:""),b.ghost.appendTo(b.helper)},resize:function(){var b=a(this).data("ui-resizable");b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=a(this).data("ui-resizable");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(){var b=a(this).data("ui-resizable"),c=b.options,d=b.size,e=b.originalSize,f=b.originalPosition,g=b.axis,h="number"==typeof c.grid?[c.grid,c.grid]:c.grid,i=h[0]||1,j=h[1]||1,k=Math.round((d.width-e.width)/i)*i,l=Math.round((d.height-e.height)/j)*j,m=e.width+k,n=e.height+l,o=c.maxWidth&&c.maxWidth<m,p=c.maxHeight&&c.maxHeight<n,q=c.minWidth&&c.minWidth>m,r=c.minHeight&&c.minHeight>n;c.grid=h,q&&(m+=i),r&&(n+=j),o&&(m-=i),p&&(n-=j),/^(se|s|e)$/.test(g)?(b.size.width=m,b.size.height=n):/^(ne)$/.test(g)?(b.size.width=m,b.size.height=n,b.position.top=f.top-l):/^(sw)$/.test(g)?(b.size.width=m,b.size.height=n,b.position.left=f.left-k):(b.size.width=m,b.size.height=n,b.position.top=f.top-l,b.position.left=f.left-k)}})}(jQuery),function(a,b){a.widget("ui.selectable",a.ui.mouse,{version:"1.10.3",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var b,c=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){b=a(c.options.filter,c.element[0]),b.addClass("ui-selectee"),b.each(function(){var b=a(this),c=b.offset();a.data(this,"selectable-item",{element:this,$element:b,left:c.left,top:c.top,right:c.left+b.outerWidth(),bottom:c.top+b.outerHeight(),startselected:!1,selected:b.hasClass("ui-selected"),selecting:b.hasClass("ui-selecting"),unselecting:b.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=b.addClass("ui-selectee"),this._mouseInit(),this.helper=a("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(b){var c=this,d=this.options;this.opos=[b.pageX,b.pageY],this.options.disabled||(this.selectees=a(d.filter,this.element[0]),this._trigger("start",b),a(d.appendTo).append(this.helper),this.helper.css({left:b.pageX,top:b.pageY,width:0,height:0}),d.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var d=a.data(this,"selectable-item");d.startselected=!0,b.metaKey||b.ctrlKey||(d.$element.removeClass("ui-selected"),d.selected=!1,d.$element.addClass("ui-unselecting"),d.unselecting=!0,c._trigger("unselecting",b,{unselecting:d.element}))}),a(b.target).parents().addBack().each(function(){var d,e=a.data(this,"selectable-item");if(e)return d=!b.metaKey&&!b.ctrlKey||!e.$element.hasClass("ui-selected"),e.$element.removeClass(d?"ui-unselecting":"ui-selected").addClass(d?"ui-selecting":"ui-unselecting"),e.unselecting=!d,e.selecting=d,e.selected=d,d?c._trigger("selecting",b,{selecting:e.element}):c._trigger("unselecting",b,{unselecting:e.element}),!1}))},_mouseDrag:function(b){if(this.dragged=!0,!this.options.disabled){var c,d=this,e=this.options,f=this.opos[0],g=this.opos[1],h=b.pageX,i=b.pageY;return f>h&&(c=h,h=f,f=c),g>i&&(c=i,i=g,g=c),this.helper.css({left:f,top:g,width:h-f,height:i-g}),this.selectees.each(function(){var c=a.data(this,"selectable-item"),j=!1;c&&c.element!==d.element[0]&&("touch"===e.tolerance?j=!(c.left>h||c.right<f||c.top>i||c.bottom<g):"fit"===e.tolerance&&(j=c.left>f&&c.right<h&&c.top>g&&c.bottom<i),j?(c.selected&&(c.$element.removeClass("ui-selected"),c.selected=!1),c.unselecting&&(c.$element.removeClass("ui-unselecting"),c.unselecting=!1),c.selecting||(c.$element.addClass("ui-selecting"),c.selecting=!0,d._trigger("selecting",b,{selecting:c.element}))):(c.selecting&&((b.metaKey||b.ctrlKey)&&c.startselected?(c.$element.removeClass("ui-selecting"),c.selecting=!1,c.$element.addClass("ui-selected"),c.selected=!0):(c.$element.removeClass("ui-selecting"),c.selecting=!1,c.startselected&&(c.$element.addClass("ui-unselecting"),c.unselecting=!0),d._trigger("unselecting",b,{unselecting:c.element}))),c.selected&&(b.metaKey||b.ctrlKey||c.startselected||(c.$element.removeClass("ui-selected"),c.selected=!1,c.$element.addClass("ui-unselecting"),c.unselecting=!0,d._trigger("unselecting",b,{unselecting:c.element})))))}),!1}},_mouseStop:function(b){var c=this;return this.dragged=!1,a(".ui-unselecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-unselecting"),d.unselecting=!1,d.startselected=!1,c._trigger("unselected",b,{unselected:d.element})}),a(".ui-selecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected"),d.selecting=!1,d.selected=!0,d.startselected=!0,c._trigger("selected",b,{selected:d.element})}),this._trigger("stop",b),this.helper.remove(),!1}})}(jQuery),function(a,b){function c(a,b,c){return a>b&&a<b+c}function d(a){return/left|right/.test(a.css("float"))||/inline|table-cell/.test(a.css("display"))}a.widget("ui.sortable",a.ui.mouse,{version:"1.10.3",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var a=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=!!this.items.length&&("x"===a.axis||d(this.items[0].item)),this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData(this.widgetName+"-item");return this},_setOption:function(b,c){"disabled"===b?(this.options[b]=c,this.widget().toggleClass("ui-sortable-disabled",!!c)):a.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(b,c){var d=null,e=!1,f=this;return!this.reverting&&(!this.options.disabled&&"static"!==this.options.type&&(this._refreshItems(b),a(b.target).parents().each(function(){if(a.data(this,f.widgetName+"-item")===f)return d=a(this),!1}),a.data(b.target,f.widgetName+"-item")===f&&(d=a(b.target)),!!d&&(!(this.options.handle&&!c&&(a(this.options.handle,d).find("*").addBack().each(function(){this===b.target&&(e=!0)}),!e))&&(this.currentItem=d,this._removeCurrentsFromItems(),!0))))},_mouseStart:function(b,c,d){var e,f,g=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(b),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,g.cursorAt&&this._adjustOffsetFromHelper(g.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),g.containment&&this._setContainment(),g.cursor&&"auto"!==g.cursor&&(f=this.document.find("body"),this.storedCursor=f.css("cursor"),f.css("cursor",g.cursor),this.storedStylesheet=a("<style>*{ cursor: "+g.cursor+" !important; }</style>").appendTo(f)),g.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",g.opacity)),g.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",g.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",b,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!d)for(e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("activate",b,this._uiHash(this));return a.ui.ddmanager&&(a.ui.ddmanager.current=this),a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(b),!0},_mouseDrag:function(b){var c,d,e,f,g=this.options,h=!1;for(this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-b.pageY<g.scrollSensitivity?this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop+g.scrollSpeed:b.pageY-this.overflowOffset.top<g.scrollSensitivity&&(this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop-g.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-b.pageX<g.scrollSensitivity?this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft+g.scrollSpeed:b.pageX-this.overflowOffset.left<g.scrollSensitivity&&(this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft-g.scrollSpeed)):(b.pageY-a(document).scrollTop()<g.scrollSensitivity?h=a(document).scrollTop(a(document).scrollTop()-g.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<g.scrollSensitivity&&(h=a(document).scrollTop(a(document).scrollTop()+g.scrollSpeed)),b.pageX-a(document).scrollLeft()<g.scrollSensitivity?h=a(document).scrollLeft(a(document).scrollLeft()-g.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<g.scrollSensitivity&&(h=a(document).scrollLeft(a(document).scrollLeft()+g.scrollSpeed))),h!==!1&&a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),c=this.items.length-1;c>=0;c--)if(d=this.items[c],e=d.item[0],f=this._intersectsWithPointer(d),f&&d.instance===this.currentContainer&&!(e===this.currentItem[0]||this.placeholder[1===f?"next":"prev"]()[0]===e||a.contains(this.placeholder[0],e)||"semi-dynamic"===this.options.type&&a.contains(this.element[0],e))){if(this.direction=1===f?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(d))break;this._rearrange(b,d),this._trigger("change",b,this._uiHash());break}return this._contactContainers(b),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),this._trigger("sort",b,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(b,c){if(b){if(a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,b),this.options.revert){var d=this,e=this.placeholder.offset(),f=this.options.axis,g={};f&&"x"!==f||(g.left=e.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),f&&"y"!==f||(g.top=e.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,a(this.helper).animate(g,parseInt(this.options.revert,10)||500,function(){d._clear(b)})}else this._clear(b,c);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var b=this.containers.length-1;b>=0;b--)this.containers[b]._trigger("deactivate",null,this._uiHash(this)),this.containers[b].containerCache.over&&(this.containers[b]._trigger("out",null,this._uiHash(this)),this.containers[b].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),a.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},a(c).each(function(){var c=(a(b.item||this).attr(b.attribute||"id")||"").match(b.expression||/(.+)[\-=_](.+)/);c&&d.push((b.key||c[1]+"[]")+"="+(b.key&&b.expression?c[1]:c[2]))}),!d.length&&b.key&&d.push(b.key+"="),d.join("&")},toArray:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},c.each(function(){d.push(a(b.item||this).attr(b.attribute||"id")||"")}),d},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,e=d+this.helperProportions.height,f=a.left,g=f+a.width,h=a.top,i=h+a.height,j=this.offset.click.top,k=this.offset.click.left,l="x"===this.options.axis||d+j>h&&d+j<i,m="y"===this.options.axis||b+k>f&&b+k<g,n=l&&m;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?n:f<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<g&&h<d+this.helperProportions.height/2&&e-this.helperProportions.height/2<i},_intersectsWithPointer:function(a){var b="x"===this.options.axis||c(this.positionAbs.top+this.offset.click.top,a.top,a.height),d="y"===this.options.axis||c(this.positionAbs.left+this.offset.click.left,a.left,a.width),e=b&&d,f=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();return!!e&&(this.floating?g&&"right"===g||"down"===f?2:1:f&&("down"===f?2:1))},_intersectsWithSides:function(a){var b=c(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height),d=c(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width),e=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();return this.floating&&f?"right"===f&&d||"left"===f&&!d:e&&("down"===e&&b||"up"===e&&!b)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return 0!==a&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return 0!==a&&(a>0?"right":"left")},refresh:function(a){return this._refreshItems(a),this.refreshPositions(),this},_connectWith:function(){var a=this.options;return a.connectWith.constructor===String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(b){var c,d,e,f,g=[],h=[],i=this._connectWith();if(i&&b)for(c=i.length-1;c>=0;c--)for(e=a(i[c]),d=e.length-1;d>=0;d--)f=a.data(e[d],this.widgetFullName),f&&f!==this&&!f.options.disabled&&h.push([a.isFunction(f.options.items)?f.options.items.call(f.element):a(f.options.items,f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),f]);for(h.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),c=h.length-1;c>=0;c--)h[c][0].each(function(){g.push(this)});return a(g)},_removeCurrentsFromItems:function(){var b=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=a.grep(this.items,function(a){for(var c=0;c<b.length;c++)if(b[c]===a.item[0])return!1;return!0})},_refreshItems:function(b){this.items=[],this.containers=[this];var c,d,e,f,g,h,i,j,k=this.items,l=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]],m=this._connectWith();if(m&&this.ready)for(c=m.length-1;c>=0;c--)for(e=a(m[c]),d=e.length-1;d>=0;d--)f=a.data(e[d],this.widgetFullName),f&&f!==this&&!f.options.disabled&&(l.push([a.isFunction(f.options.items)?f.options.items.call(f.element[0],b,{item:this.currentItem}):a(f.options.items,f.element),f]),this.containers.push(f));for(c=l.length-1;c>=0;c--)for(g=l[c][1],h=l[c][0],d=0,j=h.length;d<j;d++)i=a(h[d]),i.data(this.widgetName+"-item",g),k.push({item:i,instance:g,width:0,height:0,left:0,top:0})},refreshPositions:function(b){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var c,d,e,f;for(c=this.items.length-1;c>=0;c--)d=this.items[c],d.instance!==this.currentContainer&&this.currentContainer&&d.item[0]!==this.currentItem[0]||(e=this.options.toleranceElement?a(this.options.toleranceElement,d.item):d.item,b||(d.width=e.outerWidth(),d.height=e.outerHeight()),f=e.offset(),d.left=f.left,d.top=f.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(c=this.containers.length-1;c>=0;c--)f=this.containers[c].element.offset(),this.containers[c].containerCache.left=f.left,this.containers[c].containerCache.top=f.top,this.containers[c].containerCache.width=this.containers[c].element.outerWidth(),this.containers[c].containerCache.height=this.containers[c].element.outerHeight();return this},_createPlaceholder:function(b){b=b||this;var c,d=b.options;d.placeholder&&d.placeholder.constructor!==String||(c=d.placeholder,d.placeholder={element:function(){var d=b.currentItem[0].nodeName.toLowerCase(),e=a("<"+d+">",b.document[0]).addClass(c||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===d?b.currentItem.children().each(function(){a("<td>&#160;</td>",b.document[0]).attr("colspan",a(this).attr("colspan")||1).appendTo(e)}):"img"===d&&e.attr("src",b.currentItem.attr("src")),c||e.css("visibility","hidden"),e},update:function(a,e){c&&!d.forcePlaceholderSize||(e.height()||e.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10)),e.width()||e.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10)))}}),b.placeholder=a(d.placeholder.element.call(b.element,b.currentItem)),b.currentItem.after(b.placeholder),d.placeholder.update(b,b.placeholder)},_contactContainers:function(b){var e,f,g,h,i,j,k,l,m,n,o=null,p=null;for(e=this.containers.length-1;e>=0;e--)if(!a.contains(this.currentItem[0],this.containers[e].element[0]))if(this._intersectsWith(this.containers[e].containerCache)){if(o&&a.contains(this.containers[e].element[0],o.element[0]))continue;o=this.containers[e],p=e}else this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",b,this._uiHash(this)),this.containers[e].containerCache.over=0);if(o)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",b,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(g=1e4,h=null,n=o.floating||d(this.currentItem),i=n?"left":"top",j=n?"width":"height",k=this.positionAbs[i]+this.offset.click[i],f=this.items.length-1;f>=0;f--)a.contains(this.containers[p].element[0],this.items[f].item[0])&&this.items[f].item[0]!==this.currentItem[0]&&(n&&!c(this.positionAbs.top+this.offset.click.top,this.items[f].top,this.items[f].height)||(l=this.items[f].item.offset()[i],m=!1,Math.abs(l-k)>Math.abs(l+this.items[f][j]-k)&&(m=!0,l+=this.items[f][j]),Math.abs(l-k)<g&&(g=Math.abs(l-k),h=this.items[f],this.direction=m?"up":"down")));if(!h&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return;h?this._rearrange(b,h,null,!0):this._rearrange(b,null,this.containers[p].element,!0),this._trigger("change",b,this._uiHash()),this.containers[p]._trigger("change",b,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",b,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b,this.currentItem])):"clone"===c.helper?this.currentItem.clone():this.currentItem;return d.parents("body").length||a("parent"!==c.appendTo?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]),d[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),d[0].style.width&&!c.forceHelperSize||d.width(this.currentItem.width()),d[0].style.height&&!c.forceHelperSize||d.height(this.currentItem.height()),d},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&a.ui.ie)&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options;"parent"===e.containment&&(e.containment=this.helper[0].parentNode),"document"!==e.containment&&"window"!==e.containment||(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a("document"===e.containment?document:window).width()-this.helperProportions.width-this.margins.left,(a("document"===e.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(e.containment)||(b=a(e.containment)[0],c=a(e.containment).offset(),d="hidden"!==a(b).css("overflow"),this.containment=[c.left+(parseInt(a(b).css("borderLeftWidth"),10)||0)+(parseInt(a(b).css("paddingLeft"),10)||0)-this.margins.left,c.top+(parseInt(a(b).css("borderTopWidth"),10)||0)+(parseInt(a(b).css("paddingTop"),10)||0)-this.margins.top,c.left+(d?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(a(b).css("borderLeftWidth"),10)||0)-(parseInt(a(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,c.top+(d?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(a(b).css("borderTopWidth"),10)||0)-(parseInt(a(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(b,c){c||(c=this.position);var d="absolute"===b?1:-1,e="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,f=/(html|body)/i.test(e[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():f?0:e.scrollTop())*d,left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():f?0:e.scrollLeft())*d}},_generatePosition:function(b){var c,d,e=this.options,f=b.pageX,g=b.pageY,h="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(h[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(b.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),b.pageY-this.offset.click.top<this.containment[1]&&(g=this.containment[1]+this.offset.click.top),b.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),b.pageY-this.offset.click.top>this.containment[3]&&(g=this.containment[3]+this.offset.click.top)),e.grid&&(c=this.originalPageY+Math.round((g-this.originalPageY)/e.grid[1])*e.grid[1],g=this.containment?c-this.offset.click.top>=this.containment[1]&&c-this.offset.click.top<=this.containment[3]?c:c-this.offset.click.top>=this.containment[1]?c-e.grid[1]:c+e.grid[1]:c,d=this.originalPageX+Math.round((f-this.originalPageX)/e.grid[0])*e.grid[0],f=this.containment?d-this.offset.click.left>=this.containment[0]&&d-this.offset.click.left<=this.containment[2]?d:d-this.offset.click.left>=this.containment[0]?d-e.grid[0]:d+e.grid[0]:d)),{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():i?0:h.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():i?0:h.scrollLeft())}},_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?b.item[0]:b.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var e=this.counter;this._delay(function(){e===this.counter&&this.refreshPositions(!d)})},_clear:function(a,b){this.reverting=!1;var c,d=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(c in this._storedCSS)"auto"!==this._storedCSS[c]&&"static"!==this._storedCSS[c]||(this._storedCSS[c]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!b&&d.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||b||d.push(function(a){this._trigger("update",a,this._uiHash())}),this!==this.currentContainer&&(b||(d.push(function(a){this._trigger("remove",a,this._uiHash())}),d.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.currentContainer)),d.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.currentContainer)))),c=this.containers.length-1;c>=0;c--)b||d.push(function(a){return function(b){a._trigger("deactivate",b,this._uiHash(this))}}.call(this,this.containers[c])),this.containers[c].containerCache.over&&(d.push(function(a){return function(b){a._trigger("out",b,this._uiHash(this))}}.call(this,this.containers[c])),this.containers[c].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!b){for(this._trigger("beforeStop",a,this._uiHash()),c=0;c<d.length;c++)d[c].call(this,a);this._trigger("stop",a,this._uiHash())}return this.fromOutside=!1,!1}if(b||this._trigger("beforeStop",a,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!b){for(c=0;c<d.length;c++)d[c].call(this,a);this._trigger("stop",a,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(b){var c=b||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:b?b.element:null}}})}(jQuery),function(a,b){var c="ui-effects-";a.effects={effect:{}},function(a,b){function m(a,b,c){var d=h[b.type]||{};return null==a?c||!b.def?null:b.def:(a=d.floor?~~a:parseFloat(a),isNaN(a)?b.def:d.mod?(a+d.mod)%d.mod:0>a?0:d.max<a?d.max:a)}function n(b){var c=f(),d=c._rgba=[];return b=b.toLowerCase(),l(e,function(a,e){var f,h=e.re.exec(b),i=h&&e.parse(h),j=e.space||"rgba";if(i)return f=c[j](i),c[g[j].cache]=f[g[j].cache],d=c._rgba=f._rgba,!1}),d.length?("0,0,0,0"===d.join()&&a.extend(d,k.transparent),c):k[b]}function o(a,b,c){return c=(c+1)%1,6*c<1?a+(b-a)*c*6:2*c<1?b:3*c<2?a+(b-a)*(2/3-c)*6:a}var k,c="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",d=/^([\-+])=\s*(\d+\.?\d*)/,e=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],f=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e)},g={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},h={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},i=f.support={},j=a("<p>")[0],l=a.each;j.style.cssText="background-color:rgba(1,1,1,.5)",i.rgba=j.style.backgroundColor.indexOf("rgba")>-1,l(g,function(a,b){b.cache="_"+a,b.props.alpha={idx:3,type:"percent",def:1}}),f.fn=a.extend(f.prototype,{parse:function(c,d,e,h){if(c===b)return this._rgba=[null,null,null,null],this;(c.jquery||c.nodeType)&&(c=a(c).css(d),d=b);var i=this,j=a.type(c),o=this._rgba=[];return d!==b&&(c=[c,d,e,h],j="array"),"string"===j?this.parse(n(c)||k._default):"array"===j?(l(g.rgba.props,function(a,b){o[b.idx]=m(c[b.idx],b)}),this):"object"===j?(c instanceof f?l(g,function(a,b){c[b.cache]&&(i[b.cache]=c[b.cache].slice())}):l(g,function(b,d){var e=d.cache;l(d.props,function(a,b){if(!i[e]&&d.to){if("alpha"===a||null==c[a])return;i[e]=d.to(i._rgba)}i[e][b.idx]=m(c[a],b,!0)}),i[e]&&a.inArray(null,i[e].slice(0,3))<0&&(i[e][3]=1,d.from&&(i._rgba=d.from(i[e])))}),this):void 0},is:function(a){var b=f(a),c=!0,d=this;return l(g,function(a,e){var f,g=b[e.cache];return g&&(f=d[e.cache]||e.to&&e.to(d._rgba)||[],l(e.props,function(a,b){if(null!=g[b.idx])return c=g[b.idx]===f[b.idx]})),c}),c},_space:function(){var a=[],b=this;return l(g,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(a,b){var c=f(a),d=c._space(),e=g[d],i=0===this.alpha()?f("transparent"):this,j=i[e.cache]||e.to(i._rgba),k=j.slice();return c=c[e.cache],l(e.props,function(a,d){var e=d.idx,f=j[e],g=c[e],i=h[d.type]||{};null!==g&&(null===f?k[e]=g:(i.mod&&(g-f>i.mod/2?f+=i.mod:f-g>i.mod/2&&(f-=i.mod)),k[e]=m((g-f)*b+f,d)))}),this[d](k)},blend:function(b){if(1===this._rgba[3])return this;var c=this._rgba.slice(),d=c.pop(),e=f(b)._rgba;return f(a.map(c,function(a,b){return(1-d)*e[b]+d*a}))},toRgbaString:function(){var b="rgba(",c=a.map(this._rgba,function(a,b){return null==a?b>2?1:0:a});return 1===c[3]&&(c.pop(),b="rgb("),b+c.join()+")"},toHslaString:function(){var b="hsla(",c=a.map(this.hsla(),function(a,b){return null==a&&(a=b>2?1:0),b&&b<3&&(a=Math.round(100*a)+"%"),a});return 1===c[3]&&(c.pop(),b="hsl("),b+c.join()+")"},toHexString:function(b){var c=this._rgba.slice(),d=c.pop();return b&&c.push(~~(255*d)),"#"+a.map(c,function(a){return a=(a||0).toString(16),1===a.length?"0"+a:a}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),f.fn.parse.prototype=f.fn,g.hsla.to=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var k,l,b=a[0]/255,c=a[1]/255,d=a[2]/255,e=a[3],f=Math.max(b,c,d),g=Math.min(b,c,d),h=f-g,i=f+g,j=.5*i;return k=g===f?0:b===f?60*(c-d)/h+360:c===f?60*(d-b)/h+120:60*(b-c)/h+240,l=0===h?0:j<=.5?h/i:h/(2-i),[Math.round(k)%360,l,j,null==e?1:e]},g.hsla.from=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2],e=a[3],f=d<=.5?d*(1+c):d+c-d*c,g=2*d-f;return[Math.round(255*o(g,f,b+1/3)),Math.round(255*o(g,f,b)),Math.round(255*o(g,f,b-1/3)),e]},l(g,function(c,e){var g=e.props,h=e.cache,i=e.to,j=e.from;f.fn[c]=function(c){if(i&&!this[h]&&(this[h]=i(this._rgba)),c===b)return this[h].slice();var d,e=a.type(c),k="array"===e||"object"===e?c:arguments,n=this[h].slice();return l(g,function(a,b){var c=k["object"===e?a:b.idx];null==c&&(c=n[b.idx]),n[b.idx]=m(c,b)}),j?(d=f(j(n)),d[h]=n,d):f(n)},l(g,function(b,e){f.fn[b]||(f.fn[b]=function(f){var k,g=a.type(f),h="alpha"===b?this._hsla?"hsla":"rgba":c,i=this[h](),j=i[e.idx];return"undefined"===g?j:("function"===g&&(f=f.call(this,j),g=a.type(f)),null==f&&e.empty?this:("string"===g&&(k=d.exec(f),k&&(f=j+parseFloat(k[2])*("+"===k[1]?1:-1))),i[e.idx]=f,this[h](i)))})})}),f.hook=function(b){var c=b.split(" ");l(c,function(b,c){a.cssHooks[c]={set:function(b,d){var e,g,h="";if("transparent"!==d&&("string"!==a.type(d)||(e=n(d)))){if(d=f(e||d),!i.rgba&&1!==d._rgba[3]){for(g="backgroundColor"===c?b.parentNode:b;(""===h||"transparent"===h)&&g&&g.style;)try{h=a.css(g,"backgroundColor"),g=g.parentNode}catch(a){}d=d.blend(h&&"transparent"!==h?h:"_default")}d=d.toRgbaString()}try{b.style[c]=d}catch(a){}}},a.fx.step[c]=function(b){b.colorInit||(b.start=f(b.elem,c),b.end=f(b.end),b.colorInit=!0),a.cssHooks[c].set(b.elem,b.start.transition(b.end,b.pos))}})},f.hook(c),a.cssHooks.borderColor={expand:function(a){var b={};return l(["Top","Right","Bottom","Left"],function(c,d){b["border"+d+"Color"]=a}),b}},k=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function e(b){var c,d,e=b.ownerDocument.defaultView?b.ownerDocument.defaultView.getComputedStyle(b,null):b.currentStyle,f={};if(e&&e.length&&e[0]&&e[e[0]])for(d=e.length;d--;)c=e[d],"string"==typeof e[c]&&(f[a.camelCase(c)]=e[c]);else for(c in e)"string"==typeof e[c]&&(f[c]=e[c]);return f}function f(b,c){var f,g,e={};for(f in c)g=c[f],b[f]!==g&&(d[f]||!a.fx.step[f]&&isNaN(parseFloat(g))||(e[f]=g));return e}var c=["add","remove","toggle"],d={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(b,c){a.fx.step[c]=function(a){("none"!==a.end&&!a.setAttr||1===a.pos&&!a.setAttr)&&(jQuery.style(a.elem,c,a.end),a.setAttr=!0)}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a.effects.animateClass=function(b,d,g,h){var i=a.speed(d,g,h);return this.queue(function(){var h,d=a(this),g=d.attr("class")||"",j=i.children?d.find("*").addBack():d;j=j.map(function(){var b=a(this);return{el:b,start:e(this)}}),h=function(){a.each(c,function(a,c){b[c]&&d[c+"Class"](b[c])})},h(),j=j.map(function(){return this.end=e(this.el[0]),this.diff=f(this.start,this.end),this}),d.attr("class",g),j=j.map(function(){var b=this,c=a.Deferred(),d=a.extend({},i,{queue:!1,complete:function(){c.resolve(b)}});return this.el.animate(this.diff,d),c.promise()}),a.when.apply(a,j.get()).done(function(){h(),a.each(arguments,function(){var b=this.el;a.each(this.diff,function(a){b.css(a,"")})}),i.complete.call(d[0])})})},a.fn.extend({addClass:function(b){return function(c,d,e,f){return d?a.effects.animateClass.call(this,{add:c},d,e,f):b.apply(this,arguments)}}(a.fn.addClass),removeClass:function(b){return function(c,d,e,f){return arguments.length>1?a.effects.animateClass.call(this,{remove:c},d,e,f):b.apply(this,arguments)}}(a.fn.removeClass),toggleClass:function(c){return function(d,e,f,g,h){return"boolean"==typeof e||e===b?f?a.effects.animateClass.call(this,e?{add:d}:{remove:d},f,g,h):c.apply(this,arguments):a.effects.animateClass.call(this,{toggle:d},e,f,g)}}(a.fn.toggleClass),switchClass:function(b,c,d,e,f){return a.effects.animateClass.call(this,{add:c,remove:b},d,e,f)}})}(),function(){function d(b,c,d,e){return a.isPlainObject(b)&&(c=b,b=b.effect),b={effect:b},null==c&&(c={}),a.isFunction(c)&&(e=c,d=null,c={}),("number"==typeof c||a.fx.speeds[c])&&(e=d,d=c,c={}),a.isFunction(d)&&(e=d,d=null),c&&a.extend(b,c),d=d||c.duration,b.duration=a.fx.off?0:"number"==typeof d?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,b.complete=e||c.complete,b}function e(b){return!(b&&"number"!=typeof b&&!a.fx.speeds[b])||("string"==typeof b&&!a.effects.effect[b]||(!!a.isFunction(b)||"object"==typeof b&&!b.effect))}a.extend(a.effects,{version:"1.10.3",save:function(a,b){for(var d=0;d<b.length;d++)null!==b[d]&&a.data(c+b[d],a[0].style[b[d]])},restore:function(a,d){var e,f;for(f=0;f<d.length;f++)null!==d[f]&&(e=a.data(c+d[f]),e===b&&(e=""),a.css(d[f],e))},setMode:function(a,b){return"toggle"===b&&(b=a.is(":hidden")?"show":"hide"),b},getBaseline:function(a,b){var c,d;switch(a[0]){case"top":c=0;break;case"middle":c=.5;break;case"bottom":c=1;break;default:c=a[0]/b.height}switch(a[1]){case"left":d=0;break;case"center":d=.5;break;case"right":d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),float:b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:b.width(),height:b.height()},f=document.activeElement;try{f.id}catch(a){f=document.body}return b.wrap(d),(b[0]===f||a.contains(b[0],f))&&a(f).focus(),d=b.parent(),"static"===b.css("position")?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),b.css(e),d.css(c).show()},removeWrapper:function(b){var c=document.activeElement;return b.parent().is(".ui-effects-wrapper")&&(b.parent().replaceWith(b),(b[0]===c||a.contains(b[0],c))&&a(c).focus()),b},setTransition:function(b,c,d,e){return e=e||{},a.each(c,function(a,c){var f=b.cssUnit(c);f[0]>0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.extend({effect:function(){function g(c){function h(){a.isFunction(e)&&e.call(d[0]),a.isFunction(c)&&c()}var d=a(this),e=b.complete,g=b.mode;(d.is(":hidden")?"hide"===g:"show"===g)?(d[g](),h()):f.call(d[0],b,h)}var b=d.apply(this,arguments),c=b.mode,e=b.queue,f=a.effects.effect[b.effect];return a.fx.off||!f?c?this[c](b.duration,b.complete):this.each(function(){b.complete&&b.complete.call(this)}):e===!1?this.each(g):this.queue(e||"fx",g)},show:function(a){return function(b){if(e(b))return a.apply(this,arguments);var c=d.apply(this,arguments);return c.mode="show",this.effect.call(this,c)}}(a.fn.show),hide:function(a){return function(b){if(e(b))return a.apply(this,arguments);var c=d.apply(this,arguments);return c.mode="hide",this.effect.call(this,c)}}(a.fn.hide),toggle:function(a){return function(b){if(e(b)||"boolean"==typeof b)return a.apply(this,arguments);var c=d.apply(this,arguments);return c.mode="toggle",this.effect.call(this,c)}}(a.fn.toggle),cssUnit:function(b){var c=this.css(b),d=[];return a.each(["em","px","%","pt"],function(a,b){c.indexOf(b)>0&&(d=[parseFloat(c),b])}),d}})}(),function(){var b={};a.each(["Quad","Cubic","Quart","Quint","Expo"],function(a,c){b[c]=function(b){return Math.pow(b,a+2)}}),a.extend(b,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return 0===a||1===a?a:-Math.pow(2,8*(a-1))*Math.sin((80*(a-1)-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var b,c=4;a<((b=Math.pow(2,--c))-1)/11;);return 1/Math.pow(4,3-c)-7.5625*Math.pow((3*b-2)/22-a,2)}}),a.each(b,function(b,c){a.easing["easeIn"+b]=c,a.easing["easeOut"+b]=function(a){return 1-c(1-a)},a.easing["easeInOut"+b]=function(a){return a<.5?c(2*a)/2:1-c(a*-2+2)/2}})}()}(jQuery),function(a,b){var c=0,d={},e={};d.height=d.paddingTop=d.paddingBottom=d.borderTopWidth=d.borderBottomWidth="hide",e.height=e.paddingTop=e.paddingBottom=e.borderTopWidth=e.borderBottomWidth="show",a.widget("ui.accordion",{version:"1.10.3",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var b=this.options;this.prevShow=this.prevHide=a(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),b.collapsible||b.active!==!1&&null!=b.active||(b.active=0),this._processPanels(),b.active<0&&(b.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():a(),content:this.active.length?this.active.next():a()}},_createIcons:function(){var b=this.options.icons;b&&(a("<span>").addClass("ui-accordion-header-icon ui-icon "+b.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(b.header).addClass(b.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var a;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),a=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&a.css("height","")},_setOption:function(a,b){return"active"===a?void this._activate(b):("event"===a&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(b)),this._super(a,b),"collapsible"!==a||b||this.options.active!==!1||this._activate(0),"icons"===a&&(this._destroyIcons(),b&&this._createIcons()),void("disabled"===a&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!b)))},_keydown:function(b){if(!b.altKey&&!b.ctrlKey){var c=a.ui.keyCode,d=this.headers.length,e=this.headers.index(b.target),f=!1;switch(b.keyCode){case c.RIGHT:case c.DOWN:f=this.headers[(e+1)%d];break;case c.LEFT:case c.UP:f=this.headers[(e-1+d)%d];break;case c.SPACE:case c.ENTER:this._eventHandler(b);break;case c.HOME:f=this.headers[0];break;case c.END:f=this.headers[d-1]}f&&(a(b.target).attr("tabIndex",-1),a(f).attr("tabIndex",0),f.focus(),b.preventDefault())}},_panelKeyDown:function(b){b.keyCode===a.ui.keyCode.UP&&b.ctrlKey&&a(b.currentTarget).prev().focus()},refresh:function(){var b=this.options;this._processPanels(),b.active===!1&&b.collapsible===!0||!this.headers.length?(b.active=!1,this.active=a()):b.active===!1?this._activate(0):this.active.length&&!a.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(b.active=!1,this.active=a()):this._activate(Math.max(0,b.active-1)):b.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var b,d=this.options,e=d.heightStyle,f=this.element.parent(),g=this.accordionId="ui-accordion-"+(this.element.attr("id")||++c);this.active=this._findActive(d.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(b){var c=a(this),d=c.attr("id"),e=c.next(),f=e.attr("id");d||(d=g+"-header-"+b,c.attr("id",d)),f||(f=g+"-panel-"+b,e.attr("id",f)),c.attr("aria-controls",f),e.attr("aria-labelledby",d)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(d.event),"fill"===e?(b=f.height(),this.element.siblings(":visible").each(function(){var c=a(this),d=c.css("position");"absolute"!==d&&"fixed"!==d&&(b-=c.outerHeight(!0))}),this.headers.each(function(){b-=a(this).outerHeight(!0)}),this.headers.next().each(function(){a(this).height(Math.max(0,b-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")):"auto"===e&&(b=0,this.headers.next().each(function(){b=Math.max(b,a(this).css("height","").height())}).height(b))},_activate:function(b){var c=this._findActive(b)[0];c!==this.active[0]&&(c=c||this.active[0],this._eventHandler({target:c,currentTarget:c,preventDefault:a.noop}))},_findActive:function(b){return"number"==typeof b?this.headers.eq(b):a()},_setupEvents:function(b){var c={keydown:"_keydown"};b&&a.each(b.split(" "),function(a,b){c[b]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,c),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(b){var c=this.options,d=this.active,e=a(b.currentTarget),f=e[0]===d[0],g=f&&c.collapsible,h=g?a():e.next(),i=d.next(),j={oldHeader:d,oldPanel:i,newHeader:g?a():e,newPanel:h};b.preventDefault(),f&&!c.collapsible||this._trigger("beforeActivate",b,j)===!1||(c.active=!g&&this.headers.index(e),this.active=f?a():e,this._toggle(j),d.removeClass("ui-accordion-header-active ui-state-active"),c.icons&&d.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header),f||(e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),c.icons&&e.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader),e.next().addClass("ui-accordion-content-active")))},_toggle:function(b){var c=b.newPanel,d=this.prevShow.length?this.prevShow:b.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=c,this.prevHide=d,this.options.animate?this._animate(c,d,b):(d.hide(),c.show(),this._toggleComplete(b)),d.attr({"aria-expanded":"false","aria-hidden":"true"}),d.prev().attr("aria-selected","false"),c.length&&d.length?d.prev().attr("tabIndex",-1):c.length&&this.headers.filter(function(){return 0===a(this).attr("tabIndex")}).attr("tabIndex",-1),c.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(a,b,c){var f,g,h,i=this,j=0,k=a.length&&(!b.length||a.index()<b.index()),l=this.options.animate||{},m=k&&l.down||l,n=function(){i._toggleComplete(c)};return"number"==typeof m&&(h=m),"string"==typeof m&&(g=m),g=g||m.easing||l.easing,h=h||m.duration||l.duration,b.length?a.length?(f=a.show().outerHeight(),b.animate(d,{duration:h,easing:g,step:function(a,b){b.now=Math.round(a)}}),void a.hide().animate(e,{duration:h,easing:g,complete:n,step:function(a,c){c.now=Math.round(a),"height"!==c.prop?j+=c.now:"content"!==i.options.heightStyle&&(c.now=Math.round(f-b.outerHeight()-j),j=0)}})):b.animate(d,h,g,n):a.animate(e,h,g,n)},_toggleComplete:function(a){var b=a.oldPanel;b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),b.length&&(b.parent()[0].className=b.parent()[0].className),this._trigger("activate",null,a)}})}(jQuery),function(a,b){var c=0;a.widget("ui.autocomplete",{version:"1.10.3",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var b,c,d,e=this.element[0].nodeName.toLowerCase(),f="textarea"===e,g="input"===e;this.isMultiLine=!!f||!g&&this.element.prop("isContentEditable"),this.valueMethod=this.element[f||g?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(e){if(this.element.prop("readOnly"))return b=!0,d=!0,void(c=!0);b=!1,d=!1,c=!1;var f=a.ui.keyCode;switch(e.keyCode){case f.PAGE_UP:b=!0,this._move("previousPage",e);break;case f.PAGE_DOWN:b=!0,this._move("nextPage",e);break;case f.UP:b=!0,this._keyEvent("previous",e);break;case f.DOWN:b=!0,this._keyEvent("next",e);break;case f.ENTER:case f.NUMPAD_ENTER:this.menu.active&&(b=!0,e.preventDefault(),this.menu.select(e));break;case f.TAB:this.menu.active&&this.menu.select(e);break;case f.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(e),e.preventDefault());break;default:c=!0,this._searchTimeout(e)}},keypress:function(d){if(b)return b=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||d.preventDefault());if(!c){var e=a.ui.keyCode;switch(d.keyCode){case e.PAGE_UP:this._move("previousPage",d);break;case e.PAGE_DOWN:this._move("nextPage",d);break;case e.UP:this._keyEvent("previous",d);break;case e.DOWN:this._keyEvent("next",d)}}},input:function(a){return d?(d=!1,void a.preventDefault()):void this._searchTimeout(a)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(a){return this.cancelBlur?void delete this.cancelBlur:(clearTimeout(this.searching),this.close(a),void this._change(a))}}),this._initSource(),this.menu=a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(b){b.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var c=this.menu.element[0];a(b.target).closest(".ui-menu-item").length||this._delay(function(){var b=this;this.document.one("mousedown",function(d){d.target===b.element[0]||d.target===c||a.contains(c,d.target)||b.close()})})},menufocus:function(b,c){if(this.isNewMenu&&(this.isNewMenu=!1,b.originalEvent&&/^mouse/.test(b.originalEvent.type)))return this.menu.blur(),void this.document.one("mousemove",function(){a(b.target).trigger(b.originalEvent)});var d=c.item.data("ui-autocomplete-item");!1!==this._trigger("focus",b,{item:d})?b.originalEvent&&/^key/.test(b.originalEvent.type)&&this._value(d.value):this.liveRegion.text(d.value)},menuselect:function(a,b){var c=b.item.data("ui-autocomplete-item"),d=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=d,this._delay(function(){this.previous=d,this.selectedItem=c})),!1!==this._trigger("select",a,{item:c})&&this._value(c.value),this.term=this._value(),this.close(a),this.selectedItem=c}}),this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(a,b){this._super(a,b),"source"===a&&this._initSource(),"appendTo"===a&&this.menu.element.appendTo(this._appendTo()),"disabled"===a&&b&&this.xhr&&this.xhr.abort()},_appendTo:function(){var b=this.options.appendTo;return b&&(b=b.jquery||b.nodeType?a(b):this.document.find(b).eq(0)),b||(b=this.element.closest(".ui-front")),b.length||(b=this.document[0].body),b},_initSource:function(){var b,c,d=this;a.isArray(this.options.source)?(b=this.options.source,this.source=function(c,d){d(a.ui.autocomplete.filter(b,c.term))}):"string"==typeof this.options.source?(c=this.options.source,this.source=function(b,e){d.xhr&&d.xhr.abort(),d.xhr=a.ajax({url:c,data:b,dataType:"json",success:function(a){e(a)},error:function(){e([])}})}):this.source=this.options.source},_searchTimeout:function(a){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,a))},this.options.delay)},search:function(a,b){return a=null!=a?a:this._value(),this.term=this._value(),a.length<this.options.minLength?this.close(b):this._trigger("search",b)!==!1?this._search(a):void 0},_search:function(a){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:a},this._response())},_response:function(){var a=this,b=++c;return function(d){b===c&&a.__response(d),a.pending--,a.pending||a.element.removeClass("ui-autocomplete-loading")}},__response:function(a){a&&(a=this._normalize(a)),this._trigger("response",null,{content:a}),!this.options.disabled&&a&&a.length&&!this.cancelSearch?(this._suggest(a),this._trigger("open")):this._close()},close:function(a){this.cancelSearch=!0,this._close(a)},_close:function(a){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",a))},_change:function(a){this.previous!==this._value()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(b){return b.length&&b[0].label&&b[0].value?b:a.map(b,function(b){return"string"==typeof b?{label:b,value:b}:a.extend({label:b.label||b.value,value:b.value||b.label},b)})},_suggest:function(b){var c=this.menu.element.empty();this._renderMenu(c,b),this.isNewMenu=!0,this.menu.refresh(),c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,c){var d=this;a.each(c,function(a,c){d._renderItemData(b,c)})},_renderItemData:function(a,b){return this._renderItem(a,b).data("ui-autocomplete-item",b)},_renderItem:function(b,c){return a("<li>").append(a("<a>").text(c.label)).appendTo(b)},_move:function(a,b){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(a)||this.menu.isLastItem()&&/^next/.test(a)?(this._value(this.term),void this.menu.blur()):void this.menu[a](b):void this.search(null,b)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(a,b){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(a,b),b.preventDefault())}}),a.extend(a.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(b,c){var d=new RegExp(a.ui.autocomplete.escapeRegex(c),"i");return a.grep(b,function(a){return d.test(a.label||a.value||a)})}}),a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(a){return a+(a>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(a){var b;this._superApply(arguments),this.options.disabled||this.cancelSearch||(b=a&&a.length?this.options.messages.results(a.length):this.options.messages.noResults,this.liveRegion.text(b))}})}(jQuery),function(a,b){var c,d,e,f,g="ui-button ui-widget ui-state-default ui-corner-all",h="ui-state-hover ui-state-active ",i="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",j=function(){var b=a(this);setTimeout(function(){b.find(":ui-button").button("refresh")},1)},k=function(b){var c=b.name,d=b.form,e=a([]);return c&&(c=c.replace(/'/g,"\\'"),e=d?a(d).find("[name='"+c+"']"):a("[name='"+c+"']",b.ownerDocument).filter(function(){return!this.form})),e};a.widget("ui.button",{version:"1.10.3",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,j),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var b=this,h=this.options,i="checkbox"===this.type||"radio"===this.type,l=i?"":"ui-state-active",m="ui-state-focus";null===h.label&&(h.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(g).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){h.disabled||this===c&&a(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){h.disabled||a(this).removeClass(l)}).bind("click"+this.eventNamespace,function(a){h.disabled&&(a.preventDefault(),a.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){b.buttonElement.addClass(m)}).bind("blur"+this.eventNamespace,function(){b.buttonElement.removeClass(m)}),i&&(this.element.bind("change"+this.eventNamespace,function(){f||b.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(a){h.disabled||(f=!1,d=a.pageX,e=a.pageY)}).bind("mouseup"+this.eventNamespace,function(a){h.disabled||d===a.pageX&&e===a.pageY||(f=!0)})),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(h.disabled||f)return!1}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(h.disabled||f)return!1;a(this).addClass("ui-state-active"),b.buttonElement.attr("aria-pressed","true");var c=b.element[0];k(c).not(c).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return!h.disabled&&(a(this).addClass("ui-state-active"),c=this,void b.document.one("mouseup",function(){c=null}))}).bind("mouseup"+this.eventNamespace,function(){return!h.disabled&&void a(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(b){return!h.disabled&&void(b.keyCode!==a.ui.keyCode.SPACE&&b.keyCode!==a.ui.keyCode.ENTER||a(this).addClass("ui-state-active"))}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){a(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(b){b.keyCode===a.ui.keyCode.SPACE&&a(this).click()})),this._setOption("disabled",h.disabled),this._resetButton()},_determineButtonType:function(){var a,b,c;this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button","checkbox"===this.type||"radio"===this.type?(a=this.element.parents().last(),b="label[for='"+this.element.attr("id")+"']",this.buttonElement=a.find(b),this.buttonElement.length||(a=a.length?a.siblings():this.element.siblings(),this.buttonElement=a.filter(b),this.buttonElement.length||(this.buttonElement=a.find(b))),this.element.addClass("ui-helper-hidden-accessible"),c=this.element.is(":checked"),c&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",c)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(g+" "+h+" "+i).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(a,b){return this._super(a,b),"disabled"===a?void(b?this.element.prop("disabled",!0):this.element.prop("disabled",!1)):void this._resetButton()},refresh:function(){var b=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");b!==this.options.disabled&&this._setOption("disabled",b),"radio"===this.type?k(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return void(this.options.label&&this.element.val(this.options.label));var b=this.buttonElement.removeClass(i),c=a("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,e=d.primary&&d.secondary,f=[];d.primary||d.secondary?(this.options.text&&f.push("ui-button-text-icon"+(e?"s":d.primary?"-primary":"-secondary")),d.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>"),d.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>"),this.options.text||(f.push(e?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||b.attr("title",a.trim(c)))):f.push("ui-button-text-only"),b.addClass(f.join(" "))}}),a.widget("ui.buttonset",{version:"1.10.3",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(a,b){"disabled"===a&&this.buttons.button("option",a,b),this._super(a,b)},refresh:function(){var b="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(b?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})}(jQuery),function(a,b){function e(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},a.extend(this._defaults,this.regional[""]),this.dpDiv=f(a("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function f(b){var c="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return b.delegate(c,"mouseout",function(){a(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&a(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&a(this).removeClass("ui-datepicker-next-hover")}).delegate(c,"mouseover",function(){a.datepicker._isDisabledDatepicker(d.inline?b.parent()[0]:d.input[0])||(a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),a(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&a(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&a(this).addClass("ui-datepicker-next-hover"))})}function g(b,c){a.extend(b,c);for(var d in c)null==c[d]&&(b[d]=c[d]);return b}a.extend(a.ui,{datepicker:{version:"1.10.3"}});var d,c="datepicker";a.extend(e.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return g(this._defaults,a||{}),this},_attachDatepicker:function(b,c){var d,e,f;d=b.nodeName.toLowerCase(),e="div"===d||"span"===d,b.id||(this.uuid+=1,b.id="dp"+this.uuid),f=this._newInst(a(b),e),f.settings=a.extend({},c||{}),"input"===d?this._connectDatepicker(b,f):e&&this._inlineDatepicker(b,f)},_newInst:function(b,c){var d=b[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:d,input:b,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:c,dpDiv:c?f(a("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(b,d){var e=a(b);d.append=a([]),d.trigger=a([]),e.hasClass(this.markerClassName)||(this._attachments(e,d),e.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(d),a.data(b,c,d),d.settings.disabled&&this._disableDatepicker(b))},_attachments:function(b,c){var d,e,f,g=this._get(c,"appendText"),h=this._get(c,"isRTL");c.append&&c.append.remove(),g&&(c.append=a("<span class='"+this._appendClass+"'>"+g+"</span>"),b[h?"before":"after"](c.append)),b.unbind("focus",this._showDatepicker),c.trigger&&c.trigger.remove(),d=this._get(c,"showOn"),"focus"!==d&&"both"!==d||b.focus(this._showDatepicker),"button"!==d&&"both"!==d||(e=this._get(c,"buttonText"),f=this._get(c,"buttonImage"),c.trigger=a(this._get(c,"buttonImageOnly")?a("<img/>").addClass(this._triggerClass).attr({src:f,alt:e,title:e}):a("<button type='button'></button>").addClass(this._triggerClass).html(f?a("<img/>").attr({src:f,alt:e,title:e}):e)),b[h?"before":"after"](c.trigger),c.trigger.click(function(){return a.datepicker._datepickerShowing&&a.datepicker._lastInput===b[0]?a.datepicker._hideDatepicker():a.datepicker._datepickerShowing&&a.datepicker._lastInput!==b[0]?(a.datepicker._hideDatepicker(),a.datepicker._showDatepicker(b[0])):a.datepicker._showDatepicker(b[0]),!1}))},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b,c,d,e,f=new Date(2009,11,20),g=this._get(a,"dateFormat");g.match(/[DM]/)&&(b=function(a){for(c=0,d=0,e=0;e<a.length;e++)a[e].length>c&&(c=a[e].length,d=e);return d},f.setMonth(b(this._get(a,g.match(/MM/)?"monthNames":"monthNamesShort"))),f.setDate(b(this._get(a,g.match(/DD/)?"dayNames":"dayNamesShort"))+20-f.getDay())),a.input.attr("size",this._formatDate(a,f).length)}},_inlineDatepicker:function(b,d){var e=a(b);e.hasClass(this.markerClassName)||(e.addClass(this.markerClassName).append(d.dpDiv),a.data(b,c,d),this._setDate(d,this._getDefaultDate(d),!0),this._updateDatepicker(d),this._updateAlternate(d),d.settings.disabled&&this._disableDatepicker(b),d.dpDiv.css("display","block"))},_dialogDatepicker:function(b,d,e,f,h){var i,j,k,l,m,n=this._dialogInst;return n||(this.uuid+=1,i="dp"+this.uuid,this._dialogInput=a("<input type='text' id='"+i+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),a("body").append(this._dialogInput),n=this._dialogInst=this._newInst(this._dialogInput,!1),n.settings={},a.data(this._dialogInput[0],c,n)),g(n.settings,f||{}),d=d&&d.constructor===Date?this._formatDate(n,d):d,this._dialogInput.val(d),this._pos=h?h.length?h:[h.pageX,h.pageY]:null,this._pos||(j=document.documentElement.clientWidth,k=document.documentElement.clientHeight,l=document.documentElement.scrollLeft||document.body.scrollLeft,m=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[j/2-100+l,k/2-150+m]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),n.settings.onSelect=e,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),a.blockUI&&a.blockUI(this.dpDiv),a.data(this._dialogInput[0],c,n),this},_destroyDatepicker:function(b){var d,e=a(b),f=a.data(b,c);e.hasClass(this.markerClassName)&&(d=b.nodeName.toLowerCase(),a.removeData(b,c),"input"===d?(f.append.remove(),f.trigger.remove(),e.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):"div"!==d&&"span"!==d||e.removeClass(this.markerClassName).empty())},_enableDatepicker:function(b){var d,e,f=a(b),g=a.data(b,c);f.hasClass(this.markerClassName)&&(d=b.nodeName.toLowerCase(),"input"===d?(b.disabled=!1,g.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):"div"!==d&&"span"!==d||(e=f.children("."+this._inlineClass),e.children().removeClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}))},_disableDatepicker:function(b){var d,e,f=a(b),g=a.data(b,c);f.hasClass(this.markerClassName)&&(d=b.nodeName.toLowerCase(),"input"===d?(b.disabled=!0,g.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):"div"!==d&&"span"!==d||(e=f.children("."+this._inlineClass),e.children().addClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}),this._disabledInputs[this._disabledInputs.length]=b)},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]===a)return!0;return!1},_getInst:function(b){try{return a.data(b,c)}catch(a){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(c,d,e){var f,h,i,j,k=this._getInst(c);return 2===arguments.length&&"string"==typeof d?"defaults"===d?a.extend({},a.datepicker._defaults):k?"all"===d?a.extend({},k.settings):this._get(k,d):null:(f=d||{},"string"==typeof d&&(f={},f[d]=e),void(k&&(this._curInst===k&&this._hideDatepicker(),h=this._getDateDatepicker(c,!0),i=this._getMinMaxDate(k,"min"),j=this._getMinMaxDate(k,"max"),g(k.settings,f),null!==i&&f.dateFormat!==b&&f.minDate===b&&(k.settings.minDate=this._formatDate(k,i)),null!==j&&f.dateFormat!==b&&f.maxDate===b&&(k.settings.maxDate=this._formatDate(k,j)),"disabled"in f&&(f.disabled?this._disableDatepicker(c):this._enableDatepicker(c)),this._attachments(a(c),k),this._autoSize(k),this._setDate(k,h),this._updateAlternate(k),this._updateDatepicker(k))))},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},_doKeyDown:function(b){var c,d,e,f=a.datepicker._getInst(b.target),g=!0,h=f.dpDiv.is(".ui-datepicker-rtl");if(f._keyEvent=!0,a.datepicker._datepickerShowing)switch(b.keyCode){case 9:a.datepicker._hideDatepicker(),g=!1;break;case 13:return e=a("td."+a.datepicker._dayOverClass+":not(."+a.datepicker._currentClass+")",f.dpDiv),e[0]&&a.datepicker._selectDay(b.target,f.selectedMonth,f.selectedYear,e[0]),c=a.datepicker._get(f,"onSelect"),c?(d=a.datepicker._formatDate(f),c.apply(f.input?f.input[0]:null,[d,f])):a.datepicker._hideDatepicker(),!1;case 27:a.datepicker._hideDatepicker();break;case 33:a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 34:a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 35:(b.ctrlKey||b.metaKey)&&a.datepicker._clearDate(b.target),g=b.ctrlKey||b.metaKey;break;case 36:(b.ctrlKey||b.metaKey)&&a.datepicker._gotoToday(b.target),g=b.ctrlKey||b.metaKey;break;case 37:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?1:-1,"D"),g=b.ctrlKey||b.metaKey,b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;case 38:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,-7,"D"),g=b.ctrlKey||b.metaKey;break;case 39:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?-1:1,"D"),g=b.ctrlKey||b.metaKey,b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;case 40:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,7,"D"),g=b.ctrlKey||b.metaKey;break;default:g=!1}else 36===b.keyCode&&b.ctrlKey?a.datepicker._showDatepicker(this):g=!1;g&&(b.preventDefault(),b.stopPropagation())},_doKeyPress:function(b){var c,d,e=a.datepicker._getInst(b.target);if(a.datepicker._get(e,"constrainInput"))return c=a.datepicker._possibleChars(a.datepicker._get(e,"dateFormat")),d=String.fromCharCode(null==b.charCode?b.keyCode:b.charCode),b.ctrlKey||b.metaKey||d<" "||!c||c.indexOf(d)>-1},_doKeyUp:function(b){var c,d=a.datepicker._getInst(b.target);if(d.input.val()!==d.lastVal)try{c=a.datepicker.parseDate(a.datepicker._get(d,"dateFormat"),d.input?d.input.val():null,a.datepicker._getFormatConfig(d)),c&&(a.datepicker._setDateFromField(d),a.datepicker._updateAlternate(d),a.datepicker._updateDatepicker(d))}catch(a){}return!0},_showDatepicker:function(b){if(b=b.target||b,"input"!==b.nodeName.toLowerCase()&&(b=a("input",b.parentNode)[0]),!a.datepicker._isDisabledDatepicker(b)&&a.datepicker._lastInput!==b){var c,d,e,f,h,i,j;c=a.datepicker._getInst(b),a.datepicker._curInst&&a.datepicker._curInst!==c&&(a.datepicker._curInst.dpDiv.stop(!0,!0),c&&a.datepicker._datepickerShowing&&a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])),d=a.datepicker._get(c,"beforeShow"),e=d?d.apply(b,[b,c]):{},e!==!1&&(g(c.settings,e),c.lastVal=null,a.datepicker._lastInput=b,a.datepicker._setDateFromField(c),a.datepicker._inDialog&&(b.value=""),a.datepicker._pos||(a.datepicker._pos=a.datepicker._findPos(b),a.datepicker._pos[1]+=b.offsetHeight),f=!1,a(b).parents().each(function(){return f|="fixed"===a(this).css("position"),!f}),h={left:a.datepicker._pos[0],top:a.datepicker._pos[1]},a.datepicker._pos=null,c.dpDiv.empty(),c.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),a.datepicker._updateDatepicker(c),h=a.datepicker._checkOffset(c,h,f),c.dpDiv.css({position:a.datepicker._inDialog&&a.blockUI?"static":f?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),c.inline||(i=a.datepicker._get(c,"showAnim"),j=a.datepicker._get(c,"duration"),c.dpDiv.zIndex(a(b).zIndex()+1),a.datepicker._datepickerShowing=!0,a.effects&&a.effects.effect[i]?c.dpDiv.show(i,a.datepicker._get(c,"showOptions"),j):c.dpDiv[i||"show"](i?j:null),a.datepicker._shouldFocusInput(c)&&c.input.focus(),a.datepicker._curInst=c))}},_updateDatepicker:function(b){this.maxRows=4,d=b,b.dpDiv.empty().append(this._generateHTML(b)),this._attachHandlers(b),b.dpDiv.find("."+this._dayOverClass+" a").mouseover();var c,e=this._getNumberOfMonths(b),f=e[1],g=17;b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&b.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",g*f+"em"),b.dpDiv[(1!==e[0]||1!==e[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),b.dpDiv[(this._get(b,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),b===a.datepicker._curInst&&a.datepicker._datepickerShowing&&a.datepicker._shouldFocusInput(b)&&b.input.focus(),b.yearshtml&&(c=b.yearshtml,setTimeout(function(){c===b.yearshtml&&b.yearshtml&&b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml),c=b.yearshtml=null},0))},_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")},_checkOffset:function(b,c,d){var e=b.dpDiv.outerWidth(),f=b.dpDiv.outerHeight(),g=b.input?b.input.outerWidth():0,h=b.input?b.input.outerHeight():0,i=document.documentElement.clientWidth+(d?0:a(document).scrollLeft()),j=document.documentElement.clientHeight+(d?0:a(document).scrollTop());return c.left-=this._get(b,"isRTL")?e-g:0,c.left-=d&&c.left===b.input.offset().left?a(document).scrollLeft():0,c.top-=d&&c.top===b.input.offset().top+h?a(document).scrollTop():0,c.left-=Math.min(c.left,c.left+e>i&&i>e?Math.abs(c.left+e-i):0),c.top-=Math.min(c.top,c.top+f>j&&j>f?Math.abs(f+h):0),c},_findPos:function(b){for(var c,d=this._getInst(b),e=this._get(d,"isRTL");b&&("hidden"===b.type||1!==b.nodeType||a.expr.filters.hidden(b));)b=b[e?"previousSibling":"nextSibling"];return c=a(b).offset(),[c.left,c.top]},_hideDatepicker:function(b){var d,e,f,g,h=this._curInst;!h||b&&h!==a.data(b,c)||this._datepickerShowing&&(d=this._get(h,"showAnim"),e=this._get(h,"duration"),f=function(){a.datepicker._tidyDialog(h)},a.effects&&(a.effects.effect[d]||a.effects[d])?h.dpDiv.hide(d,a.datepicker._get(h,"showOptions"),e,f):h.dpDiv["slideDown"===d?"slideUp":"fadeIn"===d?"fadeOut":"hide"](d?e:null,f),d||f(),this._datepickerShowing=!1,g=this._get(h,"onClose"),g&&g.apply(h.input?h.input[0]:null,[h.input?h.input.val():"",h]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),a.blockUI&&(a.unblockUI(),a("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(b){if(a.datepicker._curInst){var c=a(b.target),d=a.datepicker._getInst(c[0]);(c[0].id===a.datepicker._mainDivId||0!==c.parents("#"+a.datepicker._mainDivId).length||c.hasClass(a.datepicker.markerClassName)||c.closest("."+a.datepicker._triggerClass).length||!a.datepicker._datepickerShowing||a.datepicker._inDialog&&a.blockUI)&&(!c.hasClass(a.datepicker.markerClassName)||a.datepicker._curInst===d)||a.datepicker._hideDatepicker()}},_adjustDate:function(b,c,d){var e=a(b),f=this._getInst(e[0]);this._isDisabledDatepicker(e[0])||(this._adjustInstDate(f,c+("M"===d?this._get(f,"showCurrentAtPos"):0),d),this._updateDatepicker(f))},_gotoToday:function(b){var c,d=a(b),e=this._getInst(d[0]);this._get(e,"gotoCurrent")&&e.currentDay?(e.selectedDay=e.currentDay,e.drawMonth=e.selectedMonth=e.currentMonth,e.drawYear=e.selectedYear=e.currentYear):(c=new Date,e.selectedDay=c.getDate(),e.drawMonth=e.selectedMonth=c.getMonth(),e.drawYear=e.selectedYear=c.getFullYear()),this._notifyChange(e),this._adjustDate(d)},_selectMonthYear:function(b,c,d){var e=a(b),f=this._getInst(e[0]);f["selected"+("M"===d?"Month":"Year")]=f["draw"+("M"===d?"Month":"Year")]=parseInt(c.options[c.selectedIndex].value,10),this._notifyChange(f),this._adjustDate(e)},_selectDay:function(b,c,d,e){var f,g=a(b);a(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(g[0])||(f=this._getInst(g[0]),f.selectedDay=f.currentDay=a("a",e).html(),f.selectedMonth=f.currentMonth=c,f.selectedYear=f.currentYear=d,this._selectDate(b,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear)))},_clearDate:function(b){var c=a(b);this._selectDate(c,"")},_selectDate:function(b,c){var d,e=a(b),f=this._getInst(e[0]);c=null!=c?c:this._formatDate(f),f.input&&f.input.val(c),this._updateAlternate(f),d=this._get(f,"onSelect"),d?d.apply(f.input?f.input[0]:null,[c,f]):f.input&&f.input.trigger("change"),f.inline?this._updateDatepicker(f):(this._hideDatepicker(),this._lastInput=f.input[0],"object"!=typeof f.input[0]&&f.input.focus(),this._lastInput=null)},_updateAlternate:function(b){var c,d,e,f=this._get(b,"altField");f&&(c=this._get(b,"altFormat")||this._get(b,"dateFormat"),d=this._getDate(b),e=this.formatDate(c,d,this._getFormatConfig(b)),a(f).each(function(){a(this).val(e)}))},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b,c=new Date(a.getTime());return c.setDate(c.getDate()+4-(c.getDay()||7)),b=c.getTime(),c.setMonth(0),c.setDate(1),Math.floor(Math.round((b-c)/864e5)/7)+1},parseDate:function(b,c,d){if(null==b||null==c)throw"Invalid arguments";if(c="object"==typeof c?c.toString():c+"",""===c)return null;var e,f,g,t,h=0,i=(d?d.shortYearCutoff:null)||this._defaults.shortYearCutoff,j="string"!=typeof i?i:(new Date).getFullYear()%100+parseInt(i,10),k=(d?d.dayNamesShort:null)||this._defaults.dayNamesShort,l=(d?d.dayNames:null)||this._defaults.dayNames,m=(d?d.monthNamesShort:null)||this._defaults.monthNamesShort,n=(d?d.monthNames:null)||this._defaults.monthNames,o=-1,p=-1,q=-1,r=-1,s=!1,u=function(a){var c=e+1<b.length&&b.charAt(e+1)===a;return c&&e++,c},v=function(a){var b=u(a),d="@"===a?14:"!"===a?20:"y"===a&&b?4:"o"===a?3:2,e=new RegExp("^\\d{1,"+d+"}"),f=c.substring(h).match(e);if(!f)throw"Missing number at position "+h;return h+=f[0].length,parseInt(f[0],10)},w=function(b,d,e){var f=-1,g=a.map(u(b)?e:d,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)});if(a.each(g,function(a,b){var d=b[1];if(c.substr(h,d.length).toLowerCase()===d.toLowerCase())return f=b[0],h+=d.length,!1}),f!==-1)return f+1;throw"Unknown name at position "+h},x=function(){if(c.charAt(h)!==b.charAt(e))throw"Unexpected literal at position "+h;h++};for(e=0;e<b.length;e++)if(s)"'"!==b.charAt(e)||u("'")?x():s=!1;else switch(b.charAt(e)){case"d":q=v("d");break;case"D":w("D",k,l);break;case"o":r=v("o");break;case"m":p=v("m");break;case"M":p=w("M",m,n);break;case"y":o=v("y");break;case"@":t=new Date(v("@")),o=t.getFullYear(),p=t.getMonth()+1,q=t.getDate();break;case"!":t=new Date((v("!")-this._ticksTo1970)/1e4),o=t.getFullYear(),p=t.getMonth()+1,q=t.getDate();break;case"'":u("'")?x():s=!0;break;default:x()}if(h<c.length&&(g=c.substr(h),!/^\s+/.test(g)))throw"Extra/unparsed characters found in date: "+g;if(o===-1?o=(new Date).getFullYear():o<100&&(o+=(new Date).getFullYear()-(new Date).getFullYear()%100+(o<=j?0:-100)),r>-1)for(p=1,q=r;;){if(f=this._getDaysInMonth(o,p-1),q<=f)break;p++,q-=f}if(t=this._daylightSavingAdjust(new Date(o,p-1,q)),t.getFullYear()!==o||t.getMonth()+1!==p||t.getDate()!==q)throw"Invalid date";return t},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d,e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=function(b){var c=d+1<a.length&&a.charAt(d+1)===b;return c&&d++,c},j=function(a,b,c){var d=""+b;if(i(a))for(;d.length<c;)d="0"+d;return d},k=function(a,b,c,d){return i(a)?d[b]:c[b]},l="",m=!1;if(b)for(d=0;d<a.length;d++)if(m)"'"!==a.charAt(d)||i("'")?l+=a.charAt(d):m=!1;else switch(a.charAt(d)){case"d":l+=j("d",b.getDate(),2);break;case"D":l+=k("D",b.getDay(),e,f);break;case"o":l+=j("o",Math.round((new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime()-new Date(b.getFullYear(),0,0).getTime())/864e5),3);break;case"m":l+=j("m",b.getMonth()+1,2);break;case"M":l+=k("M",b.getMonth(),g,h);break;case"y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":l+=b.getTime();break;case"!":l+=1e4*b.getTime()+this._ticksTo1970;break;case"'":i("'")?l+="'":m=!0;break;default:l+=a.charAt(d)}return l},_possibleChars:function(a){var b,c="",d=!1,e=function(c){var d=b+1<a.length&&a.charAt(b+1)===c;return d&&b++,d};for(b=0;b<a.length;b++)if(d)"'"!==a.charAt(b)||e("'")?c+=a.charAt(b):d=!1;else switch(a.charAt(b)){case"d":case"m":case"y":case"@":c+="0123456789";break;case"D":case"M":return null;case"'":e("'")?c+="'":d=!0;break;default:c+=a.charAt(b)}return c},_get:function(a,c){return a.settings[c]!==b?a.settings[c]:this._defaults[c]},_setDateFromField:function(a,b){if(a.input.val()!==a.lastVal){var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e=this._getDefaultDate(a),f=e,g=this._getFormatConfig(a);try{f=this.parseDate(c,d,g)||e}catch(a){d=b?"":d}a.selectedDay=f.getDate(),a.drawMonth=a.selectedMonth=f.getMonth(),a.drawYear=a.selectedYear=f.getFullYear(),a.currentDay=d?f.getDate():0,a.currentMonth=d?f.getMonth():0,a.currentYear=d?f.getFullYear():0,this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(b,c,d){var e=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},f=function(c){try{return a.datepicker.parseDate(a.datepicker._get(b,"dateFormat"),c,a.datepicker._getFormatConfig(b))}catch(a){}for(var d=(c.toLowerCase().match(/^c/)?a.datepicker._getDate(b):null)||new Date,e=d.getFullYear(),f=d.getMonth(),g=d.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,i=h.exec(c);i;){switch(i[2]||"d"){case"d":case"D":g+=parseInt(i[1],10);break;case"w":case"W":g+=7*parseInt(i[1],10);break;case"m":case"M":f+=parseInt(i[1],10),g=Math.min(g,a.datepicker._getDaysInMonth(e,f));break;case"y":case"Y":e+=parseInt(i[1],10),g=Math.min(g,a.datepicker._getDaysInMonth(e,f))}i=h.exec(c)}return new Date(e,f,g)},g=null==c||""===c?d:"string"==typeof c?f(c):"number"==typeof c?isNaN(c)?d:e(c):new Date(c.getTime());return g=g&&"Invalid Date"===g.toString()?d:g,g&&(g.setHours(0),g.setMinutes(0),g.setSeconds(0),g.setMilliseconds(0)),this._daylightSavingAdjust(g)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),e===a.selectedMonth&&f===a.selectedYear||c||this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&""===a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_attachHandlers:function(b){var c=this._get(b,"stepMonths"),d="#"+b.id.replace(/\\\\/g,"\\");b.dpDiv.find("[data-handler]").map(function(){var b={prev:function(){a.datepicker._adjustDate(d,-c,"M")},next:function(){a.datepicker._adjustDate(d,+c,"M")},hide:function(){a.datepicker._hideDatepicker()},today:function(){a.datepicker._gotoToday(d)},selectDay:function(){return a.datepicker._selectDay(d,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return a.datepicker._selectMonthYear(d,this,"M"),!1},selectYear:function(){return a.datepicker._selectMonthYear(d,this,"Y"),!1}};a(this).bind(this.getAttribute("data-event"),b[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O=new Date,P=this._daylightSavingAdjust(new Date(O.getFullYear(),O.getMonth(),O.getDate())),Q=this._get(a,"isRTL"),R=this._get(a,"showButtonPanel"),S=this._get(a,"hideIfNoPrevNext"),T=this._get(a,"navigationAsDateFormat"),U=this._getNumberOfMonths(a),V=this._get(a,"showCurrentAtPos"),W=this._get(a,"stepMonths"),X=1!==U[0]||1!==U[1],Y=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),Z=this._getMinMaxDate(a,"min"),$=this._getMinMaxDate(a,"max"),_=a.drawMonth-V,aa=a.drawYear;if(_<0&&(_+=12,aa--),$)for(b=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-U[0]*U[1]+1,$.getDate())),b=Z&&b<Z?Z:b;this._daylightSavingAdjust(new Date(aa,_,1))>b;)_--,_<0&&(_=11,aa--);for(a.drawMonth=_,a.drawYear=aa,c=this._get(a,"prevText"),c=T?this.formatDate(c,this._daylightSavingAdjust(new Date(aa,_-W,1)),this._getFormatConfig(a)):c,d=this._canAdjustMonth(a,-1,aa,_)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>":S?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>",e=this._get(a,"nextText"),e=T?this.formatDate(e,this._daylightSavingAdjust(new Date(aa,_+W,1)),this._getFormatConfig(a)):e,f=this._canAdjustMonth(a,1,aa,_)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>":S?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>",g=this._get(a,"currentText"),h=this._get(a,"gotoCurrent")&&a.currentDay?Y:P,g=T?this.formatDate(g,h,this._getFormatConfig(a)):g,i=a.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(a,"closeText")+"</button>",j=R?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Q?i:"")+(this._isInRange(a,h)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+g+"</button>":"")+(Q?"":i)+"</div>":"",k=parseInt(this._get(a,"firstDay"),10),k=isNaN(k)?0:k,l=this._get(a,"showWeek"),m=this._get(a,"dayNames"),n=this._get(a,"dayNamesMin"),o=this._get(a,"monthNames"),p=this._get(a,"monthNamesShort"),q=this._get(a,"beforeShowDay"),r=this._get(a,"showOtherMonths"),s=this._get(a,"selectOtherMonths"),t=this._getDefaultDate(a),u="",w=0;w<U[0];w++){for(x="",this.maxRows=4,y=0;y<U[1];y++){if(z=this._daylightSavingAdjust(new Date(aa,_,a.selectedDay)),A=" ui-corner-all",B="",X){if(B+="<div class='ui-datepicker-group",U[1]>1)switch(y){case 0:B+=" ui-datepicker-group-first",A=" ui-corner-"+(Q?"right":"left");break;case U[1]-1:B+=" ui-datepicker-group-last",A=" ui-corner-"+(Q?"left":"right");break;default:B+=" ui-datepicker-group-middle",A=""}B+="'>"}for(B+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+A+"'>"+(/all|left/.test(A)&&0===w?Q?f:d:"")+(/all|right/.test(A)&&0===w?Q?d:f:"")+this._generateMonthYearHeader(a,_,aa,Z,$,w>0||y>0,o,p)+"</div><table class='ui-datepicker-calendar'><thead><tr>",C=l?"<th class='ui-datepicker-week-col'>"+this._get(a,"weekHeader")+"</th>":"",v=0;v<7;v++)D=(v+k)%7,C+="<th"+((v+k+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+m[D]+"'>"+n[D]+"</span></th>";for(B+=C+"</tr></thead><tbody>",E=this._getDaysInMonth(aa,_),aa===a.selectedYear&&_===a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,E)),F=(this._getFirstDayOfMonth(aa,_)-k+7)%7,G=Math.ceil((F+E)/7),H=X&&this.maxRows>G?this.maxRows:G,this.maxRows=H,I=this._daylightSavingAdjust(new Date(aa,_,1-F)),J=0;J<H;J++){for(B+="<tr>",K=l?"<td class='ui-datepicker-week-col'>"+this._get(a,"calculateWeek")(I)+"</td>":"",v=0;v<7;v++)L=q?q.apply(a.input?a.input[0]:null,[I]):[!0,""],M=I.getMonth()!==_,N=M&&!s||!L[0]||Z&&I<Z||$&&I>$,K+="<td class='"+((v+k+6)%7>=5?" ui-datepicker-week-end":"")+(M?" ui-datepicker-other-month":"")+(I.getTime()===z.getTime()&&_===a.selectedMonth&&a._keyEvent||t.getTime()===I.getTime()&&t.getTime()===z.getTime()?" "+this._dayOverClass:"")+(N?" "+this._unselectableClass+" ui-state-disabled":"")+(M&&!r?"":" "+L[1]+(I.getTime()===Y.getTime()?" "+this._currentClass:"")+(I.getTime()===P.getTime()?" ui-datepicker-today":""))+"'"+(M&&!r||!L[2]?"":" title='"+L[2].replace(/'/g,"&#39;")+"'")+(N?"":" data-handler='selectDay' data-event='click' data-month='"+I.getMonth()+"' data-year='"+I.getFullYear()+"'")+">"+(M&&!r?"&#xa0;":N?"<span class='ui-state-default'>"+I.getDate()+"</span>":"<a class='ui-state-default"+(I.getTime()===P.getTime()?" ui-state-highlight":"")+(I.getTime()===Y.getTime()?" ui-state-active":"")+(M?" ui-priority-secondary":"")+"' href='#'>"+I.getDate()+"</a>")+"</td>",I.setDate(I.getDate()+1),I=this._daylightSavingAdjust(I);B+=K+"</tr>"}_++,_>11&&(_=0,aa++),B+="</tbody></table>"+(X?"</div>"+(U[0]>0&&y===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=B}u+=x}return u+=j,a._keyEvent=!1,u},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q=this._get(a,"changeMonth"),r=this._get(a,"changeYear"),s=this._get(a,"showMonthAfterYear"),t="<div class='ui-datepicker-title'>",u="";if(f||!q)u+="<span class='ui-datepicker-month'>"+g[b]+"</span>";else{for(i=d&&d.getFullYear()===c,j=e&&e.getFullYear()===c,u+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",k=0;k<12;k++)(!i||k>=d.getMonth())&&(!j||k<=e.getMonth())&&(u+="<option value='"+k+"'"+(k===b?" selected='selected'":"")+">"+h[k]+"</option>");u+="</select>"}if(s||(t+=u+(!f&&q&&r?"":"&#xa0;")),!a.yearshtml)if(a.yearshtml="",f||!r)t+="<span class='ui-datepicker-year'>"+c+"</span>";else{for(l=this._get(a,"yearRange").split(":"),m=(new Date).getFullYear(),n=function(a){var b=a.match(/c[+\-].*/)?c+parseInt(a.substring(1),10):a.match(/[+\-].*/)?m+parseInt(a,10):parseInt(a,10);return isNaN(b)?m:b},o=n(l[0]),p=Math.max(o,n(l[1]||"")),o=d?Math.max(o,d.getFullYear()):o,p=e?Math.min(p,e.getFullYear()):p,a.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";o<=p;o++)a.yearshtml+="<option value='"+o+"'"+(o===c?" selected='selected'":"")+">"+o+"</option>";a.yearshtml+="</select>",t+=a.yearshtml,a.yearshtml=null}return t+=this._get(a,"yearSuffix"),s&&(t+=(!f&&q&&r?"":"&#xa0;")+u),t+="</div>"},_adjustInstDate:function(a,b,c){var d=a.drawYear+("Y"===c?b:0),e=a.drawMonth+("M"===c?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+("D"===c?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),"M"!==c&&"Y"!==c||this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;return d&&e>d?d:e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return null==b?[1,1]:"number"==typeof b?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return new Date(a,b,1).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));return b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},_isInRange:function(a,b){var c,d,e=this._getMinMaxDate(a,"min"),f=this._getMinMaxDate(a,"max"),g=null,h=null,i=this._get(a,"yearRange");return i&&(c=i.split(":"),d=(new Date).getFullYear(),g=parseInt(c[0],10),h=parseInt(c[1],10),c[0].match(/[+\-].*/)&&(g+=d),c[1].match(/[+\-].*/)&&(h+=d)),(!e||b.getTime()>=e.getTime())&&(!f||b.getTime()<=f.getTime())&&(!g||b.getFullYear()>=g)&&(!h||b.getFullYear()<=h)},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b="string"!=typeof b?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?"object"==typeof b?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),a.fn.datepicker=function(b){if(!this.length)return this;a.datepicker.initialized||(a(document).mousedown(a.datepicker._checkExternalClick),a.datepicker.initialized=!0),0===a("#"+a.datepicker._mainDivId).length&&a("body").append(a.datepicker.dpDiv);var c=Array.prototype.slice.call(arguments,1);return"string"!=typeof b||"isDisabled"!==b&&"getDate"!==b&&"widget"!==b?"option"===b&&2===arguments.length&&"string"==typeof arguments[1]?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c)):this.each(function(){"string"==typeof b?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this].concat(c)):a.datepicker._attachDatepicker(this,b)}):a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c))},a.datepicker=new e,a.datepicker.initialized=!1,a.datepicker.uuid=(new Date).getTime(),a.datepicker.version="1.10.3"}(jQuery),function(a,b){var c={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},d={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};a.widget("ui.dialog",{version:"1.10.3",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&a.fn.draggable&&this._makeDraggable(),this.options.resizable&&a.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var b=this.options.appendTo;return b&&(b.jquery||b.nodeType)?a(b):this.document.find(b||"body").eq(0)},_destroy:function(){var a,b=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),a=b.parent.children().eq(b.index),a.length&&a[0]!==this.element[0]?a.before(this.element):b.parent.append(this.element)},widget:function(){return this.uiDialog},disable:a.noop,enable:a.noop,close:function(b){var c=this;this._isOpen&&this._trigger("beforeClose",b)!==!1&&(this._isOpen=!1,this._destroyOverlay(),this.opener.filter(":focusable").focus().length||a(this.document[0].activeElement).blur(),this._hide(this.uiDialog,this.options.hide,function(){c._trigger("close",b)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(a,b){var c=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return c&&!b&&this._trigger("focus",a),c},open:function(){var b=this;return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=a(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){b._focusTabbable(),b._trigger("focus")}),void this._trigger("open"))},_focusTabbable:function(){var a=this.element.find("[autofocus]");a.length||(a=this.element.find(":tabbable")),a.length||(a=this.uiDialogButtonPane.find(":tabbable")),a.length||(a=this.uiDialogTitlebarClose.filter(":tabbable")),a.length||(a=this.uiDialog),a.eq(0).focus()},_keepFocus:function(b){function c(){var b=this.document[0].activeElement,c=this.uiDialog[0]===b||a.contains(this.uiDialog[0],b);c||this._focusTabbable()}b.preventDefault(),c.call(this),this._delay(c)},_createWrapper:function(){this.uiDialog=a("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(b){if(this.options.closeOnEscape&&!b.isDefaultPrevented()&&b.keyCode&&b.keyCode===a.ui.keyCode.ESCAPE)return b.preventDefault(),void this.close(b);if(b.keyCode===a.ui.keyCode.TAB){var c=this.uiDialog.find(":tabbable"),d=c.filter(":first"),e=c.filter(":last");b.target!==e[0]&&b.target!==this.uiDialog[0]||b.shiftKey?b.target!==d[0]&&b.target!==this.uiDialog[0]||!b.shiftKey||(e.focus(1),b.preventDefault()):(d.focus(1),b.preventDefault())}},mousedown:function(a){this._moveToTop(a)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var b;this.uiDialogTitlebar=a("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(b){a(b.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=a("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(a){a.preventDefault(),this.close(a)}}),b=a("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(b),this.uiDialog.attr({"aria-labelledby":b.attr("id")})},_title:function(a){this.options.title||a.html("&#160;"),a.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=a("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=a("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var b=this,c=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),a.isEmptyObject(c)||a.isArray(c)&&!c.length?void this.uiDialog.removeClass("ui-dialog-buttons"):(a.each(c,function(c,d){var e,f;d=a.isFunction(d)?{click:d,text:c}:d,d=a.extend({type:"button"},d),e=d.click,d.click=function(){e.apply(b.element[0],arguments)},f={icons:d.icons,text:d.showText},delete d.icons,delete d.showText,a("<button></button>",d).button(f).appendTo(b.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function d(a){return{position:a.position,offset:a.offset}}var b=this,c=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(c,e){a(this).addClass("ui-dialog-dragging"),b._blockFrames(),b._trigger("dragStart",c,d(e))},drag:function(a,c){b._trigger("drag",a,d(c))},stop:function(e,f){c.position=[f.position.left-b.document.scrollLeft(),f.position.top-b.document.scrollTop()],a(this).removeClass("ui-dialog-dragging"),b._unblockFrames(),b._trigger("dragStop",e,d(f))}})},_makeResizable:function(){function g(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}var b=this,c=this.options,d=c.resizable,e=this.uiDialog.css("position"),f="string"==typeof d?d:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:c.maxWidth,maxHeight:c.maxHeight,minWidth:c.minWidth,minHeight:this._minHeight(),handles:f,start:function(c,d){a(this).addClass("ui-dialog-resizing"),b._blockFrames(),b._trigger("resizeStart",c,g(d))},resize:function(a,c){b._trigger("resize",a,g(c))},stop:function(d,e){c.height=a(this).height(),c.width=a(this).width(),a(this).removeClass("ui-dialog-resizing"),b._unblockFrames(),b._trigger("resizeStop",d,g(e))}}).css("position",e)},_minHeight:function(){var a=this.options;return"auto"===a.height?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(){var a=this.uiDialog.is(":visible");a||this.uiDialog.show(),this.uiDialog.position(this.options.position),a||this.uiDialog.hide()},_setOptions:function(b){var e=this,f=!1,g={};a.each(b,function(a,b){e._setOption(a,b),a in c&&(f=!0),a in d&&(g[a]=b)}),f&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",g)},_setOption:function(a,b){var c,d,e=this.uiDialog;"dialogClass"===a&&e.removeClass(this.options.dialogClass).addClass(b),"disabled"!==a&&(this._super(a,b),"appendTo"===a&&this.uiDialog.appendTo(this._appendTo()),"buttons"===a&&this._createButtons(),"closeText"===a&&this.uiDialogTitlebarClose.button({label:""+b}),"draggable"===a&&(c=e.is(":data(ui-draggable)"),c&&!b&&e.draggable("destroy"),!c&&b&&this._makeDraggable()),"position"===a&&this._position(),"resizable"===a&&(d=e.is(":data(ui-resizable)"),d&&!b&&e.resizable("destroy"),d&&"string"==typeof b&&e.resizable("option","handles",b),d||b===!1||this._makeResizable()),"title"===a&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var a,b,c,d=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),d.minWidth>d.width&&(d.width=d.minWidth),a=this.uiDialog.css({height:"auto",width:d.width}).outerHeight(),b=Math.max(0,d.minHeight-a),c="number"==typeof d.maxHeight?Math.max(0,d.maxHeight-a):"none","auto"===d.height?this.element.css({minHeight:b,maxHeight:c,height:"auto"}):this.element.height(Math.max(0,d.height-a)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var b=a(this);return a("<div>").css({position:"absolute",width:b.outerWidth(),height:b.outerHeight()}).appendTo(b.parent()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(b){return!!a(b.target).closest(".ui-dialog").length||!!a(b.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var b=this,c=this.widgetFullName;a.ui.dialog.overlayInstances||this._delay(function(){a.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(d){b._allowInteraction(d)||(d.preventDefault(),a(".ui-dialog:visible:last .ui-dialog-content").data(c)._focusTabbable())})}),this.overlay=a("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),a.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(a.ui.dialog.overlayInstances--,a.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),a.ui.dialog.overlayInstances=0,a.uiBackCompat!==!1&&a.widget("ui.dialog",a.ui.dialog,{_position:function(){var e,b=this.options.position,c=[],d=[0,0];b?(("string"==typeof b||"object"==typeof b&&"0"in b)&&(c=b.split?b.split(" "):[b[0],b[1]],1===c.length&&(c[1]=c[0]),a.each(["left","top"],function(a,b){+c[a]===c[a]&&(d[a]=c[a],c[a]=b)}),b={my:c[0]+(d[0]<0?d[0]:"+"+d[0])+" "+c[1]+(d[1]<0?d[1]:"+"+d[1]),at:c.join(" ")}),b=a.extend({},a.ui.dialog.prototype.options.position,b)):b=a.ui.dialog.prototype.options.position,e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.position(b),e||this.uiDialog.hide()}})}(jQuery),function(a,b){var c=/up|down|vertical/,d=/up|left|vertical|horizontal/;a.effects.effect.blind=function(b,e){var p,q,r,f=a(this),g=["position","top","bottom","left","right","height","width"],h=a.effects.setMode(f,b.mode||"hide"),i=b.direction||"up",j=c.test(i),k=j?"height":"width",l=j?"top":"left",m=d.test(i),n={},o="show"===h;f.parent().is(".ui-effects-wrapper")?a.effects.save(f.parent(),g):a.effects.save(f,g),f.show(),p=a.effects.createWrapper(f).css({overflow:"hidden"}),q=p[k](),r=parseFloat(p.css(l))||0,n[k]=o?q:0,m||(f.css(j?"bottom":"right",0).css(j?"top":"left","auto").css({position:"absolute"}),n[l]=o?r:q+r),o&&(p.css(k,0),m||p.css(l,r+q)),p.animate(n,{duration:b.duration,easing:b.easing,queue:!1,complete:function(){"hide"===h&&f.hide(),a.effects.restore(f,g),a.effects.removeWrapper(f),e()}})}}(jQuery),function(a,b){a.effects.effect.bounce=function(b,c){var q,r,s,d=a(this),e=["position","top","bottom","left","right","height","width"],f=a.effects.setMode(d,b.mode||"effect"),g="hide"===f,h="show"===f,i=b.direction||"up",j=b.distance,k=b.times||5,l=2*k+(h||g?1:0),m=b.duration/l,n=b.easing,o="up"===i||"down"===i?"top":"left",p="up"===i||"left"===i,t=d.queue(),u=t.length;for((h||g)&&e.push("opacity"),a.effects.save(d,e),d.show(),a.effects.createWrapper(d),j||(j=d["top"===o?"outerHeight":"outerWidth"]()/3),h&&(s={opacity:1},s[o]=0,d.css("opacity",0).css(o,p?2*-j:2*j).animate(s,m,n)),g&&(j/=Math.pow(2,k-1)),s={},s[o]=0,q=0;q<k;q++)r={},r[o]=(p?"-=":"+=")+j,d.animate(r,m,n).animate(s,m,n),j=g?2*j:j/2;g&&(r={opacity:0},r[o]=(p?"-=":"+=")+j,d.animate(r,m,n)),d.queue(function(){g&&d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()}),u>1&&t.splice.apply(t,[1,0].concat(t.splice(u,l+1))),d.dequeue()}}(jQuery),function(a,b){a.effects.effect.clip=function(b,c){var m,n,o,d=a(this),e=["position","top","bottom","left","right","height","width"],f=a.effects.setMode(d,b.mode||"hide"),g="show"===f,h=b.direction||"vertical",i="vertical"===h,j=i?"height":"width",k=i?"top":"left",l={};a.effects.save(d,e),d.show(),m=a.effects.createWrapper(d).css({overflow:"hidden"}),n="IMG"===d[0].tagName?m:d,o=n[j](),g&&(n.css(j,0),n.css(k,o/2)),l[j]=g?o:0,l[k]=g?0:o/2,n.animate(l,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){g||d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()}})}}(jQuery),function(a,b){a.effects.effect.drop=function(b,c){var l,d=a(this),e=["position","top","bottom","left","right","opacity","height","width"],f=a.effects.setMode(d,b.mode||"hide"),g="show"===f,h=b.direction||"left",i="up"===h||"down"===h?"top":"left",j="up"===h||"left"===h?"pos":"neg",k={opacity:g?1:0};a.effects.save(d,e),d.show(),a.effects.createWrapper(d),l=b.distance||d["top"===i?"outerHeight":"outerWidth"](!0)/2,g&&d.css("opacity",0).css(i,"pos"===j?-l:l),k[i]=(g?"pos"===j?"+=":"-=":"pos"===j?"-=":"+=")+l,d.animate(k,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){"hide"===f&&d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()}})}}(jQuery),function(a,b){a.effects.effect.explode=function(b,c){function s(){l.push(this),l.length===d*e&&t()}function t(){f.css({visibility:"visible"}),a(l).remove(),h||f.hide(),c()}var m,n,o,p,q,r,d=b.pieces?Math.round(Math.sqrt(b.pieces)):3,e=d,f=a(this),g=a.effects.setMode(f,b.mode||"hide"),h="show"===g,i=f.show().css("visibility","hidden").offset(),j=Math.ceil(f.outerWidth()/e),k=Math.ceil(f.outerHeight()/d),l=[];for(m=0;m<d;m++)for(p=i.top+m*k,r=m-(d-1)/2,n=0;n<e;n++)o=i.left+n*j,q=n-(e-1)/2,f.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-n*j,top:-m*k}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:j,height:k,left:o+(h?q*j:0),top:p+(h?r*k:0),opacity:h?0:1}).animate({left:o+(h?0:q*j),top:p+(h?0:r*k),opacity:h?1:0},b.duration||500,b.easing,s)}}(jQuery),function(a,b){a.effects.effect.fade=function(b,c){var d=a(this),e=a.effects.setMode(d,b.mode||"toggle");d.animate({opacity:e},{queue:!1,duration:b.duration,easing:b.easing,complete:c})}}(jQuery),function(a,b){a.effects.effect.fold=function(b,c){var o,p,d=a(this),e=["position","top","bottom","left","right","height","width"],f=a.effects.setMode(d,b.mode||"hide"),g="show"===f,h="hide"===f,i=b.size||15,j=/([0-9]+)%/.exec(i),k=!!b.horizFirst,l=g!==k,m=l?["width","height"]:["height","width"],n=b.duration/2,q={},r={};a.effects.save(d,e),d.show(),o=a.effects.createWrapper(d).css({overflow:"hidden"}),p=l?[o.width(),o.height()]:[o.height(),o.width()],j&&(i=parseInt(j[1],10)/100*p[h?0:1]),g&&o.css(k?{height:0,width:i}:{height:i,width:0}),q[m[0]]=g?p[0]:i,r[m[1]]=g?p[1]:0,o.animate(q,n,b.easing).animate(r,n,b.easing,function(){h&&d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()})}}(jQuery),function(a,b){a.effects.effect.highlight=function(b,c){var d=a(this),e=["backgroundImage","backgroundColor","opacity"],f=a.effects.setMode(d,b.mode||"show"),g={backgroundColor:d.css("backgroundColor")};"hide"===f&&(g.opacity=0),a.effects.save(d,e),d.show().css({backgroundImage:"none",backgroundColor:b.color||"#ffff99"}).animate(g,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){"hide"===f&&d.hide(),a.effects.restore(d,e),c()}})}}(jQuery),function(a,b){a.effects.effect.pulsate=function(b,c){var n,d=a(this),e=a.effects.setMode(d,b.mode||"show"),f="show"===e,g="hide"===e,h=f||"hide"===e,i=2*(b.times||5)+(h?1:0),j=b.duration/i,k=0,l=d.queue(),m=l.length;for(!f&&d.is(":visible")||(d.css("opacity",0).show(),k=1),n=1;n<i;n++)d.animate({opacity:k},j,b.easing),k=1-k;d.animate({opacity:k},j,b.easing),d.queue(function(){g&&d.hide(),c()}),m>1&&l.splice.apply(l,[1,0].concat(l.splice(m,i+1))),d.dequeue()}}(jQuery),function(a,b){a.effects.effect.puff=function(b,c){var d=a(this),e=a.effects.setMode(d,b.mode||"hide"),f="hide"===e,g=parseInt(b.percent,10)||150,h=g/100,i={height:d.height(),width:d.width(),outerHeight:d.outerHeight(),outerWidth:d.outerWidth()};a.extend(b,{effect:"scale",queue:!1,fade:!0,mode:e,complete:c,percent:f?g:100,from:f?i:{height:i.height*h,width:i.width*h,outerHeight:i.outerHeight*h,outerWidth:i.outerWidth*h}}),d.effect(b)},a.effects.effect.scale=function(b,c){var d=a(this),e=a.extend(!0,{},b),f=a.effects.setMode(d,b.mode||"effect"),g=parseInt(b.percent,10)||(0===parseInt(b.percent,10)?0:"hide"===f?0:100),h=b.direction||"both",i=b.origin,j={height:d.height(),width:d.width(),outerHeight:d.outerHeight(),outerWidth:d.outerWidth()},k={y:"horizontal"!==h?g/100:1,x:"vertical"!==h?g/100:1};e.effect="size",e.queue=!1,e.complete=c,"effect"!==f&&(e.origin=i||["middle","center"],e.restore=!0),e.from=b.from||("show"===f?{height:0,width:0,outerHeight:0,outerWidth:0}:j),e.to={height:j.height*k.y,width:j.width*k.x,outerHeight:j.outerHeight*k.y,outerWidth:j.outerWidth*k.x},e.fade&&("show"===f&&(e.from.opacity=0,e.to.opacity=1),"hide"===f&&(e.from.opacity=1,e.to.opacity=0)),d.effect(e)},a.effects.effect.size=function(b,c){var d,e,f,g=a(this),h=["position","top","bottom","left","right","width","height","overflow","opacity"],i=["position","top","bottom","left","right","overflow","opacity"],j=["width","height","overflow"],k=["fontSize"],l=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],m=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],n=a.effects.setMode(g,b.mode||"effect"),o=b.restore||"effect"!==n,p=b.scale||"both",q=b.origin||["middle","center"],r=g.css("position"),s=o?h:i,t={height:0,width:0,outerHeight:0,outerWidth:0};"show"===n&&g.show(),d={height:g.height(),width:g.width(),outerHeight:g.outerHeight(),outerWidth:g.outerWidth()},"toggle"===b.mode&&"show"===n?(g.from=b.to||t,g.to=b.from||d):(g.from=b.from||("show"===n?t:d),g.to=b.to||("hide"===n?t:d)),f={from:{y:g.from.height/d.height,x:g.from.width/d.width},to:{y:g.to.height/d.height,x:g.to.width/d.width}},"box"!==p&&"both"!==p||(f.from.y!==f.to.y&&(s=s.concat(l),g.from=a.effects.setTransition(g,l,f.from.y,g.from),g.to=a.effects.setTransition(g,l,f.to.y,g.to)),f.from.x!==f.to.x&&(s=s.concat(m),g.from=a.effects.setTransition(g,m,f.from.x,g.from),g.to=a.effects.setTransition(g,m,f.to.x,g.to))),"content"!==p&&"both"!==p||f.from.y!==f.to.y&&(s=s.concat(k).concat(j),g.from=a.effects.setTransition(g,k,f.from.y,g.from),g.to=a.effects.setTransition(g,k,f.to.y,g.to)),a.effects.save(g,s),g.show(),a.effects.createWrapper(g),g.css("overflow","hidden").css(g.from),q&&(e=a.effects.getBaseline(q,d),g.from.top=(d.outerHeight-g.outerHeight())*e.y,g.from.left=(d.outerWidth-g.outerWidth())*e.x,g.to.top=(d.outerHeight-g.to.outerHeight)*e.y,g.to.left=(d.outerWidth-g.to.outerWidth)*e.x),g.css(g.from),"content"!==p&&"both"!==p||(l=l.concat(["marginTop","marginBottom"]).concat(k),m=m.concat(["marginLeft","marginRight"]),j=h.concat(l).concat(m),g.find("*[width]").each(function(){var c=a(this),d={height:c.height(),width:c.width(),outerHeight:c.outerHeight(),outerWidth:c.outerWidth()};o&&a.effects.save(c,j),c.from={height:d.height*f.from.y,width:d.width*f.from.x,outerHeight:d.outerHeight*f.from.y,outerWidth:d.outerWidth*f.from.x},c.to={height:d.height*f.to.y,width:d.width*f.to.x,outerHeight:d.height*f.to.y,outerWidth:d.width*f.to.x},f.from.y!==f.to.y&&(c.from=a.effects.setTransition(c,l,f.from.y,c.from),c.to=a.effects.setTransition(c,l,f.to.y,c.to)),f.from.x!==f.to.x&&(c.from=a.effects.setTransition(c,m,f.from.x,c.from),c.to=a.effects.setTransition(c,m,f.to.x,c.to)),c.css(c.from),c.animate(c.to,b.duration,b.easing,function(){o&&a.effects.restore(c,j)})})),g.animate(g.to,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){0===g.to.opacity&&g.css("opacity",g.from.opacity),"hide"===n&&g.hide(),a.effects.restore(g,s),o||("static"===r?g.css({position:"relative",top:g.to.top,left:g.to.left}):a.each(["top","left"],function(a,b){g.css(b,function(b,c){var d=parseInt(c,10),e=a?g.to.left:g.to.top;return"auto"===c?e+"px":d+e+"px"})})),a.effects.removeWrapper(g),c()}})}}(jQuery),function(a,b){a.effects.effect.shake=function(b,c){var q,d=a(this),e=["position","top","bottom","left","right","height","width"],f=a.effects.setMode(d,b.mode||"effect"),g=b.direction||"left",h=b.distance||20,i=b.times||3,j=2*i+1,k=Math.round(b.duration/j),l="up"===g||"down"===g?"top":"left",m="up"===g||"left"===g,n={},o={},p={},r=d.queue(),s=r.length;for(a.effects.save(d,e),d.show(),a.effects.createWrapper(d),n[l]=(m?"-=":"+=")+h,o[l]=(m?"+=":"-=")+2*h,p[l]=(m?"-=":"+=")+2*h,d.animate(n,k,b.easing),q=1;q<i;q++)d.animate(o,k,b.easing).animate(p,k,b.easing);d.animate(o,k,b.easing).animate(n,k/2,b.easing).queue(function(){"hide"===f&&d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()}),s>1&&r.splice.apply(r,[1,0].concat(r.splice(s,j+1))),d.dequeue()}}(jQuery),function(a,b){a.effects.effect.slide=function(b,c){var k,d=a(this),e=["position","top","bottom","left","right","width","height"],f=a.effects.setMode(d,b.mode||"show"),g="show"===f,h=b.direction||"left",i="up"===h||"down"===h?"top":"left",j="up"===h||"left"===h,l={};a.effects.save(d,e),d.show(),k=b.distance||d["top"===i?"outerHeight":"outerWidth"](!0),a.effects.createWrapper(d).css({overflow:"hidden"}),g&&d.css(i,j?isNaN(k)?"-"+k:-k:k),l[i]=(g?j?"+=":"-=":j?"-=":"+=")+k,d.animate(l,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){"hide"===f&&d.hide(),a.effects.restore(d,e),a.effects.removeWrapper(d),c()}})}}(jQuery),function(a,b){a.effects.effect.transfer=function(b,c){var d=a(this),e=a(b.to),f="fixed"===e.css("position"),g=a("body"),h=f?g.scrollTop():0,i=f?g.scrollLeft():0,j=e.offset(),k={top:j.top-h,left:j.left-i,height:e.innerHeight(),width:e.innerWidth()},l=d.offset(),m=a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(b.className).css({top:l.top-h,left:l.left-i,height:d.innerHeight(),width:d.innerWidth(),position:f?"fixed":"absolute"}).animate(k,b.duration,b.easing,function(){m.remove(),c()})}}(jQuery),function(a,b){a.widget("ui.menu",{version:"1.10.3",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,a.proxy(function(a){this.options.disabled&&a.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(a){a.preventDefault()},"click .ui-state-disabled > a":function(a){a.preventDefault()},"click .ui-menu-item:has(a)":function(b){var c=a(b.target).closest(".ui-menu-item");!this.mouseHandled&&c.not(".ui-state-disabled").length&&(this.mouseHandled=!0,this.select(b),c.has(".ui-menu").length?this.expand(b):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(b){var c=a(b.currentTarget);c.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(b,c)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(a,b){var c=this.active||this.element.children(".ui-menu-item").eq(0);b||this.focus(a,c)},blur:function(b){this._delay(function(){a.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(b)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(b){a(b.target).closest(".ui-menu").length||this.collapseAll(b),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var b=a(this);b.data("ui-menu-submenu-carat")&&b.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(b){function i(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var c,d,e,f,g,h=!0;switch(b.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(b);break;case a.ui.keyCode.PAGE_DOWN:this.nextPage(b);break;case a.ui.keyCode.HOME:this._move("first","first",b);break;case a.ui.keyCode.END:this._move("last","last",b);break;case a.ui.keyCode.UP:this.previous(b);break;case a.ui.keyCode.DOWN:this.next(b);break;case a.ui.keyCode.LEFT:this.collapse(b);break;case a.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(b);break;case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(b);break;case a.ui.keyCode.ESCAPE:this.collapse(b);break;default:h=!1,d=this.previousFilter||"",e=String.fromCharCode(b.keyCode),f=!1,clearTimeout(this.filterTimer),e===d?f=!0:e=d+e,g=new RegExp("^"+i(e),"i"),c=this.activeMenu.children(".ui-menu-item").filter(function(){return g.test(a(this).children("a").text())}),c=f&&c.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):c,c.length||(e=String.fromCharCode(b.keyCode),g=new RegExp("^"+i(e),"i"),c=this.activeMenu.children(".ui-menu-item").filter(function(){return g.test(a(this).children("a").text())})),c.length?(this.focus(b,c),c.length>1?(this.previousFilter=e,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}h&&b.preventDefault()},_activate:function(a){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(a):this.select(a))},refresh:function(){var b,c=this.options.icons.submenu,d=this.element.find(this.options.menus);d.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var b=a(this),d=b.prev("a"),e=a("<span>").addClass("ui-menu-icon ui-icon "+c).data("ui-menu-submenu-carat",!0);d.attr("aria-haspopup","true").prepend(e),b.attr("aria-labelledby",d.attr("id"))}),b=d.add(this.element),b.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),b.children(":not(.ui-menu-item)").each(function(){var b=a(this);/[^\-\u2014\u2013\s]/.test(b.text())||b.addClass("ui-widget-content ui-menu-divider")}),b.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!a.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(a,b){"icons"===a&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu),this._super(a,b)},focus:function(a,b){var c,d;this.blur(a,a&&"focus"===a.type),this._scrollIntoView(b),this.active=b.first(),d=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",d.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),a&&"keydown"===a.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),c=b.children(".ui-menu"),c.length&&/^mouse/.test(a.type)&&this._startOpening(c),this.activeMenu=b.parent(),this._trigger("focus",a,{item:b})},_scrollIntoView:function(b){var c,d,e,f,g,h;this._hasScroll()&&(c=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0,d=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0,e=b.offset().top-this.activeMenu.offset().top-c-d,f=this.activeMenu.scrollTop(),g=this.activeMenu.height(),h=b.height(),e<0?this.activeMenu.scrollTop(f+e):e+h>g&&this.activeMenu.scrollTop(f+e-g+h))},blur:function(a,b){b||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",a,{item:this.active}))},_startOpening:function(a){clearTimeout(this.timer),"true"===a.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(a)},this.delay))},_open:function(b){var c=a.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden","true"),b.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(c)},collapseAll:function(b,c){clearTimeout(this.timer),this.timer=this._delay(function(){var d=c?this.element:a(b&&b.target).closest(this.element.find(".ui-menu"));d.length||(d=this.element),this._close(d),this.blur(b),this.activeMenu=d},this.delay)},_close:function(a){a||(a=this.active?this.active.parent():this.element),a.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(a){var b=this.active&&this.active.parent().closest(".ui-menu-item",this.element);b&&b.length&&(this._close(),this.focus(a,b))},expand:function(a){var b=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();b&&b.length&&(this._open(b.parent()),this._delay(function(){this.focus(a,b)}))},next:function(a){this._move("next","first",a)},previous:function(a){this._move("prev","last",a)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(a,b,c){var d;this.active&&(d="first"===a||"last"===a?this.active["first"===a?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[a+"All"](".ui-menu-item").eq(0)),d&&d.length&&this.active||(d=this.activeMenu.children(".ui-menu-item")[b]()),this.focus(c,d)},nextPage:function(b){var c,d,e;return this.active?void(this.isLastItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d-e<0}),this.focus(b,c)):this.focus(b,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]()))):void this.next(b)},previousPage:function(b){var c,d,e;return this.active?void(this.isFirstItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d+e>0}),this.focus(b,c)):this.focus(b,this.activeMenu.children(".ui-menu-item").first()))):void this.next(b)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(b){this.active=this.active||a(b.target).closest(".ui-menu-item");var c={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(b,!0),this._trigger("select",b,c)}})}(jQuery),function(a,b){function m(a,b,c){return[parseFloat(a[0])*(k.test(a[0])?b/100:1),parseFloat(a[1])*(k.test(a[1])?c/100:1)]}function n(b,c){return parseInt(a.css(b,c),10)||0}function o(b){var c=b[0];return 9===c.nodeType?{width:b.width(),height:b.height(),offset:{top:0,left:0}}:a.isWindow(c)?{width:b.width(),height:b.height(),offset:{top:b.scrollTop(),left:b.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:b.outerWidth(),height:b.outerHeight(),offset:b.offset()}}a.ui=a.ui||{};var c,d=Math.max,e=Math.abs,f=Math.round,g=/left|center|right/,h=/top|center|bottom/,i=/[\+\-]\d+(\.[\d]+)?%?/,j=/^\w+/,k=/%$/,l=a.fn.position;a.position={scrollbarWidth:function(){if(c!==b)return c;var d,e,f=a("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),g=f.children()[0];return a("body").append(f),d=g.offsetWidth,f.css("overflow","scroll"),e=g.offsetWidth,d===e&&(e=f[0].clientWidth),f.remove(),c=d-e},getScrollInfo:function(b){var c=b.isWindow?"":b.element.css("overflow-x"),d=b.isWindow?"":b.element.css("overflow-y"),e="scroll"===c||"auto"===c&&b.width<b.element[0].scrollWidth,f="scroll"===d||"auto"===d&&b.height<b.element[0].scrollHeight;return{width:f?a.position.scrollbarWidth():0,height:e?a.position.scrollbarWidth():0}},getWithinInfo:function(b){var c=a(b||window),d=a.isWindow(c[0]);return{element:c,isWindow:d,offset:c.offset()||{left:0,top:0},scrollLeft:c.scrollLeft(),scrollTop:c.scrollTop(),width:d?c.width():c.outerWidth(),height:d?c.height():c.outerHeight()}}},a.fn.position=function(b){if(!b||!b.of)return l.apply(this,arguments);b=a.extend({},b);var c,k,p,q,r,s,t=a(b.of),u=a.position.getWithinInfo(b.within),v=a.position.getScrollInfo(u),w=(b.collision||"flip").split(" "),x={};return s=o(t),t[0].preventDefault&&(b.at="left top"),k=s.width,p=s.height,q=s.offset,r=a.extend({},q),a.each(["my","at"],function(){var c,d,a=(b[this]||"").split(" ");1===a.length&&(a=g.test(a[0])?a.concat(["center"]):h.test(a[0])?["center"].concat(a):["center","center"]),a[0]=g.test(a[0])?a[0]:"center",a[1]=h.test(a[1])?a[1]:"center",c=i.exec(a[0]),d=i.exec(a[1]),x[this]=[c?c[0]:0,d?d[0]:0],b[this]=[j.exec(a[0])[0],j.exec(a[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===b.at[0]?r.left+=k:"center"===b.at[0]&&(r.left+=k/2),"bottom"===b.at[1]?r.top+=p:"center"===b.at[1]&&(r.top+=p/2),c=m(x.at,k,p),r.left+=c[0],r.top+=c[1],this.each(function(){var g,h,i=a(this),j=i.outerWidth(),l=i.outerHeight(),o=n(this,"marginLeft"),s=n(this,"marginTop"),y=j+o+n(this,"marginRight")+v.width,z=l+s+n(this,"marginBottom")+v.height,A=a.extend({},r),B=m(x.my,i.outerWidth(),i.outerHeight());"right"===b.my[0]?A.left-=j:"center"===b.my[0]&&(A.left-=j/2),"bottom"===b.my[1]?A.top-=l:"center"===b.my[1]&&(A.top-=l/2),A.left+=B[0],A.top+=B[1],a.support.offsetFractions||(A.left=f(A.left),A.top=f(A.top)),g={marginLeft:o,marginTop:s},a.each(["left","top"],function(d,e){a.ui.position[w[d]]&&a.ui.position[w[d]][e](A,{targetWidth:k,targetHeight:p,elemWidth:j,elemHeight:l,collisionPosition:g,collisionWidth:y,collisionHeight:z,offset:[c[0]+B[0],c[1]+B[1]],my:b.my,at:b.at,within:u,elem:i})}),b.using&&(h=function(a){var c=q.left-A.left,f=c+k-j,g=q.top-A.top,h=g+p-l,m={target:{element:t,left:q.left,top:q.top,width:k,height:p},element:{element:i,left:A.left,top:A.top,width:j,height:l},horizontal:f<0?"left":c>0?"right":"center",vertical:h<0?"top":g>0?"bottom":"middle"};k<j&&e(c+f)<k&&(m.horizontal="center"),p<l&&e(g+h)<p&&(m.vertical="middle"),d(e(c),e(f))>d(e(g),e(h))?m.important="horizontal":m.important="vertical",b.using.call(this,a,m)}),i.offset(a.extend(A,{using:h}))})},a.ui.position={fit:{left:function(a,b){var j,c=b.within,e=c.isWindow?c.scrollLeft:c.offset.left,f=c.width,g=a.left-b.collisionPosition.marginLeft,h=e-g,i=g+b.collisionWidth-f-e;b.collisionWidth>f?h>0&&i<=0?(j=a.left+h+b.collisionWidth-f-e,a.left+=h-j):i>0&&h<=0?a.left=e:h>i?a.left=e+f-b.collisionWidth:a.left=e:h>0?a.left+=h:i>0?a.left-=i:a.left=d(a.left-g,a.left)},top:function(a,b){var j,c=b.within,e=c.isWindow?c.scrollTop:c.offset.top,f=b.within.height,g=a.top-b.collisionPosition.marginTop,h=e-g,i=g+b.collisionHeight-f-e;b.collisionHeight>f?h>0&&i<=0?(j=a.top+h+b.collisionHeight-f-e,a.top+=h-j):i>0&&h<=0?a.top=e:h>i?a.top=e+f-b.collisionHeight:a.top=e:h>0?a.top+=h:i>0?a.top-=i:a.top=d(a.top-g,a.top)}},flip:{left:function(a,b){var n,o,c=b.within,d=c.offset.left+c.scrollLeft,f=c.width,g=c.isWindow?c.scrollLeft:c.offset.left,h=a.left-b.collisionPosition.marginLeft,i=h-g,j=h+b.collisionWidth-f-g,k="left"===b.my[0]?-b.elemWidth:"right"===b.my[0]?b.elemWidth:0,l="left"===b.at[0]?b.targetWidth:"right"===b.at[0]?-b.targetWidth:0,m=-2*b.offset[0];i<0?(n=a.left+k+l+m+b.collisionWidth-f-d,(n<0||n<e(i))&&(a.left+=k+l+m)):j>0&&(o=a.left-b.collisionPosition.marginLeft+k+l+m-g,(o>0||e(o)<j)&&(a.left+=k+l+m))},top:function(a,b){var o,p,c=b.within,d=c.offset.top+c.scrollTop,f=c.height,g=c.isWindow?c.scrollTop:c.offset.top,h=a.top-b.collisionPosition.marginTop,i=h-g,j=h+b.collisionHeight-f-g,k="top"===b.my[1],l=k?-b.elemHeight:"bottom"===b.my[1]?b.elemHeight:0,m="top"===b.at[1]?b.targetHeight:"bottom"===b.at[1]?-b.targetHeight:0,n=-2*b.offset[1];i<0?(p=a.top+l+m+n+b.collisionHeight-f-d,a.top+l+m+n>i&&(p<0||p<e(i))&&(a.top+=l+m+n)):j>0&&(o=a.top-b.collisionPosition.marginTop+l+m+n-g,a.top+l+m+n>j&&(o>0||e(o)<j)&&(a.top+=l+m+n))}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments),a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments),a.ui.position.fit.top.apply(this,arguments)}}},function(){var b,c,d,e,f,g=document.getElementsByTagName("body")[0],h=document.createElement("div");b=document.createElement(g?"div":"body"),d={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},g&&a.extend(d,{position:"absolute",left:"-1000px",top:"-1000px"});for(f in d)b.style[f]=d[f];b.appendChild(h),c=g||document.documentElement,c.insertBefore(b,c.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",e=a(h).offset().left,a.support.offsetFractions=e>10&&e<11,b.innerHTML="",c.removeChild(b)}()}(jQuery),function(a,b){a.widget("ui.progressbar",{version:"1.10.3",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(a){return a===b?this.options.value:(this.options.value=this._constrainedValue(a),void this._refreshValue())},_constrainedValue:function(a){return a===b&&(a=this.options.value),this.indeterminate=a===!1,"number"!=typeof a&&(a=0),!this.indeterminate&&Math.min(this.options.max,Math.max(this.min,a))},_setOptions:function(a){var b=a.value;delete a.value,this._super(a),this.options.value=this._constrainedValue(b),this._refreshValue()},_setOption:function(a,b){"max"===a&&(b=Math.max(this.min,b)),this._super(a,b)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var b=this.options.value,c=this._percentage();this.valueDiv.toggle(this.indeterminate||b>this.min).toggleClass("ui-corner-right",b===this.options.max).width(c.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":b}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==b&&(this.oldValue=b,this._trigger("change")),b===this.options.max&&this._trigger("complete")}})}(jQuery),function(a,b){var c=5;a.widget("ui.slider",a.ui.mouse,{version:"1.10.3",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var b,c,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=[];for(c=d.values&&d.values.length||1,e.length>c&&(e.slice(c).remove(),e=e.slice(0,c)),b=e.length;b<c;b++)g.push(f);this.handles=e.add(a(g.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(b){a(this).data("ui-slider-handle-index",b)})},_createRange:function(){var b=this.options,c="";b.range?(b.range===!0&&(b.values?b.values.length&&2!==b.values.length?b.values=[b.values[0],b.values[0]]:a.isArray(b.values)&&(b.values=b.values.slice(0)):b.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=a("<div></div>").appendTo(this.element),c="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(c+("min"===b.range||"max"===b.range?" ui-slider-range-"+b.range:""))):this.range=a([])},_setupEvents:function(){var a=this.handles.add(this.range).filter("a");this._off(a),this._on(a,this._handleEvents),this._hoverable(a),this._focusable(a)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(b){var c,d,e,f,g,h,i,j,k=this,l=this.options;return!l.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),c={x:b.pageX,y:b.pageY},d=this._normValueFromMouse(c),e=this._valueMax()-this._valueMin()+1,this.handles.each(function(b){var c=Math.abs(d-k.values(b));(e>c||e===c&&(b===k._lastChangedValue||k.values(b)===l.min))&&(e=c,f=a(this),g=b)}),h=this._start(b,g),h!==!1&&(this._mouseSliding=!0,this._handleIndex=g,f.addClass("ui-state-active").focus(),i=f.offset(),j=!a(b.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=j?{left:0,top:0}:{left:b.pageX-i.left-f.width()/2,top:b.pageY-i.top-f.height()/2-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,g,d),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;return"horizontal"===this.orientation?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),"vertical"===this.orientation&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e,this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};return this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),2===this.options.values.length&&this.options.range===!0&&(0===b&&c>d||1===b&&c<d)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c,!0))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._lastChangedValue=b,this._trigger("change",a,c)}},value:function(a){return arguments.length?(this.options.value=this._trimAlignValue(a),this._refreshValue(),void this._change(null,0)):this._value()},values:function(b,c){var d,e,f;if(arguments.length>1)return this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),void this._change(null,b);if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();for(d=this.options.values,e=arguments[0],f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()},_setOption:function(b,c){var d,e=0;switch("range"===b&&this.options.range===!0&&("min"===c?(this.options.value=this._values(0),this.options.values=null):"max"===c&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments),b){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),d=0;d<e;d+=1)this._change(null,d);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a)},_values:function(a){var b,c,d;if(arguments.length)return b=this.options.values[a],b=this._trimAlignValue(b);if(this.options.values&&this.options.values.length){for(c=this.options.values.slice(),d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c}return[]},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;return 2*Math.abs(c)>=b&&(d+=c>0?b:-b),parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b,c,d,e,f,g=this.options.range,h=this.options,i=this,j=!this._animateOff&&h.animate,k={};this.options.values&&this.options.values.length?this.handles.each(function(d){c=(i.values(d)-i._valueMin())/(i._valueMax()-i._valueMin())*100,k["horizontal"===i.orientation?"left":"bottom"]=c+"%",a(this).stop(1,1)[j?"animate":"css"](k,h.animate),i.options.range===!0&&("horizontal"===i.orientation?(0===d&&i.range.stop(1,1)[j?"animate":"css"]({left:c+"%"},h.animate),1===d&&i.range[j?"animate":"css"]({width:c-b+"%"},{queue:!1,duration:h.animate})):(0===d&&i.range.stop(1,1)[j?"animate":"css"]({bottom:c+"%"},h.animate),1===d&&i.range[j?"animate":"css"]({height:c-b+"%"},{queue:!1,duration:h.animate}))),b=c}):(d=this.value(),e=this._valueMin(),f=this._valueMax(),c=f!==e?(d-e)/(f-e)*100:0,k["horizontal"===this.orientation?"left":"bottom"]=c+"%",this.handle.stop(1,1)[j?"animate":"css"](k,h.animate),"min"===g&&"horizontal"===this.orientation&&this.range.stop(1,1)[j?"animate":"css"]({width:c+"%"},h.animate),"max"===g&&"horizontal"===this.orientation&&this.range[j?"animate":"css"]({width:100-c+"%"},{queue:!1,duration:h.animate}),"min"===g&&"vertical"===this.orientation&&this.range.stop(1,1)[j?"animate":"css"]({height:c+"%"},h.animate),"max"===g&&"vertical"===this.orientation&&this.range[j?"animate":"css"]({height:100-c+"%"},{queue:!1,duration:h.animate}))},_handleEvents:{keydown:function(b){var d,e,f,g,h=a(b.target).data("ui-slider-handle-index");switch(b.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(b.preventDefault(),!this._keySliding&&(this._keySliding=!0,a(b.target).addClass("ui-state-active"),d=this._start(b,h),d===!1))return}switch(g=this.options.step,e=f=this.options.values&&this.options.values.length?this.values(h):this.value(),b.keyCode){case a.ui.keyCode.HOME:f=this._valueMin();break;case a.ui.keyCode.END:f=this._valueMax();break;case a.ui.keyCode.PAGE_UP:f=this._trimAlignValue(e+(this._valueMax()-this._valueMin())/c);break;case a.ui.keyCode.PAGE_DOWN:f=this._trimAlignValue(e-(this._valueMax()-this._valueMin())/c);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(e===this._valueMax())return;f=this._trimAlignValue(e+g);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(e===this._valueMin())return;f=this._trimAlignValue(e-g)}this._slide(b,h,f)},click:function(a){a.preventDefault()},keyup:function(b){var c=a(b.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(b,c),this._change(b,c),a(b.target).removeClass("ui-state-active"))}}})}(jQuery),function(a){function b(a){return function(){var b=this.element.val();a.apply(this,arguments),this._refresh(),b!==this.element.val()&&this._trigger("change")}}a.widget("ui.spinner",{version:"1.10.3",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var b={},c=this.element;return a.each(["min","max","step"],function(a,d){var e=c.attr(d);void 0!==e&&e.length&&(b[d]=e)}),b},_events:{keydown:function(a){this._start(a)&&this._keydown(a)&&a.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(a){return this.cancelBlur?void delete this.cancelBlur:(this._stop(),this._refresh(),void(this.previous!==this.element.val()&&this._trigger("change",a)))},mousewheel:function(a,b){if(b){if(!this.spinning&&!this._start(a))return!1;this._spin((b>0?1:-1)*this.options.step,a),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(a)},100),a.preventDefault()}},"mousedown .ui-spinner-button":function(b){function d(){var a=this.element[0]===this.document[0].activeElement;a||(this.element.focus(),this.previous=c,this._delay(function(){this.previous=c}))}var c;c=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),b.preventDefault(),d.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,d.call(this)}),this._start(b)!==!1&&this._repeat(null,a(b.currentTarget).hasClass("ui-spinner-up")?1:-1,b)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(b){if(a(b.currentTarget).hasClass("ui-state-active"))return this._start(b)!==!1&&void this._repeat(null,a(b.currentTarget).hasClass("ui-spinner-up")?1:-1,b)},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var a=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=a.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*a.height())&&a.height()>0&&a.height(a.height()),this.options.disabled&&this.disable()},_keydown:function(b){var c=this.options,d=a.ui.keyCode;switch(b.keyCode){case d.UP:return this._repeat(null,1,b),!0;case d.DOWN:return this._repeat(null,-1,b),!0;case d.PAGE_UP:return this._repeat(null,c.page,b),!0;case d.PAGE_DOWN:return this._repeat(null,-c.page,b),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"},_start:function(a){return!(!this.spinning&&this._trigger("start",a)===!1)&&(this.counter||(this.counter=1),this.spinning=!0,!0)},_repeat:function(a,b,c){a=a||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,b,c)},a),this._spin(b*this.options.step,c)},_spin:function(a,b){var c=this.value()||0;this.counter||(this.counter=1),c=this._adjustValue(c+a*this._increment(this.counter)),this.spinning&&this._trigger("spin",b,{value:c})===!1||(this._value(c),this.counter++)},_increment:function(b){var c=this.options.incremental;return c?a.isFunction(c)?c(b):Math.floor(b*b*b/5e4-b*b/500+17*b/200+1):1},_precision:function(){var a=this._precisionOf(this.options.step);return null!==this.options.min&&(a=Math.max(a,this._precisionOf(this.options.min))),a},_precisionOf:function(a){var b=a.toString(),c=b.indexOf(".");return c===-1?0:b.length-c-1},_adjustValue:function(a){var b,c,d=this.options;return b=null!==d.min?d.min:0,c=a-b,c=Math.round(c/d.step)*d.step,a=b+c,a=parseFloat(a.toFixed(this._precision())),null!==d.max&&a>d.max?d.max:null!==d.min&&a<d.min?d.min:a},_stop:function(a){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",a))},_setOption:function(a,b){if("culture"===a||"numberFormat"===a){var c=this._parse(this.element.val());return this.options[a]=b,void this.element.val(this._format(c))}"max"!==a&&"min"!==a&&"step"!==a||"string"==typeof b&&(b=this._parse(b)),"icons"===a&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(b.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(b.down)),this._super(a,b),"disabled"===a&&(b?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:b(function(a){this._super(a),this._value(this.element.val())}),_parse:function(a){return"string"==typeof a&&""!==a&&(a=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(a,10,this.options.culture):+a),""===a||isNaN(a)?null:a},_format:function(a){return""===a?"":window.Globalize&&this.options.numberFormat?Globalize.format(a,this.options.numberFormat,this.options.culture):a},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(a,b){var c;""!==a&&(c=this._parse(a),null!==c&&(b||(c=this._adjustValue(c)),a=this._format(c))),this.element.val(a),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:b(function(a){this._stepUp(a)}),_stepUp:function(a){this._start()&&(this._spin((a||1)*this.options.step),this._stop())},stepDown:b(function(a){this._stepDown(a)}),_stepDown:function(a){this._start()&&(this._spin((a||1)*-this.options.step),this._stop())},pageUp:b(function(a){this._stepUp((a||1)*this.options.page)}),pageDown:b(function(a){this._stepDown((a||1)*this.options.page)}),value:function(a){return arguments.length?void b(this._value).call(this,a):this._parse(this.element.val())},widget:function(){return this.uiSpinner}})}(jQuery),function(a,b){function e(){return++c}function f(a){return a.hash.length>1&&decodeURIComponent(a.href.replace(d,""))===decodeURIComponent(location.href.replace(d,""))}var c=0,d=/#.*$/;a.widget("ui.tabs",{version:"1.10.3",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var b=this,c=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",c.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(b){a(this).is(".ui-state-disabled")&&b.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){a(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),c.active=this._initialActive(),a.isArray(c.disabled)&&(c.disabled=a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"),function(a){return b.tabs.index(a)}))).sort()),this.options.active!==!1&&this.anchors.length?this.active=this._findActive(c.active):this.active=a(),this._refresh(),this.active.length&&this.load(c.active)},_initialActive:function(){var b=this.options.active,c=this.options.collapsible,d=location.hash.substring(1);return null===b&&(d&&this.tabs.each(function(c,e){if(a(e).attr("aria-controls")===d)return b=c,!1}),null===b&&(b=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),null!==b&&b!==-1||(b=!!this.tabs.length&&0)),b!==!1&&(b=this.tabs.index(this.tabs.eq(b)),b===-1&&(b=!c&&0)),!c&&b===!1&&this.anchors.length&&(b=0),b},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):a()}},_tabKeydown:function(b){var c=a(this.document[0].activeElement).closest("li"),d=this.tabs.index(c),e=!0;if(!this._handlePageNav(b)){switch(b.keyCode){case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:d++;break;case a.ui.keyCode.UP:case a.ui.keyCode.LEFT:e=!1,d--;break;case a.ui.keyCode.END:d=this.anchors.length-1;break;case a.ui.keyCode.HOME:d=0;break;case a.ui.keyCode.SPACE:return b.preventDefault(),clearTimeout(this.activating),void this._activate(d);case a.ui.keyCode.ENTER:return b.preventDefault(),clearTimeout(this.activating),void this._activate(d!==this.options.active&&d);default:return}b.preventDefault(),clearTimeout(this.activating),d=this._focusNextTab(d,e),b.ctrlKey||(c.attr("aria-selected","false"),this.tabs.eq(d).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",d)},this.delay))}},_panelKeydown:function(b){this._handlePageNav(b)||b.ctrlKey&&b.keyCode===a.ui.keyCode.UP&&(b.preventDefault(),this.active.focus())},_handlePageNav:function(b){return b.altKey&&b.keyCode===a.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):b.altKey&&b.keyCode===a.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(b,c){function e(){return b>d&&(b=0),b<0&&(b=d),b}for(var d=this.tabs.length-1;a.inArray(e(),this.options.disabled)!==-1;)b=c?b+1:b-1;return b},_focusNextTab:function(a,b){return a=this._findNextTab(a,b),this.tabs.eq(a).focus(),a},_setOption:function(a,b){return"active"===a?void this._activate(b):"disabled"===a?void this._setupDisabled(b):(this._super(a,b),"collapsible"===a&&(this.element.toggleClass("ui-tabs-collapsible",b),b||this.options.active!==!1||this._activate(0)),"event"===a&&this._setupEvents(b),void("heightStyle"===a&&this._setupHeightStyle(b)))},_tabId:function(a){return a.attr("aria-controls")||"ui-tabs-"+e()},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var b=this.options,c=this.tablist.children(":has(a[href])");b.disabled=a.map(c.filter(".ui-state-disabled"),function(a){return c.index(a)}),this._processTabs(),b.active!==!1&&this.anchors.length?this.active.length&&!a.contains(this.tablist[0],this.active[0])?this.tabs.length===b.disabled.length?(b.active=!1,this.active=a()):this._activate(this._findNextTab(Math.max(0,b.active-1),!1)):b.active=this.tabs.index(this.active):(b.active=!1,this.active=a()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var b=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return a("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=a(),this.anchors.each(function(c,d){var e,g,h,i=a(d).uniqueId().attr("id"),j=a(d).closest("li"),k=j.attr("aria-controls");f(d)?(e=d.hash,g=b.element.find(b._sanitizeSelector(e))):(h=b._tabId(j),e="#"+h,g=b.element.find(e),g.length||(g=b._createPanel(h),g.insertAfter(b.panels[c-1]||b.tablist)),g.attr("aria-live","polite")),g.length&&(b.panels=b.panels.add(g)),k&&j.data("ui-tabs-aria-controls",k),j.attr({"aria-controls":e.substring(1),"aria-labelledby":i}),g.attr("aria-labelledby",i)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(b){return a("<div>").attr("id",b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(b){a.isArray(b)&&(b.length?b.length===this.anchors.length&&(b=!0):b=!1);for(var d,c=0;d=this.tabs[c];c++)b===!0||a.inArray(c,b)!==-1?a(d).addClass("ui-state-disabled").attr("aria-disabled","true"):a(d).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=b},_setupEvents:function(b){var c={click:function(a){a.preventDefault()}};b&&a.each(b.split(" "),function(a,b){c[b]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,c),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(b){var c,d=this.element.parent();"fill"===b?(c=d.height(),c-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var b=a(this),d=b.css("position");"absolute"!==d&&"fixed"!==d&&(c-=b.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){c-=a(this).outerHeight(!0)}),this.panels.each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")):"auto"===b&&(c=0,this.panels.each(function(){c=Math.max(c,a(this).height("").height())}).height(c))},_eventHandler:function(b){var c=this.options,d=this.active,e=a(b.currentTarget),f=e.closest("li"),g=f[0]===d[0],h=g&&c.collapsible,i=h?a():this._getPanelForTab(f),j=d.length?this._getPanelForTab(d):a(),k={oldTab:d,oldPanel:j,newTab:h?a():f,newPanel:i};b.preventDefault(),f.hasClass("ui-state-disabled")||f.hasClass("ui-tabs-loading")||this.running||g&&!c.collapsible||this._trigger("beforeActivate",b,k)===!1||(c.active=!h&&this.tabs.index(f),this.active=g?a():f,this.xhr&&this.xhr.abort(),j.length||i.length||a.error("jQuery UI Tabs: Mismatching fragment identifier."),i.length&&this.load(this.tabs.index(f),b),this._toggle(b,k))},_toggle:function(b,c){function g(){d.running=!1,d._trigger("activate",b,c)}function h(){c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),e.length&&d.options.show?d._show(e,d.options.show,g):(e.show(),g())}var d=this,e=c.newPanel,f=c.oldPanel;this.running=!0,f.length&&this.options.hide?this._hide(f,this.options.hide,function(){c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),h()}):(c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),f.hide(),h()),f.attr({"aria-expanded":"false","aria-hidden":"true"}),c.oldTab.attr("aria-selected","false"),e.length&&f.length?c.oldTab.attr("tabIndex",-1):e.length&&this.tabs.filter(function(){return 0===a(this).attr("tabIndex")}).attr("tabIndex",-1),e.attr({"aria-expanded":"true","aria-hidden":"false"}),c.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(b){var c,d=this._findActive(b);d[0]!==this.active[0]&&(d.length||(d=this.active),c=d.find(".ui-tabs-anchor")[0],this._eventHandler({target:c,currentTarget:c,preventDefault:a.noop}))},_findActive:function(b){return b===!1?a():this.tabs.eq(b)},_getIndex:function(a){return"string"==typeof a&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){a.data(this,"ui-tabs-destroy")?a(this).remove():a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var b=a(this),c=b.data("ui-tabs-aria-controls");c?b.attr("aria-controls",c).removeData("ui-tabs-aria-controls"):b.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(c){var d=this.options.disabled;d!==!1&&(c===b?d=!1:(c=this._getIndex(c),d=a.isArray(d)?a.map(d,function(a){return a!==c?a:null}):a.map(this.tabs,function(a,b){return b!==c?b:null})),this._setupDisabled(d))},disable:function(c){var d=this.options.disabled;if(d!==!0){if(c===b)d=!0;else{if(c=this._getIndex(c),a.inArray(c,d)!==-1)return;d=a.isArray(d)?a.merge([c],d).sort():[c]}this._setupDisabled(d)}},load:function(b,c){b=this._getIndex(b);var d=this,e=this.tabs.eq(b),g=e.find(".ui-tabs-anchor"),h=this._getPanelForTab(e),i={tab:e,panel:h};f(g[0])||(this.xhr=a.ajax(this._ajaxSettings(g,c,i)),this.xhr&&"canceled"!==this.xhr.statusText&&(e.addClass("ui-tabs-loading"),h.attr("aria-busy","true"),this.xhr.success(function(a){setTimeout(function(){h.html(a),d._trigger("load",c,i)},1)}).complete(function(a,b){setTimeout(function(){"abort"===b&&d.panels.stop(!1,!0),e.removeClass("ui-tabs-loading"),h.removeAttr("aria-busy"),a===d.xhr&&delete d.xhr},1)})))},_ajaxSettings:function(b,c,d){var e=this;return{url:b.attr("href"),beforeSend:function(b,f){return e._trigger("beforeLoad",c,a.extend({jqXHR:b,ajaxSettings:f},d))}}},_getPanelForTab:function(b){var c=a(b).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+c))}})}(jQuery),function(a){function c(b,c){var d=(b.attr("aria-describedby")||"").split(/\s+/);d.push(c),b.data("ui-tooltip-id",c).attr("aria-describedby",a.trim(d.join(" ")))}function d(b){var c=b.data("ui-tooltip-id"),d=(b.attr("aria-describedby")||"").split(/\s+/),e=a.inArray(c,d);e!==-1&&d.splice(e,1),b.removeData("ui-tooltip-id"),d=a.trim(d.join(" ")),d?b.attr("aria-describedby",d):b.removeAttr("aria-describedby")}var b=0;a.widget("ui.tooltip",{version:"1.10.3",options:{content:function(){var b=a(this).attr("title")||"";return a("<a>").text(b).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(b,c){var d=this;return"disabled"===b?(this[c?"_disable":"_enable"](),void(this.options[b]=c)):(this._super(b,c),void("content"===b&&a.each(this.tooltips,function(a,b){d._updateContent(b)})))},_disable:function(){var b=this;a.each(this.tooltips,function(c,d){var e=a.Event("blur");e.target=e.currentTarget=d[0],b.close(e,!0)}),this.element.find(this.options.items).addBack().each(function(){var b=a(this);b.is("[title]")&&b.data("ui-tooltip-title",b.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var b=a(this);b.data("ui-tooltip-title")&&b.attr("title",b.data("ui-tooltip-title"))})},open:function(b){var c=this,d=a(b?b.target:this.element).closest(this.options.items);d.length&&!d.data("ui-tooltip-id")&&(d.attr("title")&&d.data("ui-tooltip-title",d.attr("title")),d.data("ui-tooltip-open",!0),b&&"mouseover"===b.type&&d.parents().each(function(){var d,b=a(this);b.data("ui-tooltip-open")&&(d=a.Event("blur"),d.target=d.currentTarget=this,c.close(d,!0)),b.attr("title")&&(b.uniqueId(),c.parents[this.id]={element:this,title:b.attr("title")},b.attr("title",""))}),this._updateContent(d,b))},_updateContent:function(a,b){var c,d=this.options.content,e=this,f=b?b.type:null;return"string"==typeof d?this._open(b,a,d):(c=d.call(a[0],function(c){a.data("ui-tooltip-open")&&e._delay(function(){b&&(b.type=f),this._open(b,a,c)})}),void(c&&this._open(b,a,c)))},_open:function(b,d,e){function j(a){i.of=a,f.is(":hidden")||f.position(i)}var f,g,h,i=a.extend({},this.options.position);if(e){if(f=this._find(d),f.length)return void f.find(".ui-tooltip-content").html(e);d.is("[title]")&&(b&&"mouseover"===b.type?d.attr("title",""):d.removeAttr("title")),f=this._tooltip(d),c(d,f.attr("id")),f.find(".ui-tooltip-content").html(e),this.options.track&&b&&/^mouse/.test(b.type)?(this._on(this.document,{mousemove:j}),j(b)):f.position(a.extend({of:d},this.options.position)),f.hide(),this._show(f,this.options.show),this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){f.is(":visible")&&(j(i.of),clearInterval(h))},a.fx.interval)),this._trigger("open",b,{tooltip:f}),g={keyup:function(b){if(b.keyCode===a.ui.keyCode.ESCAPE){var c=a.Event(b);c.currentTarget=d[0],this.close(c,!0)}},remove:function(){this._removeTooltip(f)}},b&&"mouseover"!==b.type||(g.mouseleave="close"),b&&"focusin"!==b.type||(g.focusout="close"),this._on(!0,d,g)}},close:function(b){var c=this,e=a(b?b.currentTarget:this.element),f=this._find(e);this.closing||(clearInterval(this.delayedShow),e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title")),d(e),f.stop(!0),this._hide(f,this.options.hide,function(){c._removeTooltip(a(this))}),e.removeData("ui-tooltip-open"),this._off(e,"mouseleave focusout keyup"),e[0]!==this.element[0]&&this._off(e,"remove"),this._off(this.document,"mousemove"),b&&"mouseleave"===b.type&&a.each(this.parents,function(b,d){a(d.element).attr("title",d.title),delete c.parents[b]}),this.closing=!0,this._trigger("close",b,{tooltip:f}),this.closing=!1)},_tooltip:function(c){var d="ui-tooltip-"+b++,e=a("<div>").attr({id:d,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return a("<div>").addClass("ui-tooltip-content").appendTo(e),e.appendTo(this.document[0].body),this.tooltips[d]=c,e},_find:function(b){var c=b.data("ui-tooltip-id");return c?a("#"+c):a()},_removeTooltip:function(a){a.remove(),delete this.tooltips[a.attr("id")]},_destroy:function(){var b=this;a.each(this.tooltips,function(c,d){var e=a.Event("blur");e.target=e.currentTarget=d[0],b.close(e,!0),a("#"+c).remove(),d.data("ui-tooltip-title")&&(d.attr("title",d.data("ui-tooltip-title")),d.removeData("ui-tooltip-title"))})}})}(jQuery);/**
* 2007-2017 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Open Software License (OSL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/osl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2017 PrestaShop SA
*  @version  Release: $Revision$
*  @license    http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/
jQuery(document).ready(function($){var rtlFlag=$('body').hasClass('lang-rtl')?!0:!1;$('#ishi-featured-products.owl-carousel').owlCarousel({nav:!0,loop:!1,rewind:!0,dots:!1,rtl:rtlFlag,navText:["<i class='material-icons'></i>","<i class='material-icons'></i>"],responsive:{0:{items:ishiproductsblock.columnsmobile},544:{items:ishiproductsblock.columnstablet},992:{items:ishiproductsblock.columnslaptop},1200:{items:ishiproductsblock.columnsdesktop}}});$('#ishi-new-products.owl-carousel').owlCarousel({nav:!0,loop:!1,rewind:!0,dots:!1,rtl:rtlFlag,autoplay:!0,navText:["<i class='material-icons'></i>","<i class='material-icons'></i>"],responsive:{0:{items:ishiproductsblock.columnsmobile},544:{items:ishiproductsblock.columnstablet},992:{items:ishiproductsblock.columnslaptop},1200:{items:ishiproductsblock.columnsdesktop}}});$('#ishi-bestseller-products.owl-carousel').owlCarousel({nav:!0,loop:!1,rewind:!0,dots:!1,rtl:rtlFlag,autoplay:!0,navText:["<i class='material-icons'></i>","<i class='material-icons'></i>"],responsive:{0:{items:ishiproductsblock.columnsmobile},544:{items:ishiproductsblock.columnstablet},992:{items:ishiproductsblock.columnslaptop},1200:{items:ishiproductsblock.columnsdesktop}}});$('#ishi-special-products.owl-carousel').owlCarousel({nav:!0,loop:!1,rewind:!0,dots:!1,rtl:rtlFlag,autoplay:!0,navText:["<i class='material-icons'></i>","<i class='material-icons'></i>"],responsive:{0:{items:ishiproductsblock.columnsmobile},544:{items:ishiproductsblock.columnstablet},992:{items:ishiproductsblock.columnslaptop},1200:{items:ishiproductsblock.columnsdesktop}}})});/**
* 2007-2017 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Open Software License (OSL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/osl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2017 PrestaShop SA
*  @version  Release: $Revision$
*  @license    http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/
jQuery(document).ready(function($){var rtlFlag=$('body').hasClass('lang-rtl')?!0:!1;$('#ishispecialproducts-caraousel').owlCarousel({loop:!1,rewind:!0,nav:!0,dots:!1,rtl:rtlFlag,navText:["<i class='material-icons'></i>","<i class='material-icons'></i>"],responsive:{0:{items:ishispecialproducts.columnsmobile},544:{items:ishispecialproducts.columnstablet},992:{items:ishispecialproducts.columnslaptop},1200:{items:ishispecialproducts.columnsdesktop}}})});/**
* 2007-2017 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Open Software License (OSL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/osl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2017 PrestaShop SA
*  @version  Release: $Revision$
*  @license    http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/
jQuery(document).ready(function($){$('#ishislider.owl-carousel').owlCarousel({loop:!0,nav:!0,dots:!0,autoplay:!0,rtl:$('body').hasClass('lang-rtl')?!0:!1,autoplayTimeout:$('#ishislider.owl-carousel').data("interval"),autoplayHoverPause:$('#ishislider.owl-carousel').data("pause"),navText:["<i class='material-icons'></i>","<i class='material-icons'></i>"],responsive:{0:{items:1}}})});$(document).ready(function(){var $searchWidget=$('#search_widget');var $searchBox=$searchWidget.find('input[type=text]');var searchURL=$searchWidget.attr('data-search-controller-url');$.widget('prestashop.psBlockSearchAutocomplete',$.ui.autocomplete,{_renderItem:function(ul,product){return $("<li>").append($("<a>").append($("<img>").attr('src',product.cover.bySize.small_default.url).addClass("product-image")).append($("<span>").html(product.category).addClass("category")).append($("<span>").html(product.name).addClass("product")).append($("<span>").html(product.price).addClass("price"))).appendTo(ul)}});$searchBox.psBlockSearchAutocomplete({source:function(query,response){$.post(searchURL,{s:query.term,resultsPerPage:10},null,'json').then(function(resp){response(resp.products)}).fail(response)},select:function(event,ui){var url=ui.item.url;window.location.href=url},})});$(document).ready(function(){prestashop.blockcart=prestashop.blockcart||{};var showModal=prestashop.blockcart.showModal||function(modal){var $body=$('body');$body.append(modal);$body.one('click','#blockcart-modal',function(event){if(event.target.id==='blockcart-modal'){$(event.target).remove()}})};$(document).ready(function(){prestashop.on('updateCart',function(event){var refreshURL=$('.blockcart').data('refresh-url');var requestData={};if(event&&event.reason){requestData={id_product_attribute:event.reason.idProductAttribute,id_product:event.reason.idProduct,action:event.reason.linkAction}}
$.post(refreshURL,requestData).then(function(resp){$('.blockcart').replaceWith(resp.preview);$('#header .blockcart .product-container').slimScroll({height:$('#header .blockcart .product-container .product').length>1?'270px':'100%'});if(resp.modal){showModal(resp.modal)}}).fail(function(resp){prestashop.emit('handleError',{eventType:'updateShoppingCart',resp:resp})})})})});/**
* 2007-2017 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Open Software License (OSL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/osl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2017 PrestaShop SA
*  @version  Release: $Revision$
*  @license    http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/
!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports&&"string"!=typeof exports.nodeName?module.exports=t():e.Instafeed=t()}(this,function(){function e(e,t){if(!e)throw new Error(t)}function t(t){e(!t||"object"==typeof t,"options must be an object, got "+t+" ("+typeof t+")");var o={accessToken:null,accessTokenTimeout:5e3,after:null,apiTimeout:5e3,debug:!1,error:null,filter:null,limit:null,mock:!1,render:null,sort:null,success:null,target:"instafeed",template:'<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>',templateBoundaries:["{{","}}"],transform:null};if(t)for(var n in o)void 0!==t[n]&&(o[n]=t[n]);e("string"==typeof o.target||"object"==typeof o.target,"target must be a string or DOM node, got "+o.target+" ("+typeof o.target+")"),e("string"==typeof o.accessToken||"function"==typeof o.accessToken,"accessToken must be a string or function, got "+o.accessToken+" ("+typeof o.accessToken+")"),e("number"==typeof o.accessTokenTimeout,"accessTokenTimeout must be a number, got "+o.accessTokenTimeout+" ("+typeof o.accessTokenTimeout+")"),e("number"==typeof o.apiTimeout,"apiTimeout must be a number, got "+o.apiTimeout+" ("+typeof o.apiTimeout+")"),e("boolean"==typeof o.debug,"debug must be true or false, got "+o.debug+" ("+typeof o.debug+")"),e("boolean"==typeof o.mock,"mock must be true or false, got "+o.mock+" ("+typeof o.mock+")"),e("object"==typeof o.templateBoundaries&&2===o.templateBoundaries.length&&"string"==typeof o.templateBoundaries[0]&&"string"==typeof o.templateBoundaries[1],"templateBoundaries must be an array of 2 strings, got "+o.templateBoundaries+" ("+typeof o.templateBoundaries+")"),e(!o.template||"string"==typeof o.template,"template must null or string, got "+o.template+" ("+typeof o.template+")"),e(!o.error||"function"==typeof o.error,"error must be null or function, got "+o.error+" ("+typeof o.error+")"),e(!o.after||"function"==typeof o.after,"after must be null or function, got "+o.after+" ("+typeof o.after+")"),e(!o.success||"function"==typeof o.success,"success must be null or function, got "+o.success+" ("+typeof o.success+")"),e(!o.filter||"function"==typeof o.filter,"filter must be null or function, got "+o.filter+" ("+typeof o.filter+")"),e(!o.transform||"function"==typeof o.transform,"transform must be null or function, got "+o.transform+" ("+typeof o.transform+")"),e(!o.sort||"function"==typeof o.sort,"sort must be null or function, got "+o.sort+" ("+typeof o.sort+")"),e(!o.render||"function"==typeof o.render,"render must be null or function, got "+o.render+" ("+typeof o.render+")"),e(!o.limit||"number"==typeof o.limit,"limit must be null or number, got "+o.limit+" ("+typeof o.limit+")"),this._state={running:!1},this._options=o}return t.prototype.run=function(){var e=this,t=null,o=null,n=null,r=null;return this._debug("run","options",this._options),this._debug("run","state",this._state),this._state.running?(this._debug("run","already running, skipping"),!1):(this._state.running=!0,this._debug("run","getting dom node"),(t="string"==typeof this._options.target?document.getElementById(this._options.target):this._options.target)?(this._debug("run","got dom node",t),this._debug("run","getting access token"),this._getAccessToken(function(s,i){if(s)return e._debug("onTokenReceived","error",s),void e._fail(new Error("error getting access token: "+s.message));o="https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token="+i,e._debug("onTokenReceived","request url",o),e._makeApiRequest(o,function(o,s){if(o)return e._debug("onResponseReceived","error",o),void e._fail(new Error("api request error: "+o.message));e._debug("onResponseReceived","data",s),e._success(s);try{n=e._processData(s),e._debug("onResponseReceived","processed data",n)}catch(t){return void e._fail(t)}if(e._options.mock)e._debug("onResponseReceived","mock enabled, skipping render");else{try{r=e._renderData(n),e._debug("onResponseReceived","html content",r)}catch(t){return void e._fail(t)}t.innerHTML=r}e._finish()})}),!0):(this._fail(new Error("no element found with ID "+this._options.target)),!1))},t.prototype._processData=function(e){var t="function"==typeof this._options.transform,o="function"==typeof this._options.filter,n="function"==typeof this._options.sort,r="number"==typeof this._options.limit,s=[],i=null,a=null,u=null,c=null;if(this._debug("processData","hasFilter",o,"hasTransform",t,"hasSort",n,"hasLimit",r),"object"!=typeof e||"object"!=typeof e.data||e.data.length<=0)return null;for(var l=0;l<e.data.length;l++){if(a=this._getItemData(e.data[l]),t)try{u=this._options.transform(a),this._debug("processData","transformed item",a,u)}catch(e){throw this._debug("processData","error calling transform",e),new Error("error in transform: "+e.message)}else u=a;if(o){try{c=this._options.filter(u),this._debug("processData","filter item result",u,c)}catch(e){throw this._debug("processData","error calling filter",e),new Error("error in filter: "+e.message)}c&&s.push(u)}else s.push(u)}if(n)try{s.sort(this._options.sort)}catch(e){throw this._debug("processData","error calling sort",e),new Error("error in sort: "+e.message)}return r&&(i=s.length-this._options.limit,this._debug("processData","checking limit",s.length,this._options.limit,i),i>0&&s.splice(s.length-i,i)),s},t.prototype._getItemData=function(e){var t=null,o=null;switch(e.media_type){case"IMAGE":t="image",o=e.media_url;break;case"VIDEO":t="video",o=e.thumbnail_url;break;case"CAROUSEL_ALBUM":t="album",o=e.media_url}return{caption:e.caption,id:e.id,image:o,link:e.permalink,model:e,timestamp:e.timestamp,type:t,username:e.username}},t.prototype._renderData=function(e){var t="string"==typeof this._options.template,o="function"==typeof this._options.render,n=null,r=null,s="";if(this._debug("renderData","hasTemplate",t,"hasRender",o),"object"!=typeof e||e.length<=0)return null;for(var i=0;i<e.length;i++){if(n=e[i],o)try{r=this._options.render(n,this._options),this._debug("renderData","custom render result",n,r)}catch(e){throw this._debug("renderData","error calling render",e),new Error("error in render: "+e.message)}else t&&(r=this._basicRender(n));r?s+=r:this._debug("renderData","render item did not return any content",n)}return s},t.prototype._basicRender=function(e){for(var t=new RegExp(this._options.templateBoundaries[0]+"([\\s\\w.]+)"+this._options.templateBoundaries[1],"gm"),o=this._options.template,n=null,r="",s=0,i=null,a=null;null!==(n=t.exec(o));)i=n[1],r+=o.slice(s,n.index),(a=this._valueForKeyPath(i,e))&&(r+=a.toString()),s=t.lastIndex;return s<o.length&&(r+=o.slice(s,o.length)),r},t.prototype._valueForKeyPath=function(e,t){for(var o=/([\w]+)/gm,n=null,r=t;null!==(n=o.exec(e));){if("object"!=typeof r)return null;r=r[n[1]]}return r},t.prototype._fail=function(e){!this._runHook("error",e)&&console&&"function"==typeof console.error&&console.error(e),this._state.running=!1},t.prototype._finish=function(){this._runHook("after"),this._state.running=!1},t.prototype._success=function(e){this._runHook("success",e),this._state.running=!1},t.prototype._makeApiRequest=function(e,t){var o=!1,n=this,r=null,s=function(e,n){o||(o=!0,t(e,n))};(r=new XMLHttpRequest).timeout=this._options.apiTimeout,r.ontimeout=function(e){s(new Error("api request timed out"))},r.onerror=function(e){s(new Error("api connection error"))},r.onload=function(e){var t=r.getResponseHeader("Content-Type"),o=null;if(n._debug("apiRequestOnLoad","loaded",e),n._debug("apiRequestOnLoad","response status",r.status),n._debug("apiRequestOnLoad","response content type",t),t.indexOf("application/json")>=0)try{o=JSON.parse(r.responseText)}catch(e){return n._debug("apiRequestOnLoad","json parsing error",e,r.responseText),void s(new Error("error parsing response json"))}200===r.status?s(null,o):o&&o.error?s(new Error(o.error.code+" "+o.error.message)):s(new Error("status code "+r.status))},r.open("GET",e,!0),r.send()},t.prototype._getAccessToken=function(e){var t=!1,o=this,n=null,r=function(o,r){t||(t=!0,clearTimeout(n),e(o,r))};if("function"==typeof this._options.accessToken){this._debug("getAccessToken","calling accessToken as function"),n=setTimeout(function(){o._debug("getAccessToken","timeout check",t),r(new Error("accessToken timed out"),null)},this._options.accessTokenTimeout);try{this._options.accessToken(function(e,n){o._debug("getAccessToken","received accessToken callback",t,e,n),r(e,n)})}catch(e){this._debug("getAccessToken","error invoking the accessToken as function",e),r(e,null)}}else this._debug("getAccessToken","treating accessToken as static",typeof this._options.accessToken),r(null,this._options.accessToken)},t.prototype._debug=function(){var e=null;this._options.debug&&console&&"function"==typeof console.log&&((e=[].slice.call(arguments))[0]="[Instafeed] ["+e[0]+"]",console.log.apply(null,e))},t.prototype._runHook=function(e,t){var o=!1;if("function"==typeof this._options[e])try{this._options[e](t),o=!0}catch(t){this._debug("runHook","error calling hook",e,t)}return o},t});jQuery(document).ready(function($){var userFeed=new Instafeed({get:'user',target:"ishiinstagram-carousel",accessToken:ishiinstagramblock.accesstoken,resolution:'standard_resolution',template:'<div class="item"><div class="instagram-container"><a href="{{link}}" id={{id}} target="_blank" rel="nofollow"><img src="{{image}}" class="img-responsive" /><span class="instagram"><i class="fa fa-instagram" aria-hidden="true"></i></span></a><div class="text-container"><span class="likes"><span class="likes-count">{{likes}}</span><i class="fa fa-heart" aria-hidden="true"></i></span><span class="comments"><span class="comments-count">{{comments}}</span><i class="fa fa-comments" aria-hidden="true"></i></span></div></div></div>',links:!1,after:function(){$('#ishiinstagram-carousel.owl-carousel').owlCarousel({loop:!0,rtl:$('body').hasClass('lang-rtl')?!0:!1,autoplay:!0,dots:!1,margin:15,nav:!1,responsive:{0:{items:1},376:{items:2},768:{items:3},992:{items:4},1200:{items:6}}});insertDummyData()}});if($('body').attr('id')=='index'){userFeed.run()}});function insertDummyData(){$("#ishiinstagram-carousel .owl-item").each(function(){$(this).find(".comments-count").text(niceNumberDisplay(Math.floor((Math.random()*10000)+1)));$(this).find(".likes-count").text(niceNumberDisplay(Math.floor((Math.random()*100000)+1)))})}
function niceNumberDisplay(num){var n=parseFloat(num);if(n>1000000){return Math.round(n/1000000)+'m'}else if(n>1000){return Math.round(n/1000)+'k'}else{return n.toFixed(0)}};!function(t){var o={init:function(o){var e={offset:!0,bgfixed:!0,invert:!0};return this.each(function(){function n(){p=s.data("source-url"),g=parseFloat(s.data("source-width")),h=parseFloat(s.data("source-height")),s.css({"background-image":"url("+p+")"}),r()}function r(){u.on("scroll",function(){e.offset&&i()}).trigger("scroll"),u.on("resize",function(){s.css({}),e.offset&&l()}).trigger("resize")}function i(){c()}function l(){c()}function c(){var t,o,n,r;f=s.outerHeight(),windowHeight=u.height(),a=s.offset().top,t=d.scrollTop(),o=t+windowHeight,n=t-f,o>a&&a>n&&(r=o-n,pixelScrolled=t-(a-windowHeight),percentScrolled=pixelScrolled/r,e.invert?(deltaTopScrollVal=100*percentScrolled,s.css({"background-position":"50% "+deltaTopScrollVal+"%"})):(deltaTopScrollVal=100*(1-percentScrolled),s.css({"background-position":"50% "+deltaTopScrollVal+"%"})))}o&&t.extend(e,o);{var a,s=t(this),u=t(window),d=t(document),f=0,p="",g="",h="";Boolean(navigator.userAgent.match(/MSIE ([8]+)\./))}n()})},destroy:function(){},reposition:function(){},update:function(){}};t.fn.sitManParallex=function(e){return o[e]?o[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method with name "+e+" is not exist for jQuery"):o.init.apply(this,arguments)}}(jQuery);(function($){var ls=window.localStorage;var supported;if(typeof ls=='undefined'||typeof window.JSON=='undefined'){supported=!1}else{supported=!0}
$.totalStorage=function(key,value,options){return $.totalStorage.impl.init(key,value)}
$.totalStorage.setItem=function(key,value){return $.totalStorage.impl.setItem(key,value)}
$.totalStorage.getItem=function(key){return $.totalStorage.impl.getItem(key)}
$.totalStorage.getAll=function(){return $.totalStorage.impl.getAll()}
$.totalStorage.deleteItem=function(key){return $.totalStorage.impl.deleteItem(key)}
$.totalStorage.impl={init:function(key,value){if(typeof value!='undefined'){return this.setItem(key,value)}else{return this.getItem(key)}},setItem:function(key,value){if(!supported){try{$.cookie(key,value);return value}catch(e){console.log('Local Storage not supported by this browser. Install the cookie plugin on your site to take advantage of the same functionality. You can get it at https://github.com/carhartl/jquery-cookie')}}
var saver=JSON.stringify(value);ls.setItem(key,saver);return this.parseResult(saver)},getItem:function(key){if(!supported){try{return this.parseResult($.cookie(key))}catch(e){return null}}
return this.parseResult(ls.getItem(key))},deleteItem:function(key){if(!supported){try{$.cookie(key,null);return!0}catch(e){return!1}}
ls.removeItem(key);return!0},getAll:function(){var items=new Array();if(!supported){try{var pairs=document.cookie.split(";");for(var i=0;i<pairs.length;i++){var pair=pairs[i].split('=');var key=pair[0];items.push({key:key,value:this.parseResult($.cookie(key))})}}catch(e){return null}}else{for(var i in ls){if(i.length){items.push({key:i,value:this.parseResult(ls.getItem(i))})}}}
return items},parseResult:function(res){var ret;try{ret=JSON.parse(res);if(ret=='true'){ret=!0}
if(ret=='false'){ret=!1}
if(parseFloat(ret)==ret&&typeof ret!="object"){ret=parseFloat(ret)}}catch(e){}
return ret}}})(jQuery);
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.6
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Typed=e():t.Typed=e()})(this,function(){return function(t){function e(n){if(s[n])return s[n].exports;var i=s[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var s={};return e.m=t,e.c=s,e.p="",e(0)}([function(t,e,s){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),r=s(1),o=s(3),a=function(){function t(e,s){n(this,t),r.initializer.load(this,s,e),this.begin()}return i(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)}},{key:"typewrite",value:function(t,e){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),i=1;return this.pause.status===!0?void this.setPauseStatus(t,e,!0):void(this.timeout=setTimeout(function(){e=o.htmlParser.typeHtmlChars(t,e,s);var n=0,r=t.substr(e);if("^"===r.charAt(0)&&/^\^\d+/.test(r)){var a=1;r=/\d+/.exec(r)[0],a+=r.length,n=parseInt(r),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,e)+t.substring(e+a),s.toggleBlinking(!0)}if("`"===r.charAt(0)){for(;"`"!==t.substr(e+i).charAt(0)&&(i++,!(e+i>t.length)););var u=t.substring(0,e),l=t.substring(u.length+1,e+i),c=t.substring(e+i+1);t=u+l+c,i--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),e===t.length?s.doneTyping(t,e):s.keepTyping(t,e,i),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},n)},n))}},{key:"keepTyping",value:function(t,e,s){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=s;var n=t.substr(0,e);this.replaceText(n),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(t,e)},this.backDelay))}},{key:"backspace",value:function(t,e){var s=this;if(this.pause.status===!0)return void this.setPauseStatus(t,e,!0);if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=o.htmlParser.backSpaceHtmlChars(t,e,s);var n=t.substr(0,e);if(s.replaceText(n),s.smartBackspace){var i=s.strings[s.arrayPos+1];i&&n===i.substr(0,e)?s.stopNum=e:s.stopNum=0}e>s.stopNum?(e--,s.backspace(t,e)):e<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],e))},n)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){if(this.cursor&&!this.pause.status&&this.cursorBlinking!==t){this.cursorBlinking=t;var e=t?"infinite":0;this.cursor.style.animationIterationCount=e}}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&0!==t.el.value.length||t.start()}))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e["default"]=a,t.exports=e["default"]},function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},o=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),a=s(2),u=n(a),l=function(){function t(){i(this,t)}return o(t,[{key:"load",value:function(t,e,s){if("string"==typeof s?t.el=document.querySelector(s):t.el=s,t.options=r({},u["default"],e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(t){return t.trim()}),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var n=Array.prototype.slice.apply(t.stringsElement.children),i=n.length;if(i)for(var o=0;o<i;o+=1){var a=n[o];t.strings.push(a.innerHTML.trim())}}t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1;for(var o in t.strings)t.sequence[o]=o;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){var e="";return e=t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){if(t.autoInsertCss&&t.showCursor&&t.fadeOut){var e=document.createElement("style");e.type="text/css";var s="";t.showCursor&&(s+="\n        .typed-cursor{\n          opacity: 1;\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(s+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n          -webkit-animation: 0;\n                  animation: 0;\n        }\n      "),0!==e.length&&(e.innerHTML=s,document.body.appendChild(e))}}}]),t}();e["default"]=l;var c=new l;e.initializer=c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e["default"]=s,t.exports=e["default"]},function(t,e){"use strict";function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),i=function(){function t(){s(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,s){if("html"!==s.contentType)return e;var n=t.substr(e).charAt(0);if("<"===n||"&"===n){var i="";for(i="<"===n?">":";";t.substr(e+1).charAt(0)!==i&&(e++,!(e+1>t.length)););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,s){if("html"!==s.contentType)return e;var n=t.substr(e).charAt(0);if(">"===n||";"===n){var i="";for(i=">"===n?"<":"&";t.substr(e-1).charAt(0)!==i&&(e--,!(e<0)););e--}return e}}]),t}();e["default"]=i;var r=new i;e.htmlParser=r}])});!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){var b=a.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(b)}function d(a){return function(b){var d=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(d)for(var f=0,g=d.length;f<g;++f){var h=d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),j=c(h[0]),k=h[1]||"",l=h[3]||"",m=null;h=h[2],i.hasOwnProperty(h)&&(m=i[h],m=Number(a[m])),null!==m&&("!"===k&&(m=e(l,m)),""===k&&m<10&&(m="0"+m.toString()),b=b.replace(j,m.toString()))}return b=b.replace(/%%/,"%")}}function e(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),Math.abs(b)>1?c:d}var f=[],g=[],h={precision:100,elapse:!1,defer:!1};g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var i={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"},j=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.options=a.extend({},h),this.firstTick=!0,this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&("function"==typeof d?(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)):this.options=a.extend({},h,d)),this.setFinalDate(c),this.options.defer===!1&&this.start()};a.extend(j.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){if(0===this.$el.closest("html").length)return void this.remove();var a,b=new Date;return a=this.finalDate.getTime()-b.getTime(),a=Math.ceil(a/1e3),a=!this.options.elapse&&a<0?0:Math.abs(a),this.totalSecsLeft===a||this.firstTick?void(this.firstTick=!1):(this.totalSecsLeft=a,this.elapsed=b>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-b.getFullYear()),totalDays:Math.floor(this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft},void(this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish"))))},dispatchEvent:function(b){var c=a.Event(b+".countdown");c.finalDate=this.finalDate,c.elapsed=this.elapsed,c.offset=a.extend({},this.offset),c.strftime=d(this.offset),this.$el.trigger(c)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];j.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new j(this,b[0],b[1])})}});jQuery(document).ready(function($){$('#siteloader').fadeOut();$('#spin-wrapper').fadeOut();adjustFixedHeader();$('#language-selector').appendTo('.user-info > ul.dropdown-menu');$('#currency-selector').appendTo('.user-info > ul.dropdown-menu');$('#desktop_top_menu').appendTo(' #mobile_top_menu_wrapper > .js-top-menu');$(window).resize(function(){adjustFixedHeader()});$(window).scroll(function(){adjustFixedHeader()});var rtlFlag=$('body').hasClass('lang-rtl')?!0:!1;var isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);if(!isMobile){if($(".parallax").length){$(".parallax").sitManParallex({invert:!1})}}else{$(".parallax").sitManParallex({invert:!0})}
$('#search_widget .search-logo').click(function(){$(this).toggleClass('active').parents('#search_widget').find('form').stop(!0,!0).slideToggle('medium')});$(document).on('click','.cart-link',function(){$(this).siblings('.cart-dropdown').stop(!0,!0).slideToggle()});if($('#ishiparallaxbanner .parallax').data('deal')=='1'){var time=$('#ishiparallaxbanner .parallax').data('counter');var container=$(this).find('#parallaxcountdown');$(container).countdown(time,function(event){$(this).find(".countdown-days .data").html(event.strftime('%D'));$(this).find(".countdown-hours .data").html(event.strftime('%H'));$(this).find(".countdown-minutes .data").html(event.strftime('%M'));$(this).find(".countdown-seconds .data").html(event.strftime('%S'))})}
function adjustFixedHeader(){var headerHeight=$('#header').height();var navmenuHeightDesktop=$('#header .nav-full-width').height();var navfullwidthHeightDesktop=headerHeight+navmenuHeightDesktop;var navHeightDesktop=headerHeight;var navHeightMobile=$('#header').height();if(window.matchMedia('(min-width: 992px)').matches){$('.nav-full-width').removeClass('fixed-header');if($(window).scrollTop()>navHeightDesktop){$('.header-top').addClass('fixed-header')}else{$('.header-top').removeClass('fixed-header')}}
if(window.matchMedia('(max-width: 991px)').matches){$('.header-top').removeClass('fixed-header');if($(window).scrollTop()>navHeightMobile){$('.nav-full-width').addClass('fixed-header')}else{$('.nav-full-width').removeClass('fixed-header')}}}
$('.video').magnificPopup({type:'iframe',closeOnBgClick:!1,iframe:{markup:'<div class="mfp-iframe-scaler">'+'<div class="mfp-close"></div>'+'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+'<div class="mfp-title">Some caption</div>'+'</div>'},callbacks:{markupParse:function(template,values,item){values.title=item.el.attr('title')}},removalDelay:300,mainClass:'mfp-fade'});$('.qv-carousel').owlCarousel({nav:!0,margin:15,loop:!1,dots:!1,rewind:!0,rtl:$('body').hasClass('lang-rtl')?!0:!1,navText:["<i class='material-icons'></i>","<i class='material-icons'></i>"],responsive:{0:{items:2},443:{items:3},544:{items:4},768:{items:3},992:{items:3},1200:{items:4}}});$('#ishi-product-accessories.owl-carousel').owlCarousel({loop:!1,nav:!0,rewind:!0,dots:!1,rtl:rtlFlag,navText:["<i class='material-icons'></i>","<i class='material-icons'></i>"],responsive:{0:{items:2},544:{items:2},768:{items:2},992:{items:3},1200:{items:4}}});$('#ishicategoryblock-carousel.owl-carousel').owlCarousel({loop:!1,nav:!0,rewind:!0,margin:30,dots:!1,rtl:rtlFlag,navText:["<i class='material-icons'></i>","<i class='material-icons'></i>"],responsive:{0:{items:2,margin:15,},544:{items:2},768:{items:3},992:{items:4},1200:{items:5}}});$('#smartblog-carousel').owlCarousel({loop:!1,rewind:!0,dots:!1,margin:30,nav:!0,navText:["<i class='material-icons'></i>","<i class='material-icons'></i>"],autoplay:!1,rtl:rtlFlag,responsive:{0:{items:1},544:{items:2},768:{items:2},992:{items:3},1200:{items:3}}});$('#manufacturer-carousel').owlCarousel({loop:!0,dots:!1,nav:!1,autoplay:!0,autoplayTimeout:2000,rtl:rtlFlag,navText:["<i class='material-icons'></i>","<i class='material-icons'></i>"],responsive:{0:{items:1},544:{items:2},768:{items:4},992:{items:5},1200:{items:6}}});$('#supplier-carousel').owlCarousel({loop:!0,nav:!1,autoplay:!0,autoplayTimeout:2000,rtl:rtlFlag,navText:["<i class='material-icons'></i>","<i class='material-icons'></i>"],responsive:{0:{items:1},544:{items:2},768:{items:4},992:{items:6}}});$('#ishitestimonials-carousel').owlCarousel({loop:!1,nav:!1,rewind:!0,autoplay:!0,rtl:rtlFlag,items:1});$('.product-image').magnificPopup({type:'image',delegate:'a',gallery:{enabled:!0,navigateByImgClick:!0}});$('#header .blockcart .product-container').slimScroll({height:$('#header .blockcart .product-container .product').length>1?'240px':'100%'});$(window).scroll(function(){if($(this).scrollTop()>500){$('#slidetop').fadeIn(500)}else{$('#slidetop').fadeOut(500)}});$('#slidetop').click(function(e){e.preventDefault();$('html, body').animate({scrollTop:0},800)});$(".read_comment").click(function(e){$('html, body').animate({scrollTop:$("#product-comments-list").offset().top},2500)});if($('#product.page-product').length){if($('#product-comments-list-header .grade-stars').length){$('.product-list-reviews .grade-stars').html($('#product-comments-list-header .grade-stars').html())}else{$('.product-information .product-list-reviews').hide()}}
var currentLayout=$.totalStorage('productLayout');if(currentLayout&&currentLayout=='listView'){$('#grid-view').removeClass('checked');setProductLayout('listView')}else{setProductLayout('gridView')}
$(document).on('click','#list-view',function(e){if($(this).hasClass('checked'))
return;$('#js-product-list').fadeOut(500,function(){setProductLayout('listView')});$('#js-product-list').fadeIn(500)});$(document).on('click','#grid-view',function(e){if($(this).hasClass('checked'))
return;$('#js-product-list').fadeOut(500,function(){setProductLayout('gridView')});$('#js-product-list').fadeIn(500)})});function setProductLayout(layout){if(layout=='listView'){$('#list-view').addClass('checked');$('#grid-view').removeClass('checked');$('#js-product-list .products').removeClass('grid');$('#js-product-list .products').addClass('list');$('#js-product-list .products article').each(function(){$(this).removeClass('col-xs-6 col-sm-6 col-md-4 col-lg-6 col-xl-4');$(this).find('.thumbnail-inner').addClass('col-xs-12 col-sm-6 col-md-4 col-lg-4');$(this).find('.product-description').addClass('col-xs-12 col-sm-6 col-md-8 col-lg-8')});$.totalStorage('productLayout','listView')}else{$('#grid-view').addClass('checked');$('#list-view').removeClass('checked');$('#js-product-list .products').removeClass('list');$('#js-product-list .products').addClass('grid');$('#js-product-list .products article').each(function(){$(this).addClass('col-xs-6 col-sm-6 col-md-4 col-lg-6 col-xl-4');$(this).find('.thumbnail-inner').removeClass('col-xs-12 col-sm-6 col-md-4 col-lg-4');$(this).find('.product-description').removeClass('col-xs-12 col-sm-6 col-md-8 col-lg-8')});$.totalStorage('productLayout','gridView')}}

function stepDown(id) {
    var inputBox = document.getElementById(id).nextSibling.nextSibling;
    var getValue = parseInt(inputBox.value);
    if (getValue === 1) {
        inputBox.value = 1;
    } else {
        inputBox.value = getValue - 1;
    }
}

function stepUp(id) {
    var inputBox = document.getElementById(id).previousSibling.previousSibling;
    var getValue = parseInt(inputBox.value);
    if (getValue >= 20) {
        inputBox.value = 20;
    } else {
        inputBox.value = getValue + 1;
    }
}