const e=document.querySelectorAll("button");let t;e[0].addEventListener("click",(function(){e[0].disabled=!0,e[1].disabled=!1,t=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e[1].addEventListener("click",(function(d){e[0].disabled=!1,e[1].disabled=!0,clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.160ae1c6.js.map
