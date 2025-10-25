import { Weapon } from "./Weapon";

export class Gun extends Weapon {
  private _bullets: number = 0;

  constructor(name: string, height: number, width: number, weight: number, price: number, bullets: number) {
    super(name, height, width, weight, price);
    this.bullets = bullets;
  }

  // --- GETTER / SETTER ---
  get bullets(): number {
    return this._bullets;
  }

  set bullets(value: number) {
    if (value <= 0 || !Number.isFinite(value)) {
      throw new Error("Le nombre de balles doit être supérieur à 0.");
    }
    this._bullets = value;
  }

  // --- MÉTHODES ---
  /**
   * Durée de vie : (prix / poids) * dégâts
   */
  override duration(): number {
    const value = (this.price / this.weight) * this.damage();
    return Math.max(1, parseFloat(value.toFixed(2)));
  }

  /**
   * Dégâts : (poids / (hauteur * largeur)) + bonus
   */
  override damage(): number {
    const baseDamage = this.weight / (this.height * this.width);
    const totalDamage = baseDamage + this.bonus();
    return Math.max(1, parseFloat(totalDamage.toFixed(2)));
  }

  /**
   * Bonus : (nombre de balles * poids) / (poids % nombre de balles)
   */
  override bonus(): number {
    const mod = this.weight % this.bullets;
    // pour éviter une division par 0
    if (mod === 0) return this.bullets; 
    const value = (this.bullets * this.weight) / mod;
    return Math.max(0, parseFloat(value.toFixed(2)));
  }
}
