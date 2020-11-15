function joinGroup(){
    sessionStorage.groupID = document.getElementById("groupID").value;

    if (sessionStorage.groupID == "231456"){
        location.href="../pages/join_intro.html"
    }
    else{
        document.getElementById("message").textContent = "The groupID " + sessionStorage.groupID + " does not exist";
        document.getElementById("groupID").textContent = "";
    }
};

function joinIntro(){
    
    sessionStorage.joinName = document.getElementById('joinName').value;
    sessionStorage.joinEmail = document.getElementById('joinEmail').value;

    if(sessionStorage.groupID == "231456"){
        location.href = "../pages/join_success.html";        
    }
    else{
        location.href = "../pages/browse_success.html";
    }

}

function changeInfo(){
    sessionStorage.joinName = document.getElementById('joinName').value;
    sessionStorage.joinEmail = document.getElementById('joinEmail').value;
    location.href = "../index.html";
}