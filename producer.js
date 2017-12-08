'use strict';

const { Producer, KeyedMessage, Client } = require('kafka-node');

const client = new Client('127.0.0.1:2181');
const producer = new Producer(client, { requiredAcks: 1 });

const createAndPublishMessage = () => {
  const keyedMessage = new KeyedMessage('keyed', 'message');
  const message = 'message';
  producer.send([
    { topic:'first_topic', partition: 0, messages: [message, keyedMessage], attributes: 0 }
  ], (err, result) => {
    console.log(err || result);
    process.exit();
  });
};

producer.on('ready', createAndPublishMessage);

producer.on('error', console.error);
