$(function () {
    gsap.registerPlugin(ScrollTrigger);
    const quoteText = document.querySelectorAll('.quote p');    
    gsap.set(quoteText, {autoAlpha: 0});
    gsap.to('.overlay', {
      duration: 1,
    //  通过修改svg的scale值和alpha值来达到放大后展现的效果
      scale: 10,
      autoAlpha: 0,
      ease: 'power2.in',
      scrollTrigger: {
        trigger: '#container',
        start: 'top top',
        end: '+=250%',
        anticipatePin: true,
        pin: true,
        scrub: true,
      }
    });
    gsap.fromTo(quoteText, { autoAlpha: 0 },{
      duration: 3,
      autoAlpha: 1,
      stagger: {
        amount: 1
      },
      ease: 'expo.inOut',
      scrollTrigger: {
        trigger: '.quote',
        start: 'bottom top',
        end: '+=1500',
        scrub: true,
      }
    });
    
    /* Copyright (c) 2020 by Craig Roblewsky (https://codepen.io/PointC/pen/KRWgOK) for code used below */
    //const svg = document.querySelector("#overlay");
    const ratio = 0.5625;
    function newSize() {
      let w = window.innerWidth;
      let h = window.innerHeight;
      if (w > h * (16 / 9)) {
        gsap.set("#pin-overlay", { attr: { width: w, height: w * ratio } });
      } else {
        gsap.set("#pin-overlay", { attr: { width: h / ratio, height: h } });
      }
      //let data = svg.getBoundingClientRect();
      //gsap.set("#overlay", {x:w/2 - data.width/2});
      //gsap.set("#overlay", {y:h/2 - data.height/2});
    }
    
    newSize();
    // window.addEventListener("resize", newSize);

})