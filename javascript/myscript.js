window.onload = function () {
        var colElements = document.querySelectorAll('.switch');

        colElements.onclick = function() {
                navElements . forEach ( function ( navElement ) {
                        if (this.innerHTML == '+') this.innerHTML = '-';
                        else this.innerHTML = '+';
                        return false;
                })

                }
        }



        // function changeBg(divObj){
//         divObj.style.background="white";
// }





