// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const requestStatus = z.enum(['approved', 'denied']);

export type RequestStatus = z.infer<typeof requestStatus>;
