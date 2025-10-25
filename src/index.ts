import { Weapon } from "./Weapon";
import { Gun } from "./Gun";


const sword = new Weapon("Épée longue", 120, 10, 3000, 800);

console.log("Nom :", sword.name);
console.log("Durée de vie (ans) :", sword.duration());
console.log("Dégâts :", sword.damage());
console.log("Bonus :", sword.bonus());


const pistol = new Gun("Glock 17", 20, 5, 900, 500, 17);

console.log("Nom :", pistol.name);
console.log("Balles :", pistol.bullets);
console.log("Durée de vie (ans) :", pistol.duration());
console.log("Dégâts :", pistol.damage());
console.log("Bonus :", pistol.bonus());
