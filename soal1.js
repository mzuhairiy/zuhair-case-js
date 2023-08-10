function akarPangkat() {
    const prompt = require('prompt-sync')({sigint: true});

    let x = prompt("Masukkan bilangan genap positif :");
  
    if (x < 0) {
      console.log("Tidak bisa input bilangan negatif");
    } else if (x % 2 !== 0) {
      console.log("Tidak bisa input bilangan ganjil");
    } else {
      let result = Math.sqrt(x);
      console.log(`Akar pangkat 2 dari ${x} adalah ${result}`);
    }
  }
  
  akarPangkat();
  