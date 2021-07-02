# Devaria

Aplicação com Backend desenvolvido em NodeJS e Frontend desenvolvido em ReactJS.

## Iniciando a aplicação

1. Na raiz da aplicação utilize o comando `cd Backend` para ter acesso à pasta onde está o códgigo do backend.
1. Utilize o comando `npm i` ou `yarn` para instalar todos as ferramentas necessárias para rodar a aplicação.
1. Copie do arquivo `.env.example`, todas as variáveis para um arquivo com nome `.env`.
1. Em seguida utilize o comando `docker-compose up`, onde será criado um servidor local.

Obs: Será criado um container próprio para a aplicação e ele utiliza a porta `5432` do computador. Caso queira mudar a porta padrão abra o arquivo `docker-composer.yml` e na instrução `database_devaria` troque o conteúdo da opção `ports` pela porta de sua preferência.

### Exemplo:

Antes:
```yml
  database_devaria:
    ports:
      - 5432:5432
```
Depois:
```yml
  database_devaria:
    ports:
      - 5432:5431
```

