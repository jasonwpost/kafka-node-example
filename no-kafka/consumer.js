const { SimpleConsumer } = require('no-kafka');
const consumer1 = new SimpleConsumer();
const consumer2 = new SimpleConsumer();

const dataHandler = (messageSet, topic, partition) => {
  messageSet.forEach(message => console.log(topic, partition, message.offset, message.message.value.toString('utf8')));
};

return Promise.all([consumer1.init(), consumer2.init()]).then(() => {
    consumer1.subscribe('first_topic', dataHandler);
    consumer2.subscribe('second_topic', dataHandler);

}
);
