'use strict';

const { checkInOut } = require('../../server/utils/checkInOut')

module.exports = function(Client) {
    Client.checkInOut = function(username, cb) {
        checkInOut(username)
            .then(response => cb(null, response))
            .catch(err => cb(err))
    }

    Client.remoteMethod('checkInOut' , {
        description: 'Checks a client in or out',
        accepts: {
            arg: 'username',
            type: 'string'
        },
        http: {
            path: '/checkInOut',
            verb: 'put'
        },
        returns: {
            arg: 'data',
            type: 'root',
            root: true
        }
    })
};
