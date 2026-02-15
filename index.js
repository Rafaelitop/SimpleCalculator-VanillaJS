document.addEventListener("DOMContentLoaded",()=>{


    console.log("Script cargado correctamente !!! ")


    var botones = document.querySelectorAll("button")

    var pantalla = document.querySelector(".screen")




    var expresion = ""


    //Evento listener en todos los botones

    botones.forEach((boton) =>{
        boton.addEventListener("click",()=>{

             let valor = boton.innerText

             let btnAudio =  new Audio("resources/button.mp3")
             btnAudio.play()

             
           
             if(valor === "x"){
                valor ="*"

             }else if(valor === "÷"){

                valor ="/"

             }

     

             if(valor === "AC"){

                
                expresion = "0"
                pantalla.innerText = expresion
                return

             }else if(valor === "DEL"){

               
                expresion = expresion.slice(0,-1)

                if (expresion === ""){
                    expresion = "0"
                   
                }

                 pantalla.innerText = expresion
                 return

             }


    

             if(valor === "="){
                try{

                    expresion =eval(expresion).toString()
                    pantalla.innerText = expresion

                }catch(err){
                    console.log(err)
                    
                    pantalla.innerText = "Syntax error"
                    expresion = ""
                    return

                }

                return;

             }


             if(expresion.length >=12){
                return;
             }

         
             if(expresion === "0"){
                
                expresion = ""
             }


             expresion += valor
             pantalla.innerText = expresion

            
        })


    })


   document.addEventListener("keydown",(e)=>{


         console.log("Has presionado la tecla: "+e.key)


         if(e.key === "Enter"){
            try{
               expresion =  eval(expresion).toString()
               pantalla.innerText =  expresion
               return

            }catch(e){
               console.log(e)
               expresion = ""
               pantalla.innerText = "Syntax error"
               return

            }
         }else if(e.key === "Backspace"){

            expresion = expresion.slice(0,-1)
            pantalla.innerText =  expresion
            return 


         }


         if(expresion === "0"){
            expresion = ""
         }


         let valor = e.key

   
         expresion += valor
         pantalla.innerText = expresion
         

      
    })


})