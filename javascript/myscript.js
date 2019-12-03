function collapse (element) {
    const collapse = document.getElementById(element);
    const link = document.getElementsByClassName(element);
    if (!collapse.classList.contains('in')) {
        link[0].innerHTML = "-";

        return;
    }
    link[0].innerHTML = "+";
}

function showFun(Name){
    if (document.querySelector("[data-name=" + Name + "]").style.display == "none") {
        document.querySelector("[data-name=" + Name + "]").style.display = "inline-table";
        document.querySelector('.home').style.display = "none";
        document.querySelector('.forChangeCol').style.backgroundColor = "white";
    }
}


// function resetFun(Name,Name2,Name3,Name4,Name5,Name6){
//     if (document.querySelector("[data-name=" + Name||Name2||Name3||Name4||Name5||Name6 + "]").style.display == "inline-table") {
//         document.querySelector("[data-name=" + Name||Name2||Name3||Name4||Name5||Name6 + "]").style.display = "none";
//     }
// }
//

function openMain(name,name2,name3,name4,name5,name6){
    if(document.querySelector("[data-name=" + name||name2||name3||name4||name5||name6 + "]").style.display == "inline-table"){
        document.querySelector("[data-name=" + name||name2||name3||name4||name5||name6 + "]").style.display = "none";
        document.querySelector('.home').style.display = "block";
        document.querySelector('.forChangeCol').style.backgroundColor = "#DBDBDB";
    }
}




// function changeBg(class) {
//     $('class').css('background-color', 'white');
// }
// let selectedDiv;
//


// ;(function($D){
//     var $a    = $D.querySelector('.block-1');
//         $container = $D.querySelector('.info');
//
//     function changeInfo (e){
//         let data = e.target.dataset,
//             toggleText = $a.innerHTML,
//             isVisible = $container.style.display == 'block';
//
//         $a.innerHTML = data.toggleText;
//         data.toggleText = toggleText;
//
//         $container.style.display = isVisible ? 'none' : 'block';
//     };
// })(document);
//
