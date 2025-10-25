import { Sword } from "./Sword";

export class Excalibur extends Sword {
  constructor(name: string, height: number, width: number, weight: number, price: number, year: number) {
    // Toujours légendaire
    super(name, height, width, weight, price, true, year);
  }

  /**
   * Bonus : poids / année * 1.3
   */
  override bonus(): number {
    const baseBonus = this.weight / this.year;
    const value = baseBonus * 1.3;
    return Math.max(0, parseFloat(value.toFixed(2)));
  }
}
