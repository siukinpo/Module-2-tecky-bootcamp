import chalk from "chalk";

interface Attack {
  damage: number;
}

class BowAndArrow implements Attack {
  //Bow and Arrow Attack here
  damage: number;
  constructor(damage: number) {
    this.damage = damage;
  }
  toString(): string {
    return "Bow and Arrow";
  }
}

class ThrowingSpear implements Attack {
  // Throwing Spear Attack here
  constructor(public damage: number) {}
  toString() {
    return "Throwing Spear";
  }
}

interface Player {
  attack(monster: Monster): void;
  switchAttack(): void;
  gainExperience(exp: number): void;
}

interface OccupliedPlayerOptions {
  name: string;
  occupation: string;
  primary: Attack;
  secondary: Attack;
}

class OccupiedPlayer implements Player {
  private usePrimaryAttack: boolean;
  private criticalChange = 1 / 4;
  private exp = 0;
  constructor(
    private name: string,
    private primary: Attack,
    private secondary: Attack
  ) {
    this.usePrimaryAttack = true;
    // TODO: set the default value of usePrimaryAttack
  }

  toString(): string {
    return this.occupation + " Player " + this.name;
  }

  attack(monster: Monster): void {
    while (monster.getHP() > 0) {
      let currentAttack: Attack;
      if (this.usePrimaryAttack) {
        // TODO: use primary attack
        currentAttack = this.primary;
      } else {
        // TODO: use secondary attack
        currentAttack = this.secondary;
      }

      this.switchAttack();
      let strength = currentAttack.damage;
      let message = `Player ${this.name} attacks a monster`;
      let isCritical = Math.random() < this.criticalChange;
      // attack
      if (isCritical) {
        strength *= 2;
      }
      monster.injure(strength);
      message += ` (HP: ${monster.getHP()})`;
      if (isCritical) {
        message += " " + chalk.redBright("[CRITICAL]");
      }

      message += " with " + currentAttack;
      console.log(message);
    }
  }

  switchAttack() {
    // TODO: Change the attack mode for this player
    this.usePrimaryAttack = !this.usePrimaryAttack;
  }

  //.. The remaining methods.
  gainExperience(exp: number) {
    if (exp < 0) {
      throw new Error(" Invalid exp, should be positve number");
    }
    this.exp = this.exp + exp;
    console.log(`Player ${this.name} now has ${this.exp} exp`);
  }
}

class Monster {
  private hp: number;
  constructor(hp?: number) {
    this.hp = hp || 100;
  }
  getHP() {
    return this.hp;
  }
  injure(strength: number) {
    if (strength < 0) {
      throw new Error("Invalid strength, should be positive value");
    }
    if (strength > this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - strength;
    }
  }
}

class Amazon extends OccupiedPlayer {
  constructor(name: string) {
    super({});
  }
}

const player = new Amazon("Peter");
const monster = new Monster();
player.attack(monster);
// English counterpart: Player attacks monster
console.log("finished");
