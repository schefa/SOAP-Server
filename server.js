"use strict";

var soap = require('soap');
var http = require('http');
var mysql = require('mysql');
const DBConnect = require('./dbconnect.js');

var service = { 
    ws: { 
        gateway: {
            getSmgw : function (args, getLastRecord)
            { 
                DBConnect.getLastRecord(args); 
            },
            addSmgw : function (args, addRecord)
            { 
                DBConnect.addRecord(args); 
            },
            deleteSmgw : function (args, deleteRecord)
            { 
                DBConnect.deleteRecord(args); 
            } 
        }
    }
};

var xml = require('fs').readFileSync('WebServiceGateway.wsdl', 'utf8');

var server = http.createServer(function(request,response) {
    response.end("404: Not Found: "+request.url);
});

server.listen(8001);
soap.listen(server, '/WebServiceGateway', service, xml);
