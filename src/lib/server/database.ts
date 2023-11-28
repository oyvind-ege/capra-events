import type { Prisma } from '@prisma/client';

import prisma from './client';

export const getDeltakereForEvent = async (eventId: number) => {
	return await prisma.deltaker.findMany({
		where: {
			eventId
		},
		include: {
			allergier: true,
			org: true
		}
	});
};

export const getEventInformasjon = async (id: number) => {
	return await prisma.event.findUnique({
		where: {
			id
		}
	});
};

export const getAlleEventer = async () => {
	return await prisma.event.findMany();
};

export const addDeltakerToEvent = async (
	eventId: number,
	data: Prisma.DeltakerUncheckedCreateInput
) => {
	return await prisma.deltaker.create({
		data: {
			...data,
			eventId
		}
	});
};

export const createEvent = async (data: { tittel: string; beskrivelse: string; dato?: Date }) => {
	return await prisma.event.create({ data });
};

export const getAllergiListe = async () => {
	return await prisma.allergi.findMany();
};
