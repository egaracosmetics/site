 $(document).ready(function(){
    //disable submit button
    $("#ordbtn").attr("disabled", true);
 });
 
 
 window.total ="";
    window.price = "";
    window.qty = "";
    window.on = "";
        $("#payment").change(function(){
            
            //reset quantity
            $("#qty").val(0);
            $("#price").text(0);
            
            var payment = document.getElementById("payment").value;
            if(payment == "onlinepayment"){
                var pr = 4550;
           //     $("#price").text(pr);
        window.price = pr;
        window.on = "yes";
           }
            if(payment == "pod"){
                var pr = 5000;
           //       $("#price").text(pr);
                  window.price = pr;
                  window.on = "no";
            }
            
             if(payment == " "){
                var pr = 0;
                  $("#price").text(pr);
                  window.price = pr;
            }
            
            
        });
        
         $("#qty").change(function(){
        var qty = document.getElementById("qty").value;
            
            if(qty < 3 && window.on == "yes")
        {
            console.log("qty is:"+qty);
           window.price = 4550;
              var tprice = qty * window.price;
                $("#price").text(tprice);
        window.total = tprice;
         //enable button
         
          $("#ordbtn").attr("disabled", false);
            
            }
              
            if(qty >= 3 && window.on == "yes")
        {
            console.log("qty is:"+qty);
              window.price = 4000;
              var tprice = qty * window.price;
                $("#price").text(tprice);
        window.total = tprice;
         //enable button
         
          $("#ordbtn").attr("disabled", false);
            
            }
                 if(qty < 3 && window.on == "no")
        {
            console.log("qty is:"+qty);
          window.price = 6500;
              var tprice = qty * window.price;
                $("#price").text(tprice);
        window.total = tprice;
         //enable button
         
          $("#ordbtn").attr("disabled", false);
            
            }
              
            if(qty >= 3 && window.on == "no")
        {
            console.log("qty is:"+qty);
          window.price = 5000;
              var tprice = qty * window.price;
                $("#price").text(tprice);
        window.total = tprice;
         //enable button
         
          $("#ordbtn").attr("disabled", false);
            
            }
        
         });
         
        
        
     //listen for submittion
  $("#ordbtn").click(function(){
    
    $("#ordbtn").attr('disable', true);
    
   $("#stats").html('<div class="progress"><div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width:25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>');
    
    //get form values
     var pay = document.getElementById("payment").value;
     var qty = document.getElementById("qty").value;
      var total = window.total;
       var name = document.getElementById("fn").value;
        var email = document.getElementById("email").value;
         var phone = document.getElementById("phone").value;
          var address = document.getElementById("address").value;
           var bust = document.getElementById("bs").value;
            var instr = document.getElementById("instruction").value;
    //check for empty fields
    
   if(pay){
     window.error = 0;
   } else {
    window.error = 1;
   }
   if(qty){
     window.error = 0;
   } else {
    window.error = 1;
   }
   if(name){
     window.error = 0;
   } else {
    window.error = 1;
   }
   if(email){
     window.error = 0;
   } else {
    window.error = 1;
   }
   if(phone){
     window.error = 0;
   } else {
    window.error = 1;
   }
   if(address){
     window.error = 0;
   } else {
    window.error = 1;
   }
   if(bust){
     window.error = 0;
   } else {
    window.error = 1;
   }
   console.log(window.error);
   if(window.error == 1) {
    alert("please check the form again");
   } else {
    
   //save in db
   
   
      function makecoid(length){
        var result = ' ';
        var characters = '012u3o4567p89';
        var charactersLength= characters.length;
        for( var i=0; i< length; i++){
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
        }
	   
	       function func() { 
    // Original string containing whitespace 
          var coid = makecoid(8);
    // Trimmed string 
          id = coid.trim(); 
} 
func();
	     $("#stats").html('<div class="progress"><div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width:50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div>');
   
   var data = {
     id: id,
     py: pay,
     qt: qty,
      tl: total,
     fn: name,
     em: email,
     ph: phone,
      ad: address,
      bt: bust,
      is: instr,
      tr: "0",
      tm: firebase.firestore.FieldValue.serverTimestamp()
   };
   console.log(data);
   const db = firebase.firestore();
    db.collection("orders").doc(id).set(data).then(function(){
        console.log("done");
        
          $("#stats").html('<div class="progress"><div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width:80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div></div>');
        
        //save in localStorage
         localStorage.setItem("hsid", id);
        localStorage.setItem("hspay", pay);
        localStorage.setItem("hsqty", qty);
        localStorage.setItem("hstl", total);
        localStorage.setItem("hsfn", name);
        localStorage.setItem("hsadr", address);
        localStorage.setItem("hsppho", phone);
        localStorage.setItem("hspbs", bust);
        localStorage.setItem("hspem", email);
        localStorage.setItem("hsint", instr);
        if(window.on == "yes") {
            //if online payment, load payment
            
   

function payWithPaystack() {

  let handler = PaystackPop.setup({

    key: 'pk_test_xxxxxxxxxx', // Replace with your public key

    email: email,
    amount: total * 100,
    firstname: name,
    lastname: none,
    ref: id,

    onClose: function(){
      alert('Window closed.');
    },

    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      
      //save transaction ref
      const db = firebase.firestore();
    db.collection("orders").doc(id).set({tr:response.reference}, {merge:true}).then(function(){
        console.log("tx saved");
        
         window.location.href="orderconfirm.html";
    }); 
      alert(message);
    }

  });

  handler.openIframe();

}
                
                
                payWithPaystack();
         
       
               
    
        
        } else {
              $("#stats").html('<div class="progress"><div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width:100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div></div>');
            console.log("order recieved by POD");
            
        //redirect to confirmation page
        window.location.href="orderconfirm.html";
        }
    });
   
   
   }
  });