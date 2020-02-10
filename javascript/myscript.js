function collapse(element) {
    const collapse = document.getElementById(element);
    const link = document.getElementsByClassName(element);
    if (!collapse.classList.contains('in')) {
        link[0].innerHTML = "-";
        return;
    }
    link[0].innerHTML = "+";
}


$.ajax({
    url: 'jsons/nav.json',
    contentType: "application/json",
    dataType: 'json',
    success: function (response) {
        let cont = document.querySelector('#header');
        for (let i = 0; i < response.nav.length; i++) {
            const divs = document.createElement('div');
            const a = document.createElement('a');
            const images = document.createElement('img');
            divs.setAttribute(`class`, `forChangeCol`);
            images.setAttribute('src', `${response.nav[i].src}`);
            images.setAttribute('width', '21px');
            images.setAttribute('height', '21px');
            a.setAttribute('href', '#');
            a.innerHTML = `${response.nav[i].name}`;
            divs.appendChild(images);
            divs.appendChild(a);
            cont.appendChild(divs);
        }
    }
});


function showFun(arg) {
    $.ajax({
        url: 'jsons/tables/tables.json',
        contentType: "application/json",
        dataType: 'json',
        success: function (data) {
            var content = document.getElementById("childTable");

            var tables = document.createElement("table");
            tables.setAttribute("class", "table");
            var tr1 = document.createElement("tr");
            tr1.setAttribute("class", "th");
            tr1.innerHTML = `
                <th><img src="images/s_fulltext.png"></th>
                <th><a href="#">Id</a></th>
                <th><a href="#">Nom</a></th>
                <th><a href="#">Nb</a></th>
            `;
            tables.appendChild(tr1);
            for (let j = 0; j < data.tables.length; j++) {
                if (arg === j + 1) {
                    for (let i = 0; i < data.tables[j].table.length; i++) {
                        let tr = document.createElement('tr');
                        tr.innerHTML += `
                        <td>
                            <input type="checkbox">
                            <img src="images/b_edit.png" width="17px" height="17px"><a href="#">Edit</a>
                            <img src="images/b_insrow.png" width="17px" height="17px"><a href="#">Copy</a>
                            <img src="images/b_drop.png" width="17px" height="17px"><a href="#">Delete</a>
                        </td>
                        <td>${data.tables[j].table[i].id}</td>
                        <td>${data.tables[j].table[i].nom}</td>
                        <td>${data.tables[j].table[i].nb}</td>`;
                        $(tables).append(tr);
                    };
                }
            }

            $(content).html(tables);
        }
    });
}


const phpAdmin = $('#mainHomeDiv');
const newCollapse = $('#new');
const createNewTable = $('#newTable');
const collaspeTable =$('#divForCollapse');
const contentBlock = $('#info');
const structure = $('#structuresTable');



function staticHtml(param) {
    switch (param) {
        case 'mainHomeDiv':
            contentBlock.html(phpAdmin);
            break;
        case 'new':
            newCollapse.removeClass("hidden");
            contentBlock.html(newCollapse);
            break;
        case 'newTable':
            createNewTable.removeClass("hidden");
            contentBlock.html(createNewTable);
            break;
        case 'divForCollapse':
            collaspeTable.removeClass("hidden");
            contentBlock.html(collaspeTable);
            break;
        case 'structuresTable':
            structure.removeClass("hidden");
            contentBlock.html(structure);
            break;
    }
}

function dynamicCollapsesTable(arg) {
    $.ajax({
        url: 'jsons/tables/collapsesTable.json',
        contentType: "application/json",
        dataType: 'json',
        success: function (data) {
            var placeForTables = document.getElementById("collapsesTable");

            var tables = document.createElement("table");
            tables.setAttribute("class", "table");
            var tr3 = document.createElement("tr");
            tr3.setAttribute("class", "th");
            tr3.innerHTML = `
                <th>Table</th>
                <th>Action</th>
                <th>Rows</th>
                <th>Type</th>
                <th>Collation</th>
                <th>Size</th>
                <th>Overhead</th>
            `;
            tables.appendChild(tr3);
            for (let j = 0; j < data.tables.length; j++) {
                if (arg === j + 1) {
                    for (let i = 0; i < data.tables[j].table.length; i++) {
                        let tr = document.createElement('tr');
                        tr.innerHTML += `
                        <td><input type="checkbox">${data.tables[j].table[i].name}</td>
                        <td>
                            <img src="images/star.png" width="17px" height="17px">
                            <img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
                            <img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a>
                            <img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
                            <img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
                            <img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
                            <img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a>
                        </td>
                        <td>${data.tables[j].table[i].rows}</td>
                        <td>${data.tables[j].table[i].type}</td>
                        <td>${data.tables[j].table[i].collation}</td>
                        <td>${data.tables[j].table[i].size}</td>
                        <td>${data.tables[j].table[i].overhead}</td>`;
                        $(tables).append(tr);
                    };
                }
            }

            var tr4 = document.createElement("tr");
            tr4.setAttribute("class", "th");
            tr4.innerHTML = `
                <th>tables</th>
                <th>Sum</th>
                <th>InnoDB</th>
                <th>utf8_unicode_ci</th>
                <th>Collation</th>
                <th>Size</th>
                <th>0 Kib</th>
            `;
            $(tables).append(tr4);
            $(placeForTables).html(tables);
        }
    });
}



function change(click) {
    const mainContent = document.getElementById('mainContent');
    const leftContent = document.getElementById('leftContent');
    const imgChange = document.getElementById('imgChange');
    if ($(imgChange).attr("src") !== "images/arrow_right.png") {
        leftContent.style.display = 'none';
        mainContent.style.width = '100%';
        $(imgChange).attr("src", "images/arrow_right.png");
    } else {
        $(imgChange).attr("src", "images/arrow_left.png");
        mainContent.removeAttribute("style");
        leftContent.removeAttribute("style");
    }
}


function Open() {
    window.open("http://localhost:63342/phpMyAdmin/index.html?_ijt=rqs7h8urffg7vtkrqg3uee5au6", "_blank");
}