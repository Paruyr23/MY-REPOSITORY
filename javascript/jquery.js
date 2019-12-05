// // // <a href="#demo" data-toggle="collapse" class="demo" onclick="collapse('demo')">+</a><img src="images/files.png" alt="doc" width="20px" height="20px"> Collapse
// // //     <div id="demo" class="collapse">
// $(document).ready(function(){
//
//     var ulMain = $('<ul/>',{text:"YUUUUUHOOOOOO"});
//     var liMain = $('<li/>');
//     for(var i = 0;i < 6;i++){
//         var ul = $('<ul/>')
//         var li = $('<li/>');
//         var a = $('<a>', { href: '#', text: '+'}).appendTo(li);
//         li.appendTo(ul);
//         ul.appendTo(liMain);
//         for(var j = 0;j < 1;j++){
//             var ul2 = $('<ul/>')
//             var li2 = $('<li/>');
//             var a2 = $('<a>', { href: '#', text: '+'}).appendTo(li2);
//             a2.appendTo(li2);
//             li2.appendTo(ul2);
//             ul2.appendTo(li);
//             for(var o = 0;o < 1;o++){
//                 var ul3 = $('<ul/>')
//                 var li3 = $('<li/>');
//                 var a3 = $('<a>', { href: '#', text: '+'}).appendTo(li3);
//                 a3.appendTo(li3);
//                 li3.appendTo(ul3);
//                 ul3.appendTo(li2);
//             }
//         }
//
//     }
//
//     liMain.appendTo(ulMain)
//     $('#wrapper').append(ulMain)
// });




$(document).ready(function(){

    var ulMain = $('<ul/>');
    var liMain = $('<li/>');
    var aMain = $('<a/>',{ href: '#demo', text: '+', class:'demo'});
    aMain.attr('data-toggle', "collapse");
    aMain.attr('onclick', "collapse('demo')");
    var divMain = $('<div/>',{id:'demo', class:'collapse'});
    for(var i = 0;i < 6;i++){
        var ul = $('<ul/>')
        var li = $('<li/>');
        var a = $('<a>', { href:`#demo${i}`, text: '+', class:`.demo${i}`});
        a.attr('data-toggle', "collapse");
        a.attr('onclick', "collapse('demo')");
        var div = $('<div/>',{id:'demo', class:'collapse'});
        a.appendTo(li);
        div.appendTo(li);
        li.appendTo(ul);
        ul.appendTo(divMain);
        for(var j = 0;j < 1;j++){
            var ul2 = $('<ul/>')
            var li2 = $('<li/>');
            var a2 = $('<a>', { href: '#demo3', text: '+', class:'demo3'});
            a2.attr('data-toggle', "collapse");
            a2.attr('onclick', "collapse('demo3')");
            var div2 = $('<div/>',{id:'demo3', class:'collapse'});
            a2.appendTo(li2);
            div2.appendTo(li2);
            li2.appendTo(ul2);
            ul2.appendTo(div);
            for(var o = 0;o < 1;o++){
                var ul3 = $('<ul/>')
                var li3 = $('<li/>');
                var a3 = $('<a>', { href: '#demo4', text: '+', class:'demo4'});
                a3.attr('data-toggle', "collapse");
                a3.attr('onclick', "collapse('demo4')");
                var div3 = $('<div/>',{id:'demo4', class:'collapse'});
                a3.appendTo(li3);
                div3.appendTo(li3);
                li3.appendTo(ul3);
                ul3.appendTo(div2);
            }
        }

    }
    aMain.appendTo(liMain)
    divMain.appendTo(liMain)
    liMain.appendTo(ulMain)
    $('#wrapper').append(ulMain)
});
