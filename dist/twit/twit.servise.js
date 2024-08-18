"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitService = void 0;
const client_1 = require("@prisma/client");
class TwitService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    create(twit) {
        return this.prisma.twit.create({
            data: twit
        });
    }
    getAll() {
        return this.prisma.twit.findMany();
    }
}
exports.TwitService = TwitService;
