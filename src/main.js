const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');


const client = new Client({
    authStrategy: new LocalAuth({
        dataPath: 'sessoes'
    })
});

const chatId = '558481553418@c.us'; 

client.once('ready', async () => {
    console.log(' Client is ready!');

    try {
        const message = await client.sendMessage(chatId, '(Mensagem Automatica) testando o envio de mensagem via bot aqui');
        console.log(' Mensagem enviada com sucesso:', message.body);
    } catch (err) {
        console.error(' Erro ao enviar mensagem:', err);
    }
});

// Quando o cliente receber QR-Code
client.on('qr', (qr) => {
    console.log('📲 QR RECEIVED');
    qrcode.generate(qr, { small: true });
});

// Inicializa o cliente
client.initialize();
