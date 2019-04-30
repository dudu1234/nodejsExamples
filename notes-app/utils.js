const chalk = require('chalk')
const log = console.log;
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
const success = chalk.green;

const logError = function (msg) {
    if (Array.isArray(msg) || typeof msg === 'object') {
        const str = JSON.stringify(msg)
        log(error(str))
    } else {
        log(error(msg))
    }
}

const logSuccess = function (msg) {
    if (Array.isArray(msg) || typeof msg === 'object') {
        const str = JSON.stringify(msg)
        log(success(str))
    } else {
        log(success(msg))
    }
}

const logWarning = function (msg) {
    if (Array.isArray(msg) || typeof msg === 'object') {
        const str = JSON.stringify(msg)
        log(warning(str))
    } else {
        log(warning(msg))
    }
}

module.exports = {
    chalk, logError, logWarning, logSuccess
}