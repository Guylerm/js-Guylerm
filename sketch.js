let isDrawing = false;

function setup() {
  createCanvas(400, 400); // Cria uma tela de 400x400 pixels
  background(220); // Define o fundo como um cinza claro
}

function draw() {
  if (isDrawing) {
    stroke(random(255), random(255), random(255)); // Cor aleatória
    strokeWeight(4); // Espessura da linha
    line(mouseX, mouseY, pmouseX, pmouseY); // Desenha uma linha do mouse atual para a posição anterior
  }
}

function mousePressed() {
  isDrawing = true; // Começa a desenhar
}

function mouseReleased() {
  isDrawing = false; // Para de desenhar
}
