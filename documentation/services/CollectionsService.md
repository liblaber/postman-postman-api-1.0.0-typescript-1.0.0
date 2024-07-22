# CollectionsService

A list of all methods in the `CollectionsService` service. Click on the method name to view detailed information about that method.

| Methods                                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| :------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getCollections](#getcollections)                             | Gets all of your [collections](https://www.getpostman.com/docs/collections). The response includes all of your subscribed collections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [createCollection](#createcollection)                         | Creates a collection using the [Postman Collection v2 schema format](https://schema.postman.com/json/collection/v2.1.0/docs/index.html). For more information about the Collection Format, see the [Postman Collection Format documentation](https://learning.postman.com/collection-format/getting-started/overview/). **Note:** - For a complete list of available property values for this endpoint, use the following references available in the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json): - `info` object — Use the `definitions.info` entry. - `item` object — Use the `definitions.items` entry. - For all other possible values, refer to the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json).                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [createCollectionFork](#createcollectionfork)                 | Creates a [fork](https://learning.postman.com/docs/collaborating-in-postman/version-control/#creating-a-fork) from an existing collection into a workspace.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [mergeCollectionFork](#mergecollectionfork)                   | Merges a forked collection back into its parent collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [getCollection](#getcollection)                               | Gets information about a collection. For a complete list of this endpoint's possible values, use the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [putCollection](#putcollection)                               | Replaces the contents of a collection using the [Postman Collection v2 schema format](https://schema.postman.com/json/collection/v2.1.0/docs/index.html). Include the collection's ID values in the request body. If you do not, the endpoint removes the existing items and creates new items. > The maximum collection size this endpoint accepts cannot exceed 20 MB. For a complete list of available property values for this endpoint, use the following references available in the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json): - `info` object — Use `../definitions/info"`. - `item` object — Use `../definitions/item"`. For all other possible values, refer to the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json). For more information about the Collection Format, see the [Postman Collection Format documentation](https://learning.postman.com/collection-format/getting-started/overview/). **Note:** To copy another collection's contents to the given collection, remove all ID values before you pass it in this endpoint. If you do not, this endpoint returns an error. These values include the `id`, `uid`, and `postman_id` values. |
| [patchCollection](#patchcollection)                           | Updates specific collection information, such as its name, events, or its variables. For more information about the `auth`, `variables`, and `events` properties, refer to the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json): - For `variables`, refer to `../definitions/variable"`. - For `auth`, refer to `../definitions/auth-attribute"`. - For `events`, refer to `../definitions/event"`. For more information about the Collection Format, see the [Postman Collection Format documentation](https://learning.postman.com/collection-format/getting-started/overview/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [deleteCollection](#deletecollection)                         | Deletes a collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [getCollectionsForkedByUser](#getcollectionsforkedbyuser)     | Gets a list of all the authenticated user's forked collections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [getCollectionComments](#getcollectioncomments)               | Gets all comments left by users in a collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [createCollectionComment](#createcollectioncomment)           | Creates a comment on a collection. **Note:** This endpoint accepts a max of 10,000 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [updateCollectionComment](#updatecollectioncomment)           | Updates a comment on a collection. **Note:** This endpoint accepts a max of 10,000 characters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [deleteCollectionComment](#deletecollectioncomment)           | Deletes a comment from a collection. On success, this returns an HTTP `204 No Content` response **Note:** Deleting the first comment of a thread deletes all the comments in the thread.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [getCollectionForks](#getcollectionforks)                     | Gets a collection's forked collections. The response returns data for each fork, such as the fork's ID, the user who forked it, and the fork's creation date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [pullCollectionChanges](#pullcollectionchanges)               | Pulls the changes from a parent (source) collection into the forked collection. In the endpoint's response: - The `destinationId` is the ID of the forked collection. - The `sourceId` is the ID of the source collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [getCollectionPullRequests](#getcollectionpullrequests)       | Gets information about a collection's pull requests, such as the source and destination IDs, status of the pull requests, and a URL link to the pull requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [createCollectionPullRequest](#createcollectionpullrequest)   | Creates a pull request for a forked collection into its parent collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [getCollectionRoles](#getcollectionroles)                     | Gets information about all roles in a collection. The response returns the IDs of all users, teams, and groups with access to view or edit the collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [updateCollectionRoles](#updatecollectionroles)               | Updates the roles of users, groups, or teams in a collection. On success, this returns a `204 No Content` response. **Note:** - Only users assigned the EDITOR [role](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#collection-roles) in the collection can use this endpoint. - This endpoint does not support the external [Partner or Guest roles](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [getSourceCollectionStatus](#getsourcecollectionstatus)       | Checks whether there is a change between the forked collection and its parent (source) collection. If the value of the `isSourceAhead` property is `true` in the response, then there is a difference between the forked collection and its source collection. **Note:** This endpoint may take a few minutes to return an updated `isSourceAhead` status.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [transformCollectionToOpenAPI](#transformcollectiontoopenapi) | Transforms an existing Postman Collection into a stringified OpenAPI definition. **Note:** This does not create an API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [transferCollectionFolders](#transfercollectionfolders)       | Copies or moves folders into a collection or folder.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [transferCollectionRequests](#transfercollectionrequests)     | Copies or moves requests into a collection or folder.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [transferCollectionResponses](#transfercollectionresponses)   | Copies or moves responses into a request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## getCollections

Gets all of your [collections](https://www.getpostman.com/docs/collections). The response includes all of your subscribed collections.

- HTTP Method: `GET`
- Endpoint: `/collections`

**Parameters**

| Name      | Type   | Required | Description                                              |
| :-------- | :----- | :------- | :------------------------------------------------------- |
| workspace | string | ❌       | The workspace's ID.                                      |
| name      | string | ❌       | Filter results by collections that match the given name. |

**Return Type**

`GetCollections`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.collections.getCollections({
    workspace: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    name: 'Test Collection',
  });

  console.log(data);
})();
```

## createCollection

Creates a collection using the [Postman Collection v2 schema format](https://schema.postman.com/json/collection/v2.1.0/docs/index.html). For more information about the Collection Format, see the [Postman Collection Format documentation](https://learning.postman.com/collection-format/getting-started/overview/). **Note:** - For a complete list of available property values for this endpoint, use the following references available in the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json): - `info` object — Use the `definitions.info` entry. - `item` object — Use the `definitions.items` entry. - For all other possible values, refer to the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json).

- HTTP Method: `POST`
- Endpoint: `/collections`

**Parameters**

| Name      | Type                                                                                  | Required | Description         |
| :-------- | :------------------------------------------------------------------------------------ | :------- | :------------------ |
| body      | [CollectionsCreateCollectionRequest](../models/CollectionsCreateCollectionRequest.md) | ❌       | The request body.   |
| workspace | string                                                                                | ❌       | The workspace's ID. |

**Return Type**

`CreateCollectionOkResponse`

**Example Usage Code Snippet**

```typescript
import { CollectionsCreateCollectionRequest, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const collectionInfo1: CollectionInfo1 = {
    name: 'Test Collection',
    schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
  };

  const collectionItem: CollectionItem = {
    request: {},
  };

  const createCollectionCollection1: CreateCollectionCollection1 = {
    info: collectionInfo1,
    item: [collectionItem],
  };

  const input: CollectionsCreateCollectionRequest = {
    collection: createCollectionCollection1,
  };

  const { data } = await postmanClient.collections.createCollection(input, {
    workspace: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
  });

  console.log(data);
})();
```

## createCollectionFork

Creates a [fork](https://learning.postman.com/docs/collaborating-in-postman/version-control/#creating-a-fork) from an existing collection into a workspace.

- HTTP Method: `POST`
- Endpoint: `/collections/fork/{collectionId}`

**Parameters**

| Name         | Type                                                                    | Required | Description                                   |
| :----------- | :---------------------------------------------------------------------- | :------- | :-------------------------------------------- |
| body         | [CreateCollectionForkRequest](../models/CreateCollectionForkRequest.md) | ❌       | The request body.                             |
| collectionId | string                                                                  | ✅       | The collection's ID.                          |
| workspace    | string                                                                  | ✅       | The workspace ID in which to create the fork. |

**Return Type**

`CreateCollectionForkOkResponse`

**Example Usage Code Snippet**

```typescript
import { CreateCollectionForkRequest, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const input: CreateCollectionForkRequest = {
    label: 'Test Fork',
  };

  const { data } = await postmanClient.collections.createCollectionFork('12ece9e1-2abf-4edc-8e34-de66e74114d2', input, {
    workspace: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
  });

  console.log(data);
})();
```

## mergeCollectionFork

Merges a forked collection back into its parent collection.

- HTTP Method: `POST`
- Endpoint: `/collections/merge`

**Parameters**

| Name | Type                                                                  | Required | Description       |
| :--- | :-------------------------------------------------------------------- | :------- | :---------------- |
| body | [MergeCollectionForkRequest](../models/MergeCollectionForkRequest.md) | ❌       | The request body. |

**Return Type**

`MergeCollectionForkOkResponse`

**Example Usage Code Snippet**

```typescript
import { MergeCollectionForkRequest, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const strategy = Strategy.DELETESOURCE;

  const input: MergeCollectionForkRequest = {
    destination: '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    source: '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    strategy: strategy,
  };

  const { data } = await postmanClient.collections.mergeCollectionFork(input);

  console.log(data);
})();
```

## getCollection

Gets information about a collection. For a complete list of this endpoint's possible values, use the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json).

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}`

