// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
});

fastify.register(require('fastify-cors'), {
    // put your options here
    origin: "*",
    methods: ['GET', 'PUT', 'POST']
})

const data = require('./data/videos.json');


// Declare a route
fastify.get('/', (request, reply) => {
    reply.send({ hello: 'world' })
})

fastify.post('/login', (request, reply) => {
    const mockedUser = {
        id: '123',
        name: 'Wizeline',
        avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
    };

    const {username, password} = request.body
    console.log({username, password})

    if (username === mockedUser.name && password === "Rocks!") {
        console.log("success")
        reply.send({
            code: 200,
            message: "SUCCESS",
            userData: mockedUser
        })
    } else {
        console.log("error")
        reply.send({
            code: 401,
            message: "Invalid Username or Password"
        })
    }
})

fastify.get('/videos', (request, reply) => {

    reply.header("Access-Control-Allow-Origin", "*");
    reply.header("Access-Control-Allow-Methods", "POST");
    reply.header("Access-Control-Allow-Methods", "GET");
    reply.send(data);
})

fastify.get('/videos/search', (request, reply) => {

    reply.header("Access-Control-Allow-Origin", "*");
    reply.header("Access-Control-Allow-Methods", "POST");
    reply.header("Access-Control-Allow-Methods", "GET");
    reply.send(data);

})

fastify.get('/videos/videos', (request, reply) => {

    reply.header("Access-Control-Allow-Origin", "*");
    reply.header("Access-Control-Allow-Methods", "POST");
    reply.header("Access-Control-Allow-Methods", "GET");
    reply.send(data);

})

// Run the server!
fastify.listen(8080, (err, address) => {
    if (err) throw err
    // Server is now listening on ${address}
})