let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let raio = diametro / 2 ;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function setup() {
 createCanvas(600, 400);
}

function draw() {
 background(0);
 mostraBolinha();
//movimentaBolinha(); 
  verificaColisaoBorda();
}

rect(5,150,10,90)


function mostraBolinha(){
// circle(xbolinha, yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  function draw() {

  background(0);

  mostraBolinha();

  movimentaBolinha();

  verificaColisaoBorda();

  mostraRaquete();

  movimentaMinhaRaquete();

  verificaColisaoRaquete();

}function verificaColisaoRaquete() {

    if (xBolinha - raio < xRaquete + raqueteComprimento) {

        velocidadeXBolinha *= -1;

    }

}
  function verificaColisaoRaquete() {

    if (xBolinha - raio < xRaquete + raqueteComprimento

        && yBolinha - raio < yRaquete + raqueteAltura

        && yBolinha + raio > yRaquete) {

        velocidadeXBolinha *= -1;

    }

}</head>

  <body>

    <main>

    </main>

    <script src="sketch.js"></script>

    <script src="p5.collide2d.js"></script>

  </body
  function draw() {

  background(0);

  mostraBolinha();

  movimentaBolinha();

  verificaColisaoBorda();

  mostraRaquete();

  movimentaMinhaRaquete();

//verificaColisaoRaquete();

  colisaoMinhaRaqueteBiblioteca ();
function colisaoMinhaRaqueteBiblioteca() {

    collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);

}


}
</html> let colidiu = false;
  //variáveis do oponente

let xRaqueteOponente = 585;

let yRaqueteOponente = 150;
  function mostraRaqueteOponente() {

    rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);

}function mostraRaquete(x,y) {

    rect ( x , y , raqueteComprimento , raqueteAltura );
function draw() {

    background(0);

    mostraBolinha();

    //movimentaBolinha();

    verificaColisaoBorda();

    mostraRaquete(xRaquete, yRaquete);

    movimentaMinhaRaquete();

    //verificaColisaoRaquete();

    colisaoMinhaRaqueteBiblioteca();

    mostraRaquete(xRaqueteOponente, yRaqueteOponente);

}

função desenhar() {

    fundo(0);

    mostraBolinha();

    //movimentoBolinha();

    verificaColisaoBorda();

    mostraRaquete(xRaquete, yRaquete);

    movimentosMinhaRaquete();

    //verificaColisaoRaquete();

    colisaoMinhaRaqueteBiblioteca();

    mostraRaquete(xRaqueteOponente, yRaqueteOponente);

}

function mostraRaquete(x,y) {

  rect(x, y, raqueteComprimento, raqueteAltura);

}

função desenhar() {

    fundo(0);

    mostraBolinha();

    //movimentoBolinha();

    verificaColisaoBorda();

    mostraRaquete(xRaquete, yRaquete);

    movimentosMinhaRaquete();

    //verificaColisaoRaquete();

    colisaoMinhaRaqueteBiblioteca();

    mostraRaquete(xRaqueteOponente, yRaqueteOponente);

}

function mostra Raquete(x,y) {

  rect(x, y, raqueteComprimento, raqueteAltura);

}

//variáveis do oponente

let xRaqueteOponente = 585;

let yRaqueteOponente = 150;


}
