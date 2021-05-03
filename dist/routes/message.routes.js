"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRoutes = void 0;
var express_1 = require("express");
var MessageRepositorie_1 = require("../repositories/MessageRepositorie");
var CreateMessageServices_1 = require("../services/CreateMessageServices");
var messageRoutes = express_1.Router();
exports.messageRoutes = messageRoutes;
var messageRepository = new MessageRepositorie_1.MessageRepository();
messageRoutes.post('/', function (req, res) {
    var _a = req.body, name = _a.name, message = _a.message, messageType = _a.messageType;
    var createMessageServices = new CreateMessageServices_1.CreateMessageServices(messageRepository);
    createMessageServices.execute({ name: name, message: message, messageType: messageType });
    return res.status(201).json({ message: 'Mensagem enviada!' });
});
messageRoutes.get('/', function (req, res) {
    var allMessages = messageRepository.list();
    return res.status(200).json(allMessages);
});
