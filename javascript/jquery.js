$(document).ready(function(){
    var array = [];

    array.push(
        {
            src:'images/document.png',
            width:'21px',
            height:'21px'
        },
        {
            src:'images/document.png',
            width:'21px',
            height:'21px'
        },
        {
            src:'images/document.png',
            width:'21px',
            height:'21px'
        }
    );

    var tables =[];

    tables.push(
        {
            arg:1
        },
        {
            arg:2
        },
        {
            arg:3
        },
        {
            arg:4
        },
        {
            arg:5
        },
        {
            arg:6
        }
    );

    var ulMain = $('<ul/>');
    var liMain = $('<li/>');
    var aMain = $('<a/>',{ href: '#demo', text: '+', class:'demo'});
    aMain.attr('data-toggle', "collapse");
    aMain.attr('onclick', "collapse('demo')");
    var mainText =  $('<a>', { href:`#`, text: `mainCollapse`});
    mainText.css({'color': '#646464','cursor': 'auto'})
    var imgMain = $('<img>', {src:'images/files.png', width:'21px',height:'21px'});
    var divMain = $('<div/>',{id:'demo', class:'collapse'});
    for(var i = 0;i < 6;i++){
        var ul = $('<ul/>')
        var li = $('<li/>');
        var a = $('<a>', { href:`#demo${i}`, text: '+', class:`demo${i}`});
        a.attr('data-toggle', "collapse");
        a.attr('onclick', `collapse('demo${i}')`);
        var img = $('<img>', {src:`${array[0].src}`,width:`${array[0].width}`,height:`${array[0].height}`});
        var div = $('<div/>',{id:`demo${i}`, class:'collapse'});
        var text = $('<a>', { href:`#`, text: `collapse${tables[i].arg}`, class:`demo${i}`});
        a.appendTo(li);
        img.appendTo(li);
        text.appendTo(li);
        text.css({'color': '#646464','cursor': 'auto'})
        div.appendTo(li);
        li.appendTo(ul);
        ul.appendTo(divMain);
        for(var j = 0;j < 1;j++){
            var ul2 = $('<ul/>')
            var li2 = $('<li/>');
            var a2 = $('<a>', { href: `#demo${i + 7}`, text: '+', class:`demo${i + 7}`});
            a2.attr('data-toggle', "collapse");
            a2.attr('onclick', `collapse('demo${i + 7}')`);
            var img2 = $('<img>', {src:`${array[1].src}`,width:`${array[1].width}`,height:`${array[1].height}`});
            var div2 = $('<div/>',{id:`demo${i + 7}`, class:'collapse'});
            var afortbl = $('<a>', { href:`#`, text: `Table${tables[i].arg}`, onclick:`showFun(${tables[i].arg})`});
            a2.appendTo(li2);
            img2.appendTo(li2);
            afortbl.appendTo(li2);
            div2.appendTo(li2);
            li2.appendTo(ul2);
            ul2.appendTo(div);
            for(var o = 0;o < 1;o++){
                var ul3 = $('<ul/>')
                var li3 = $('<li/>');
                var a3 = $('<a>', { href: `#`, text:`${tables[i].arg} Child`});
                a3.css({'color': '#646464','cursor': 'auto'});
                a3.attr('data-toggle', "collapse");
                a3.attr('onclick', `collapse('demo${i + 13}')`);
                var img3 = $('<img>', {src:`${array[1].src}`,width:`${array[1].width}`,height:`${array[1].height}`});
                var div3 = $('<div/>',{id:`demo${i + 13}`, class:'collapse'});
                img3.appendTo(li3);
                a3.appendTo(li3);
                div3.appendTo(li3);
                li3.appendTo(ul3);
                ul3.appendTo(div2);
            }
        }

    }
    aMain.appendTo(liMain);
    imgMain.appendTo(liMain);
    mainText.appendTo(liMain);
    divMain.appendTo(liMain);
    liMain.appendTo(ulMain);
    $('.blockInfo').append(ulMain);
});
