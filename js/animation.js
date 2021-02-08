// Overlay Animations
TweenMax.to(".first", 1, {
    delay: 0.1,
    top: '-100%',
    ease: Expo.easeInOut
});

TweenMax.to(".second", 1, {
    delay: 0.3,
    top: '-100%',
    ease: Expo.easeInOut
});

TweenMax.to(".third", 1, {
    delay: 0.5,
    top: '-100%',
    ease: Expo.easeInOut
});

// Header animations
TweenMax.from(".logo", 1, {
    delay: 1,
    y: '-100%',
    opacity: 0,
    ease: Expo.easeOut
});

TweenMax.from("nav", 1, {
    delay: 1.4,
    y: '-100%',
    opacity: 0,
    ease: Expo.easeOut
});

TweenMax.from(".basket", 1, {
    delay: 1.8,
    y: '-100%',
    opacity: 0,
    ease: Expo.easeOut
});

// Product animations
TweenMax.from(".product h1 .hide", 1, {
    delay: 2,
    y: '100%',
    opacity: 0,
    ease: Expo.easeOut
});

TweenMax.from(".product h3 .hide", 1, {
    delay: 2.4,
    y: '100%',
    opacity: 0,
    ease: Expo.easeOut
});

TweenMax.from(".product p .hide", 1, {
    delay: 3,
    y: '100%',
    opacity: 0,
    ease: Expo.easeOut
});

TweenMax.from(".product h2 .hide", 1, {
    delay: 2.8,
    y: '100%',
    opacity: 0,
    ease: Expo.easeOut
});

TweenMax.from(".btn", 1, {
    delay: 3,
    height: 0,
    ease: Expo.easeOut
});

// Product Display Animation
TweenMax.from(".backdrop", 1, {
    delay: 2,
    y: '100%',
    opacity: 0,
    ease: Expo.easeOut
});

TweenMax.from(".chips", 1.4, {
    delay: 2.8,
    x: '-100%',
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".ketchup", 1.5, {
    delay: 2.4,
    x: '100%',
    rotation: '100deg',
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".chilli", 1, {
    delay: 3.2,
    width: 0,
    opacity: 0,
    ease: Expo.easeOut
});

TweenMax.from(".doritos", 1, {
    delay: 3.2,
    y: '-100%',
    opacity: 0,
    ease: Expo.easeOut
});