# Devaria

Aplicação com Backend desenvolvido em NodeJS e Frontend desenvolvido em ReactJS.

## Iniciando a aplicação

1. Na raiz do projeto utilize o comando `cd Backend` para ter acesso à pasta onde está o códgigo do backend.
1. Copie do arquivo `.env.example`, crie um arquivo com nome `.env` e cole todas as variáveis lá.
1. Utilize o comando `docker-compose up` para subir um container Docker com todas as ferramentas necessárias para rodar a aplicação já configuradas.
1. Ainda dentro da pasta Backend, rode o seguinte comando: `npm run migrate` ou `yarn migrate`.

Obs: Será criado um container próprio para a aplicação e ele utiliza a porta `5432` do computador. Caso queira mudar a porta padrão abra o arquivo `docker-composer.yml` e na instrução `database_devaria` troque o conteúdo da opção `ports` pela porta de sua preferência.

Feito isso o backend da aplicação está configurado.