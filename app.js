const textInput = document.querySelector(".input");
const textOutput = document.querySelector(".output");
const btnCript = document.querySelector(".quadro__Esquerda__Botoes button#cript");
const btnDecript = document.querySelector(".quadro__Esquerda__Botoes button#decript");
const btnCopy = document.querySelector(".quadro__Direita button#copy");
const btnTransfer = document.querySelector(".quadro__Direita button#transfer");


const handleCriptText = e => {
    let textToCript = criptText(textInput.value);
    textOutput.value = textToCript;
}

const handleDecriptText = e => {
    let textToDecript = criptText(textInput.value, false);
    textOutput.value = textToDecript;
}

function copyText() {
    let textToCopy = textOutput.value;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            textOutput.value = ""
        })
        .catch(() => {
            alert ("Não foi possivel copiar o texto");
        })
}

function transferText() {
    textInput.value = textOutput.value;
}

const criptText= (text, cript = true) => {
    let result = text;
    if(cript){
        result = result.replace("e","enter")
            .replace("i","imes")
            .replace("a","ai")
            .replace("o","ober")
            .replace("u","ufat")
    }else{
        result = result.replace("enter","e")
        .replace("imes","i")
        .replace("ai","a")
        .replace("ober","o")
        .replace("ufat","u")
    }
    return result;
}

btnCript.addEventListener("click", handleCriptText);
btnDecript.addEventListener("click", handleDecriptText);
btnCopy.addEventListener("click", copyText)
btnTransfer.addEventListener("click", transferText);