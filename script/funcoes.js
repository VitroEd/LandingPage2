//Instancia uma variável para manipular XML     
xmlhttp = new XMLHttpRequest();
//Ler o arquivo XML
xmlhttp.open("GET", "xml/xml.xml", false)
//Envia o arquivo para ser lido
xmlhttp.send();
//declarar o tipo de resposta para o navegador
xmlDoc = xmlhttp.responseXML;
//Organizando  os dados do xml em um vetor
x = xmlDoc.getElementsByTagName("postagem");


function funcaoConteudo() {
    for (n = 0; n < x.length; n++) {
        document.write("<div id='noticiaBloco'><img src='imgs/xml/" + x[n].getElementsByTagName("imagem")[0].childNodes[0].nodeValue + "'width='250'><div id='noticiaTexto'><div id='noticiaTitulo'><a href='postagem.html?posicao=" + n + "'>" + x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +
            "</a></div>" + x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0, 250) + "...</div></div>");
    }
}

function funcaoPostagem() {
    url = new URL(window.location.href);
    //posicao = 0
    parametro = url.searchParams;
    i = parametro.get("posicao");
    document.write("<div id='background-texto'><div id='postagemBloco'>" + "<div id='postagemTitulo'>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</div><div id='postagemContent'><img src='imgs/xml/" + x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue + "'width='500'>" +
        "<p>" + x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_2")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_3")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_4")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_5")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_6")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_7")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_8")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_9")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_10")[0].childNodes[0].nodeValue + "</p>" +
        "</div></div></div>");
}