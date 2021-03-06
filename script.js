// GLOBAL VARIABLES
var myLocation;
var genderSelect;

function LocationObj(){
    var myPosition = {
        lat: null,
        long: null,
        success: null
    };
    var nav = navigator.geolocation;
    nav.getCurrentPosition(success, failure);
    function success(position){
        myPosition.lat = position.coords.latitude;
        myPosition.long = position.coords.longitude;
        myPosition.success = true;
    }
    function failure(error){
        //defaults to learningfuze location if it fails
        myPosition.lat = 33.6362183;
        myPosition.lang = -117.7394721;
        myPosition.success = false;
        myPosition.error = error;
    }
    this.getLocation = function(){
        return myPosition;
    }
}
//DOCUMENT READY
$(document).ready(function(){
    //create location object
    var locObj = new LocationObj();
    myLocation = locObj.getLocation();
    console.log(myLocation);

    createDomPage1();
});

function clearMain(){
    $('.main').children().remove();
}

// PAGE 1 - Date Choice
function createDomPage1(){
    var choiceArray = ['Male', 'Female', 'Surprise Me'];
    for (var i = 0; i < choiceArray.length; i++){
        $('<div>').text(choiceArray[i])
            .addClass('col-lg-4').css('border', '1px solid black').click(function(){
                genderSelect = $(this).text();
                clearMain();
                createDomPage2();
            console.log(genderSelect);
            })
            .appendTo('.main');
    }
}


// PAGE 2 - Date Buttons

function createDomPage2 (){
    for (var i=0; i < 6; i++){
        var dateDiv = $('<div>').addClass('dateBtns col-sm-4 col-xs-6').text(i+1);
        $('.main').append(dateDiv);
    }
}


function clickDate (){
    clearMain();
    createDomPage3();
}








// PAGE 3 - Event Choices

function createDomPage3(){
    clearMain();
    for(var i = 0; i <= 2; i++) {
        var selectEvent = $('<div>').addClass('eventChoices').html('EVENT CHOICE' + i);
        $('.main').append(selectEvent);
    }
}



// PAGE 4  -  Events Buttons










// Dinner





// Cafe





// Parks





// Theaters





// Malls





// Museum





// PAGE 5














