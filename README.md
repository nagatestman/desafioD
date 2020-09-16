********************************************
Instruções para baixar e executar o Cypress:
********************************************

Para rodar os testes do Cypress, é necessário baixar o projeto:

Utilize o comando "git clone https://github.com/nagatestman/desafioD.git" para baixar o projeto na sua máquina local.

Ainda no terminal execute o seguinte comando: 

./node_modules/.bin/cypress open

Este comando abrirá o framework Cypress.


********************************************
Executar os testes automatizados do desafio:
********************************************

Após abrir o framework do Cypress, clique no arquivo "desafio.spec.js".

O browser (Chrome v.85) será aberto e os testes começarão a ser executados!
Obs: No framework do Cypress é possivel selecionar outros dois tipos de browser: Firefox e Electron.



**********
Observação
**********

O site das lojas Americanas (www.americanas.com.br) ao submeter o cadastro de um novo usuário, o reCaptcha do google é apresentado e desta forma, não é possivel executar os testes com sucesso, pois o site é de produção e não temos o controle do mesmo.
O conceito do reCaptcha é para evitar este tipo de serviço feito por robôs/automação. Segurança!

Na fase de desenvolvimeto, há duas possibilitades para contornar este "problema".

1) Na fase de desenvolvimento/homologação, combinar com o time de Frontend a remover o reCaptcha ou passar um padrão do reCaptcha para que seja utilizado como input nos testes automatizados (se for possivel).

2) Usar treinamento de Redes Neurais. Isso desprenderia mais tempo e conhecimento do time de testes junto ao time de desenvolvimento para criar um algoritimo inteligente para dar um bypass no reCaptcha.

No desafio, há 4 casos de testes automatizados, mas apenas o segundo teste que é executado com sucesso, pois não faz a ação de clicar no botão de "submit" do formulário que chama o reCaptcha.
Desta forma, o último teste não consegui validar os asserts finais nas linhas 52 a 60. Fiz o script de forma que acho que é o correto!

Atenciosamente,
Renato



