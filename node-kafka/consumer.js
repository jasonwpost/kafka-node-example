'use strict';

const { ConsumerGroup } = require('kafka-node');

const topics = ['first_topic'];
const consumerOptions = {
  autoCommit: true,
  host: '127.0.0.1:2181',
  groupId: 'ExampleTestGroup',
  sessionTimeout: 15000,
  protocol: ['roundrobin'],
};

const consumerGroup = new ConsumerGroup(Object.assign({id: 'consumer1'}, consumerOptions), topics);
consumerGroup.on('error', console.error);
consumerGroup.on('message', console.log);
