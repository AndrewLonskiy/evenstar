!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1)},function(e,t){class n{constructor(e,t,n){this.data=e,this.place=n,this.name=t}renderUser(){let e=document.createElement("div");e.classList.add(`${this.name}`),this.data.forEach(t=>{let n=document.createElement("div");n.setAttribute(`${this.name}-id`,t.id),n.innerText=t.name,n.style.border="3px solid black",e.append(n)}),this.place.append(e)}}class r{constructor(e,t,n,r){this.data=e,this.place=r,this.name=t,this.id=n}renderPost(){let e=document.createElement("div");e.classList.add(`${this.name}`),this.data.forEach(t=>{if(+t.userId==+this.id){let n=document.createElement("div");n.setAttribute(`${this.name}-id`,t.id),n.innerText=t.body,n.style.border="3px solid black",e.append(n)}}),this.place.appendChild(e)}}class i{constructor(e,t,n,r){this.data=e,this.place=r,this.name=t,this.id=n}renderAlbum(){let e=document.createElement("div");e.classList.add(`${this.name}`),this.data.forEach(t=>{if(+t.userId==+this.id){let n=document.createElement("div");n.setAttribute(`${this.name}-id`,t.id),n.innerText=t.title,n.style.border="3px solid black",e.append(n)}}),this.place.append(e)}}class s{constructor(e,t,n,r){this.data=e,this.place=r,this.name=t,this.id=n}renderPhoto(){let e=document.createElement("div");e.classList.add(`${this.name}`),this.data.forEach(t=>{if(+t.albumId==+this.id){let n=document.createElement("img");n.setAttribute(`${this.name}-id`,t.id),n.innerText=t.title,n.src=t.url,n.style.border="1px solid black",n.style.height="15px",n.style.width="15px",e.append(n)}}),this.place.append(e)}}class a{constructor(e,t,n,r){this.data=e,this.place=r,this.name=t,this.id=n}renderComment(){let e=document.createElement("div");e.classList.add(`${this.name}`),this.data.forEach(t=>{if(+t.postId==+this.id){let n=document.createElement("div");n.setAttribute(`${this.name}-id`,t.id),n.innerText=t.title,n.style.border="1px solid black",n.innerText=t.name,e.append(n)}}),this.place.append(e)}}function d(e){return fetch(e).then(e=>e.json())}let l=document.querySelector(".main_container");function o(){if(console.log(event),event.target.hasAttribute("user-id"))if(event.target.firstElementChild)for(;event.target.firstElementChild;)event.target.removeChild(event.target.firstElementChild);else{let e=event.target.getAttribute("user-id"),t=event.target;d("https://jsonplaceholder.typicode.com/posts").then(n=>{new r(n,"post",e,t).renderPost()}),d("https://jsonplaceholder.typicode.com/albums").then(n=>{new i(n,"album",e,t).renderAlbum()})}else if(event.target.hasAttribute("post-id"))if("DIV"===event.target.lastChild.nodeName)event.target.children[3].remove();else{let e=event.target.getAttribute("post-id"),t=event.target;d("https://jsonplaceholder.typicode.com/comments").then(n=>{new a(n,"comment",e,t).renderComment()})}else if(event.target.hasAttribute("album-id"))if(event.target.firstElementChild)for(;event.target.firstElementChild;)event.target.removeChild(event.target.firstElementChild);else{let e=event.target.getAttribute("album-id"),t=event.target;d("https://jsonplaceholder.typicode.com/photos").then(n=>{new s(n,"photo",e,t).renderPhoto()})}}d("https://jsonplaceholder.typicode.com/users").then(e=>{new n(e,"user",l).renderUser(),document.querySelectorAll("[user-id]").forEach(e=>e.addEventListener("click",o))})}]);