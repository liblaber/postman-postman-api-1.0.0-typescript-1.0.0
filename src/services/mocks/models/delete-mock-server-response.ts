// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  deleteMockServerResponseHeaders,
  deleteMockServerResponseHeadersRequest,
  deleteMockServerResponseHeadersResponse,
} from './delete-mock-server-response-headers';
import { deleteMockServerResponseLanguage } from './delete-mock-server-response-language';

/**
 * The shape of the model inside the application code - what the users use
 */
export const deleteMockServerResponse = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  statusCode: z.number().optional(),
  headers: z.array(deleteMockServerResponseHeaders).optional(),
  language: deleteMockServerResponseLanguage.optional(),
  body: z.string().optional(),
  createdBy: z.string().optional(),
  updatedBy: z.string().optional(),
  createdAt: z.string().optional(),
});

/**
 * Information about the deleted server response.
 * @typedef  {DeleteMockServerResponse} deleteMockServerResponse - Information about the deleted server response. - Information about the deleted server response.
 * @property {string} - The server response's ID.
 * @property {string} - The server response's name.
 * @property {number} - The server response's 5xx HTTP response code.
 * @property {DeleteMockServerResponseHeaders[]} - The server response's request headers, such as Content-Type, Accept, encoding, and other information.
 * @property {DeleteMockServerResponseLanguage} - The server response's body language type.
 * @property {string} - The server response's body that returns when calling the mock server.
 * @property {string} - The user ID of the user who created the server response.
 * @property {string} - The user ID of the user who last updated the server response.
 * @property {string} - The date and time at which the server response was created.
 */
export type DeleteMockServerResponse = z.infer<typeof deleteMockServerResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const deleteMockServerResponseResponse = z
  .object({
    id: z.string().optional(),
    name: z.string().optional(),
    statusCode: z.number().optional(),
    headers: z.array(deleteMockServerResponseHeadersResponse).optional(),
    language: deleteMockServerResponseLanguage.optional(),
    body: z.string().optional(),
    createdBy: z.string().optional(),
    updatedBy: z.string().optional(),
    createdAt: z.string().optional(),
  })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
    statusCode: data['statusCode'],
    headers: data['headers'],
    language: data['language'],
    body: data['body'],
    createdBy: data['createdBy'],
    updatedBy: data['updatedBy'],
    createdAt: data['createdAt'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const deleteMockServerResponseRequest = z
  .object({
    id: z.string().nullish(),
    name: z.string().nullish(),
    statusCode: z.number().nullish(),
    headers: z.array(deleteMockServerResponseHeadersRequest).nullish(),
    language: deleteMockServerResponseLanguage.nullish(),
    body: z.string().nullish(),
    createdBy: z.string().nullish(),
    updatedBy: z.string().nullish(),
    createdAt: z.string().nullish(),
  })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
    statusCode: data['statusCode'],
    headers: data['headers'],
    language: data['language'],
    body: data['body'],
    createdBy: data['createdBy'],
    updatedBy: data['updatedBy'],
    createdAt: data['createdAt'],
  }));
