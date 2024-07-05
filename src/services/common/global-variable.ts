// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { globalVariableType } from './global-variable-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const globalVariable = z.object({
  key: z.string().optional(),
  type_: globalVariableType.optional(),
  value: z.string().optional(),
  enabled: z.boolean().optional(),
});

/**
 * Information about the global variable.
 * @typedef  {GlobalVariable} globalVariable - Information about the global variable. - Information about the global variable.
 * @property {string} - The variable's name.
 * @property {GlobalVariableType} - The [type](https://learning.postman.com/docs/sending-requests/variables/#variable-types) of variable.
 * @property {string} - The variable's value.
 * @property {boolean} - If true, the variable is enabled.
 */
export type GlobalVariable = z.infer<typeof globalVariable>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const globalVariableResponse = z
  .object({
    key: z.string().optional(),
    type: globalVariableType.optional(),
    value: z.string().optional(),
    enabled: z.boolean().optional(),
  })
  .transform((data) => ({
    key: data['key'],
    type_: data['type'],
    value: data['value'],
    enabled: data['enabled'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const globalVariableRequest = z
  .object({
    key: z.string().nullish(),
    type_: globalVariableType.nullish(),
    value: z.string().nullish(),
    enabled: z.boolean().nullish(),
  })
  .transform((data) => ({
    key: data['key'],
    type: data['type_'],
    value: data['value'],
    enabled: data['enabled'],
  }));
