# ApiService

A list of all methods in the `ApiService` service. Click on the method name to view detailed information about that method.

| Methods                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getApis](#getapis)                                     | Gets information about all APIs in a workspace.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [createApi](#createapi)                                 | Creates an API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [getApi](#getapi)                                       | Gets information about an API. **Note:** - Git-connected APIs will only return the `versions` and `gitInfo` query responses. This is because schema and collection information is stored in the connected Git repository. The `gitInfo` object only lists the repository and folder locations of the files. - API viewers can only use the `versions` option in the `include` query parameter.                                                                                                                                                                                                                                                                                             |
| [updateApi](#updateapi)                                 | Updates an API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [deleteApi](#deleteapi)                                 | Deletes an API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [addApiCollection](#addapicollection)                   | Adds a collection to an API. To do this, use the following `operationType` values: - `COPY_COLLECTION` — Copies a collection from the workspace and adds it to an API. - `CREATE_NEW` — Creates a new collection by providing the new collection's content. - `GENERATE_FROM_SCHEMA` — Generates the collection from an API schema. - `options` — An object that contains advanced creation options and their values. You can find a complete list of properties and their values in Postman's [OpenAPI 3.0 to Postman Collection v2.1.0 Converter OPTIONS documentation](https://github.com/postmanlabs/openapi-to-postman/blob/develop/OPTIONS.md). These properties are case-sensitive. |
| [getApiCollection](#getapicollection)                   | Gets a collection attached to an API. You can use the `versionId` query parameter to get a collection published in a version. **Note:** The `versionId` query parameter is a required parameter for API viewers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [syncCollectionWithSchema](#synccollectionwithschema)   | Syncs a collection attached to an API with the API schema. This is an asynchronous endpoint that returns an HTTP `202 Accepted` response. The response contains a polling link to the `/apis/{apiId}/tasks/{taskId}` endpoint in the `Location` header. **Note:** This endpoint only supports the OpenAPI 3 schema type.                                                                                                                                                                                                                                                                                                                                                                   |
| [getApiComments](#getapicomments)                       | Gets all comments left by users in an API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [createApiComment](#createapicomment)                   | Creates a comment on an API. **Note:** This endpoint accepts a max of 10,000 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [updateApiComment](#updateapicomment)                   | Updates a comment on an API. **Note:** This endpoint accepts a max of 10,000 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [deleteApiComment](#deleteapicomment)                   | Deletes a comment from an API. On success, this returns an HTTP `204 No Content` response. **Note:** Deleting the first comment of a thread deletes all the comments in the thread.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [createApiSchema](#createapischema)                     | Creates a schema for an API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [getApiSchema](#getapischema)                           | Gets information about API schema. You can use the `versionId` query parameter to get a schema published in an API version. You can use this API to do the following: - Get a schema's metadata. - Get all the files in a schema. This only returns the first file in the schema. The endpoint response contains a link to the next set of response results. - Get a schema's contents in multi-file or bundled format. **Note:** The `versionId` query parameter is a required parameter for API viewers.                                                                                                                                                                                 |
| [getApiSchemaFiles](#getapischemafiles)                 | Gets the files in an API schema. You can use the `versionId` query parameter to get schema files published in an API version. **Note:** The `versionId` query parameter is a required parameter for API viewers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [getApiSchemaFileContents](#getapischemafilecontents)   | Gets an API schema file contents at the defined path. You can use the `versionId` query parameter to get schema file contents published in an API version. **Note:** The `versionId` query parameter is a required parameter for API viewers.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [createUpdateApiSchemaFile](#createupdateapischemafile) | Creates or updates an API schema file. **Note:** - If the provided file path exists, the file will be updated with the new contents. - If the provided file path does not exist, then a new schema file will be created. - If the file path contains a `/` (forward slash) character, then a folder is created. For example, if the file path is the `dir/schema.json` value, then a `dir` folder is created with the `schema.json` file inside.                                                                                                                                                                                                                                           |
| [deleteApiSchemaFile](#deleteapischemafile)             | Deletes a file in an API schema.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [getStatusOfAnAsyncTask](#getstatusofanasynctask)       | Gets the status of an asynchronous task.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [getApiVersions](#getapiversions)                       | Gets all the published versions of an API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [createApiVersion](#createapiversion)                   | Creates a new API version asynchronously and immediately returns an HTTP `202 Accepted` response. The response contains a polling link to the task status API in the `Location` header. This endpoint is equivalent to publishing a version in Postman app, which is the snapshot of API collections and schema at a given point in time.                                                                                                                                                                                                                                                                                                                                                  |
| [getApiVersion](#getapiversion)                         | Gets information about an API version. **Note:** - For API editors, this endpoint returns an HTTP `302 Found` status code when the version status is pending. It also returns the `/apis/{apiId}/tasks/{taskId}` task status response header. - For API viewers, this endpoint returns an HTTP `404 Not Found` when the version status is pending.                                                                                                                                                                                                                                                                                                                                         |
| [updateApiVersion](#updateapiversion)                   | Updates an API version. **Note:** This endpoint returns an HTTP `404 Not Found` response when an API version is pending publication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [deleteApiVersion](#deleteapiversion)                   | Deletes an API version. **Note:** This endpoint returns an HTTP `404 Not Found` response when an API version is pending publication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## getApis

Gets information about all APIs in a workspace.

- HTTP Method: `GET`
- Endpoint: `/apis`

**Parameters**

| Name        | Type                          | Required | Description                                                                                                                                |
| :---------- | :---------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| workspaceId | string                        | ✅       | The workspace's ID.                                                                                                                        |
| accept      | [Accept](../models/Accept.md) | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint.                                                            |
| createdBy   | number                        | ❌       | Return only results created by the given user ID.                                                                                          |
| cursor      | string                        | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |
| description | string                        | ❌       | Return only APIs whose description includes the given value. Matching is not case-sensitive.                                               |
| limit       | number                        | ❌       | The maximum number of rows to return in the response.                                                                                      |

**Return Type**

`GetApis`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const accept = Accept.application / vnd.api.v10 + json;

  const { data } = await postmanClient.api.getApis({
    workspaceId: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    createdBy: 12345678,
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    description: 'This is an API for testing purposes',
    limit: 10,
    accept: accept,
  });

  console.log(data);
})();
```

## createApi

Creates an API.

- HTTP Method: `POST`
- Endpoint: `/apis`

**Parameters**

| Name        | Type                                              | Required | Description                                                                     |
| :---------- | :------------------------------------------------ | :------- | :------------------------------------------------------------------------------ |
| body        | [CreateApiRequest](../models/CreateApiRequest.md) | ❌       | The request body.                                                               |
| workspaceId | string                                            | ✅       | The workspace's ID.                                                             |
| accept      | [Accept](../models/Accept.md)                     | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint. |

**Return Type**

`CreateApiOkResponse`

**Example Usage Code Snippet**

```typescript
import { CreateApiRequest, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const accept = Accept.application / vnd.api.v10 + json;

  const input: CreateApiRequest = {
    name: 'Test API',
    summary: 'Testing API',
    description: 'This is a test API.',
  };

  const { data } = await postmanClient.api.createApi(input, {
    workspaceId: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    accept: accept,
  });

  console.log(data);
})();
```

## getApi

Gets information about an API. **Note:** - Git-connected APIs will only return the `versions` and `gitInfo` query responses. This is because schema and collection information is stored in the connected Git repository. The `gitInfo` object only lists the repository and folder locations of the files. - API viewers can only use the `versions` option in the `include` query parameter.

- HTTP Method: `GET`
- Endpoint: `/apis/{apiId}`

**Parameters**

| Name    | Type                                          | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :------ | :-------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| apiId   | string                                        | ✅       | The API's ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| accept  | [Accept](../models/Accept.md)                 | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| include | [GetApiInclude[]](../models/GetApiInclude.md) | ❌       | An array that contains additional resources to include in the response. Use this parameter to query for element links to the API, such as collections and schemas: - `collections` — Query for linked Postman collections. - `versions` — Query for linked versions. - `schemas` — Query for linked schemas. - `gitInfo` — Query for information about the API's git-linked repository. This query only returns the linked repository and folder locations of the files. It does not return `collections` or `schemas` information. **Note:** API viewers can only use the `versions` option. |

**Return Type**

`GetApi`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const accept = Accept.application / vnd.api.v10 + json;

  const { data } = await postmanClient.api.getApi('90ca9f5a-c4c4-11ed-afa1-0242ac120002', {
    include: [getApiInclude],
    accept: accept,
  });

  console.log(data);
})();
```

## updateApi

Updates an API.

- HTTP Method: `PUT`
- Endpoint: `/apis/{apiId}`

**Parameters**

| Name   | Type                                              | Required | Description                                                                     |
| :----- | :------------------------------------------------ | :------- | :------------------------------------------------------------------------------ |
| body   | [UpdateApiRequest](../models/UpdateApiRequest.md) | ❌       | The request body.                                                               |
| apiId  | string                                            | ✅       | The API's ID.                                                                   |
| accept | [Accept](../models/Accept.md)                     | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint. |

**Return Type**

`UpdateApiOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, UpdateApiRequest } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const accept = Accept.application / vnd.api.v10 + json;

  const input: UpdateApiRequest = {
    name: 'Test API',
    summary: 'Testing API',
    description: 'This is a test API.',
  };

  const { data } = await postmanClient.api.updateApi('90ca9f5a-c4c4-11ed-afa1-0242ac120002', input, {
    accept: accept,
  });

  console.log(data);
})();
```

## deleteApi

Deletes an API.

- HTTP Method: `DELETE`
- Endpoint: `/apis/{apiId}`

**Parameters**

| Name   | Type                          | Required | Description                                                                     |
| :----- | :---------------------------- | :------- | :------------------------------------------------------------------------------ |
| apiId  | string                        | ✅       | The API's ID.                                                                   |
| accept | [Accept](../models/Accept.md) | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint. |

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const accept = Accept.application / vnd.api.v10 + json;

  const { data } = await postmanClient.api.deleteApi('90ca9f5a-c4c4-11ed-afa1-0242ac120002', {
    accept: accept,
  });

  console.log(data);
})();
```

## addApiCollection

Adds a collection to an API. To do this, use the following `operationType` values: - `COPY_COLLECTION` — Copies a collection from the workspace and adds it to an API. - `CREATE_NEW` — Creates a new collection by providing the new collection's content. - `GENERATE_FROM_SCHEMA` — Generates the collection from an API schema. - `options` — An object that contains advanced creation options and their values. You can find a complete list of properties and their values in Postman's [OpenAPI 3.0 to Postman Collection v2.1.0 Converter OPTIONS documentation](https://github.com/postmanlabs/openapi-to-postman/blob/develop/OPTIONS.md). These properties are case-sensitive.

- HTTP Method: `POST`
- Endpoint: `/apis/{apiId}/collections`

**Parameters**

| Name   | Type                                                            | Required | Description                                                                     |
| :----- | :-------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------ |
| body   | [AddApiCollectionRequest](../models/AddApiCollectionRequest.md) | ❌       | The request body.                                                               |
| apiId  | string                                                          | ✅       | The API's ID.                                                                   |
| accept | [Accept](../models/Accept.md)                                   | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint. |

**Return Type**

`AddApiCollectionOkResponse`

**Example Usage Code Snippet**

```typescript
import { AddApiCollectionRequest, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const accept = Accept.application / vnd.api.v10 + json;

  const addApiCollection1Data: AddApiCollection1Data = {
    collectionId: '12345678-61867bcc-c4c1-11ed-afa1-0242ac120002',
  };

  const addApiCollection1OperationType = AddApiCollection1OperationType.COPY_COLLECTION;

  const addApiCollectionRequest: AddApiCollection1 = {
    data: addApiCollection1Data,
    operationType: addApiCollection1OperationType,
  };

  const { data } = await postmanClient.api.addApiCollection('90ca9f5a-c4c4-11ed-afa1-0242ac120002', input, {
    accept: accept,
  });

  console.log(data);
})();
```

## getApiCollection

Gets a collection attached to an API. You can use the `versionId` query parameter to get a collection published in a version. **Note:** The `versionId` query parameter is a required parameter for API viewers.

- HTTP Method: `GET`
- Endpoint: `/apis/{apiId}/collections/{collectionId}`

**Parameters**

| Name         | Type                          | Required | Description                                                                     |
| :----------- | :---------------------------- | :------- | :------------------------------------------------------------------------------ |
| apiId        | string                        | ✅       | The API's ID.                                                                   |
| collectionId | string                        | ✅       | The collection's unique ID.                                                     |
| accept       | [Accept](../models/Accept.md) | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint. |
| versionId    | string                        | ❌       | The API's version ID.                                                           |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const accept = Accept.application / vnd.api.v10 + json;

  const { data } = await postmanClient.api.getApiCollection(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '12345678-61867bcc-c4c1-11ed-afa1-0242ac120002',
    {
      versionId: '12ece9e1-2abf-4edc-8e34-de66e74114d2',
      accept: accept,
    },
  );

  console.log(data);
})();
```

## syncCollectionWithSchema

Syncs a collection attached to an API with the API schema. This is an asynchronous endpoint that returns an HTTP `202 Accepted` response. The response contains a polling link to the `/apis/{apiId}/tasks/{taskId}` endpoint in the `Location` header. **Note:** This endpoint only supports the OpenAPI 3 schema type.

- HTTP Method: `PUT`
- Endpoint: `/apis/{apiId}/collections/{collectionId}/sync-with-schema-tasks`

**Parameters**

| Name         | Type                          | Required | Description                                                                     |
| :----------- | :---------------------------- | :------- | :------------------------------------------------------------------------------ |
| apiId        | string                        | ✅       | The API's ID.                                                                   |
| collectionId | string                        | ✅       | The collection's unique ID.                                                     |
| accept       | [Accept](../models/Accept.md) | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint. |

**Return Type**

`SyncCollectionWithSchema`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const accept = Accept.application / vnd.api.v10 + json;

  const { data } = await postmanClient.api.syncCollectionWithSchema(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '12345678-61867bcc-c4c1-11ed-afa1-0242ac120002',
    {
      accept: accept,
    },
  );

  console.log(data);
})();
```

## getApiComments

Gets all comments left by users in an API.

- HTTP Method: `GET`
- Endpoint: `/apis/{apiId}/comments`

**Parameters**

| Name  | Type   | Required | Description   |
| :---- | :----- | :------- | :------------ |
| apiId | string | ✅       | The API's ID. |

**Return Type**

`CommentResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.api.getApiComments('90ca9f5a-c4c4-11ed-afa1-0242ac120002');

  console.log(data);
})();
```

## createApiComment

Creates a comment on an API. **Note:** This endpoint accepts a max of 10,000 characters.

- HTTP Method: `POST`
- Endpoint: `/apis/{apiId}/comments`

**Parameters**

| Name  | Type                                                    | Required | Description       |
| :---- | :------------------------------------------------------ | :------- | :---------------- |
| body  | [CommentCreateUpdate](../models/CommentCreateUpdate.md) | ✅       | The request body. |
| apiId | string                                                  | ✅       | The API's ID.     |

**Return Type**

`CommentCreatedUpdated`

**Example Usage Code Snippet**

```typescript
import { CommentCreateUpdate, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const userNameType = UserNameType.user;

  const userName: UserName = {
    type_: userNameType,
    id: 87654321,
  };

  const commentCreateUpdateTags: CommentCreateUpdateTags = {
    userName: userName,
  };

  const input: CommentCreateUpdate = {
    body: 'This is an example.',
    tags: commentCreateUpdateTags,
  };

  const { data } = await postmanClient.api.createApiComment('90ca9f5a-c4c4-11ed-afa1-0242ac120002', input);

  console.log(data);
})();
```

## updateApiComment

Updates a comment on an API. **Note:** This endpoint accepts a max of 10,000 characters.

- HTTP Method: `PUT`
- Endpoint: `/apis/{apiId}/comments/{commentId}`

**Parameters**

| Name      | Type                                                    | Required | Description       |
| :-------- | :------------------------------------------------------ | :------- | :---------------- |
| body      | [CommentCreateUpdate](../models/CommentCreateUpdate.md) | ✅       | The request body. |
| apiId     | string                                                  | ✅       | The API's ID.     |
| commentId | number                                                  | ✅       | The comment's ID. |

**Return Type**

`CommentCreatedUpdated`

**Example Usage Code Snippet**

```typescript
import { CommentCreateUpdate, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const userNameType = UserNameType.user;

  const userName: UserName = {
    type_: userNameType,
    id: 87654321,
  };

  const commentCreateUpdateTags: CommentCreateUpdateTags = {
    userName: userName,
  };

  const input: CommentCreateUpdate = {
    body: 'This is an example.',
    tags: commentCreateUpdateTags,
  };

  const { data } = await postmanClient.api.updateApiComment('90ca9f5a-c4c4-11ed-afa1-0242ac120002', 46814, input);

  console.log(data);
})();
```

## deleteApiComment

Deletes a comment from an API. On success, this returns an HTTP `204 No Content` response. **Note:** Deleting the first comment of a thread deletes all the comments in the thread.

- HTTP Method: `DELETE`
- Endpoint: `/apis/{apiId}/comments/{commentId}`

**Parameters**

| Name      | Type   | Required | Description       |
| :-------- | :----- | :------- | :---------------- |
| apiId     | string | ✅       | The API's ID.     |
| commentId | number | ✅       | The comment's ID. |

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.api.deleteApiComment('90ca9f5a-c4c4-11ed-afa1-0242ac120002', 46814);

  console.log(data);
})();
```

