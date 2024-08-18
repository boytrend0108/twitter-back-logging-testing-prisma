"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
require("dotenv/config");
const twit_controller_1 = require("./twit/twit.controller");
const client_1 = require("@prisma/client");
const log_1 = require("./utils/log");
exports.prisma = new client_1.PrismaClient();
const PORT = process.env.PORT || 4200;
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
async function main() {
    app.use('/api/twits', twit_controller_1.twitRouter);
    app.all('*', (req, res) => {
        log_1.logger.error('Not Found!!');
        res.status(404).send('Not Found!!');
    });
    app.listen(PORT, () => {
        log_1.logger.info(`Server run on port ${PORT}`);
    });
}
main()
    .then(async () => {
    await exports.prisma.$connect();
})
    .catch(async (e) => {
    console.error(e);
    await exports.prisma.$disconnect();
    process.exit(1);
});
