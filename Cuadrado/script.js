const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
toolBtns = document.querySelectorAll(".tool");
let mouseDown = false;
let pixeles = 15;

canvas.addEventListener("mousedown", function (event) {
  console.log("A = (" + event.offsetX + ", " + event.offsetY + ")");
  mouseDown = true;
  if (mouseDown) {
    const x = event.offsetX;
    const y = event.offsetY;
    drawPixel(context, x, y);
  }

  canvas.addEventListener("mousemove", function (event) {
    if (mouseDown) {
      const x = event.offsetX;
      const y = event.offsetY;
      drawPixel(context, x, y);
    }
  });

  canvas.addEventListener("mouseup", function (event) {
    mouseDown = false;
    console.log("B = (" + event.offsetX + ", " + event.offsetY + ")");
  });
});

function drawPixel(context, x, y) {
  const imageData = context.createImageData(pixeles, pixeles); // Creamos un imageData de 10x10
  const pixelData = imageData.data;

  // Rellenamos el Ã¡rea de 10x10 con el color negro
  for (let i = 0; i < pixeles; i++) {
    for (let j = 0; j < pixeles; j++) {
      const index = (i * pixeles + j) * 4;
      pixelData[index] = 0; // R
      pixelData[index + 1] = 0; // G
      pixelData[index + 2] = 0; // B
      pixelData[index + 3] = 255; // A
    }
  }

  let middle = pixeles / 2;

  // Colocamos el imageData de 10x10 en el contexto del lienzo
  context.putImageData(imageData, x - middle, y - middle);
}

function drawSquare(x1, y1, x2, y2) {}
toolBtns.forEach(btn => {
  btn.addEventListener("click",() => {
    console.log(btn.id);
  })

})