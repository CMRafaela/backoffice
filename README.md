# backoffice
Tela provisória de backoffice

Para iniciar o projeto é preciso startar com npm start ou yarn start.

Serviço simulado com o json-server.

Existe um arquivo chamado db.json, nele contem o json de simulação.

Pra startar o json server(simulador da api) é preciso rodar o comando json-server --watch db.json --port 8080, isso simulará o serviço.
(https://www.npmjs.com/package/json-server#filter)

OBS: Foi removido o conteúdo do link dentro de produtos para que não haja referência.

A page backoffice carrega o componente User.tsx que recebe as informações de usuário e o compoennte User.tsx recebe o 
componente Product.tsx que contém as informações do produto.

Dentro do componente Product.tsx foi criado um componente de skeletons para informar aos usuários de um processo que 
a aplicação realizou ou ainda está a ser executada. Eles aparecem temporariamente, na parte inferior da tela onde contém as informações do produto. 
