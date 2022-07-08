
const validar = (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome');
    const rg = document.getElementById('rg');
    const cpf = document.getElementById('cpf');
    const nasc = document.getElementById('nasc');
    const email = document.getElementById('email');
    const celular = document.getElementById('celular');
    const curso = document.getElementById('curso');
    const ensino = document.getElementById('ensino');
    const deficente = document.getElementById('deficente');
    const declaracao = document.getElementById('declaracao');

    function emailvalid(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    if(nome.value.trim().length === 0){
        alert('Preencha o campo nome!');
        nome.focus();
        return
    }

    if(rg.value.trim().length === 0){
        alert('Preencha o campo RG!');
        rg.focus();
        return
    }

    if(cpf.value.trim().length === 0){
        alert('Preencha o campo CPFo!');
        cpf.focus();
        return
    }

    if(nasc.value.length===0){
        alert('Preencha a Data de Nascimento!');
        nasc.focus();
        return
    }

    if(email.value.trim().length === 0){
        alert('Preencha o campo email!');
        email.focus();
        return
    }if(!emailvalid(email.value)){
        alert('Email invalido!');
        email.focus();
    }

    if(celular.value.trim().length === 0){
        alert('Preencha o campo vazio!');
        celular.focus();
        return
    }

    if(curso.value.trim() === 0){
        alert('Selecione o curso!');
        curso.focus();
        return
    }

    // if(celular.value.trim().length === 0){
    //     alert('Preencha o campo vazio!');
    //     nasc.focus();
    //     return
    // }

    // if(celular.value.trim().length === 0){
    //     alert('Preencha o campo vazio!');
    //     nasc.focus();
    //     return
    // }




};



const iniciar = () => {
    const enviar = document.getElementById('enviar');
    enviar.addEventListener('click', validar);

    const formulario = document.forms[0];
    formulario.addEventListener(enviar,validar);
};

document.addEventListener('DOMContentLoaded', iniciar);