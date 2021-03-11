"use strict";
var myPersonal1 = function (nameCaps1) {
    return console.log(nameCaps1 + "(Aspiring) Full Stack Developer / Previously a retail worker", "Ima cool dude i'd say so myself");
};
var firstName1 = "Justin";
var midI1 = "J";
var lastName1 = "Kelley";
var fullN1 = firstName1 + " " + midI1 + " " + lastName1;
var nameCaps1 = fullN1.toUpperCase();
myPersonal1(nameCaps1);
var displayPositions = function (company, title, description) {
    return console.log('* ' + company + ' | ' + title + ' | ' + description);
};
console.log("My Previous Work Experience: ");
displayPositions("Home Depot Warehouse", "Assoc.", "Loaded inventory to local stores.");
displayPositions("Alabaster Car Wash", "Asst. Manager", "Ensured wash efficiency and managed a team of employees.");
displayPositions("Marc1 Car Wash", "Supervisor", "Customer Service.");
var displaySkill = function (skill, isCool) {
    if (isCool === void 0) { isCool = false; }
    return console.log((isCool ? 'BAM: ' : '') + skill);
};
console.log("My Skills: ");
displaySkill("Music Production", true);
displaySkill("HTML", true);
displaySkill("Baseball", true);
displaySkill("Singing", false);
displaySkill("Cooking", true);
displaySkill("Tap-Dancing", false);
