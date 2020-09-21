
$("#mb").click(function(){ 

//get form data

var fn = document.getElementById("fname").value;
var ln = document.getElementById("lname").value;
var em = document.getElementById("email").value;
var ph = document.getElementById("phone").value;

//check for empy data
 if(ph){
     window.error = 0;
   } else {
    window.error = 1;
   }
   if(fn){
     window.error = 0;
   } else {
    window.error = 1;
   }
   if(ln){
     window.error = 0;
   } else {
    window.error = 1;
   }
   if(em){
     window.error = 0;
   } else {
    window.error = 1;
   }
   
if(window.error == 1){
    alert("You missed something on the form");
} else {
var listId = "c169a47c-c6c8-11ea-a3d0-06b4694bee2a";
var url = "https://emailoctopus.com/api/1.5/lists/:"+listId+"/contacts";
var data = {
    "api_key": "bc4dcd4c-9a72-4ec4-96f7-56124c0bd066",
    "email_address": "dozie@wisonline.com.ng",
    "fields": {
        "FirstName": fn,
        "LastName": ln,
        "EmailAddress": em,
        "PhoneNumber": ph
    },
    "status": "SUBSCRIBED"
};

$.ajax({
  url: url,
  type: "POST",
  data: data,
  success: function(result){
    console.log(result);
  }
});

}

});