# PrivateApiNetworkService

A list of all methods in the `PrivateApiNetworkService` service. Click on the method name to view detailed information about that method.

| Methods                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :---------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getAllElementsAndFolders](#getallelementsandfolders)       | Gets information about the folders and their elements added to your [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/). **Note:** The `limit` and `offset` parameters are separately applied to elements and folders. For example, if you query a `limit` value of `10` and an `offset` value `0`, the endpoint returns 10 elements and 10 folders for a total of 20 items. The `totalCount` property in the `meta` response is the total count of both elements and folders. |
| [postPanElementOrFolder](#postpanelementorfolder)           | Publishes a element or creates a folder in your [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/). An element is a Postman API, collection, or workspace. **Note:** You can only pass one element object type per call. For example, you cannot pass both `api` and `collection` in a single request.                                                                                                                                                                        |
| [updatePanElementOrFolder](#updatepanelementorfolder)       | Updates an element or folder in your [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/). **Note:** You can only pass one element object type per call. For example, you cannot pass both `api` and `collection` in a single request.                                                                                                                                                                                                                                          |
| [deletePanElementOrFolder](#deletepanelementorfolder)       | Removes an element or delete a folder from your [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/). **Note:** Removing an API, collection, or workspace element does not delete it. It only removes it from the Private API Network folder.                                                                                                                                                                                                                                   |
| [getAllPanAddElementRequests](#getallpanaddelementrequests) | Gets a list requests to add elements to the [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/).                                                                                                                                                                                                                                                                                                                                                                               |
| [respondPanElementAddRequest](#respondpanelementaddrequest) | Responds to a request to add an element to the [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/). Only managers can approve or deny a request. Once approved, the element will appear in the team's Private API Network.                                                                                                                                                                                                                                                     |

## getAllElementsAndFolders

Gets information about the folders and their elements added to your [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/). **Note:** The `limit` and `offset` parameters are separately applied to elements and folders. For example, if you query a `limit` value of `10` and an `offset` value `0`, the endpoint returns 10 elements and 10 folders for a total of 20 items. The `totalCount` property in the `meta` response is the total count of both elements and folders.

- HTTP Method: `GET`
- Endpoint: `/network/private`

**Parameters**

| Name           | Type                                                                      | Required | Description                                                                                                                                                                              |
| :------------- | :------------------------------------------------------------------------ | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| since          | string                                                                    | ❌       | Return only results created since the given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be later than the `until` value.    |
| until          | string                                                                    | ❌       | Return only results created until this given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be earlier than the `since` value. |
| addedBy        | number                                                                    | ❌       | Return only elements published by the given user ID.                                                                                                                                     |
| name           | string                                                                    | ❌       | Return only elements whose name includes the given value. Matching is not case-sensitive.                                                                                                |
| summary        | string                                                                    | ❌       | Return only elements whose summary includes the given value. Matching is not case-sensitive.                                                                                             |
| description    | string                                                                    | ❌       | Return only elements whose description includes the given value. Matching is not case-sensitive.                                                                                         |
| sort           | [GetAllElementsAndFoldersSort](../models/GetAllElementsAndFoldersSort.md) | ❌       | Sort the results by the given value. If you use this query parameter, you must also use the `direction` parameter.                                                                       |
| direction      | [AscDesc](../models/AscDesc.md)                                           | ❌       | Sort in ascending (`asc`) or descending (`desc`) order. Matching is not case-sensitive. If you use this query parameter, you must also use the `sort` parameter.                         |
| createdBy      | number                                                                    | ❌       | Return only results created by the given user ID.                                                                                                                                        |
| offset         | number                                                                    | ❌       | The zero-based offset of the first item to return.                                                                                                                                       |
| limit          | number                                                                    | ❌       | The maximum number of elements to return. If the value exceeds the maximum value of `1000`, then the system uses the `1000` value.                                                       |
| parentFolderId | number                                                                    | ❌       | Return the folders and elements in a specific folder. If this value is `0`, then the endpoint only returns the root folder's elements.                                                   |
| type\_         | [GetAllElementsAndFoldersType](../models/GetAllElementsAndFoldersType.md) | ❌       | Filter by the element type.                                                                                                                                                              |

**Return Type**

`GetPanElementsAndFolders`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const sort = GetAllElementsAndFoldersSort.createdAt;
  const direction = AscDesc.asc;
  const type_ = GetAllElementsAndFoldersType.api;

  const { data } = await postmanClient.privateApiNetwork.getAllElementsAndFolders({
    since: '2022-06-01T00:00:00.000Z',
    until: '2022-06-15T00:00:00.000Z',
    addedBy: 12345678,
    name: 'billing',
    summary: 'payments',
    description: 'payments',
    sort: sort,
    direction: direction,
    createdBy: 12345678,
    offset: 5,
    limit: 10,
    parentFolderId: 1,
    type_: type_,
  });

  console.log(data);
})();
```

## postPanElementOrFolder

Publishes a element or creates a folder in your [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/). An element is a Postman API, collection, or workspace. **Note:** You can only pass one element object type per call. For example, you cannot pass both `api` and `collection` in a single request.

- HTTP Method: `POST`
- Endpoint: `/network/private`

**Parameters**

| Name | Type                                                                        | Required | Description       |
| :--- | :-------------------------------------------------------------------------- | :------- | :---------------- |
| body | [PostPanElementOrFolderRequest](../models/PostPanElementOrFolderRequest.md) | ✅       | The request body. |

**Return Type**

`PostPanElementOrFolderCreatedResponse`

**Example Usage Code Snippet**

```typescript
import {
  PanCreateApi,
  PanCreateCollection,
  PanCreateFolder,
  PanCreateWorkspace,
  PostPanElementOrFolderRequest,
  PostmanClient,
} from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const panCreateApiApi: PanCreateApiApi = {
    id: '5360b75f-447e-467c-9299-12fd6c92450d',
    parentFolderId: 1,
  };

  const postPanElementOrFolderRequest: PanCreateApi = {
    api: panCreateApiApi,
  };

  const { data } = await postmanClient.privateApiNetwork.postPanElementOrFolder(input);

  console.log(data);
})();
```

## updatePanElementOrFolder

Updates an element or folder in your [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/). **Note:** You can only pass one element object type per call. For example, you cannot pass both `api` and `collection` in a single request.

- HTTP Method: `PUT`
- Endpoint: `/network/private/{elementType}/{elementId}`

**Parameters**

| Name        | Type                                                                                    | Required | Description                                                                                                           |
| :---------- | :-------------------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------- |
| body        | [UpdatePanElementOrFolderRequest](../models/UpdatePanElementOrFolderRequest.md)         | ✅       | The request body.                                                                                                     |
| elementId   | string                                                                                  | ✅       | The element's ID or UUID. For Postman Collections you must pass the collection's UID (`userId`-`collectionId`) value. |
| elementType | [UpdatePanElementOrFolderElementType](../models/UpdatePanElementOrFolderElementType.md) | ✅       | The element type.                                                                                                     |

**Return Type**

`UpdatePanElementOrFolderOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, UpdatePanApi, UpdatePanCollection, UpdatePanElementOrFolderRequest, UpdatePanFolder, UpdatePanWorkspace } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
	apiKey: 'YOUR_API_KEY'});

  const elementType = UpdatePanElementOrFolderElementType.api;


