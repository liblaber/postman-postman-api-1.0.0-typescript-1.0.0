// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const workspaceVisiblities = z.enum(['team', 'public']);

export type WorkspaceVisiblities = z.infer<typeof workspaceVisiblities>;
