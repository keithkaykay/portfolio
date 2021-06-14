function myFunction() {
    var year = document.getElementById("year").value;
    var yy = parseInt(year);
    var month = document.getElementById("month").value;
    var mm = parseInt(month);
    var day = document.getElementById("date").value;
    var dd = parseInt(day);
    var cc = (yy - 1) / 100 + 1;
    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    var maleName = ["Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", "Kwasi"];
    var femaleName = ["Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama", "Akosua"];
    var birthday = new Date(mm + "/" + dd + "/" + yy);
    var dayOfTheWeek = birthday.getDay();
    var result =parseInt(cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7;

    if (document.getElementById("gender").checked) {
        var gender = "male";
    } else {
        var gender = "female";
    }
    if (mm < 1 || mm > 12) {
        alert("Enter correct month!");
    } else if (dd < 1 || dd > 31 || (mm == 2 && dd > 29)) {
        alert("Enter correct date!");

        
    } else if (Math.round(result) == 1 && gender === "male") {
        document.getElementById("display").innerHTML =
            days[dayOfTheWeek] +
            maleName[1];
    } else if (Math.round(result) == 2 && gender === "male") {
        document.getElementById("display").innerHTML =
            days[dayOfTheWeek] +
            maleName[2];
    } else if (Math.round(result) == 3 && gender === "male") {
        document.getElementById("display").innerHTML =
            days[dayOfTheWeek] +
            maleName[3];
    } else if (Math.round(result) == 4 && gender === "male") {
        document.getElementById("display").innerHTML =
            days[dayOfTheWeek] +
            maleName[4];
    } else if (Math.round(result) == 5 && gender === "male") {
        document.getElementById("display").innerHTML =
            days[dayOfTheWeek] +
            maleName[5];
    } else if (Math.round(result) == 6 && gender === "male") {
        document.getElementById("display").innerHTML =
            days[dayOfTheWeek] +
            maleName[6];
    } else if (Math.round(result) == 0 && gender === "male") {
        document.getElementById("display").innerHTML =
            days[dayOfTheWeek] +
            maleName[0];
    } else if (Math.round(result) == 1 && gender === "female") {
        document.getElementById("display").innerHTML =
            days[dayOfTheWeek] +
            femaleName[1];
    } else if (Math.round(result) == 2 && gender === "female") {
        document.getElementById("display").innerHTML =
            days[dayOfTheWeek] +
            femaleName[2];
    } else if (Math.round(result) == 3 && gender === "female") {
        document.getElementById("display").innerHTML =
            days[dayOfTheWeek] +
            femaleName[3];
    } else if (Math.round(result) == 4 && gender === "female") {
        document.getElementById("display").innerHTML =
            days[dayOfTheWeek] +
            femaleName[4];
    } else if (Math.round(result) == 5 && gender === "female") {
        document.getElementById("display").innerHTML =
            days[dayOfTheWeek] +
            femaleName[5];
    } else if (Math.round(result) == 6 && gender === "female") {
        document.getElementById("display").innerHTML =
            days[dayOfTheWeek] +
            femaleName[6];
    } else if (Math.round(result) == 0 && gender === "female") {
        document.getElementById("display").innerHTML =
            days[dayOfTheWeek] +
            femaleName[1];
    } else {
        alert("Fill in all required fields");
    }
}