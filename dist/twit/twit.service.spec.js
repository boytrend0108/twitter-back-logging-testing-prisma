"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const twit_servise_1 = require("./twit.servise");
describe('twit.service', () => {
    const twitService = new twit_servise_1.TwitService();
    it('shoult create a twit', async () => {
        const twit = await twitService.create({ text: 'Hello world!' });
        expect(twit).toHaveProperty('id');
        expect(twit.text).toBe('Hello world!');
    });
});
