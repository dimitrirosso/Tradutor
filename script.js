
/*https://api.mymemory.translated.net/get?q=*/

/*Hello World!*/

/*&langpair=pt-BR|en*/

let texto = document.querySelector(".input-texto")
let traducao = document.querySelector(".traducao")
let idioma = document.querySelector(".idioma")

async function traduzir(){

    let endereco = "https://api.mymemory.translated.net/get?q=" + texto.value + "&langpair=pt-BR|" + idioma.value;

    let resposta = await fetch(endereco);

    let dados = await resposta.json();
    traducao.innerHTML = dados.responseData.translatedText

    if(texto.value === ""){
        traducao.innerHTML = "ERRO..."
    }

}


function Ouvirvoz(){
    let voz = window.webkitSpeechRecognition;

    let reconhecimentoVoz = new voz();
    reconhecimentoVoz.lang = "pt-BR";

    reconhecimentoVoz.onresult = (evento) => {
        let TextoTraduzido = evento.results[0][0].transcript;

        texto.innerHTML = TextoTraduzido;
        traduzir()

    }

    reconhecimentoVoz.start();


}


