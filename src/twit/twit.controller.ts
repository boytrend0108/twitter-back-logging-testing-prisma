import { Router } from 'express';
import { TwitService } from './twit.servise';
import { ICreateTwit } from './twit.dto';

const router = Router();
const twitService = new TwitService();

router.post('/', async (req, res) => {
  const validation = ICreateTwit.safeParse(req.body);

  if (!validation.success) {
    return res.status(401).send({ error: validation.error })
  }

  const twit = await twitService.create(req.body);
  res.status(201).send(twit);
});

router.get('/', async (req, res) => {
  const twits = await twitService.getAll();

  res.send(twits);
})

export const twitRouter = router;
