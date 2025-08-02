const e=document.querySelector(".page-list"),t=document.querySelector(".click");let c=1;const o=t=>{fetch(`https://pixabay.com/api/?key=50859284-c32f4b84b6793a94ff5d5acef&editors_choice=true&image_type=photo&page=${t}`).then(e=>e.json()).then(t=>{e.innerHTML+=t.hits.map(e=>`
          <li>
            <img src="${e.webformatURL}" alt="${e.tags}" />
            <p>${e.tags}</p>
          </li>
        `).join("")}).catch(e=>console.error("Помилка завантаження:",e))};o(1),t.addEventListener("click",()=>{o(++c)});
//# sourceMappingURL=pagination-hw.ffc94d64.js.map