## createApiSchema

Creates a schema for an API.

- HTTP Method: `POST`
- Endpoint: `/apis/{apiId}/schemas`

**Parameters**

| Name   | Type                                                          | Required | Description                                                                     |
| :----- | :------------------------------------------------------------ | :------- | :------------------------------------------------------------------------------ |
| body   | [CreateApiSchemaRequest](../models/CreateApiSchemaRequest.md) | ❌       | The request body.                                                               |
| apiId  | string                                                        | ✅       | The API's ID.                                                                   |
| accept | [Accept](../models/Accept.md)                                 | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint. |

**Return Type**

`CreateApiSchemaOkResponse`

**Example Usage Code Snippet**

```typescript
import { CreateApiSchemaRequest, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
	apiKey: 'YOUR_API_KEY'});

  const accept = Accept.application/vnd.api.v10+json;

  const createApiSchemaType1 = CreateApiSchemaType1.proto:2;

const enabled = Enabled.true;

const filesRoot: FilesRoot = {
  enabled: enabled
};

const createApiSchemaFiles1: CreateApiSchemaFiles1 = {
  path: "common/Error.json",
  root: filesRoot,
  content: "content"
};

const input: CreateApiSchemaRequest = {
  type_: createApiSchemaType1,
  files: [createApiSchemaFiles1]
};

  const { data } = await postmanClient.api.createApiSchema(
  "90ca9f5a-c4c4-11ed-afa1-0242ac120002",
  input,
  {
		accept: accept,
  }
);

  console.log(data);
})();
```

