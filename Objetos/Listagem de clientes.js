function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome;
    this.telefoneCelular = telefoneCelular;
    this.email = email;
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

    this.getEmailUpperCase = function() {
        return this.email.toUpperCase();
    };

    this.getEmailLowerCase = function() {
        return this.email.toLowerCase();
    };

    this.descricao = function() {
        return `
        ---------------
        Informações do Cliente:
        Nome: ${this.nome}
        Email: ${this.email}
        ${this.telefoneCelular.descricao()}
        ${this.endereco.descricao()}
        ---------------
        `.trim();
    };
}

function TelefoneCelular(DDD, telefone) {
    this.DDD = DDD;
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

    this.getDDDUpperCase = function() {
        return this.DDD.toString().toUpperCase();
    };

    this.getDDDLowerCase = function() {
        return this.DDD.toString().toLowerCase();
    };

    this.getNumeroUpperCase = function() {
        return this.telefone.toString().toUpperCase();
    };

    this.getNumeroLowerCase = function() {
        return this.telefone.toString().toLowerCase();
    };

    this.descricao = function() {
        return `
        ---------------
        Telefone:
        DDD: ${this.DDD}
        Número: ${this.telefone}
        ---------------
        `.trim();
    };
}

function Endereco(estado, cidade, bairro, numero) {
    this.estado = estado;
    this.cidade = cidade;
    this.bairro = bairro;
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

    this.getEstadoUpperCase = function() {
        return this.estado.toUpperCase();
    };

    this.getEstadoLowerCase = function() {
        return this.estado.toLowerCase();
    };

    this.getCidadeUpperCase = function() {
        return this.cidade.toUpperCase();
    };

    this.getCidadeLowerCase = function() {
        return this.cidade.toLowerCase();
    };

    this.getBairroUpperCase = function() {
        return this.bairro.toUpperCase();
    };

    this.getBairroLowerCase = function() {
        return this.bairro.toLowerCase();
    };

    this.getNumeroUpperCase = function() {
        return this.numero.toString().toUpperCase();
    };

    this.getNumeroLowerCase = function() {
        return this.numero.toString().toLowerCase();
    };

    this.descricao = function() {
        return `
        ---------------
        Endereço:
        Bairro: ${this.bairro}
        Número: ${this.numero}
        Cidade: ${this.cidade}
        Estado: ${this.estado}
        ---------------
        `.trim();
    };
}

let clientes = [];

let telefone1 = new TelefoneCelular('12', '981613594');
let endereco1 = new Endereco('SP', 'São Jose dos campos', 'Jardim das industrias', '201');
let cliente1 = new Cliente('Agatha Wei Alves', telefone1, 'agatha.wei@gmail.com', endereco1);

let telefone2 = new TelefoneCelular('12', '988888888');
let endereco2 = new Endereco('SP', 'São jose dos campos', 'Jorge Zarur', '443');
let cliente2 = new Cliente('Julia Coelho Santiago', telefone2, 'julia.coelho@gmail.com', endereco2);

let telefone3 = new TelefoneCelular('12', '977777777');
let endereco3 = new Endereco('SP', 'São jose dos campos', 'jardim oriente', '456');
let cliente3 = new Cliente('Karina Rodrigues', telefone3, 'karina.rodrigues@gmail.com', endereco3);

clientes.push(cliente1);
clientes.push(cliente2);
clientes.push(cliente3);

function ordenarClientesPorNome(clientesArray) {
    return clientesArray.sort((a, b) => a.getNome().localeCompare(b.getNome()));
}

let clientesOrdenados = ordenarClientesPorNome(clientes);

clientesOrdenados.forEach(cliente => console.log(cliente.descricao()));



