function randomizer(maxSize){
    return  Math.floor(Math.random() * maxSize);
}
function creaExcusa(){
    whoLength = who.length - 1;
    actionLenght = action.length - 1;
    whatLenght = what.length - 1;
    whenLenght = when.length - 1;

    whoExcusa = randomizer(whoLength);
    actionExcusa = randomizer(actionLenght);
    whatExcusa = randomizer(whatLenght);
    whenExcusa = randomizer(whenLenght);

    var textoExcusa = "";
    textoExcusa = who[whoExcusa];
    textoExcusa = textoExcusa + " " + action[actionExcusa];
    textoExcusa = textoExcusa + " " + what[whatExcusa];
    textoExcusa = textoExcusa + " " + when[whenExcusa];
    return textoExcusa;
    //console.log(textoExcusa)
}
//console.log(randomizer())
var who = ["The dog","My grandma","His turtle","My bird"];
var action = ["ate",'peed","crushed","broke'];
var what = ["my homework", "the keys", "the car"];
var when = ["before the class","right on time","when I finished","during my lunch","while I was praying"];
document.getElementById("excusa").innerHTML = creaExcusa();