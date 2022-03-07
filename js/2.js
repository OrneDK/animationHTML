$(function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.timeline({
            scrollTrigger: {
                trigger: ".trigger",
                // 动画根据进度条的移动百分比来播放(数值越小越快)
                scrub: .5,
                // 增加/减少该数字控制钉住元素的时间
                anticipatePin: .1,
                // 解决使用 pin 时出现的填充(padding)问题
                pinSpacing: 'margin',
                // 钉住元素的位置
                pin: true,
                // toggleActions: 'restart',
                // 动画从初始值在哪个方位
                start: "top top",
                // 动画结束值在哪个位置
                end: "+=150%"
            }
        })
        .to(".box", {
            force3D: true,
            duration: 1,
            xPercent: 100,
            ease: "power1.inOut",
            stagger: {
                amount: 1
            }
        })
        .to(".box", {
            ease: "power1.out",
            duration: 1,
            rotation: "45deg"
        }, 0)
        .to(".box", {
            ease: "power1.in",
            duration: 1,
            rotation: "0deg"
        }, 1);

})