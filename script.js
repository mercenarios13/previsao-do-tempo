const key = "5627c578b85e4022fcddd89adefdd8db";

function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = "https://portalamirt.com.br/wp-content/uploads/2023/11/PREVISAO-DO-TEMPO-4.png" + dados.weather[0].icon + ".png";
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
        .then(resposta => resposta.json());

    colocarDadosNaTela(dados);
}

function cliqueiNoBotao() {
    const cidade = document.querySelector("#cidade-input").value;
    if (cidade) {
        buscarCidade(cidade);
    } else {
        alert("Por favor, insira o nome de uma cidade.");
    }
}
