# TagsService

A list of all methods in the `TagsService` service. Click on the method name to view detailed information about that method.

| Methods                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :-------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getApiTags](#getapitags)                     | Gets all the tags associated with an API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [updateApiTags](#updateapitags)               | Updates an API's associated tags. This endpoint replaces all existing tags with those you pass in the request body.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [getCollectionTags](#getcollectiontags)       | Gets all the tags associated with a collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [updateCollectionTags](#updatecollectiontags) | Updates a collection's associated tags. This endpoint replaces all existing tags with those you pass in the request body.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [getTaggedEntities](#gettaggedentities)       | Gets Postman elements (entities) by a given tag. Tags enable you to organize and search [workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#tagging-a-workspace), [APIs](https://learning.postman.com/docs/designing-and-developing-your-api/managing-apis/#tagging-apis), and [collections](https://learning.postman.com/docs/collections/using-collections/#tagging-a-collection) that contain shared tags. **Note:** Tagging is available on Postman [**Enterprise** plans](https://www.postman.com/pricing/). |
| [getWorkspaceTags](#getworkspacetags)         | Gets all the tags associated with a workspace.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [updateWorkspaceTags](#updateworkspacetags)   | Updates a workspace's associated tags. This endpoint replaces all existing tags with those you pass in the request body.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## getApiTags

Gets all the tags associated with an API.

- HTTP Method: `GET`
- Endpoint: `/apis/{apiId}/tags`

**Parameters**

| Name   | Type                          | Required | Description                                                                     |
| :----- | :---------------------------- | :------- | :------------------------------------------------------------------------------ |
| apiId  | string                        | ✅       | The API's unique ID.                                                            |
| accept | [Accept](../models/Accept.md) | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint. |

**Return Type**

`TagGetPut`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const accept = Accept.application / vnd.api.v10 + json;

  const { data } = await postmanClient.tags.getApiTags('12345678-6fd634a3-79ba-451d-8f07-56a953f96667', {
    accept: accept,
  });

  console.log(data);
})();
```

## updateApiTags

Updates an API's associated tags. This endpoint replaces all existing tags with those you pass in the request body.

- HTTP Method: `PUT`
- Endpoint: `/apis/{apiId}/tags`

**Parameters**

| Name   | Type                                        | Required | Description                                                                     |
| :----- | :------------------------------------------ | :------- | :------------------------------------------------------------------------------ |
| body   | [TagUpdateTags](../models/TagUpdateTags.md) | ❌       | The request body.                                                               |
| apiId  | string                                      | ✅       | The API's unique ID.                                                            |
| accept | [Accept](../models/Accept.md)               | ✅       | The `application/vnd.api.v10+json` request header required to use the endpoint. |

**Return Type**

`TagGetPut`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, TagUpdateTags } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const accept = Accept.application / vnd.api.v10 + json;

  const tagUpdateTagsTags: TagUpdateTagsTags = {
    slug: 'needs-review',
  };

  const input: TagUpdateTags = {
    tags: [tagUpdateTagsTags],
  };

  const { data } = await postmanClient.tags.updateApiTags('12345678-6fd634a3-79ba-451d-8f07-56a953f96667', input, {
    accept: accept,
  });

  console.log(data);
})();
```

## getCollectionTags

Gets all the tags associated with a collection.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/tags`

**Parameters**

| Name         | Type   | Required | Description                 |
| :----------- | :----- | :------- | :-------------------------- |
| collectionId | string | ✅       | The collection's unique ID. |

**Return Type**

`TagGetPut`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.tags.getCollectionTags('12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2');

  console.log(data);
})();
```

## updateCollectionTags

Updates a collection's associated tags. This endpoint replaces all existing tags with those you pass in the request body.

- HTTP Method: `PUT`
- Endpoint: `/collections/{collectionId}/tags`

**Parameters**

