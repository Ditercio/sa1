document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Coleta dos dados do formulário
    const formData = {
        nome: this.querySelector('input[type="text"]').value,
        email: this.querySelector('input[type="email"]').value,
        telefone: this.querySelector('input[type="tel"]').value,
        intenção: this.querySelector('select').value
    };

    // Envio para o Webhook (Substitua pela sua URL de Webhook real)
    fetch('https://hook.us2.make.com/4jpcgqqup1dfaqroqnen4hmbj7wac4va', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            // Redireciona para a página de obrigado após o sucesso
            window.location.href = 'obrigado.html';
        } else {
            alert('Houve um erro ao enviar. Tente novamente.');
        }
    })
    .catch(error => console.error('Erro:', error));
});