## getApiSchema

Gets information about API schema. You can use the `versionId` query parameter to get a schema published in an API version. You can use this API to do the following: - Get a schema's metadata. - Get all the files in a schema. This only returns the first file in the schema. The endpoint response contains a link to the next set of response results. - Get a schema's contents in multi-file or bundled format. **Note:** The `versionId` query parameter is a required parameter for API viewers.

- HTTP Method: `GET`
- Endpoint: `/apis/{apiId}/schemas/{schemaId}`

**Parameters**

| Name      | Type                          | Required | Description                                                                     |
| :-------- | :---------------------------- | :------- | :------------------------------------------------------------------------------ |
| apiId     | string                        | ✅       | The API's ID.                                                                   |
| schemaId  | string                        | ✅       | The API schema's ID.                                                            |
| accept    | [Accept](../models/Accept.md) | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint. |
| versionId | string                        | ❌       | The API's version ID.                                                           |
| bundled   | boolean                       | ❌       | If true, return the schema in a bundled format.                                 |

**Return Type**

`GetApiSchema`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const accept = Accept.application / vnd.api.v10 + json;

  const { data } = await postmanClient.api.getApiSchema(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '5381f010-c4c1-11ed-afa1-0242ac120002',
    {
      versionId: '12ece9e1-2abf-4edc-8e34-de66e74114d2',
      bundled: true,
      accept: accept,
    },
  );

  console.log(data);
})();
```

## getApiSchemaFiles

Gets the files in an API schema. You can use the `versionId` query parameter to get schema files published in an API version. **Note:** The `versionId` query parameter is a required parameter for API viewers.

- HTTP Method: `GET`
- Endpoint: `/apis/{apiId}/schemas/{schemaId}/files`

**Parameters**

| Name      | Type                          | Required | Description                                                                                                                                |
| :-------- | :---------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| apiId     | string                        | ✅       | The API's ID.                                                                                                                              |
| schemaId  | string                        | ✅       | The API schema's ID.                                                                                                                       |
| accept    | [Accept](../models/Accept.md) | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint.                                                            |
| versionId | string                        | ❌       | The API's version ID.                                                                                                                      |
| limit     | number                        | ❌       | The maximum number of rows to return in the response.                                                                                      |
| cursor    | string                        | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |

**Return Type**

`GetApiSchemaFiles`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const accept = Accept.application / vnd.api.v10 + json;

  const { data } = await postmanClient.api.getApiSchemaFiles(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '5381f010-c4c1-11ed-afa1-0242ac120002',
    {
      versionId: '12ece9e1-2abf-4edc-8e34-de66e74114d2',
      limit: 10,
      cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
      accept: accept,
    },
  );

  console.log(data);
})();
```

