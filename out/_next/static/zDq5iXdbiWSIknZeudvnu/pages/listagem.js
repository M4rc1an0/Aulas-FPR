(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"9fva":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/listagem",function(){return n("9yy3")}])},"9yy3":function(e,t,n){"use strict";n.r(t);var a=n("8Kt/"),o=n.n(a),r=n("q1tI"),i=n.n(r),l=n("vDqi"),c=n.n(l),u=n("gzFH"),s=i.a.createElement;t.default=function(){var e=Object(r.useState)(!0),t=e[0],n=e[1],a=Object(r.useState)(),l=a[0],d=a[1],m=Object(r.useState)(),f=m[0],g=m[1],v=Object(r.useState)("todos"),b=v[0],h=v[1];function p(e,t){return e[1].nome<t[1].nome?-1:e[1].nome>t[1].nome?1:0}return Object(r.useEffect)((function(){if(l){var e=Object.entries(l);e.sort(p),g(e)}}),[l]),Object(r.useEffect)((function(){n(!0),c.a.get("https://aguaviva-rp.firebaseio.com/teste.json").then((function(e){d(e.data),n(!1)}))}),[]),s(i.a.Fragment,null,s(o.a,null,s("title",null,"Igreja Batista \xc1gua Viva - Ribeir\xe3o Pires")),s("div",{className:"container"},s("div",{className:"header"},s("img",{src:"/images/logo.jpg"}),s("h1",null,"Listagem de controle de presen\xe7a no culto")),l&&s(i.a.Fragment,null,s("div",{className:"select"},s("label",null,"Selecione a listagem do culto que deseja ver"),s("select",{onChange:function(e){h(e.target.value)}},s("option",{value:"todos"},"Todos"),s("option",{value:"manha"},"S\xe1bado - 15hs"),s("option",{value:"noite"},"S\xe1bado - 17:30hs"))),"manha"==b&&s(u.a,{titulo:"S\xe1bado - 15hs",culto:"manha",orderListagem:f}),"noite"==b&&s(u.a,{titulo:"S\xe1bado - 17:30hs",culto:"noite",orderListagem:f}),"todos"==b&&s(i.a.Fragment,null,s(u.a,{titulo:"S\xe1bado - 15hs",culto:"manha",orderListagem:f}),s(u.a,{titulo:"S\xe1bado - 17:30hs",culto:"noite",orderListagem:f})),s("div",{className:"box-voltar"},s("a",{href:"/",className:"button"},"Voltar"))),t&&s("p",{className:"carregando"},s("img",{src:"/images/loading.gif"}),s("span",null,"Carregando..."))))}},gzFH:function(e,t,n){"use strict";function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return m}));var o=n("rePB"),r=n("q1tI"),i=n.n(r),l=n("vDqi"),c=n.n(l),u=i.a.createElement;function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){var t=e.titulo,n=e.culto,o=e.orderListagem,l=e.remocao,s=e.chegada,m=e.setControle,f=e.controle,g=Object(r.useState)(),v=(g[0],g[1]),b=function(e,t){c.a.delete(e).then((function(){alert("voc\xea removeu ".concat(t.nome," da listagem")),window.location="/remocao.html"}))},h=function(e,t){c.a.put(e,t).then((function(){}))},p=null===o||void 0===o?void 0:o.filter((function(e){return!0===e[1].chegada&&e[1].culto==n})),j=null===o||void 0===o?void 0:o.filter((function(e){return e[1].culto==n}));return Object(r.useEffect)((function(){if(j){var e,t=a(j).map((function(e){return parseInt(e[1].criancas)}));e=t.length>=1?t.reduce((function(e,t){return e+t})):0,v(e)}}),[j]),u(i.a.Fragment,null,u("div",{className:"list-header"},u("h1",null,t),(null===p||void 0===p?void 0:p.length)>0&&s&&u("span",null,u("small",{className:"contagem"},null===p||void 0===p?void 0:p.length),1==(null===p||void 0===p?void 0:p.length)&&u(i.a.Fragment,null," pessoa chegou "),1!=(null===p||void 0===p?void 0:p.length)&&u(i.a.Fragment,null," pessoas chegaram "),"no culto")),u("table",null,u("thead",null,u("tr",null,u("th",null,"Nome"),u("th",null,"Discipulado"),s&&u("th",null,"Controle Servos"),l&&u("th",null,"Status"))),u("tbody",null,o&&u(i.a.Fragment,null,o.map((function(e){return u(i.a.Fragment,null,e.map((function(t){if(t.culto==n)return u("tr",{key:t},u("td",null,t.nome," ",t.sobrenome),u("td",null,t.rede),s&&u("td",{onClick:function(n){return a=e[0],o=t,m(!f),void(o.chegada?h("https://aguaviva-rp.firebaseio.com/teste/".concat(a,".json"),d({},o,{chegada:!1})):h("https://aguaviva-rp.firebaseio.com/teste/".concat(a,".json"),d({},o,{chegada:!0})));var a,o}},t.chegada?u("img",{src:"images/carraca.svg",className:"certo"}):u("img",{src:"images/carraca.svg",className:"nao_certo"})),l&&u("td",null,u("button",{className:"remove",onClick:function(n){return a=e[0],o=t,void b("https://aguaviva-rp.firebaseio.com/teste/".concat(a,".json"),o);var a,o}},"Remover")))})))}))))))}},rePB:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))}},[["9fva",0,1,2]]]);