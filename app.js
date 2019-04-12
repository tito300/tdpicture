const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const fs = require('fs');
const winston = require('winston');
const cors = require('cors')
const DailyRotateFile =  require('winston-daily-rotate-file');
const contactusRouter = require('./routes/contactus');

let logger, Stream;
setUpLogger(); 

const app = express();
const port = process.env.PORT || 3000;
let pathToLogs = `./logs/http__${new Date('April 9, 2019').toISOString().split('T')[0]}.txt`

app.use(helmet());
app.use(cors({origin: '*', optionsSuccessStatus: 200}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('common', {stream : new Stream }));

// app.use(express.static('client/public'))
app.use('/contactus', contactusRouter);

app.use('*', (err, req, res, next) => {
    res.status(404).end('something went wrong');
})

app.listen(port, () => {
    console.log('app is listening on port: ' + port);
})


function setUpLogger() {
    logger =  winston.createLogger({
        level: 'error',
        transports: [new DailyRotateFile({
            level: 'info',
            filename: 'http__%DATE%.log',
            dirname: './logs/',
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d'
        })]
    })

    Stream = class Stream {
        write(data) {
            logger.info(data);
        }
    }
}