## getApiSchemaFileContents

Gets an API schema file contents at the defined path. You can use the `versionId` query parameter to get schema file contents published in an API version. **Note:** The `versionId` query parameter is a required parameter for API viewers.

- HTTP Method: `GET`
- Endpoint: `/apis/{apiId}/schemas/{schemaId}/files/{file-path}`

**Parameters**

| Name      | Type                          | Required | Description                                                                     |
| :-------- | :---------------------------- | :------- | :------------------------------------------------------------------------------ |
| apiId     | string                        | ✅       | The API's ID.                                                                   |
| schemaId  | string                        | ✅       | The API schema's ID.                                                            |
| filePath  | string                        | ✅       | The path to the schema file.                                                    |
| accept    | [Accept](../models/Accept.md) | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint. |
| versionId | string                        | ❌       | The API's version ID.                                                           |

**Return Type**

`GetApiSchemaFileContents`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const accept = Accept.application / vnd.api.v10 + json;

  const { data } = await postmanClient.api.getApiSchemaFileContents(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '5381f010-c4c1-11ed-afa1-0242ac120002',
    'postman/collection/c1.json',
    {
      versionId: '12ece9e1-2abf-4edc-8e34-de66e74114d2',
      accept: accept,
    },
  );

  console.log(data);
})();
```

## createUpdateApiSchemaFile

Creates or updates an API schema file. **Note:** - If the provided file path exists, the file will be updated with the new contents. - If the provided file path does not exist, then a new schema file will be created. - If the file path contains a `/` (forward slash) character, then a folder is created. For example, if the file path is the `dir/schema.json` value, then a `dir` folder is created with the `schema.json` file inside.

- HTTP Method: `PUT`
- Endpoint: `/apis/{apiId}/schemas/{schemaId}/files/{file-path}`

**Parameters**

| Name     | Type                                                                              | Required | Description                                                                     |
| :------- | :-------------------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------ |
| body     | [CreateUpdateApiSchemaFileRequest](../models/CreateUpdateApiSchemaFileRequest.md) | ❌       | The request body.                                                               |
| apiId    | string                                                                            | ✅       | The API's ID.                                                                   |
| schemaId | string                                                                            | ✅       | The API schema's ID.                                                            |
| filePath | string                                                                            | ✅       | The path to the schema file.                                                    |
| accept   | [Accept](../models/Accept.md)                                                     | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint. |

**Return Type**

`CreateUpdateApiSchemaFileOkResponse`

**Example Usage Code Snippet**

```typescript
import { CreateUpdateApiSchemaFileRequest, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
	apiKey: 'YOUR_API_KEY'});

  const accept = Accept.application/vnd.api.v10+json;


