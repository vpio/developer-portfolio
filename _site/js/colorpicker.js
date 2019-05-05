document.getElementById('get-palette').addEventListener('submit', (e) => {
  e.preventDefault();
  let username = document.getElementById('username').value

  fetch('https://color-picker-mobile.herokuapp.com/api/v1/palettes/' + username).then(data => {
    return data.json()
  }).then((data) => updatePage(data))
  .catch(error => console.error(error));
});

function updatePage(colors){
  console.log(colors);
  colors = colors[colors.length-1].colors.split('#').filter(el => { return el != ""})
  let listedColors = colors.map(color => {
    return `<li class='list-group-item' style='background-color: #${color};'>` + '#' + color + '</li>'
  })
  console.log(colors);
  document.getElementById('colors').innerHTML = listedColors.join('')
}
