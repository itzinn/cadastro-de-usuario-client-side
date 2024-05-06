//Pablo Felipe Montemor - 13732352

var nome = document.getElementById("inputName");
var nomeHelp = document.getElementById("inputNameHelp");
var ano = document.getElementById("inputYear");
var anoHelp = document.getElementById("inputYearHelp");
var email = document.getElementById("inputEmail");
var emailHelp = document.getElementById("inputEmailHelp");
var password = document.getElementById("inputPassword");
var passwordHelp = document.getElementById("inputPasswordHelp");

var passStrengthMeter = document.getElementById("passStrengthMeter");


function validaNome(e){

    const regexNome = /^[a-zA-Z]+$/;
    const regexNomeTamanho = /^.{6,}$/;


    if(e.target.value.trim().match(regexNome)==null){
        nomeHelp.textContent = "O nome deve conter apenas letras";
        nomeHelp.style.color="red";
    }
    else if(e.target.value.trim().match(regexNomeTamanho)==null){
        nomeHelp.textContent = "O nome deve ter pelo menos 6 caracteres";
        nomeHelp.style.color="red";
    }
    else{
        nomeHelp.textContent = "";
    }
}

function validaAno(e){
    const regexAno = /^[0-9]{4}$/;
    const anoTrimado = e.target.value.trim();

    if(anoTrimado.match(regexAno)==null){
        anoHelp.textContent = "Formato de ano inválido";
        anoHelp.style.color="red";
    }
    else{
        var date = new Date();
        if( parseInt(anoTrimado) > parseInt(date.getFullYear()) ){
            anoHelp.textContent = `Ano inválido. O ano não pode ser maior que ${date.getFullYear()}.`;
            anoHelp.style.color="red";
        } else if( parseInt(anoTrimado) < 1900 ){
            anoHelp.textContent = `Ano inválido. O ano não pode ser menor que ${1900}.`;
            anoHelp.style.color="red";
        }
        else{
            anoHelp.textContent = "";
        }
    }
}

function validaEmail(e){
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.(com|net|br|org)$/;

    if(e.target.value.trim().match(regexEmail)==null){
        emailHelp.textContent = "Formato de email inválido";
        emailHelp.style.color="red";
    }
    else{
        emailHelp.textContent = "";
    }
}

function validaSenha(e){
    const regexSenha = /^.{6,20}$/;
    const regexCaracterEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const regexDigito = /\d/;
    const nomeUsuario = nome.value.trim().toLowerCase();
    const anoNascimento = ano.value.trim();
    const regexLetra = /[a-zA-Z]/;

    const senha = e.target.value.trim();

    let ehValida = false;
    passStrengthMeter.value = 0;
    //verifica se é válida
    if(senha.match(regexSenha) == null){
        passwordHelp.textContent = "A senha deve ter entre 6 e 20 caracteres";
        passwordHelp.style.color = "red";
    }
    else if(senha.match(regexLetra) == null){
        passwordHelp.textContent = "A senha deve conter pelo menos uma letra";
        passwordHelp.style.color = "red";
    }
    else if(senha.match(regexCaracterEspecial) == null){
        passwordHelp.textContent = "A senha deve conter pelo menos um caractere especial";
        passwordHelp.style.color = "red";
    }
    else if(senha.match(regexDigito) == null){
        passwordHelp.textContent = "A senha deve conter pelo menos um dígito";
        passwordHelp.style.color = "red";
    }
    else if(senha.toLowerCase().includes(nomeUsuario)){
        passwordHelp.textContent = "A senha não pode conter o nome de usuário";
        passwordHelp.style.color = "red";
    }
    else if(senha.includes(anoNascimento)){
        passwordHelp.textContent = "A senha não pode conter o ano de nascimento";
        passwordHelp.style.color = "red";
    }
    else{
        passwordHelp.textContent = "";
        ehValida = true;
    }

    //verifica qualidade da senha
    if(ehValida){
        const regexSenhaFraca = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*\d)(?=.*[a-z]).{1,7}$/;
        const regexSenhaModerada = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*\d)(?=.*[A-Z]).{8,}$/;
        const regexSenhaForte = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*\d.*\d)(?=.*[A-Z].*[A-Z]).{12,}$/;

    if (senha.match(regexSenhaForte)) {
        passwordHelp.textContent = "Forte";
        passwordHelp.style.color = "green";
        passStrengthMeter.value = 30;
    } else if (senha.match(regexSenhaModerada)) {
        passwordHelp.textContent = "Moderada";
        passwordHelp.style.color = "orange";
        passStrengthMeter.value = 15;
    } else if (senha.match(regexSenhaFraca)) {
        passwordHelp.textContent = "Fraca";
        passwordHelp.style.color = "red";
        passStrengthMeter.value = 5;
    } else {
        passwordHelp.textContent = "Fraca";
        passwordHelp.style.color = "red";
        passStrengthMeter.value = 10;
    }

    }
}


nome.addEventListener('focusout', validaNome);

ano.addEventListener('focusout', validaAno);

email.addEventListener('focusout', validaEmail);

password.addEventListener('focusout', validaSenha);
