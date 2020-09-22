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
                var pr = 5550;
           //     $("#price").text(pr);
        window.price = pr;
        window.on = "yes";
           }
            if(payment == "pod"){
                var pr = 6000;
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
           window.price = 5550;
              var tprice = qty * window.price;
                $("#price").text(tprice);
        window.total = tprice;
         //enable button
         
          $("#ordbtn").attr("disabled", false);
            
            }
              
            if(qty >= 3 && window.on == "yes")
        {
            console.log("qty is:"+qty);
              window.price = 5000;
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
          window.price = 5500;
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
        
        //update total
        //get the value there
        const db2 = firebase.firestore();
db2.collection("hstotal").get().then(snap => {
    snap.forEach(doc => {
    //    console.log(doc.data());
    var oldvalue = doc.data().tl;
        //add this one to it
        var newvalue = total + oldvalue;
        
        //save new value
        var data = { tl: newvalue};
        console.log(newvalue);
        var id="4SxSrCNFKO1RfW2sJhpM";
        db.collection("hstotal").doc(id).set(data).then(function(){
            console.log("total updated");
       
        
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
        
         });
    });
});
        if(window.on == "yes") {
            //if online payment, load payment
            
            
            
    const API_publicKey = "FLWPUBK-0a9b0b0792ccde4572b6527abf4322d0-X";
 //   const API_publicKey = "FLWPUBK_TEST-e758692c08df2ff58e0ee34ad9536e3e-X";

    function payWithRave() {
        var x = getpaidSetup({
            PBFPubKey: API_publicKey,
            customer_email: email,
            amount: total,
            customer_phone: phone,
            currency: "NGN",
            custom_title: "Payment for HairSpice",
            payment_options: "card",
            txref: id,
            meta: [{
                metaname: "flightID",
                metavalue: "AP1234"
            }],
            onclose: function() {},
            callback: function(response) {
                var txref = response.data.txRef; // collect txRef returned and pass to a                    server page to complete status check.
                if(txref){
                    var transref = txref;
                    
                } else {
                   var transref = "0"; 
                }
                
                //save transaction ref
                const db = firebase.firestore();
    db.collection("orders").doc(id).set({tr:transref}, {merge:true}).then(function(){
        console.log("tx saved");
        
    });
                
            //    console.log("This is the response returned after a charge", response);
                
             //   console.log(response.data.responsecode);
              //   console.log(response.data.responsemessage);
              //   console.log(response.data.tx.status);
               
                  if (response.data.tx.status != "successful")
                 {
                    // redirect to a failure page.
               //     console.log("payment failed");
                    alert("Payment failed");
                    
                    //window.location.href="hairspiceoffer.html";
                }
                 if (response.data.tx.status  == "successful") {
                    // redirect to a success page
                             //redirect to confirmation page
        window.location.href="orderconfirm.html";
                }

                x.close(); // use this to close the modal immediately after payment.
            }
        });
    }

         payWithRave();   
    
        
        } else {
              $("#stats").html('<div class="progress"><div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width:100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div></div>');
            console.log("order recieved by POD");
            
        //redirect to confirmation page
       window.location.href="orderconfirm.html";
        }
    });
   
   
   }
  });
