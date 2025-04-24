fetch('http://localhost:3000/filmes')
  .then(res => res.json())
  .then(data => {
    const div = document.getElementById('filmes');
    data.forEach(filme => {
      const p = document.createElement('p');
      p.textContent = `${filme.titulo} - ${filme.duracao} min`;
      div.appendChild(p);
    });
  });