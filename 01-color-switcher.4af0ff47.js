const t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};t.startBtn.addEventListener("click",(function(){e.start()})),t.stopBtn.addEventListener("click",(function(){e.stop()}));const e={intervalId:null,isActive:!1,start(){this.isActive||(this.isActive=!0,t.startBtn.disabled=!0,t.stopBtn.disabled=!1,this.intervalId=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,t.startBtn.disabled=!0}),1e3))},stop(){clearInterval(this.intervalId),this.isActive=!1,t.startBtn.disabled=!1,t.stopBtn.disabled=!0}};
//# sourceMappingURL=01-color-switcher.4af0ff47.js.map
