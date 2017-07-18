const parent = document.querySelector('div.images')
const maxDescLength = 20
let searchForm = document.querySelector('#searchform')

let value = ''
let url = 'https://crossorigin.me/http://www.recipepuppy.com/api/?q='
console.log(url)

searchForm.addEventListener('submit', event => {
  event.preventDefault()
  let search = document.querySelector('#search')
  console.log(search.value)
  let searchUrl = url + search.value

  fetch(searchUrl).then(response => response.json()).then(data => {
    data.results.forEach(recipe => {
      console.log(data)
      const img = document.createElement('img')
      if (recipe.thumbnail === '') {
        img.src = 'http://via.placeholder.com/350x150'
      } else {
        img.src = recipe.thumbnail
      }

      const p = document.createElement('p')
      const anchor = document.createElement('a')
      const span = document.createElement('span')
      if (recipe.title.length > maxDescLength) {
        p.textContent = recipe.title.slice(0, maxDescLength) + '...'
      } else {
        p.textContent = recipe.title
      }
      anchor.setAttribute('href', recipe.href)
      parent.appendChild(anchor)
      span.appendChild(p)
      anchor.appendChild(span)
      anchor.appendChild(img)
    })
  })
})
