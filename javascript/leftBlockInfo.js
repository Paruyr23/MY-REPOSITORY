$.ajax({
    url: 'jsons/mockData.json',
    contentType: "application/json",
    dataType: 'json',
    success: function (data) {
        $(document).ready(function() {
            const image = {
                src: 'images/s_db.png',
                src2: 'images/b_props.png',
                width: '21px',
                height: '21px',
            };
            const ulMain = $('<ul/>');
            const liMain = $('<li/>');
            const aMain = $('<a/>',{ href: '#demo',text:'+', class:'demo'});
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
            const newImg = $('<img>', {src:'images/b_newdb.png', width:'21px',height:'21px'});
            newImg.css('margin-left','18px');
            divMain
                .append(newImg)
                .append(newLink);
            for(let i = 0;i < data.items.length ;i++){                                                  // first loop
                const ul = $('<ul/>');
                const li = $('<li/>');
                const a = $('<a>', { href:`#${data.items[i].name}`,text:'+', class:`${data.items[i].name}`});
                a.attr({
                    'data-toggle': "collapse",
                    'onclick': `collapse('${data.items[i].name}')`
                });
                const img = $('<img>', {src: image.src, width: image.width, height: image.height});
                const div = $('<div/>',{id:`${data.items[i].name}`, class:'collapse'});
                const text = $('<a>', { href:`#`, text: `${data.items[i].name}`, class:`demo${i + 1}`,onclick:`dynamicCollapsesTable(${i+1}),staticHtml('divForCollapse')`});
                text.css({'color': '#646464'});
                li
                    .append(a)
                    .append(img)
                    .append(text)
                    .append(div)
                    .appendTo(ul);
                ul
                    .appendTo(divMain);
                for(let j = 0;j < data.items[i].children.length; j++){                                  // second loop
                    const ul2 = $('<ul/>',{class:"ml"});
                    const li2 = $('<li/>');
                    const img2 = $('<img>', {src:image.src2 ,width: image.width, height: image.height});
                    const div2 = $('<div/>',{id:`${data.items[i].children[j].name}`, class:'collapse'});
                    const afortbl = $('<a>', { href:`#`, text: data.items[i].children[j].name, onclick:`showFun(${i+1})`});
                    afortbl.css({'color': '#646464'});
                    li2
                        .append(img2)
                        .append(afortbl)
                        .append(div2)
                        .appendTo(ul2);
                    ul2.appendTo(div);
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