// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { Request } from '../../http/transport/request';
import { PullRequestGet, pullRequestGetResponse } from './models/pull-request-get';
import { PullRequestUpdate, pullRequestUpdateRequest } from './models/pull-request-update';
import { PullRequestUpdated, pullRequestUpdatedResponse } from './models/pull-request-updated';

export class PullRequestsService extends BaseService {
  /**
   * Gets information about a pull request, such as the source and destination details, who reviewed the pull request, the merge's current status, and whether the element is accessible.
   * @param {string} pullRequestId - The pull request's ID.
   * @returns {Promise<HttpResponse<PullRequestGet>>} Successful Response
   */
  async getPullRequest(pullRequestId: string, requestConfig?: RequestConfig): Promise<HttpResponse<PullRequestGet>> {
    const request = new Request({
      method: 'GET',
      path: '/pull-requests/{pullRequestId}',
      config: this.config,
      responseSchema: pullRequestGetResponse,
      requestSchema: z.any(),
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('pullRequestId', pullRequestId);
    return this.client.call<PullRequestGet>(request);
  }

  /**
   * Updates an open pull request.
   * @param {string} pullRequestId - The pull request's ID.
   * @returns {Promise<HttpResponse<PullRequestUpdated>>} Successful Response
   */
  async updatePullRequest(
    pullRequestId: string,
    body: PullRequestUpdate,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<PullRequestUpdated>> {
    const request = new Request({
      method: 'PUT',
      body,
      path: '/pull-requests/{pullRequestId}',
      config: this.config,
      responseSchema: pullRequestUpdatedResponse,
      requestSchema: pullRequestUpdateRequest,
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      requestConfig,
    });
    request.addPathParam('pullRequestId', pullRequestId);
    request.addHeaderParam('Content-Type', 'application/json');
    return this.client.call<PullRequestUpdated>(request);
  }
}
