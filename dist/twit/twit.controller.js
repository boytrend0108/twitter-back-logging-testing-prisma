"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitRouter = void 0;
const express_1 = require("express");
const twit_servise_1 = require("./twit.servise");
const twit_dto_1 = require("./twit.dto");
const router = (0, express_1.Router)();
const twitService = new twit_servise_1.TwitService();
router.post('/', async (req, res) => {
    const validation = twit_dto_1.ICreateTwit.safeParse(req.body);
    if (!validation.success) {
        return res.status(401).send({ error: validation.error });
    }
    const twit = await twitService.create(req.body);
    res.status(201).send(twit);
});
router.get('/', async (req, res) => {
    const twits = await twitService.getAll();
    res.send(twits);
});
exports.twitRouter = router;