**Parameters**

| Name         | Type                                                  | Required | Description                                                                                                                                                      |
| :----------- | :---------------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| collectionId | string                                                | ✅       | The collection's ID.                                                                                                                                             |
| accessKey    | string                                                | ❌       | A collection's read-only access key. Using this query parameter does not require an API key to call the endpoint.                                                |
| model        | [GetCollectionModel](../models/GetCollectionModel.md) | ❌       | Return a list of only the collection's root-level request (`rootLevelRequests`) and folder (`rootLevelFolders`) IDs instead of the full collection element data. |

**Return Type**

`GetCollection`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const model = GetCollectionModel.MINIMAL;

  const { data } = await postmanClient.collections.getCollection('12ece9e1-2abf-4edc-8e34-de66e74114d2', {
    accessKey: 'PMAT-XXXXXXXXXXXXXXXXXXXXXXXXXX',
    model: model,
  });

  console.log(data);
})();
```

## putCollection

Replaces the contents of a collection using the [Postman Collection v2 schema format](https://schema.postman.com/json/collection/v2.1.0/docs/index.html). Include the collection's ID values in the request body. If you do not, the endpoint removes the existing items and creates new items. > The maximum collection size this endpoint accepts cannot exceed 20 MB. For a complete list of available property values for this endpoint, use the following references available in the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json): - `info` object — Use `../definitions/info"`. - `item` object — Use `../definitions/item"`. For all other possible values, refer to the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json). For more information about the Collection Format, see the [Postman Collection Format documentation](https://learning.postman.com/collection-format/getting-started/overview/). **Note:** To copy another collection's contents to the given collection, remove all ID values before you pass it in this endpoint. If you do not, this endpoint returns an error. These values include the `id`, `uid`, and `postman_id` values.

- HTTP Method: `PUT`
- Endpoint: `/collections/{collectionId}`

**Parameters**

| Name         | Type                                                      | Required | Description          |
| :----------- | :-------------------------------------------------------- | :------- | :------------------- |
| body         | [PutCollectionRequest](../models/PutCollectionRequest.md) | ❌       | The request body.    |
| collectionId | string                                                    | ✅       | The collection's ID. |

**Return Type**

`PutCollectionOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, PutCollectionRequest } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const putCollectionCollection1: PutCollectionCollection1 = {
    info: {},
    item: [{}],
  };

  const input: PutCollectionRequest = {
    collection: putCollectionCollection1,
  };

  const { data } = await postmanClient.collections.putCollection('12ece9e1-2abf-4edc-8e34-de66e74114d2', input);

  console.log(data);
})();
```

## patchCollection

Updates specific collection information, such as its name, events, or its variables. For more information about the `auth`, `variables`, and `events` properties, refer to the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json): - For `variables`, refer to `../definitions/variable"`. - For `auth`, refer to `../definitions/auth-attribute"`. - For `events`, refer to `../definitions/event"`. For more information about the Collection Format, see the [Postman Collection Format documentation](https://learning.postman.com/collection-format/getting-started/overview/).

