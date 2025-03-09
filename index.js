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
const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    document.getElementById("carForm").addEventListener("submit", async (e) => {
        e.preventDefault();

        const form = e.target;
        const data = {
            presupuesto: form.presupuesto.value,
            ciudad: form.ciudad.value,
            whatsapp: form.whatsapp.value,
            marca: form.marca.value,
            modelo: form.modelo.value,
            cilindraje: form.cilindraje.value,
            kilometraje: form.kilometraje.value,
            transmision: form.transmision.value,
            adicionales: form.adicionales.value
        };

        try {
            const docRef = await addDoc(collection(db, "formularios"), data);
            alert("Datos guardados con ID: " + docRef.id);
            form.reset();
        } catch (error) {
            console.error("Error al enviar datos:", error);
        }
    });
