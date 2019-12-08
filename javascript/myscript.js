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
    if (arg === 0) {
        document.querySelector('.forChangeCol').style.backgroundColor = "#DBDBDB";
        document.getElementById('info').innerHTML = `
\t\t\t\t\t<div class="home">
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

    if (arg === 1) {
        document.querySelector('.forChangeCol').style.backgroundColor = "white";
        document.getElementById('info').innerHTML = `
       <table class="table" data-name="table2">
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
\t\t\t\t\t\t<td><input type="checkbox">_ipsum</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>Lorem_lorem lorem i[sum</td>
\t\t\t\t\t\t<td>Lorem_lorem ipsum lorem</td>
\t\t\t\t\t\t<td>Lorem_lorem ipsum ....</td>
\t\t\t\t\t\t<td>Lorem_lorem ipsum jjjj</td>
\t\t\t\t\t\t<td>Lorem_lorem ipsum ,,,,</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">IPSUM</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_30.5</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>

\t\t\t\t\t\t<td><input type="checkbox">Lorem_20.3links</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_20.3links</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_20.3links</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t\t<tr class="th2">
\t\t\t\t\t\t<th>9 tables</th>
\t\t\t\t\t\t<th>Sum</th>
\t\t\t\t\t\t<th>1.211313</th>
\t\t\t\t\t\t<th>InnoDB</th>
\t\t\t\t\t\t<th>Lorem</th>
\t\t\t\t\t\t<th>size</th>
\t\t\t\t\t\t<th>7.44</th>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t</table>
        `
    }
    if (arg === 2) {
        document.querySelector('.forChangeCol').style.backgroundColor = "white";
        document.getElementById('info').innerHTML = `
<table class="table" data-name="table3">
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
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_20.3links</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_20.3links</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_20.3links</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t\t<tr class="th2">
\t\t\t\t\t\t<th>7 tables</th>
\t\t\t\t\t\t<th>Sum</th>
\t\t\t\t\t\t<th>1.211313</th>
\t\t\t\t\t\t<th>InnoDB</th>
\t\t\t\t\t\t<th>Lorem</th>
\t\t\t\t\t\t<th>size</th>
\t\t\t\t\t\t<th>7.44</th>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t</table>`
    }

    if (arg === 3) {
        document.querySelector('.forChangeCol').style.backgroundColor = "white";
        document.getElementById('info').innerHTML = `
<table class="table" data-name="table4">
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
\t\t\t\t\t\t<td><input type="checkbox">Lorem_ipsum</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>Lorem_lorem lorem i[sum</td>
\t\t\t\t\t\t<td>Lorem_lorem ipsum lorem</td>
\t\t\t\t\t\t<td>Lorem_lorem ipsum ....</td>
\t\t\t\t\t\t<td>Lorem_lorem ipsum jjjj</td>
\t\t\t\t\t\t<td>Lorem_lorem ipsum ,,,,</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_20.3</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_30.5</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_lorem ipsum</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_ipsum lorem</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_links</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_20.3links</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_20.3links</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_20.3links</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_20.3links</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t\t<tr class="th2">
\t\t\t\t\t\t<th>14 tables</th>
\t\t\t\t\t\t<th>Sum</th>
\t\t\t\t\t\t<th>1.211313</th>
\t\t\t\t\t\t<th>InnoDB</th>
\t\t\t\t\t\t<th>Lorem</th>
\t\t\t\t\t\t<th>size</th>
\t\t\t\t\t\t<th>7.44</th>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t</table>
`
    }

    if (arg === 4) {
        document.querySelector('.forChangeCol').style.backgroundColor = "white";
        document.getElementById('info').innerHTML = `
<table class="table" data-name="table5" >
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
\t\t\t\t\t\t<td><input type="checkbox">Lorem_ipsum</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>Lorem_lorem lorem i[sum</td>
\t\t\t\t\t\t<td>Lorem_lorem ipsum lorem</td>
\t\t\t\t\t\t<td>Lorem_lorem ipsum ....</td>
\t\t\t\t\t\t<td>Lorem_lorem ipsum jjjj</td>
\t\t\t\t\t\t<td>Lorem_lorem ipsum ,,,,</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">45.2345.2345.2345.245.23</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lore45.2345.2345.23m_ipsum lorem</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.245.233</td>
\t\t\t\t\t\t<td>50.45.22</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_links</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>5045.23.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">20.3links</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">20.3links</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_20.3links</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t\t<tr class="th2">
\t\t\t\t\t\t<th>9 tables</th>
\t\t\t\t\t\t<th>Sum</th>
\t\t\t\t\t\t<th>1.211313</th>
\t\t\t\t\t\t<th>InnoDB</th>
\t\t\t\t\t\t<th>Lorem</th>
\t\t\t\t\t\t<th>size</th>
\t\t\t\t\t\t<th>7.44</th>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t</table>
`
    }
    if (arg === 5) {
        document.querySelector('.forChangeCol').style.backgroundColor = "white";
        document.getElementById('info').innerHTML = `
\t\t\t\t\t<table class="table" data-name="table" >
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
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">20.3links</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45505050.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">20.3links</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.502</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_20.3links</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>405050.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.505023</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem50_20.3links</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t\t<tr class="th2">
\t\t\t\t\t\t<th>8 tables</th>
\t\t\t\t\t\t<th>Sum</th>
\t\t\t\t\t\t<th>1.211313</th>
\t\t\t\t\t\t<th>InnoDB</th>
\t\t\t\t\t\t<th>Lorem</th>
\t\t\t\t\t\t<th>size</th>
\t\t\t\t\t\t<th>7.44</th>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t</table>
        `
    }
    if (arg === 6) {
        document.querySelector('.forChangeCol').style.backgroundColor = "white";
        document.getElementById('info').innerHTML = ` 
 <table class="table">
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
\t\t\t\t\t\t<td><input type="checkbox">Lore45.23m_ipsum lorem</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.45.2323</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_lin45.2345.2345.23ks</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>4045.23.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">20.3l45.2345.23inks</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">20.3links</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_terms</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>5050.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lorem_20.3links</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t\t\t<td><input type="checkbox">Lor5050em_terms</td>
\t\t\t\t\t\t<td>LOrem Ipsum LOrem Ipsum LOrem Ipsum 
<img src="images/star.png" width="17px" height="17px">
<img src="images/browse.png" width="17px" height="17px"><a href="#">Browse</a>
<img src="images/structure.png" width="17px" height="17px"><a href="#">Structure</a> 
<img src="images/search_plus.png" width="17px" height="17px"><a href="#">Search</a>
<img src="images/insert.png" width="17px" height="17px"><a href="#">Insert</a>
<img src="images/empty.png" width="17px" height="17px"><a href="#">Empty</a>
<img src="images/minus.png" width="17px" height="17px"><a href="#">Drop</a></td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t\t<td>50.2</td>
\t\t\t\t\t\t<td>40.63</td>
\t\t\t\t\t\t<td>45.23</td>
\t\t\t\t\t</tr>
\t\t\t\t\t\t<tr class="th2">
\t\t\t\t\t\t<th>8 tables</th>
\t\t\t\t\t\t<th>Sum</th>
\t\t\t\t\t\t<th>1.211313</th>
\t\t\t\t\t\t<th>InnoDB</th>
\t\t\t\t\t\t<th>Lorem</th>
\t\t\t\t\t\t<th>size</th>
\t\t\t\t\t\t<th>7.44</th>
\t\t\t\t\t</tr>
\t\t\t\t\t<tr>
\t\t\t\t</table>
`
    }
}

    var data = [
        {
            name: 'Structure',
            src: "images/structure.png"
        },
        {
            name: 'SQL',
            src: "images/sql.png"
        },
        {
            name: 'Search',
            src: "images/loupe.png"
        },
        {
            name: 'Query',
            src: "images/query.png"
        },
        {
            name: 'Export',
            src: "images/export.png"
        },
        {
            name: 'Import',
            src: "images/import.png"
        },
        {
            name: 'Operations',
            src: "images/wrench2.png"
        },
        {
            name: 'Routines',
            src: "images/routines.png"
        },
        {
            name: 'Events',
            src: "images/events.png"
        },
        {
            name: 'Triggers',
            src: "images/triggers.png"
        },
    ];


    window.addEventListener('load', function () {
        var cont = document.querySelector('#header');
        for (var i = 0; i < data.length; i++) {
            var divs = document.createElement('div');
            var a = document.createElement('a');
            var images = document.createElement('img');
            var h5 = document.createElement(`h5`);
            divs.setAttribute(`class`, `forChangeCol`);
            images.setAttribute('src', `${data[i].src}`);
            images.setAttribute('width', '21px');
            images.setAttribute('height', '21px');
            a.setAttribute('href', '#');
            h5.innerHTML = `${data[i].name}`;
            a.appendChild(h5);
            divs.appendChild(images);
            divs.appendChild(a);
            cont.appendChild(divs);
        }
    });



$(window).load(function() {


    $('<a>', { href: '#', text: 'Гугли!'}).appendTo('.blokInfo');
// //     // let collapse = [];
// //     // collapse.push(
// //     //     {
// //     //
// //     //     },
// //     // );
// //
// // // <a href="#demo" data-toggle="collapse" class="demo" onclick="collapse('demo')">+</a><img src="images/files.png" alt="doc" width="20px" height="20px"> Collapse
// // //     <div id="demo" class="collapse">
// //
// //
// //     // let div1 = $("div").attr({"id":"demo","class":"collapse"});
// //     // $("<li></li>").appendChild(a);
//     $(".blockInfo").html("<a href='#' data-toggle='collapse' class='demo'>+</a><img src='images/files.png' alt='doc' width='20px' height='20px'> Collapse");
// //     // for(let i=0;i < collapse;i++){
// //     //
// //     // }
// //     // ul.appendChild(li);
// //
// //     // $("<ul/>").append($("<li/>");
});



