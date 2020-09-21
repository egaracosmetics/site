$(document).ready(function(){
    
    //load confirmation
    var id = localStorage.getItem("hsid");
        var pay = localStorage.getItem("hspay");
        var qty = localStorage.getItem("hsqty");
        var total = localStorage.getItem("hstl");
        var name = localStorage.getItem("hsfn");
        var address = localStorage.getItem("hsadr");
        var phone = localStorage.getItem("hsppho");
        var bust = localStorage.getItem("hspbs");
        var email = localStorage.getItem("hspem");
        var inst = localStorage.getItem("hsint");
        
        if(pay == "pod"){
            var pf = "Pay on Delivery";
        }
         if(pay == "onlinepayment"){
            var pf = "Online Payment";
        }
        
        $("#idp").text(id);
        $("#paym").text(pf);
        $("#q").text(qty);
        $("#total").text(total);
        $("#fn").text(name);
        $("#add").text(address);
        $("#ph").text(phone);
        $("#bs").text(bust);
        $("#em").text(email);
            $("#ins").text(inst);
        
});