- HTTP Method: `PATCH`
- Endpoint: `/collections/{collectionId}`

**Parameters**

| Name         | Type                                                          | Required | Description          |
| :----------- | :------------------------------------------------------------ | :------- | :------------------- |
| body         | [PatchCollectionRequest](../models/PatchCollectionRequest.md) | ❌       | The request body.    |
| collectionId | string                                                        | ✅       | The collection's ID. |

**Return Type**

`PatchCollectionOkResponse`

**Example Usage Code Snippet**

```typescript
import { PatchCollectionRequest, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const collectionInfo2: CollectionInfo2 = {
    name: 'Test Collection v2',
    description:
      'This collection makes a request to the Postman Echo service to get a list of request headers sent by an HTTP client.',
  };

  const patchCollectionCollection1: PatchCollectionCollection1 = {
    info: collectionInfo2,
    variables: {},
    auth: {},
    events: {},
  };

  const input: PatchCollectionRequest = {
    collection: patchCollectionCollection1,
  };

  const { data } = await postmanClient.collections.patchCollection('12ece9e1-2abf-4edc-8e34-de66e74114d2', input);

  console.log(data);
})();
```

## deleteCollection

Deletes a collection.

- HTTP Method: `DELETE`
- Endpoint: `/collections/{collectionId}`

