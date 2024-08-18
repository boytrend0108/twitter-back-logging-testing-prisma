"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICreateTwit = void 0;
const zod_1 = require("zod");
exports.ICreateTwit = zod_1.z.object({
    text: zod_1.z.string().min(1, 'Text is required').max(280),
});
