
let project2 = document.querySelector('#project2');

const tl = anime.timeline({
    direction: 'alternate',
    loop: true,
    duration: 500,
    autoplay: false,
    easing: 'spring'
})
tl
        .add({
        targets: '#el-1',
        scale: 1.5,
        })
        .add({
        targets: '#el-2',
        scale: 1.5,
        })
        .add({
        targets: '#el-3',
        scale: 1.5,
        })
        .add({
        targets: '#el-4',
        scale: 1.5,
        })

project2.addEventListener('click', function() {
    if (tl.paused === false) {
        tl.pause();
    } else {
        tl.play();
    }
})