**Parameters**

| Name         | Type   | Required | Description          |
| :----------- | :----- | :------- | :------------------- |
| collectionId | string | ✅       | The collection's ID. |

**Return Type**

`DeleteCollection`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.collections.deleteCollection('12ece9e1-2abf-4edc-8e34-de66e74114d2');

  console.log(data);
})();
```

## getCollectionsForkedByUser

Gets a list of all the authenticated user's forked collections.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/collection-forks`

**Parameters**

| Name         | Type                            | Required | Description                                                                                                                                |
| :----------- | :------------------------------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| collectionId | string                          | ✅       | The collection's ID.                                                                                                                       |
| cursor       | string                          | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |
| limit        | number                          | ❌       | The maximum number of rows to return in the response.                                                                                      |
| direction    | [AscDesc](../models/AscDesc.md) | ❌       | Sort the results by creation date in ascending (`asc`) or descending (`desc`) order.                                                       |

**Return Type**

`GetCollectionsForkedByUser`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const direction = AscDesc.ASC;

  const { data } = await postmanClient.collections.getCollectionsForkedByUser('12ece9e1-2abf-4edc-8e34-de66e74114d2', {
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    limit: 10,
    direction: direction,
  });

  console.log(data);
})();
```

## getCollectionComments

Gets all comments left by users in a collection.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/comments`

**Parameters**

| Name         | Type   | Required | Description                 |
| :----------- | :----- | :------- | :-------------------------- |
| collectionId | string | ✅       | The collection's unique ID. |

**Return Type**

`CommentResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.collections.getCollectionComments(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
  );

  console.log(data);
})();
```

## createCollectionComment

Creates a comment on a collection. **Note:** This endpoint accepts a max of 10,000 characters.

- HTTP Method: `POST`
- Endpoint: `/collections/{collectionId}/comments`

**Parameters**

| Name         | Type                                                    | Required | Description                 |
| :----------- | :------------------------------------------------------ | :------- | :-------------------------- |
| body         | [CommentCreateUpdate](../models/CommentCreateUpdate.md) | ✅       | The request body.           |
| collectionId | string                                                  | ✅       | The collection's unique ID. |

**Return Type**

`CommentCreatedUpdated`

**Example Usage Code Snippet**

