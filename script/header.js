window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>0);
})
document.querySelector('nav ul li a[href="index.html"]').addEventListener('click', function(e) {
    if (window.location.pathname.includes('index.html')) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        window.location.href = 'index.html';
    }
});
document.querySelector('nav ul li a[href="contacto.html"]').addEventListener('click', function(e) {
    if (window.location.pathname.includes('index.html')) {
        e.preventDefault();
        document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' });
    } else {
        window.location.href = 'index.html#contacto';
    }
});
