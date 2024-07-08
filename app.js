document.addEventListener("DOMContentLoaded", () => {
  const textValue = document.getElementById("text-encript");
  const buttonEncriptar = document.getElementById("button-encript");
  const buttonDesencriptar = document.getElementById("button-desencriptar");
  const containerTextEncript = document.getElementById(
    "container-text-encript"
  );

  function encriptarTexto(texto) {
    return texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  }

  function desencriptarTexto(texto) {
    return texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  }

  function mostrarResultado(texto) {
    containerTextEncript.innerHTML = `
        <textarea id="text-encript-check" class="w-full h-40 p-4 border border-gray-300 rounded-md mb-4">${texto}</textarea>
        <button id="button-copy" class="w-32 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Copiar</button>
      `;
  }

  containerTextEncript.addEventListener("click", (event) => {
    if (event.target && event.target.id === "button-copy") {
      const textareaEncriptado = document.getElementById("text-encript-check");
      textareaEncriptado.select();
      document.execCommand("copy");
    }
  });

  buttonEncriptar.addEventListener("click", () => {
    const textoEncriptado = encriptarTexto(textValue.value);
    mostrarResultado(textoEncriptado);
  });

  buttonDesencriptar.addEventListener("click", () => {
    // textValue.value = "";
    const textoDesencriptado = desencriptarTexto(textValue.value);
    console.log(mostrarResultado(textoDesencriptado));
    textValue.value = textoDesencriptado.desencriptarTexto;
    console.log(textoDesencriptado); // Log the decrypted text
  });
});
