# CollectionItemsService

A list of all methods in the `CollectionItemsService` service. Click on the method name to view detailed information about that method.

| Methods                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :---------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [createCollectionFolder](#createcollectionfolder)     | Creates a folder in a collection. For a complete list of properties, refer to "Folder" in the [collection.json schema file](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json). You can use this endpoint to to import requests and responses into a newly-created folder. To do this, include the `requests` field and the list of request objects in the request body. For more information, see the provided example. **Note:** It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a folder with a blank name. |
| [createCollectionRequest](#createcollectionrequest)   | Creates a request in a collection. For a complete list of properties, see the [Collection Format Request documentation](https://learning.postman.com/collection-format/reference/request/). **Note:** It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a request with a blank name.                                                                                                                                                                                                                                                      |
| [createCollectionResponse](#createcollectionresponse) | Creates a request response in a collection. For a complete list of request body properties, see the [Collection Format Response documentation](https://learning.postman.com/collection-format/reference/response/#reference-diagram). **Note:** It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a response with a blank name.                                                                                                                                                                                                           |
| [getCollectionFolder](#getcollectionfolder)           | Gets information about a folder in a collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [updateCollectionFolder](#updatecollectionfolder)     | Updates a folder in a collection. For a complete list of properties, refer to "Folder" in the [collection.json schema file](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json). **Note:** This endpoint acts like a PATCH method. It only updates the values that you pass in the request body (for example, the `name` property). The endpoint does not update the entire resource.                                                                                                                                                                                                                           |
| [deleteCollectionFolder](#deletecollectionfolder)     | Deletes a folder in a collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [getCollectionRequest](#getcollectionrequest)         | Gets information about a request in a collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [updateCollectionRequest](#updatecollectionrequest)   | Updates a request in a collection. For a complete list of properties, see the [Collection Format Request documentation](https://learning.postman.com/collection-format/reference/request/). **Note:** - You must pass a collection ID (`12ece9e1-2abf-4edc-8e34-de66e74114d2`), not a collection(`12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2`), in this endpoint. - This endpoint does not support changing the folder of a request.                                                                                                                                                                                                 |
| [deleteCollectionRequest](#deletecollectionrequest)   | Deletes a request in a collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [getCollectionResponse](#getcollectionresponse)       | Gets information about a response in a collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [updateCollectionResponse](#updatecollectionresponse) | Updates a response in a collection. For a complete list of properties, see the [Collection Format Response documentation](https://learning.postman.com/collection-format/reference/response/#reference-diagram). **Note:** - You must pass a collection ID (`12ece9e1-2abf-4edc-8e34-de66e74114d2`), not a collection UID (`12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2`), in this endpoint. - This endpoint acts like a PATCH method. It only updates the values that you pass in the request body (for example, the `name` property). The endpoint does not update the entire resource.                                             |
| [deleteCollectionResponse](#deletecollectionresponse) | Deletes a response in a collection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## createCollectionFolder

Creates a folder in a collection. For a complete list of properties, refer to "Folder" in the [collection.json schema file](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json). You can use this endpoint to to import requests and responses into a newly-created folder. To do this, include the `requests` field and the list of request objects in the request body. For more information, see the provided example. **Note:** It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a folder with a blank name.

- HTTP Method: `POST`
- Endpoint: `/collections/{collectionId}/folders`

**Parameters**

| Name         | Type   | Required | Description          |
| :----------- | :----- | :------- | :------------------- |
| body         | any    | ❌       | The request body.    |
| collectionId | string | ✅       | The collection's ID. |

**Return Type**

`CreateCollectionFolder`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const input = {};

  const { data } = await postmanClient.collectionItems.createCollectionFolder(
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    input,
  );

  console.log(data);
})();
```

## createCollectionRequest

Creates a request in a collection. For a complete list of properties, see the [Collection Format Request documentation](https://learning.postman.com/collection-format/reference/request/). **Note:** It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a request with a blank name.

- HTTP Method: `POST`
- Endpoint: `/collections/{collectionId}/requests`

**Parameters**

| Name         | Type   | Required | Description                                                                                                           |
| :----------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------- |
| body         | any    | ❌       | The request body.                                                                                                     |
| collectionId | string | ✅       | The collection's ID.                                                                                                  |
| folderId     | string | ❌       | The folder ID in which to create the request. By default, the system will create the request at the collection level. |

**Return Type**

`CreateCollectionRequestOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const input = {};

  const { data } = await postmanClient.collectionItems.createCollectionRequest(
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    input,
    {
      folderId: '65a99e60-8e0a-4b6e-b79c-7d8264cc5caa',
    },
  );

  console.log(data);
})();
```

## createCollectionResponse

Creates a request response in a collection. For a complete list of request body properties, see the [Collection Format Response documentation](https://learning.postman.com/collection-format/reference/response/#reference-diagram). **Note:** It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a response with a blank name.

- HTTP Method: `POST`
- Endpoint: `/collections/{collectionId}/responses`

**Parameters**

| Name         | Type   | Required | Description              |
| :----------- | :----- | :------- | :----------------------- |
| body         | any    | ❌       | The request body.        |
| collectionId | string | ✅       | The collection's ID.     |
| requestId    | string | ✅       | The parent request's ID. |

**Return Type**

`CreateCollectionResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const input = {};

  const { data } = await postmanClient.collectionItems.createCollectionResponse(
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    input,
    {
      requestId: 'c82dd02c-4870-4907-8fcb-593a876cf05b',
    },
  );

  console.log(data);
})();
```

## getCollectionFolder

Gets information about a folder in a collection.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/folders/{folderId}`

**Parameters**

| Name         | Type    | Required | Description                                                              |
| :----------- | :------ | :------- | :----------------------------------------------------------------------- |
| folderId     | string  | ✅       | The folder's ID.                                                         |
| collectionId | string  | ✅       | The collection's ID.                                                     |
| ids          | boolean | ❌       | If true, returns only properties that contain ID values in the response. |
| uid          | boolean | ❌       | If true, returns all IDs in UID format (`userId`-`id`).                  |
| populate     | boolean | ❌       | If true, returns all of the collection item's contents.                  |

**Return Type**

`GetCollectionFolder`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.collectionItems.getCollectionFolder(
    '65a99e60-8e0a-4b6e-b79c-7d8264cc5caa',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    {
      ids: true,
      uid: true,
      populate: true,
    },
  );

  console.log(data);
})();
```

## updateCollectionFolder

Updates a folder in a collection. For a complete list of properties, refer to "Folder" in the [collection.json schema file](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json). **Note:** This endpoint acts like a PATCH method. It only updates the values that you pass in the request body (for example, the `name` property). The endpoint does not update the entire resource.

- HTTP Method: `PUT`
- Endpoint: `/collections/{collectionId}/folders/{folderId}`

**Parameters**

| Name         | Type   | Required | Description          |
| :----------- | :----- | :------- | :------------------- |
| body         | any    | ❌       | The request body.    |
| folderId     | string | ✅       | The folder's ID.     |
| collectionId | string | ✅       | The collection's ID. |

**Return Type**

`UpdateCollectionFolder`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const input = {};

  const { data } = await postmanClient.collectionItems.updateCollectionFolder(
    '65a99e60-8e0a-4b6e-b79c-7d8264cc5caa',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    input,
  );

  console.log(data);
})();
```

