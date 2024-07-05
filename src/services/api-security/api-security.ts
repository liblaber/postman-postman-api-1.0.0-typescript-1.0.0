// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import {
  SchemaSecurityValidationOkResponse,
  SchemaSecurityValidationRequest,
  schemaSecurityValidationOkResponseResponse,
  schemaSecurityValidationRequestRequest,
} from './models';

export class ApiSecurityService extends BaseService {
  /**
 * Performs an analysis on the given definition and returns any issues based on your [predefined rulesets](https://learning.postman.com/docs/api-governance/configurable-rules/configurable-rules-overview/). This endpoint can help you understand the violations' impact and offers solutions to help you resolve any errors. You can include this endpoint to your CI/CD process to automate schema validation.
For more information, see our [Rule violations in the API definition](https://learning.postman.com/docs/api-governance/api-definition/api-definition-warnings/) documentation.

**Note:**

- The maximum allowed size of the definition is 10 MB.
- You must [import and enable](https://learning.postman.com/docs/api-governance/configurable-rules/configuring-api-security-rules/) [Postman's OWASP security rules](https://postman.postman.co/api-governance/libraries/postman_owasp/view) in Postman for this endpoint to return any security rule violations.

 * @returns {Promise<HttpResponse<SchemaSecurityValidationOkResponse>>} Successful Response
 */
  async schemaSecurityValidation(
    body: SchemaSecurityValidationRequest,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<SchemaSecurityValidationOkResponse>> {
    const path = '/security/api-validation';
    const options: any = {
      responseSchema: schemaSecurityValidationOkResponseResponse,
      requestSchema: schemaSecurityValidationRequestRequest,
      body: body as any,
      headers: {
        'Content-Type': 'application/json',
      },
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
      config: this.config,
    };
    return this.client.post(path, options);
  }
}
