const hamburger = document.getElementById('hamburger')
const navUl = document.getElementById('nav-ul')

hamburger.addEventListener('click', () => {
 navUl.classList.toggle('show')
})

const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
 const [entry] = entries;
 // console.log(entry);

 if (!entry.isIntersecting) nav.classList.add('sticky');
 else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
 root: null,
 threshold: 0,
 rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);