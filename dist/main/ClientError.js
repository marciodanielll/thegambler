"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientError extends Error {
    badRequest(message) {
        return {
            statusCode: 400,
            message: message || 'Bad Request',
            type: 'Bad Request',
            stack: this.stack,
        };
    }
    unauthorized(message) {
        return {
            statusCode: 401,
            message: message || 'Unauthorized',
            type: 'Unauthorized',
            stack: this.stack,
        };
    }
    paymentRequired(message) {
        return {
            statusCode: 402,
            message: message || 'Payment Required',
            type: 'Payment Required',
            stack: this.stack,
        };
    }
    forbidden(message) {
        return {
            statusCode: 403,
            message: message || 'Forbidden',
            type: 'Forbidden',
            stack: this.stack,
        };
    }
    notFound(message) {
        return {
            statusCode: 404,
            message: message || 'Not Found',
            type: 'Not Found',
            stack: this.stack,
        };
    }
    methodNotAllowed(message) {
        return {
            statusCode: 405,
            message: message || 'Method Not Allowed',
            type: 'Method Not Allowed',
            stack: this.stack,
        };
    }
    notAcceptable(message) {
        return {
            statusCode: 406,
            message: message || 'Not Acceptable',
            type: 'Not Acceptable',
            stack: this.stack,
        };
    }
    proxyAuthRequired(message) {
        return {
            statusCode: 407,
            message: message || 'Proxy Authentication Required',
            type: 'Proxy Authentication Required',
            stack: this.stack,
        };
    }
    requestTimeout(message) {
        return {
            statusCode: 408,
            message: message || 'Request Timeout',
            type: 'Request Timeout',
            stack: this.stack,
        };
    }
    conflict(message) {
        return {
            statusCode: 409,
            message: message || 'Conflict',
            type: 'Conflict',
            stack: this.stack,
        };
    }
    gone(message) {
        return {
            statusCode: 410,
            message: message || 'Gone',
            type: 'Gone',
            stack: this.stack,
        };
    }
    lengthRequired(message) {
        return {
            statusCode: 411,
            message: message || 'Length Required',
            type: 'Length Required',
            stack: this.stack,
        };
    }
    preconditionFailed(message) {
        return {
            statusCode: 412,
            message: message || 'Precondition Failed',
            type: 'Precondition Failed',
            stack: this.stack,
        };
    }
    payloadTooLarge(message) {
        return {
            statusCode: 413,
            message: message || 'Payload Too Large',
            type: 'Payload Too Large',
            stack: this.stack,
        };
    }
    uriTooLong(message) {
        return {
            statusCode: 414,
            message: message || 'URI Too Long',
            type: 'URI Too Long',
            stack: this.stack,
        };
    }
    unsupportedMediaType(message) {
        return {
            statusCode: 415,
            message: message || 'Unsupported Media Type',
            type: 'Unsupported Media Type',
            stack: this.stack,
        };
    }
    rangeNotSatisfiable(message) {
        return {
            statusCode: 416,
            message: message || 'Range Not Satisfiable',
            type: 'Range Not Satisfiable',
            stack: this.stack,
        };
    }
    expectationFailed(message) {
        return {
            statusCode: 417,
            message: message || 'Expectation Failed',
            type: 'Expectation Failed',
            stack: this.stack,
        };
    }
    iAmATeapot(message) {
        return {
            statusCode: 418,
            message: message || 'I\'m a teapot',
            type: 'I\'m a teapot',
            stack: this.stack,
        };
    }
    misdirectedRequest(message) {
        return {
            statusCode: 421,
            message: message || 'Misdirected Request',
            type: 'Misdirected Request',
            stack: this.stack,
        };
    }
    unprocessableEntity(message) {
        return {
            statusCode: 422,
            message: message || 'Unprocessable Entity',
            type: 'Unprocessable Entity',
            stack: this.stack,
        };
    }
    locked(message) {
        return {
            statusCode: 423,
            message: message || 'Locked',
            type: 'Locked',
            stack: this.stack,
        };
    }
    failedDependency(message) {
        return {
            statusCode: 424,
            message: message || 'Failed Dependency',
            type: 'Failed Dependency',
            stack: this.stack,
        };
    }
    tooEarly(message) {
        return {
            statusCode: 425,
            message: message || 'Too Early',
            type: 'Too Early',
            stack: this.stack,
        };
    }
    upgradeRequired(message) {
        return {
            statusCode: 426,
            message: message || 'Upgrade Required',
            type: 'Upgrade Required',
            stack: this.stack,
        };
    }
    preconditionRequired(message) {
        return {
            statusCode: 428,
            message: message || 'Precondition Required',
            type: 'Precondition Required',
            stack: this.stack,
        };
    }
    tooManyRequests(message) {
        return {
            statusCode: 429,
            message: message || 'Too Many Requests',
            type: 'Too Many Requests',
            stack: this.stack,
        };
    }
    requestHeaderFieldsTooLarge(message) {
        return {
            statusCode: 431,
            message: message || 'Request Header Fields Too Large',
            type: 'Request Header Fields Too Large',
            stack: this.stack,
        };
    }
    unavailableForLegalReasons(message) {
        return {
            statusCode: 451,
            message: message || 'Unavailable For Legal Reasons',
            type: 'Unavailable For Legal Reasons',
            stack: this.stack,
        };
    }
}
module.exports = ClientError;
