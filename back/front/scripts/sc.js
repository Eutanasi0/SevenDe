const sr = ScrollReveal({
    distance:'65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.txt',{delay: 200, origin:'right'});
sr.reveal('.img',{delay: 200, origin:'left'});
sr.reveal('.slogan',{delay: 200, origin:'bottom'});
sr.reveal('#c1',{delay: 300, origin:'top'});
sr.reveal('#c2',{delay: 350, origin:'top'});
sr.reveal('#c3',{delay: 400, origin:'top'});