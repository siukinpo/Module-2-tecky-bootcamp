interface Attack {
  damage: number;
}

class BowAndArrow implements Attack {
  //Bow and Arrow Attack here
  damage: number;
  constructor(damage: number) {
    this.damage = damage;
  }
}

class ThrowingSpear implements Attack {
  // Throwing Spear Attack here
  damage: number;
  constructor(damage: number) {
    this.damage = damage;
  }
}

class Swords implements Attack {
  // Throwing Spear Attack here
  damage: number;
  constructor(damage: number) {
    this.damage = damage;
  }
}

class MagicSpells implements Attack {
  // Throwing Spear Attack here
  damage: number;
  constructor(damage: number) {
    this.damage = damage;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface Player {
  attack(monster: Monster): void;
  switchAttack(): void;
  gainExperience(exp: number): void;
}

class Amazon implements Player {
  private name: string;
  private primary: Attack;
  private secondary: Attack;
  private usePrimaryAttack: boolean;
  private exp: number = 0;
  constructor(name: string) {
    this.name = name;
    this.primary = new BowAndArrow(30);
    this.secondary = new ThrowingSpear(40);
    this.usePrimaryAttack = true;
  }

  attack(monster: Monster): void {
    if (this.usePrimaryAttack) {
      monster.injure(this.primary.damage);
      console.log(
        `Amazon ${this.name} attacks a monster (HP: ${monster.gethp()})`
      );
    } else {
      monster.injure(this.secondary.damage);
      // TODO: use secondary attack
      console.log(
        `Amazon ${this.name} attacks a monster (HP: ${monster.gethp()})`
      );
      this.usePrimaryAttack = true;
    }
  }

  switchAttack() {
    // TODO: Change the attack mode for this player
    this.usePrimaryAttack = false;
  }

  gainExperience(exp: number): void {
    this.exp = this.exp + exp;
    console.log(`Amazon now has ${this.exp} exp`);
  }
  //.. The remaining methods.
}

class Paladin implements Player {
  private name: string;
  private primary: Attack;
  private secondary: Attack;
  private usePrimaryAttack: boolean;
  private exp: number = 0;
  constructor(name: string) {
    this.name = name;
    this.primary = new Swords(50);
    this.secondary = new MagicSpells(25);
    this.usePrimaryAttack = true;
  }

  attack(monster: Monster): void {
    if (this.usePrimaryAttack) {
      monster.injure(this.primary.damage);
      console.log(
        `Paladin ${this.name} attacks a monster (HP: ${monster.gethp()})`
      );
    } else {
      monster.injure(this.secondary.damage);
      // TODO: use secondary attack
      console.log(
        `Paladin ${this.name} attacks a monster (HP: ${monster.gethp()})`
      );
      this.usePrimaryAttack = true;
    }
  }

  switchAttack() {
    // TODO: Change the attack mode for this player
    this.usePrimaryAttack = false;
  }

  gainExperience(exp: number): void {
    this.exp = this.exp + exp;
    console.log(`Amazon now has ${this.exp} exp`);
  }
  //.. The remaining methods.
}

class Barbarian implements Player {
  private name: string;
  private primary: Attack;
  private secondary: Attack;
  private usePrimaryAttack: boolean;
  private exp: number = 0;
  constructor(name: string) {
    this.name = name;
    this.primary = new Swords(55);
    this.secondary = new ThrowingSpear(30);
    this.usePrimaryAttack = true;
  }

  attack(monster: Monster): void {
    if (this.usePrimaryAttack) {
      monster.injure(this.primary.damage);
      console.log(
        `Barbarian ${this.name} attacks a monster (HP: ${monster.gethp()})`
      );
    } else {
      monster.injure(this.secondary.damage);
      // TODO: use secondary attack
      console.log(
        `Barbarian ${this.name} attacks a monster (HP: ${monster.gethp()})`
      );
      this.usePrimaryAttack = true;
    }
  }

  switchAttack() {
    // TODO: Change the attack mode for this player
    this.usePrimaryAttack = false;
  }

  gainExperience(exp: number): void {
    this.exp = this.exp + exp;
    console.log(`Amazon now has ${this.exp} exp`);
  }
  //.. The remaining methods.
}

class Monster {
  // You can use the `Monster` before
  private hp: number;
  constructor(hp?: number) {
    this.hp = hp || 100;
  }
  // Think of how to write injure

  injure(strength: number) {
    if (strength > this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - strength;
    }
  }

  gethp() {
    return this.hp;
  }
}

const Eunice = new Amazon("Eunice");
const James = new Paladin("James");
const Godfrey = new Barbarian("Godfrey");
const monster = new Monster(1000);

while (monster.gethp() > 0) {
  if (Math.random() < 0.25) {
    James.switchAttack();
    console.log("James has switched his attack");
    James.attack(monster);
  } else {
    James.attack(monster);
  }

  if (Math.random() < 0.25) {
    Eunice.switchAttack();
    console.log("Eunice has switched her attack");
    Eunice.attack(monster);
  } else {
    Eunice.attack(monster);
  }

  if (Math.random() < 0.25) {
    Godfrey.switchAttack();
    console.log("Godfrey has switched his attack");
    Godfrey.attack(monster);
  } else {
    Godfrey.attack(monster);
  }
}
