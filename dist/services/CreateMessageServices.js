"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMessageServices = void 0;
;
var CreateMessageServices = /** @class */ (function () {
    function CreateMessageServices(messageRepository) {
        this.messageRepository = messageRepository;
    }
    CreateMessageServices.prototype.execute = function (_a) {
        var name = _a.name, message = _a.message, messageType = _a.messageType;
        this.messageRepository.create({ name: name, message: message, messageType: messageType });
    };
    ;
    return CreateMessageServices;
}());
exports.CreateMessageServices = CreateMessageServices;
;
