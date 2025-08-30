const mobileBtn=document.querySelector("#btn");
const mobileMenu=document.querySelector("#mobile-menu");
const menuLinks = mobileMenu.querySelectorAll("a");
mobileBtn.addEventListener('click',function(){
mobileMenu.classList.toggle('hidden');

});
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});