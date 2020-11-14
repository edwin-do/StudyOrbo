
function createGroup(){

    sessionStorage.name = document.getElementById("inputName").value;
    sessionStorage.course = document.getElementById("inputCourse").value;
    sessionStorage.desc = document.getElementById("inputDesc").value;
    sessionStorage.size = document.getElementById("inputSize").value;
    // date
    sessionStorage.date_y = document.getElementById("inputDateY").value;
    sessionStorage.date_m = document.getElementById("inputDateM").value;
    sessionStorage.date_d = document.getElementById("inputDateD").value;
    // time
    sessionStorage.timeStart = document.getElementById("inputTimeStart").value;
    sessionStorage.timeEnd = document.getElementById("inputTimeEnd").value;

    sessionStorage.private = document.getElementById("inputPrivate").checked;
    sessionStorage.address = document.getElementById("inputAddress").value;

    console.log(sessionStorage.name);
    console.log(sessionStorage.course);
    console.log(sessionStorage.desc);
    console.log(sessionStorage.size);

    console.log(sessionStorage.date_y);
    console.log(sessionStorage.date_m);
    console.log(sessionStorage.date_d);

    console.log(sessionStorage.timeEnd);
    console.log(sessionStorage.timeStart);

    console.log(sessionStorage.private);
    console.log(sessionStorage.address);
    
}