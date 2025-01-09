
const fetchSpells = async () => {
  
  fetch('https://potterapi-fedeperin.vercel.app/en/spells')
  .then(response => response.json())
  .then(data => {
    if (Array.isArray(data)) {
            const mainDive = document.getElementById('mainDiv');
            data.forEach((spells) => {
              
              const newDiv = document.createElement('div');
              newDiv.innerHTML = `<h2><b>${spells.spell}</b></h2><p>${spells.use}</p><hr>`;
              mainDive.appendChild(newDiv);
            });
            return data;
        } else {
            console.error('Expected an array, but got an object:', data);
        }
      })
      .catch(error => console.error('Error:', error));

}

fetchSpells();

// function showSpells() {
//     let data = fetchSpells();
//     if (Array.isArray(data)) {
//         data.forEach(spells => console.log(spells.spell));
//     } else {
//       console.error('Expected an array, but got an object:', data);
//     }
// }
// showSpells();


// fetch('https://potterapi-fedeperin.vercel.app/en/spells')
//   .then(response => response.json())
//   .then(data => {
//     if (Array.isArray(data)) {
//       data.forEach(spells => console.log(spells.spell));
//     } else {
//       console.error('Expected an array, but got an object:', data);
//     }
//   })
//   .catch(error => console.error('Error:', error));


// console.log(data[0]);
// Output: { spell: "Accio", use: "Summoning charm", index: 0 }
