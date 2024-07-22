// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const dataTeam: any = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    id: z.number().optional(),
  });
});

/**
 * The user's team information.
 * @typedef  {DataTeam} dataTeam - The user's team information. - The user's team information.
 * @property {string} - The team's name.
 * @property {number} - The team's ID.
 */
export type DataTeam = z.infer<typeof dataTeam>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dataTeamResponse: any = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      id: z.number().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      id: data['id'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dataTeamRequest: any = z.lazy(() => {
  return z.object({ name: z.string().nullish(), id: z.number().nullish() }).transform((data) => ({
    name: data['name'],
    id: data['id'],
  }));
});
