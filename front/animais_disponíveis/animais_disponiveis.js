async function getAnimais() {
    const response = await fetch('http://localhost:3005/api/animais/listar', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    });

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
                        <h2>${animal.nome_animal}</h2>
                        <p>${animal.descricao_animal}</p>
                        <p>Telefone: ${animal.telefone_animal}</p>
                        <button class="delete-button" data-id="${animal.id}" onclick="deleteAnimais(event)">Excluir</button>
                        <button class="edit-button" data-id="${animal.id}" onclick="editarAnimais(event)">Editar</button>
                    </div>
                </div>
            `;
            cardAnimais.innerHTML += cardFeed;
        });
    }
}

async function deleteAnimais(event) {
    const button = event.target;
    const animaisId = button.getAttribute('data-id');

    const response = await fetch(`http://localhost:3005/api/delete/animais/${animaisId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const result = await response.json();

    if (result.success) {
        alert(result.message);
        button.closest('.feed-card').remove();
    } else {
        alert(result.message);
    }
}

async function editarAnimais(event) {
    const button = event.target;
    const animaisId = button.getAttribute('data-id');

    // Aqui você pode capturar os dados que deseja editar, talvez através de um formulário
    const nome_animal = prompt("Digite o novo nome do animal:");
    const telefone_animal = prompt("Digite o novo telefone do animal:");
    const descricao_animal = prompt("Digite a nova descrição do animal:");  // Se você tiver campos de email e senha, capture-os também

    const response = await fetch(`http://localhost:3005/api/animais/editar/${animaisId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome_animal,
            telefone_animal,
            descricao_animal,
        })
    });

    const result = await response.json();

    if (result.success) {
        alert(result.message);
        location.reload()
        // Você pode atualizar a interface do usuário aqui se necessário
    } else {
        alert(result.message);
    }
}


getAnimais();
