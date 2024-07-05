# CollectionResponsesService

A list of all methods in the `CollectionResponsesService` service. Click on the method name to view detailed information about that method.

| Methods                                         | Description                                                                                                                                                                            |
| :---------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getResponseComments](#getresponsecomments)     | Gets all comments left by users in a response.                                                                                                                                         |
| [createResponseComment](#createresponsecomment) | Creates a comment on a response. **Note:** This endpoint accepts a max of 10,000 characters.                                                                                           |
| [updateResponseComment](#updateresponsecomment) | Updates a comment on a response. **Note:** This endpoint accepts a max of 10,000 characters.                                                                                           |
| [deleteResponseComment](#deleteresponsecomment) | Deletes a comment from a response. On success, this returns an HTTP `204 No Content` response **Note:** Deleting the first comment of a thread deletes all the comments in the thread. |

## getResponseComments

Gets all comments left by users in a response.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/responses/{responseId}/comments`

**Parameters**

| Name         | Type   | Required | Description                 |
| :----------- | :----- | :------- | :-------------------------- |
| collectionId | string | ✅       | The collection's unique ID. |
| responseId   | string | ✅       | The response's unique ID.   |

**Return Type**

`CommentResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.collectionResponses.getResponseComments(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    '12345678-cc364734-7dfd-4bfc-897d-be763dcdbb07',
  );

  console.log(data);
})();
```

## createResponseComment

Creates a comment on a response. **Note:** This endpoint accepts a max of 10,000 characters.

- HTTP Method: `POST`
- Endpoint: `/collections/{collectionId}/responses/{responseId}/comments`

**Parameters**

| Name         | Type                                                    | Required | Description                 |
| :----------- | :------------------------------------------------------ | :------- | :-------------------------- |
| body         | [CommentCreateUpdate](../models/CommentCreateUpdate.md) | ✅       | The request body.           |
| collectionId | string                                                  | ✅       | The collection's unique ID. |
| responseId   | string                                                  | ✅       | The response's unique ID.   |

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

  const { data } = await postmanClient.collectionResponses.createResponseComment(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    '12345678-cc364734-7dfd-4bfc-897d-be763dcdbb07',
    input,
  );

  console.log(data);
})();
```

## updateResponseComment

Updates a comment on a response. **Note:** This endpoint accepts a max of 10,000 characters.

- HTTP Method: `PUT`
- Endpoint: `/collections/{collectionId}/responses/{responseId}/comments/{commentId}`

**Parameters**

| Name         | Type                                                    | Required | Description                 |
| :----------- | :------------------------------------------------------ | :------- | :-------------------------- |
| body         | [CommentCreateUpdate](../models/CommentCreateUpdate.md) | ✅       | The request body.           |
| collectionId | string                                                  | ✅       | The collection's unique ID. |
| responseId   | string                                                  | ✅       | The response's unique ID.   |
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

  const { data } = await postmanClient.collectionResponses.updateResponseComment(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    '12345678-cc364734-7dfd-4bfc-897d-be763dcdbb07',
    46814,
    input,
  );

  console.log(data);
})();
```

## deleteResponseComment

Deletes a comment from a response. On success, this returns an HTTP `204 No Content` response **Note:** Deleting the first comment of a thread deletes all the comments in the thread.

- HTTP Method: `DELETE`
- Endpoint: `/collections/{collectionId}/responses/{responseId}/comments/{commentId}`

**Parameters**

| Name         | Type   | Required | Description                 |
| :----------- | :----- | :------- | :-------------------------- |
| collectionId | string | ✅       | The collection's unique ID. |
| responseId   | string | ✅       | The response's unique ID.   |
| commentId    | number | ✅       | The comment's ID.           |

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.collectionResponses.deleteResponseComment(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    '12345678-cc364734-7dfd-4bfc-897d-be763dcdbb07',
    46814,
  );

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
