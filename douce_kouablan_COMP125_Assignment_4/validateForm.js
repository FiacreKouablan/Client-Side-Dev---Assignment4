// Name: Demario Douce
// ID Number: 301021637


"use strict";
ValidateForm();
function ValidateForm(){
    removeSelectedFields();
    firstAndLast();
    LastAndFirst();
    phoneNumber();
    phoneNumber1();
    window.addEventListener("submit", ValidateForm, false);
}
    function firstAndLast(){
    var fName = document.getElementById("FirstName").value;
        if (fName.length > 15){
        //document.getElementById("NameFirst").innerHTML = "First name's length shouldn't exceed 15 characters.";  
        alert("First name's length shouldn't exceed 15 characters.");
        return false;
        }
        window.addEventListener("click", firstAndLast, false);
    }

    function LastAndFirst(){
        var fName = document.getElementById("LastName").value;
            if (fName.length > 15){
            alert("Last name's length shouldn't exceed 15 characters.");
            return false;
            }
            window.addEventListener("click", LastAndFirst, false);
        }
    
    function removeSelectedFields(){
        var emptyBoxes = document.getElementsByTagName("select");
        for (var i = 0; i < emptyBoxes.length; i++) {
        emptyBoxes[i].selectedIndex = -1;
        }
        window.addEventListener("load", removeSelectedFields, false); 
     }
     
     
     function phoneNumber(){
        var phone = document.getElementById("NumberPhone").value;
         
         if (!phone.length == 10){
             alert("Phone number should be 10 digits. ");
             return false;
             }
         window.addEventListener("submit", phoneNumber, false);
        }

         function phoneNumber1(){
            var phone1 = document.getElementById("NumberPhone").value;
         
         if (isNaN(phone1) ){
            alert("Phone number should contain only digits. ");
            return false;
            }
         window.addEventListener("submit", phoneNumber1, false);
        }

  


/* function firstAndLast(){
    var fName = document.getElementById("FirstName");
    if(fName.value == ""){
        document.getElementById("NameFirst").innerHTML = "Required field shouldn't be blank";
        //alert("Required field shouldn't be blank");
        return false;
    }

    var lName = document.getElementById("LastName").value;
    if(lName == ""){
    document.getElementById("NameLast").innerHTML = "Required field shouldn't be blank";
    return false;
    }
    window.addEventListener("load",firstAndLast, false);   
}
//firstAndLast();
function ValidateForm() {

    
        
    firstAndLast(); 
    //removeSelectedFields();
    
    window.addEventListener("load", ValidateForm, false); 
}
ValidateForm(); */





