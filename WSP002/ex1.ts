// Declaration of Class and its methods
export class Player {
  private strength: number;
  private name: string;
  constructor(strength: number, name: string) {
    this.strength = strength;
    this.name = name;
  }

  attack(monster: Monster) {
    while (monster.gethp() > 0) {
      if (Math.random() > 0.7) {
        if (monster.gethp() == 20) {
          monster.injure(this.strength * 2);
          console.log(
            `Player ${this.name} attacks a monster (HP: 0) [critical]`
          );
        } else {
          {
            monster.injure(this.strength * 2);
            console.log(
              `Player ${
                this.name
              } attacks a monster (HP: ${monster.gethp()}) [critical]`
            );
          }
        }
      } else {
        monster.injure(this.strength);
        console.log(
          `Player ${this.name} attacks a monster (HP: ${monster.gethp()})`
        );
      }
    }
  }

  gainExperience(exp: number) {}
}

class Monster {
  private hp: number;
  constructor(hp?: number) {
    this.hp = hp || 100;
  }
  // Think of how to write injure

  injure(strength: number) {
    this.hp = this.hp - strength;
  }

  gethp() {
    return this.hp;
  }
}

// Invocations of the class and its methods
const player = new Player(20, "Peter");
const monster = new Monster(100);
player.attack(monster);
// English counterpart: Player attacks monster
