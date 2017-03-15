const displayLinks = (args) => document.getElementById('app_links').innerHTML = args;
const displayTopNav = (args) => document.getElementById('Top_Nav').innerHTML = args;

//Generate links for page

let linksHTML = `<ul ">`; //initialize html variable as a list
for (let i = 0; i < links.length; i++) {
  linksHTML += `<li><a href= " ${links[i].href} " > ${links[i].text} </a></li>`;
}
  linksHTML += `</ul>`

//Generate Top Nav bar links

let navHTML = `<ul class="nav navbar-nav">`; //initialize html variable as a list
for (let i = 0; i < topNav.length; i++) {
  navHTML += `<li><a href= " ${topNav[i].href} " > ${topNav[i].text} </a></li>`;
}
  navHTML += `</ul>`

//Render Items
displayLinks(linksHTML);
displayTopNav(navHTML);
