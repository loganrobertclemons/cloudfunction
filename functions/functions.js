const { Card } = require('dialogflow-fulfillment');

const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg';

function statusHealth(agent) {
    agent.add(`Here's the health summary!`);
    agent.add(new Card({
        title: `Health Summary`,
        imageUrl: url,
        text: `This is the overall health of the platform.`,
        buttonText: 'Additional Details',
        buttonUrl: 'https://docs.dialogflow.com/'
    })
    );
}

export default statusHealth;