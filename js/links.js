const displayLinks = (args) => document.getElementById('app_links').innerHTML = args;
const displayTopNav = (args) => document.getElementById('Top_Nav').innerHTML = args;

//Generate links for page

let linksHTML = `<ol>`; //initialize html variable as a list
for (let i = 0; i < links.length; i++) {
  linksHTML += `<li><a href= " ${links[i].href} " > ${links[i].text} </a></li>`;
}
  linksHTML += `</ol>`

//Generate Top Nav bar links

let navHTML = ''; //initialize html variable as a list
for (let i = 0; i < topNav.length; i++) {
  navHTML += `<a href= " ${topNav[i].href} " > ${topNav[i].text} </a>`;
}

//Render Items
displayLinks(linksHTML);
displayTopNav(navHTML);
