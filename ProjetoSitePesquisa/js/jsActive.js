

/*Variavel que recebe atributos dos inuts*/
var atri = "";
/*Variaveis que recebem os valores separados de cada pergunta que ao final são acumuladas no total*/
var exe = 0;
var razo = 0;
var ruim = 0;
var semOp = 0;
var exe1 = [0,0,0,0,0,0];
var razo1 = [0,0,0,0,0,0];
var ruim1 = [0,0,0,0,0,0];
var semOp1 = [0,0,0,0,0,0];

var total = 0;
/*variavel que só armazerna texto, ela é usada nos avisos para que o usuario saiba qual questão falta responder*/
var texto = "\n";

/*Aqui são as flags de pergunta respondida ou não respondida, usada como controle apra que não seja respondido a mesma pergunta duas vezes seguidas*/
var flagResp1 = false;
var flagResp2 = false;
var flagResp3 = false;
var flagResp4 = false;
var flagResp5 = false;
var flagResp6 = false;

/*Esta função é o que determina o que deve aparecer quando a tag <Body> for totalemnte carregada.
 * cada um desses documents representa uma DIV inteira ou seja um bloco com todas as perguntas e textos e o que mais tiver
 * dentro dessa DIV, ela nã ofaz mais nada, qaundo a dasboar for adicionada essa função deve conter a DIV da dashboar marcada como none
 * para que só seja revelada qaundo o usuario tiver o minimo de pontos para avançar (No nosso caso são 6 questoes então são 6 pontos*/
function carregamento() {


    document.getElementById('menu').style.display = 'block';
    document.getElementById('opt0').style.display = 'block';
    document.getElementById('opt1').style.display = 'none';
    document.getElementById('opt2').style.display = 'none';
    document.getElementById('opt3').style.display = 'none';
    document.getElementById('opt4').style.display = 'none';
    document.getElementById('opt5').style.display = 'none';
    document.getElementById('opt6').style.display = 'none';
    document.getElementById('Dash').style.display = 'none';
}


/*Esta função é o botão de enviar, ela não faz nada de mais, ela só esconde todas as divs de perguntas (Menos o menu)
 * e avisa o usuario quias das questoes não foram respondidas, caso tenha alguma que não tenha sido.*/
function revela() {
    var sobra = 0;
    total = exe + razo + ruim + semOp;

    if (total == 6) {
		contar();
        document.getElementById('Dash').style.display = 'block';
        document.getElementById('menu').style.display = 'none';
        document.getElementById('opt0').style.display = 'none';
        document.getElementById('opt1').style.display = 'none';
        document.getElementById('opt2').style.display = 'none';
        document.getElementById('opt3').style.display = 'none';
        document.getElementById('opt4').style.display = 'none';
        document.getElementById('opt5').style.display = 'none';
        document.getElementById('opt6').style.display = 'none';
        // aqui vai ser adicionada uma DIV contendo a Dahboad inteira, ele ficara oculta até que o botão de enviar seja apertado
        // obviamente com todas as questôes respondidas pois precisamos de dados para gerar resultados na dash..

    } else {
        if (flagResp1 == false) {
            sobra += 1;
            texto += "Jair Bolsonaro " + "\n"
        }
        if (flagResp2 == false) {
            sobra += 1;
            texto += "Luiz Inicio (Lula)" + "\n"
        }
        if (flagResp3 == false) {
            sobra += 1;
            texto += "Aecio Neves " + "\n"
        }
        if (flagResp4 == false) {
            sobra += 1;
            texto += "Marina da Silva" + "\n"
        }
        if (flagResp5 == false) {
            sobra += 1;
            texto += "Geraldo Alkmin " + "\n"
        }
        if (flagResp6 == false) {
            sobra += 1;
            texto += "José Serra" + "\n"
        }

        if (sobra == 1) {

            alert("Para enviar é preciso que todos os candidatos tenham uma avaliação!"
                + "\n" + "Um condidato não foi avaliado: " + texto );
            texto = "\n";

        } else {
            alert("Para enviar é preciso que todos os candidatos tenham uma avaliação!"
                + "\n" + "\n" + "Candidato sem resposta: " + texto);
            texto = "\n";

        }


    }
    sobra = 0;
}
/*Esta function pega o atributo de uma DIV no caso o ID e esconde tudo que estiver dentro dessa DIV
 * tudo que for BLOK fica visivel e tudo que for none é escondido, até que uma das condiçoes sejam alteradas
 * no caso esta é a fução do menu.*/
