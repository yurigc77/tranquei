function daMotivo()
{   
  switch(document.getElementById("diasPulados").selectedIndex)
  {
    case 0:
      document.getElementById("textoMotivo").innerHTML = "Escolha o um dos dias em que pulamos";
      break;

    case 1:
      document.getElementById("textoMotivo").innerHTML = "Não conseguimos fazer os exercicio de linguagens formais que foi o primeiro do ano";
      break;

    case 2:
      document.getElementById("textoMotivo").innerHTML = "não dava para entender os enunciados do teste de LF";
      break; 

    case 3:
      document.getElementById("textoMotivo").innerHTML = "trabalho de implementação de minimização de DFA ta complexo";
      break;       
      
    case 4:
      document.getElementById("textoMotivo").innerHTML = "A prova de IPE ta impossivel, que deus nos ajude";
      break;    
  }
}

function contaDias()
{
  var seconds = 1000;
  var minutes = 1000 * 60;
  var hours = minutes * 60;
  var days = hours * 24;
  var years = days * 365;

  var ultimoPulo = new Date(2021,4,30,14,0,0);
  var hoje = new Date();
  var Tultimo = ultimoPulo.getTime();
  var Thoje = hoje.getTime();
  var contMili =Thoje-Tultimo;
  var contDias = Math.round(contMili/days)
  document.getElementById("contDias").innerHTML = contDias;
  
  contRecord(contDias)
}

function contRecord(contDias)
{
  var record=245
  
  if(contDias>record)
  {
    record=contDias;
  }

  document.getElementById("contRecord").innerHTML = record;
}
