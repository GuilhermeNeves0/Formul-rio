
    document.getElementById('cadastroForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário

        let hasError = false;

        // Limpa mensagens de erro
        document.getElementById('nomeError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('senhaError').textContent = '';
        document.getElementById('confirmaSenhaError').textContent = '';

        // Validação do nome
        const nome = document.getElementById('nome').value;
        if (nome.trim() === '') {
            document.getElementById('nomeError').textContent = 'O nome é obrigatório.';
            hasError = true;
        }

        // Validação do email
        const email = document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === '') {
            document.getElementById('emailError').textContent = 'O email é obrigatório.';
            hasError = true;
        } else if (!emailRegex.test(email)) {
            document.getElementById('emailError').textContent = 'Formato de email inválido.';
            hasError = true;
        }

        // Validação da senha
        const senha = document.getElementById('senha').value;
        if (senha.trim() === '') {
            document.getElementById('senhaError').textContent = 'A senha é obrigatória.';
            hasError = true;
        }

        // Validação da confirmação de senha
        const confirmaSenha = document.getElementById('confirmaSenha').value;
        if (confirmaSenha.trim() === '') {
            document.getElementById('confirmaSenhaError').textContent = 'A confirmação de senha é obrigatória.';
            hasError = true;
        } else if (confirmaSenha !== senha) {
            document.getElementById('confirmaSenhaError').textContent = 'As senhas não correspondem.';
            hasError = true;
        }

        // Se não houver erros, pode enviar o formulário
        if (!hasError) {
            alert('Formulário enviado com sucesso!');
            // Aqui você pode enviar o formulário, por exemplo, usando AJAX
            // ou simplesmente descomentar a linha abaixo para permitir o envio padrão
            // event.target.submit();
        }
    });
