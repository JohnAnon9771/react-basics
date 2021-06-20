# React 18

Detalharei (com exemplos) todas as mudanças que ocorreram no React 18.

## New batch

### O que é batch?

Bom, batch é um otimização pensada pelo time do React onde todos os setState de um component são ativados ao mesmo tempo, ou seja, não importa quantos setState tenha num componente setando vários estados ao mesmo tempo o component irá renderizar apenas uma vez, onde daí vem o nome de "lotes". No React 17 esses sistema tinha um pequeno problema, pois essa otimização existia apenas em <code>Events</code> como por exemplo:

```js
function handleClick() {
  setCount((state) => state + 1);
  setCount((state) => state + 1);
}

return <button onClick={() => handleClick()}>Click</button>;
```

De acordo com o batch não importa quantos <code>setCount</code> existam no <code>handleClick</code> o component irá renderizar apenas uma vez, mas nesse caso...

```js
function handleClick() {
  setTimeout(() => {
    setCount((state) => state + 1);
    setCount((state) => state + 1);
  }, 0);
}

return <button onClick={() => handleClick()}>Click</button>;
```

Esse é apenas um exemplo de como "burlar" essa otimização pois o <code>setTimeout</code> faz com que o <code>setCount</code> não seja ativado pelo evento de click, mas sim pelo evento do timeout. Com isso, o component irá renderizar quantos setCount tiver dentro do timeout, sendo péssimo para a perfomance da aplicação.

### O que mudou no React 18?

É simples, o react apenas corrigiu isso e agora não importa onde o setCount esteja o batching sempre funcionará. Mas existem casos de usos que isso pode atrapalhar, pois algumas vezes queremos atrasar um setState por alguma razão como para funcionalidades de Searching e etc. Nesses casos o React 18 adicionou uma nova API, chamada "transition".
