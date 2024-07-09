
const prompt = require('prompt-sync')({ sigint: true });

let biblioteca = [];

function adicionarLivro() {
    const nome = prompt('Nome do livro: ');
    const autor = prompt('Autor do livro: ');
    const paginas = prompt('Número de páginas: ');
    const genero = prompt('Gênero do livro: ');

    const livro = {
        nome,
        autor,
        paginas,
        genero
    };

    biblioteca.push(livro);
    console.log("Livro adicionado com sucesso!");
}

const removerLivro = () => {
    const nome = prompt('Nome do livro a ser removido: ');
    biblioteca = biblioteca.filter(livro => livro.nome !== nome);
    console.log("Livro removido com sucesso!");
}

const listarLivros = () => {
    console.log("Lista de livros na biblioteca:");
    biblioteca.forEach(livro => {
        console.log(`Nome: ${livro.nome}, Autor: ${livro.autor}, Páginas: ${livro.paginas}, Gênero: ${livro.genero}`);
    });
}

function atualizarLivro() {
    const nome = prompt('Nome do livro a ser atualizado: ');
    const livro = biblioteca.find(livro => livro.nome === nome);
    if (livro) {
        const novoNome = prompt(`Novo nome (atual: ${livro.nome}): `);
        const novoAutor = prompt(`Novo autor (atual: ${livro.autor}): `);
        const novasPaginas = prompt(`Novas páginas (atual: ${livro.paginas}): `);
        const novoGenero = prompt(`Novo gênero (atual: ${livro.genero}): `);

        if (novoNome) livro.nome = novoNome;
        if (novoAutor) livro.autor = novoAutor;
        if (novasPaginas) livro.paginas = novasPaginas;
        if (novoGenero) livro.genero = novoGenero;

        console.log("Livro atualizado com sucesso!");
    } else {
        console.log("Livro não encontrado!");
    }
}

const menu = () => {
    let opcao;
    do {
        console.log(`
        Escolha uma opção:
        1. Adicionar Livro
        2. Remover Livro
        3. Listar Livros
        4. Atualizar Livro
        5. Sair
        `);

        opcao = prompt('Opção: ');

        switch (opcao) {
            case '1':
                adicionarLivro();
                break;
            case '2':
                removerLivro();
                break;
            case '3':
                listarLivros();
                break;
            case '4':
                atualizarLivro();
                break;
            case '5':
                console.log('Saindo...');
                break;
            default:
                console.log('Opção inválida! Tente novamente.');
        }
    } while (opcao !== '5');
}

menu();

