var swiper = new Swiper(".mySwiperMain", {
    navigation: {
        nextEl: ".swiper-button-next-main",
        prevEl: ".swiper-button-prev-main",
    },
    cssMode: true,
    spacebetween: 150,
    pagination: {
        el: ".swiper-pagination-main",
        clickable:true,
    },
});

let modalAccount = document.querySelector('.modal-menu-account')
let btnAccount = document.querySelector('.btn-menu-account')
let closeAccount = document.querySelector('.modal-menu-account-close')


btnAccount.addEventListener('click', function (){
    modalAccount.style.display = 'flex'
})
closeAccount.addEventListener('click', function (){
    modalAccount.style.display = 'none'
})