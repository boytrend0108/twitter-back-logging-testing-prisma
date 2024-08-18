import { TwitService } from "./twit.servise";

describe('twit.service', () => {
  const twitService = new TwitService();

  it('shoult create a twit', async () => {
    const twit = await twitService.create({ text: 'Hello world!' });

    expect(twit).toHaveProperty('id');
    expect(twit.text).toBe('Hello world!');
  })
});