const createUpdateApiSchemaFileRoot: CreateUpdateApiSchemaFileRoot = {
  enabled: true
};

const input: CreateUpdateApiSchemaFileRequest = {
  name: "index.json",
  root: createUpdateApiSchemaFileRoot,
  content: "{
  "type": "object",
  "required": [
    "id",
    "name"
  ],
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64"
    },
    "name": {
      "type": "string"
    },
    "tag": {
      "type": "string"
    }
  }
}"
};

  const { data } = await postmanClient.api.createUpdateApiSchemaFile(
  "90ca9f5a-c4c4-11ed-afa1-0242ac120002",
  "5381f010-c4c1-11ed-afa1-0242ac120002",
  "postman/collection/c1.json",
  input,
  {
		accept: accept,
  }
);

  console.log(data);
})();
```

## deleteApiSchemaFile

Deletes a file in an API schema.

- HTTP Method: `DELETE`
- Endpoint: `/apis/{apiId}/schemas/{schemaId}/files/{file-path}`

**Parameters**

| Name     | Type                          | Required | Description                                                                     |
| :------- | :---------------------------- | :------- | :------------------------------------------------------------------------------ |
| apiId    | string                        | ✅       | The API's ID.                                                                   |
| schemaId | string                        | ✅       | The API schema's ID.                                                            |
| filePath | string                        | ✅       | The path to the schema file.                                                    |
| accept   | [Accept](../models/Accept.md) | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint. |

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const accept = Accept.application / vnd.api.v10 + json;

  const { data } = await postmanClient.api.deleteApiSchemaFile(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '5381f010-c4c1-11ed-afa1-0242ac120002',
    'postman/collection/c1.json',
    {
      accept: accept,
    },
  );

  console.log(data);
})();
```

