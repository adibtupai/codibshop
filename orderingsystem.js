function login(){
    document.getElementById("login").style.left = "50px";
    document.getElementById("regis").style.left = "450px";
    document.getElementById("btn2").style.left = "0px";
}

function register(){
    document.getElementById("login").style.left = "-400px";
    document.getElementById("regis").style.left = "50px";
    document.getElementById("btn2").style.left = "110px";
}

document.getElementById('username').oninvalid = function(event) {
    event.target.setCustomValidity('Username is required and cannot be left empty');
}

document.getElementById('psw').oninvalid = function(event) {
    event.target.setCustomValidity('Password must contain upper and lower case with numbers');
}

$('button-submitbtn').click(function(){
    $('.success').addClass("show")
});

function calculation(){
    //Get all products Quantity
    let p1_q = document.getElementById("dutch_q").value;
    let p2_q = document.getElementById("gardenia_q").value;
    let p3_q = document.getElementById("lexus_q").value;
    let p4_q = document.getElementById("milo_q").value;
    let p5_q = document.getElementById("massimo_q").value;
    let p6_q = document.getElementById("oat_q").value;
    let p7_q = document.getElementById("wonda_q").value;
    let p8_q = document.getElementById("mighty_q").value;
    let p9_q = document.getElementById("oreo_q").value;

    localStorage.setItem("p1Q", p1_q);
    localStorage.setItem("p2Q", p2_q);
    localStorage.setItem("p3Q", p3_q);
    localStorage.setItem("p4Q", p4_q);
    localStorage.setItem("p5Q", p5_q);
    localStorage.setItem("p6Q", p6_q);
    localStorage.setItem("p7Q", p7_q);
    localStorage.setItem("p8Q", p8_q);
    localStorage.setItem("p9Q", p9_q);

    localStorage.setItem("p1N", "Dutch Lady");
    localStorage.setItem("p2N", "Gardenia");
    localStorage.setItem("p3N", "Lexus");
    localStorage.setItem("p4N", "Milo");
    localStorage.setItem("p5N", "Massimo");
    localStorage.setItem("p6N", "Oat Krunch");
    localStorage.setItem("p7N", "Wonda Coffee");
    localStorage.setItem("p8N", "Mighty White");
    localStorage.setItem("p9N", "Oreo");

    localStorage.setItem("p1P", "RM2.10");
    localStorage.setItem("p2P", "RM4.40");
    localStorage.setItem("p3P", "RM2.70");
    localStorage.setItem("p4P", "RM1.90");
    localStorage.setItem("p5P", "RM3.00");
    localStorage.setItem("p6P", "RM3.50");
    localStorage.setItem("p7P", "RM2.10");
    localStorage.setItem("p8P", "RM4.20");
    localStorage.setItem("p9P", "RM3.50");
    
    //Get products prices
    let p1_t = p1_q * 2.1;
    let p2_t = p2_q * 4.4;
    let p3_t = p3_q * 2.7;
    let p4_t = p4_q * 1.9;
    let p5_t = p5_q * 3.0;
    let p6_t = p6_q * 3.5;
    let p7_t = p7_q * 2.1;
    let p8_t = p8_q * 4.2;
    let p9_t = p9_q * 3.5;

    //calculate total product
    let total_product = parseInt(p1_q, 10) + parseInt(p2_q, 10) + parseInt(p3_q, 10) + parseInt(p4_q, 10) + parseInt(p5_q, 10) + parseInt(p6_q, 10) + parseInt(p7_q, 10) + parseInt(p8_q, 10) + parseInt(p9_q, 10);

    //calculate total price
    let sum = parseFloat(p1_t) + parseFloat(p2_t) + parseFloat(p3_t) + parseFloat(p4_t) + parseFloat(p5_t) + parseFloat(p6_t) + parseFloat(p7_t) + parseFloat(p8_t) + parseFloat(p9_t);

    //conditional statement for discount
    let disc = 0;
    if (total_product > 4 && total_product < 11){
        disc = 5;
    }
    else if (total_product > 10){
        disc = 15;
    }
    sum *= (1 - (disc/100));

    //conditional statement for postage
    let postage = "RM10.00";
    sum += 10;
    if (sum > 100){
        sum -= 10;
        postage = "FREE";
    }

    localStorage.setItem("discount", disc);
    localStorage.setItem("totalprice", sum.toFixed(2));
    localStorage.setItem("postage_price", postage);
    return false;
}