## deleteCollectionFolder

Deletes a folder in a collection.

- HTTP Method: `DELETE`
- Endpoint: `/collections/{collectionId}/folders/{folderId}`

**Parameters**

| Name         | Type   | Required | Description          |
| :----------- | :----- | :------- | :------------------- |
| folderId     | string | ✅       | The folder's ID.     |
| collectionId | string | ✅       | The collection's ID. |

**Return Type**

`DeleteCollectionFolder`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.collectionItems.deleteCollectionFolder(
    '65a99e60-8e0a-4b6e-b79c-7d8264cc5caa',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
  );

  console.log(data);
})();
```

## getCollectionRequest

Gets information about a request in a collection.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/requests/{requestId}`

**Parameters**

| Name         | Type    | Required | Description                                                              |
| :----------- | :------ | :------- | :----------------------------------------------------------------------- |
| requestId    | string  | ✅       | The request's ID.                                                        |
| collectionId | string  | ✅       | The collection's ID.                                                     |
| ids          | boolean | ❌       | If true, returns only properties that contain ID values in the response. |
| uid          | boolean | ❌       | If true, returns all IDs in UID format (`userId`-`id`).                  |
| populate     | boolean | ❌       | If true, returns all of the collection item's contents.                  |

**Return Type**

`GetCollectionRequest`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.collectionItems.getCollectionRequest(
    'c82dd02c-4870-4907-8fcb-593a876cf05b',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    {
      ids: true,
      uid: true,
      populate: true,
    },
  );

  console.log(data);
})();
```

## updateCollectionRequest

Updates a request in a collection. For a complete list of properties, see the [Collection Format Request documentation](https://learning.postman.com/collection-format/reference/request/). **Note:** - You must pass a collection ID (`12ece9e1-2abf-4edc-8e34-de66e74114d2`), not a collection(`12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2`), in this endpoint. - This endpoint does not support changing the folder of a request.

- HTTP Method: `PUT`
- Endpoint: `/collections/{collectionId}/requests/{requestId}`

**Parameters**

| Name         | Type   | Required | Description          |
| :----------- | :----- | :------- | :------------------- |
| body         | any    | ❌       | The request body.    |
| requestId    | string | ✅       | The request's ID.    |
| collectionId | string | ✅       | The collection's ID. |

**Return Type**

`UpdateCollectionRequest`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const input = {};

  const { data } = await postmanClient.collectionItems.updateCollectionRequest(
    'c82dd02c-4870-4907-8fcb-593a876cf05b',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    input,
  );

  console.log(data);
})();
```

