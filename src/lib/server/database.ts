import prisma from "./client";

export const getDeltakereForEvent = async (eventId: number) => {
  return await prisma.deltaker.findMany({
    where: {
      eventId
    }
  });
}

export const createEvent = async (data: { tittel: string, beskrivelse: string, dato?: Date }) => {
  return await prisma.event.create({ data })
}