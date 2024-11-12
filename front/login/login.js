async function handleSubmit(event) {
  // Previne o comportamento padrão do formulário de recarregar a página ao ser enviado
  event.preventDefault();

  // Obtém os valores dos campos de entrada do formulário
  let email = document.getElementById("email").value;  // Valor do campo de email
  let senha = document.getElementById("senha").value;  // Valor do campo de senha
  
  // Cria um objeto com os dados do formulário para enviar ao servidor
  let data = { email, senha };

  // Exibe o objeto de dados no console para depuração
  console.log(data);

  // Faz uma requisição HTTP POST para o servidor
  const response = await fetch('http://localhost:3005/api/login', {
    method: "POST",  // Método HTTP POST para envio dos dados
    headers: {
      "Content-type": "application/json;charset=UTF-8"  // Define o tipo de conteúdo como JSON
    },
    body: JSON.stringify(data)  // Converte o objeto de dados em string JSON para enviar na requisição
  });

  // Obtém a resposta do servidor e converte para JSON
  let content = await response.json();

  // Verifica se a resposta do servidor indica sucesso
  if (content.success) {
    let account = content.data;  // Dados da conta retornados pelo servidor
    localStorage.setItem('@account_logged', JSON.stringify(account));  // Armazena a conta no localStorage
    alert(content.message);  // Exibe uma mensagem de sucesso
    window.location.href = '../tela_inicial/tela_inicial.html';  // Redireciona para a tela inicial
  } else {
    alert("Erro. Verifique sua senha.");  // Exibe uma mensagem de erro para o usuário
    console.log(content.message);  // Exibe a mensagem de erro no console para depuração
  }
}
