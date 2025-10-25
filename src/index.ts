import { Weapon } from "./Weapon";
import { Gun } from "./Gun";
import { Sword } from "./Sword";
import { Excalibur } from "./Excalibur";


// test weapon
const sword = new Weapon("Épée longue", 120, 10, 3000, 800);

console.log("Nom :", sword.name);
console.log("Durée de vie (ans) :", sword.duration());
console.log("Dégâts :", sword.damage());
console.log("Bonus :", sword.bonus());


// test gun
const pistol = new Gun("Glock 17", 20, 5, 900, 500, 17);

console.log("Nom :", pistol.name);
console.log("Balles :", pistol.bullets);
console.log("Durée de vie (ans) :", pistol.duration());
console.log("Dégâts :", pistol.damage());
console.log("Bonus :", pistol.bonus());


// test sword
const leviathan = new Sword("Leviathan", 120, 15, 3500, 1000, true, 1000);

console.log("Nom :", leviathan.name);
console.log("Légendaire :", leviathan.legendary);
console.log("Année :", leviathan.year);
console.log("Durée de vie (ans) :", leviathan.duration());
console.log("Dégâts :", leviathan.damage());
console.log("Bonus :", leviathan.bonus());


// test excalibur 
const excalibur = new Excalibur("Excalibur", 120, 15, 3500, 1000, 1000);

console.log("Nom :", excalibur.name);
console.log("Légendaire :", excalibur.legendary);
console.log("Année :", excalibur.year);
console.log("Durée de vie (ans) :", excalibur.duration());
console.log("Dégâts :", excalibur.damage());
console.log("Bonus :", excalibur.bonus());
