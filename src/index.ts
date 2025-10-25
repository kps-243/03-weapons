import { Weapon } from "./Weapon";

const sword = new Weapon("Épée longue", 120, 10, 3000, 800);

console.log("Nom :", sword.name);
console.log("Durée de vie (ans) :", sword.duration());
console.log("Dégâts :", sword.damage());
console.log("Bonus :", sword.bonus());
