"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var documentationAPI_1 = require("./routes/documentationAPI");
var message_routes_1 = require("./routes/message.routes");
var PORT = process.env.PORT || 3333;
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use('/message', message_routes_1.messageRoutes);
app.use('/', documentationAPI_1.documentationAPI);
app.listen(PORT, function () {
    console.info("Server started at port: " + PORT);
});
