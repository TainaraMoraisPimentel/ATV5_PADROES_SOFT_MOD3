class Pato {
    grasnar() {
      console.log("Quack, quack!");
    }
  
    voar() {
      console.log("Voando...");
    }
  }
  
  class Galinha {
    cacarejar() {
      console.log("Cocoricó!");
    }
  
    voar() {
      console.log("Não posso voar...");
    }
  }
  
  class AdaptadorPato {
    constructor(pato) {
      this.pato = pato;
    }
  
    cacarejar() {
      this.pato.grasnar();
    }
  
    voar() {
      this.pato.voar();
    }
  }
  
  class AdaptadorPatoDemo {
    static main() {
      const pato = new Pato();
      const adaptador = new AdaptadorPato(pato);
  
      console.log("O pato diz:");
      pato.grasnar();
      pato.voar();
  
      console.log("A galinha diz:");
      const galinha = new Galinha();
      galinha.cacarejar();
      galinha.voar();
  
      console.log("O adaptador diz:");
      adaptador.cacarejar();
      adaptador.voar();
    }
  }
  
  AdaptadorPatoDemo.main();
  