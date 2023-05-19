function parseCount(value) {
  if (Number.isNaN(parseFloat(value))) {
    const error = new Error("Невалидное значение");
    throw error;
  }
  return parseFloat(value);
}

function validateCount(value) {
  try {
    parseCount(value);
    return parseCount(value);
  }
  catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if ((this.a + this.b) <= this.c || (this.a + this.c) <= this.b || (this.b + this.c) <= this.a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    const result = this.a + this.b + this.c;
    return result;
  }

  get area() {
    const p = this.perimeter / 2;
    const result = +Math.sqrt((p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
    return result;
  }
}

function getTriangle(a, b, c) {
  try {
    let triangleBack = new Triangle(a, b, c);
    return triangleBack
  }
  catch (error) {
    const text = "Ошибка! Треугольник не существует";
    let triangleBack = {
      get perimeter() {
        return text
      },
      get area() {
        return text
      }
    }
    return triangleBack;
  }
}

