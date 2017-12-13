const { Producer } = require('no-kafka');
const producer1 = new Producer();
const producer2 = new Producer();

return Promise.all([producer1.init(), producer2.init()]).then(() =>
  {
    producer1.send({
    topic: 'first_topic',
    partition: 0,
    message: { value: 'hi there' }
    });
    producer1.send({
      topic: 'second_topic',
      partition: 0,
      message: { value: 'hi second' }
    });
  }
);
