const fetchSpells = async () => {
  
    fetch('https://potterapi-fedeperin.vercel.app/en/characters')
    .then(response => response.json())
    .then(data => {
      if (Array.isArray(data)) {
              let mainDive = document.getElementById('mainDiv');
              data.forEach((characters) => {

                let newDiv = document.createElement('div');
                
                // let mainDiv2 = document.createElement('div');
                // let image = document.createElement('img');
                // let textDiv = document.createElement('div');
                // let name = document.createElement('h2');
                // let fullName = document.createElement('p');
                // let house = document.createElement('p');
                // let dob = document.createElement('p');

                // mainDiv2.className = 'flex';
                // image.className = 'rounded-md';

                // mainDiv2.appendChild(image);
                // mainDiv2.appendChild(textDiv);

                newDiv.innerHTML = `<div class="max-w-4xl bg-slate-500 rounded-lg shadow-lg overflow-hidden mb-2">
                                      <div class="md:flex">
                                        <div class="md:w-1/3">
                                          <img 
                                            src="${characters.image}" 
                                            alt="Sample Image" 
                                            class="w-full h-full object-cover"
                                          />
                                        </div>
                                        <div class="md:w-2/3 p-6">
                                          <h2 class="text-2xl font-bold text-zinc-950">${characters.nickname}</h2>
                                          <p class="mt-4 text-zinc-800">${characters.fullName}</p>
                                          <p class="mt-4 text-zinc-800">${characters.hogwartsHouse}</p>
                                          <p class="mt-4 text-zinc-800">${characters.birthdate}</p>
                                        </div>
                                      </div>
                                    </div>`;
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