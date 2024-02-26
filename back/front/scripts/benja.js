
const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

 
client.on('message', async (msg) => {
    console.log(`${msg.author}: ${msg.body}`);




    if(msg.body === "!todos") {
        const chat = await msg.getChat();
        
        let text = "";
        let mentions = [];

        for(let participant of chat.participants) {
            mentions.push(`${participant.id.user}@c.us`);
            text += `@${participant.id.user} `;
        }

        await chat.sendMessage(text, { mentions });
    }

    else if(msg.body === "!menu"){
        let number = "51917813401@c.us";
        client.sendMessage(number, "wasaaaaa");
    }
});
 
function enviarMensaje() {
    let number = "51917813401@c.us";
    let msg = "wasaaaaa";
    client.sendMessage(number, msg);
}

client.initialize();