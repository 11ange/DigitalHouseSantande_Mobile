//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x
//                       M O D U L O :   I N T R O D U Ç Ã O   À   P R O G R A M A Ç Ã O
//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x

//-----------------------------------------------------------------------------
//Quiz: O que é programação?
//1. O conceito do computador programável surgiu através da máquina analítica de Babbage com que intuito?
//R: Realizar cálculos matemáticos a partir de instruções.
//Correção  Charles Babbage criou a máquina analítica com o intuito que a mesma
//pudesse realizar cálculos matemáticos de acordo com instruções pré-estabelecidas, 
//pois na época não existiam máquinas capazes de realizar tal feito.
//
//2. A programação afeta a nossa relação com o mundo?
//R: Sim

//Quiz: Possibilidades em programação
//1. A programação nos possibilita criar muitas coisas, dentre elas, aplicativos e sites. 
//Escreva sobre alguma solução de tecnologia que você não pode viver sem. (Exemplos: iFood, 
//Smartphone, Uber, WhatsApp, Sites de Meteorologia)
//R:Redes sociais, aplicativos de transporte, aplicativos de entrega de encomendas ou comidas
//Correção  Praticamente, tudo que fazemos hoje envolve alguma solução feita com programação 
//e internet. Imagine quantas coisas você vai poder criar quando se tornar um programador! :o
  
//2. Qual dos termos abaixo é o mais utilizado para descrever objetos cotidianos conectados à internet?
//R:Internet das coisas
//Correção  Como vimos anteriormente, a Internet das Coisas é um conceito utilizado para 
//descrever a conexão digital com objetos cotidianos. Graças à IoT, esses objetos podem reunir 
//e transmitir dados.

//Quiz: Algoritmo
1
Qual é a definição de um algoritmo?

Conjunto de instruções
  Correção  O algoritmo pode ser melhor definido como um procedimento ou um conjunto de orientações, e isso não se limita apenas à programação.
2
Algoritmo é uma sequência de instruções com um objetivo claro. Qual das alternativas abaixo exemplifica um algoritmo?

Junte os ingredientes, mexa tudo até formar uma massa homogênea e asse o bolo até dourar
  Correção  Como vimos anteriormente, um algoritmo é uma sequência de instruções que tem um objetivo claro e, mesmo a alternativa B evidenciando uma orientação, ela não apresenta o nível de instruções de forma direta como a alternativa C.

//Quiz: Linguagens de programação
1
Qual tipo de linguagem de programação se assemelha mais à linguagem humana?

Linguagem de Alto nível
  Correção  Linguagem de alto nível é mais abstrata, o que facilita o entendimento. Além disso, normalmente as linguagens são escritas em inglês, por ser um idioma universal.  

2
Com base no texto lido anteriormente, escolha a alternativa correta:

No navegador temos a visão de usuário e no editor temos a visão de programador.
  Correção  Para executar uma aplicação como usuário, podemos utilizar o navegador/browser, e para programar uma solução utilizamos um editor de código.
  
3
Qual das alternativas abaixo contém somente linguagens de alto nível?

Javascript, PHP, Java
  Correção  Assembly e Código de máquina são mais próximos à linguagem binária.
  
//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x
//                       M O D U L O :   V A R I Á V E I S
//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x

//-----------------------------------------------------------------------------
//Introdução
//Quiz: O que são variáveis?
1
Por que iremos salvar informações em programação?

Para que possamos reutilizar essas informações, seja para consulta ou para resolver problemas
  Correção   Iremos armazenar informações, para utilizá-las durante o desenvolvimento sempre que necessário, como fazer contagens, operações matemáticas, criar textos e etc.
  
  2
Onde iremos salvar informações dentro do nosso código?

Nas variáveis.
  Correção  As variáveis são responsáveis por armazenar as informações.
  
  3
As variáveis têm nome?

Sim
  Correção  Sim, as variáveis têm nome ou rótulos para organizar melhor as informações, ficando mais fácil de consultá-las depois.
  
//-----------------------------------------------------------------------------
//Criando variáveis
//Exercício:
/*Vamos escrever nossas primeiras variáveis juntos. Você irá usar tudo que aprendeu anteriormente! 

Declare duas variáveis chamadas  idade  e  peso,  e atribua um valor numérico a ambas.
*/
var idade = 20
var peso = 80

// Revisão - Falta abaixar o Google Slides

//Exercício de fixação - Criando variáveis
/*Agora para deixar todo esse conhecimento fixo na mente, precisamos praticar um pouco mais!


Declare 4 variáveis: nome, sobrenome, numeroDaSorte, idade e atribua seus respectivos valores nas variáveis.
*/
var nome = "Jose"
var sobrenome = "da Silva"
var numeroDaSorte = 20
var idade = 20

//-----------------------------------------------------------------------------
//Tipos de Dados
//Exercício: Tipos de dados
/*Escreva no script as variáveis expostas abaixo substituindo os tipos de dados por valores, conforme vimos anteriormente. 

var idade = Number


var sobrenome = String


var salarioMinimo = Float 
*/
var idade = 20
var sobrenome = "da Silva"
var salarioMinimo = 1000.01

//Quiz: Tipos de dados
1
Com base no que aprendemos sobre os tipos de variáveis, e no que você já praticou, selecione a alternativa que CONTÉM ERRO na escrita do código: 

1
var nome = Hendy Almeida
2
var Nome = "Hendy Almeida"
3
var nome = "HeNdY AlMeida"
4
var variavel = "texto qualquer"

  Correção  Apesar de termos nomes bem diferentes do padrão camelCase como na alternativa B, o código ainda irá funcionar! O fato de não colocarmos aspas para definir o valor de texto irá ocasionar um erro em nosso código! Mandou bem!
  
2
Qual tipo de dados utilizamos para guardar uma lista?

1
Variáveis
2
Array
3
String
4
Boolean

  Correção  Muito bem! Sempre que precisar guardar uma lista de informações, utilize variáveis.

// Revisão - Falta abaixar o Google Slides

//Tipos de Dados Fixação
/*Vamos praticar a declaração dos tipos de dados que aprendemos.


Declare cinco variáveis com os seguintes dados: seu nome, idade, altura, solteiro e suas séries favoritas utilizando os tipos de dados vistos. 
*/  
var nome = 'Joao'
var idade = 20
var altura = 1.80
var solteiro = false
var seriesFavoritas = ["sei não", "não assisto", "a", "series"]

//-----------------------------------------------------------------------------
//Usando Variáveis
//Quiz: Usando variáveis
1
Temos uma variável frutaDaEstacao  que já foi declarada, e guarda o nome de uma fruta. Qual a alternativa apresenta o código correto para atribuir um novo valor a variável?

1
var frutaDaEstacao = “Maçã”
2
var = “Maçã”
3
frutaDaEstacao “Maçã”
4
frutaDaEstacao = “Maçã”

 Correção  Somente a ultima alternativa está com o comando correto. Lembre-se que para atribui um valor a variável já declarada não precisamos do comando var, somente o nome da variável seguido do operador de atribuição e o novo valor.

2
Qual comando correto para concatenar as variáveis nome e sobrenome, e guardar a string na nova variável nomeCompleto?

1
var nomeCompleto = nome + sobrenome
2
var nomeCompleto = “nome + sobrenome”
3
var nome = nomeCompleto
4
var nomeCompleto = “Nome Completo”

Correção  Somente a primeira alternativa está correta. Para recuperar o valor de cada variável basta escrever o nome sem aspas. Para concatenar usamos o sinal + e para atribuir essa string a nomeCompleto utilizamos o sinal =.

//Exercício: Cartão de Visita
/*Temos um desafio para você! 
Precisamos criar um código que gera cartão de visita com nome, sobrenome e profissão. Crie uma variável para guardar cada informação, depois faça a concatenação das informações numa variável chamada cartaoDeVisita.

Exemplo:

nome: Natalia

sobrenome: Lira

profissão: Programadora

cartão de visita esperado: “ Natália Lira - Programadora ”
*/
var nome = 'Natalia'
var sobrenome = "Lira"
var profissao = 'Programadora'
//var cartaoVisita = ' ' + nome + ' ' + sobrenome + ' - ' + profissao + ' '
var cartaoDeVisita = nome + ' ' + sobrenome + ' - ' + profissao

