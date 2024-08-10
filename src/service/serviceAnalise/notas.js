export function Media (ndn){
    
    let soma = 0;
    let media = 0;

    
    for (let i = 0; i < ndn.length; i++) {
        soma += ndn[i];
    }

  
    if (ndn.length > 0) {
        media = soma / ndn.length;
    }

    return media;
}