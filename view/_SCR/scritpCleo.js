
var r = document.querySelector(':root');
var nextOrRet = 0;
$(document).ready(function () {
    
    r.style.setProperty('--overflow', 'hidden');
    timeFunc();
    $("#textPortifolio").click(function () {
        if (nextOrRet == 0) {
            func(0);
            nextOrRet = 1;
        }
    });

    $("#b2").click(function () {
        r.style.setProperty('--overflow', 'hidden');
        func(1);
        nextOrRet = 0;
    });

    $("#cpp").click(function () {
        document.querySelector('#tituloHabili').textContent = "C/C++";
        document.querySelector('#textHabili').textContent = "   C++ é uma linguagem de programação compilada multi-paradigma e de uso geral. Desde os anos 1990 é uma das linguagens comerciais mais populares, sendo bastante usada também na academia por seu grande desempenho e base de utilizadores.   As linguagens de programação usadas nos microcontroladores são as mais comuns como C, C++. Normalmente para se trabalhar com a programação são usados interpretadores e compiladores.";
    });
    
    $("#java").click(function () {
        document.querySelector('#tituloHabili').textContent = "Java";
        document.querySelector('#textHabili').textContent = "   Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems, que em 2008 foi adquirido pela empresa Oracle Corporation. Diferente das linguagens de programação modernas, que são compiladas para código nativo, Java é compilada para um bytecode que é interpretado por uma máquina virtual (Java Virtual Machine). A linguagem de programação Java é a linguagem convencional da Plataforma Java, mas não é a sua única linguagem. A J2ME é utilizada em jogos de computador, celular, calculadoras, ou até mesmo o rádio do carro.";
    });

    $("#python").click(function () {
        document.querySelector('#tituloHabili').textContent = "Python";
        document.querySelector('#textHabili').textContent = "   Python é uma linguagem de propósito geral de alto nível, multiparadigma, suporta o paradigma orientado a objetos, imperativo, funcional e procedural. Possui tipagem dinâmica e uma de suas principais características é permitir a fácil leitura do código e exigir poucas linhas de código se comparado ao mesmo programa em outras linguagens. Devido às suas características, ela é utilizada, principalmente, para processamento de textos, dados científicos e criação de CGIs para páginas dinâmicas para a web. Foi considerada pelo público a 3ª linguagem mais amada, de acordo com uma pesquisa conduzida pelo site Stack Overflow em 2018 e está entre as 5 linguagens mais populares, de acordo com uma pesquisa conduzida pela RedMonk.";
    });
    
    $("#javaS").click(function () {
        document.querySelector('#tituloHabili').textContent = "JavaScript";
        document.querySelector('#textHabili').textContent = "   JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa(Inclusive este site), e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo.  É atualmente a principal linguagem para programação client-side em navegadores web. É também bastante utilizada do lado do servidor através de ambientes como o node.js.";
    });
    
    $("#html").click(function () {
        document.querySelector('#tituloHabili').textContent = "HTML";
        document.querySelector('#textHabili').textContent = "   HTML (abreviação para a expressão inglesa HyperText Markup Language, que significa: Linguagem de Marcação de Hipertexto) é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML.";
    });

    $("#css").click(function () {
        document.querySelector('#tituloHabili').textContent = "CSS";
        document.querySelector('#textHabili').textContent = "   Cascading Style Sheets (CSS) é um mecanismo para adicionar estilo (cores, fontes, espaçamento, etc.) a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos. Assim, quando se quiser alterar a aparência dos documentos vinculados a este arquivo CSS, basta modifica-lo.";
    });
    
    $("#node").click(function () {
        document.querySelector('#tituloHabili').textContent = "Node.js";
        document.querySelector('#textHabili').textContent = "   Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. O código de nodejs é baseado na arquitetura event-driven, capaz de entrada/saída assíncrona. Otimizado para ser corrido em tempo real tratando-se também de um ditribuído.";
    });

    $("#arduino").click(function () {
        document.querySelector('#tituloHabili').textContent = "Arduino e Microcontroladores";
        document.querySelector('#textHabili').textContent = "   Arduino é uma plataforma de prototipagem eletrônica de hardware livre e de placa única, projetada com um microcontrolador Atmel AVR com suporte de entrada/saída embutido, uma linguagem de programação padrão, a qual tem origem em Wiring, e é essencialmente C/C++. O objetivo do projeto é criar ferramentas que são acessíveis, com baixo custo, flexíveis e fáceis de se usar por principiantes e profissionais. Microcontroladores são usados em produtos e dispositivos automatizados, como os sistemas de controle de automóvel, dispositivos médicos implantáveis, controles remotos, máquinas de escritório, eletrodomésticos, ferramentas elétricas, brinquedos e outros sistemas embarcados.";
    });
});

async function func(dire) {
    if (dire == 0) {
        r.style.setProperty('--backGroundInit', 'url(\'/IMG?img=bbg.jpg\')');
        r.style.setProperty('--overflow', 'scroll');
    } else {
        r.style.setProperty('--backGroundInit', 'url(\'/IMG?img=siteBackGround.jpg\')');
        r.style.setProperty('--overflow', 'hidden');
    }

}
async function timeFunc() {
    var dataAtual = new Date();
    var horas = dataAtual.getHours();
    if (horas >= 6 && horas < 12) {
        document.querySelector('#time').textContent = "Bom Dia";
        console.log("bomDia");
    } else if (horas >= 12 && horas < 19) {
        document.querySelector('#time').textContent = "Boa Tarde";
        console.log("boaTarde");
    } else {
        document.querySelector('#time').textContent = "Boa Noite";
        console.log("boaNoite");
    }
    
    var posicaoScroll = $(document).scrollLeft();
    if (posicaoScroll > 0) {
        r.style.setProperty('--overflow', 'scroll');
        func(0);
        nextOrRet = 1;
    }
}
setInterval(timeFunc, 30000);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