## deleteCollectionRequest

Deletes a request in a collection.

- HTTP Method: `DELETE`
- Endpoint: `/collections/{collectionId}/requests/{requestId}`

**Parameters**

| Name         | Type   | Required | Description          |
| :----------- | :----- | :------- | :------------------- |
| requestId    | string | ✅       | The request's ID.    |
| collectionId | string | ✅       | The collection's ID. |

**Return Type**

`DeleteCollectionRequest`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.collectionItems.deleteCollectionRequest(
    'c82dd02c-4870-4907-8fcb-593a876cf05b',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
  );

  console.log(data);
})();
```

## getCollectionResponse

Gets information about a response in a collection.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/responses/{responseId}`

**Parameters**

| Name         | Type    | Required | Description                                                              |
| :----------- | :------ | :------- | :----------------------------------------------------------------------- |
| responseId   | string  | ✅       | The response's ID.                                                       |
| collectionId | string  | ✅       | The collection's ID.                                                     |
| ids          | boolean | ❌       | If true, returns only properties that contain ID values in the response. |
| uid          | boolean | ❌       | If true, returns all IDs in UID format (`userId`-`id`).                  |
| populate     | boolean | ❌       | If true, returns all of the collection item's contents.                  |

**Return Type**

`GetCollectionResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.collectionItems.getCollectionResponse(
    'cc364734-7dfd-4bfc-897d-be763dcdbb07',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    {
      ids: true,
      uid: true,
      populate: true,
    },
  );

  console.log(data);
})();
```

## updateCollectionResponse

Updates a response in a collection. For a complete list of properties, see the [Collection Format Response documentation](https://learning.postman.com/collection-format/reference/response/#reference-diagram). **Note:** - You must pass a collection ID (`12ece9e1-2abf-4edc-8e34-de66e74114d2`), not a collection UID (`12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2`), in this endpoint. - This endpoint acts like a PATCH method. It only updates the values that you pass in the request body (for example, the `name` property). The endpoint does not update the entire resource.

- HTTP Method: `PUT`
- Endpoint: `/collections/{collectionId}/responses/{responseId}`

**Parameters**

| Name         | Type   | Required | Description          |
| :----------- | :----- | :------- | :------------------- |
| body         | any    | ❌       | The request body.    |
| responseId   | string | ✅       | The response's ID.   |
| collectionId | string | ✅       | The collection's ID. |

**Return Type**

`UpdateCollectionResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const input = {};

  const { data } = await postmanClient.collectionItems.updateCollectionResponse(
    'cc364734-7dfd-4bfc-897d-be763dcdbb07',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
    input,
  );

  console.log(data);
})();
```

## deleteCollectionResponse

Deletes a response in a collection.

- HTTP Method: `DELETE`
- Endpoint: `/collections/{collectionId}/responses/{responseId}`

**Parameters**

| Name         | Type   | Required | Description          |
| :----------- | :----- | :------- | :------------------- |
| responseId   | string | ✅       | The response's ID.   |
| collectionId | string | ✅       | The collection's ID. |

**Return Type**

`DeleteCollectionResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.collectionItems.deleteCollectionResponse(
    'cc364734-7dfd-4bfc-897d-be763dcdbb07',
    '12ece9e1-2abf-4edc-8e34-de66e74114d2',
  );

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
