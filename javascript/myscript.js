function collapse (element) {
    const collapse = document.getElementById(element);
    const link = document.getElementsByClassName(element);
    if (!collapse.classList.contains('in')) {
        link[0].innerHTML = "-";
        return;
    }
    link[0].innerHTML = "+";
}

// function changeBg(class) {
//     $('class').css('background-color', 'white');
// }


// function changeBg(block) {
//     const color = document.getElementsByClassName(block);
//     block.onclick = function(event) {
//         let target = event.target; // где был клик?
//
//         if (target.tagName = block) return; // не на block? тогда не интересует
//
//          // подсветить block
//     };
// };
//
//
// // function color(block){
// //
// // }
//



