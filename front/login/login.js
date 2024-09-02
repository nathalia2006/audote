async function handleSubmit(event) {
  // Previne o comportamento padrão do formulário de recarregar a página ao ser enviado
  event.preventDefault();

  // Obtém os valores dos campos de entrada do formulário
  let email = document.getElementById("email").value;  // Obtém o valor do campo de email
  let senha = document.getElementById("senha").value;  // Obtém o valor do campo de senha
  
  // Cria um objeto com os dados do formulário para enviar ao servidor
  let data = { email, senha };

  // Exibe o objeto de dados no console para depuração
  console.log(data);

  // Faz uma requisição HTTP POST para o servidor
  const response = await fetch('http://localhost:3005/api/login', {
    method: "POST",  // Define o método HTTP como POST
    headers: {
      "Content-type": "application/json;charset=UTF-8"  // Define o tipo de conteúdo como JSON
    },
    body: JSON.stringify(data)  // Converte o objeto de dados para uma string JSON e o define como o corpo da requisição
  });

  // Obtém a resposta do servidor e converte para JSON
  let content = await response.json();

  // Verifica se a resposta do servidor indica sucesso
  if (content.success) {
    // Exibe a mensagem de sucesso primeiro
    alert("Login realizado com sucesso!");  // Exibe uma mensagem de sucesso para o usuário
  } else {
    alert("Erro. Verifique sua senha.");  // Exibe uma mensagem de erro para o usuário
    console.log(content.message);  // Exibe a mensagem de erro no console para depuração
  }
}
