
const parallax = document.getElementById("parallax") ;

window.addEventListener("scroll", ()=>{
    let offset = window.pageYOffset ; 
    // it's not depreceated, it's just showing the warning xd
    parallax.style.backgroundPositionY = offset*0.7 + "px" ;
})