const image = {
    src: 'images/s_db.png',
    src2: 'images/b_props.png',
    width: '21px',
    height: '21px',
};

$.ajax({
    url: 'jsons/mockData.json',
    contentType: "application/json",
    dataType: 'json',
    success: function (data) {
        $(document).ready(function() {
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
                const a = $('<a>', { href:`#${data.items[i].name}`,text:'+', class:`${data.items[i].name}`, onclick:`getTable('${data.items[i].id}', '${data.items[i].name}')`});
                a.attr({
                    'data-toggle': "collapse",
                    'onclick': `collapse('${data.items[i].name}')`
            });
        const img = $('<img>', {src: image.src, width: image.width, height: image.height});
        var div = $('<div/>',{id:`${data.items[i].name}`, class:'collapse'});
        const text = $('<a>', { href:`#`, text: `${data.items[i].name}`, class:`demo${i + 1}`,onclick:`dynamicCollapsesTable(${i+1}),staticHtml('divForCollapse'),getTable('${data.items[i].id}', '${data.items[i].name}')`});
        text.css({
            'color': '#646464',
        });
        li
            .append(a)
            .append(img)
            .append(text)
            .append(div)
            .appendTo(ul);
        ul
            .appendTo(divMain);
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

function getTable(id, name) {
    $.ajax({
        url: 'jsons/mockData2.json',
        contentType: "application/json",
        dataType: 'json',
        success: function (data) {
            for(let j = 0;j < data.items.length; j++){                                   //second loop
                if(id === data.items[j].id){
                    const ul2 = $('<ul/>',{class:"ml"});
                    const li2 = $('<li/>');
                    const img2 = $('<img>', {src:image.src2 ,width: image.width, height: image.height});
                    const div2 = $('<div/>', {id:`${data.items.name}`, class:'collapse'});
                    const linkForTbl = $('<a>', { href:`#`, text: data.items[j].name, onclick:`showFun(${j+1}),staticHtml('structuresTable')`});
                    linkForTbl.css({'color': '#646464'});
                    const div = $(`#${name}`);
                    li2
                        .append(img2)
                        .append(linkForTbl)
                        .append(div2)
                        .appendTo(ul2);
                    div.html(ul2);
                }
            }


        }
    });
}

