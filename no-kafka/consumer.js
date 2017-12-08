const { SimpleConsumer } = require('no-kafka');
const consumer = new SimpleConsumer();

const dataHandler = (messageSet, topic, partition) => {
  messageSet.forEach(message => console.log(topic, partition, message.offset, message.message.value.toString('utf8')));
};

return consumer.init().then(() =>
  consumer.subscribe('first_topic', dataHandler)
);
