# SecretScannerService

A list of all methods in the `SecretScannerService` service. Click on the method name to view detailed information about that method.

| Methods                                                             | Description                                                                                                                                                                                                                                                          |
| :------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [detectedSecretsQueries](#detectedsecretsqueries)                   | Returns all secrets detected by Postman's [Secret Scanner](https://learning.postman.com/docs/administration/secret-scanner/), grouped by workspace. If you pass an empty request body, this endpoint returns all results.                                            |
| [updateDetectedSecretResolutions](#updatedetectedsecretresolutions) | Updates the resolution status of a secret detected in a workspace.                                                                                                                                                                                                   |
| [getDetectedSecretsLocations](#getdetectedsecretslocations)         | Gets the locations of secrets detected by Postman's [Secret Scanner](https://learning.postman.com/docs/administration/secret-scanner/).                                                                                                                              |
| [getSecretTypes](#getsecrettypes)                                   | Gets the metadata of the secret types supported by Postman's [Secret Scanner](https://learning.postman.com/docs/administration/secret-scanner/). You can use a secret type's ID in the response to query data with the POST `/detected-secrets/{secretId}` endpoint. |

## detectedSecretsQueries

Returns all secrets detected by Postman's [Secret Scanner](https://learning.postman.com/docs/administration/secret-scanner/), grouped by workspace. If you pass an empty request body, this endpoint returns all results.

- HTTP Method: `POST`
- Endpoint: `/detected-secrets-queries`

**Parameters**

| Name    | Type                                                                        | Required | Description                                                                                                                                |
| :------ | :-------------------------------------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| body    | [DetectedSecretsQueriesRequest](../models/DetectedSecretsQueriesRequest.md) | ❌       | The request body.                                                                                                                          |
| limit   | number                                                                      | ❌       | The maximum number of rows to return in the response.                                                                                      |
| cursor  | string                                                                      | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |
| include | string                                                                      | ❌       | The additional fields to be included as a part of the request.                                                                             |

**Return Type**

`DetectedSecretsQueriesOkResponse`

**Example Usage Code Snippet**

```typescript
import { DetectedSecretsQueriesRequest, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const statuses = Statuses.FALSE_POSITIVE;

  const workspaceVisiblities = WorkspaceVisiblities.team;

  const input: DetectedSecretsQueriesRequest = {
    resolved: true,
    secretTypes: ['1a7ec5d1-dcba-4ec7-8220-3c1ee490416b'],
    statuses: [statuses],
    workspaceIds: ['0fe6c2f2-022d-48f7-8e7e-3244369445b0'],
    workspaceVisiblities: [workspaceVisiblities],
  };

  const { data } = await postmanClient.secretScanner.detectedSecretsQueries(input, {
    limit: 10,
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    include: 'meta.total',
  });

  console.log(data);
})();
```

## updateDetectedSecretResolutions

Updates the resolution status of a secret detected in a workspace.

- HTTP Method: `PUT`
- Endpoint: `/detected-secrets/{secretId}`

**Parameters**

| Name     | Type                                                                                          | Required | Description       |
| :------- | :-------------------------------------------------------------------------------------------- | :------- | :---------------- |
| body     | [UpdateDetectedSecretResolutionsRequest](../models/UpdateDetectedSecretResolutionsRequest.md) | ❌       | The request body. |
| secretId | string                                                                                        | ✅       | The secret's ID.  |

**Return Type**

`UpdateDetectedSecretResolutionsOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, UpdateDetectedSecretResolutionsRequest } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const updateSecretResolutionsResolution1 = UpdateSecretResolutionsResolution1.FALSE_POSITIVE;

  const input: UpdateDetectedSecretResolutionsRequest = {
    resolution: updateSecretResolutionsResolution1,
    workspaceId: 'e361eeb4-00dd-4225-9774-6146a2555999',
  };

  const { data } = await postmanClient.secretScanner.updateDetectedSecretResolutions('ODk0MTU2', input);

  console.log(data);
})();
```

## getDetectedSecretsLocations

Gets the locations of secrets detected by Postman's [Secret Scanner](https://learning.postman.com/docs/administration/secret-scanner/).

- HTTP Method: `GET`
- Endpoint: `/detected-secrets/{secretId}/locations`

**Parameters**

| Name        | Type   | Required | Description                                                                                                                                |
| :---------- | :----- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| secretId    | string | ✅       | The secret's ID.                                                                                                                           |
| workspaceId | string | ✅       | The workspace's ID.                                                                                                                        |
| limit       | number | ❌       | The maximum number of rows to return in the response.                                                                                      |
| cursor      | string | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |

**Return Type**

`GetSecretsLocations`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.secretScanner.getDetectedSecretsLocations('ODk0MTU2', {
    limit: 10,
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    workspaceId: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
  });

  console.log(data);
})();
```

## getSecretTypes

Gets the metadata of the secret types supported by Postman's [Secret Scanner](https://learning.postman.com/docs/administration/secret-scanner/). You can use a secret type's ID in the response to query data with the POST `/detected-secrets/{secretId}` endpoint.

- HTTP Method: `GET`
- Endpoint: `/secret-types`

**Return Type**

`GetSecretTypes`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.secretScanner.getSecretTypes();

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
