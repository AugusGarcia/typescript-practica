class Producto {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  name: string;
  price: number;
  getPrice() {
    return this.price;
  }
}

class ProductoAlimenticio extends Producto {
  fechaCaducidad: Date;
  constructor(name, price, fechaCaducidad) {
    super(name, price);
    this.fechaCaducidad = fechaCaducidad;
  }

  checkCaducidad(): boolean {
    const hoy = new Date();
    if (hoy > this.fechaCaducidad) {
      return true;
    } else {
      return false;
    }
  }
}

class ProductoCongelado extends ProductoAlimenticio {
  temperaturaRecomendada: number;
  private margen: number;
  constructor(name: string,price: number,fechaCaducidad: string,temperaturaRecomendada: number,margen: number = 5) {
    super(name, price, fechaCaducidad);
    this.margen = margen;
    this.temperaturaRecomendada = temperaturaRecomendada;
  }

  estaAlmacenadoCorrectamente(temperaturaActual: number): boolean {
    return temperaturaActual >= this.temperaturaRecomendada - this.margen && temperaturaActual <= this.temperaturaRecomendada + this.margen;
  }
}

// Creación de la instancia
const helado = new ProductoCongelado(
  "Helado de Vainilla",
  2.99,
  "2024-12-31",
  -18
);

// Temperatura actual de almacenamiento
const temperaturaActual = -20; // Supongamos que esta es la temperatura actual

// Verificar si el producto está almacenado correctamente
const estaAlmacenadoCorrectamente =
  helado.estaAlmacenadoCorrectamente(temperaturaActual);
console.log(
  "¿Está almacenado correctamente?:",
  estaAlmacenadoCorrectamente ? "Sí" : "No"
);

// Verificar si el producto está caducado
const esCaducado = helado.checkCaducidad();
console.log("¿El producto está caducado?:", esCaducado ? "Sí" : "No");

// Mostrar detalles del producto
console.log("Nombre del Producto:", helado.name);
console.log("Precio:", helado.getPrice());
console.log(
  "Temperatura Recomendada:",
  helado.temperaturaRecomendada,
  "grados"
);
