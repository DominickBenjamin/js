const calcularArea = function(base, altura) {
    const area = base * altura;
    return area;
  };
  console.log(calcularArea(5, 10)); // 50
  

  const calcularArea2 = (base, altura) => {
    const area = base * altura;
    return area;
  };
  console.log(calcularArea2(5, 10)); // 50

////////////////////////////mejor version
  const calcularArea3 = ((base, altura) => base * altura); 
  console.log(calcularArea3(10, 10)); // 50

  