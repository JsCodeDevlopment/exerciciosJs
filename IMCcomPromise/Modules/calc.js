export function calculoDoImc(peso = 0, altura = 0) {
  
let idTimeOut

  return new Promise ((resolve, reject)=>{
    clearTimeout(idTimeOut)
    if(typeof(peso) !== "number" && typeof(altura) !== "number"){
      reject("Os parametros devem ser do tipo number")
      return
    }
    idTimeOut = setTimeout(()=>{
      resolve(peso / (altura * altura))
    }, 1000 * 2) 
  });
}
 export function estadoImc(imc){
  const situations = new Map([
    [18.5, "magreza"],
    [25, "normal"],
    [30, "sobrepeso"],
    [40, "obesidade"],
    [Infinity, "obesidade grave"],
  ]);
  
  for (const [limit, situation] of situations) {
    if (imc < limit) return `Situação: ${situation}`;
  }
 }