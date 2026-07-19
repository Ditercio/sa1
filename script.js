document.getElementById('leadForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Coleta dos dados dos campos do formulário
    const formData = {
        nome: this.querySelector('input[type="text"]').value,
        email: this.querySelector('input[type="email"]').value,
        telefone: this.querySelector('input[type="tel"]').value,
        intencao: this.querySelector('select[name="intencao"]').value
    };

    // Envio para o Webhook do Make
    // SUBSTITUA A LINHA ABAIXO PELA SUA URL REAL DO MAKE
    fetch('https://hook.us2.make.com/4jpcgqqup1dfaqroqnen4hmbj7wac4va', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            // Sucesso: redireciona para a página de obrigado
            window.location.href = 'obrigado.html';
        } else {
            alert('Houve um erro no envio. Tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro de conexão com o servidor.');
    });
});