//-----------------------------------------------------------------------------
//Operadores Aritméticos
//Quiz: Operadores aritméticos
Qual das operações abaixo exemplifica o uso do operador módulo?

1
a / b
2
a * b
3
a % b
4
a - b


2
Qual das alternativas abaixo exemplifica os operadores incremento e o decremento?

1
++ | *
2
++ | --
3
-- | +
4
-- | /

//Exercício: Cálculos
/*Declare e atribua duas variáveis: numeroA e numeroB, em que ambas precisam conter um valor numérico. Em seguida, faça as variáveis de soma, subtração, multiplicação e divisão utilizando essas duas variáveis.
*/
var numeroA = 10
var numeroB = 8
var soma = numeroA +numeroB
var subtracao = numeroA - numeroB
var multiplicacao = numeroA * numeroB
var divisao = numeroA / numeroB

//Exercício - Cálculo de Lucros
/*Uma empresa separou os seus ganhos dos meses nas seguintes variáveis:

var janeiro =  100
var fevereiro = 300
var março = 90

Ela precisa da sua ajuda para saber o total do lucro adquirido. Sua missão é usar os operadores junto com as variáveis para fazer esse cálculo e use o console.log para imprimir o resultado!

Para lhe auxiliarmos, já deixamos o código inicial:

var janeiro =  100
var fevereiro = 300
var marco = 90
var valorTotal = ?
*/
var janeiro =  100
var fevereiro = 300
var marco = 90
var valorTotal = janeiro + fevereiro + marco

// Revisão - Falta abaixar o Google Slides

//Exercício: Cálculo de média
/*Em uma escola, um professor quer calcular a média de notas dos seus alunos. Ele tem separado em variáveis cada nota dos trabalhos realizados por cada aluno:

var trabalhoDeHistoria = 8.0
var trabalhoDeMatematica = 7.0
var trabalhoDeCiencia = 10
var trabalhoDeGeografia = 9.5

O professor já sabe que a média é calculada com a soma de todas as notas e dividindo pelo total. Mas ele se perdeu um pouco no código, e precisa da sua ajuda para terminar essa tarefa! 

Sua missão é ajudar o professor com o seu conhecimento dos operadores aritméticos para calcular a média dos alunos. Atribua na variável media o cálculo matemático para chegar no valor requisitado.

Lembre-se de fazer o computador calcular por você!
*/
var trabalhoDeHistoria = 8.0
var trabalhoDeMatematica = 7.0
var trabalhoDeCiencia = 10
var trabalhoDeGeografia = 9.5
var totalDeTrabalhos = 4
// escreva seu código aqui
var media = (trabalhoDeHistoria + trabalhoDeMatematica + trabalhoDeCiencia + trabalhoDeGeografia) / totalDeTrabalhos


//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x
//                       M O D U L O :   C O N D I C I O N A I S
//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x

//-----------------------------------------------------------------------------
//Quiz: Condicionais
1
Qual termo usamos em programação para representar verificações?


1
Perguntas e respostas
2
Variáveis
3
Condicional
4
Códigos

  Correção  Condicional é o termo correto :)
  

2
Qual dos exemplos abaixo podem representar uma condicional?

1
Se eu quero eu simplesmente compro!
2
Se tiver bolo, eu vou comer bolo com café, se não, irei comer bolacha com café!
3
Você sabia que o céu é azul?
4
Tomara que o caminho seja curto!

  Correção  Resposta correta! Usamos condicionais para decidir o que acontece dependendo de uma verificação!

//-----------------------------------------------------------------------------  
//Quiz - Condicional IF
Qual das opções abaixo apresenta a sintaxe correta do condicional if?

1
if a == b { console.log(‘A condição é verdadeira’) }
2
if ( a == b ) { console.log(‘A condição é verdadeira’) }
3
if ( a == b console.log(‘A condição é verdadeira’) )
4
if ( console.log(‘A condição é verdadeira’) ) { a == b }

Correção  Somente a segunda alternativa tem a sintaxe correta. Comando if seguido de condição entre parênteses e código a ser executado entre chaves.

2
Em javascript, existe alguma forma além do if que podemos utilizar para criar uma condição?

1
Sim
2
Não

 Correção  Sim, if é somente uma das diversas formas de utilizar condição em JS. Por enquanto, vamos focar nesse comando para entender bem como funciona!

//Exercício: Condicional IF
/*Precisamos de um código que verifique a idade do usuário para ver se já tem idade mínima para adquirir carta de habilitação. Para isso, teremos uma variável nome que guarda um valor do tipo string, e uma variável idade que guarda um valor do tipo numérico.

O sistema deve cumprimentar o usuário independente da idade, o resultado seria assim:

Caso o usuário tenha idade mínima para dirigir imprima: 

“Olá, NOME_DO_USUARIO_AQUI”

”Você passou no nosso teste e já pode dirigir!”.

Caso o usuário não tenha a idade mínima para dirigir imprima somente o cumprimento:

“Olá, NOME_DO_USUARIO_AQUI”
*/
var nome = "João"
var idade = 17
console.log("Olá, " + nome)
if (idade>=18) { console.log('Você passou no nosso teste e já pode dirigir!')}

//Condicionais - Conta bancária
/*Queremos um código que oriente o usuário de acordo com o saldo da conta bancária. Para isso precisamos de uma variável saldo que guarda um número decimal(float), e imprime uma mensagem de acordo com a situação financeira. Se o saldo for maior que 0 (zero) imprima “Seu saldo está positivo! Gostaria de fazer um investimento?”, agora, se o saldo for menor que zero(0) imprima “Seu saldo está negativo! Gostaria de fazer um empréstimo?” */
// Seu código aqui
var saldo = 100.01
if (saldo > 0 ) {console.log("Seu saldo está positivo! Gostaria de fazer um investimento?")}
if (saldo < 0) {console.log('Seu saldo está negativo! Gostaria de fazer um empréstimo?')}

//-----------------------------------------------------------------------------
//Quiz - Operadores relacionais
1
Qual das alternativas abaixo melhor exemplifica os operadores relacionais de igualdade em relação à comparação por valor e tipo de dado?

1
=
2
==
3
===

Correção  A resposta correta é a ultima alternativa, pois o sinal de comparação por valor e tipo de dado é o de 3 iguais (===), que compara não só o valor mas também o tipo de dado das variáveis.

2
Qual das alternativas verifica se a variável a tem um valor a partir de 100?

1
a == 100
2
a => 100
3
a >= 100
4
a > 100


Correção  Somente a terceira alternativa está correta. A primeira alternativa verifica igualdade de valor, a segunda alternativa utiliza um operador inexistente, e a última verifica somente valores que são maiores que 100, sem incluir o próprio número

3
Considerando o código abaixo, qual  condicional retorna o valor false?

var a = 10
var b = 10


1
a == b
2
a === b
3
a < b
4
a <= b

 Correção  Parabéns! O entendimento do uso de operadores relacionais é extremamente importante em condicionais por isso é vital termos o entendimento do seu uso
 
 //Condicional - Votação
/*No sistema político atual, temos algumas regras para participar das eleições. A principal delas, é que o voto é obrigatório a partir dos 18 anos, e opcional a partir dos 16!

Diante desse cenário, escreva um código que de acordo com a variável idade informe ao usuário usando console.log(), “Você é obrigado a votar” caso ele cumpra o requisito ou “Seu voto é opcional”.
*/
var idade = 17
// Sua validação aqui
if (idade >= 16) 
{
    if (idade >=18) 
    {
        console.log("Você é obrigado a votar")
    }
        if (idade < 18) 
    {
        console.log("Seu voto é opcional")
    }
}

