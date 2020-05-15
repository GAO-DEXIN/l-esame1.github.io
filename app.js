const tweenLite = new TimelineLite({paused: true});

tweenLite
.to(
    '.firsttext', 1,
    {y: 30, opacity: 0},
)
.to(
    '.firstbeijing', 1,
    {opacity: 0},
    "-=1"
)
.to(
    '.syqleft', 1,
    {y: -220, opacity: 1},
    "-=0.9"
)
.to(
    '.syqcenter', 1,
    {y: -220, opacity: 0.2},
    "-=1"
)
.to(
    '.syqright', 1,
    {y: -220, opacity: 0.2},
    "-=1"
)
.to(
    '.textleft', 1,
    {y: -70, opacity: 1},
    "-=0.3"
)
.to(
    '.syqleft', 0.2,
    {opacity: 0.2},
)
.to(
    '.textleft', 0.2,
    {opacity: 0},
)
.to(
    '.syqcenter', 0.3,
    { opacity: 1},
)
.to(
    '.textcenter', 1,
    {y: -70, opacity: 1},
    "-=0.2"
)
.to(
    '.syqcenter', 0.3,
    { opacity: 0.2},
)
.to(
    '.textcenter', 0.2,
    {opacity: 0},
)
.to(
    '.syqright', 0.3,
    {opacity: 1},
)
.to(
    '.textright', 1,
    {y: -70, opacity: 1},
    "-=0.2"
)


$(document).ready(function(){
    const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 3000,
    triggerHook: 0
})
   .setTween(tweenLite)
   //.addIndicators()
   .setPin('.animation')
   .addTo(controller);
});




const tweenLite2 = new TimelineLite({paused: true});

tweenLite2
.to(
    '.syqzuo', 0.3,
    {y: 50, opacity: 0},
)
.to(
    '.syqyou', 0.3,
    {y: 50, opacity: 0},
    "-=0.3"
)
.to(
    '.syqduli', 0.01,
    {opacity: 1},
    "-=0.01"
)
.to(
    '.syqzhong', 0.3,
    {opacity: 0},
    
)

.to(
    '.syqduli', 1,
    {x: 520,y: -50,scale:1.3},
)
.to(
    '.beijingyou', 0.2,
    {opacity: 1},
    "-=0.1"
)
.to(
    '.beijingzhong', 0.5,
    {x: -50,opacity: 1},
)
.to(
    '.wenzi1', 0.5,
    {opacity: 1},
)
.to(
    '.wenzi2', 0.5,
    {opacity: 1},
    "-=0.3"
)
.to(
    '.beijingzuo', 0.5,
    {x: -50,opacity: 1},
)
.to(
    '.yuanquan', 0.5,
    {opacity: 0.95},
)
.to(
    '.nenglizhi', 1,
    {y: -7,scale: 5,opacity: 1},
)

$(document).ready(function(){
    const controller2 = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation1',
    duration: 3000,
    triggerHook: 0
})
   .setTween(tweenLite2)
   //.addIndicators()
   .setPin('.animation1')
   .addTo(controller2);
});







const tweenLite1 = new TimelineLite({paused: true});

tweenLite1
.to(
    '.jikechufa', 1,
    {scale: 50}
)
.to(
    '.gif1', 1,
    {opacity: 1},
    "-=1"
)
.to(
    '.jikechufa', 0.01,
    {opacity: 0}
)
.to(
    '.white', 0.7,
    {opacity: 0}
)
.to(
    '.white', 1,
    {opacity: 0.8}
)
.to(
    '.bengong', 1,
    {y: -50,opacity: 1}
)


$(document).ready(function(){
    const controller1 = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation2',
    duration: 2500,
    triggerHook: 0
})
   .setTween(tweenLite1)
   //.addIndicators()
   .setPin('.animation2')
   .addTo(controller1);
});