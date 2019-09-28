// middleware pattern (chain of responsability)

const ctx = {};

const step1 = (ctx, next) => {
  ctx.value_1 = 'mid1';
  next();
}

const step2 = (ctx, next) => {
  ctx.value_2 = 'mid2';
  next();
}

const step3 = ctx => {
  ctx.value_3 = 'mid3';
}

const execMiddlewares = (ctx, ...middlewares) => {
  const execStep = indice => middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execStep(indice + 1))
  execStep(0);
}

execMiddlewares(ctx, step3, step2, step3);
console.log(ctx);
