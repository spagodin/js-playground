let html = '';

const myTest = (html) => document.getElementById('output').innerHTML = html;

for (let i = 0; i<people.length; i++) {
  html += "<p><h2>" + people[i].name + "</h2></p>";
}

myTest(html);
