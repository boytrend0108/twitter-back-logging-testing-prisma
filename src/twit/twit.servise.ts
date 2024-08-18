import { PrismaClient, Twit } from "@prisma/client";
import { ICreateTwit } from "./twit.types";


export class TwitService {
  private prisma = new PrismaClient();

  create(twit: ICreateTwit): Promise<Twit> {
    return this.prisma.twit.create({
      data: twit
    })
  }

  getAll(): Promise<Twit[]> {
    return this.prisma.twit.findMany();
  }
}
