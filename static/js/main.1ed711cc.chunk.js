(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{53:function(e,a,t){e.exports=t(65)},65:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),c=t.n(l),i=t(11),o=t(48),m=t(92),u=t(86),s=t(96),d=t(93),g=t(88),E=t(94),b=t(87),f=t(89),h=t(79),p=t(80),v=t(95),j=t(90),w=t(91),k=t(83),O=t(84),N=t(85);function y(e){return r.a.createElement(h.a,null,r.a.createElement(p.a,null,e.itemName," (",e.personName,")"),r.a.createElement(p.a,null,r.a.createElement("strong",null,"$",e.itemPrice)))}var x=function(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(0),m=Object(i.a)(c,2),u=m[0],s=m[1],g=Object(n.useState)(0),E=Object(i.a)(g,2),b=E[0],f=E[1],x=Object(n.useState)([]),C=Object(i.a)(x,2),S=C[0],P=C[1],z=Object(n.useState)(),A=Object(i.a)(z,2),I=A[0],$=A[1],_=Object(n.useState)(),B=Object(i.a)(_,2),J=B[0],M=B[1],T=Object(n.useState)(),W=Object(i.a)(T,2),R=W[0],q=W[1];return r.a.createElement(v.a,{areas:[{name:"check_info",start:[0,0],end:[0,0]},{name:"item_info",start:[0,1],end:[0,1]},{name:"main",start:[0,2],end:[0,2]}],columns:["xlarge"],rows:["xsmall","xsmall","medium"],gap:"small",responsive:!0,alignSelf:"center"},r.a.createElement(o.a,{gridArea:"check_info",background:"light-2",align:"center",justify:"center",direction:"row",gap:"large"},r.a.createElement(j.a,{id:"subtotal",label:"Subtotal",align:"center"},r.a.createElement(w.a,{placeholder:"0.00",icon:"$",value:t,onChange:function(e){return l(e.target.value)}})),r.a.createElement(j.a,{id:"total",label:"Total",align:"center"},r.a.createElement(w.a,{placeholder:"0.00",icon:"$",value:u,onChange:function(e){return s(e.target.value)}})),r.a.createElement(j.a,{id:"tip",label:"Tip",align:"center"},r.a.createElement(w.a,{placeholder:"0.0",icon:"%",reverse:!0,value:b,onChange:function(e){return f(e.target.value)}}))),r.a.createElement(o.a,{gridArea:"summary",background:"light-6",direction:"row"},r.a.createElement("p",null,"I am a box")),r.a.createElement(o.a,{gridArea:"item_info",background:"light-2",align:"center",justify:"start",direction:"row",gap:"small"},r.a.createElement(d.a,{primary:!0,label:"+",margin:"medium",onClick:function(){return function(){var e={itemName:J,personName:I,itemPrice:R},a=S.concat(e);P(a),$(""),M(""),q(0)}()}}),r.a.createElement(j.a,{id:"personName",label:"Name of Person"},r.a.createElement(w.a,{placeholder:"Name of Person",value:I,onChange:function(e){return $(e.target.value)},size:"small"})),r.a.createElement(j.a,{id:"itemName",label:"Name of Item"},r.a.createElement(w.a,{placeholder:"Name of Item",value:J,onChange:function(e){return M(e.target.value)},size:"small"})),r.a.createElement(j.a,{id:"itemPrice",label:"Cost of Item"},r.a.createElement(w.a,{placeholder:"0.00",value:R,onChange:function(e){return q(e.target.value)},size:"small"}))),r.a.createElement(o.a,{gridArea:"main",direction:"column"},r.a.createElement(k.a,null,r.a.createElement(O.a,null,r.a.createElement(h.a,null,r.a.createElement(p.a,{scope:"col",border:"bottom"},"Name"),r.a.createElement(p.a,{scope:"col",border:"bottom"},"Price"))),r.a.createElement(N.a,null,S.map((function(e,a){return r.a.createElement(y,{itemName:e.itemName,personName:e.personName,itemPrice:e.itemPrice})}))))),r.a.createElement(o.a,{gridArea:"bottom",background:"light-2"}))},C={global:{colors:{brand:"#228BE6"},font:{family:"Roboto",size:"18px",height:"20px"}}},S=function(e){return r.a.createElement(o.a,Object.assign({tag:"header",direction:"row",align:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"1"}},e))},P=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement(m.a,{theme:C,full:!0},r.a.createElement(u.a.Consumer,null,(function(e){return r.a.createElement(o.a,{fill:!0},r.a.createElement(S,null,r.a.createElement(s.a,{level:"3",margin:"none"},"My App"),r.a.createElement(d.a,{icon:r.a.createElement(b.a,null),onClick:function(){return l(!t)}})),r.a.createElement(o.a,{direction:"row",flex:!0,overflow:{horizontal:"hidden"}},r.a.createElement(o.a,{flex:!0,align:"center",justify:"center"},r.a.createElement(x,null)),t&&"small"===e?r.a.createElement(E.a,null,r.a.createElement(o.a,{background:"light-2",tag:"header",justify:"end",align:"center",direction:"row"},r.a.createElement(d.a,{icon:r.a.createElement(f.a,null),onClick:function(){return l(!1)}})),r.a.createElement(o.a,{fill:!0,background:"light-2",align:"center",justify:"center"},"sidebar")):r.a.createElement(g.a,{direction:"horizontal",open:t},r.a.createElement(o.a,{flex:!0,width:"medium",background:"light-2",elevation:"small",align:"center",justify:"center"},"sidebar"))))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.1ed711cc.chunk.js.map