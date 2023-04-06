# Boas vindas ao repositório do Desafio Técnico de Desenvolvedor PHP Full Stack da BR24 ⚡

## O que foi desenvolvido 👩‍💻

Um **CRUD** utilizando `Bitrix24`, `PHP` e `React`.

## Desenvolvimento 🎯

Na aplicação desenvolvida é possível **criar, visualizar, editar e deletar** usuários. Todas as informações estão em um **banco de dados**, que foi desenvolvido e manipulado utilizando o **phpMyAdmin** e o **MySQL**.

### CRUD com React e PHP 🗂

Clique nos links a seguir para acessar os vídeos de cada operação do CRUD desenvolvido com **React** e **PHP**:

📝 [Create (criação) de uma nova empresa](https://user-images.githubusercontent.com/67391952/230394032-fe27b7e9-0091-4203-8b4f-6724a11cb642.webm) <br />
📄 [Read (leitura) da lista de empresas](https://user-images.githubusercontent.com/67391952/230394087-f9f3609d-2a8c-43b0-8e04-79fc3a9ec2dd.webm) <br />
🔄 [Update (atualização) de uma empresa](https://user-images.githubusercontent.com/67391952/230394111-baa0eaa9-3445-48f9-9ce4-4c42d57c1c49.webm) <br />
❌ [Delete (exclusão) de uma empresa](https://user-images.githubusercontent.com/67391952/230394147-1fa4ed7a-07c9-460b-95ee-c036d1892aba.webm) <br />

## Tecnologias utilizadas 🛠

<img title="PHP" alt="PHP" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" /> <img title="React" alt="React" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /> <img title="MySQL" alt="MySQL" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" /> <img title="HTML" alt="HTML" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /> <img title="CSS" alt="CSS" height="80" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          
## Minhas considerações durante o desenvolvimento 📝

### Documentação: 📌

[Notas sobre o desenvolvimento do aplicativo Bitrix24](https://training.bitrix24.com/rest_help/)

Para ter como base de desenvolvimento, tentei ter acesso ao exemplo disponibilizado no tópico **Aplicativos hospedados em servidores de terceiros**, porém o link não deu acesso ao arquivo, como podemos observar no vídeo abaixo:

[Vídeo da documentação](https://github.com/Kecbm/desafio-BR-24/blob/main/src/docs/01.%20Exemplo%20da%20documenta%C3%A7%C3%A3o.webm?raw=true)

Assim, priorizando o desenvolvimento guiado pelo **MVP** (Produto Minimamente Viável), decidi desenvolver primeiro um **CRUD** utilizando `React`, `PHP` e `MySQL`. Como é meu primeiro contato com `PHP`, é um bom começo ter essa experiência inicial.

### Rodar o servidor PHP

Para rodar o servidor `PHP` na máquina, utilizei a seguinte documentação: [Built-in web server](https://www.php.net/manual/en/features.commandline.webserver.php), onde acessamos a pasta na qual queremos rodar o servidor:

```bash
  cd src
```

```bash
  cd api
```

E rodamos o comando:

```bash
  php -S localhost:8000
```

Após rodar o comando obtemos a resposta a seguir no terminal:

```bash
  [Mon Apr  3 17:28:52 2023] PHP 7.4.33 Development Server (http://localhost:8000) started
```

Significa que o **servidor PHP** está funcionando corretamente. Assim, podemos acessar o endereço **http://localhost:8000/** e observar o funcionamento da API.

### Integração da aplicação Full Stack com o Bitrix24

A integração foi a etapa mais desafiadora do projeto, pois a plataforma Bitrix24 e o PHP são ferramentas novas para mim. Pesquisei arduamente e encontrei a biblioteca [bitrix24-api-module](https://packagist.org/packages/oihso/php-bitrix24-api-module) porém não consegui instalar ela no projeto. Obtive o erro a seguir e não encontrei solução:

![Erro na instalação da biblioteca](././src/docs/02.%20Biblioteca%20bitrix24-api-module.png)