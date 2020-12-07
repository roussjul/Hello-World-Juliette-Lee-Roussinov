function UpdateMonth(){
    var d = new Date();
    var months = ["January", "February", "March", "April", "May","June", "July", "August", "September",
    "Octeber", "November", "December"];
    document.getElementById("IMGDate").innerHTML = months[d.getMonth()] + ", " + d.getFullYear();
}