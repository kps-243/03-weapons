export class Weapon {
  private _name: string = "";
  private _height: number = 0;
  private _width: number = 0;
  private _weight: number = 0;
  private _price: number = 0;
  
  constructor(name: string, height: number, width: number, weight: number, price: number) {
    this.name = name;
    this.height = height;
    this.width = width;
    this.weight = weight;
    this.price = price;
  }

  // --- GETTERS & SETTERS ---
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (!value || typeof value !== "string") {
      throw new Error("Le nom doit être une chaîne de caractères.");
    }
    this._name = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    if (value <= 0) {
      throw new Error("La hauteur doit être supérieure à 0.");
    }
    this._height = value;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    if (value <= 0) {
      throw new Error("La largeur doit être supérieure à 0.");
    }
    this._width = value;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    if (value <= 0) {
      throw new Error("Le poids doit être supérieur à 0.");
    }
    this._weight = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value <= 0) {
      throw new Error("Le prix doit être supérieur à 0.");
    }
    this._price = value;
  }

  // --- MÉTHODES ---
  duration(): number {
    const duree = (this.price / this.weight) * 10;
    return Math.max(1, parseFloat(duree.toFixed(2)));
  }

  damage(): number {
    const degats = (this.height * this.width * this.weight) / 10000;
    return Math.max(1, parseFloat(degats.toFixed(2)));
  }

  bonus(): number {
    const bonus = this.price / 100;
    return Math.max(0, parseFloat(bonus.toFixed(2)));
  }
}
