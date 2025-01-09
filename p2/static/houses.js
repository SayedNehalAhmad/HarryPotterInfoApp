const fetchSpells = async () => {
  
    fetch('https://potterapi-fedeperin.vercel.app/en/houses')
    .then(response => response.json())
    .then(data => {
      if (Array.isArray(data)) {
              const mainDive = document.getElementById('mainDiv');
              data.forEach((houses) => {
                
                const newDiv = document.createElement('div');
                newDiv.innerHTML = `<h2><b>${houses.house}</b></h2><p>${houses.founder}</p><hr>`;
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