function menu(obj) {
    atri = obj.getAttribute("id");

    if (atri == "Menu1") {

        document.getElementById('opt0').style.display = 'none';
        document.getElementById('opt1').style.display = 'block';
        document.getElementById('opt2').style.display = 'none';
        document.getElementById('opt3').style.display = 'none';
        document.getElementById('opt4').style.display = 'none';
        document.getElementById('opt5').style.display = 'none';
        document.getElementById('opt6').style.display = 'none';

    } else if (atri == "Menu2") {

        document.getElementById('opt0').style.display = 'none';
        document.getElementById('opt1').style.display = 'none';
        document.getElementById('opt2').style.display = 'block';
        document.getElementById('opt3').style.display = 'none';
        document.getElementById('opt4').style.display = 'none';
        document.getElementById('opt5').style.display = 'none';
        document.getElementById('opt6').style.display = 'none';

    } else if (atri == "Menu3") {

        document.getElementById('opt0').style.display = 'none';
        document.getElementById('opt1').style.display = 'none';
        document.getElementById('opt2').style.display = 'none';
        document.getElementById('opt3').style.display = 'block';
        document.getElementById('opt4').style.display = 'none';
        document.getElementById('opt5').style.display = 'none';
        document.getElementById('opt6').style.display = 'none';

    } else if (atri == "Menu4") {

        document.getElementById('opt0').style.display = 'none';
        document.getElementById('opt1').style.display = 'none';
        document.getElementById('opt2').style.display = 'none';
        document.getElementById('opt3').style.display = 'none';
        document.getElementById('opt4').style.display = 'block';
        document.getElementById('opt5').style.display = 'none';
        document.getElementById('opt6').style.display = 'none';


    }
    else if (atri == "Menu5") {

        document.getElementById('opt0').style.display = 'none';
        document.getElementById('opt1').style.display = 'none';
        document.getElementById('opt2').style.display = 'none';
        document.getElementById('opt3').style.display = 'none';
        document.getElementById('opt4').style.display = 'none';
        document.getElementById('opt5').style.display = 'block';
        document.getElementById('opt6').style.display = 'none';
    } else if (atri == "Menu6") {

        document.getElementById('opt0').style.display = 'none';
        document.getElementById('opt1').style.display = 'none';
        document.getElementById('opt2').style.display = 'none';
        document.getElementById('opt3').style.display = 'none';
        document.getElementById('opt4').style.display = 'none';
        document.getElementById('opt5').style.display = 'none';
        document.getElementById('opt6').style.display = 'block';
    }

}

/*Desta function em diante você encontra:
 sómente pega os valores e atribuem separadamente a cada variavel representada por
 * exe = exelente = 1
 * razo = razoavel = 2
 * ... etc
 * ou seja recebe um valor vindo da tag no caso um numero e cada numero representa um card (botão)*/
function pontuado1(valor) {

    if (flagResp1 == false) {
        flagResp1 = true;
			document.getElementById('flagVoto1').innerHTML = "Você já opinou";
        switch (valor) {

            case 1:
                exe1[0] += 1;
				exe += 1;
               // alert("seu voto foi: exelente");
                break;

            case 2:
                razo1[0] += 1;
				razo += 1;
                //alert("seu voto foi: Razoavel");
                break;

            case 3:
                ruim1[0] += 1;
				ruim += 1;
               // alert("seu voto foi: Ruim");
                break;

            case 4:
                semOp1[0] += 1;
				semOp += 1;
                //alert("seu voto foi: Sem opinião");
                break;

        }
    } else
        alert("Esta questão já foi respondida");
}
function pontuado2(valor) {

    if (flagResp2 == false) {
        flagResp2 = true;
			document.getElementById('flagVoto2').innerHTML = "Você já opinou";
        switch (valor) {

            case 1:
                exe1[1] += 1;
				exe += 1;
				
               // alert("seu voto foi: exelente");
                break;

            case 2:
                razo1[1] += 1;
				razo += 1;
               // alert("seu voto foi: Razoavel");
                break;

            case 3:
                ruim1[1] += 1;
				ruim += 1;
                //alert("seu voto foi: Ruim");
                break;

            case 4:
			
                semOp1[1] += 1;
				semOp += 1;
                //alert("seu voto foi: Sem opinião");
                break;

        }
    } else
        alert("Esta questão já foi respondida");
}
function pontuado3(valor) {

    if (flagResp3 == false) {
        flagResp3 = true;
			document.getElementById('flagVoto3').innerHTML = "Você já opinou";
        switch (valor) {

            case 1:
                exe1[2] += 1;
				exe += 1;
                //alert("seu voto foi: exelente");
                break;

            case 2:
                razo1[2] += 1;
				razo += 1;
               // alert("seu voto foi: Razoavel");
                break;

            case 3:
                ruim1[2] += 1;
				ruim += 1;
               // alert("seu voto foi: Ruim");
                break;

            case 4:
                semOp1[2] += 1;
				semOp += 1;
                //alert("seu voto foi: Sem opinião");
                break;

        }
    } else
        alert("Esta questão já foi respondida");
}
function pontuado4(valor) {

    if (flagResp4 == false) {
        flagResp4 = true;
			document.getElementById('flagVoto4').innerHTML = "Você já opinou";

        switch (valor) {

            case 1:
                exe1[3] += 1;
				exe += 1;
               // alert("seu voto foi: exelente");
                break;

            case 2:
                razo1[3] += 1;
				razo += 1;
                //alert("seu voto foi: Razoavel");
                break;

            case 3:
                ruim1[3] += 1;
				ruim += 1;
                //alert("seu voto foi: Ruim");
                break;

            case 4:
                semOp1[3] += 1;
				semOp += 1;
               // alert("seu voto foi: Sem opinião");
                break;
        }
    } else
        alert("Esta questão já foi respondida");
}
function pontuado5(valor) {

    if (flagResp5 == false) {
        flagResp5 = true;
			document.getElementById('flagVoto5').innerHTML = "Você já opinou";
        switch (valor) {

            case 1:
                exe1[4] += 1;
				exe += 1;
               // alert("seu voto foi: exelente");
                break;

            case 2:
                razo1[4] += 1;
				razo += 1;
                //alert("seu voto foi: Razoavel");
                break;

            case 3:
                ruim1[4] += 1;
				ruim += 1;
               // alert("seu voto foi: Ruim");
                break;

            case 4:
                semOp1[4] += 1;
				semOp += 1;
               // alert("seu voto foi: Sem opinião");
                break;
        }
    } else
        alert("Esta questão já foi respondida");
}
function pontuado6(valor) {

    if (flagResp6 == false) {
        flagResp6 = true;
			document.getElementById('flagVoto6').innerHTML = "Você já opinou";
        switch (valor) {

            case 1:
                exe1[5] += 1;
				exe += 1;
               // alert("seu voto foi: exelente");
                break;

            case 2:
                razo1[5] += 1;
				razo += 1;
                //alert("seu voto foi: Razoavel");
                break;

            case 3:
                ruim1[5]+= 1;
				ruim += 1;
               // alert("seu voto foi: Ruim");
                break;

            case 4:
                semOp1[5] += 1;
				semOp += 1;
                //alert("seu voto foi: Sem opinião");
                break;
        }
    } else
        alert("Esta questão já foi respondida");
}