## getStatusOfAnAsyncTask

Gets the status of an asynchronous task.

- HTTP Method: `GET`
- Endpoint: `/apis/{apiId}/tasks/{taskId}`

**Parameters**

| Name   | Type                          | Required | Description                                                                     |
| :----- | :---------------------------- | :------- | :------------------------------------------------------------------------------ |
| apiId  | string                        | ✅       | The API's ID.                                                                   |
| taskId | string                        | ✅       | The task's ID.                                                                  |
| accept | [Accept](../models/Accept.md) | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint. |

**Return Type**

`GetStatusOfAnAsyncTask`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const accept = Accept.application / vnd.api.v10 + json;

  const { data } = await postmanClient.api.getStatusOfAnAsyncTask(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '90ca9f5a-c4c4-21ed-afa1-0242ac120002',
    {
      accept: accept,
    },
  );

  console.log(data);
})();
```

## getApiVersions

Gets all the published versions of an API.

- HTTP Method: `GET`
- Endpoint: `/apis/{apiId}/versions`

**Parameters**

| Name   | Type                          | Required | Description                                                                                                                                |
| :----- | :---------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| apiId  | string                        | ✅       | The API's ID.                                                                                                                              |
| accept | [Accept](../models/Accept.md) | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint.                                                            |
| cursor | string                        | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |
| limit  | number                        | ❌       | The maximum number of rows to return in the response.                                                                                      |

**Return Type**

`GetApiVersions`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const accept = Accept.application / vnd.api.v10 + json;

  const { data } = await postmanClient.api.getApiVersions('90ca9f5a-c4c4-11ed-afa1-0242ac120002', {
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    limit: 10,
    accept: accept,
  });

  console.log(data);
})();
```

