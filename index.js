document.addEventListener("DOMContentLoaded",()=>{


    console.log("Script cargado correctamente !!! ")


    var botones = document.querySelectorAll("button")

    var pantalla = document.querySelector(".screen")




    var expresion = ""


    //Evento listener en todos los botones

    botones.forEach((boton) =>{
        boton.addEventListener("click",()=>{

             let valor = boton.innerText

             
           
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


})