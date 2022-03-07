$(function () {
    gsap.registerPlugin(ScrollTrigger);
    // 在此处使用了util中的toArray属性对列表数据进行遍历添加动画操作
    gsap.utils.toArray("section").forEach((section, i) => {
        section.bg = section.querySelector(".bg");
        // Give the backgrounds some random images
        section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;
        // Do the parallax effect on each section
        if (i) {
            // 动画效果是根据backgroundPostion属性来设置的,使用ScrollTrigger来监听滚动条,设置Y轴的偏移量来达到切换效果的
            section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;
            gsap.to(section.bg, {
                backgroundPosition: `50% ${innerHeight / 2}px`,
                ease: "none",
                duration: 3,
                scrollTrigger: {
                    trigger: section,
                    scrub: true
                }
            });
        }
        // the first image should be positioned against the top. Use px on the animating part to work with GSAP. 
        else {
            section.bg.style.backgroundPosition = "50% 0px";
            gsap.to(section.bg, {
                backgroundPosition: `50% ${innerHeight / 2}px`,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    // end: "bottom top",
                    scrub: true
                }
            });
        }
    });
})