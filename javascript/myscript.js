function collapse (element) {
    const collapse = document.getElementById(element);
    const link = document.getElementsByClassName(element);
    if (!collapse.classList.contains('in')) {
        link[0].innerHTML = "-";

        return;
    }
    link[0].innerHTML = "+";
}

function showFun(arg){
    if (arg ===0){
        document.querySelector('.forChangeCol').style.backgroundColor = "#DBDBDB";
        document.getElementById('info').innerHTML = `
            \t\t\t\t<div class="home">
\t\t\t\t\t<div class="col-5 col-md-6 information1">
\t\t\t\t\t<div  class="blocks">
\t\t\t\t\t\t<div><h2>General Settings</h2></div>
\t\t\t\t\t\t<div class="about">
\t\t\t\t\t\t\t<a href="#">Change Password</a>
\t\t\t\t\t\t\t<p style="float: left; margin: 1px 5px 12px 7px;display: flex;align-items: flex-end;"><img alt="server" class="img-responsive" src="images/server.png" width="16px" height="16px">Current Server:</p>
\t\t\t\t\t\t\t<select name="MySQL">
\t\t\t\t\t\t\t\t<option>MySQL</option>
\t\t\t\t\t\t\t\t<option>.....</option>
\t\t\t\t\t\t\t\t<option>......</option>
\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="blocks">
\t\t\t\t\t\t<div><h2>Appearance Settings</h2></div>
\t\t\t\t\t\t<div class="about">
\t\t\t\t\t\t\t<p style="float: left;margin: 15px 5px 12px 15px;display:flex; align-items:center; clear:both;"><img alt="server" class="img-responsive" src="images/translation.png" width="15px" height="14px">Language:</p>
\t\t\t\t\t\t\t<select name="language" style="margin-top: 15px;">
\t\t\t\t\t\t\t\t<option>English</option>
\t\t\t\t\t\t\t\t<option>Russian</option>
\t\t\t\t\t\t\t\t<option>Armenian</option>
\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t\t<p style="float: left;margin: 10px 5px 12px 15px;display:flex; align-items:center; clear:both;"><img alt="server" class="img-responsive" src="images/theme1.png" width="16px" height="16px">Theme:</p>
\t\t\t\t\t\t\t<select name="theme" style="float: left;margin-top: 10px;">
\t\t\t\t\t\t\t\t<option>pmahomme</option>
\t\t\t\t\t\t\t\t<option>....</option>
\t\t\t\t\t\t\t\t<option>.....</option>
\t\t\t\t\t\t\t</select>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t\t<div class="col-7 col-md-6 information2">
\t\t\t\t\t\t<div class="blocks">
\t\t\t\t\t\t\t<div class="background"><h2>MySQL</h2></div>
\t\t\t\t\t\t\t<div class="about">
\t\t\t\t\t\t\t\t<p>Font size</p>
\t\t\t\t\t\t\t\t<a href="#">More Settings</a>
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="blocks">
\t\t\t\t\t\t\t<div><h2>Web server</h2></div>
\t\t\t\t\t\t\t<div class="about">
\t\t\t\t\t\t\t\t<p>nginx/1.2.1</p>
\t\t\t\t\t\t\t\t<p>Database client version:libmysql-5.5.40</p>
\t\t\t\t\t\t\t\t<p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
\t\t\t\t\t\t\t\t<p>Lorem ipsumLorem ipsum/p>
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
        `
    }

    if (arg ===1){
        document.querySelector('.forChangeCol').style.backgroundColor = "white";
        document.getElementById('info').innerHTML = `
<h1>table1</h1>
        <table class="table" data-name="table">
\t\t\t\t\t<tr class="th">
\t\t\t\t\t\t<th>Table</th>
\t\t\t\t\t\t<th>Action</th>
\t\t\t\t\t\t<th>Rows</th>
\t\t\t\t\t\t<th>Type</th>
\t\t\t\t\t\t<th>Collation</th>
\t\t\t\t\t\t<th>Size</th>
\t\t\t\t\t\t<th>Overhead</th>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">20.3links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsumorem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45505050.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">20.3links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsumore505050m_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.502</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>50.2orem_lore5050m ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_20.3links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsumorem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>405050.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.505023</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem50_20.3links</td>
\t\t\t\t\t\t<td>50.2or5050em_lorem ipsumorem_lorem ipsumorem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t</table>
        `
    }
    if (arg===2) {
        document.querySelector('.forChangeCol').style.backgroundColor = "white";
        document.getElementById('info').innerHTML = `
<h1>table2</h1>
        <table class="table" data-name="table" >
\t\t\t\t\t<tr class="th">
\t\t\t\t\t\t<th>Table</th>
\t\t\t\t\t\t<th>Action</th>
\t\t\t\t\t\t<th>Rows</th>
\t\t\t\t\t\t<th>Type</th>
\t\t\t\t\t\t<th>Collation</th>
\t\t\t\t\t\t<th>Size</th>
\t\t\t\t\t\t<th>Overhead</th>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">20.3links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsumorem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45505050.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">20.3links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsumore505050m_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.502</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>50.2orem_lore5050m ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_20.3links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsumorem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>405050.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.505023</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem50_20.3links</td>
\t\t\t\t\t\t<td>50.2or5050em_lorem ipsumorem_lorem ipsumorem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t</table>
        `
    }

    if (arg===3) {
        document.querySelector('.forChangeCol').style.backgroundColor = "white";
        document.getElementById('info').innerHTML = `
<h1>table3</h1>
        <table class="table" data-name="table" >
\t\t\t\t\t<tr class="th">
\t\t\t\t\t\t<th>Table</th>
\t\t\t\t\t\t<th>Action</th>
\t\t\t\t\t\t<th>Rows</th>
\t\t\t\t\t\t<th>Type</th>
\t\t\t\t\t\t<th>Collation</th>
\t\t\t\t\t\t<th>Size</th>
\t\t\t\t\t\t<th>Overhead</th>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">20.3links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsumorem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45505050.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">20.3links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsumore505050m_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.502</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>50.2orem_lore5050m ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_20.3links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsumorem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>405050.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.505023</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem50_20.3links</td>
\t\t\t\t\t\t<td>50.2or5050em_lorem ipsumorem_lorem ipsumorem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t</table>
        `}

    if (arg===4) {
        document.querySelector('.forChangeCol').style.backgroundColor = "white";
        document.getElementById('info').innerHTML = `
<h1>table4</h1>
        <table class="table" data-name="table" >
\t\t\t\t\t<tr class="th">
\t\t\t\t\t\t<th>Table</th>
\t\t\t\t\t\t<th>Action</th>
\t\t\t\t\t\t<th>Rows</th>
\t\t\t\t\t\t<th>Type</th>
\t\t\t\t\t\t<th>Collation</th>
\t\t\t\t\t\t<th>Size</th>
\t\t\t\t\t\t<th>Overhead</th>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">20.3links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsumorem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45505050.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">20.3links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsumore505050m_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.502</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>50.2orem_lore5050m ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_20.3links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsumorem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>405050.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.505023</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem50_20.3links</td>
\t\t\t\t\t\t<td>50.2or5050em_lorem ipsumorem_lorem ipsumorem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t</table>
        `
    }
    if (arg===5) {
        document.querySelector('.forChangeCol').style.backgroundColor = "white";
        document.getElementById('info').innerHTML = `
<h1>table5</h1>
        <table class="table" data-name="table" >
\t\t\t\t\t<tr class="th">
\t\t\t\t\t\t<th>Table</th>
\t\t\t\t\t\t<th>Action</th>
\t\t\t\t\t\t<th>Rows</th>
\t\t\t\t\t\t<th>Type</th>
\t\t\t\t\t\t<th>Collation</th>
\t\t\t\t\t\t<th>Size</th>
\t\t\t\t\t\t<th>Overhead</th>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">20.3links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsumorem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45505050.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">20.3links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsumore505050m_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.502</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>50.2orem_lore5050m ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_20.3links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsumorem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>405050.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.505023</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem50_20.3links</td>
\t\t\t\t\t\t<td>50.2or5050em_lorem ipsumorem_lorem ipsumorem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t</table>
        `
    }
    if (arg===6) {
        document.querySelector('.forChangeCol').style.backgroundColor = "white";
        document.getElementById('info').innerHTML = `
<h1>table6</h1>
        <table class="table" data-name="table" >
\t\t\t\t\t<tr class="th">
\t\t\t\t\t\t<th>Table</th>
\t\t\t\t\t\t<th>Action</th>
\t\t\t\t\t\t<th>Rows</th>
\t\t\t\t\t\t<th>Type</th>
\t\t\t\t\t\t<th>Collation</th>
\t\t\t\t\t\t<th>Size</th>
\t\t\t\t\t\t<th>Overhead</th>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">20.3links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsumorem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45505050.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">20.3links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsumore505050m_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.502</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>50.2orem_lore5050m ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_20.3links</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsumorem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>405050.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>50.2orem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.505023</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem50_20.3links</td>
\t\t\t\t\t\t<td>50.2or5050em_lorem ipsumorem_lorem ipsumorem_lorem ipsumorem_lorem ipsum</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t</table>
        `
    }


    // if (document.querySelector("[data-name=" + Name + "]").style.display == "none") {
    //     document.querySelector("[data-name=" + Name + "]").style.display = "inline-table";
    //     document.querySelector('.home').style.display = "none";
    //     document.querySelector('.forChangeCol').style.backgroundColor = "white";
    // }
}


