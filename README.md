
# ✏️ Teste Front End 

Olá! Se você está vendo este repositório, provavelmente está participando do processo seletivo da Blocks. 🧱

Este teste é bastante simples, não é tão desafiador, mas iremos analisar principalmente os detalhes e sua habilidade em replicar um design fornecido pela equipe de Design! Vamos lá!? 💪

Um termo muito utilizado em nosso ambiente de trabalho é "Famílias". Não, não estamos falando da sua família ou da nossa! 🤗

No mundo da arquitetura ou, mais especificamente, no Revit, o termo "Famílias" é usado para se referir a um modelo 3D. Ou seja, uma Cadeira é uma Família, uma Mesa é uma Família! Entendido? 🪑

Preparamos uma API bem simples e bastante realista em relação ao que trabalhamos atualmente. Caso você não consiga usar a API, poderá baixar este repositório e executar o servidor localmente em sua própria máquina usando o comando:

`yarn node main.js`

O servidor será executado na porta 8080 por padrão. 🖥️

A rota é a seguinte:

*[GET] http://localhost:8080/families*

Parâmetros:

- skip (utilizado para paginação, define a quantidade de famílias a serem ignoradas em relação ao "take")

- take (utilizado para definir quantas famílias são obtidas da API)
##
# 📎 Exemplos

Quero obter 10 famílias da API:

http://localhost:8080/families?skip=0&take=10 *(Skip 0 porque não vou pular ninguém)*

Próxima página:

http://localhost:8080/families?skip=10&take=10 *(Agora, vou alterar o skip para 10, pulando de 10 em 10.)*

Nossa API pública para o teste está disponível aqui:

🌐 https://test-candidaturas-front-end.onrender.com/
#

Exemplo utilzando a API pública:

🌐 https://test-candidaturas-front-end.onrender.com/families?skip=0&take=10

##
# 📜 Como será o teste?

Queremos que você crie um catálogo de famílias (blocos 3D), onde a paginação seja do tipo "scroll loading" (como no Instagram, Facebook, etc.). O design será fornecido por nós, e aqui está o link para o Figma: 🎨


https://www.figma.com/file/xUT0pnECiRfxxaHGj1yaqh/%5BBLOCKS%5D-%5BTESTE-FRONT-END%5D?type=design&node-id=0%3A1&t=SAmRYHe8FjyzokNd-1


Por favor, não faça alterações no design, pois isso será avaliado. 😉
