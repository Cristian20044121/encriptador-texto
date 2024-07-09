document.addEventListener("DOMContentLoaded", () => {
  /** 
   * Obtiene el elemento del textarea donde se ingresa el texto a encriptar.
   */
  const textValue = document.getElementById("text-encript");
  
  /** 
   * Obtiene el botón de encriptar.
   */
  const buttonEncriptar = document.getElementById("button-encript");
  
  /** 
   * Obtiene el botón de desencriptar.
   */
  const buttonDesencriptar = document.getElementById("button-desencriptar");
  
  /** 
   * Obtiene el contenedor donde se mostrará el texto encriptado o desencriptado.
   */
  const containerTextEncript = document.getElementById("container-text-encript");

  /** 
   * Array para almacenar los textos encriptados.
   */
  let textosEncriptados = [];

  /** 
   * Función para encriptar el texto.
   * @param {string} texto - El texto a encriptar.
   * @return {string} - El texto encriptado.
   */
  function encriptarTexto(texto) {
    return texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  }

  /** 
   * Función para desencriptar el texto.
   * @param {string} texto - El texto a desencriptar.
   * @return {string} - El texto desencriptado.
   */
  function desencriptarTexto(texto) {
    return texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  }

  /** 
   * Función para mostrar el resultado en el contenedor.
   * @param {string} texto - El texto a mostrar.
   * @param {string} titulo - El título que se mostrará sobre el texto.
   */
  function mostrarResultado(texto, titulo) {
    containerTextEncript.innerHTML = `
      <h2
        class="text-purple-700 font-bold text-2xl md:text-4xl text-center mt-5"
      >
        ${titulo}
      </h2>
      <textarea id="text-check" class="mt-5 w-full h-40 p-4 border border-gray-300 rounded-md mb-4">${texto}</textarea>
      <button id="button-copy" class="w-32 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Copiar</button>
    `;
  }

  /** 
   * Event listener para el evento de click en el contenedor para copiar el texto.
   */
  containerTextEncript.addEventListener("click", (event) => {
    if (event.target && event.target.id === "button-copy") {
      const textareaEncriptado = document.getElementById("text-check");
      textareaEncriptado.select();
      document.execCommand("copy");
    }
  });

  /** 
   * Event listener para el botón de encriptar.
   * Encripta el texto del textarea y lo almacena en el array.
   */
  buttonEncriptar.addEventListener("click", () => {
    const textoEncriptado = encriptarTexto(textValue.value);
    textosEncriptados.push(textoEncriptado);
    mostrarResultado(textoEncriptado, "Mensaje Encriptado");
    textValue.value = ""; // Limpiar el textarea después de encriptar
  });

  /** 
   * Event listener para el botón de desencriptar.
   * Desencripta el texto del array y lo muestra.
   */
  buttonDesencriptar.addEventListener("click", () => {
    if (textosEncriptados.length > 0) {
      const textoDesencriptado = desencriptarTexto(textosEncriptados.pop());
      mostrarResultado(textoDesencriptado, "Mensaje Desencriptado");
    } else {
      alert("No hay textos encriptados para desencriptar");
    }
  });
});
