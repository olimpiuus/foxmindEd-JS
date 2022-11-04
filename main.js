const categoriesBtnsContainer = document.querySelector('.categories-list')
const menuContainer = document.querySelector('.dishes-list')


const renderCategorieBtn = (name) => {
    const li = document.createElement('li')
    const btn = document.createElement('button')

    li.classList.add('categorie-item')
    categoriesBtnsContainer.append(li)

    btn.textContent = name
    btn.classList.add('catogorie-btn')
    btn.dataset.categorie = name

    li.append(btn)
    console.log(`name:${name}`)
}

const renderDish = ({ name, price, description, img }) => {
    const li = document.createElement('li')
    li.innerHTML = `
      <div class="dish__image-wrapper"><img class="dish__img" src="${img}" alt="${name}"></div>
      <div class="dish__info">
          <div class="dish__title-and-price">
              <h3 class="dish__title">${name}</h3>
              <div class="dish__price">${price}</div>
          </div>
          <p class="dish__description">${description}</p>
      </div>`
    li.classList.add('dish')
    menuContainer.append(li)
}

const clearMenu = () => {
    menuContainer.innerHTML = ''
}

fetch('./menu.json')
    .then(response => response.json())
    .then(data => {
        const categories = Object.keys(data)
        categories.forEach((categorie) => renderCategorieBtn(categorie))

        const menu = Object.values(data)
        const renderWholeMenu = () => {
            menu.forEach(categorieDishes => {
                categorieDishes.forEach((dish) => {
                    renderDish(dish)
                })
            })
        }
        renderWholeMenu()

        categoriesBtnsContainer.addEventListener('click', (e) => {
            const pickedCategorie = event.target.dataset.categorie
            if (!pickedCategorie) { return }
            clearMenu()
            if (pickedCategorie === 'All') { renderWholeMenu() }
            data[pickedCategorie].forEach(dish => renderDish(dish))
        })
    })