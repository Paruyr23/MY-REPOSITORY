const phpAdmin = $('#home');
const newCollapse = $('#new');
const createNewTable = $('#newTable');
const contentBlock = $('#info');

function collapse(element) {
    const collapse = document.getElementById(element);
    const link = document.getElementsByClassName(element);
    if (!collapse.classList.contains('in')) {
        link[0].innerHTML = "-";
        return;
    }
    link[0].innerHTML = "+";
}

function showFun(arg) {
    $.ajax({
        url: 'jsons/tables/tables.json',
        contentType: "application/json",
        dataType: 'json',
        success: function (data) {
            var content = document.getElementById("info");
            var tables = document.createElement("table");
            tables.setAttribute("class", "table");
            var tr1 = document.createElement("tr");
            tr1.setAttribute("class", "th");
            tr1.innerHTML = `
                <th>Table</th>
                <th>Action</th>
                <th>Rows</th>
                <th>Type</th>
                <th>Collation</th>
                <th>Size</th>
                <th>Overhead</th>
        `;
            tables.appendChild(tr1);

            for (let j = 0; j < data.tables.length; j++) {
                if (arg === j + 1) {
                    for (let i = 0; i < data.tables[j].table.length; i++) {
                        let tr = document.createElement('tr');
                        tr.innerHTML += `
                        <td><input type="checkbox">${data.tables[j].table[i].name}</td>
                        <td>
                            ${data.tables[j].table[i].action.text}
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

            var tr2 = document.createElement("tr");
            tr2.setAttribute("class", "th");
            tr2.innerHTML = `
                <th>tables</th>
                <th>Sum</th>
                <th>InnoDB</th>
                <th>utf8_unicode_ci</th>
                <th>Collation</th>
                <th>Size</th>
                <th>0 Kib</th>
        `;
            $(tables).append(tr2);
            $(content).html(tables);
        }
    });
}

function staticHtml(param) {
    switch (param) {
        case 'home':
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
    }
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