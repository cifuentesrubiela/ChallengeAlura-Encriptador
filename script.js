const tablaEncriptar = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
  };
  
  const tablaDesencriptar = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
  };
  
  
  
  function encriptar() {
    
    const obtiene_el_elemento_de_entrada_text = document.getElementById("text").value.toLowerCase();
    let almacenaResultadoCifrado = obtiene_el_elemento_de_entrada_text;
    for (let i = 0; i < Object.keys(tablaEncriptar).length; i++) {
          // Object.keys() es un método estático de JavaScript que devuelve 
          // un array de las propiedades (claves) de un objeto. 
          // Este método toma como argumento el objeto cuyas claves se 
          // desean obtener y devuelve un array de strings que representan las claves del objeto.
      const cifrar_la_palabra = Object.keys(tablaEncriptar)[i];
      const regex = new RegExp(cifrar_la_palabra, "g");
      //esta línea de código está creando una nueva expresión regular
      // y asignándola a la variable regex. La expresión regular se 
      //crea a partir del valor de la variable cifrar_la_palabra, y
      // se configura para buscar todas las ocurrencias en el texto, 
      //utilizando el modificador "global" g , que se utiliza para buscar 
      //todas las ocurrencias en el texto, en lugar de solo la primera.. 
      almacenaResultadoCifrado = almacenaResultadoCifrado.replace(regex, tablaEncriptar[cifrar_la_palabra]);
    }
    document.getElementById("texto-vacio").textContent = almacenaResultadoCifrado;
    document.getElementById("ningun-mensaje").textContent = "Texto encriptado";
  document.getElementById("copiar-codigo").style.display = "inline-block";
    muneco.style.display = "none";
  
  }
  
  
  function desencriptar() {
    
    const obtiene_el_elemento_de_entrada_text = document.getElementById("text").value.toLowerCase();
    let almacenaResultadoDesencriptado = obtiene_el_elemento_de_entrada_text;
    if (almacenaResultadoDesencriptado.match(/(enter|imes|ai|ober|ufat)/g)) {
      for (let i = 0; i < Object.keys(tablaDesencriptar).length; i++) {
        const patron_buscar_desencriptar = Object.keys(tablaDesencriptar)[i];
        const regex = new RegExp(patron_buscar_desencriptar, "g");
        almacenaResultadoDesencriptado = almacenaResultadoDesencriptado.replace(regex, tablaDesencriptar[patron_buscar_desencriptar]);
      }
      document.getElementById("ningun-mensaje").textContent = "Texto desencriptado";
    } else {
      document.getElementById("ningun-mensaje").textContent = "";
    }
    document.getElementById("texto-vacio").textContent = almacenaResultadoDesencriptado;
    document.getElementById("copiar-codigo").style.display = "inline-block";
    muneco.style.display = "none";
    
  }
  
  
  function copyCode() {
    const code = document.getElementById("texto-vacio").textContent;
    const ningunMensaje = document.getElementById("ningun-mensaje");
    const textoVacio = document.getElementById("texto-vacio");
   
    ningunMensaje.style.display = "none";
    textoVacio.style.display = "none";
   
    navigator.clipboard.writeText(code);
    alert("El código se ha copiado al portapapeles.");
    setTimeout(function() {
      location.reload();
    }, 250); 
    
  }