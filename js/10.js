$(function () {
    gsap.registerPlugin(ScrollTrigger);

    const textTitles = [...document.querySelectorAll("h1")];
    console.log(textTitles);

    gsap.timeline({
        scrollTrigger: {
            trigger: ".phone",
            start: "center center",
            end: "center 60%",
            endTrigger: ".text__last",
            pinSpacing: true,
            pin: true
        }
    });

    textTitles.forEach((title, i) => {
        gsap.to(title, {
            opacity: 1,
            scrollTrigger: {
                trigger: title,
                start: "top 60%",
                end: "top 10%",
                end: "+=100%",
                scrub: .5,
                toggleClass: {
                    targets: ".phone",
                    className: `phone${i - 1}`
                }
            }
        });
    });

})