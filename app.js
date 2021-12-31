// gsap.to('.text', { y: 100, opacity: 0, duration: 1 })
// gsap.fromTo('.text', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })

const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power1.out" } })

// The two animations below are chained one after the other with gsap timeline
tl.fromTo('.cookieContainer', { scale: 0 }, { scale: 1,  ease: "back.out(1.7)", duration: 1.5 })
tl.fromTo('.cookie', { opacity: 0, x: -50, rotation: '-60deg' }, { opacity: 1, x: 0, rotation: '0deg' }, '<50%') // '<50%' means this animation will run half way throught previous duration time
tl.fromTo('.text', { x:50, opacity: 0 }, { x: 0, opacity: 1 }, '<') //The '<' attribute syncs this animation to the previous

// Cookie jump
tl.fromTo('.cookie', { y: 0, rotation: '0deg' }, { y:-20, rotation: '-20deg', yoyo: true, repeat: -1 })
tl.fromTo('#crumbs', { y: 0 }, { y:-20, yoyo: true, repeat: -1 }, '<')


// Fading the cookie message out
const button = document.querySelector('button')
button.addEventListener('click', () => {
  gsap.to('.cookieContainer', { opacity: 0, y: 100, duration: 0.75, ease: "power1.out" })
})
