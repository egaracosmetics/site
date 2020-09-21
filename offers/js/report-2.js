   $("#pcb").click(function(){
    
     $("#stats").html('<div class="progress"><div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width:20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div>');
        //get input value
        var inp = document.getElementById('pc').value;
        if(inp){
            // check value in db
             $("#stats").html('<div class="progress"><div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width:50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div>');
             
            const db = firebase.firestore();
db.collection("susers").where("pd", "==", inp)
.get().then(snap => {
    snap.forEach(doc => {
    //    console.log(doc.data());
    
     $("#stats").html('<div class="progress"><div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width:90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div></div>');
        if(doc.data().size == ""){
            console.log("not found");
           alert("passcode incorrect");
               //     $("#loginbtn").attr("disabled", false);

        } else {
            //if ok, hide this div and show main content
            localStorage.setItem("hsusername", inp)
           //show main page
     window.location.href="report.html";
            
        }
    });
});
        } else {
            
            alert("passcode empty");
        }
    });