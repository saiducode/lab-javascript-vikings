// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }
//should remove the received damage from the health property
//shouldn't return anything
    receiveDamage(theDamage) {
        this.health = this.health - theDamage;        
    }
}
//should receive 0 arguments
//should return the strength property of the Soldier




// Viking


class Viking extends Soldier {
    constructor(name, health, strength){
       super(health, strength);
       this.name = name;
    }

    attack () {
        return this.strength;
  
    }
    
    receiveDamage(theDamage) {
        this.health = this.health - theDamage;
        if (this.health > 0) {
            return (`${this.name} has received ${theDamage} points of damage`);
            
        } else {
            return (`${this.name} has died in act of combat`);
        }
        
    }

    battleCry() {
        return (`Odin Owns You All!`);
    }
}





// Saxon
class Saxon extends Soldier {
    receiveDamage(theDamage) {
        this.health = this.health - theDamage;
        if (this.health > 0){
            return (`A Saxon has received ${theDamage} points of damage`);

        } else {
            return (`A Saxon has died in combat`)
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    
    addViking (Viking) {
       
       this.vikingArmy.push(Viking);
         
        
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }



armyAttack(army) {
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const randomVikingSoldier = this.vikingArmy[randomVikingIndex];
    const randomSaxonSoldier = this.saxonArmy[randomSaxonIndex];

    if (army === "Viking") {
      const attackResult = randomSaxonSoldier.receiveDamage(
        randomVikingSoldier.strength
      );

      this.checkDead(randomSaxonSoldier);

      return attackResult;
    }

    const attackResult = randomVikingSoldier.receiveDamage(
      randomSaxonSoldier.strength
    );

    this.checkDead(randomVikingSoldier);

    return attackResult;
  }

  checkDead(soldier) {
    if (soldier.health <= 0) {
      if (soldier instanceof Viking) {
        const index = this.vikingArmy.indexOf(soldier);

        if (index > -1) {
          this.vikingArmy.splice(index, 1);
        }
      } else {
        const index = this.saxonArmy.indexOf(soldier);

        if (index > -1) {
          this.saxonArmy.splice(index, 1);
        }
      }
    }
  }

  vikingAttack() {
    return this.armyAttack("Viking");
  }

  saxonAttack() {
    return this.armyAttack("Saxon");
  }

  showStatus() {
    if (!this.saxonArmy.length) {
      return "Vikings have won the war of the century!";
    }

    if (!this.vikingArmy.length) {
      return "Saxons have fought for their lives and survived another day...";
    }

    return "Vikings and Saxons are still in the thick of battle.";
  }
}

const war = new War();

