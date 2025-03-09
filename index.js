let nextSlide=document.querySelectorAll(".nextSlide");
let contador=1;
let slider=document.querySelector(".slider");
for(let i=0; i<nextSlide.length; i++){
    nextSlide[i].addEventListener("click",()=>{
        slider.style.transition=`1s`;
        slider.style.transform=`translateX(${-contador*100}%)`;
        contador++;
        console.log(contador);
        if(contador==4){
            setTimeout(() => {
                for(let j=0; j<nextSlide.length; j++){
                    nextSlide[j].style.display="none";
                    document.documentElement.style.overflowY = "visible";
                    document.body.style.overflowY = "visible";
    
                }
            }, 1000);
        }
    })
}

