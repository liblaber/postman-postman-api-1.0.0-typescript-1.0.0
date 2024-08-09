// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const scimUserResourceName2 = z.lazy(() => {
  return z.object({
    givenName: z.string().optional(),
    familyName: z.string().optional(),
  });
});

/**
 * Information about the Postman team member.
 * @typedef  {ScimUserResourceName2} scimUserResourceName2 - Information about the Postman team member. - Information about the Postman team member.
 * @property {string} - The team member's first name.
 * @property {string} - The team member's last name.
 */
export type ScimUserResourceName2 = z.infer<typeof scimUserResourceName2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const scimUserResourceName2Response = z.lazy(() => {
  return z
    .object({
      givenName: z.string().optional(),
      familyName: z.string().optional(),
    })
    .transform((data) => ({
      givenName: data['givenName'],
      familyName: data['familyName'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const scimUserResourceName2Request = z.lazy(() => {
  return z.object({ givenName: z.string().nullish(), familyName: z.string().nullish() }).transform((data) => ({
    givenName: data['givenName'],
    familyName: data['familyName'],
  }));
});
