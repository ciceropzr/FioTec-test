# FioTec Project

## Descrição

FioTec é um projeto que exibe e gerencia uma variedade de projetos inovadores, categorizados por áreas como Pesquisa, Ensino, Extensão e mais. Ele utiliza React e Bootstrap para a interface do usuário e Json-Server para fornecer uma API de backend simples. O objetivo do projeto é facilitar a navegação e a visualização dos projetos em destaque, além de permitir o gerenciamento de favoritos.

## Instalação

Para instalar e configurar o ambiente de desenvolvimento, siga os passos abaixo:

1. Clone o repositório:  
   ```bash
   git clone <URL do repositório>
   cd fiotec
   ```
   
2. Instale as dependências:  
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:  
   ```bash
   npm run dev
   ```

4. Inicie o servidor JSON:  
   ```bash
   json-server --watch db.json --port 3000
   ```

## Uso

Esta seção contém alguns exemplos de como utilizar o projeto após a instalação.

### Executando a Aplicação

- Inicie o servidor de desenvolvimento local conforme descrito na seção de instalação.
- Acesse a aplicação no navegador pelo endereço `http://localhost:3000`.

### Recursos Disponíveis

Veja as principais páginas e componentes disponíveis na aplicação:

1. **Home:** Página inicial que exibe projetos em destaque.
2. **Projetos em Destaque:** Página listando todos os projetos em destaque com funcionalidades para ver detalhes e favoritar projetos.
3. **Meus Favoritos:** Página listando projetos que foram favoritados pelos usuários.

## Recursos

- Filtragem de projetos por categoria
- Sistema de favoritos utilizando Local Storage
- Navegação com React Router
- UI responsiva com Bootstrap

## Tecnologias

Este projeto utiliza as seguintes tecnologias e bibliotecas:

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Axios](https://axios-http.com/)
- [Json-Server](https://github.com/typicode/json-server)
- [Vite](https://vitejs.dev/)

## Contribuição

Para contribuir com este projeto, siga estas diretrizes:

- Crie um fork do repositório
- Crie uma branch para sua feature ou correção (`git checkout -b feature/nome-da-feature`)
- Commit suas mudanças (`git commit -m 'Adicionar feature X'`)
- Faça um push para a branch (`git push origin feature/nome-da-feature`)
- Abra um Pull Request

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Para mais informações ou suporte, entre em contato com:

- **Seu Nome**: [Seu Perfil GitHub](<URL do seu perfil no GitHub>)
- **Email**: seu.email@example.com
