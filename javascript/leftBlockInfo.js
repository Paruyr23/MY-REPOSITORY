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
    for(let i = 0;i < items.length ;i++){                                                  // first loop
        const ul = $('<ul/>');
        const li = $('<li/>');
        const a = $('<a>', { href:`#demo${i + 1}`, text: '+', class:`demo${i + 1}`});
        a.attr({
                'data-toggle': "collapse",
                'onclick': `collapse('demo${i + 1}')`
        });
        const img = $('<img>', {src: image.src, width: image.width, height: image.height});
        const div = $('<div/>',{id:`demo${i + 1}`, class:'collapse'});
        const text = $('<a>', { href:`#`, text: `collapse${i + 1}`, class:`demo${i + 1}`});
        text.css({'color': '#646464','cursor': 'auto'});
        li
            .append(a)
            .append(img)
            .append(text)
            .append(div)
            .appendTo(ul);
        ul.appendTo(divMain);
        for(let j = 0;j < items[i].children.length; j++){                                  // second loop
            const ul2 = $('<ul/>');
            const li2 = $('<li/>');
            const a2 = $('<a>', { href: `#demo${i + j + 1000000}`, text: '+', class:`demo${i + j + 1000000}`});
            a2.attr({
                    'data-toggle': "collapse",
                    'onclick': `collapse('demo${i + j + 1000000}')`
            });
            const img2 = $('<img>', {src:image.src ,width: image.width, height: image.height});
            const div2 = $('<div/>',{id:`demo${i + j + 1000000}`, class:'collapse'});
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
                        'onclick': `collapse('demo${i + k + 1000000000000}')`
                });
                const img3 = $('<img>', {src:image.src ,width: image.width, height: image.height});
                const div3 = $('<div/>',{id:`demo${i + k + 1000000000000}`, class:'collapse'});
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








// $(document).ready(function(){
//     const ulMain = $('<ul/>');
//     const liMain = $('<li/>');
//     const aMain = $('<a/>',{ href: '#demo', text: '+', class:'demo'});
//     aMain.attr('data-toggle', "collapse");
//     aMain.attr('onclick', "collapse('demo')");
//     const mainText =  $('<a>', { href:`#`, text: `mainCollapse`});
//     mainText.css({'color': '#646464','cursor': 'auto'});
//     const imgMain = $('<img>', {src:'images/files.png', width:'21px',height:'21px'});
//     const divMain = $('<div/>',{id:'demo', class:'collapse'});
//
//     for(let collapse of items){
//         var ul = $('<ul/>');
//         var li = $('<li/>');
//         var a = $('<a>', { href:`#demo${items.length}`, text: '+', class:`demo${items.length}`});
//         a.attr('data-toggle', "collapse");
//         a.attr('onclick', `collapse('demo${items.length}')`);
//         var img = $('<img>', {src: image.src, width: image.width, height: image.height});
//         var div = $('<div/>',{id:`demo${items.length}`, class:'collapse'});
//         var text = $('<a>', { href:`#`, text: `collapse${items.length}`, class:`demo${items.length}`});
//         a.appendTo(li);
//         img.appendTo(li);
//         text.appendTo(li);
//         text.css({'color': '#646464','cursor': 'auto'});
//         div.appendTo(li);
//         li.appendTo(ul);
//         ul.appendTo(divMain);
//         for(let tables of items.children){
//             const ul2 = $('<ul/>');
//             const li2 = $('<li/>');
//             const a2 = $('<a>', { href: `#demo${items.children.length}`, text: '+', class:`demo${items.children.length}`});
//             a2.attr('data-toggle', "collapse");
//             a2.attr('onclick', `collapse('demo${items.children.length}')`);
//             const img2 = $('<img>', {src:image.src ,width: image.width, height: image.height});
//             const div2 = $('<div/>',{id:`demo${i + 7}`, class:'collapse'});
//             const afortbl = $('<a>', { href:`#`, text: items.children.name, onclick:`showFun(${items.children.length})`});
//             a2.appendTo(li2);
//             img2.appendTo(li2);
//             afortbl.appendTo(li2);
//             div2.appendTo(li2);
//             li2.appendTo(ul2);
//             ul2.appendTo(div);
//             for(let child of items.children.children2){
//                 const ul3 = $('<ul/>');
//                 const li3 = $('<li/>');
//                 const a3 = $('<a>', { href: `#`, text: items.children.children2.name});
//                 a3.css({'color': '#646464','cursor': 'auto'});
//                 a3.attr('data-toggle', "collapse");
//                 a3.attr('onclick', `collapse('demo${items.children.children2.length}')`);
//                 const img3 = $('<img>', {src:image.src ,width: image.width, height: image.height});
//                 const div3 = $('<div/>',{id:`demo${items.children.children2.length}`, class:'collapse'});
//                 img3.appendTo(li3);
//                 a3.appendTo(li3);
//                 div3.appendTo(li3);
//                 li3.appendTo(ul3);
//                 ul3.appendTo(div2);
//             }
//         }
//     }
//
//     aMain.appendTo(liMain);
//     imgMain.appendTo(liMain);
//     mainText.appendTo(liMain);
//     divMain.appendTo(liMain);
//     liMain.appendTo(ulMain);
//     $('.blockInfo').append(ulMain);
//
//  });

