"use strict";

// ===================================================
//          JS-Vertiefung – Array-Level_1_8
// ===================================================

console.log("%c JS-Vertiefung – Array-Level_1_8", "color: tomato");

// Aufgabenstellung:
// Die Methode slice() kennen wir ja schon von den strings, auch hier kann man mit slice() Werte aus einem array schneiden und bekommt ein neues array zurück. Hierbei ist zu beachten, dass slice() einen Startindex benötigt, optional auch einen Endindex.

// Erstelle ein neues array mit deinen Lieblingsreisezielen, danach schneidest du mit slice() zwei Werte aus dem array aus und lässt dir das Ergebnis in der Konsole ausgeben.

// Hinweise:
// Lass dir dein array lieblingsreisziele einmal vor dem slicen in der Konsole ausgeben und einmal danach. Dir wird auffallen, dass das ursprüngliche array nicht verändert worden ist. Das bedeutet, dass slice() eine Kopie von den Werten erstellt und nicht das array in sich beeinflusst.
// Schaue dir nochmal die anderen Methoden an und erkenne den Unterschied.

const reiseziele = ['Deutschland', 'Holland', 'Spanien', 'Neuseeland', 'Australien', 'USA'];
console.log(reiseziele);
console.log(reiseziele.slice(1, 3));

// ===================================================
//          JS-Vertiefung – Array-Level_1_10
// ===================================================

console.log("%c JS-Vertiefung – Array-Level_1_10", "color: tomato");

// Aufgabenstellung:
// Nun kommen wir zu einer string Methode, die ein array zurückgibt. Deswegen wird split() immer erst bei arrays behandelt und nicht vorher. Mit split() können wir aus einem string ein array erstellen lassen. Dabei können wir in den ()-Klammern von split() festhalten,  wie unser string gestückelt werden soll.

const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."

const splitAtPoint = text.split('.');
console.log(splitAtPoint);

const splitAtSpace = text.split(' ');
console.log(splitAtSpace);

const splitAtChar = text.split('');
console.log(splitAtChar);


