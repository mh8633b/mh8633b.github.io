const menuBtn = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu-bar');
const menuList = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', showMenu);

function showMenu(){
    menuBtn.classList.toggle('is-active');
    menuBar.classList.toggle('is-active');
    menuList.classList.toggle('is-active');
}


// document.getElementById('viewMoreBtn').addEventListener('click', function() {
//     var moreProjects = document.getElementById('moreProjects');

//     if (moreProjects.style.display === 'none') {
//         moreProjects.style.display = 'block';
//         this.textContent = 'View Less';
//     } else {
//         moreProjects.style.display = 'none';
//         this.textContent = 'View More';
//     }
// });



document.getElementById('viewMoreBtn').addEventListener('click', function() {
    var moreProjects = document.getElementById('moreProjects');

    if (moreProjects.style.display === 'none') {
        moreProjects.style.display = 'block';
        this.textContent = 'View Less';
    } else {
        moreProjects.style.display = 'none';
        this.textContent = 'View More';
    }
});