const updatePanApiApi: UpdatePanApiApi = {
  parentFolderId: 1
};

const updatePanElementOrFolderRequest: UpdatePanApi = {
  api: updatePanApiApi
};;

  const { data } = await postmanClient.privateApiNetwork.updatePanElementOrFolder(
  "5360b75f-447e-467c-9299-12fd6c92450d",
  ,
  input
);

  console.log(data);
})();
```

## deletePanElementOrFolder

Removes an element or delete a folder from your [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/). **Note:** Removing an API, collection, or workspace element does not delete it. It only removes it from the Private API Network folder.

- HTTP Method: `DELETE`
- Endpoint: `/network/private/{elementType}/{elementId}`

**Parameters**

| Name        | Type                                                                                    | Required | Description                                                                                                           |
| :---------- | :-------------------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------- |
| elementId   | string                                                                                  | ✅       | The element's ID or UUID. For Postman Collections you must pass the collection's UID (`userId`-`collectionId`) value. |
| elementType | [UpdatePanElementOrFolderElementType](../models/UpdatePanElementOrFolderElementType.md) | ✅       | The element type.                                                                                                     |

**Return Type**

`DeletePanElementOrFolder`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const elementType = UpdatePanElementOrFolderElementType.api;

  const { data } = await postmanClient.privateApiNetwork.deletePanElementOrFolder(
    '5360b75f-447e-467c-9299-12fd6c92450d',
  );

  console.log(data);
})();
```

