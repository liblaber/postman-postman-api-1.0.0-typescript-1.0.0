// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  deleteMonitorMonitor,
  deleteMonitorMonitorRequest,
  deleteMonitorMonitorResponse,
} from './delete-monitor-monitor';

/**
 * The shape of the model inside the application code - what the users use
 */
export const deleteMonitor = z.lazy(() => {
  return z.object({
    monitor: deleteMonitorMonitor.optional(),
  });
});

/**
 *
 * @typedef  {DeleteMonitor} deleteMonitor
 * @property {DeleteMonitorMonitor}
 */
export type DeleteMonitor = z.infer<typeof deleteMonitor>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const deleteMonitorResponse = z.lazy(() => {
  return z
    .object({
      monitor: deleteMonitorMonitorResponse.optional(),
    })
    .transform((data) => ({
      monitor: data['monitor'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const deleteMonitorRequest = z.lazy(() => {
  return z.object({ monitor: deleteMonitorMonitorRequest.nullish() }).transform((data) => ({
    monitor: data['monitor'],
  }));
});