//-----------------------------------------------------------------------------
//Quiz - IF ELSE
/*
1
É obrigatório a utilização do else em cada if?

1
Sim
2
Não

 Correção  Resposta correta! Else é um comando complementar a estrutura if, usamos para definir a ação padrão caso a condição não seja verdadeira.
 
 
2
Qual alternativa apresenta a sintaxe correta?

1
if( condição ) { //faz alguma coisa } else { // faz outra coisa }
2
if { //faz alguma coisa } else ( condição ) { // faz outra coisa }
3
if (condição) else { // faz alguma coisa }
4
else ( condição ) { // faz outra coisa }

Correção  Somente a primeira alternativa está correta, a sintaxe do if/else segue sempre a mesma sequencia: comando if, seguido da condição entre parênteses, primeiro bloco de código entre chaves, comando else, e mais um bloco de código entre chaves.


3
De acordo com o código abaixo, qual mensagem vamos imprimir?

var grauCelsius = 18;
 
  if (grauCelsius < 18) {
    console.log("Está ficando frio. Não esqueça de levar um agasalho!")
  } else {
    console.log("O clima está agradável! Não esqueça o óculos de sol :)")
  }

1
“Está ficando frio. Não esqueça de levar um agasalho!”
2
“O clima está agradável! Não esqueça o óculos de sol :)”
3
Nenhuma das alternativas anteriores	

Correção  Mandou bem! A condição é que grauCelsius seja MENOR que 18, e o valor atual da variável é igual a 18 e não menor. Dessa forma o código ignora o bloco do if e entra no else.
*/

//Condicionais - Autoescola
/*Vamos otimizar nosso sistema de autoescola!
Caso o usuário tenha 18 anos ou mais, ele pode dirigir, se a afirmação for negativa precisamos imprimir a mensagem “Ops, você ainda não tem a idade mínima para dirigir!”.
Parte do código já está pronto, agora é sua vez de utilizar o else para dar um feedback ao usuário!
*/
var idade = 15

if (idade >= 18) {
    console.log("Você já pode dirigir!")
} else {
    console.log("Ops, você ainda não tem a idade mínima para dirigir!")
}

//Condicionais - Estrangeiro
/*Utilize a condicional if/else para verificar a variável estrangeiro que guarda um valor booleano. Caso o valor seja verdadeiro solicite o Registro Nacional de Estrangeiros(RNE). Se o valor for falso solicite o Cadastro de Pessoa Física (CPF).

Mensagem para estrangeiro: “Você poderia apresentar seu RNE, por favor?”
Mensagem para brasileiro: “Você poderia apresentar seu CPF, por favor?”
*/
var estrangeiro = true
// escreva seu código aqui
if (estrangeiro)
{
  console.log('Você poderia apresentar seu CPF, por favor?')
} else {
  console.log('Você poderia apresentar seu RNE, por favor?')
}

// Revisão - Falta abaixar o Google Slides

//Condicional IF ELSE - Aposentado
/*Precisamos verificar se uma pessoa pode se aposentar com base na idade. Utilize a condicional if else para verificar se a variável idade é maior que 65 e imprima uma mensagem para cada caso:

Condição verdadeira : “Você já pode se aposentar”

Condição falsa: “Você ainda não pode se aposentar”
*/
var idade = 40
// escreva seu código aqui
if (idade >= 65)
{
    console.log('Você já pode se aposentar')
} else
{
    console.log('Você ainda não pode se aposentar')
}


//Condicionais - IF ELSE - Par ou ímpar?
/*Dentro do código estará criada uma variável numeroDaSorte  contendo um número. Sua missão é verificar se o valor da variável é par ou ímpar utilizando o operador relacional módulo (%). Imprima “Par” ou “Ímpar” de acordo com o resultado.
*/
var numeroDaSorte = 12
// escreva seu código aqui
 if (numeroDaSorte % 2 == 0)
 {
     console.log("Par")
 } else
 {
     console.log("Ímpar")
 }
//-----------------------------------------------------------------------------
//Condicional ELSE IF - Petshop
/*Precisamos criar um código que ajude um petshop a dizer se o pet está com o peso ideal. E para isso eles deixaram para você as informações que ele usam para fazer essa classificação:

 - Abaixo de 4kg = Abaixo do Peso
 - Maior que 10kg = Acima do Peso
 - Se tiver entre esses dois valores =  Peso normal.

Utilizando o ELSE IF e crie o código para suprir essa necessidade e imprimindo as mensagens de acordo com a lista acima!
*/
var petPeso = 7
// escreva seu código aqui
if (petPeso < 4 ) {
    console.log("Abaixo do Peso")
} else if (petPeso > 10) {
    console.log("Acima do Peso")
} else 
{ console.log("Peso normal")
} 

// Revisão - Falta abaixar o Google Slides

//Condicional ELSE IF - Lados Iguais
/*Precisamos de ajuda para escrever um código que de acordo com a quantidade de lados iguais de um triângulo, exiba com console.log se ele é Equilátero, Isósceles ou Escaleno, sem a necessidade de repetir no código a palavra “triângulo”. 

− Triângulo Equilátero: possui os 3 lados iguais.	
− Triângulo Isósceles: possui 2 lados iguais.	
− Triângulo Escaleno: possui 3 lados diferentes

Nesse exercício a variável ladosIguais já estará definida.
*/
var ladosIguais = 0
// seu código aqui
if (ladosIguais == 0)
{
    console.log("Escaleno")
} else if (ladosIguais == 3)
{
    console.log("Equilátero")
} else
{
    console.log("Isósceles")
}

//-----------------------------------------------------------------------------
//Condicionais - Operadores lógicos
1
Podemos fazer apenas 3 condições usando o operador AND (&&).

1
Verdadeiro
2
Falso

  Correção  Não temos nenhuma limitação de quantidade, podemos criar 2 condições ou mais!
  
  
2
Sobre o operador OR (||), qual dos códigos abaixo está correto?

1
dia == ‘quarta’ || ‘sábado’
2
dia == ‘quarta’ && dia == ‘sábado’
3
dia == ‘quarta’ || dia == ‘sábado’
4
‘quarta’ || ‘sábado’

Correção  Muito bom! Lembre se que mesmo que as comparações sejam feitas na mesma variável, é necessário repetir o nome dela, pois cada condição é totalmente independente e isso vale para todas as operações independente do operador!


3
Um desenvolvedor precisa de ajuda para escolher o operador correto na sua condição. A ideia dele é exibir uma mensagem “Esse produto não está ativo”  quando a variável produtoAtivo  estiver com o valor falso.

var produtoAtivo = false

if(){
    console.log('Esse produto não está ativo')
}

Qual condição se encaixaria neste código:
1
produtoAtivo != false
2
produtoAtivo || false
3
produtoAtivo && false
4
!produtoAtivo

Apesar da primeira alternativa funcionar, ela não é uma boa prática por fazer comparações booleanas. Nesse caso a melhor solução é usando o operador de negação.

//Condicionais - Operadores lógicos
/*Posso comprar esse produto?

Queremos criar um código que ajude o usuário a saber se ele pode comprar um produto ou não. Para acontecer a venda, a quantidade do produto no estoque tem que ser maior que zero e o produto está ativo.

Para escrever este código, teremos duas variáveis já definidas: produtoQtd, produtoAtivo. 

Faça uma condição que supra a necessidade acima, se o usuário puder comprar o produto exiba a seguinte mensagem “Você pode finalizar essa compra”. Caso contrário exiba “Produto não está disponível para compra” 
*/
var produtoQtd = 3
var produtoAtivo = true
// sua condição aqui
if (produtoAtivo  && produtoQtd > 0 ) { console.log("Você pode finalizar essa compra") } else {
    console.log("Produto não está disponível para compra")
}

//Condicionais - Operadores lógicos - Pode subir?
/*Pode subir?

Um parque de diversão te contratou para criar um código para ajudar os usuários a saber se eles podem ir em uns dos brinquedos. As regras são:

- Ser maior que 1,50m ou ter 21 anos ou mais.

Diante disso, crie condições que supra essa necessidade, exiba a seguinte mensagem caso o usuário possa usar o brinquedo: “Você pode subir”. Caso ele não possa: “Desculpe, você não atende os requisitos para usar o brinquedo”.

Vale dizer que para esse exercício você terá duas variáveis: usuarioAltura e usuarioIdade
*/
var usuarioAltura = 170
var usuarioIdade = 21
//seu código aqui
if (usuarioAltura > 150 || usuarioIdade >= 21) {
    console.log('Você pode subir')
} else {
    console.log('Desculpe, você não atende os requisitos para usar o brinquedo')
}

// Revisão - Falta abaixar o Google Slides

