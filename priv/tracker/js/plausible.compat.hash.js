!function(){"use strict";var e,a=window.location,o=window.document,r=o.getElementById("plausible"),l=r.getAttribute("data-api")||new URL(r.src).origin+"/api/event",s=window.localStorage.plausible_ignore;function w(e){console.warn("Ignoring Event: "+e)}function t(e,t){if(/^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*\:)*?:?0*1$/.test(a.hostname)||"file:"===a.protocol)return w("localhost");if(!(window.phantom||window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){if("true"==s)return w("localStorage flag");var i={};i.n=e,i.u=a.href,i.d=r.getAttribute("data-domain"),i.r=o.referrer||null,i.w=window.innerWidth,t&&t.meta&&(i.m=JSON.stringify(t.meta)),t&&t.props&&(i.p=JSON.stringify(t.props)),i.h=1;var n=new XMLHttpRequest;n.open("POST",l,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(i)),n.onreadystatechange=function(){4==n.readyState&&t&&t.callback&&t.callback()}}}function i(){e=a.pathname,t("pageview")}window.addEventListener("hashchange",i);var n=window.plausible&&window.plausible.q||[];window.plausible=t;for(var d=0;d<n.length;d++)t.apply(this,n[d]);"prerender"===o.visibilityState?o.addEventListener("visibilitychange",function(){e||"visible"!==o.visibilityState||i()}):i()}();