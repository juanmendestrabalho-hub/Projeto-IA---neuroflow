import { prisma } from "./db";
import { decideAction } from "./ai";

export async function runEvent(event: string) {
  const flows = await prisma.flow.findMany();

  for (const flow of flows) {
    if (event.includes(flow.trigger)) {
      const decision = decideAction(event);

      await prisma.log.create({
        data: {
          message: `Flow "${flow.name}" executado → ${decision}`
        }
      });
    }
  }
}
