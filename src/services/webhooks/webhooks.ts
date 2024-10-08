// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { CreateWebhookRequest, createWebhookRequestRequest } from './models/create-webhook-request';
import { CreateWebhookOkResponse, createWebhookOkResponseResponse } from './models/create-webhook-ok-response';
import { CreateWebhookParams } from './request-params';

export class WebhooksService extends BaseService {
  /**
   * Creates a webhook that triggers a collection with a custom payload. You can get the webhook's URL from the `webhookUrl` property in the endpoint's response.
   * @param {string} [workspace] - The workspace's ID.
   * @returns {Promise<HttpResponse<CreateWebhookOkResponse>>} Successful Response
   */
  async createWebhook(
    body: CreateWebhookRequest,
    params?: CreateWebhookParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<CreateWebhookOkResponse>> {
    const request = new RequestBuilder<CreateWebhookOkResponse>()
      .setConfig(this.config)
      .setBaseUrl(this.config)
      .setMethod('POST')
      .setPath('/webhooks')
      .setRequestSchema(createWebhookRequestRequest)
      .setResponseSchema(createWebhookOkResponseResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addQueryParam({
        key: 'workspace',
        value: params?.workspace,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<CreateWebhookOkResponse>(request);
  }
}
