'use strict';

const { Producer, KeyedMessage, Client } = require('kafka-node');

const client = new Client('127.0.0.1:2181');
const topic = 'first_topic';
const partition = 0;
const attributes = 0;
const producer = new Producer(client, { requiredAcks: 1 });

producer.on('ready', () => {
  const keyedMessage = new KeyedMessage('keyed', 'another message');
  const message = 'hello there';
  producer.send([
    { topic, partition, messages: [message, keyedMessage], attributes }
  ], (err, result) => {
    console.log(err || result);
    process.exit();
  });
});

producer.on('error', console.error);
