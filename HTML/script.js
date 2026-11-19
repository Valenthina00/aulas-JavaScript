console.log("Sobrevivente conectado ao DOM!");

const cabecalho = document.querySelector('header');
console.log(cabecalho);

const btnTema = document.querySelector('#btn-tema');

const boasVindaas = document.querySelector('#boas-vindas');

const tituloSite = document.querySelector('header h1');

const listaBeneficios = document.querySelectorAll('ol li');
console.log(listaBeneficios.length);

const campoNome = document.querySelector('input[type="text"]');
const campoEmail = document.querySelector('input[type="email"]');

tituloSite.textContent = "The Walking Date";

const depoimento = document.querySelector('cite');

depoimento.innerHTML =
    "- <strong>Zezinho da Foice</strong>, Sobreviventes Nível 5";

const textoBoasVindas =
    document.querySelector('#boas-vindas p').textContent;

console.log(textoBoasVindas);

const aside = document.querySelector('aside');

aside.style.borderColor = 'var(--cor-sangue)';
aside.style.fontSize = '1.1rem';

const imagem = document.querySelector('#boas-vindas img');

console.log(imagem.getAttribute('alt'));

imagem.setAttribute(
    'alt',
    'Casal de zumbis apaixonados ao pôr do sol'
);

campoNome.value = "Sobrevivente Anônimo";

const primeiraLinha = document.querySelector('tbody tr');

primeiraLinha.classList.add('destaque-infectado');

const novoBeneficio = document.createElement('li');

novoBeneficio.textContent =
    "Seguro contra perda de membros durante o primeiro encontro.";

document.querySelector('#benefícios ol')
    .appendChild(novoBeneficio);

const fecharAlerta =
    document.querySelector('#fechar-alerta');

fecharAlerta.addEventListener('click', function() {

    const barraAlerta =
        document.querySelector('#barra-alerta');

    if (barraAlerta) {
        barraAlerta.remove();
    }

});

const htmlRoot = document.documentElement;

btnTema.addEventListener('click', function() {

    if (
        htmlRoot.getAttribute('data-theme') === 'light'
    ) {

        htmlRoot.removeAttribute('data-theme');

        btnTema.textContent =
            "Modo Sobrevivência";

    } else {

        htmlRoot.setAttribute(
            'data-theme',
            'light'
        );

        btnTema.textContent =
            "Modo Sombrio";

    }

});


let totalMatches = 0;

const botaoMatch =
    document.querySelector('.botao-match');

botaoMatch.addEventListener('click', function(event) {

    event.target.textContent =
        "Match Confirmado!";

    event.target.disabled = true;

    totalMatches++;

    document.querySelector(
        '#placar-matches'
    ).textContent =
        "Matches: " + totalMatches;

});


// ===============================
// CALCULADORA DE QUÍMICA
// ===============================

const btnCalcular =
    document.querySelector('#btn-calcular');

btnCalcular.addEventListener('click', function() {

    const diasInfectado =
        Number(
            document.querySelector(
                '#dias-infectado'
            ).value
        );

    const diasParceiro =
        Number(
            document.querySelector(
                '#dias-parceiro'
            ).value
        );


    if (
        document.querySelector(
            '#dias-infectado'
        ).value === "" ||

        document.querySelector(
            '#dias-parceiro'
        ).value === "" ||

        diasInfectado < 0 ||

        diasParceiro < 0
    ) {

        document.querySelector(
            '#resultado-quimica'
        ).textContent =
            "Erro: Digite um número válido de dias, humano!";

    } else {

        const soma =
            diasInfectado + diasParceiro;

        document.querySelector(
            '#resultado-quimica'
        ).textContent =
            "Nível de podridão combinada: " +
            soma +
            " dias! Compatibilidade alta!";

    }

});


// ===============================
// CRACHÁ DO SOBREVIVENTE
// ===============================

campoNome.addEventListener('input', function() {

    document.querySelector(
        '#preview-cracha'
    ).textContent =
        "Crachá de sobrevivente: " +
        campoNome.value;

});


// ===============================
// MOUSE SOBRE A IMAGEM
// ===============================

imagem.addEventListener('mouseover', function() {

    console.log(
        "Cuidado! Não chegue muito Perto da tela..."
    );

});


// ===============================
// FORMULÁRIO
// ===============================

const formulario =
    document.querySelector('form');

formulario.addEventListener(
    'submit',
    function(event) {
        event.preventDefault();

        alert(
                "Cadastro concluído, " +
                campoNome.value +
                "! Prepare sua melhor mordida."
            );

        campoNome.value = "";

        campoEmail.value = "";

        document.querySelector(
            '#preview-cracha'
        ).textContent =
            "Crachá: ...";

    }
);


// ===============================
// TECLA ESCAPE
// ===============================

document.addEventListener(
    'keydown',
    function(event) {

        if (event.key === 'Escape') {

            const barraAlerta =
                document.querySelector(
                    '#barra-alerta'
                );

            if (barraAlerta) {
                barraAlerta.remove();
            }

        }

    }
);