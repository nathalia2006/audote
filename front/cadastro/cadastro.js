// Função assíncrona que é chamada quando o formulário é enviado
async function handleSubmit(event) {
  // Impede o comportamento padrão do formulário (recarregar a página)
  event.preventDefault();

  // Obtém os valores dos campos do formulário usando seus IDs
  let nome  = document.getElementById("nome").value; // Nome do usuário
  let email = document.getElementById("email").value; // Email do usuário
  let senha = document.getElementById("senha").value; // Senha do usuário

  // Cria um objeto com os dados do formulário
  let data = { nome, email, senha };

  try {
    // Envia uma solicitação POST para o servidor com os dados do formulário
    const response = await fetch('http://localhost:3005/api/user/create', {
      method: "POST", // Define o método HTTP como POST
      headers: {
        "Content-type": "application/json;charset=UTF-8" // Define o tipo de conteúdo como JSON
      },
      body: JSON.stringify(data) // Converte o objeto data em uma string JSON e o envia no corpo da solicitação
    });

    // Converte a resposta do servidor para JSON
    let content = await response.json();

    // Verifica se a resposta indica sucesso
    if (content.success) {
      alert("Senha cadastrada!"); // Exibe uma mensagem de sucesso
    } else {
      alert(); // Exibe uma mensagem de erro
      console.log(content.message); // Exibe a mensagem de erro no console para depuração
    }
  } catch (error) {
    // Captura e exibe erros que possam ocorrer durante a solicitação
    console.error('Erro:', error); // Exibe o erro no console
    alert('Ocorreu um erro ao enviar os dados.'); // Exibe uma mensagem de erro para o usuário
  }
}
