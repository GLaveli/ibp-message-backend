"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRepository = void 0;
var message_1 = require("../model/message");
var MessageRepository = /** @class */ (function () {
    function MessageRepository() {
        this.messages = [];
    }
    ;
    MessageRepository.prototype.create = function (_a) {
        var name = _a.name, message = _a.message, messageType = _a.messageType;
        var newMessage = new message_1.Message;
        Object.assign(newMessage, {
            name: name,
            message: message,
            messageType: messageType,
            created_at: new Date(),
        });
        this.messages.push(newMessage);
    };
    ;
    MessageRepository.prototype.list = function () {
        return this.messages;
    };
    ;
    return MessageRepository;
}());
exports.MessageRepository = MessageRepository;
;
