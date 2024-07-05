// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const salesChannel = z.enum(['SELF_SERVE', 'SALES_SERVE']);

export type SalesChannel = z.infer<typeof salesChannel>;
