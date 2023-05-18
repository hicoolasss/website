const tween = KUTE.fromTo(
    '#blob1',
    { path: '#blob1' },
    { path: '#blob2' },
    { repeat: 999, duration: 2500, yoyo: true }
).start();

const tweens = KUTE.fromTo(
    '#blob3',
    { path: '#blob3' },
    { path: '#blob4' },
    { repeat: 999, duration: 2500, yoyo: true }
).start();


// var wholeAnimation = KUTE.fromTo(
//     "#icon",
//     { draw: "0% 0%" },
//     { draw: "0% 100%" },
//     { duration: 10000}
// );