function resetar(){
	carregamento();
	
	document.getElementById('barra1').max += 1;
	document.getElementById('barra12').max += 1;
	document.getElementById('barra13').max += 1;
	document.getElementById('barra14').max += 1;
	
	document.getElementById('barra2').max += 1;
	document.getElementById('barra22').max += 1;
	document.getElementById('barra23').max += 1;
	document.getElementById('barra24').max += 1;
	
	document.getElementById('barra3').max += 1;
	document.getElementById('barra32').max +=1;
	document.getElementById('barra33').max += 1;
	document.getElementById('barra34').max += 1;
	
	document.getElementById('barra4').max += 1;
	document.getElementById('barra42').max += 1;
	document.getElementById('barra43').max += 1;
	document.getElementById('barra44').max += 1;
	
	document.getElementById('barra5').max += 1;
	document.getElementById('barra52').max += 1;
	document.getElementById('barra53').max += 1;
	document.getElementById('barra54').max += 1;
	
	document.getElementById('barra6').max += 1;
	document.getElementById('barra62').max += 1;
	document.getElementById('barra63').max += 1;
	document.getElementById('barra64').max += 1;
	
	flagResp1 = false;
	flagResp2 = false;
	flagResp3 = false;
	flagResp4 = false;
	flagResp5 = false;
	flagResp6 = false;
	exe1 = [0,0,0,0,0,0];
	razo1 = [0,0,0,0,0,0];
	ruim1 = [0,0,0,0,0,0];
	semOp1 = [0,0,0,0,0,0];
	exe = 0;
	razo = 0;
	ruim = 0;
	semOp = 0;
	
	document.getElementById('flagVoto1').innerHTML = "";
	document.getElementById('flagVoto2').innerHTML = "";
	document.getElementById('flagVoto3').innerHTML = "";
	document.getElementById('flagVoto4').innerHTML = "";
	document.getElementById('flagVoto5').innerHTML = "";
	document.getElementById('flagVoto6	').innerHTML = "";


	
}

function contar(){
	document.getElementById('usuarios').innerHTML ="Quantidade de usuarios que completaram a pesquisa: "+document.getElementById('barra5').max;
	
	document.getElementById('barra1').value += exe1[0];
	document.getElementById('barra12').value += razo1[0];
	document.getElementById('barra13').value += ruim1[0];
	document.getElementById('barra14').value += semOp1[0];
	
	document.getElementById('barra2').value += exe1[1];
	document.getElementById('barra22').value += razo1[1];
	document.getElementById('barra23').value += ruim1[1];
	document.getElementById('barra24').value += semOp1[1];
	
	document.getElementById('barra3').value += exe1[2];
	document.getElementById('barra32').value += razo1[2];
	document.getElementById('barra33').value += ruim1[2];
	document.getElementById('barra34').value += semOp1[2];
	
	document.getElementById('barra4').value += exe1[3];
	document.getElementById('barra42').value += razo1[3];
	document.getElementById('barra43').value += ruim1[3];
	document.getElementById('barra44').value += semOp1[3];
	
	document.getElementById('barra5').value += exe1[4];
	document.getElementById('barra52').value += razo1[4];
	document.getElementById('barra53').value += ruim1[4];
	document.getElementById('barra54').value += semOp1[4];
	
	document.getElementById('barra6').value += exe1[5];
	document.getElementById('barra62').value += razo1[5];
	document.getElementById('barra63').value += ruim1[5];
	document.getElementById('barra64').value += semOp1[5];
	
	

}