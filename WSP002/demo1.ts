import chalk from "chalk";

// Declaration of Class and its methods
class Player {
  private strength: number;
  private name: string;
  private exp: number = 0; //here can also type the default value
  private criticalChange = 1 / 4;
  constructor(strength: number, name: string) {
    if (strength < 0) {
      throw new Error("strength must be positive value");
    }
    if (name.length < 1) {
      throw new Error("name cannot be empty");
    }
    this.strength = strength;
    this.name = name;
    this.exp = 0;
  }

  attack(monster: Monster) {
    let exp = monster.getHP();
    while (monster.getHP() > 0) {
      if (Math.random() < this.criticalChange) {
        let critical = chalk.bgRedBright("[CRITICAL]");
        monster.injure(this.strength * 2);
        console.log(
          `Player ${
            this.name
          } attacks a monster (HP: ${monster.getHP()}) ${critical}`
        );
      } else {
        monster.injure(this.strength);
        console.log(
          `Player ${this.name} attacks a monster (HP: ${monster.getHP()})`
        );
      }
    }
    this.gainExperience(exp);
  }
  gainExperience(exp: number) {
    this.exp = this.exp + exp;
    console.log(`Player ${this.name} now has ${this.exp} exp`);
  }
}

class Monster {
  // Think of how to write injure
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

// Invocations of the class and its methods
const player = new Player(20, "Peter");
const monster = new Monster();
player.attack(monster);
// English counterpart: Player attacks monster
console.log("finished");
