!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=114)}({114:function(e,n){function t(e){window.postMessage({source:"vue-devtools-proxy",payload:e},"*")}function o(e){e.data&&"vue-devtools-backend"===e.data.source&&r.postMessage(e.data.payload)}var r=chrome.runtime.connect({name:"content-script"});r.onMessage.addListener(t),window.addEventListener("message",o),r.onDisconnect.addListener(function(){window.removeEventListener("message",o),t("shutdown")}),t("init")}});