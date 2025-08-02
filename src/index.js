  const listLinkElement = document.querySelector(".page-list");
    const linkButtonElement = document.querySelector(".click");

    const API_KEY = "50859284-c32f4b84b6793a94ff5d5acef"; 
    let currentPage = 1;

    const makeList = (images) => {
      return images.map(image => {
        return `
          <li>
            <img src="${image.webformatURL}" alt="${image.tags}" />
            <p>${image.tags}</p>
          </li>
        `;
      }).join("");
    };

    const fetchImages = (page) => {
      fetch(`https://pixabay.com/api/?key=${API_KEY}&editors_choice=true&image_type=photo&page=${page}`)
        .then(response => response.json())
        .then(data => {
          listLinkElement.innerHTML += makeList(data.hits);
        })
        .catch(err => console.error('Помилка завантаження:', err));
    };

  
    fetchImages(currentPage);

    linkButtonElement.addEventListener("click", () => {
      currentPage++;
      fetchImages(currentPage);
    });
