
// initial to final
// gsap.to("#box1",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"gray",
//     scale:0.5
// })

// gsap.to("#box2",{
//     x:1000,
//     duration:2,
//     delay:2,
//     rotate:360,
//     backgroundColor:"orange",
//     scale:0.5
// })

// gsap.to("#box3",{
//     x:1000,
//     duration:2,
//     delay:3,
//     rotate:360,
//     backgroundColor:"blue",
//     scale:0.5
// })

//final to initial
// gsap.from("#box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"gray"
// })


var t1 = gsap.timeline()
t1.from("#nav h3" , {
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:0.3
})

t1. from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.4
})
t1.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.5
})