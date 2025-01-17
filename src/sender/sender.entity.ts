import { z } from 'zod';

export type MessageFlags = number[];

export const SendTypeCodes = {
  SILENT: [4096] as MessageFlags,
  NORMAL: [] as MessageFlags,
};

export enum SendType {
  SILENT = 'SILENT',
  NORMAL = 'NORMAL',
}

export const messageSchema = z.object({
  message: z.string(),
  sendType: z.string(),
  channelId: z.string(),
});

export type Message = z.infer<typeof messageSchema>;

export const getSendType = (sendType: string): MessageFlags => {
  if (sendType === 'SILENT') return SendTypeCodes.SILENT;

  return SendTypeCodes.NORMAL;
};
