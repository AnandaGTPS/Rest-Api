const url = 'https://api.waifu.pics/nsfw/trap'; // Ganti dengan URL JSON yang ingin digunakan

fetch(url)
  .then(response => response.json())
  .then(data => {
    const imageUrl = data.url;
    const imgContainer = document.getElementById('img-container');
    imgContainer.setAttribute('src', imageUrl);
  })
  .catch(error => console.error(error));
