import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  private _legendary: boolean = false;
  private _year: number = 2000;

  constructor(name: string, height: number, width: number, weight: number, price: number, legendary: boolean, year: number) {
    super(name, height, width, weight, price);
    this.legendary = legendary;
    this.year = year;
  }

  // --- GETTER / SETTER ---
  get legendary(): boolean {
    return this._legendary;
  }

  set legendary(value: boolean) {
    this._legendary = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    if (value <= 0) {
      throw new Error("L'année doit être supérieure à 0.");
    }
    this._year = value;
  }

  // --- MÉTHODES ---
  /**
   * Durée de vie : (poids * année) / prix
   */
  override duration(): number {
    const value = (this.weight * this.year) / this.price;
    return Math.max(1, parseFloat(value.toFixed(2)));
  }

  /**
   * Dégâts : (poids * hauteur * largeur + bonus) / année
   * Si non légendaire ou durée < 10 ans, réduction 10%
   */
  override damage(): number {
    const base = (this.weight * this.height * this.width + this.bonus()) / this.year;
    let total = base;

    if (!this.legendary || this.duration() < 10) {
      total *= 0.9; // réduction de 10%
    }

    return Math.max(1, parseFloat(total.toFixed(2)));
  }

  /**
   * Bonus : uniquement si légendaire
   */
  override bonus(): number {
    if (!this.legendary) return 0;
    const value = this.weight / this.year;
    return Math.max(0, parseFloat(value.toFixed(2)));
  }
}