//Condicional - Operadores lógicos - Banco
/*Será que posso ir ao banco?

Precisamos criar um código que ajude os usuários a saber se pode ir ao banco. Sabemos que o banco está aberto em todos os os dias da semana, exceto em  finais de semana. Caso o usuário possa ir ao banco você deve exibir com console.log a seguinte mensagem: “Você pode ir ao banco”, caso contrário, ‘O banco está fechado, tente outro dia’

Para esse exercício leve em consideração as seguintes informações:

- Dias da semana pro sistema: segunda, terca, quarta, quinta, sexta, sabado e domingo.
- Você terá a seguinte variável no código: diaSemana
- Para esse exercício você deve usar na condição do if o operador && para juntar as condições lógicas junto ao operador diferente de(!=).

Se você tiver problemas para resolver este exercício, pressione resetar codigo e tente novamente.
*/
var diaSemana = 'sabado'
// Seu código aqui
if (diaSemana != 'sabado' && diaSemana != 'domingo') {
    console.log('Você pode ir ao banco')
} else {
    console.log('O banco está fechado, tente outro dia')
}

//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x
//                       M O D U L O :   L O O P S
//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x

//-----------------------------------------------------------------------------
//Quiz - Loop
1

01 - Selecione TODOS os termos utilizados para definir um trecho de código que foi programado para se repetir.

1
A - Loop
2
B - Condicional
3
C - Laço de repetição
4
D - Ciclos

Correção  Somente o termo Condicional não se aplica à essa definição, uma vez que condições fazem parte do loop, mas não é o trecho todo.

2

02 -  Qual a importância de ter uma condição de parada para o loop?

1
A - Para criar variáveis
2
B - Para não criar um laço de repetição infinito
3
C - Para não ter retrabalho
4
D - Não é importante/obrigatório

Correção  A condição de parada é muito importante para que não tenhamos um laço de repetição infinito. Imagine o computador repetindo uma ação sem parar, isso não me parece uma boa ideia!

//-----------------------------------------------------------------------------
//Quiz Loop For
01 - Quais são as informações que precisamos definir para o loop for?

1
A - início, condição de parada e incremento
2
B - início e incremento
3
C - condição de parada e fim

Correção  Início, condição de parada e incremento são as informações obrigatórias. Exemplo: for(var contador = 0; contador < 10; contador++)
	
// Revisão - Falta abaixar o Google Slides

//Tabuada
/*Precisamos de um código que calcule a tabuada de multiplicação do 7 e imprima a expressão seguido do resultado. Exemplo:

7 x 1 = 7
7 x 2 = 14
7 x 3 = 21

Lembre-se de fazer a multiplicação do 7x1 até 7x10! 
Há, uma última dica, você pode usar a variável i que é nosso contador para concatenar na hora de montar a mensagem “7 x 1” Afinal os valores depois do X (1,2,3,4…) são os valores que mudam de acordo com cada loop.
*/
for (var i = 1; i <= 10; i++ ) {
    console.log("7 x " + i)
}

//Bom dia!
/*Vamos criar um robô que manda “Bom dia, grupo!” para cada dia da semana, ou seja,  7 vezes. Utilize o laço de repetição for para fazer com mais praticidade!
*/
for (var i = 1; i <= 7; i++ ) {
    console.log("Bom dia, grupo!")
}

//-----------------------------------------------------------------------------
//Loop com Array
//Loop com Array - Lista de Carros
/*Uma agência de carros quer exibir seu catálogo para os clientes. Eles exportaram os nomes dos carros no formato de array que se chama listaDeCarros, que vai estar disponível no código. Seu trabalho é percorrer essa array exibindo os nomes dos carros:

“Nome do Carro: Fox”
“Nome do Carro: Uno”

Crie um loop que atenda o problema acima utilizando uma variável chamada i como contador, e que use o console.log para exibir o nome dos carro de acordo com o exemplo acima.
*/
var listaDeCarros = [ "Fox", "Uno", "Gol", "Astra", "Fiesta"]
// Seu loop aqui:
for (var i = 0; i < listaDeCarros.length; i++){
  console.log('Nome do Carro: ' + listaDeCarros[i])
}

//Loop com Array - Lucros
/*Uma empresa separou em uma lista, os valores dos lucros mensais. Com isso você terá no código um array com o seguinte nome: listaDeLucro contendo em cada posição o valor de recebido de cada mês!

var listaDeLucro = [100, 30, 300, -10, 600, 10]


Seu trabalho será criar um loop que calcule o valor total baseado nessa lista, e coloque o valor em uma variável já existente no código chamada: valorTotal
*/
var listaDeLucro = [100, 30, 300, -10, 600, 10]
var lucroTotal = 0;
//seu loop aqui
for (var i = 0; i < listaDeLucro.length; i++){
    lucroTotal = lucroTotal + listaDeLucro[i]
}
console.log(lucroTotal)

// Revisão - Falta abaixar o Google Slides

//Loop com Array - Saldo negativo
/*Uma empresa mandou uma lista contendo os números mensais de tudo o que ela faturou, e nosso trabalho é ajudá-los a criar um relatório que exiba em quantos meses eles tiveram o saldo negativo.
var listaDeGanhos = [10, 30, -10, -5, -1, 40]

Com base no array acima, que está disponível no código, faça um loop que verifique quantos meses tiveram valores negativos e armazene a contagem uma variável chamada totalNegativos que também está disponível no código.
*/
var listaDeGanhos = [10, 30, -10, -5, -1, 40]
var totalNegativos = 0
//seu loop aqui:
for (var i = 0; i < listaDeGanhos.length; i++) {
    if (listaDeGanhos[i] < 0) {
        totalNegativos++
    }
}
console.log(totalNegativos)

//Loop Array - Frutas
/*Um sacolão montou uma lista com as frutas que eles vendem, e de acordo com a fruta que o usuário busca eles querem informar se existe a fruta na lista ou não! 

var listaDeFrutas = [ "Uva", "Banana",  "Manga", "Cajá", "Pinha"]

Você deverá criar um loop que verifique se a fruta contida na variável busca existe na lista de frutas do sacolão. Se existe basta exibir uma mensagem, “Sim, temos a fruta banana disponível”. Use a variável busca para exibir o nome da fruta nessa mensagem de forma dinâmica. 
*/
var listaDeFrutas = [ "Uva", "Banana",  "Manga", "Cajá", "Pinha"]
var busca = "Cajá"
//seu loop aqui
for (var i = 0; i < listaDeFrutas.length; i++) {
    if (busca == listaDeFrutas[i]) {
        console.log("Sim, temos a fruta " + busca + " disponível")
    }
}

//-----------------------------------------------------------------------------
//Break e Continue
//Break e Continue - Bingo
/*Vamos criar um bingo, onde os números da cartela serão representados por um array chamado cartela, e o número sorteado deve ficar em uma variável chamada numeroSorteado. Seu trabalho será  verificar se existe o número sorteado na cartela, quando encontrar deve imprimir “Encontrei o número!” e parar o loop! 
*/
var cartela = [8, 13, 18, 22, 42, 49]
var numeroSorteado = 42
for (var i = 0; i < cartela.length; i++) {
  if (numeroSorteado == cartela[i]) {
    console.log('Encontrei o número!')
    break
  }
  //console.log(i)
}

//Break e Continue - Números Pares
/*Precisamos imprimir somente os números pares de 0 à 20. Mas temos alguns requisitos, você precisa utilizar, o loop for, o comando continue e o numero deve ser o contador do loop! Vamos lá?
*/
for (var i = 0; i <= 20; i++) {
    if (i%2 == 0) {
        console.log(i)
    } else {continue}
}

//Break e Continue - Sobrenome da família
/*Temos uma lista com nomes de todos os integrantes da família mas esqueceram de colocar o sobrenome! 
Seu desafio será imprimir nome junto com o sobrenome “Macedo” para cada integrante da família. Mas temos uma exceção, temos um integrante com sobrenome diferente, se tiver algum “Pedro”, coloque o sobrenome “Sousa”.

Dica: Utilize for  e continue para criar a solução.

         Acrescente um espaço antes do sobrenome, por exemplo: “ Sousa”. 
*/
var familia = ["Joana", "Felipe", "Gabriela", "Carlos", "Pedro", "Bruno"]
for (var i = 0; i < familia.length; i++){
    if(familia[i] == "Pedro"){
        console.log(familia[i] + " Sousa")
        continue
    }
    console.log(familia[i] + " Macedo")
}

