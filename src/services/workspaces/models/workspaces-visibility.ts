// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const workspacesVisibility = z.enum(['personal', 'team', 'private', 'public', 'partner']);

export type WorkspacesVisibility = z.infer<typeof workspacesVisibility>;
