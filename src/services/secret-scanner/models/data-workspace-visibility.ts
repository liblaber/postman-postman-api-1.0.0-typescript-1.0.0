// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const dataWorkspaceVisibility = z.enum(['personal', 'private', 'team', 'public']);

export type DataWorkspaceVisibility = z.infer<typeof dataWorkspaceVisibility>;