## getAllPanAddElementRequests

Gets a list requests to add elements to the [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/).

- HTTP Method: `GET`
- Endpoint: `/network/private/network-entity/request/all`

**Parameters**

| Name        | Type                                                                                | Required | Description                                                                                                                                                                              |
| :---------- | :---------------------------------------------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| since       | string                                                                              | ❌       | Return only results created since the given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be later than the `until` value.    |
| until       | string                                                                              | ❌       | Return only results created until this given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be earlier than the `since` value. |
| requestedBy | number                                                                              | ❌       | Return a user's element requests by their user ID.                                                                                                                                       |
| type\_      | [GetAllElementsAndFoldersType](../models/GetAllElementsAndFoldersType.md)           | ❌       | Filter by the element type.                                                                                                                                                              |
| status      | [GetAllPanAddElementRequestsStatus](../models/GetAllPanAddElementRequestsStatus.md) | ❌       | Filter by the request status.                                                                                                                                                            |
| name        | string                                                                              | ❌       | Return only elements whose name includes the given value. Matching is not case-sensitive.                                                                                                |
| sort        | [GetAllElementsAndFoldersSort](../models/GetAllElementsAndFoldersSort.md)           | ❌       | Sort the results by the given value. If you use this query parameter, you must also use the `direction` parameter.                                                                       |
| direction   | [AscDesc](../models/AscDesc.md)                                                     | ❌       | Sort in ascending (`asc`) or descending (`desc`) order. Matching is not case-sensitive. If you use this query parameter, you must also use the `sort` parameter.                         |
| offset      | number                                                                              | ❌       | The zero-based offset of the first item to return.                                                                                                                                       |
| limit       | number                                                                              | ❌       | The maximum number of elements to return. If the value exceeds the maximum value of `1000`, then the system uses the `1000` value.                                                       |

**Return Type**

`GetAllPanAddElementRequests`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const type_ = GetAllElementsAndFoldersType.api;
  const status = GetAllPanAddElementRequestsStatus.pending;
  const sort = GetAllElementsAndFoldersSort.createdAt;
  const direction = AscDesc.asc;

  const { data } = await postmanClient.privateApiNetwork.getAllPanAddElementRequests({
    since: '2022-06-01T00:00:00.000Z',
    until: '2022-06-15T00:00:00.000Z',
    requestedBy: 12345678,
    type_: type_,
    status: status,
    name: 'billing',
    sort: sort,
    direction: direction,
    offset: 5,
    limit: 10,
  });

  console.log(data);
})();
```

## respondPanElementAddRequest

Responds to a request to add an element to the [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/). Only managers can approve or deny a request. Once approved, the element will appear in the team's Private API Network.

- HTTP Method: `PUT`
- Endpoint: `/network/private/network-entity/request/{requestId}`

**Parameters**

| Name      | Type                                                                                                                      | Required | Description               |
| :-------- | :------------------------------------------------------------------------------------------------------------------------ | :------- | :------------------------ |
| body      | [PrivateApiNetworkRespondPanElementAddRequestRequest1](../models/PrivateApiNetworkRespondPanElementAddRequestRequest1.md) | ❌       | The request body.         |
| requestId | number                                                                                                                    | ✅       | The element request's ID. |

**Return Type**

`RespondPanElementAddRequestOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, PrivateApiNetworkRespondPanElementAddRequestRequest1 } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const respondPanElementAddRequestResponse: RespondPanElementAddRequestResponse = {
    message: 'The requested collection has a lot of governance violations. Please fix them.',
  };

  const respondPanElementAddRequestStatus = RespondPanElementAddRequestStatus.denied;

  const input: PrivateApiNetworkRespondPanElementAddRequestRequest1 = {
    response: respondPanElementAddRequestResponse,
    status: respondPanElementAddRequestStatus,
  };

  const { data } = await postmanClient.privateApiNetwork.respondPanElementAddRequest(232, input);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
