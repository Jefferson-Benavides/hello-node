// Despliegue en render
const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;

const esPar = (number) => { 
  return number % 2 == 0 ? "par" : "impar";
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  switch(req.url){
    case '/':
      if (req.method === "POST"){
        let number = parseInt(req.headers["x-number"]);
        res.end(`El número ${number} es ${esPar(number)}`);
      } else if (req.method === "GET") {
        let number = parseInt(req.headers["x-number"]);
        res.end(`${number} x 10 es ${number * 10}`);
      }
      break;
    case '/prueba':
      res.end('El recurso de prueba');
      break;
    default:
      res.statusCode = 404;
      res.end("El recurso no existe");
      break;
  }

  console.log("Fin de la ejecución");
});
 

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