## createApiVersion

Creates a new API version asynchronously and immediately returns an HTTP `202 Accepted` response. The response contains a polling link to the task status API in the `Location` header. This endpoint is equivalent to publishing a version in Postman app, which is the snapshot of API collections and schema at a given point in time.

- HTTP Method: `POST`
- Endpoint: `/apis/{apiId}/versions`

**Parameters**

| Name   | Type                                                            | Required | Description                                                                     |
| :----- | :-------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------ |
| body   | [CreateApiVersionRequest](../models/CreateApiVersionRequest.md) | ❌       | The request body.                                                               |
| apiId  | string                                                          | ✅       | The API's ID.                                                                   |
| accept | [Accept](../models/Accept.md)                                   | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint. |

**Return Type**

`CreateApiVersionAcceptedResponse`

**Example Usage Code Snippet**

```typescript
import { CreateApiVersionRequest, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const accept = Accept.application / vnd.api.v10 + json;

  const createApiVersion1Schemas: CreateApiVersion1Schemas = {
    id: '5381f010-c4c1-11ed-afa1-0242ac120002',
  };

  const createApiVersion1Collections: CreateApiVersion1Collections = {
    id: '123456-12ece9e1-2abf-4edc-8e34-de66e74114d2',
  };

  const createApiVersionRequest: CreateApiVersion1 = {
    name: 'v1',
    schemas: [createApiVersion1Schemas],
    collections: [createApiVersion1Collections],
    releaseNotes: 'This is the first release.',
  };

  const { data } = await postmanClient.api.createApiVersion('90ca9f5a-c4c4-11ed-afa1-0242ac120002', input, {
    accept: accept,
  });

  console.log(data);
})();
```