```typescript
import { CommentCreateUpdate, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const userNameType = UserNameType.USER;

  const userName: UserName = {
    type: userNameType,
    id: 87654321,
  };

  const commentCreateUpdateTags: CommentCreateUpdateTags = {
    userName: userName,
  };

  const input: CommentCreateUpdate = {
    body: 'This is an example.',
    tags: commentCreateUpdateTags,
  };

  const { data } = await postmanClient.collections.createCollectionComment(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    input,
  );

  console.log(data);
})();
```

## updateCollectionComment

Updates a comment on a collection. **Note:** This endpoint accepts a max of 10,000 characters.

- HTTP Method: `PUT`
- Endpoint: `/collections/{collectionId}/comments/{commentId}`

**Parameters**

| Name         | Type                                                    | Required | Description                 |
| :----------- | :------------------------------------------------------ | :------- | :-------------------------- |
| body         | [CommentCreateUpdate](../models/CommentCreateUpdate.md) | ✅       | The request body.           |
| collectionId | string                                                  | ✅       | The collection's unique ID. |
| commentId    | number                                                  | ✅       | The comment's ID.           |

**Return Type**

`CommentCreatedUpdated`

**Example Usage Code Snippet**

```typescript
import { CommentCreateUpdate, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const userNameType = UserNameType.USER;

  const userName: UserName = {
    type: userNameType,
    id: 87654321,
  };

  const commentCreateUpdateTags: CommentCreateUpdateTags = {
    userName: userName,
  };

  const input: CommentCreateUpdate = {
    body: 'This is an example.',
    tags: commentCreateUpdateTags,
  };

  const { data } = await postmanClient.collections.updateCollectionComment(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    46814,
    input,
  );

  console.log(data);
})();
```

## deleteCollectionComment

Deletes a comment from a collection. On success, this returns an HTTP `204 No Content` response **Note:** Deleting the first comment of a thread deletes all the comments in the thread.

- HTTP Method: `DELETE`
- Endpoint: `/collections/{collectionId}/comments/{commentId}`

**Parameters**

| Name         | Type   | Required | Description                 |
| :----------- | :----- | :------- | :-------------------------- |
| collectionId | string | ✅       | The collection's unique ID. |
| commentId    | number | ✅       | The comment's ID.           |

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.collections.deleteCollectionComment(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    46814,
  );

  console.log(data);
})();
```

## getCollectionForks

Gets a collection's forked collections. The response returns data for each fork, such as the fork's ID, the user who forked it, and the fork's creation date.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/forks`

**Parameters**

| Name         | Type                            | Required | Description                                                                                                                                |
| :----------- | :------------------------------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| collectionId | string                          | ✅       | The collection's ID.                                                                                                                       |
| cursor       | string                          | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |
| limit        | number                          | ❌       | The maximum number of rows to return in the response.                                                                                      |
| direction    | [AscDesc](../models/AscDesc.md) | ❌       | Sort the results by creation date in ascending (`asc`) or descending (`desc`) order.                                                       |

**Return Type**

`GetCollectionForks`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const direction = AscDesc.ASC;

  const { data } = await postmanClient.collections.getCollectionForks('12ece9e1-2abf-4edc-8e34-de66e74114d2', {
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    limit: 10,
    direction: direction,
  });

  console.log(data);
})();
```

## pullCollectionChanges

Pulls the changes from a parent (source) collection into the forked collection. In the endpoint's response: - The `destinationId` is the ID of the forked collection. - The `sourceId` is the ID of the source collection.

- HTTP Method: `PUT`
- Endpoint: `/collections/{collectionId}/pulls`

**Parameters**

| Name         | Type   | Required | Description          |
| :----------- | :----- | :------- | :------------------- |
| collectionId | string | ✅       | The collection's ID. |

**Return Type**

`PullCollectionChanges`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.collections.pullCollectionChanges('12ece9e1-2abf-4edc-8e34-de66e74114d2');

  console.log(data);
})();
```

## getCollectionPullRequests

Gets information about a collection's pull requests, such as the source and destination IDs, status of the pull requests, and a URL link to the pull requests.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/pull-requests`

**Parameters**

