let verMenu
 do{
    let ver = ("Menu Activado")

    console.log("Usted esta viendo el menú, ", "estado del menú: ", ver)
    verMenu = prompt("Desea cerrar el menú? 'si' o 'no'")

 }while(verMenu == 'no')
    console.log("Usted cerro el menú")

    

//Solución del profesor//
    console.log("MENU 1 / 2 / 3 / salir");

    opcion = ""
    do {
       let opcion = prompt("Elige una opcion entre (1,2,3,salir): ");
    
       if(opcion === "opcion1") {
       alert("Has elegido opcion 1") 
       }
       else if (opcion === "2") {
       alert("Has elegido opcion 2");
       }else if (opcion === "3") {
          alert("Has elegido opcion 3");
       }else if (opcion === "salir") {
          alert("Gracias por participar.");
          break;
       }
    } while (opcion !== "salir");
    console.log("Salir del menu")