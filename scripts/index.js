var s=document.querySelector(".main-nav"),e=document.querySelector(".burger-toggle");s.classList.remove("main-nav--nojs");e.classList.remove("burger-toggle--nojs");e.classList.remove("burger-toggle--opened");e.addEventListener("click",()=>{s.classList.contains("main-nav--closed")?(s.classList.remove("main-nav--closed"),s.classList.add("main-nav--opened")):(s.classList.add("main-nav--closed"),s.classList.remove("main-nav--opened"))});e.addEventListener("click",()=>{e.classList.contains("burger-toggle--closed")?(e.classList.remove("burger-toggle--closed"),e.classList.add("burger-toggle--opened")):(e.classList.add("burger-toggle--closed"),e.classList.remove("burger-toggle--opened"))});
