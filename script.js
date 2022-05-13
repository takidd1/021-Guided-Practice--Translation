//Guided Practice

$(".spanish").click(function() {
    let speak = $(".name").val();
    console.log(speak);
    $(".message").append(`<h1>Hola, ${speak}!!!</h1>`);
});
$(".french").click(function() {
    let speak = $(".name").val();
    console.log(speak);
    $(".message").append(`<h1>Bonjour, ${speak}!!!!</h1>`);
});
$(".chinese").click(function() {
    let speak = $(".name").val();
    console.log(speak);
    $(".message").append(`<h1>你好, ${speak}!!!!</h1>`);
});
$(".english").click(function() {
    let speak = $(".name").val();
    console.log(speak);
    $(".message").append(`<h1>Hello, ${speak}!!!!</h1>`);
});





//Independent Practice 

$(".japanese").click(function() {
    let speak = $(".name").val();
    console.log(speak);
    $(".message").append(`<h1>Ohayō gozaimasu, ${speak}-sama!</h1>`);
});


