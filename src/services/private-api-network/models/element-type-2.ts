// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const elementType2 = z.enum(['api', 'workspace', 'collection']);

export type ElementType2 = z.infer<typeof elementType2>;
