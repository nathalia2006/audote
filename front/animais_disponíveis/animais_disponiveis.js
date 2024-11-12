// Função assíncrona para obter a lista de animais
async function getAnimais() {
    // Faz uma requisição GET para a API e aguarda a resposta
    const response = await fetch('http://localhost:3005/api/animais/listar', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    });

    // Converte a resposta para JSON
    const results = await response.json();

    // Verifica se a requisição foi bem-sucedida
    if (results.success) {
        let cardAnimais = document.getElementById('animais'); // Elemento onde os cards serão inseridos
        let animais = results.data;                           // Lista de animais
        let imagens = "http://localhost:3005/uploads/";       // URL base para imagens

        let usuario = JSON.parse(localStorage.getItem('@account_logged')); // Usuário logado
        console.log(usuario[0].email); // Exibe o email do usuário logado

        // Itera sobre cada animal na lista
        animais.forEach(animal => {
            console.log(animal.email); // Exibe o email do animal
            // Verifica se o animal pertence ao usuário logado
            if (animal.email == usuario[0].email) {
                // Template de card para animais do usuário logado com botões de edição e exclusão
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
                cardAnimais.innerHTML += cardFeed; // Adiciona o card ao HTML
            } else {
                // Template de card para animais de outros usuários sem botões
                let cardFeed = `
                    <div class="feed-card">
                        <img src="${imagens + animal.foto_animal}" alt="imagem">
                        <div class="info">
                            <h2>${animal.nome_animal}</h2>
                            <p>${animal.descricao_animal}</p>
                            <p>Telefone: ${animal.telefone_animal}</p>
                        </div>
                    </div>
                `;
                cardAnimais.innerHTML += cardFeed; // Adiciona o card ao HTML
            }
        });
    }
    // usuario[0].email é o email do usuário logado nesta sessão
}

// Função para excluir um animal
async function deleteAnimais(event) {
    const button = event.target;               // Botão que acionou o evento
    const animaisId = button.getAttribute('data-id'); // Obtém o ID do animal

    // Faz uma requisição DELETE para a API para excluir o animal
    const response = await fetch(`http://localhost:3005/api/delete/animais/${animaisId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    });

    // Converte a resposta para JSON
    const result = await response.json();

    // Verifica o resultado e exibe mensagem de sucesso ou erro
    if (result.success) {
        alert(result.message);
        button.closest('.feed-card').remove(); // Remove o card do animal excluído
    } else {
        alert(result.message);
    }
}

// Função para editar um animal
async function editarAnimais(event) {
    const button = event.target;                // Botão que acionou o evento
    const animaisId = button.getAttribute('data-id'); // Obtém o ID do animal

    // Coleta as novas informações do animal a partir de prompts
    const nome_animal = prompt("Digite o novo nome do animal:");
    const telefone_animal = prompt("Digite o novo telefone do animal:");
    const descricao_animal = prompt("Digite a nova descrição do animal:");

    // Faz uma requisição PUT para a API para atualizar os dados do animal
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

    // Converte a resposta para JSON
    const result = await response.json();

    // Verifica o resultado e exibe mensagem de sucesso ou erro
    if (result.success) {
        alert(result.message);
        location.reload(); // Recarrega a página para refletir as mudanças
    } else {
        alert(result.message);
    }
}

// Chama a função para obter e exibir os animais na página
getAnimais();

// Botão para redirecionar à página de cadastro de novos animais
const BotaoCadastrar = document.getElementById('.BotaoCadastrar');

BotaoCadastrar.onclick = function() {
    window.location.href = '../cadastro_dos_animais/cadastro_dos_animais.html';
}