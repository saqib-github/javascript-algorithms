function takeShower(){
    return "showering";
}
function eatBreakfast(){
    let meal = cookFood();
    return `Eating ${meal}`
}
function cookFood(){
 let items = ["oatmeal", "eggs", "protein", "protein in shake", "sweets"];
 return items[Math.floor(Math.random() * items.length)];
}
function wakeUp(){
    takeShower();
    eatBreakfast();
    console.log("Ok ready to go to work!");
}
wakeUp();