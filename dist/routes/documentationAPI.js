"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentationAPI = void 0;
var express_1 = require("express");
var documentationAPI = express_1.Router();
exports.documentationAPI = documentationAPI;
documentationAPI.get('/', function (req, res) {
    return res.status(200).json({ messa: 'Api esta funcionando cheers!!!' });
});
