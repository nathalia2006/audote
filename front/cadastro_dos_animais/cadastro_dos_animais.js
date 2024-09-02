async function handleSubmit(event) {
  // Previne o comportamento padrão do formulário de recarregar a página ao ser enviado
  event.preventDefault();

  // Cria um novo objeto FormData para enviar dados de formulário com suporte a arquivos
  const formData = new FormData();
  
  // Adiciona os valores dos campos de entrada ao objeto FormData
  formData.append('email', document.getElementById("email").value);  // Adiciona o valor do campo de email
  formData.append('senha', document.getElementById("senha").value);  // Adiciona o valor do campo de senha
  formData.append('descricao_animal', document.getElementById("descricao_animal").value);  // Adiciona o valor do campo de descrição do animal
  formData.append('foto', document.getElementById("foto").files[0]);  // Adiciona o arquivo selecionado no campo de upload de foto

  try {
    // Faz uma requisição HTTP POST para o endpoint '/api/cadastroAnimais'
    const response = await fetch('http://localhost:3005/api/cadastroAnimais', {
      method: 'POST',  // Define o método HTTP como POST
      body: formData   // Define o corpo da requisição como o objeto FormData
    });

    // Verifica se a resposta do servidor foi bem-sucedida
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);  // Lança um erro se a resposta não for bem-sucedida
    }

    // Converte a resposta do servidor para JSON
    const content = await response.json();

    // Verifica o conteúdo da resposta para saber se a operação foi bem-sucedida
    if (content.success) {
      alert("Cadastro feito com sucesso!");  // Exibe uma mensagem de sucesso para o usuário
    } else {
      alert("Dados não enviados!");  // Exibe uma mensagem de erro se a resposta indicar falha
    }
  } catch (error) {
    // Captura e exibe erros que ocorreram durante a requisição
    console.error('Erro:', error);  // Imprime o erro no console para depuração
    alert('Ocorreu um erro ao enviar os dados!');  // Exibe uma mensagem genérica de erro para o usuário
  }
}
