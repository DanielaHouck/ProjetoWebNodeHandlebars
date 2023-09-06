function validarCampo(inputId, feedbackId) {
    const input = document.getElementById(inputId);
    const feedback = document.getElementById(feedbackId);

    input.addEventListener("input", function() {
        if (input.value.length === 0) {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
        } else {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
        }
    });
}

    validarCampo("validationServerName", "validationServerUsernameFeedback");
    validarCampo("validationServerObs", "validationServerObsFeedback");
    validarCampo("validationServerOrigem", "validationServerOrigemFeedback");
    validarCampo("validationServerContato", "validationServerContatoFeedback");


    // Validação telefone
     function formatarTelefone() {
        var telefoneInput = document.getElementById("validationServerTelefone");
        var telefone = telefoneInput.value.replace(/\D/g, ""); // remove todos os caracteres não numéricos
        var telefoneFormatado = telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"); // aplica a máscara "(00) 90000-0000"
        telefoneInput.value = telefoneFormatado;
    }

        function validarTelefone(inputId, feedbackId) {
            const input = document.getElementById(inputId);
            const feedback = document.getElementById(feedbackId);

            input.addEventListener("input", function() {
                if (input.value.length === 15) {
                input.classList.remove("is-invalid");
                input.classList.add("is-valid");
                } else {
                input.classList.add("is-invalid");
                input.classList.remove("is-valid");
                }
            });
            }

            validarTelefone("validationServerTelefone", "validationServerTelefoneFeedback");


   
                function confirmExclusao(id) {
                    var alerta = confirm("Você deseja excluir realmente esse registro?");
                    if (alerta) {
                        window.location.href = "/excluir/" + id;
                    } else{
                        window.location.href = "/consulta"
                    }
                }
        
                function formatardata(data) {
                    const dia = data.getDate();
                    const mes = data.getMonth() + 1;
                    const ano = data.getFullYear();
                    return `${dia}/${mes}/${ano}`;
                }