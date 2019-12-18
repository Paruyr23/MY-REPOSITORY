function collapse (element) {
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

            for(let j = 0; j < data.tables.length; j++){
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
                document.querySelector('.forChangeCol').style.background = "linear-gradient(#fff, #dcdcdc)";
                document.getElementById('info').innerHTML = `
<div class="home">
\t\t\t\t\t<div class="col-7 col-md-7 information1">
\t\t\t\t\t\t<div  class="blocks">
\t\t\t\t\t\t\t<div><h2>General Settings</h2></div>
\t\t\t\t\t\t\t<div class="about">
\t\t\t\t\t\t\t\t<a href="#">Change Password</a>
\t\t\t\t\t\t\t\t<p class="currentServer"><img alt="server" class="img-responsive" src="images/server.png" width="16px" height="16px">Current Server:</p>
\t\t\t\t\t\t\t\t<select name="MySQL">
\t\t\t\t\t\t\t\t\t<option>MySQL</option>
\t\t\t\t\t\t\t\t\t<option>.....</option>
\t\t\t\t\t\t\t\t\t<option>......</option>
\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="blocks">
\t\t\t\t\t\t\t<div><h2>Appearance Settings</h2></div>
\t\t\t\t\t\t\t<div class="about">
\t\t\t\t\t\t\t\t<p class="language"><img alt="server" class="img-responsive" src="images/translation.png" width="15px" height="14px">Language:</p>
\t\t\t\t\t\t\t\t<select name="language" class="languages">
\t\t\t\t\t\t\t\t\t<option>English</option>
\t\t\t\t\t\t\t\t\t<option>Russian</option>
\t\t\t\t\t\t\t\t\t<option>Armenian</option>
\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t\t<p class="theme"><img alt="server" class="img-responsive" src="images/theme1.png" width="16px" height="16px">Theme:</p>
\t\t\t\t\t\t\t\t<select name="theme" class="themes">
\t\t\t\t\t\t\t\t\t<option>pmahomme</option>
\t\t\t\t\t\t\t\t\t<option>....</option>
\t\t\t\t\t\t\t\t\t<option>.....</option>
\t\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="col-5 col-md-5 information2">
\t\t\t\t\t\t<div class="blocks">
\t\t\t\t\t\t\t<div class="background"><h2>MySQL</h2></div>
\t\t\t\t\t\t\t<div class="about">
\t\t\t\t\t\t\t\t<p>Font size</p>
\t\t\t\t\t\t\t\t<a href="#">More Settings</a>
\t\t\t\t\t\t\t\t<p>Server connection:<span class="txt">SSL is not being used</span><img src="images/help.png" alt="help" width="21px" height="21px"></p>
\t\t\t\t\t\t\t\t<p>Server version: 8.0.18 - MySQL Community Server - GPL</p>
\t\t\t\t\t\t\t\t<p>Protocol version: 10</p>
\t\t\t\t\t\t\t\t<p>User: root@192.168.30.20</p>
\t\t\t\t\t\t\t\t<p>Server charset: UTF-8 Unicode (utf8mb4)</p>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="blocks">
\t\t\t\t\t\t\t<div><h2>Web server</h2></div>
\t\t\t\t\t\t\t<div class="about">
\t\t\t\t\t\t\t\t<p>nginx/1.2.1</p>
\t\t\t\t\t\t\t\t<p>Database client version:libmysql-5.5.40</p>
\t\t\t\t\t\t\t\t<p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
\t\t\t\t\t\t\t\t<p>PHP extension: mysqli <img src="images/help.png" alt="help" width="21px" height="21px"> curl <img src="images/help.png" alt="help" width="21px" height="21px"> mbstring <img src="images/help.png" alt="help" width="21px" height="21px"></p>
\t\t\t\t\t\t\t\t<p>Lorem ipsumLorem ipsum</p>
\t\t\t\t\t\t\t\t<p>Lorem ipsumLorem ipsum</p>
\t\t\t\t\t\t\t\t<p>Lorem ipsum</p>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="blocks" >
\t\t\t\t\t\t\t<div><h2>phpMyAdmin</h2></div>
\t\t\t\t\t\t\t<div class="about lastBlock">
\t\t\t\t\t\t\t\t<p>Version information</p>
\t\t\t\t\t\t\t\t<p>Git version</p>
\t\t\t\t\t\t\t\t<a>Documentation</a>
\t\t\t\t\t\t\t\t<a>Wiki</a>
\t\t\t\t\t\t\t\t<a>Official Homepage</a>
\t\t\t\t\t\t\t\t<a>Contribute</a>
\t\t\t\t\t\t\t\t<a>Get support</a>
\t\t\t\t\t\t\t\t<a>List of changes</a>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>`
            }

            if (arg === 7) {
                document.querySelector('.forChangeCol').style.background = "white";
                document.getElementById('info').innerHTML = `
        \t\t\t\t<div class="mainBlock">
        \t\t\t\t\t<h1>Databases</h1>
        \t\t\t\t\t<div>
        \t\t\t\t\t\t<img src="images/new.png" width="20px" height="20px" alt="New"><span>Create databases</span><img src="images/help.png"  width="20px" height="20px" alt="Help">
        \t\t\t\t\t</div>
        \t\t\t\t\t<div class="tbl">
        \t\t\t\t\t\t<input type="text" name="Database" placeholder="Database name" >
        \t\t\t\t\t\t<select>
        \t\t\t\t\t\t\t<option>utf8mb4_0p00_ai_ci</option>
        \t\t\t\t\t\t\t<option>.........gfj,.....</option>
        \t\t\t\t\t\t\t<option>....................</option>
        \t\t\t\t\t\t\t<option>...........</option>
        \t\t\t\t\t\t\t<option>ssgsgdgdgg</option>
        \t\t\t\t\t\t\t<option>utf8mb4_0ps00_ai_ci</option>
        \t\t\t\t\t\t\t<option>utf8mb4_0p00_ai_ci</option>
        \t\t\t\t\t\t\t<option>utsg0p00_ai_ci</option>
        \t\t\t\t\t\t\t<option>utsgsp00_ai_ci</option>
        \t\t\t\t\t\t\t<option>utf8mb4_0p00_ai_ci</option>
        \t\t\t\t\t\t\t<option>utf8mg.......ssgsb4_0p00_ai_ci</option>
        \t\t\t\t\t\t\t<option>utf8mb4_0p00_ai_ci</option>
        \t\t\t\t\t\t\t<option>utf8mb4_0....p00_ai_ci</option>
        \t\t\t\t\t\t\t<option>utf8mb4_0p00_ai_ci</option>
        \t\t\t\t\t\t\t<option>utf8mb4_0p00_ai_ci</option>
        \t\t\t\t\t\t\t<option>addss</option>
        \t\t\t\t\t\t</select>
        \t\t\t\t\t\t<button onclick="showFun(8)">Create</button>
        \t\t\t\t\t</div>
        \t\t\t\t</div>
    
    
    
        \t\t\t\t<div class="container-fluid block">
                            <div class="blockSpan">
                                <div class="container filters"><h4>Filters</h4></div>
        \t\t\t\t\t    <span>Containing the word <input type="text"></span>
                            </div>
                            <div class="database">
        \t\t\t\t\t\t<table>
        \t\t\t\t\t\t\t<tr>
        \t\t\t\t\t\t\t\t<th>Database</th>
        \t\t\t\t\t\t\t\t<th>Collation</th>
        \t\t\t\t\t\t\t\t<th>Master replication</th>
        \t\t\t\t\t\t\t\t<th>Action</th>
        \t\t\t\t\t\t\t</tr>
        \t\t\t\t\t\t\t<tr>
        \t\t\t\t\t\t\t\t<td><input type="checkbox">lorem ipsum lordgdgdgem</td>
        \t\t\t\t\t\t\t\t<td>lorem ipsum lorem</td>
        \t\t\t\t\t\t\t\t<td><img src="images/redx.png" width="20px" height="20px" alt="redx">Not replicated</td>
        \t\t\t\t\t\t\t\t<td><img src="images/check.png" width="20px" height="20px" alt="check"><a href="#">Check privileges</a></td>
        \t\t\t\t\t\t\t</tr>
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
        \t\t\t\t\t\t</table>
                                <hr>
        \t\t\t\t\t</div>
        \t\t\t\t</div>`
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

function change(click){
    const mainContent = document.getElementById('mainContent');
    const leftContent = document.getElementById('leftContent');
    const imgChange = document.getElementById('imgChange');
    if($(imgChange).attr("src") !== "images/arrow_right.png"){
        leftContent.style.display = 'none';
        mainContent.style.width = '100%';
        $(imgChange).attr("src", "images/arrow_right.png");
    }
     else {
        $(imgChange).attr("src", "images/arrow_left.png");
        mainContent.removeAttribute("style");
        leftContent.removeAttribute("style");
    }
}