// function resetFun(Name,Name2,Name3,Name4,Name5,Name6){
//     if (document.querySelector("[data-name=" + Name||Name2||Name3||Name4||Name5||Name6 + "]").style.display == "inline-table") {
//         document.querySelector("[data-name=" + Name||Name2||Name3||Name4||Name5||Name6 + "]").style.display = "none";
//     }
// }
//

function openMain(name,name2,name3,name4,name5,name6){
    if(document.querySelector("[data-name=" + name||name2||name3||name4||name5||name6 + "]").style.display == "inline-table"){
        document.querySelector("[data-name=" + name||name2||name3||name4||name5||name6 + "]").style.display = "none";
        document.querySelector('.home').style.display = "block";
        document.querySelector('.forChangeCol').style.backgroundColor = "#DBDBDB";
    }
}

// <div class="forChangeCol" ><img src="images/structure.png" alt="doc" width="20px" height="20px"><a href="#"><h5>Structure</h5></a></div>





// function changeBg(class) {
//     $('class').css('background-color', 'white');
// }
// let selectedDiv;
//


// ;(function($D){
//     var $a    = $D.querySelector('.block-1');
//         $container = $D.querySelector('.info');
//
//     function changeInfo (e){
//         let data = e.target.dataset,
//             toggleText = $a.innerHTML,
//             isVisible = $container.style.display == 'block';
//
//         $a.innerHTML = data.toggleText;
//         data.toggleText = toggleText;
//
//         $container.style.display = isVisible ? 'none' : 'block';
//     };
// })(document);
//
