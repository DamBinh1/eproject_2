let products = {
    data: [
      {
        productName: "Basic Rectangular Silver Edged Wall Mirror" ,
        shape: "Rectangular",
        style:"Basic",
        price: "30",
        image: "https://www.mirroroutlet.co.uk/media/catalog/product/cache/8c620cce223afa779614e23d4ad3456b/y/c/yc155-lifestyle-2.jpg",
      },
      {
        productName: "Modern Rectangular Silver Edged Wall Mirror",
        shape: "Rectangular",
        style:"Modern",
        price: "49",
        image: "https://www.mirroroutlet.co.uk/media/catalog/product/cache/8c620cce223afa779614e23d4ad3456b/y/c/yc164-lifestyle.jpg",
      },
      {
        productName: "Luxurious Rectangular Gold Edged Wall Mirror",
        shape: "Rectangular",
        style:"Luxurious",
        price: "99",
        image: "https://www.mirroroutlet.co.uk/media/catalog/product/cache/8c620cce223afa779614e23d4ad3456b/y/c/yc159-lifestyle.jpg" ,
      },
      {
        productName: "Basic Hexagon White Edged Wall Mirror",
        shape: "Round",
        style:"Basic",
        price: "29",
        image: "https://www.mirroroutlet.co.uk/media/catalog/product/cache/8c620cce223afa779614e23d4ad3456b/y/c/yc156-lifestyle.jpg",
      },
      {
        productName: "Modern Round Black Edged Wall Mirror",
        shape: "Round",
        style:"Modern",
        price: "129",
        image: "https://www.mirroroutlet.co.uk/media/catalog/product/cache/8c620cce223afa779614e23d4ad3456b/m/f/mf005-110cm-lifestyle.jpg" ,
      },
      {
        productName: "Retro Ellipse White Edged Wall Mirror" ,
        shape: "Ellipse",
        style:"Retro",
        price: "89",
        image: "https://www.mirroroutlet.co.uk/media/catalog/product/cache/8c620cce223afa779614e23d4ad3456b/y/c/yc146-120x80-lifestyle.jpg",
      },
      {
        productName: "Basic Square Black Edged Wall Mirror",
        shape: "Square",
        style:"Basic",
        price: "189",
        image: "https://www.mirroroutlet.co.uk/media/catalog/product/cache/8c620cce223afa779614e23d4ad3456b/y/c/yc150-lifestyle.jpg" ,
        
      },
      {
        productName: "Modern Square Window Wall Mirror",
        shape: "Square",
        style:"Modern",
        price: "49",
        image: "https://www.mirroroutlet.co.uk/media/catalog/product/cache/8c620cce223afa779614e23d4ad3456b/y/e/ye005-2x2-lifestyle.jpg" ,
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have shape and should stay hidden initially
    card.classList.add("card", i.shape, "hide");
    card.classList.add("card", i.style, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as shape)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains shape class
        if (element.classList.contains(value)) {
          //display element based on shape
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };