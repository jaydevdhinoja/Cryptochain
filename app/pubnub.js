//just another alternative of REDIS - not used in the proejct just implemented for learning purpose

const PubNub = require('pubnub');

const credentials = {
    publishKey: 'pub-c-b1773ea6-645d-49b4-af4c-016e80a333b9',
    subscribeKey: 'pub-c-b1773ea6-645d-49b4-af4c-016e80a333b9',
    secretKey: 'sec-c-MTU4YjExYTEtODQ1OS00MTlkLWIyMTItNzQ4OGZhY2E0ZTUy'
}
const CHANNELS = {
    TEST: 'TEST'
};

class PubNubSub {
    constructor() {
        this.pubnub = new PubNub(credentials);

        this.pubnub.subscribe({channels: Object.values(CHANNELS)});

        this.pubnub.addListener(this.listener)
    }

    listener() {
        return {
            message: messageObject => {
                const { channel, message} = messageObject;

                console.log(`Message received. Channel: ${channel}. Message: ${message}`);
            }
        }
    }

    publish({channel, message}) {
        this.pubnub.publish({channel, message});
    }
}

module.exports = PubNubSub;