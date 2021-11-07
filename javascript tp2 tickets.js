var Total = 0;
const StudentDiscount = 0.8;
const TraineeDiscount = 0.5;
const JuniorDiscount = 0.15;
const RegularPrice = 200;

function precioFinal()
{
    var Tickets = document.getElementById("cantidad").value*1;
    var temp = document.getElementById("categoria");
    var Category = temp.options[temp.selectedIndex].value;

    switch (Category)
    {
        case ("1"):
        {
            Discount = JuniorDiscount;
            break;
        }
        case ("2"):
        {
            Discount = TraineeDiscount;
            break;
        }
        case ("3"):
        {
            Discount = StudentDiscount;
            break;
        }
        default:
        {
            Discount = 0.0;
            break;
        }
    }

    Total = (RegularPrice - (RegularPrice * Discount)) * Tickets
    document.getElementById("ImporteAPagar",).innerHTML = Total;

}



/*const valorTicket = 200;s

function precioFinal(){
var cantidad =  document.getElementById ("cantidad").value;
var categoria = document.getElementById ("categoria").value;
var categoria=parseInt(categoria.options[categoria.selectedIndex].value);
    

        if (sinDescuento.selectedIndex){
        categoria = 1;

        }
        else if (estudiante.selectedIndex){
        categoria = 0.2;

        }
        else if(trainee.selectedIndex) {
        categoria = 0.5;
        }
        else if(junior.selectedIndex){
          categoria = 0.8;
        }
var descuento = categoria*cantidad;
var final;
final = valorTicket * cantidad - descuento * cantidad;

alert ("El valor total de la compra es de $" + final + " por " + cantidad + " de entradas");
final.innerHTML= final;
}*/



    /*switch{
        case 1:
            break;   
        case 2:
            break;    
        case 3:
            break;
        case 4:
            break;
    }
    alert("El importe  pagar es de: $" + final);
    }*/


 /* function resumen()
{
    var cat = document.getElementById("categoria").value;

    var cant = document.getElementById("cantidad").value;
    
    var precioticket = 200

    var uno = 0.2
    
    var dos = 0.5

    var tres = 0.85 

    if(cat == 1) 
    {
        var resultado = (precioticket * cant * uno);
    }

    else if (cat == 2)
    {
        var resultado = (precioticket*cant*dos);
    } 
    else
    {
        var resultado = (precioticket*cant*tres);
    } 

    document.getElementById("total").innerHTML = resultado;} */ 