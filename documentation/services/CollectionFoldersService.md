# CollectionFoldersService

A list of all methods in the `CollectionFoldersService` service. Click on the method name to view detailed information about that method.

| Methods                                     | Description                                                                                                                                                                          |
| :------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getFolderComments](#getfoldercomments)     | Gets all comments left by users in a folder.                                                                                                                                         |
| [createFolderComment](#createfoldercomment) | Creates a comment on a folder. **Note:** This endpoint accepts a max of 10,000 characters.                                                                                           |
| [updateFolderComment](#updatefoldercomment) | Updates a comment on a folder. **Note:** This endpoint accepts a max of 10,000 characters.                                                                                           |
| [deleteFolderComment](#deletefoldercomment) | Deletes a comment from a folder. On success, this returns an HTTP `204 No Content` response **Note:** Deleting the first comment of a thread deletes all the comments in the thread. |

## getFolderComments

Gets all comments left by users in a folder.

- HTTP Method: `GET`
- Endpoint: `/collections/{collectionId}/folders/{folderId}/comments`

**Parameters**

| Name         | Type   | Required | Description                 |
| :----------- | :----- | :------- | :-------------------------- |
| collectionId | string | ✅       | The collection's unique ID. |
| folderId     | string | ✅       | The folder's unique ID.     |

**Return Type**

`CommentResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.collectionFolders.getFolderComments(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    '12345678-65a99e60-8e0a-4b6e-b79c-7d8264cc5caa',
  );

  console.log(data);
})();
```

## createFolderComment

Creates a comment on a folder. **Note:** This endpoint accepts a max of 10,000 characters.

- HTTP Method: `POST`
- Endpoint: `/collections/{collectionId}/folders/{folderId}/comments`

**Parameters**

| Name         | Type                                                    | Required | Description                 |
| :----------- | :------------------------------------------------------ | :------- | :-------------------------- |
| body         | [CommentCreateUpdate](../models/CommentCreateUpdate.md) | ✅       | The request body.           |
| collectionId | string                                                  | ✅       | The collection's unique ID. |
| folderId     | string                                                  | ✅       | The folder's unique ID.     |

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

  const { data } = await postmanClient.collectionFolders.createFolderComment(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    '12345678-65a99e60-8e0a-4b6e-b79c-7d8264cc5caa',
    input,
  );

  console.log(data);
})();
```

## updateFolderComment

Updates a comment on a folder. **Note:** This endpoint accepts a max of 10,000 characters.

- HTTP Method: `PUT`
- Endpoint: `/collections/{collectionId}/folders/{folderId}/comments/{commentId}`

**Parameters**

| Name         | Type                                                    | Required | Description                 |
| :----------- | :------------------------------------------------------ | :------- | :-------------------------- |
| body         | [CommentCreateUpdate](../models/CommentCreateUpdate.md) | ✅       | The request body.           |
| collectionId | string                                                  | ✅       | The collection's unique ID. |
| folderId     | string                                                  | ✅       | The folder's unique ID.     |
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

  const { data } = await postmanClient.collectionFolders.updateFolderComment(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    '12345678-65a99e60-8e0a-4b6e-b79c-7d8264cc5caa',
    46814,
    input,
  );

  console.log(data);
})();
```

## deleteFolderComment

Deletes a comment from a folder. On success, this returns an HTTP `204 No Content` response **Note:** Deleting the first comment of a thread deletes all the comments in the thread.

- HTTP Method: `DELETE`
- Endpoint: `/collections/{collectionId}/folders/{folderId}/comments/{commentId}`

**Parameters**

| Name         | Type   | Required | Description                 |
| :----------- | :----- | :------- | :-------------------------- |
| collectionId | string | ✅       | The collection's unique ID. |
| folderId     | string | ✅       | The folder's unique ID.     |
| commentId    | number | ✅       | The comment's ID.           |

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.collectionFolders.deleteFolderComment(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    '12345678-65a99e60-8e0a-4b6e-b79c-7d8264cc5caa',
    46814,
  );

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
