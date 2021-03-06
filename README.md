<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## 1. Criando Aplica????o

```bash
# cria uma nova aplica????o
$ nest new nestjs-cars-app

# entre na aplica????o
$ cd nestjs-cars-app

# comando para abrir a aplica????o no Visual Code
$ cd code .
```

## 2. Instalando pacotes

```bash
# insta????o ORM e banco de dados
$ yarn add typeorm mysql @nestjs/typeorm

$ yarn add @nestjs/config
```

## 3. Rodando aplica????o

```bash
# rodando aplica????o como desenvolvedor
$ yarn start:dev
```

## 4. Arquivo .env

```bash
# exemplo
PORT=9000
DB_NAME=yourcar
DB_USER=root
DB_PASS=root
```

## 5. Instalando Mysql com Xampp

```bash
# Acesso o site https://www.apachefriends.org/pt_br/index.html
# Baixe o xampp de acordo com seu ambiente win/ubuntu/OS X
# Execute o arquivo baixado

# Opcional troca de senha do usu??rio, inicialmente vem setada como em branco

# Para trocar a senha do Mysql (nova senha root)
$ mysqladmin.exe -u root password root

# Troque tamb??m no phpadmin no diret??rio do Xampp procure pelo arquivo config.php ou config.inc.php
# Abra o arquivo e altere o ??ltimo espa??o da linha $cfg['Servers'][$i]['password'] = 'root';

```

## 6. Acesso ao Mysql por linha de cmd

```bash
# Digite
$ mysql -u root -p
# -u = usu??rio "root"
# -p = senha "root"

# Enter password [root]

# Criando database
$ create database youcar;

# Listando os databases
$ show databases;
```

## 7. Instalando GraphQL

```bash
# Digite
$ yarn add @nestjs/graphql @nestjs/apollo graphql apollo-server-express
```

## 8. Validators

```bash
# Instalando
$ yarn add class-validator class-transformer
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil My??liwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
