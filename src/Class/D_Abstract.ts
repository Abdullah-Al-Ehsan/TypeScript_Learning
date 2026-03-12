

// abstract class cannot be instantiated directly. It acts as a BLUEPRINT for subclasses.


abstract class Animal {

  protected petName: string;
  protected petAge: number;

  constructor(petName: string, petAge: number) {
    this.petName = petName;
    this.petAge = petAge;
  }
  public describe(): void      // Subclasses inherit this and can use it directly.
  {
     console.log(`I am ${this.petName}, petAge ${this.petAge}`);
  }

  abstract Sound(): void;       // ABSTRACT method — No body here!
  abstract getType(): string;   // Every subclass MUST override and implement this. Otherwise → compile ERROR.
}






class Horse extends Animal {        //Dog MUST implement Sound() and getType()

  private breed: string;
  constructor(petName: string, petAge: number, breed: string) {
    super(petName, petAge);     
    this.breed = breed;
  }

  public Sound(): void {
    console.log(this.petName + 'Woof!');
  }
  public getType(): string {
    return "Horse";
  }

  public fetch(): void {      //Extra method only horse has
    console.log(`${this.petName} fetches the ball!`);
  }
}



class Cat extends Animal {

  private isIndoor: boolean;
  constructor(petName: string, petAge: number, isIndoor: boolean) {
    super(petName, petAge);
    this.isIndoor = isIndoor;
  }

  public Sound(): void {
    console.log(this.petName + 'Meow!');
  }
  public getType(): string {
    return "Cat";
  }

}


// const a = new Animal("Some Animal", 5); → ERROR

const horse = new Horse("Rexo", 6, "black");
const cat = new Cat("Luna", 2, true);

horse.describe();     
horse.Sound();     
horse.fetch();         
console.log(horse.getType());  

cat.describe();       
cat.Sound();      
console.log(cat.getType());  

