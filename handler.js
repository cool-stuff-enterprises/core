'use strict';
import createRepo from './functios/createrepository';

module.exports.createRepo = async (event, context) => {
  return { message: 'Go Serverless v1.0! Your function executed successfully!', event };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
