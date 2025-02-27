(function() {
    emailjs.init("lLHoGfUCQ1oUgAWe1"); // Substitua por seu User ID obtido no EmailJS
  })();
  
  // Função para enviar o email
  function sendEmail(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    const form = event.target; // Obtém o formulário que disparou o evento
    console.log(form);
    // Envia o formulário usando o EmailJS
    emailjs.sendForm('service_ollxlya', 'template_536mt5c', form)
      .then(response => {
        alert('Email enviado com sucesso!');
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch(error => {
        alert('Erro ao enviar email.');
        console.error('FAILED...', error);
      });
  }
  
  // Adiciona o evento de submit ao formulário
  document.getElementById('contactForm').addEventListener('submit', sendEmail);