//Break e Continue - Baralho
/*Temos um array em uma variável chamada baralho e precisamos de um script que procure a carta “Rei” entre as cartas do baralho. Assim que encontrar o “Rei” pare o loop utilizando break  e exiba um console.log a seguinte frase: Encontrei o Rei!
*/

		 
//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x
//                       M O D U L O :   F U N Ç Õ E S
//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x

//-----------------------------------------------------------------------------
//Introdução
//Quiz: Funções
1
Qual das seguintes afirmações podem ser usadas para descrever as funções em programação?

1
É o nome de um tipo de variável
2
É os recursos que tem dentro do controle da televisão
3
É forma de agrupar instruções ao computador para utilizarmos em diversos momentos
4
É a forma que falamos para definir os if e else

Correção  Muito bem! A ideia das funções é criar encapsular instruções que resolvam algum determinado problema, para que utilizarmos sempre que necessário.
	
2
Em uma função só podemos utilizar console.log()!

1
Verdadeiro
2
Falso

Correção  Podemos colocar qualquer instruções vistas anteriormente dentro das funções, como loops, condições e outras.

//-----------------------------------------------------------------------------
//Declarando funções
//Quiz: Declarando funções
1
Qual palavra reservada usamos para criar funções em Javascript?

1
var
2
funções
3
criar
4
function

Correção  Sempre usaremos a palavra function para criar nossas funções, e ela é sempre em inglês!

2
O que está errado na criação da função abaixo?

function calcular{
 	console.log(A + B)
}

1
Não podemos usar console.log em funções
2
Toda função deve ter os parênteses, que pode receber informações para a função
3
Não podemos colocar nome em português
4
A função não está errada!

 Correção  Sempre ao criar uma função, o par de parênteses após nome é obrigatório, pois irá servir para receber informações!
 
3
Podemos usar caracteres especiais em nome de funções?

1
Sim
2
Não

Correção  As funções seguem o mesmo padrão das variáveis, sem caracteres especiais ou espaços. E mantendo a boa prática de usar o camelCase.

//Declarando funções - Listar produtos
/*Um mercado tem uma lista de produtos, que eles querem exibir para todo novo cliente que chegar! Como o processo é um pouco trabalhoso e repetitivo eles precisam do seu conhecimento em funções para ajudá-los.

Eles já tem um código, porém toda vez eles precisam reescrever o código para exibir ao cliente:

var lista = [ 'Leite', 'tomate', 'Biscoito', 'Tapioca']
for(var i = 0; i < lista.length; i++){
	console.log(lista[i])
}
Seu trabalho é melhorar esse código, para ficar mais simples utilizá-lo. Precisamos que você transforme o código acima em uma função chamada listarProdutos.
*/
function listarProdutos(){
	var lista = [ 'Leite', 'tomate', 'Biscoito', 'Tapioca']

	for(var i = 0; i < lista.length; i++){
		console.log(lista[i])
	}
}

//Declarando funções - Cartão de visita
/*Crie uma função chamada cartaoDeVisitas, ela deverá imprimir o seu nome em conjunto com sobrenome! 
*/
// sua função aqui
function cartaoDeVisitas(){
    console.log("José Maria")
}

//Declarando funções - Tabuada do Sete
/*Uma professora quer ajudar os alunos a decorarem a tabuada do 7 exibindo o resultado para eles! 
Crie uma função chamada tabuadaDoSete que imprima a tabuada do sete!
*/
// sua função aqui
function tabuadaDoSete(){
    for (var i = 1; i <= 10; i++ ) {
    console.log("7 x " + i)
}
}

//-----------------------------------------------------------------------------
//Funções parametrizadas
//Quiz: Funções parametrizadas
1
Sobre a criação de uma função é correto afirmar que:

1
Toda função obrigatoriamente deve a retornar algum valor.
2
Toda função deve ser definida para receber pelo menos um parâmetro.
3
Sempre que a linha de um return for executada a função será finalizada.
4
O uso de parâmetro é obrigatório na função

  Correção  Uma função não necessariamente precisa retornar algum valor ou receber parâmetros. Ela pode executar um processo sempre igual ou ser mais dinâmica com parâmetros.
  
2
O que há de errado na criação da função abaixo:

function maiorNumero(){
   if(a > b) {
       return a;
   } else {
       return b;
   }
}

1
A função deveria ser definida para receber a e b como parâmetros, no entanto, não está está definida para não receber nada.
2
A função não está retornando o maior número, como o nome dela sugere.
3
A função não chega até o final por que executa um return antes.

  Correção  Para retornar o maior entre dois números a função precisa tomar conhecimento de quais são esses números. Isso é feito utilizando os parâmetros que, neste caso, deveriam constar na definição da função [ function maiorNumero(a,b) ]

//Funções parametrizadas - Menor Número
/*Escreva uma função chamada menorNumero. Ela deve receber dois números como parâmetro e retornar o menor entre eles. Caso os números sejam iguais, basta que se retorne qualquer um deles.
*/
// sua função aqui
function menorNumero(a, b){
   if(a < b) {
       return a;
   } else {
       return b;
   }
}

// Revisão

//Funções parametrizadas - Autonommia
/*Os engenheiros de uma montadora estão projetando o computador de bordo de um carro. Eles precisam de uma função que possa calcular a autonomia atual do automóvel, em outras palavras, quantos quilômetros ele consegue andar com a quantidade de combustível atual. A autonomia pode ser obtida multiplicando a quantidade de combustível pelo rendimento. Será que você consegue ajudá-los?
Escreva uma função chamada autonomia:

function autonomia(quantidadeDeCombustivel, rendimento){
	...
}
 Essa função deve receber dois parâmetros:
O primeiro, que represente a quantidade de combustível que está no tanque
O segundo, que represente o rendimento do automóvel
A função deve retornar a autonomia do automóvel.
Lembre-se: a autonomia do automóvel pode ser obtido multiplicando o rendimento pela quantidade de combustível presente no tanque.
*/
// sua função aqui
function autonomia(quantidadeDeCombustivel, rendimento){
	return quantidadeDeCombustivel * rendimento
}

//Funções parametrizadas - calculaValorDevido
/*A lavanderia DigitalLaundry lava roupa por quilo. Ela cobra dos seus clientes R$ 5,00 por cada quilo de roupa suja. Atualmente, eles usam um caderninho e uma calculadora para descobrir o valor que cada cliente tem a pagar. Precisamos automatizar essa empresa!
Escreva uma função calculaValorDevido

function calculaValorDevido(pesoDaRoupaSuja) {
…
}
A função recebe como parâmetro o peso de roupa suja (em quilos) e deve retornar o valor a ser cobrado do cliente.
*/
// sua função aqui
function calculaValorDevido(pesoDaRoupaSuja) {
return pesoDaRoupaSuja * 5 //sendo que 5 é o valor que o cliente deve pagar para cada quilo de roupa suja a ser lavada.
}

//Funções parametrizadas - calculaValorDevido 2
/*Depois de nossa consultoria, a lavanderia DigitalLaundry percebeu que poderia deixar a sua cobrança mais sofisticada e justa. Ela decidiu cobrar R$10,00 fixo, a título de taxa de serviço (independente da quantidade de roupa), mais R$ 3,00 por quilo de roupa suja. Reescreva a função calculaValorDevido
function calculaValorDevido(pesoDeRoupaSuja){
	...
}
Essa função recebe como único parâmetro a quantidade de roupa suja. Ela deve retornar o valor a ser cobrado do cliente usando a nova política de preços.
*/
// sua função aqui
function calculaValorDevido(pesoDeRoupaSuja){
	return (10 + pesoDeRoupaSuja * 3)
}
//-----------------------------------------------------------------------------
//Usando funções
//Quiz: Usando funções
O que fazemos para guardar o retorno de uma função para utilizar depois?

1
Utilizamos uma variável
2
Se queremos guardar alguma coisa, devemos usar uma caixa ou uma gaveta!
3
Não é possível guardar retorno de funções
4
Fazemos assim: var x = nomeDaFuncao

