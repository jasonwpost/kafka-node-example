const { Producer } = require('no-kafka');
const producer = new Producer();

return producer.init().then(() =>
  producer.send({
    topic: 'first_topic',
    partition: 0,
    message: { value: 'hi there' }
  })
).then(console.log);
