const listYugioh = document.querySelector('#lista-yugioh');

function listarCards(listdatabase) {
    for (let i = 0; i < listdatabase.length; i++) {
        let card = listdatabase[i];

        if (card.tag[0] === "Yu-Gi-Oh") {
            criarCardYugioh(card);

        }
    }
}

function criarCardYugioh(database) {
    let idTag = database.id;
    let categoria = database.tag;
    let cardNome = database.nameCard;
    let cardImg = database.img;
    let cardDescricao = database.description;
    let cardPrice = database.value;
    let cardAddCart = database.addCart;

    let tagLi = document.createElement('li');
    tagLi.setAttribute('id', idTag);
    let tagDiv1 = document.createElement('div');
    tagDiv1.setAttribute('class', 'imagem-card');
    let tagImg = document.createElement('img');
    tagImg.setAttribute('src', cardImg);
    tagImg.setAttribute('alt', cardNome);
    tagDiv1.appendChild(tagImg);
    let tagDiv2 = document.createElement('div');
    tagDiv2.setAttribute('class', 'conteudo');
    let tagSpan = document.createElement('span');
    tagSpan.setAttribute('class', 'conteudo-categiria');
    tagSpan.innerHTML = categoria;
    let tagH2 = document.createElement('h2');
    tagH2.setAttribute('class', 'conteudo-card-nome');
    tagH2.innerHTML = cardNome;
    let tagP1 = document.createElement('p');
    tagP1.setAttribute('class', 'conteudo-descricao');
    tagP1.innerHTML = `<em>${cardDescricao}</em>`;
    let tagP2 = document.createElement('p');
    tagP2.setAttribute('class', 'conteudo-price');
    tagP2.innerHTML = `R$ ${cardPrice.toFixed(2).replace('.', ',')}`;
    let tagButton = document.createElement('button');
    tagButton.setAttribute('class', 'conteudo__card-button');
    tagButton.innerHTML = cardAddCart;


    tagDiv2.appendChild(tagSpan);
    tagDiv2.appendChild(tagH2);
    tagDiv2.appendChild(tagP1);
    tagDiv2.appendChild(tagP2);
    tagDiv2.appendChild(tagButton);
    tagLi.appendChild(tagDiv1);
    tagLi.appendChild(tagDiv2);
    listYugioh.appendChild(tagLi);
}

listarCards(data);


//add ao carrinho

const listaCarrinho = document.querySelector('.lista-carrinho');
const addCarrinhoButton = document.querySelectorAll('.conteudo__card-button');
const carrinhoVazio = document.querySelector('#carrinho-vazio');


function addCarrinho(database) {
    let idTag = database.id;
    let cardNome = database.nameCard;
    let cardImg = database.img;
    let cardPrice = database.value;

    let tagLi = document.createElement('li');
    tagLi.setAttribute('class', 'card-carrinho');
    tagLi.setAttribute('id', idTag);
    let tagDiv1 = document.createElement('div');
    tagDiv1.setAttribute('class', 'img__card-conteudo');
    let tagImg = document.createElement('img');
    tagImg.setAttribute('class', 'imagem-card-conteudo-img ');
    tagImg.setAttribute('src', cardImg);
    tagImg.setAttribute('alt', cardNome);
    tagDiv1.appendChild(tagImg);
    let tagDiv2 = document.createElement('div');
    tagDiv2.setAttribute('class', 'conteiner__conteudo-carrinho');
    let tagH4 = document.createElement('h4');
    tagH4.setAttribute('class', 'conteudo-card-nome-carrinho');
    tagH4.innerHTML = cardNome;
    let tagP = document.createElement('p');
    tagP.setAttribute('class', 'conteudo-price-carrinho');
    tagP.innerHTML = `R$ ${cardPrice.toFixed(2).replace('.', ',')}`;
    let tagButton = document.createElement('button');
    tagButton.setAttribute('class', 'remover-card-button');
    tagButton.innerHTML = 'Remover Carta';


    tagDiv2.appendChild(tagH4);
    tagDiv2.appendChild(tagP);
    tagDiv2.appendChild(tagButton);
    tagLi.appendChild(tagDiv1);
    tagLi.appendChild(tagDiv2);
    listaCarrinho.appendChild(tagLi);

}

