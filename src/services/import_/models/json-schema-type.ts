// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const jsonSchemaType = z.enum(['json']);

export type JsonSchemaType = z.infer<typeof jsonSchemaType>;
