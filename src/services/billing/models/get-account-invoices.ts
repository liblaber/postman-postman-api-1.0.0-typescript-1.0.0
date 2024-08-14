// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { invoiceData, invoiceDataRequest, invoiceDataResponse } from './invoice-data';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getAccountInvoices = z.lazy(() => {
  return z.object({
    data: z.array(invoiceData),
  });
});

/**
 *
 * @typedef  {GetAccountInvoices} getAccountInvoices
 * @property {InvoiceData[]}
 */
export type GetAccountInvoices = z.infer<typeof getAccountInvoices>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getAccountInvoicesResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(invoiceDataResponse),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getAccountInvoicesRequest = z.lazy(() => {
  return z.object({ data: z.array(invoiceDataRequest).nullish() }).transform((data) => ({
    data: data['data'],
  }));
});
