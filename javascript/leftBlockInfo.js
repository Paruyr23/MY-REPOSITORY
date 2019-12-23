$.ajax({
    url: 'jsons/mockData.json',
    contentType: "application/json",
    dataType: 'json',
    success: function (data) {
        $(document).ready(function() {
            const image = {
                src: 'images/document.png',
                width: '21px',
                height: '21px',
            };
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
            const newLink =  $('<a>', { href:`#`, text: `New`, onclick:`staticHtml('new')`});
            newLink.css('color', '#646464');
            const newImg = $('<img>', {src:'images/new.png', width:'21px',height:'21px'});
            newImg.css('margin-left','30px');
            divMain
                .append(newImg)
                .append(newLink);
            for(let i = 0;i < data.items.length ;i++){                                                  // first loop
                const ul = $('<ul/>');
                const li = $('<li/>');
                const a = $('<a>', { href:`#${data.items[i].name}`, text: '+', class:`${data.items[i].name}`});
                a.attr({
                    'data-toggle': "collapse",
                    'onclick': `collapse('${data.items[i].name}')`
                });
                const img = $('<img>', {src: image.src, width: image.width, height: image.height});
                const div = $('<div/>',{id:`${data.items[i].name}`, class:'collapse'});
                const text = $('<a>', { href:`#`, text: `${data.items[i].name}`, class:`demo${i + 1}`});
                text.css({'color': '#646464','cursor': 'auto'});
                li
                    .append(a)
                    .append(img)
                    .append(text)
                    .append(div)
                    .appendTo(ul);
                ul
                    .appendTo(divMain);
                for(let j = 0;j < data.items[i].children.length; j++){                                  // second loop
                    const ul2 = $('<ul/>');
                    const li2 = $('<li/>');
                    const a2 = $('<a>', { href: `#${data.items[i].children[j].name}`, text: '+', class:`${data.items[i].children[j].name}`});
                    a2.attr({
                        'data-toggle': "collapse",
                        'onclick': `collapse('${data.items[i].children[j].name}')`
                    });
                    const img2 = $('<img>', {src:image.src ,width: image.width, height: image.height});
                    const div2 = $('<div/>',{id:`${data.items[i].children[j].name}`, class:'collapse'});
                    const afortbl = $('<a>', { href:`#`, text: data.items[i].children[j].name, onclick:`showFun(${i+1})`});
                    li2
                        .append(a2)
                        .append(img2)
                        .append(afortbl)
                        .append(div2)
                        .appendTo(ul2);
                    ul2.appendTo(div);
                    for(let k = 0;k < data.items[i].children[j].children2.length;k++){                  //  third loop
                        const ul3 = $('<ul/>');
                        const li3 = $('<li/>');
                        const a3 = $('<a>', { href: `#`, text: data.items[i].children[j].children2[k].name});
                        a3.css({'color': '#646464','cursor': 'auto'});
                        a3.attr({
                            'data-toggle': "collapse",
                            'onclick': `collapse('${data.items[i].children[j].children2[k].name}')`
                        });
                        const img3 = $('<img>', {src:image.src ,width: image.width, height: image.height});
                        const div3 = $('<div/>',{id:`${data.items[i].children[j].children2[k].name}`, class:'collapse'});
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
    }
});