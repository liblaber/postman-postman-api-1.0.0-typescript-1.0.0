// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const delayType = z.enum(['fixed']);

export type DelayType = z.infer<typeof delayType>;
