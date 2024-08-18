import express from 'express';
import helmet from "helmet";
import 'dotenv/config';
import { twitRouter } from './twit/twit.controller';
import { PrismaClient } from '@prisma/client'
import { logger } from './utils/log';

export const prisma = new PrismaClient()

const PORT = process.env.PORT || 4200;

const app = express();
app.use(helmet());
app.use(express.json());

async function main() {
  app.use('/api/twits', twitRouter);

  app.all('*', (req, res) => {
    logger.error('Not Found!!');

    res.status(404).send('Not Found!!');
  });

  app.listen(PORT, () => {
    logger.info(`Server run on port ${PORT}`)
  });
}

main()
  .then(async () => {
    await prisma.$connect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
