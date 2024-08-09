// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { actor, actorRequest, actorResponse } from './actor';
import { dataUser, dataUserRequest, dataUserResponse } from './data-user';
import { dataTeam, dataTeamRequest, dataTeamResponse } from './data-team';

/**
 * The shape of the model inside the application code - what the users use
 */
export const trailsData = z.lazy(() => {
  return z.object({
    actor: actor.optional(),
    user: dataUser.optional(),
    team: dataTeam.optional(),
    variables: z.any().optional(),
  });
});

/**
 *
 * @typedef  {TrailsData} trailsData
 * @property {Actor} - Information about the user who preformed the audit event.
 * @property {DataUser} - Information about the user.
 * @property {DataTeam} - The user's team information.
 * @property {any} - Additional information about the performed action.
 */
export type TrailsData = z.infer<typeof trailsData>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const trailsDataResponse = z.lazy(() => {
  return z
    .object({
      actor: actorResponse.optional(),
      user: dataUserResponse.optional(),
      team: dataTeamResponse.optional(),
      variables: z.any().optional(),
    })
    .transform((data) => ({
      actor: data['actor'],
      user: data['user'],
      team: data['team'],
      variables: data['variables'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const trailsDataRequest = z.lazy(() => {
  return z
    .object({
      actor: actorRequest.nullish(),
      user: dataUserRequest.nullish(),
      team: dataTeamRequest.nullish(),
      variables: z.any().nullish(),
    })
    .transform((data) => ({
      actor: data['actor'],
      user: data['user'],
      team: data['team'],
      variables: data['variables'],
    }));
});
