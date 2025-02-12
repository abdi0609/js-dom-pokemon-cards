
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const cards=  document.querySelector(".cards");
for(let x = 0;x < data.length;x++){
  const card= document.createElement("li");
  card.classList.add("card");
  const title = document.createElement("h2");
  title.classList.add("card--title");
  const image = document.createElement("img");
  image.classList.add("card--img");
  const content = document.createElement("ul")
  content.classList.add("card--text")
  title.innerText=data[x].name;
  image.src=data[x].sprites.other["official-artwork"].front_default;
  for(let i=0; i< data[x].stats.length;i++){
    const stat= document.createElement("li");
    stat.innerText= `${data[x].stats[i].stat.name} : ${data[x].stats[i].base_stat}`;
    content.append(stat);

  }
  card.append(title);
  card.append(image);
  card.append(content);
  cards.append(card);


}


