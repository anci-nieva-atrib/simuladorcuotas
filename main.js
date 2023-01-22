console.log("Mensaje de prueba")


let nombre = prompt("Ingrese su nombre");
alert(`¡Bienvenidx ${nombre}! ¡Empecemos a jugar!`);


let letra = prompt("Ingresá una letra en MAYÚSCULA");
        while(letra != "abc"){
            switch (letra) {
                case "A":
                    console.log(`Ingresaste ${letra} y es correcta!`);
                    break;
                case "V":
                    console.log(`Ingresaste ${letra} y es correcta!`);
                    break;
                case "S":
                    console.log(`Ingresaste ${letra} y es correcta!`);
                    break;
                case "C":
                    console.log(`Ingresaste ${letra} y es correcta!`);
                    break;
                case "R":
                    console.log(`Ingresaste ${letra} y es correcta!`);
                    break;
                case "I":
                    console.log(`Ingresaste ${letra} y es correcta!`);
                    break;
                case "P":
                    console.log(`Ingresaste ${letra} y es correcta!`);
                    break;
                case "T":
                    console.log(`Ingresaste ${letra} y es correcta!`);
                    break;
                default:
                    alert(`La letra "${letra}" no está en la palabra o está en minúscula. Intentá nuevamente!`)
                    break;
            }letra = prompt("Ingresá una letra en MAYÚSCULA");



        } if((letra=="A") && (letra=="V") && (letra=="S") && (letra=="C") && (letra=="R") && (letra=="I") && (letra=="P") && (letra=="T")){
                let palabra = prompt("Encontraste todas las letras, ahora adiviná la palabra!");


                while(palabra != "end"){
                    switch(palabra){
                        case "Javascript":
                            console.log(`Felicitaciones, adivinaste la palabra. Ésta era: ${palabra}`);
                            break;
                        
                        case "javascript":
                            console.log(`Felicitaciones, adivinaste la palabra. Ésta era: ${palabra}`);
                            break;

                        case "JAVASCRIPT":
                            console.log(`Felicitaciones, adivinaste la palabra. Ésta era: ${palabra}`);
                            break;

                        case "JavaScript":
                            console.log(`Felicitaciones, adivinaste la palabra. Ésta era: ${palabra}`);
                            break;
                        
                        default:
                            alert("La palabra es incorrecta, volvé a intentarlo!");
                    
                    }palabra = prompt("Encontraste todas las letras, ahora adiviná la palabra!");
                }
            }

        
            










