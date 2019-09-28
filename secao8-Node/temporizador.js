const schedule = require('node-schedule');


// Tarefa 1
// Executa uma tarefa a cada 5 segundos - */5
// Em qualquer minuto - *
// Das 20 horas - 20
// De qualquer dia do mês - *
// De qualquer mês - *
// No domingo - 0
const tarefa1 = schedule.scheduleJob('*/5 * 20 * * 0', function () {
  console.log('Executando tarefa 1', new Date().getSeconds());
});

setTimeout(function () {
  tarefa1.cancel();
  console.log('Cancelando tarefa 1');
}, 20000);

// Tarefa 2
// Regra que será executada de segunda á sexta, ás 20 horas, em qualquer minuto,
// sempre aos 30 segundos. Ex.: 20:00:30, 20:01:30, 20:02:30, ..., 20:59:30
const regra2 = new schedule.RecurrenceRule();
regra2.dayOfWeek = [new schedule.Range(0, 6)];
regra2.hour = 20;
regra2.second = 30;

const tarefa2 = schedule.scheduleJob(regra2, function () {
  console.log('Executando tarefa 2!', new Date().getSeconds());
});
setTimeout(function () {
  tarefa1.cancel();
  console.log('Cancelando tarefa 1');
}, 600000); // 10 minutos
