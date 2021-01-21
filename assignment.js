

//Prbolem No 1
function kilometerToMeter( meter ){
    if( meter < 0 ){
        return  "Please input valid meter to get Kilometer" ;
    }
    else{
        var kilometer = meter / 1000; 
        return kilometer;
    }
}

var kilometerConvert = kilometerToMeter( 1000 );
console.log( kilometerConvert );

// Problem no 2 

function budgetCalculator( watch, phone, laptop ){
    var watchSum = watch * 50;
    var phoneSum = phone * 100;
    var laptopSum = laptop * 500; 

    var totalAmount = watchSum + phoneSum + laptopSum; 

    return totalAmount;
}

// Problem no 3

function hotelCost( days ){
    if (days > 20){
        var thirdWeekAmount = days - 20;
        thirdWeekAmount = thirdWeekAmount * 50; 
        var secondWeekAmount = 10 * 80;
        var firstWeekAmount = 10 * 100;

        let totalSum = firstWeekAmount + secondWeekAmount + thirdWeekAmount; 
        return totalSum;

    }
    else if ( days > 10 && days <= 20 ){
        secWeek = days - 10; 
        secWeek = secWeek * 80;
        firstWeek = 10 * 100;
        var result = secWeek + firstWeek;
        return result;
    }
    else{
        var amount = days * 100;
        return amount;
    }
}

var hottelBudgetAmount = hotelCost( 50 );
console.log(hottelBudgetAmount);

// Problem No 4

function megaFriend( frndnames ){
    for (var i = 0; i < frndnames.length; i++) {
        var maxElement = frndnames[0]; 
        var element = frndnames[i];
        var elementcount = element.length;

        if ( elementcount > maxElement ){
            maxElement = elementcount;
        }
        return maxElement; 
    }
}

var bigname = megaFriend( ['Tumpa', 'Jeba', 'Naim','Muim','Naim'] );
console.log(bigname);