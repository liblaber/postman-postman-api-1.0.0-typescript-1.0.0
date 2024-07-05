// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const activityFeedStatus = z.enum(['FALSE_POSITIVE', 'ACCEPTED_RISK', 'REVOKED', 'ACTIVE']);

export type ActivityFeedStatus = z.infer<typeof activityFeedStatus>;
