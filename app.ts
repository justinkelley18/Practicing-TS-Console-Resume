
const myPersonal1 = (nameCaps1: string) => 
console.log(nameCaps1 +  "(Aspiring) Full Stack Developer / Previously a retail worker", "Ima cool dude i'd say so myself");

let firstName1 = "Justin" ;
let midI1 = "J"
let lastName1 = "Kelley"
let fullN1 = firstName1 + " " + midI1 + " " + lastName1;
let nameCaps1 = fullN1.toUpperCase();

myPersonal1(nameCaps1);

const displayPositions = (company: string, title: string, description: string) =>
console.log('* ' + company + ' | ' + title + ' | ' + description);

console.log("My Previous Work Experience: ");
displayPositions("Home Depot Warehouse", "Assoc.", "Loaded inventory to local stores.");
displayPositions("Alabaster Car Wash", "Asst. Manager", "Ensured wash efficiency and managed a team of employees.");
displayPositions("Marc1 Car Wash", "Supervisor", "Customer Service.");

const displaySkill = (skill: string, isCool = false) =>
console.log((isCool ? 'BAM: ' : '') + skill);

    console.log("My Skills: ")
    displaySkill("Music Production", true);
    displaySkill("HTML", true);
    displaySkill("Baseball", true);
    displaySkill("Singing", false);
    displaySkill("Cooking", true);
    displaySkill("Tap-Dancing", false);
    