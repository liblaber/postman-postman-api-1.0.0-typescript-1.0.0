// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  updateMonitorMonitor2,
  updateMonitorMonitor2Request,
  updateMonitorMonitor2Response,
} from './update-monitor-monitor-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateMonitorOkResponse = z.lazy(() => {
  return z.object({
    monitor: updateMonitorMonitor2.optional(),
  });
});

/**
 *
 * @typedef  {UpdateMonitorOkResponse} updateMonitorOkResponse
 * @property {UpdateMonitorMonitor2}
 */
export type UpdateMonitorOkResponse = z.infer<typeof updateMonitorOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateMonitorOkResponseResponse = z.lazy(() => {
  return z
    .object({
      monitor: updateMonitorMonitor2Response.optional(),
    })
    .transform((data) => ({
      monitor: data['monitor'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updateMonitorOkResponseRequest = z.lazy(() => {
  return z.object({ monitor: updateMonitorMonitor2Request.nullish() }).transform((data) => ({
    monitor: data['monitor'],
  }));
});