Correção  Sempre que quisermos guardar o retorno de uma função para uso posterior devemos atribuí-lo a uma variável. A última opção é quase certa, não fosse pela falta dos parêntesis. É a presença dos parênteses que determina a execução de uma função. Sendo assim, o correto seria: var x = nomeDaFuncao()

//Revisão

//Usando funções - Começa com Maiúscula
/*O código abaixo já tem a função comecaComMaiuscula(palavra) definida. Essa função retorna true caso a palavra passada no parâmetro seja iniciada por uma letra maiúscula e false caso contrário. Use um for para imprimir para cada palavra no array de palavras as seguintes frases: “Começa com maiúscula” caso a palavra comece com maiúscula e “Não começa com maiúscula” caso contrário.
*/
function comecaComMaiuscula(palavra){
   return /^[A-Z]/.test(palavra)
}
 
var palavras = ["Amor", "copo", "Bolacha", "biscoito"];
 
// Seu código vem aqui embaixo.
for (var i = 0; i < palavras.length; i++){
   if(comecaComMaiuscula(palavras[i])) {
      console.log('Começa com maiúscula')
      continue
   } else {
      console.log('Não começa com maiúscula')
   }
}

//Usando funções - Valida CPF
/*Temos no código abaixo uma função que já foi definida. Ela se chama validaCPF.
Ela definida para receber um parâmetro que representa um possível CPF. Tudo que ela faz resumi-se em um único objetivo: Retornar true caso o parâmetro seja um CPF válido ou false caso contrário. Eis aqui algo legal sobre funções: tudo que você precisa para utilizá-las é saber o que ela faz. Você não precisa saber o como ela faz.
Execute utilize a função validaCPF para imprimir “CPF válido” caso o “576.524.020-85” seja um cpf válido. Caso contrário, imprima “CPF inválido”
*/
// Seu código vem aqui. Lembre-se: a função validaCPF já está definida.
if (validaCPF('576.524.020-85')) {
    console.log('CPF válido')
} else {
    console.log('CPF inválido')
}

//Usando funções - deixaEntrar
/*Uma rede de cinemas quer implementar um sistema para controlar a entrada nas suas salas. Os clientes, antes de entrar na sala, devem apresentar o RG em uma câmera. A câmera seria capaz de ler a data de nascimento do cliente e, caso ele não tenha idade suficiente para assistir a sessão, o acesso dele não seria autorizado.
Um dos programadores já fez uma função que calcula a idade com base na data de nascimento. Ela recebe como parâmetro uma data de nascimento no formato dd/mm/aaaa (dia com dois dígitos, mês com dois dígitos e ano com quatro dígitos) e retorna idade da pessoa hoje.

Precisamos agora que você escreva a função deixaEntrar(dataDeNascimento, censura).
A função deve receber dois parâmetros:
O primeiro deve representar a data de nascimento do cliente no formato dd/mm/aaaa 

O segundo deve representar a censura da sessão, ou seja, a idade mínima do cliente para que ele possa acessar a sala.

A função deve retornar true caso o cliente tenha idade maior ou igual a censura e false caso contrário.
*/
// A função a seguir (calculaIdade) não precisa ser alterada
// A sua função deve ser escrita logo abaixo desta
function calcularIdade(dataDeNascimento) {
   var [dia, mes, ano] = dataDeNascimento.split('/');
   var d = new Date();
   var anoAtual = d.getFullYear();
   var mesAtual = d.getMonth() + 1;
   var diaAtual = d.getDate();
   ano = +ano; mes = +mes; dia = +dia;
   var quantosAnos = anoAtual - ano;
   if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
       quantosAnos--;
   }
   return quantosAnos < 0 ? 0 : quantosAnos;
}
 
// Escreva aqui sua função
function deixaEntrar(dataDeNascimento, censura) {
  return (calcularIdade(dataDeNascimento) > censura )
}
var dataDeNascimento = "01/01/2000"
var censura = 18
console.log(deixaEntrar(dataDeNascimento, censura))

//Usando funções - Filtrar produtos
/*Uma loja virtual permite a seus visitantes filtrar produtos pelo preço. Existe um array com os preços dos produtos. Um programador já criou uma função maisBaratosQue(valor, precos) que retorna um array com os preços dos produtos mais baratos que o valor passado como parâmetro. Outro programador já criou uma função maisCarosQue(valor, precos) que retorna um array com os preços mais caros que o valor passado como parâmetro. Chegou sua vez!
Crie uma função precosEntre(valorMenor, valorMaior, precos) que deve utilizar as funções maisBaratosQue e maisCarosQue para retornar os preços que estão entre o valorMenor e o valorMaior. Sua função deve receber então dois parâmetros:
valorMenor para representar o valor mínimo dos preços a serem listados
valorMaior para representar o valor máximo dos preços a serem listados
precos para representar um array com os preços dos produtos
Ela deve retornar um array com todos os preços entre valorMenor e valorMaior
*/
function maisBaratosQue(valor, precos) {
   return precos.filter(p => p <= valor);
}
 
function maisCarosQue(valor, precos){
   return precos.filter(p => p >= valor);
}

function precosEntre(valorMenor, valorMaior, precos) {
    return maisCarosQue(valorMenor, maisBaratosQue(valorMaior, precos));
}
//Ao testar sua função com os valores: precosEntre(5, 10, [ 1,2,3,4,5,6,7,8,9,10] o resultado é 5,6,7,8,9,10
//-----------------------------------------------------------------------------
//Funções em JS
//Quiz: Funções nativas
1
Qual das alternativas apresenta somente funções nativas que podemos usar com arrays?

1
pop(), Math.min(), toUppercase()
2
push(), pop(), indexOf()
3
round(), min(), max()
4
array(), addArray(), removeArray()

Correção  Mandou bem! Somente a segunda alternativa apresenta funções nativas para utilizarmos com arrays. Sendo que a função push() utilizamos para adicionar mais um item no array, pop() utilizamos para remover o ultimo item e indexOf() para identificar o índice de um valor.

2
Sabemos que a função Math.min() recebe parâmetros, compara e retorna o menor valor entre eles. Quantos parâmetros podemos passar para que ocorra a comparação?

1
Somente 1 parâmetro por vez
2
Somente 2 parâmetros por vez
3
Podemos passar 2 ou mais parâmetros por vez
4
Não precisamos passar parâmetros

Isso aí! O mínimo são 2 parâmetros, mas podemos comparar muitos outros de uma só vez! Math.min(n1, n2, n3, ...)

3
Para identificar o índice de um valor no array, utilizamos a função indexOf(). Qual será o retorno do código abaixo?

var linguagensDeProgramacao = ["Javascript", "PHP", "Node.js", "Cobol", "C#", "Python"]

linguagensDeProgramacao.indexOf("Node.js")
1
Retorna “Node.js”
2
Retorna 2
3
Retorna 3
4
Retorna linguagensDeProgramacao

  Correção  Resposta correta! Lembrando que indexOf() sempre retorna um valor numérico, e os índices do array sempre começa contando em 0.

//Revisão

//Funções Nativas - Estava presente na aula?
/*Nas escolas do futuro não haverá necessidade de chamadas. Ao entrar em sala, uma câmera fará o reconhecimento facial do aluno e registrará sua presença!
Imagine que, a cada aula, um array guardasse o nome de todos os alunos que estiveram presentes na aula.

Escreva uma função estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes)

Essa função deve receber dois parâmetros:

O primeiro deve representar o nome de um aluno

O segundo deve representar um array com o os nomes dos alunos presentes.

A sua função deve retornar true caso o nome do aluno passado como parâmetro estiver entre os presentes. false caso contrário.
*/
// Seu código vem aqui
//var nomeDoAluno = "Caio";
//var nomesDosPresentes = ["Matheus", "Leticia","Caio"]
function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes){
    if (nomesDosPresentes.indexOf(nomeDoAluno)>=0) {
        return true
    } else {
        return false
    }
}
//return nomeDosPresentes.indexOf(nomeDoAluno.toLowerCase()) == -1 ? false : true;

//console.log(estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes))
//estavaPresenteNaAula("Caio", ["Matheus", "Leticia","Caio"]) = true

