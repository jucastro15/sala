export function Tabuada(numero,carimbo) {
    let vezes = 1

    while (vezes <= 10) {
        carimbo.push(` ${numero} X ${vezes} = ${numero * (vezes++)}`)

    }

    return carimbo;
    
}