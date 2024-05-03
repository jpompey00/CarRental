"use strict"

//textbox elements
const numberOfDaysTextBox = document.getElementById("numberOfDaysTextBox");
//Datebox element
const pickupDateBox = document.getElementById("pickupDateBox");
//checkbox elements
const electronicTollTagCheckbox = document.getElementById("electronicTollTagCheckbox");
const gpsCheckbox = document.getElementById("gpsCheckbox");
const roadsideAssistanceCheckbox = document.getElementById("roadsideAssistanceCheckbox");
//radio buttons elements
const under25NoRadioButton = document.getElementById("under25NoRadioButton");
const under25YesRadioButton = document.getElementById("under25YesRadioButton");

//span elements
const carRentalCostSpan = document.getElementById("carRentalCostSpan");
const optionsCostSpan = document.getElementById("optionsCostSpan");
const under25SurchargeCostSpan = document.getElementById("under25SurchargeCostSpan");
const totalDueSpan = document.getElementById("totalDueSpan");

//button element
const estimateTotalCostButton = document.getElementById("estimateTotalCostButton");


window.onload = function(){

    estimateTotalCostButton.onclick = onEstimateTotalCostButtonClicked;
}


function onEstimateTotalCostButtonClicked(){
    //car rental is $29.99 per day
    //if under 25 there is a 30% surcharge
    //taxes already incorporated

    //surcharge = (29.99 + options) * .3 
    //Total = (surcharge + 29.99 + options ) * numOfDays

    //element values
    let numOfDays = Number(numberOfDaysTextBox.value);
    let electronicTollTagCheck = electronicTollTagCheckbox.checked;
    let gpsCheck = gpsCheckbox.checked;
    let roadsideAssistanceCheck = roadsideAssistanceCheckbox.checked;
    //I only need to check for one of these realisitcally.
    let under25NoButton = under25NoRadioButton.checked;
    let under25YesButton = under25YesRadioButton.checked;
    //arthmetic variables
    let baseRentalCost = 0;
    let surcharge = 0;
    let total = 0;
    let options = 0;
    //constant
    const CAR_RENTAL_RATE = 29.99;


    if(electronicTollTagCheck){
        options += 3.95;
    }
    if(gpsCheck){
        options += 2.95;
    }
    if(roadsideAssistanceCheck){
        options += 2.95;
    }

    baseRentalCost = (CAR_RENTAL_RATE + options) * numOfDays

    if(under25YesButton){
        surcharge = (baseRentalCost + options) * .3; 
    }

    total =  baseRentalCost + surcharge;
    console.log(total);
}


