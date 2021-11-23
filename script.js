const NATURE = [
  'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/459059/pexels-photo-459059.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/70365/forest-sunbeams-trees-sunlight-70365.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
]

const OCEAN = [
  'https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/1646311/pexels-photo-1646311.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/1074505/pexels-photo-1074505.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
]

const BIRDS = [
  'https://images.pexels.com/photos/70069/pexels-photo-70069.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/2078747/pexels-photo-2078747.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/2192655/pexels-photo-2192655.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/1327405/pexels-photo-1327405.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  'https://images.pexels.com/photos/2202528/pexels-photo-2202528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]

const GALLERY_LIST = [
  NATURE,
  OCEAN,
  BIRDS
]

let currentInx = 0

window.onload = () => {
  document.querySelectorAll('li').forEach((element, inx) => {
      element.onclick = (event) => changeGallery(event, inx)
  })

  document.querySelector('.detail').onclick = (event) => {
      document.querySelector('.detail').innerHTML = ''
      event.currentTarget.classList.remove('show')
  }
      
  loadGallery(currentInx)
}

const changeGallery = (event, inx) => {
  if (event.currentTarget.className === 'current') {
      return
  }
  currentInx = inx
  document.querySelector('.current').classList.remove('current')
  event.currentTarget.classList.add('current')
  loadGallery(currentInx)
}

const loadGallery = (currentInx) => {
  document.querySelector('.current-gallery').innerHTML = ''
  document.querySelector('.current-gallery').classList.add('small')
  window.setTimeout(() => {
      document.querySelector('.current-gallery').classList.remove('small')  
  }, 800)

  GALLERY_LIST[currentInx].forEach(url => {
      const div = document.createElement('div')
      div.innerHTML = `<img src=${ url } />`
      document.querySelector('.current-gallery').appendChild(div)
  })

  document.querySelectorAll('.current-gallery div').forEach(element =>
      element.onclick = (event) => showImage(event.currentTarget)
  )
}

const showImage = (div) => {
  const dialog = document.querySelector('.detail')
  dialog.appendChild(div.cloneNode(true))
  dialog.classList.add('show')
}