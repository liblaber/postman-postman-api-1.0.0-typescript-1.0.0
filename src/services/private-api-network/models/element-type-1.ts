// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const elementType1 = z.enum(['api', 'workspace', 'collection']);

export type ElementType1 = z.infer<typeof elementType1>;
