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
                    document.querySelector('.forChangeCol').style.background = "white";
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

            if (arg === 0) {
                $(".forChangeCol").css('background', 'linear-gradient(#fff, #dcdcdc)');
                document.getElementById('info').innerHTML = `
<div class="home">
<div class="col-7 col-md-7 information1">
<div  class="blocks">
<div><h2>General Settings</h2></div>
<div class="about">
<a href="#">Change Password</a>
<p class="currentServer"><img alt="server" class="img-responsive" src="images/server.png" width="16px" height="16px">Current Server:</p>
<select name="MySQL">
<option>MySQL</option>
<option>.....</option>
<option>......</option>
</select>
</div>
</div>
<div class="blocks">
<div><h2>Appearance Settings</h2></div>
<div class="about">
<p class="language"><img alt="server" class="img-responsive" src="images/translation.png" width="15px" height="14px">Language:</p>
<select name="language" class="languages">
<option>English</option>
<option>Russian</option>
<option>Armenian</option>
</select>
<p class="theme"><img alt="server" class="img-responsive" src="images/theme1.png" width="16px" height="16px">Theme:</p>
<select name="theme" class="themes">
<option>pmahomme</option>
<option>....</option>
<option>.....</option>
</select>
</div>
</div>
</div>
<div class="col-5 col-md-5 information2">
<div class="blocks">
<div class="background"><h2>MySQL</h2></div>
<div class="about">
<p>Font size</p>
<a href="#">More Settings</a>
<p>Server connection:<span class="txt">SSL is not being used</span><img src="images/help.png" alt="help" width="21px" height="21px"></p>
<p>Server version: 8.0.18 - MySQL Community Server - GPL</p>
<p>Protocol version: 10</p>
<p>User: root@192.168.30.20</p>
<p>Server charset: UTF-8 Unicode (utf8mb4)</p>
</div>
</div>
<div class="blocks">
<div><h2>Web server</h2></div>
<div class="about">
<p>nginx/1.2.1</p>
<p>Database client version:libmysql-5.5.40</p>
<p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
<p>PHP extension: mysqli <img src="images/help.png" alt="help" width="21px" height="21px"> curl <img src="images/help.png" alt="help" width="21px" height="21px"> mbstring <img src="images/help.png" alt="help" width="21px" height="21px"></p>
<p>Lorem ipsumLorem ipsum</p>
<p>Lorem ipsumLorem ipsum</p>
<p>Lorem ipsum</p>
</div>
</div>
<div class="blocks" >
<div><h2>phpMyAdmin</h2></div>
<div class="about lastBlock">
<p>Version information</p>
<p>Git version</p>
<a>Documentation</a>
<a>Wiki</a>
<a>Official Homepage</a>
<a>Contribute</a>
<a>Get support</a>
<a>List of changes</a>
</div>
</div>
</div>
</div>`
            }
            if (arg === 7) {
                document.querySelector('.forChangeCol').style.background = "white";
                document.getElementById('info').innerHTML = `
<div class="mainBlock">
<h1>Databases</h1>
<div>
<img src="images/new.png" width="20px" height="20px" alt="New"><span>Create databases</span><img src="images/help.png"  width="20px" height="20px" alt="Help">
</div>
<div class="tbl">
<input type="text" name="Database" placeholder="Database name" >
<select>
<option>utf8mb4_0p00_ai_ci</option>
<option>.........gfj,.....</option>
<option>....................</option>
<option>...........</option>
<option>ssgsgdgdgg</option>
<option>utf8mb4_0ps00_ai_ci</option>
<option>utf8mb4_0p00_ai_ci</option>
<option>utsg0p00_ai_ci</option>
<option>utsgsp00_ai_ci</option>
<option>utf8mb4_0p00_ai_ci</option>
<option>utf8mg.......ssgsb4_0p00_ai_ci</option>
<option>utf8mb4_0p00_ai_ci</option>
<option>utf8mb4_0....p00_ai_ci</option>
<option>utf8mb4_0p00_ai_ci</option>
<option>utf8mb4_0p00_ai_ci</option>
<option>addss</option>
</select>
<button onclick="showFun(8)">Create</button>
</div>
</div>
<div class="container-fluid block">
<div class="blockSpan">
<div class="container filters"><h4>Filters</h4></div>
<span>Containing the word <input type="text"></span>
</div>
<div class="database">
<table>
<tr>
<th>Database</th>
<th>Collation</th>
<th>Master replication</th>
<th>Action</th>
</tr>
<tr>
<td><input type="checkbox">lorem ipsum lordgdgdgem</td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<td><input type="checkbox">lorem ipsum </td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<td><input type="checkbox">lorem ipsum </td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<td><input type="checkbox">lorem ipsum </td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<td><input type="checkbox">lorem ipsum lordgdgdgem</td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<td><input type="checkbox">lorem ipsum lordgdgdgem</td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<td><input type="checkbox">lorem ipsum </td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<td><input type="checkbox">lorem ipsum lordgdgdgem</td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<td><input type="checkbox">lorem ipsum lordgdgdgem</td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<td><input type="checkbox">lorem ipsum lordgdgdgem</td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<td><input type="checkbox">lorem ipsum </td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<td><input type="checkbox">lorem ipsum lordgdgdgem</td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<td><input type="checkbox">lorem ipsum lordgdgdgem</td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<td><input type="checkbox">lorem ipsum lordgdgdgem</td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<td><input type="checkbox">loum lordgdgdgem</td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<td><input type="checkbox">lorum lordgdgdgem</td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<td><input type="checkbox">lorem idgdgem</td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<td><input type="checkbox">lorem sum lordgdgdgem</td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<td><input type="checkbox">lorgem</td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<td><input type="checkbox">lorem  lordgdgdgem</td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<td><input type="checkbox"> ipsum lordgdgdgem</td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<td><input type="checkbox">dgdgdgem</td>
<td>lorem ipsum lorem</td>
<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
</tr>
<tr>
<th>Total: 22</th>
</tr>
</table>
<hr>
</div>
</div>
`
            }
            if (arg === 8) {
                document.querySelector('.forChangeCol').style.background = "white";
                document.getElementById('info').innerHTML = `
                        <div class="create">
                            <div class="ct">
                                <h4><img src="images/new.png" width="20px" height="20px" alt="New"> Create table</h4>
                            </div>
                            <div class="name">
                                <span>Name:<input type="text" required="required"></span>
                                <span>Number o columns: <input type="number" min="1" value="4" required="required"  style="width: 50px;" ></span>
                            </div>
                        </div>
                        <div class="blue">
                            <button>Go</button>
                        </div>
                        <hr>
        `
            }
        }
    });
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
