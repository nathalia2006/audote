async function handleSubmit(event) {
  event.preventDefault();

  let email      = document.getElementById("email").value;
  let senha      = document.getElementById("senha").value;
  let data        = {email,senha};  


  console.log(data)
  const response = await fetch('http://localhost:3005/api/login', {
    method: "POST",
    headers: {"Content-type": "application/json;charset=UTF-8"},
    body: JSON.stringify(data)
  });

  let content = await response.json();    
    
  if(content.success) {
    alert("Senha correta")
    console.log(response)
    window.location.href = '../home/index.html';
  } else {
    alert('Senha incorreta');
    console.log(response)
  }
}