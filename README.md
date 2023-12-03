# Trabalho Prático 2 - Opções de Desenvolvimento

## Opção 1: Sistema de Monitoramento Meteorológico

O segundo trabalho é uma extensão do primeiro. Para cada acesso do sistema (utilizando `useEffect` na inicialização do sistema conforme os exemplos apresentados em aula), registre a data e os dados meteorológicos, incluindo cidade, temperatura, sensação térmica, umidade, e condições climáticas (chuva, sol, etc.). Utilize um gráfico para apresentar os dados em horas/dias (exemplo: [ChartJS](https://www.chartjs.org/docs/latest/samples/line/interpolation.html)). Utilize um banco de dados MySQL e crie um backend em Node.js, Express.js, com uso de routers/controllers.

## Opção 2: Sistema de Armazenamento de Cartuchos/CD Vintage

Desenvolva um sistema interno simples para uma loja, utilizando a stack MERN (MySQL, Express, React.js e Node.js), para armazenamento de cartuchos/CD vintage de video games das décadas de 80/90/2000.

O sistema de login seguirá o padrão dos exemplos mencionados em aula (email, nome e senha). Cada usuário terá uma tabela de cartuchos associada, contendo informações como id, nome do cartucho/CD, sistema, tela e ano (Atari, Nintendo, Mega-drive, Odyssey, Xbox, ps1, ps2, ps3, MSX).

Após o login, na tela HOME, haverá um menu para cadastro de novos jogos. Um formulário permitirá a inserção de dados do cartucho para o usuário atual. Além disso, o menu terá uma opção para exibir todos os cartuchos do usuário, implementando um CRUD para usuários e cartuchos.

Finalmente, será incluído um menu de pesquisa acessível apenas pelo administrador. As formas de criar e gerenciar um administrador incluem adicionar um campo adicional na tabela de administradores (verdadeiro ou falso) ou pré-inserir um usuário administrador no sistema. O administrador terá a capacidade de apagar usuários, listar usuários e seus cartuchos.

Este projeto pode ser desenvolvido de forma individual ou em duplas.