//Funções Nativas - transformaParaMaiusculo
 /*Algumas vezes precisamos padronizar as informações antes de guardá-las no nosso sistema. Escreva uma função transformaParaMaiusculo(palavras). Essa função recebe como parâmetro um array de palavras. Ela deve retornar um array com a versão MAIÚSCULA de todas as palavras contidas no array passado como parâmetro.
 */
 function transformaParaMaiusculo(palavras) {
    var matriz = []
    for (var i = 0; i < palavras.length; i++) {
        matriz.push(palavras[i].toUpperCase())
    }
    return matriz
}
//Para testar:
console.log(transformaParaMaiusculo(["gato","cachorro","tartaruga"]))

//Funções Nativas - Gerar Dezenas
/*Uma fábrica de biscoitos da sorte precisa de um sistema. O sistema deve gerar seis dezenas aleatórias para serem impressas. Sabe como é: Palpites para seus clientes jogarem na mega sena! O seu trabalho é escrever uma função gerarDezenas(). Essa função não recebe nenhum parâmetro. Tudo que ela deve fazer é gerar e retornar um array contendo seis números aleatórios entre 1 e 60.
*/
// Seu código vem aqui
function gerarDezenas(){
   var dezenas = [];
   for(var i = 0; i < 6; i++){
       dezenas.push(Math.round(Math.random() * 59) + 1);
   }
   return dezenas
}
//Para testar:
console.log(gerarDezenas())

//Funções Nativas - Maximo e Minimo
/*Escreva uma função maxmin(a, b, c, d, e) que receba cinco números como parâmetros.
Sua função deve retornar um array onde o primeiro elemento é o menor dos parâmetros e o segundo elemento é o maior dos parâmetros.
*/
// Seu código vem aqui
function maxmin(a, b, c, d, e){
    var array = []
    array[0] = Math.min(a,b,c,d,e)
    array[1] = Math.max(a,b,c,d,e)
    return array
}
//Para testar:
console.log(maxmin(1,2,0,8,5))

//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x
//                       M O D U L O :   E X E R C Í C I O S   I N T E G R A D O R E S
//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x

//-----------------------------------------------------------------------------
//Variáveis, if e loop
/*No fim de semana o elevador do nosso prédio quebrou, restringindo muito o fluxo de pessoas. Considerando isso, apenas os moradores dos apartamentos com número par poderão usar o elevador. Escreva um código que, com base na variável “moradores” nos informe quais moradores poderão utilizar o elevador. O número do apartamento é a sua posição no array, e o nome do morador é o valor.

Imprima no console a lista a seguinte frase: 'O morador ' + nome do morador + ' pode usar o elevador'
*/
var moradores = [
    "Fulano de Tal",
    "Beltrano da Cia",
    "Viajante do Tempo",
    "Morador da Lua",
    "Marciano Azul",
    "Et da Eslováquia",
    "Jedi do Lado Cinza da Força",
    "Baby Yoda Amarelo"
]
for (var i = 0; i < moradores.length; i++) {
    if (i%2 == 0) {
        console.log("O morador " + moradores[i] + " pode usar o elevador")
    }
}

//-----------------------------------------------------------------------------
//Dados de um usuário
/*Em uma  academia está acontecendo um cadastro de vários usuários contendo as seguintes informações: nome, idade e altura. E para realizar um determinado treino, existe alguns requisitos: Ter 18 anos ou mais e ter uma altura igual ou maior a 1,70.

Crie uma função chamada maiorAlto que retorne verdadeiro (true) caso ele atenda os requisitos, e falso (false) para o contrário. Nessa função você irá receber um parâmetro que será um array, contendo na primeira posição o nome, segunda posição a idade do aluno e na terceira contendo a altura em Centímetros.

Exemplo

maiorAlto(["Aluno incrível", 18, 170]) // retorna true
maiortAlto(["Aluno baixo", 17, 150]) // retorna false
*/
var usuario1 = ['Et da Estônia', 17, 170]
var usuario2 = ['Pessoa do Pântano', 39, 198]
var usuario3 = ['Homem da Lua Virada', 21, 149]
var usuario4 = ['Pequena Paulistana', 18, 171]
var usuario5 = ['Menino da Porteira', 13, 142]
function maiorAlto (dados){
    if (dados[1] >= 18 && dados[2] >= 170) {
        return true
    } else {
        return false
    }
}
//teste da função
console.log(maiorAlto(usuario1))	//false
console.log(maiorAlto(usuario2))	//true
console.log(maiorAlto(usuario3))	//false
console.log(maiorAlto(usuario4))	//true
console.log(maiorAlto(usuario5))	//false

//-----------------------------------------------------------------------------
//Academia
/*Uma academia precisa separar grupos de pessoas tendo como base a sua altura para que dessa forma consiga formar grupos para as aulas de zumba. Temos um array que lista a altura de cada aluno da academia, e outros 3 arrays (Grupo A, B e C) que são classificados da seguinte forma: 

grupoA - Alunos com altura entre 150 a 159

grupoB - Alunos com altura entre 160 a 169

grupoC - Alunos com altura de 1.70 ou mais

Seu trabalho é pegar cada valor do array alunos e colocar o valor correspondente em seu respectivo grupo. Para esse exercício, você precisará usar loops, condicionais e funções de arrays. 
*/
var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]

var grupoA = []
var grupoB = []
var grupoC = []
for(var i = 0; i < alunos.length; i++){
  if(alunos[i] >= 170){
    grupoC.push(alunos[i]);
  }else if(alunos[i] >= 160){
    grupoB.push(alunos[i]);
  }else{
    grupoA.push(alunos[i]);
  }
}
//teste da função
console.log(grupoA)		//[159,151,156,154]
console.log(grupoB)		//[165,167,169,160]
console.log(grupoC)		//[170,187,191,171,170]

//-----------------------------------------------------------------------------
//Estacionamento
/*Um estacionamento deseja automatizar a cobrança de mensalistas. Para isso decidiu simplificar a forma de calcular o valor devido pelo seu cliente. A quantia a ser paga pelos seus usuários depende do número de entradas que o veículo realiza no estacionamento. A cada entrada, a placa do veículo é registrada. Ao final do mês, conta-se o número de entradas que o veículo realizou e faz-se o seguinte cálculo:

Se o motorista realizou até 20 entradas, ele deve pagar R$ 10,00 por entrada realizada.

Da vigésima primeira entrada em diante, cada entrada custa R$ 5,00 ao cliente.

	Agora, você vai deve ajudar na automatização da cobrança escrevendo duas funções.

A primeira função se chama calcularNumeroDeEntradas(placa). Ela deve receber um único parâmetro que representa a placa de um carro. A função deve retornar o número de entradas que esse carro realizou no estacionamento. Em outras palavras, o número de vezes que a placa passada como parâmetro aparece no array placas.

A segunda função se chama calcularValorDevido(placa). Ela deve receber um único parâmetro que representa a placa de um carro. A função deve calcular o valor que o proprietário do carro tem que pagar segundo a política de preços estabelecida. Naturalmente, será necessário utilizar a primeira função dentro da segunda.
*/
// Esse array é utilizado dentro das funções. Cada placa neste array representa
// uma entrada do respectivo veículo no estacionamento. Não é necessário alterar
// esse array.
var placas = [
   'RXB-2525', 'AKX-3333', 'ORO-7142','RXB-2525', 'AKX-3333', 'ORO-7142',
   'AKX-3333', 'RXB-2525', 'AKX-3333','AKX-3333', 'RXB-2525', 'AKX-3333',
   'RXB-2525', 'AKX-3333', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
   'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
   'AKX-3333', 'AKX-3333', 'RXB-2525','AKX-3333', 'AKX-3333', 'RXB-2525',
   'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'ORO-7142', 'ORO-7142',
   'ORO-7142', 'RXB-2525', 'AKX-3333','AKX-3333', 'ORO-7142', 'ORO-7142',
   'AKX-3333', 'RXB-2525', 'AKX-3333','AKX-3333', 'RXB-2525', 'AKX-3333',
   'RXB-2525', 'AKX-3333', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
   'AKX-3333', 'ORO-7142', 'ORO-7142','AKX-3333', 'AKX-3333', 'RXB-2525',
   'AKX-3333', 'AKX-3333', 'RXB-2525','AKX-3333', 'AKX-3333', 'RXB-2525'
]

