window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}

function CLASS(elem) {
    return document.getElementsByClassName(elem);
}

function $(elem) {
    return document.querySelectorAll(elem);
}

var muvjel="";
function button() {
    let txt = ""

    for (let i = 0; i < 10; i++) {
        txt += "<button id='" + i + "'>" + i + "</button>";
        if (i === 10) {
            txt += "</br>";

        }

    }
    CLASS("szamok")[0].innerHTML = txt;


    for (let j = 0; j < 10; j++) {

        ID(j).addEventListener("click", kiir);



        function kiir(event) {
            var szam = Number (event.target.innerHTML);
            CLASS("kifejezes")[0].innerHTML += szam;

        }

        muveletek();
    }
    function muveletek() {
        ID("osszeadas").addEventListener("click", muveletKiir);
        ID("kivonas").addEventListener("click", muveletKiir);
        ID("szorzas").addEventListener("click", muveletKiir);
        ID("osztas").addEventListener("click", muveletKiir);
        ID(".").addEventListener("click", muveletKiir);
        ID("egyenlo").addEventListener("click", eredmeny);
        ID("torles").addEventListener("click", torles);

    }

    function muveletKiir(event) {
        
        let muvjel2=event.target.innerHTML;
       
        if (!CLASS("kifejezes")[0].innerHTML == "") {
            CLASS("kifejezes")[0].innerHTML += muvjel2;

        }
        if (muvjel2!=".")/*A tizedesjelet nem tárolom el, hogy lehessen tizedes számokkal számolni, ne darabolja fel. */
        muvjel=muvjel2;
    }
    

    function torles() {
        
        CLASS("kifejezes")[0].innerHTML = "";
        CLASS("eredmeny")[0].innerHTML = "";
        muvjel="";
    }

}

function eredmeny() {
    var muveletVege = 0;
    var kifejezes = CLASS("kifejezes")[0].innerHTML;
    var darabol = kifejezes.split(muvjel);
   
    /*console.log(kifejezes);
    console.log(darabol);*/
   
    var szamok=[];

    szamok.push(parseFloat(darabol[0]));
    szamok.push(parseFloat(darabol[1]));
    
    /*console.log(szamok);*/

    switch (muvjel) {
        case "+":
            muveletVege = szamok[0] + szamok[1];
            break;
        case "-":
            muveletVege = szamok[0] - szamok[1];
            break;
        case "*":
            muveletVege = szamok[0] * szamok[1];
            break;
        case "/":
            muveletVege = szamok[0] / szamok[1];
            break;
        default:
            break;
    }
    /*console.log(muveletVege);*/
    CLASS("eredmeny")[0].innerHTML ="="+ muveletVege;
}


function init() {
    button();


}