module.exports = function perfectPizzas(){


var smallPizza=0;
var mediumPizza=0;
var  largePizza=0;
var pizzaCost = 0;
actionList = [];


function getSmall(){

return smallPizza;

}

function getMedium(){

    return mediumPizza;
    
    }
    function getLarge(){

        return largePizza;
        
        }

        function getPizzaCost(){

            return pizzaCost;
            
            }

            
function addPizzas(pizzaType){
     
    if(pizzaType =="small"){
        
        pizzaCost += 31.99;
        smallPizza  ++;
        
    }
    else if(pizzaType == "medium"){
        
        pizzaCost+= 58.99;
        mediumPizza ++;
    }
    else if(pizzaType == "large"){
        
        pizzaCost +=  87.99;
        largePizza ++;
    } 
   
    
}
function pizzaOrder(order){
    if (order=== "orderPizza") {
        actionList.push({
            
            orderId: "#1",
            status:"paymentdue",
            amount: pizzaCost

            
        });

       
    }   

}

function pizzaAction(){
    return actionList;
}

function pizzaTotal(){
    return getMedium('medium') + getSmall('small') + getLarge('large');

}



return{
    addPizzas,
    getSmall,
    getLarge,
    getMedium,
    pizzaAction,
    pizzaOrder,
    pizzaTotal,
    getPizzaCost,
}



}