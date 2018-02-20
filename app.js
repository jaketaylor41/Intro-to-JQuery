$(document).ready(function(){
    init();
});

function init(){

}

function submitEmployee() {
    $("body").append("<p>Hello Beta</p>");

    //var nameText = document.getElementById("name").value;
    var nameText = $("#name").val();
    var idText = $("#id").val();
    var salaryText = $("#salary").val();


    $("body").append("<p>" + nameText + " " +  idText + " $" +  salaryText +  "</p>")


}