| Name         | Type                                        | Required | Description                 |
| :----------- | :------------------------------------------ | :------- | :-------------------------- |
| body         | [TagUpdateTags](../models/TagUpdateTags.md) | ❌       | The request body.           |
| collectionId | string                                      | ✅       | The collection's unique ID. |

**Return Type**

`TagGetPut`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, TagUpdateTags } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const tagUpdateTagsTags: TagUpdateTagsTags = {
    slug: 'needs-review',
  };

  const input: TagUpdateTags = {
    tags: [tagUpdateTagsTags],
  };

  const { data } = await postmanClient.tags.updateCollectionTags(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    input,
  );

  console.log(data);
})();
```

## getTaggedEntities

Gets Postman elements (entities) by a given tag. Tags enable you to organize and search [workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#tagging-a-workspace), [APIs](https://learning.postman.com/docs/designing-and-developing-your-api/managing-apis/#tagging-apis), and [collections](https://learning.postman.com/docs/collections/using-collections/#tagging-a-collection) that contain shared tags. **Note:** Tagging is available on Postman [**Enterprise** plans](https://www.postman.com/pricing/).

- HTTP Method: `GET`
- Endpoint: `/tags/{slug}/entities`

**Parameters**

| Name       | Type                                                                    | Required | Description                                                                                                                                       |
| :--------- | :---------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| slug       | string                                                                  | ✅       | The tag's ID within a team or individual (non-team) user scope.                                                                                   |
| limit      | number                                                                  | ❌       | The maximum number of tagged elements to return in a single call.                                                                                 |
| direction  | [AscDescDefaultDesc](../models/AscDescDefaultDesc.md)                   | ❌       | The ascending (`asc`) or descending (`desc`) order to sort the results by, based on the time of the entity's tagging.                             |
| cursor     | string                                                                  | ❌       | The cursor to get the next set of results in the paginated response. If you pass an invalid value, the API only returns the first set of results. |
| entityType | [GetTaggedEntitiesEntityType](../models/GetTaggedEntitiesEntityType.md) | ❌       | Filter results for the given entity type.                                                                                                         |

**Return Type**

`GetTaggedEntities`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const direction = AscDescDefaultDesc.asc;
  const entityType = GetTaggedEntitiesEntityType.api;

  const { data } = await postmanClient.tags.getTaggedEntities('needs-review', {
    limit: 2,
    direction: direction,
    cursor: 'eyJpZCI6ODYsImVudGl0eVR5cGUiOiJhcGkifQ==',
    entityType: entityType,
  });

  console.log(data);
})();
```

## getWorkspaceTags

Gets all the tags associated with a workspace.

- HTTP Method: `GET`
- Endpoint: `/workspaces/{workspaceId}/tags`

**Parameters**

| Name        | Type   | Required | Description         |
| :---------- | :----- | :------- | :------------------ |
| workspaceId | string | ✅       | The workspace's ID. |

**Return Type**

`TagGetPut`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.tags.getWorkspaceTags('1f0df51a-8658-4ee8-a2a1-d2567dfa09a9');

  console.log(data);
})();
```

## updateWorkspaceTags

Updates a workspace's associated tags. This endpoint replaces all existing tags with those you pass in the request body.

- HTTP Method: `PUT`
- Endpoint: `/workspaces/{workspaceId}/tags`

**Parameters**

| Name        | Type                                        | Required | Description         |
| :---------- | :------------------------------------------ | :------- | :------------------ |
| body        | [TagUpdateTags](../models/TagUpdateTags.md) | ❌       | The request body.   |
| workspaceId | string                                      | ✅       | The workspace's ID. |

**Return Type**

`TagGetPut`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, TagUpdateTags } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const tagUpdateTagsTags: TagUpdateTagsTags = {
    slug: 'needs-review',
  };

  const input: TagUpdateTags = {
    tags: [tagUpdateTagsTags],
  };

  const { data } = await postmanClient.tags.updateWorkspaceTags('1f0df51a-8658-4ee8-a2a1-d2567dfa09a9', input);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
