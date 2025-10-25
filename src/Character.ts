import { Weapon } from "./Weapon";

export class Character {
  private _name: string;
  private _health: number = 100;
  private _hitChance: number;

  constructor(name: string, health: number = 25000) {
    this._name = name;
    this.health = health;
    // hitChance aléatoire entre 50 et 70
    this._hitChance = Math.floor(Math.random() * 21) + 50; 
  }

  // --- GETTERS & SETTERS ---
  get name(): string {
    return this._name;
  }

  get health(): number {
    return this._health;
  }

  set health(value: number) {
    this._health = Math.max(0, value); // ne peut pas être négatif
  }

  get hitChance(): number {
    return this._hitChance;
  }

  // --- MÉTHODES ---
  
  /**
   * Se défendre lors d’une attaque
   * La valeur subie est réduite à 55%
   */
  protect(attackValue: number): number {
    const damageTaken = attackValue * 0.55;
    this.health -= damageTaken;
    return damageTaken;
  }

  /**
   * Attaque un autre personnage avec une arme
   * Si un nombre aléatoire [0-100] < hitChance, l'attaque réussit
   */
  attack(target: Character, weapon: Weapon): string {
    const roll = Math.random() * 100;
    if (roll < this.hitChance) {
      // Dégâts = dégât de l’arme + 13%
      const damage = weapon.damage() * 1.13;
      target.health -= damage;
      return `${this.name} attaque ${target.name} avec succès et inflige ${damage.toFixed(2)} points de dégâts !`;
    } else {
      return `${this.name} a manqué son attaque contre ${target.name}.`;
    }
  }
}