| Name         | Type   | Required | Description                 |
| :----------- | :----- | :------- | :-------------------------- |
| collectionId | string | ✅       | The collection's unique ID. |

**Return Type**

`GetCollectionPullRequests`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.collections.getCollectionPullRequests(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
  );

  console.log(data);
})();
```

## createCollectionPullRequest

Creates a pull request for a forked collection into its parent collection.

- HTTP Method: `POST`
- Endpoint: `/collections/{collectionId}/pull-requests`

**Parameters**

| Name         | Type                                                | Required | Description                 |
| :----------- | :-------------------------------------------------- | :------- | :-------------------------- |
| body         | [PullRequestCreate](../models/PullRequestCreate.md) | ❌       | The request body.           |
| collectionId | string                                              | ✅       | The collection's unique ID. |

**Return Type**

`PullRequestCreated`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, PullRequestCreate } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const input: PullRequestCreate = {
    title: 'Test PR',
    description: 'This is a test pull request.',
    reviewers: ['87654321'],
    destinationId: '12345678-ec548788-unftw-rgn8-83b8-0b59798648e4',
  };

  const { data } = await postmanClient.collections.createCollectionPullRequest(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    input,
  );

  console.log(data);
})();
```

## getCollectionRoles

Gets information about all roles in a collection. The response returns the IDs of all users, teams, and groups with access to view or edit the collection.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/roles`

**Parameters**

| Name         | Type   | Required | Description          |
| :----------- | :----- | :------- | :------------------- |
| collectionId | string | ✅       | The collection's ID. |

**Return Type**

`GetCollectionRoles`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.collections.getCollectionRoles('12ece9e1-2abf-4edc-8e34-de66e74114d2');

  console.log(data);
})();
```

## updateCollectionRoles

