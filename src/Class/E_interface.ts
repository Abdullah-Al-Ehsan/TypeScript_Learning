

interface Bird {
  birdName: string;
  birdAge : number;
  makeSound(): void;
}



class Eagle implements Bird {
   
    birdName = 'golden';
    birdAge = 40;

  constructor(birdName: string) {
    this.birdName = birdName;
  }

  makeSound() {
    console.log("Kak");
  }
}