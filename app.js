const themeToggler = document.querySelector(".light-and-dark");


themeToggler.addEventListener('click', ()=> {
    document.body.classList.toggle('darknot');

    themeToggler.querySelector('light-and-dark-img:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('light-and-dark-img:nth-child(2)').classList.toggle('active');
})
function myFunction(){
    var x = document.getElementById("myDIV");
    if (x.style.display === "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
}