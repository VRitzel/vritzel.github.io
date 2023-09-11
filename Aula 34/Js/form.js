function enviar() {
    const formData = {
        name: document.querySelector("#contact__name").value,
        email: document.querySelector("#contact__email").value,
        phone: document.querySelector("#contact__phone").value,
        topic: document.querySelector("#contact__topic").value,
        msg: document.querySelector("#contact__msg").value
    };

    const snackValue = document.querySelector(".contact__snack");
    const regexPhone = new RegExp("[0-9]{9}");
    const regexEmail = new RegExp("^\\w+([.-_]\\w+)*@\\w+(.\\w+)+$", "i");

    const validationRules = {
        phone: {
            regex: regexPhone,
            errorMessage: "Telefone inválido"
        },
        email: {
            regex: regexEmail,
            errorMessage: "Email inválido"
        },
        name: {
            validator: (value) => value.length > 0,
            errorMessage: "Nome é obrigatório"
        },
        topic: {
            validator: (value) => value.length > 0,
            errorMessage: "Assunto é obrigatório"
        },
        msg: {
            validator: (value) => value.length > 0,
            errorMessage: "Mensagem é obrigatória"
        }
    };

    let errorList = [];

    for(const field in formData){
        const value = formData[field];
        const rule = validationRules[field];

        if(rule){
            if (rule.regex && !rule.regex.test(value)){
                errorList.push(rule.errorMessage);
                break;
            }
            if (rule.validator && !rule.validator(value)){
                errorList.push(rule.errorMessage);
                break;
            }
        }
    };

    if(errorList.length > 0){
        snackValue.textContent = "Campos inválidos: " + errorList.join(", ");
    }
    else{
        snackValue.textContent = "Formulário enviado com sucesso!";
    }

    const snackTime = document.querySelector(".contact__snack");
    if(window.getComputedStyle(snackTime).display === "none"){
        snackTime.style.transition = "all 0.5s ease-in-out";
        snackTime.style.display = "flex";
    }
    setTimeout(() => {
        if(window.getComputedStyle(snackTime).display === "flex"){
            snackTime.style.transition = "all 0.5s ease-in-out";
            snackTime.style.display = "none";
        }
    }, 3000);
    
}