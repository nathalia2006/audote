async function getAnimais() {
    const response = await fetch('http://localhost:3005/api/animais/listar', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    })

    const results = await response.json();

    if (results.success) {
        let cardAnimais = document.getElementById('animais');
        let animais = results.data;
        let imagens = "http://localhost:3005/uploads/";

        animais.forEach(animal => {
            let cardFeed = `
                <div class="feed-card">
                    <img src="${imagens + animal.foto_animal}" alt="imagem">
                    <div class="info">
                        <h2>Fumaça</h2>
                        <p>${animal.descricao_animal}</p>
                        <p>Telefone: (51) 91234-5678</p>
                        <button class="delete-button" onclick="deleteAnimais(event)">Excluir</button>
                    </div>
                </div>
            `;
            // inserir os botões de editar (chamando a função de UPDATE abaixo) e o botão de deletar chamando a função de delete
            // exemplo de botão que chama função <button onclick="nomeFunção(event)">Editar ou Deletar</button>
            cardAnimais.innerHTML += cardFeed;
        });

    }
}

//criar função PUT (provavelmente também criar uma função no controller que use UPDATE no banco)
//criar função DELETE

getAnimais();