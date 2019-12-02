function collapse (element) {
    const collapse = document.getElementById(element);
    const link = document.getElementsByClassName(element);
    if (!collapse.classList.contains('in')) {
        link[0].innerHTML = "-";

        return;
    }
    link[0].innerHTML = "+";
}

function showFun(){
        if (document.querySelector('.table').style.display == "none") {
            document.querySelector('.table').style.display = "inline-table"
            document.querySelector('.home').style.display = "none"
        } else {
            document.querySelector('.table').style.display = "none"
            document.querySelector('.home').style.display = "block"
        }
}


// function changeBg(class) {
//     $('class').css('background-color', 'white');
// }
// let selectedDiv;
//
// function changeBg() {
//     const color = document.getElementsByClassName(block);
//     block.onclick = function(event) {
//         let target = event.target; // где был клик?
//
//         if (target.tagName != 'div'){
//             console.log(111);
//         } //return; // не на block? тогда не интересует
//
//         // highlight(target);// подсветить block
//     };
// };
//
//
// function highlight(a) {
//     // console.log(111);
//     if (selectedDiv) { // убрать существующую подсветку, если есть
//         selectedDiv.classList.remove('highlight');
//     }
//     selectedDiv = div;
//     selectedDiv.classList.add('highlight'); // подсветить новый td
// }


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
