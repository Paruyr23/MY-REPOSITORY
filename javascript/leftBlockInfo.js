$(document).ready(function(){
    const ulMain = $('<ul/>');
    const liMain = $('<li/>');
    const aMain = $('<a/>',{ href: '#demo', text: '+', class:'demo'});
    aMain.attr({
        'data-toggle': "collapse",
        'onclick': "collapse('demo')"
    });
    const mainText =  $('<a>', { href:`#`, text: `mainCollapse`});
    mainText.css({'color': '#646464','cursor': 'auto'});
    const imgMain = $('<img>', {src:'images/files.png', width:'21px',height:'21px'});
    const divMain = $('<div/>',{id:'demo', class:'collapse'});
    const newLink =  $('<a>', { href:`#`, text: `New`,onclick:`showFun(${7})`});
    newLink.css('color', '#646464');
    const newImg = $('<img>', {src:'images/new.png', width:'21px',height:'21px'});
    newImg.css('margin-left','30px')
    divMain
        .append(newImg)
        .append(newLink);
    for(let i = 0;i < items.length ;i++){                                                  // first loop
        const ul = $('<ul/>');
        const li = $('<li/>');
        const a = $('<a>', { href:`#collapse${i + 1}`, text: '+', class:`collapse${i + 1}`});
        a.attr({
                'data-toggle': "collapse",
                'onclick': `collapse('collapse${i + 1}')`
        });
        const img = $('<img>', {src: image.src, width: image.width, height: image.height});
        const div = $('<div/>',{id:`collapse${i + 1}`, class:'collapse'});
        const text = $('<a>', { href:`#`, text: `collapse${i + 1}`, class:`demo${i + 1}`});
        text.css({'color': '#646464','cursor': 'auto'});
        li
            .append(a)
            .append(img)
            .append(text)
            .append(div)
            .appendTo(ul);
        ul
            .appendTo(divMain);
        for(let j = 0;j < items[i].children.length; j++){                                  // second loop
            const ul2 = $('<ul/>');
            const li2 = $('<li/>');
            const a2 = $('<a>', { href: `#tables${i + 1}`, text: '+', class:`tables${i + 1}`});
            a2.attr({
                    'data-toggle': "collapse",
                    'onclick': `collapse('tables${i + 1}')`
            });
            const img2 = $('<img>', {src:image.src ,width: image.width, height: image.height});
            const div2 = $('<div/>',{id:`tables${i + 1}`, class:'collapse'});
            const afortbl = $('<a>', { href:`#`, text: items[i].children[j].name + (i + 1), onclick:`showFun(${i+1})`});
            li2
                .append(a2)
                .append(img2)
                .append(afortbl)
                .append(div2)
                .appendTo(ul2);
            ul2.appendTo(div);
            for(let k = 0;k < items[i].children[j].children2.length;k++){                  //  third loop
                const ul3 = $('<ul/>');
                const li3 = $('<li/>');
                const a3 = $('<a>', { href: `#`, text: items[i].children[j].children2[k].name + (i + 1)});
                a3.css({'color': '#646464','cursor': 'auto'});
                a3.attr({
                        'data-toggle': "collapse",
                        'onclick': `collapse('child${i + 1}')`
                });
                const img3 = $('<img>', {src:image.src ,width: image.width, height: image.height});
                const div3 = $('<div/>',{id:`child${i + 1}`, class:'collapse'});
                li3
                    .append(img3)
                    .append(a3)
                    .append(div3)
                    .appendTo(ul3);
                ul3.appendTo(div2);
            }
        }
    }
    liMain
        .append(aMain)
        .append(imgMain)
        .append(mainText)
        .append(divMain)
        .appendTo(ulMain);
    $('.blockInfo').append(ulMain);
});