const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
.then(function(jsonObject){
  const towns = jsonObject['towns'];

  towns.forEach(town => {
    if (town.name == "Fish Haven" || town.name == "Preston" || town.name == "Soda Springs"){

    let card = document.createElement('div');
    let cardimage = document.createElement('div');

    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let image = document.createElement('img');

    h2.textContent = `${town.name}`;
    p1.innerHTML = `Motto: ${town.motto}`;
    p2.innerHTML = `Population: ${town.currentPopulation}`;
    p3.innerHTML = `Year Founded: ${town.yearFounded}`;
    p4.innerHTML = `Annual Rain Fall: ${town.averageRainfall}`;
    image.setAttribute('src', 'images/' + town.photo);
    image.setAttribute('alt', `${town.name}`);

    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    cardimage.appendChild(image);


    document.querySelector('div.cards').appendChild(card);
    document.querySelector('div.cards').appendChild(cardimage);

    }
    
  });
});