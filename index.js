
function validacaoArquivo() {
    const arquivo = document.getElementById('arquivo');
    const extensoes = /(\.jpg|\.jpeg|\.png|\.pdf)$/i;

    if (!extensoes.exec(arquivo.value)) {
        alert('Histórico Inválido');
        arquivo.value = '';
        return false;
    }
    else if (arquivo.files && arquivo.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('visualizarImagem').innerHTML = '<object data="' + e.target.result + '" type="application/pdf" />';
        };

        reader.readAsDataURL(arquivo.files[0]);
    } else if (arquivo.files[0].size > (4 * 1024 * 1024)) {
        alert('Histórico não deve ser maior do que 4MB!');
    }


}


const validar = (e) => {
    //variaveis dos campos
    const nome = document.getElementById('nome');
    const rg = document.getElementById('rg');
    const cpf = document.getElementById('cpf');
    const nasc = document.getElementById('nasc');
    const email = document.getElementById('email');
    const celular = document.getElementById('celular');
    const recado = document.getElementById('trecado');
    const curso = document.getElementById('curso');
    const instituicao = document.getElementById('instituicao');
    const deficiencia = document.getElementById('deficiencia');
    const declaracao = document.getElementById('declaracao');


    //funções e variaveis pra validação

    //valida nome
    nomevalid = /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/gi;
    function espaco(string) {
        const espaco = string.split(" ");
        return espaco.length;
    };
    //valida email
    function emailvalid(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };
    //valida arquivo

    //valida data nascimento
    const data = new Date();
    const dma = (nasc.value).split('-');

    //valida telefone e recado
    const telefone = Number(celular.value);
    const trecado = Number(recado.value);

    //valida cpf
    const ncpf = Number(cpf.value);


    //condições para validação

    //condição nome
    if (nome.value.trim().length == 0) {
        e.preventDefault();
        alert('Preencha o campo nome!');
        nome.focus();
        return
    } else if (!nomevalid.test(nome.value)) {
        e.preventDefault();
        alert('Digite seu nome completo!');
        nome.focus();
        return
    }

    //condição rg
    if (rg.value.trim().length == 0) {
        e.preventDefault();
        alert('Preencha o campo RG!');
        rg.focus();
        return
    }

    //condição cpf
    if (cpf.value.trim().length == 0) {
        e.preventDefault();
        alert('Preencha o campo CPF!');
        cpf.focus();
        return
    } else if (Number.isNaN(ncpf)) {
        e.preventDefault();
        alert('Apenas numeros no CPF!');
        cpf.focus();
        return
    }

    //condição data nascimento
    if ((nasc.value.length == 0) || dma[0] > data.getFullYear() - 15 || dma[0] < 1900) {
        e.preventDefault();
        alert('Data de nascimento inválida!');
        nasc.focus();
        return
    } else if (dma[0] == (data.getFullYear() - 15) && dma[1] > data.getMonth() + 1) {
        e.preventDefault();
        alert('Data de nascimento inválida!');
        nasc.focus();
        return
    } else if (dma[0] == (data.getFullYear() - 15) && dma[1] == data.getMonth() + 1 && dma[2] > data.getDate()) {
        e.preventDefault();
        alert('Data de nascimento inválida!');
        nasc.focus();
        return
    }

    //condição email
    if (email.value.trim().length == 0) {
        e.preventDefault();
        alert('Preencha o campo email!');
        email.focus();
        return
    } else if (!emailvalid(email.value)) {
        e.preventDefault();
        alert('Email invalido!');
        email.focus();
        return
    }
    // condição celular
    if (celular.value.trim().length == 0) {
        e.preventDefault();
        alert('Telefone celular não informado!');
        celular.focus();
        return
    } else if (Number.isNaN(telefone)) {
        e.preventDefault();
        alert('Telefone celular Inválido!');
        celular.focus();
        return
    } if (Number.isNaN(trecado)) {
        e.preventDefault();
        alert('Telefone de recado Inválido!');
        celular.focus();
        return
    }

    // condição curso
    if (["0"].includes(curso.value)) {
        e.preventDefault();
        alert('Curso não definido!');
        curso.focus();
        return
    }

    // condição instituicao de ensino
    if (["0"].includes(instituicao.value)) {
        e.preventDefault();
        alert('Instituição de ensino não definida!');
        instituicao.focus();
        return
    }

    // condição arquivo

    // condição deficiencia
    if (["0"].includes(deficiencia.value)) {
        e.preventDefault();
        alert('É pessoa com deficiência?');
        deficiencia.focus();
        return
    }

    // condição declaração de ciência
    if (!declaracao.checked) {
        e.preventDefault();
        alert('Declaração de ciência não confirmada');
        declaracao.focus();
        return
    }

};

const limpar = (e) => e.currentTarget.classList.remove('invalido');
const iniciar = () => {
    const formulario = document.forms[0];
    formulario.addEventListener('submit', validar);

    document.getElementsByName('arquivo')
        .forEach(campo => campo.addEventListener('input', limpar));
};

document.addEventListener('DOMContentLoaded', iniciar);