let listaTotal = [];



function removerCarrinhoVazio() {

    for (let i = 0; i < addCarrinhoButton.length; i++) {

        if (listaCarrinho.classList.toggle('carrinho-vazio') === true) {

            carrinhoVazio.remove()
            document.querySelector('.carrinho').insertAdjacentHTML('beforeend',
                `<div class="qtd-total">
                        <div id="qtd-estoque">
                            <h4>Quantidade:</h4>
                            <p id="qtd-carrinho"></p>
                        </div>
                        <div id="total-compra">
                            <h4>Total:</h4>
                            <p id="total-valor"></p>
                        </div>
                    </div>
                    <button id="finalizar-compra">Finalizar Compra</button>`
            );
        } else if (listaCarrinho.classList.toggle('carrinho-vazio') === false) {
            //não faz nada
        }
        totalCompra(listaTotal);


    }

}

function totalCompra(listaTotal) {
    let total = 0;
    for (let i = 0; i < listaTotal.length; i++) {
        total += parseFloat(listaTotal[i]);
    }
}

function contQtdTotal() {
    let qtdCard = document.querySelector('#qtd-carrinho');
    let qtdCarrinho = document.querySelectorAll('.card-carrinho');

    qtdCard.innerHTML = qtdCarrinho.length + 1;

    if (qtdCarrinho.length === 0) {
        qtdCard.innerHTML = qtdCard.outerHTML;
    } else {
        qtdCard.innerHTML = qtdCarrinho.length + 1;
    }

}

function calcValorTotal() {
    // const valorCard = document.querySelectorAll('.conteudo-price-carrinho');

    // for (let i = 0; i < valorCard.length; i++) {
    //     listaTotal.push(valorCard[i].innerHTML.substring(3, valorCard[i].innerHTML.length - 1).replace(',', '.'));
    // }
    let totalCard = document.querySelector('#total-valor');
    let valorTotal = 0;
    let valorCard = document.querySelectorAll('.conteiner__conteudo-carrinho p');

    if (valorTotal === 0) {

        for (let i = 0; i < valorCard.length; i++) {
            valorTotal += parseFloat(valorCard[i].innerHTML.substring(3, valorCard[i].innerHTML.length - 1).replace(',', '.'));
        }
        for (let i = 0; i < valorCard.length; i++) {
            let valorDoCard = valorCard[i].innerHTML.substring(3, valorCard[i].innerHTML.length - 1).replace(',', '.');
            valorTotal += parseFloat(valorDoCard);
        }
    }


    totalCard.innerHTML = `R$ ` + valorTotal.toFixed(2).replace('.', ',');

}



for (let i = 0; i < addCarrinhoButton.length; i++) {
    addCarrinhoButton[i].addEventListener('click', function () {
        removerCarrinhoVazio();
        contQtdTotal();
        calcValorTotal();
        addCarrinho(data[i]);
    }
    );

}

//esvaziar o carrinho 

const botaoRemoverCard = document.querySelectorAll('.lista-carrinho');
const qtdTotal = document.querySelector('.qtd-total');
const qtdCarrinho = document.querySelector('#qtd-carrinho');
const buttonFinalizarCompra = document.querySelector('#finalizar-compra');

for (let i = 0; i < botaoRemoverCard.length; i++) {
    botaoRemoverCard[i].addEventListener('click', function (event) {
        botaoRemover = event.target;

        if (botaoRemover.classList.contains('remover-card-button') === true) {
            botaoRemover.parentElement.parentElement.remove();
            contQtdTotal();
            calcValorTotal();
            removerCarrinhoVazio();
        } else {
            location.reload();
        }
    });
}
