function alertia(t,a,n){if(function(t){"string"!=typeof t&&(t=JSON.stringify(t));try{return JSON.parse(t),!0}catch(t){return!1}}(t)){var i=t.msg,e=(a=t.type,t.style);n=t.time,t=i}if($("#alert").hide(),!e)e="slidein";switch(a){case"danger":bg="#ED5565",mbg="#DA4453",svg='<svg fill="#fff" width="28" height="28" viewBox="0 0 24 24"> <path d="M12,0A12,12 0 0,1 24,12A12,12 0 0,1 12,24A12,12 0 0,1 0,12A12,12 0 0,1 12,0M12,2A10,10 0 0,0 2,12C2,14.4 2.85,16.6 4.26,18.33L18.33,4.26C16.6,2.85 14.4,2 12,2M12,22A10,10 0 0,0 22,12C22,9.6 21.15,7.4 19.74,5.67L5.67,19.74C7.4,21.15 9.6,22 12,22Z" /> </svg>';break;case"normal":bg="#4FC1E9",mbg="#3BAFDA",svg='<svg  fill="#fff" width="28" height="28" viewBox="0 0 24 24"> <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" /> </svg>';break;case"success":bg="#48CFAD",mbg="#37BC9B",svg='<svg fill="#fff" width="28" height="28" viewBox="0 0 24 24"> <path d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z" /> </svg>';break;default:bg="#48CFAD",mbg="#37BC9B",svg=""}var r=document.createElement("div");r.id="alert",r.innerHTML='\n        <style>\n            @import url(https://fonts.googleapis.com/css?family=Raleway:400,400i,700);#alert{width:60%;padding:20px;left:10%;right:10%;border-radius:15px;z-index:999;position:fixed;margin:auto;top:40px;color:#fff;font-family:Raleway;border-radius:15px;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);display:flex;flex-direction:column;background:#ed5565}#alertmsg{display:block;margin:auto;font-size:20px;position:center;color:#fff;text-align:center;font-family:Raleway,sans-serif;font-weight:900;-webkit-animation:fade-in-bck 4s cubic-bezier(.39,.575,.565,1) both;animation:fade-in-bck 4s cubic-bezier(.39,.575,.565,1) both}#alertiacancelbtn{background:0 0;border:none;border-radius:15px;background:#da4453;display:block;width:50%;padding:5px;color:#fff;font-family:Raleway;font-size:16px;font-weight:400;margin:auto;margin-top:10px;outline:0;user-select:none}#alertiaicon{display:grid;font-size:18px}#alertiacancelbtn span{vertical-align:middle;position:center;display:flex;margin:auto;text-align:center}@-webkit-keyframes fade-in-bck{0%{-webkit-transform:translateZ(80px);transform:translateZ(80px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes fade-in-bck{0%{-webkit-transform:translateZ(80px);transform:translateZ(80px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}.slidein{-webkit-animation:slide-in-top 1.5s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-top 1.5s cubic-bezier(.25,.46,.45,.94) both}@-webkit-keyframes slide-in-top{0%{-webkit-transform:translateY(-1000px);transform:translateY(-1000px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slide-in-top{0%{-webkit-transform:translateY(-1000px);transform:translateY(-1000px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}.fade{-webkit-animation:fade-in-fwd .6s cubic-bezier(.39,.575,.565,1) both;animation:fade-in-fwd .6s cubic-bezier(.39,.575,.565,1) both}@-webkit-keyframes fade-in-fwd{0%{-webkit-transform:translateZ(-80px);transform:translateZ(-80px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes fade-in-fwd{0%{-webkit-transform:translateZ(-80px);transform:translateZ(-80px);opacity:0}100%{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}.swirl{-webkit-animation:swirl-in-fwd .6s ease-out both;animation:swirl-in-fwd .6s ease-out both}@-webkit-keyframes swirl-in-fwd{0%{-webkit-transform:rotate(-540deg) scale(0);transform:rotate(-540deg) scale(0);opacity:0}100%{-webkit-transform:rotate(0) scale(1);transform:rotate(0) scale(1);opacity:1}}@keyframes swirl-in-fwd{0%{-webkit-transform:rotate(-540deg) scale(0);transform:rotate(-540deg) scale(0);opacity:0}100%{-webkit-transform:rotate(0) scale(1);transform:rotate(0) scale(1);opacity:1}}.slit{-webkit-animation:slit-in-horizontal .45s ease-out both;animation:slit-in-horizontal .45s ease-out both}@-webkit-keyframes slit-in-horizontal{0%{-webkit-transform:translateZ(-800px) rotateX(90deg);transform:translateZ(-800px) rotateX(90deg);opacity:0}54%{-webkit-transform:translateZ(-160px) rotateX(87deg);transform:translateZ(-160px) rotateX(87deg);opacity:1}100%{-webkit-transform:translateZ(0) rotateX(0);transform:translateZ(0) rotateX(0)}}@keyframes slit-in-horizontal{0%{-webkit-transform:translateZ(-800px) rotateX(90deg);transform:translateZ(-800px) rotateX(90deg);opacity:0}54%{-webkit-transform:translateZ(-160px) rotateX(87deg);transform:translateZ(-160px) rotateX(87deg);opacity:1}100%{-webkit-transform:translateZ(0) rotateX(0);transform:translateZ(0) rotateX(0)}}.roll{-webkit-animation:roll-in-top .6s ease-out both;animation:roll-in-top .6s ease-out both}@-webkit-keyframes roll-in-top{0%{-webkit-transform:translateY(-800px) rotate(-540deg);transform:translateY(-800px) rotate(-540deg);opacity:0}100%{-webkit-transform:translateY(0) rotate(0);transform:translateY(0) rotate(0);opacity:1}}@keyframes roll-in-top{0%{-webkit-transform:translateY(-800px) rotate(-540deg);transform:translateY(-800px) rotate(-540deg);opacity:0}100%{-webkit-transform:translateY(0) rotate(0);transform:translateY(0) rotate(0);opacity:1}}.bounce{-webkit-animation:bounce-in-top 1.1s both;animation:bounce-in-top 1.1s both}@-webkit-keyframes bounce-in-top{0%{-webkit-transform:translateY(-500px);transform:translateY(-500px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}38%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1}55%{-webkit-transform:translateY(-65px);transform:translateY(-65px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}72%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}81%{-webkit-transform:translateY(-28px);transform:translateY(-28px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}90%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}95%{-webkit-transform:translateY(-8px);transform:translateY(-8px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}@keyframes bounce-in-top{0%{-webkit-transform:translateY(-500px);transform:translateY(-500px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}38%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1}55%{-webkit-transform:translateY(-65px);transform:translateY(-65px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}72%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}81%{-webkit-transform:translateY(-28px);transform:translateY(-28px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}90%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}95%{-webkit-transform:translateY(-8px);transform:translateY(-8px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}#trigger{margin:auto;width:50%;display:block;padding:10px;border-radius:10px;border:none;color:#fff;background-color:#000;outline:0}\n        </style>\n        <div id="alertiaicon"></div>\n        <p id="alertmsg"></p>\n        <button id="alertiacancelbtn" onclick="cloe(\'alert\')"><svg fill="#fff" width="25" height="25" viewBox="0 0 24 24"> <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z" /></svg></button>',$("body").prepend(r),n?($("#alertiacancelbtn").hide(),setInterval(function(){$("#alert").slideUp()},n)):$("#alertiacancelbtn").css({background:mbg}),$("#alertmsg").text(t),$("#alert").addClass(e),$("#alert").css({display:"flex",background:bg}),$("#alertiaicon").html(svg)}function cloe(t){$("#"+t).slideUp()}!function(){var t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js",document.head.prepend(t)}();
