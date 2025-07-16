
fetch('inventory.json')
  .then(r => r.json())
  .then(cars => {
    const grid = document.getElementById('inventory-grid');
    cars.forEach(c => {
      let galleryHtml = c.images.map(src => `<img src="${src}" alt="${c.title}">`).join('');
      let specsRows = c.specs.map(s => {
        const key = Object.keys(s)[0], val = Object.values(s)[0];
        return `<tr><th>${key}</th><td>${val}</td></tr>`;
      }).join('');
      grid.innerHTML += `
        <div class="card inv-card">
          <div class="gallery">${galleryHtml}</div>
          <div class="card-body">
            <h3>${c.title}</h3>
            <p>${c.details}</p>
          </div>
          <details class="specs">
            <summary>Specs</summary>
            <table>${specsRows}</table>
          </details>
        </div>`;
    });
  });
