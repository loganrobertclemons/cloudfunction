'use strict';

const functions = require('firebase-functions');
const { WebhookClient } = require('dialogflow-fulfillment');

const utilFunctions = require('./functions/functions')

process.env.DEBUG = 'dialogflow:debug';

exports.cloudfunction = functions.https.onRequest((request, response) => {
    const agent = new WebhookClient({ request, response });    
    
    let intentMap = new Map();
    intentMap.set('status.health', utilFunctions.statusHealth(agent));
    agent.handleRequest(intentMap);

});