function calcularNumeroDeEntradas(placa){
  var cont = 0;
  for (var i = 0 ; i < placas.length ; i++) {
    if (placas[i] == placa) {
    cont++;
    }
  }
  return cont
}
 
function calcularValorDevido(placa){
   var numPassagens = calcularNumeroDeEntradas(placa)
   if (numPassagens < 20) {
     return 10 * numPassagens
   } else {
     return (200 + (numPassagens - 20) * 5)
   }
}

//teste da função
console.log(calcularNumeroDeEntradas('AKX-3333'))		//34
console.log(calcularValorDevido('AKX-3333'))			//270
console.log(calcularNumeroDeEntradas('ORO-7142'))		//15
console.log(calcularValorDevido('ORO-7142'))			//150
console.log(calcularNumeroDeEntradas('RXB-2525'))		//17
console.log(calcularValorDevido('RXB-2525'))			//170

//-----------------------------------------------------------------------------
//Cinema
/*Em um site sobre cinema, os visitantes cadastrados podem dar notas de 0 a 5 para um filme que ele tenha assistido. Cada filme tem um grande array de notas atribuídas pelos visitantes. Contudo, além de dar notas para os filmes, os visitantes querem ver o que as outras pessoas acharam do filme! É aí que você entra com seu código:

Escreva uma função calculaGostos(notas)

Essa função deve ser escrita para receber somente um parâmetro: um array de notas. Ela deve retornar também um array com três elementos:

O primeiro, com a quantidade de notas iguais a 0 ou 1. Seriam os que não gostaram do filme

O segundo, com a quantidade de notas iguais a 2 ou 3. Seriam os que acharam o filme mediano

O terceiro, com a quantidade de notas iguais a 4 ou 5. Seriam os que gostaram do filme.
*/
var notas = [0,1,2,3,4,5]
function calculaGostos(notas){
   var nNaoGostaram = 0;
   var nMediano = 0;
   var nGostaram = 0;
for(var i = 0; i < notas.length; i++){
   if ((notas[i] == 0) || (notas[i] == 1)){
       nNaoGostaram++;
   }else if((notas[i] == 2) || (notas[i] == 3)){
       nMediano++;
   }else{
       nGostaram++;
   }
}      
   return [nNaoGostaram, nMediano, nGostaram];
}

//teste da função
console.log(calculaGostos(notas))	// [2,2,2]


//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
//                       D E S A F I O S
//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
//-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-

//-----------------------------------------------------------------------------
//Personagens
/*Programar uma função filme que recebe três arrays com os nomes de personagens, filmes e ano de estréia no cinema. A função deve receber também um valor de id escolhido pelo usuário com intervalo de 1 até o tamanho máximo dos arrays fornecidos e retornar uma frase com o seguinte modelo: "personagem é um personagem do filme filme que estreou no cinema em lançamento." Se o valor de id for inválido, a função deve retornar a frase "Essa não é uma opção válida."

Exemplo:

personagens = ["Hermione", "Trinity", "Leia"]
filmes = ["Harry Potter", "Matrix", "Star wars"]
lancamentos = [2001, 1999, 1977]
id = 3

Deve retornar a string:

Leia é um personagem do filme Star wars que estreou no cinema em 1977.
*/
var personagens = ["Hermione", "Trinity", "Leia"]
var filmes = ["Harry Potter", "Matrix", "Star wars"]
var lancamentos = [2001, 1999, 1977]
var id = 3
function filme(personagens, filmes, lancamentos, id){
  if ((id > 0) && (id <= personagens.length) && (id <= filmes.length) && (id <= lancamentos.length)) {
    var opt = id - 1
    return personagens[opt] + " é um personagem do filme " + filmes[opt] + " que estreou no cinema em " + lancamentos[opt] + "."
  } else {
      return "Essa não é uma opção válida."
  }
}

//teste da função
console.log(filme(personagens, filmes, lancamentos, id))

//-----------------------------------------------------------------------------
//Séries
/*Programe uma função series que recebe dois parâmetros, um prefixo com o nome da série e um array com a lista de todos os episódios da série. A função deve retornar um novo array com a lista de episódios iniciando com o nome da série.

Exemplo: Dadas as variáveis abaixo:

harryPotterPrefixo = "Harry Potter";
harryPotterSeries = [
  "e a Pedra Filosofal",
  "e a Câmara Secreta",
  "e o Prisioneiro de Azkaban",
  "e o Cálice de Fogo",
  "e a Ordem da Fênix",
  "e o Enigma do Príncipe",
  "e as Relíquias da Morte"
];

A função deve retornar como resultado o seguinte array:

resultado = [
  "Harry Potter e a Pedra Filosofal",
  "Harry Potter e a Câmara Secreta",
  "Harry Potter e o Prisioneiro de Azkaban",
  "Harry Potter e o Cálice de Fogo",
  "Harry Potter e a Ordem da Fênix",
  "Harry Potter e o Enigma do Príncipe",
  "Harry Potter e as Relíquias da Morte"
];
*/
var harryPotterPrefixo = "Harry Potter";
var harryPotterSeries = [
  "e a Pedra Filosofal",
  "e a Câmara Secreta",
  "e o Prisioneiro de Azkaban",
  "e o Cálice de Fogo",
  "e a Ordem da Fênix",
  "e o Enigma do Príncipe",
  "e as Relíquias da Morte"
];
function series(prefixo, array){
  var resultado = []
  for (var i = 0; i < array.length; i++){
    resultado[i] = prefixo + ' ' + array[i]
  }
  return resultado
}

//teste da função
console.log(series(harryPotterPrefixo, harryPotterSeries))
/*[
"Harry Potter e a Pedra Filosofal",
"Harry Potter e a Câmara Secreta",
"Harry Potter e o Prisioneiro de Azkaban",
"Harry Potter e o Cálice de Fogo",
"Harry Potter e a Ordem da Fênix",
"Harry Potter e o Enigma do Príncipe",
"Harry Potter e as Relíquias da Morte"
]
*/
//-----------------------------------------------------------------------------
//Maior que o número
/*Programe uma função maiorQueNum que busca em um dado array apenas os números maiores do que o número fornecido no segundo parâmetro da função e retorna um novo array apenas com esses números.

Exemplo:

numeros = [10, 4, 7, 128, 42, -1, 0, 300, -5]
num = 5

resposta = [10, 7, 128, 42, 300]
*/
var numeros = [10, 4, 7, 128, 42, -1, 0, 300, -5]
var num = 5

function maiorQueNum(array, num){
  var resultado = []
  var contResultado = 0
  for (var i = 0; i < array.length; i++) {
    if (array[i] > num) {
      resultado[contResultado] = array[i]
      contResultado++
    }
  }
  return resultado
}
//teste da função
console.log(maiorQueNum(numeros, num))  //[10,7,128,42,300]

//-----------------------------------------------------------------------------
//Buscar divisível por
/*Programe uma função buscarDivisivelPor que recebe dois parâmetros, um array de números e um número de teste, retornando como resposta o primeiro número do array que seja divisível pelo número dado e diferente de zero. Caso nenhum número do array passe no teste, retorne o texto "Nenhum número válido encontrado!".
*/
var numeros = [9, 4, 7, 128, 42, -1, 5, 302, -4]
var num = 5
function buscarDivisivelPor(array, num){
  for (var i = 0; i < array.length; i++){
    if((array[i] % num == 0) && (array[i] != 0)) {
      return array[i]
      break
    }
  } if(i == array.length) {
    return "Nenhum número válido encontrado!"
  }
}

//teste da função
console.log(buscarDivisivelPor(numeros, num))  // 5

//-----------------------------------------------------------------------------
//Repetindo palavras
/*Crie uma função que receba dois valores, o primeiro será uma palavra qualquer, e o segundo será a quantidade de vezes que o sistema irá imprimir essa palavra.
*/
function repete(valor,qtd){
//return valor.repeat(qtd)
  for (var i = 0; i < qtd; i++) {
    console.log(valor)
  }
}

//teste da função
console.log(repete("valor ",5))  // valor valor valor valor valor

//-----------------------------------------------------------------------------
//Comissão
/*Crie um sistema para calcular a comissão dos vendedores de uma loja. Crie uma função que tenha dois argumentos: preço e porcentagem de comissão.
*/