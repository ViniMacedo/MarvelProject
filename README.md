# Projeto Marvel

Este projeto foi criado utilizando as seguintes linguagens: Javascript, Python, HTML e CSS.
Para seu desenvolvimento utilizei uma estrutura de microserviço, na qual o Python ficou
responsável pelo backend e usei o framework React para o desenvolvimento do frontend.

## Como funciona - Backend

Para este projeto o backend é o responsável por consumir uma API pública disponível pela Marvel
[https://developer.marvel.com/docs](https://developer.marvel.com/docs), e para consumir essa API
realizei o cadastro no site para então ter minhas chaves de acesso (disponíveis no projeto para fins estudantis)
e utilizei uma biblioteca python chamada Marvel que por sua vez atende todos requisitos impostos pela Marvel para
realizar o consumo da API.<br>
Para fazer uma comunicação com o front utilizei o FastAPI por já possuir familiaridade com a
biblioteca e por achar de fácil uso. <br>
No projeto está disponibilizado os requirements, portanto quando clonar o projeto basta executar
em seu promp o seguinte comando  `pip install -r requirements.txt`
<br>
Para colocar o backend para rodar basta ir até o aquivo api.py e colocar para debugá-lo, caso queira
testar os endpoints separadamente vá até [http://localhost:8000/docs](http://localhost:8000/docs), isso é algo disponibilizado
pelo FastAPI que faz com que eu ache agradável trabalhar com ele.


## Como funciona - Frontend

Neste projeto utilizei o ReactJs como framework e portanto para conseguir rodar esse projeto em
sua máquina será necessário ter o NodeJs instalado e para ter todas as bibliotecas do projeto baixadas
basta entrar na pasta frontend através do terminal: `cd frontend` em seguida executar `npm install` assim todas
as dependências front end do projeto serão instaladas e para finalizar `npm start`. Automaticamente seu browser
irá abrir no [http://localhost:3000](http://localhost:3000)


## Funcionalidades

A página web em si possui basicamente duas finalidades, a primeira é conseguir ver todos
os personagens da Marvel por ordem alfabética, cada página pode renderizar até 100 personagens, cada personagem
possui um card com sua possível ilustração, seu nome e possivelmente sua descrição. Futuramente para o projeto pretendo
adicionar o limite de personagens por página e também fazer com que cada card possua um modal com todas as informações do personagem.<br>
A outra funcionalidade é na verdade uma brincadeira onde o usuário inputa seu nome e é devolvido para ele
um personagem correspondente e também os quadrinhos que esse personagem participou. O funcionamento é bem básico
no backend pega aleatoriamente uma letra do nome e pesquisa todos os personagens que inicia o nome com essa letra,
depois pega aleatoriamente também um dos personagens gerados e devolve ao usuário.

## Considerações Finais

Apesar do tempo curto para o projeto (4 dias) eu achei o desafio muito interessante, me levou ao máximo que eu poderia dar
para entrega-lo minimamente funcional e com a ideia inicial de gerar um personagem exclusivo para cada usuário, não consegui implementar
tudo que gostaria e algumas coisas  também não sairam como o esperado mas no final pude adquirir ainda mais experiência com as
ferramentas utilizadas.
