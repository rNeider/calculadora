const pantalla = document.querySelector(".pantalla");// Selecciona el elemento HTML con la clase "pantalla" y lo almacena en la variable pantalla
const botones = document.querySelectorAll(".boton");

botones.forEach(boton =>{
    boton.addEventListener("click",()=>{ //Itera(repite) a través de todos los elementos en botones y agrega un evento de clic a cada uno
    
        const botonOn = boton.textContent; // Obtiene el contenido de texto del botón en el que se hizo clic y lo almacena en botonOn

        if(boton.id ==="limpiar"){  // Verifica si se hizo clic en el botón limpiar
            pantalla.textContent="0"; // Establece el contenido de la pantalla en 0
            return; // Sale de la función del evento clic
        }
        if (boton.id === "borrar"){ // Verifica si se hizo clic en el botón borrar
            if(pantalla.textContent.length===1 || pantalla.textContent==="¡ERROR!"){// Verifica si el contenido en la pantalla tiene solo un carácter o muestra un mensaje de error y al darle borra se pone la pantalla en 0
                pantalla.textContent="0"; // Establece el contenido de la pantalla en 0
            }else{
                pantalla.textContent=pantalla.textContent.slice(0,-1); // Elimina el ultimo caracter del contenido en la pantalla.
            }
            return; //Sale de la función del evento clic.
        }
        if (boton.id === "igual") {// Verifica si se hizo clic en el botón igual
            try { // Intenta evaluar la expresión matemática en la pantalla.
                const input = pantalla.textContent;
                if (input.includes('//')) {  // Si la expresión contiene // (división por cero) muestra un mensaje de error
                    pantalla.textContent = "¡ERROR!";  
                } else {
                    pantalla.textContent = eval(input); // Evalua la expresion y muestra el resultado en la pantalla
                }
            } catch {
                pantalla.textContent = "¡ERROR!"; // Si ocurre un error durante la evaluación muestra un mensaje de error
            }
        }

        if(boton.id ==="igual"){ //Si se hizo clic en el botón "=", se intenta evaluar la expresión
            try{
                pantalla.textContent=eval(pantalla.textContent); //Si la expresión es válida muestra el resultado en la pantalla
            }catch{
                pantalla.textContent="¡ERROR!"; // si ocurre un error durante la evaluacion muestre Error en pantalla
            }
            return;
        }

        if(pantalla.textContent === "0" || pantalla.textContent==="¡ERROR!"){  // Verifica si la pantalla muestra 0 o un mensaje de error
            pantalla.textContent= botonOn;  //agrega lo que contiene la constante botonON y lo pone en pantalla
        }else{
            pantalla.textContent+=botonOn; // si ya hay un elemento diferente a 0 se va a añadir el numero guardado en botonOn
        }
        
       
    })
})
