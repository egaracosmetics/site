
  $(document).ready(function(){
    
   getD();
    
  });
  
function getD(){

  //get data from database
   const db = firebase.firestore();
  db.collection("orders").orderBy("tm", "desc")
    .onSnapshot(function(snapshot) {
        if(localStorage.getItem("hsusername")){
            
       if (snapshot.empty) {
      //  console.log('no orders found');   
                alert("no orders yet");
    } else {
        // do something with the data
     //   console.log('orders found');
    }
        snapshot.docChanges().forEach(function(change) {

            if (change.type === "added") {
             //   console.log("New order: ", change.doc.data());
                
                   var name = change.doc.data().fn;
                 var qty = change.doc.data().qt;
                var amount = change.doc.data().tl;
               // function todate(){
                     var t = change.doc.data().tm; 
                    const time = t.toDate();
                      var address = change.doc.data().ad;
                      var busstop = change.doc.data().bt;
                       var paytype = change.doc.data().py;
                        var phone = change.doc.data().ph;
                       var email = change.doc.data().em;
                       var transref = change.doc.data().tr;
                      
    var $row = $('<tr></tr>').appendTo('#orderbody');
         $('<td></td>').appendTo($row).append($('<div style="background-color:#ceeaf5; padding:10px;">Name:<span style="padding-right:10px;"><b>'+name+'</b></span>Address:<span style="padding-right:10px;"><b>'+address+'</b></span>Bus Stop: <span style="padding-right:10px;"><b>'+busstop+'</b></span>Phone: <span style="padding-right:10px;"><b>'+phone+'</b></span style="padding-right:10px;">Email: <span style="padding-right:10px;"><b>'+email+'</b></span>Qty: <span style="padding-right:10px;"><b>'+qty+'</b></span>Amount: <span style="padding-right:10px;"><b>'+amount+'</b></span> Pay method: <span style="padding-right:10px;"><b>'+paytype+'</b></span>Order time: <span style="padding-right:10px;"><b>'+time+'</b></span>Ref: <span style="padding-right:10px;"><b>'+transref+'</b></span></div>'));
           
            }
            if (change.type === "modified") {
                console.log("Modified city: ", change.doc.data());
            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.data());
            }
        });
        }   else {
    
    //hide main page
    document.location.href="reportlogin.html";

}
    });
    //get total
    db.collection("hstotal").get().then(snap => {
    snap.forEach(doc => {
 
     var amount = doc.data().tl;
     $("#tot").text("N"+amount);
            });
         });
    
 }
 
  
  
   
