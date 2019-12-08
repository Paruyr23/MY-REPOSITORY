$(document).ready(function(){
    const ulMain = $('<ul/>');
    const liMain = $('<li/>');
    const aMain = $('<a/>',{ href: '#demo', text: '+', class:'demo'});
    aMain.attr('data-toggle', "collapse");
    aMain.attr('onclick', "collapse('demo')");
    const mainText =  $('<a>', { href:`#`, text: `mainCollapse`});
    mainText.css({'color': '#646464','cursor': 'auto'});
    const imgMain = $('<img>', {src:'images/files.png', width:'21px',height:'21px'});
    const divMain = $('<div/>',{id:'demo', class:'collapse'});

    for(let i = 0;i < items.length ;i++){
        var ul = $('<ul/>');
        var li = $('<li/>');
        var a = $('<a>', { href:`#demo${i}`, text: '+', class:`demo${i}`});
        a.attr('data-toggle', "collapse");
        a.attr('onclick', `collapse('demo${i}')`);
        var img = $('<img>', {src: image.src, width: image.width, height: image.height});
        var div = $('<div/>',{id:`demo${i}`, class:'collapse'});
        var text = $('<a>', { href:`#`, text: `collapse${i+1}`, class:`demo${i}`});
        a.appendTo(li);
        img.appendTo(li);
        text.appendTo(li);
        text.css({'color': '#646464','cursor': 'auto'});
        div.appendTo(li);
        li.appendTo(ul);
        ul.appendTo(divMain);

        for(let j = 0;j < items[i].children.length; j++){
            const ul2 = $('<ul/>');
            const li2 = $('<li/>');
            const a2 = $('<a>', { href: `#demo${i + 7}`, text: '+', class:`demo${i + 7}`});
            a2.attr('data-toggle', "collapse");
            a2.attr('onclick', `collapse('demo${i + 7}')`);
            const img2 = $('<img>', {src:image.src ,width: image.width, height: image.height});
            const div2 = $('<div/>',{id:`demo${i + 7}`, class:'collapse'});
            const afortbl = $('<a>', { href:`#`, text: items[i].children[j].name, onclick:`showFun(${i+1})`});
            a2.appendTo(li2);
            img2.appendTo(li2);
            afortbl.appendTo(li2);
            div2.appendTo(li2);
            li2.appendTo(ul2);
            ul2.appendTo(div);

            const ul3 = $('<ul/>');
            const li3 = $('<li/>');
            const a3 = $('<a>', { href: `#`, text: items[i].children[j].children});
            a3.css({'color': '#646464','cursor': 'auto'});
            a3.attr('data-toggle', "collapse");
            a3.attr('onclick', `collapse('demo${i + 13}')`);
            const img3 = $('<img>', {src:image.src ,width: image.width, height: image.height});
            const div3 = $('<div/>',{id:`demo${i + 13}`, class:'collapse'});
            img3.appendTo(li3);
            a3.appendTo(li3);
            div3.appendTo(li3);
            li3.appendTo(ul3);
            ul3.appendTo(div2);
        }
    }

    aMain.appendTo(liMain);
    imgMain.appendTo(liMain);
    mainText.appendTo(liMain);
    divMain.appendTo(liMain);
    liMain.appendTo(ulMain);
    $('.blockInfo').append(ulMain);

 });