## getApiVersion

Gets information about an API version. **Note:** - For API editors, this endpoint returns an HTTP `302 Found` status code when the version status is pending. It also returns the `/apis/{apiId}/tasks/{taskId}` task status response header. - For API viewers, this endpoint returns an HTTP `404 Not Found` when the version status is pending.

- HTTP Method: `GET`
- Endpoint: `/apis/{apiId}/versions/{versionId}`

**Parameters**

| Name      | Type                          | Required | Description                                                                     |
| :-------- | :---------------------------- | :------- | :------------------------------------------------------------------------------ |
| apiId     | string                        | ✅       | The API's ID.                                                                   |
| versionId | string                        | ✅       | The API's version ID.                                                           |
| accept    | [Accept](../models/Accept.md) | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint. |

**Return Type**

`GetApiVersion`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const accept = Accept.application / vnd.api.v10 + json;

  const { data } = await postmanClient.api.getApiVersion(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    {
      accept: accept,
    },
  );

  console.log(data);
})();
```

## updateApiVersion

Updates an API version. **Note:** This endpoint returns an HTTP `404 Not Found` response when an API version is pending publication.

- HTTP Method: `PUT`
- Endpoint: `/apis/{apiId}/versions/{versionId}`

**Parameters**

| Name      | Type                                                            | Required | Description                                                                     |
| :-------- | :-------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------ |
| body      | [UpdateApiVersionRequest](../models/UpdateApiVersionRequest.md) | ❌       | The request body.                                                               |
| apiId     | string                                                          | ✅       | The API's ID.                                                                   |
| versionId | string                                                          | ✅       | The API's version ID.                                                           |
| accept    | [Accept](../models/Accept.md)                                   | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint. |

**Return Type**

`UpdateApiVersionOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, UpdateApiVersionRequest } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const accept = Accept.application / vnd.api.v10 + json;

  const input: UpdateApiVersionRequest = {
    name: 'Release 1.5',
    releaseNotes: 'This is the first public release update.',
  };

  const { data } = await postmanClient.api.updateApiVersion(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    input,
    {
      accept: accept,
    },
  );

  console.log(data);
})();
```

## deleteApiVersion

Deletes an API version. **Note:** This endpoint returns an HTTP `404 Not Found` response when an API version is pending publication.

- HTTP Method: `DELETE`
- Endpoint: `/apis/{apiId}/versions/{versionId}`

**Parameters**

| Name      | Type                          | Required | Description                                                                     |
| :-------- | :---------------------------- | :------- | :------------------------------------------------------------------------------ |
| apiId     | string                        | ✅       | The API's ID.                                                                   |
| versionId | string                        | ✅       | The API's version ID.                                                           |
| accept    | [Accept](../models/Accept.md) | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint. |

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const accept = Accept.application / vnd.api.v10 + json;

  const { data } = await postmanClient.api.deleteApiVersion(
    '90ca9f5a-c4c4-11ed-afa1-0242ac120002',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    {
      accept: accept,
    },
  );

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
