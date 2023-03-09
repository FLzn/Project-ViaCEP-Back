<h1>Configuração Inicial</h1>

## Docker e Banco de dados
<ul>
  <li>Utilizando o docker, baixar a imagem do postgres com o seguinte comando: docker pull postgres</li>
  <li>Criar um container com a imagem do postgres, exemplo: docker run --name project_viacep -e POSTGRES_PASSWORD=senha -p 5432:5432 -d postgres</li>
  <li>Rodar o container criado</li>
  <li>Adicionar uma nova conexão no dbeaver com postgres, colocando as informações do container criado acima</li>
  <li>Manter as informações padrões, mudando apenas username e password</li>
</ul>

## Início do projeto
<ul>
  <li>O repositório principal é o master</li>
  <li>Ao abrir o projeto, na branch master, abra o terminal e dê o comando "npm i"</li>
  <li>No arquivo app.module.ts, mude a linha 29, synchronize, para true, rode o comando "npm run start:dev" e depois volte o synchronize para false</li>
  <li>Se necessário, altere as configurações do .env</li>
</ul>

## Postman ou Insomnia
<ul>
  <li>Caso deseje rodar o endpoint através dessas ferramentas, será enviada a rota por e-mail</li>
  <li>Rota: GET getAddress, recebendo um query param de cep</li>
</ul>

## Rodar o projeto completo
<ul>
  <li>Agora que o projeto foi configurado, acesse o projeto de frontend nesse link <a href="https://github.com/FLzn/Project-ViaCEP-Front">aqui</a></li>
</ul>