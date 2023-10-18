const accountSid = 'ACb1db216d0745b985252cad96efa929bb';
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


Bun.serve({
    port: 3000,
    hostname: 'localhost',
    fetch(req: Request) {
        client.messages
        .create({
            body: 'Hola Richiman!',
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+51961610362'
        })
        .then((message: any) => console.log(message.sid))
        .done();

        return new Response('Hello World BUN!')
    }
})