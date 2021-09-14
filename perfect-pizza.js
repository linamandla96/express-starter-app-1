module.exports = function perfectPizzas(){


var smallPizza=0;
var mediumPizza=0;
var  largePizza=0;
var totaPizza = 0;

let smallTotal = 0;
let mediumTotal = 0; 
let largeTotal = 0;


function getSmall(){

return smallPizza;

}

function getMedium(){

    return mediumPizza;
    
    }
    function getLarge(){

        return totaPizza;
        
        }

        function getPizzaCost(){

            return totaPizza;
            
            }

            
function smallPizzaFun(pizzaType){
     
    if(pizzaType =="small"){
        smallTotal +=  31.99
        totaPizza += 31.99;
        smallPizza++;
        
    }
}

function mediumPizzaFun(pizzaType){
    if(pizzaType == "medium"){
        mediumTotal +=58.99
        totaPizza+= 58.99;
        mediumPizza++;
    }

}
   
function largePizzaFun(pizzaType){
    if(pizzaType == "large"){
        largeTotal +=  87.99
        totaPizza +=  87.99;
        largePizza++;
    } 
   
}


function pizzaOrder(order){
    if (order=== "orderPizza") {
        actionList.push({
            
            orderId: "#1",
            status:"paymentdue",
            amount: totaPizza

            
        });

       
    }   

}

function getSmallPizza(){
    return smallTotal
}

function getMediumPizza(){
return mediumTotal;
}

function getLargePizza(){
    return largeTotal;
}

function pizzaAction(){
    return actionList;
}

function pizzaTotal(){
    return getMedium('medium') + getSmall('small') + getLarge('large');

}



return{
    getLargePizza,
    largePizzaFun,
    getSmall,
    getLarge,
    getMedium,
    pizzaAction,
    pizzaOrder,
    pizzaTotal,
    getPizzaCost,
    getMediumPizza,
    getSmallPizza,
    smallPizzaFun,
    mediumPizzaFun

}



}