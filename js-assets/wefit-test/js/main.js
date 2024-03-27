function updateClass(element, oldClass, newClass) {
    element.classList.replace(oldClass, newClass);
  }
  
  function createListItem(text, isActive) {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item", isActive && "active");
    listItem.textContent = text;
    return listItem;
  }
  
  updateClass(
    document.querySelector(".btn-group-vertical"),
    "btn-group-vertical",
    "btn-group-horizontal"
  );
  
  const header = document.querySelector(".jumbotron");
  header.classList.add("bg-secondary", "text-light", "text-right");
  
  const headerButton = header.querySelector(".btn-primary");
  updateClass(headerButton, "btn-primary", "btn-success");
  
  const cardsData = [
    {
      name: "Natureza",
      image:
        "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
    },
    {
      name: "Animais",
      image:
        "https://fastly.picsum.photos/id/200/1920/1280.jpg?hmac=-eKjMC8-UrbLMpy1A4OWrK0feVPB3Ka5KNOGibQzpRU",
    },
    {
      name: "Pessoas",
      image:
        "https://fastly.picsum.photos/id/158/4836/3224.jpg?hmac=Gu_3j3HxZgR74iw1sV0wcwlnSZSeCi7zDWLcjblOp_c",
    },
    {
      name: "Tecnologia",
      image:
        "https://fastly.picsum.photos/id/201/5000/3333.jpg?hmac=NE8fOMa8u9PBfkq4AVwEoJdRqoPTNwUsyKvKWuXyNCk",
    },
  ];
  
  document.querySelectorAll(".card").forEach((card, index) => {
    const { name, image } = cardsData[index];
  
    card.querySelector(".card-title").textContent = name;
  
    const cardImage = card.querySelector("img");
  
    cardImage.src = image;
    cardImage.alt = name;
  
    if (index === 1)
      updateClass(
        card.querySelector(".btn-primary"),
        "btn-primary",
        "btn-success"
      );
  });
  
  const list = document.querySelector(".list-group");
  list.firstElementChild.classList.remove("active");
  
  const itemsToAdd = ["Quarto item", "Quinto item"];
  
  itemsToAdd.forEach((item) =>
    list.appendChild(createListItem(item, item === "Quarto item"))
  );