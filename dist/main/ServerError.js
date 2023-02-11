"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerError extends Error {
    internalServerError(message) {
        return {
            statusCode: 500,
            message: message || 'Internal Server Error',
            type: 'Internal Server Error',
            stack: this.stack,
        };
    }
    notImplemented(message) {
        return {
            statusCode: 501,
            message: message || 'Not Implemented',
            type: 'Not Implemented',
            stack: this.stack,
        };
    }
    badGateway(message) {
        return {
            statusCode: 502,
            message: message || 'Bad Gateway',
            type: 'Bad Gateway',
            stack: this.stack,
        };
    }
    serviceUnavailable(message) {
        return {
            statusCode: 503,
            message: message || 'Service Unavailable',
            type: 'Service Unavailable',
            stack: this.stack,
        };
    }
    gatewayTimeout(message) {
        return {
            statusCode: 504,
            message: message || 'Gateway Timeout',
            type: 'Gateway Timeout',
            stack: this.stack,
        };
    }
    httpVersionNotSupported(message) {
        return {
            statusCode: 505,
            message: message || 'HTTP Version Not Supported',
            type: 'HTTP Version Not Supported',
            stack: this.stack,
        };
    }
    variantAlsoNegotiates(message) {
        return {
            statusCode: 506,
            message: message || 'Variant Also Negotiates',
            type: 'Variant Also Negotiates',
            stack: this.stack,
        };
    }
    insufficientStorage(message) {
        return {
            statusCode: 507,
            message: message || 'Insufficient Storage',
            type: 'Insufficient Storage',
            stack: this.stack,
        };
    }
    loopDetected(message) {
        return {
            statusCode: 508,
            message: message || 'Loop Detected',
            type: 'Loop Detected',
            stack: this.stack,
        };
    }
    notExtended(message) {
        return {
            statusCode: 510,
            message: message || 'Not Extended',
            type: 'Not Extended',
            stack: this.stack,
        };
    }
    networkAuthenticationRequired(message) {
        return {
            statusCode: 511,
            message: message || 'Network Authentication Required',
            type: 'Network Authentication Required',
            stack: this.stack,
        };
    }
}
module.exports = ServerError;
