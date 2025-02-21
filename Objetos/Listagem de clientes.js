function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome
    this.telefoneCelular = telefoneCelular
    this.email = email
    this.endereco = endereco;
    this.getNome = function() {
        return this.nome;
    };

    this.setNome = function(nome) {
        this.nome = nome;
    };

    this.getEmail = function() {
        return this.email;
    };

    this.setEmail = function(email) {
        this.email = email;
    };

    this.getNomeUpperCase = function() {
        return this.nome.toUpperCase();
    };

    this.getNomeLowerCase = function() {
        return this.nome.toLowerCase();
    };

    this.descricao = function() {
        return `
        ---------------
        Informações do Cliente:
        Nome: ${this.nome}
        Email: ${this.email}
        ---------------
        Telefone:
        DDD: ${this.telefoneCelular.getDDD()}
        Número: ${this.telefoneCelular.getNumero()}
        ---------------
        Endereço:
        Bairro: ${this.endereco.getBairro()}
        Número: ${this.endereco.getNumero()}
        Cidade: ${this.endereco.getCidade()}
        Estado: ${this.endereco.getEstado()}
        ---------------
        `;
    };
}


function TelefoneCelular(DDD, telefone) {
    this.DDD = DDD,
    this.telefone = telefone;
    this.getDDD = function() {
        return this.DDD;
    };

    this.setDDD = function(DDD) {
        this.DDD = DDD;
    };

    this.getNumero = function() {
        return this.telefone;
    };

    this.setNumero = function(telefone) {
        this.telefone = telefone;
    };
}

function Endereco(estado, cidade, bairro, numero){
    this.estado = estado,
    this.cidade = cidade,
    this.bairro = bairro,
    this.numero = numero;
    this.getEstado = function() {
        return this.estado;
    };

    this.setEstado = function(estado) {
        this.estado = estado;
    };

    this.getCidade = function() {
        return this.cidade;
    };

    this.setCidade = function(cidade) {
        this.cidade = cidade;
    };

    this.getBairro = function() {
        return this.bairro;
    };

    this.setBairro = function(bairro) {
        this.bairro = bairro;
    };

    this.getNumero = function() {
        return this.numero;
    };

    this.setNumero = function(numero) {
        this.numero = numero;
    };
}

let clientes = [];

let telefone1 = new TelefoneCelular('12', '981613594');
let endereco1 = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987');
let cliente1 = new Cliente('Agatha Wei', telefone1, 'agatha.wei@app.com', endereco1);

let telefone2 = new TelefoneCelular('21', '988888888');
let endereco2 = new Endereco('RJ', 'Rio de Janeiro', 'Copacabana', '123');
let cliente2 = new Cliente('Julia coelho', telefone2, 'julia@email.com', endereco2);

let telefone3 = new TelefoneCelular('31', '977777777');
let endereco3 = new Endereco('MG', 'Belo Horizonte', 'Savassi', '456');
let cliente3 = new Cliente('Karina Rodrigues', telefone3, 'karina@email.com', endereco3);

clientes.push(cliente1);
clientes.push(cliente2);
clientes.push(cliente3);

function ordenarClientesPorNome(clientesArray) {
    return clientesArray.sort((a, b) => a.getNome().localeCompare(b.getNome()));
}

let clientesOrdenados = ordenarClientesPorNome(clientes);

clientesOrdenados.forEach(cliente => console.log(cliente.descricao()));