Updates the roles of users, groups, or teams in a collection. On success, this returns a `204 No Content` response. **Note:** - Only users assigned the EDITOR [role](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#collection-roles) in the collection can use this endpoint. - This endpoint does not support the external [Partner or Guest roles](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles).

- HTTP Method: `PATCH`
- Endpoint: `/collections/{collectionId}/roles`

**Parameters**

| Name         | Type                                                        | Required | Description          |
| :----------- | :---------------------------------------------------------- | :------- | :------------------- |
| body         | [UpdateCollectionRoles](../models/UpdateCollectionRoles.md) | ❌       | The request body.    |
| collectionId | string                                                      | ✅       | The collection's ID. |

**Example Usage Code Snippet**

```typescript
import { PostmanClient, UpdateCollectionRoles } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const rolesOp = RolesOp.UPDATE;

  const rolesPath1 = RolesPath1._USER;

  const valueRole1 = ValueRole1.VIEWER;

  const rolesValue1: RolesValue1 = {
    id: 12345678,
    role: valueRole1,
  };

  const updateCollectionRolesRoles: UpdateCollectionRolesRoles = {
    op: rolesOp,
    path: rolesPath1,
    value: [rolesValue1],
  };

  const input: UpdateCollectionRoles = {
    roles: [updateCollectionRolesRoles],
  };

  const { data } = await postmanClient.collections.updateCollectionRoles('12ece9e1-2abf-4edc-8e34-de66e74114d2', input);

  console.log(data);
})();
```

## getSourceCollectionStatus

Checks whether there is a change between the forked collection and its parent (source) collection. If the value of the `isSourceAhead` property is `true` in the response, then there is a difference between the forked collection and its source collection. **Note:** This endpoint may take a few minutes to return an updated `isSourceAhead` status.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/source-status`

**Parameters**

| Name         | Type   | Required | Description          |
| :----------- | :----- | :------- | :------------------- |
| collectionId | string | ✅       | The collection's ID. |

**Return Type**

`GetSourceCollectionStatus`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.collections.getSourceCollectionStatus('12ece9e1-2abf-4edc-8e34-de66e74114d2');

  console.log(data);
})();
```

## transformCollectionToOpenAPI

Transforms an existing Postman Collection into a stringified OpenAPI definition. **Note:** This does not create an API.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/transformations`

**Parameters**

| Name         | Type                          | Required | Description                                        |
| :----------- | :---------------------------- | :------- | :------------------------------------------------- |
| collectionId | string                        | ✅       | The collection's ID.                               |
| format       | [Format](../models/Format.md) | ❌       | Return the OpenAPI definition in the given format. |

**Return Type**

`TransformCollectionToOpenApi`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const format = Format.JSON;

  const { data } = await postmanClient.collections.transformCollectionToOpenApi(
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    {
      format: format,
    },
  );

  console.log(data);
})();
```

## transferCollectionFolders

Copies or moves folders into a collection or folder.

- HTTP Method: `POST`
- Endpoint: `/collection-folders-transfers`

**Parameters**

| Name | Type                                                            | Required | Description       |
| :--- | :-------------------------------------------------------------- | :------- | :---------------- |
| body | [TransferCollectionItems](../models/TransferCollectionItems.md) | ❌       | The request body. |

**Return Type**

`TransferCollectionItems200Error`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, TransferCollectionItems } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const mode = Mode.COPY;

  const targetModel = TargetModel.COLLECTION;

  const target: Target = {
    id: '12345678-b91270fa-048d-4f5f-a033-8b5523bf053f',
    model: targetModel,
  };

  const position = Position.START;

  const location: Location = {
    id: '12345678-80812b16-ac27-45b3-b3eb-793f78530d32',
    model: 'response',
    position: position,
  };

  const input: TransferCollectionItems = {
    ids: ['12345678-a9b481c1-3e78-4af7-8db0-dce3f3f3c105'],
    mode: mode,
    target: target,
    location: location,
  };

  const { data } = await postmanClient.collections.transferCollectionFolders(input);

  console.log(data);
})();
```

## transferCollectionRequests

Copies or moves requests into a collection or folder.

- HTTP Method: `POST`
- Endpoint: `/collection-requests-transfers`

**Parameters**

| Name | Type                                                            | Required | Description       |
| :--- | :-------------------------------------------------------------- | :------- | :---------------- |
| body | [TransferCollectionItems](../models/TransferCollectionItems.md) | ❌       | The request body. |

**Return Type**

`TransferCollectionItems200Error`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, TransferCollectionItems } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const mode = Mode.COPY;

  const targetModel = TargetModel.COLLECTION;

  const target: Target = {
    id: '12345678-b91270fa-048d-4f5f-a033-8b5523bf053f',
    model: targetModel,
  };

  const position = Position.START;

  const location: Location = {
    id: '12345678-80812b16-ac27-45b3-b3eb-793f78530d32',
    model: 'response',
    position: position,
  };

  const input: TransferCollectionItems = {
    ids: ['12345678-a9b481c1-3e78-4af7-8db0-dce3f3f3c105'],
    mode: mode,
    target: target,
    location: location,
  };

  const { data } = await postmanClient.collections.transferCollectionRequests(input);

  console.log(data);
})();
```

## transferCollectionResponses

Copies or moves responses into a request.

- HTTP Method: `POST`
- Endpoint: `/collection-responses-transfers`

**Parameters**

| Name | Type                                                            | Required | Description       |
| :--- | :-------------------------------------------------------------- | :------- | :---------------- |
| body | [TransferCollectionItems](../models/TransferCollectionItems.md) | ❌       | The request body. |

**Return Type**

`TransferCollectionItems200Error`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, TransferCollectionItems } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const mode = Mode.COPY;

  const targetModel = TargetModel.COLLECTION;

  const target: Target = {
    id: '12345678-b91270fa-048d-4f5f-a033-8b5523bf053f',
    model: targetModel,
  };

  const position = Position.START;

  const location: Location = {
    id: '12345678-80812b16-ac27-45b3-b3eb-793f78530d32',
    model: 'response',
    position: position,
  };

  const input: TransferCollectionItems = {
    ids: ['12345678-a9b481c1-3e78-4af7-8db0-dce3f3f3c105'],
    mode: mode,
    target: target,
    location: location,
  };

  const { data } = await postmanClient.collections.transferCollectionResponses(input);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
