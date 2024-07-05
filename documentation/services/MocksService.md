# MocksService

A list of all methods in the `MocksService` service. Click on the method name to view detailed information about that method.

| Methods                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| :---------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [getMocks](#getmocks)                                 | Gets all mock servers. By default, this endpoint returns only mock servers you created across all workspaces. **Note:** If you pass both the `teamId` and `workspace` query parameters, this endpoint only accepts the `workspace` query.                                                                                                                                                                                                                                                                                                                                 |
| [createMock](#createmock)                             | Creates a mock server in a collection. **Note:** - If you do not include the `workspaceId` query parameter, the system creates the mock server in your [Personal workspace](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/creating-workspaces/). - You cannot create mocks for collections added to an API definition.                                                                                                                                                                                                                      |
| [getMock](#getmock)                                   | Gets information about a mock server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [updateMock](#updatemock)                             | Updates a mock server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [deleteMock](#deletemock)                             | Deletes a mock server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [getMockCallLogs](#getmockcalllogs)                   | Gets a mock server's call logs. You can get a maximum of 6.5MB of call logs or a total of 100 call logs, whichever limit is met first in one API call. Call logs contain exchanged request and response data made to mock servers. The logs provide visibility into how the mock servers are being used. You can log data to debug, test, analyze, and more, depending upon the use case.                                                                                                                                                                                 |
| [publishMock](#publishmock)                           | Publishes a mock server. Publishing a mock server sets its **Access Control** configuration setting to public.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [unpublishMock](#unpublishmock)                       | Unpublishes a mock server. Unpublishing a mock server sets its **Access Control** configuration setting to private.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [getMockServerResponses](#getmockserverresponses)     | Gets all of a mock server's server responses.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [createMockServerResponse](#createmockserverresponse) | Creates a server response. Server responses let you simulate 5xx server-level responses, such as 500 or 503. Server-level responses are agnostic to application-level logic. Server responses let you simulate this behavior on a mock server. You do not need to define each error for all exposed paths on the mock server. If you set a server response as active, then all the calls to the mock server return with that active server response. **Note:** You can create multiple server responses for a mock server, but only one mock server can be set as active. |
| [getMockServerResponse](#getmockserverresponse)       | Gets information about a server response.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [updateMockServerResponse](#updatemockserverresponse) | Updates a server response.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [deleteMockServerResponse](#deletemockserverresponse) | Deletes a mock server's server response.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## getMocks

Gets all mock servers. By default, this endpoint returns only mock servers you created across all workspaces. **Note:** If you pass both the `teamId` and `workspace` query parameters, this endpoint only accepts the `workspace` query.

- HTTP Method: `GET`
- Endpoint: `/mocks`

**Parameters**

| Name      | Type   | Required | Description                                           |
| :-------- | :----- | :------- | :---------------------------------------------------- |
| teamId    | string | ❌       | Return only results that belong to the given team ID. |
| workspace | string | ❌       | Return only results found in the given workspace.     |

**Return Type**

`GetMocks`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.mocks.getMocks({
    teamId: '1b96f65f-8d23-4e1d-b5e2-055992c3b8cbd2567dfa09a9',
    workspace: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
  });

  console.log(data);
})();
```

## createMock

Creates a mock server in a collection. **Note:** - If you do not include the `workspaceId` query parameter, the system creates the mock server in your [Personal workspace](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/creating-workspaces/). - You cannot create mocks for collections added to an API definition.

- HTTP Method: `POST`
- Endpoint: `/mocks`

**Parameters**

| Name        | Type                                  | Required | Description         |
| :---------- | :------------------------------------ | :------- | :------------------ |
| body        | [CreateMock](../models/CreateMock.md) | ✅       | The request body.   |
| workspaceId | string                                | ❌       | The workspace's ID. |

**Return Type**

`MockCreateUpdate`

**Example Usage Code Snippet**

```typescript
import { CreateMock, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const createMockMock: CreateMockMock = {
    collection: '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    environment: '12345678-5daabc50-8451-43f6-922d-96b403b4f28e',
    name: 'Test Mock',
    private_: true,
  };

  const input: CreateMock = {
    mock: createMockMock,
  };

  const { data } = await postmanClient.mocks.createMock(input, {
    workspaceId: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
  });

  console.log(data);
})();
```

## getMock

Gets information about a mock server.

- HTTP Method: `GET`
- Endpoint: `/mocks/{mockId}`

**Parameters**

| Name   | Type   | Required | Description    |
| :----- | :----- | :------- | :------------- |
| mockId | string | ✅       | The mock's ID. |

**Return Type**

`GetMock`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.mocks.getMock('e3d951bf-873f-49ac-a658-b2dcb91d3289');

  console.log(data);
})();
```

## updateMock

Updates a mock server.

- HTTP Method: `PUT`
- Endpoint: `/mocks/{mockId}`

**Parameters**

| Name   | Type                                  | Required | Description       |
| :----- | :------------------------------------ | :------- | :---------------- |
| body   | [UpdateMock](../models/UpdateMock.md) | ❌       | The request body. |
| mockId | string                                | ✅       | The mock's ID.    |

**Return Type**

`MockCreateUpdate`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, UpdateMock } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const mockConfig2: MockConfig2 = {
    serverResponseId: '9a291bbe-dc0a-44ba-a3c8-6dbd06a61460',
  };

  const updateMockMock: UpdateMockMock = {
    name: 'Test Mock',
    environment: '12345678-5daabc50-8451-43f6-922d-96b403b4f28e',
    description: 'This is a test mock server.',
    private_: true,
    versionTag: 'abf07d3d-f8ec-47d4-8015-9fe83078b4ec',
    config: mockConfig2,
  };

  const input: UpdateMock = {
    mock: updateMockMock,
  };

  const { data } = await postmanClient.mocks.updateMock('e3d951bf-873f-49ac-a658-b2dcb91d3289', input);

  console.log(data);
})();
```

## deleteMock

Deletes a mock server.

- HTTP Method: `DELETE`
- Endpoint: `/mocks/{mockId}`

**Parameters**

| Name   | Type   | Required | Description    |
| :----- | :----- | :------- | :------------- |
| mockId | string | ✅       | The mock's ID. |

**Return Type**

`DeleteMock`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.mocks.deleteMock('e3d951bf-873f-49ac-a658-b2dcb91d3289');

  console.log(data);
})();
```

## getMockCallLogs

Gets a mock server's call logs. You can get a maximum of 6.5MB of call logs or a total of 100 call logs, whichever limit is met first in one API call. Call logs contain exchanged request and response data made to mock servers. The logs provide visibility into how the mock servers are being used. You can log data to debug, test, analyze, and more, depending upon the use case.

- HTTP Method: `GET`
- Endpoint: `/mocks/{mockId}/call-logs`

**Parameters**

| Name               | Type                                                    | Required | Description                                                                                                                                                                                                                    |
| :----------------- | :------------------------------------------------------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mockId             | string                                                  | ✅       | The mock's ID.                                                                                                                                                                                                                 |
| limit              | number                                                  | ❌       | The maximum number of rows to return in the response.                                                                                                                                                                          |
| cursor             | string                                                  | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter.                                                                                     |
| until              | string                                                  | ❌       | Return only results created until this given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be earlier than the `since` value.                                       |
| since              | string                                                  | ❌       | Return only results created since the given time, in [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) format. This value cannot be later than the `until` value.                                          |
| responseStatusCode | number                                                  | ❌       | Return only call logs that match the given HTTP response status code.                                                                                                                                                          |
| responseType       | string                                                  | ❌       | Return only call logs that match the given response type. Matching is not case-sensitive.                                                                                                                                      |
| requestMethod      | string                                                  | ❌       | Return only call logs that match the given HTTP method. Matching is not case-sensitive.                                                                                                                                        |
| requestPath        | string                                                  | ❌       | Return only call logs that match the given request path. Matching is not case-sensitive.                                                                                                                                       |
| sort               | [GetMockCallLogsSort](../models/GetMockCallLogsSort.md) | ❌       | Sort the results by the given value. If you use this query parameter, you must also use the `direction` parameter.                                                                                                             |
| direction          | [AscDesc](../models/AscDesc.md)                         | ❌       | Sort in ascending (`asc`) or descending (`desc`) order. Matching is not case-sensitive. If you use this query parameter, you must also use the `sort` parameter.                                                               |
| include            | string                                                  | ❌       | Include call log records with header and body data. This query parameter accepts the `request.headers`, `request.body`, `response.headers`, and `response.body` values. For multiple include types, comma-separate each value. |

**Return Type**

`GetMockCallLogs`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const sort = GetMockCallLogsSort.servedAt;
  const direction = AscDesc.asc;

  const { data } = await postmanClient.mocks.getMockCallLogs('e3d951bf-873f-49ac-a658-b2dcb91d3289', {
    limit: 3,
    cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
    until: '2022-06-15T00:00:00.000Z',
    since: '2022-06-01T00:00:00.000Z',
    responseStatusCode: 500,
    responseType: 'success',
    requestMethod: 'post',
    requestPath: '/animals?type=Dog',
    sort: sort,
    direction: direction,
    include: 'request.headers,request.body,response.headers,response.body',
  });

  console.log(data);
})();
```

## publishMock

Publishes a mock server. Publishing a mock server sets its **Access Control** configuration setting to public.

- HTTP Method: `POST`
- Endpoint: `/mocks/{mockId}/publish`

**Parameters**

| Name   | Type   | Required | Description    |
| :----- | :----- | :------- | :------------- |
| mockId | string | ✅       | The mock's ID. |

**Return Type**

`PublishMock`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.mocks.publishMock('e3d951bf-873f-49ac-a658-b2dcb91d3289');

  console.log(data);
})();
```

## unpublishMock

Unpublishes a mock server. Unpublishing a mock server sets its **Access Control** configuration setting to private.

- HTTP Method: `DELETE`
- Endpoint: `/mocks/{mockId}/unpublish`

**Parameters**

| Name   | Type   | Required | Description    |
| :----- | :----- | :------- | :------------- |
| mockId | string | ✅       | The mock's ID. |

**Return Type**

`UnpublishMock`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.mocks.unpublishMock('e3d951bf-873f-49ac-a658-b2dcb91d3289');

  console.log(data);
})();
```

## getMockServerResponses

Gets all of a mock server's server responses.

- HTTP Method: `GET`
- Endpoint: `/mocks/{mockId}/server-responses`

**Parameters**

| Name   | Type   | Required | Description    |
| :----- | :----- | :------- | :------------- |
| mockId | string | ✅       | The mock's ID. |

**Return Type**

`GetMockServerResponses[]`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.mocks.getMockServerResponses('e3d951bf-873f-49ac-a658-b2dcb91d3289');

  console.log(data);
})();
```

## createMockServerResponse

Creates a server response. Server responses let you simulate 5xx server-level responses, such as 500 or 503. Server-level responses are agnostic to application-level logic. Server responses let you simulate this behavior on a mock server. You do not need to define each error for all exposed paths on the mock server. If you set a server response as active, then all the calls to the mock server return with that active server response. **Note:** You can create multiple server responses for a mock server, but only one mock server can be set as active.

- HTTP Method: `POST`
- Endpoint: `/mocks/{mockId}/server-responses`

**Parameters**

| Name   | Type                                                              | Required | Description       |
| :----- | :---------------------------------------------------------------- | :------- | :---------------- |
| body   | [CreateMockServerResponse](../models/CreateMockServerResponse.md) | ✅       | The request body. |
| mockId | string                                                            | ✅       | The mock's ID.    |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { CreateMockServerResponse, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
	apiKey: 'YOUR_API_KEY'});


const serverResponseHeaders1: ServerResponseHeaders1 = {
  key: "Content-Type",
  value: "application/json"
};

const serverResponseLanguage1 = ServerResponseLanguage1.text;

const createMockServerResponseServerResponse: CreateMockServerResponseServerResponse = {
  name: "Internal Server Error",
  statusCode: 500,
  headers: [serverResponseHeaders1],
  language: serverResponseLanguage1,
  body: "{
    "message": "Something went wrong; try again later."
}"
};

const input: CreateMockServerResponse = {
  serverResponse: createMockServerResponseServerResponse
};

  const { data } = await postmanClient.mocks.createMockServerResponse(
  "e3d951bf-873f-49ac-a658-b2dcb91d3289",
  input
);

  console.log(data);
})();
```

## getMockServerResponse

Gets information about a server response.

- HTTP Method: `GET`
- Endpoint: `/mocks/{mockId}/server-responses/{serverResponseId}`

**Parameters**

| Name             | Type   | Required | Description               |
| :--------------- | :----- | :------- | :------------------------ |
| mockId           | string | ✅       | The mock's ID.            |
| serverResponseId | string | ✅       | The server response's ID. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.mocks.getMockServerResponse(
    'e3d951bf-873f-49ac-a658-b2dcb91d3289',
    '965cdd16-fe22-4d96-a161-3d05490ac421',
  );

  console.log(data);
})();
```

## updateMockServerResponse

Updates a server response.

- HTTP Method: `PUT`
- Endpoint: `/mocks/{mockId}/server-responses/{serverResponseId}`

**Parameters**

| Name             | Type                                                              | Required | Description               |
| :--------------- | :---------------------------------------------------------------- | :------- | :------------------------ |
| body             | [UpdateMockServerResponse](../models/UpdateMockServerResponse.md) | ✅       | The request body.         |
| mockId           | string                                                            | ✅       | The mock's ID.            |
| serverResponseId | string                                                            | ✅       | The server response's ID. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, UpdateMockServerResponse } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
	apiKey: 'YOUR_API_KEY'});


const serverResponseHeaders2: ServerResponseHeaders2 = {
  key: "Content-Type",
  value: "application/json"
};

const serverResponseLanguage2 = ServerResponseLanguage2.text;

const updateMockServerResponseServerResponse: UpdateMockServerResponseServerResponse = {
  name: "Internal Server Error",
  statusCode: 500,
  headers: [serverResponseHeaders2],
  language: serverResponseLanguage2,
  body: "{
    "message": "Something went wrong; try again later."
}"
};

const input: UpdateMockServerResponse = {
  serverResponse: updateMockServerResponseServerResponse
};

  const { data } = await postmanClient.mocks.updateMockServerResponse(
  "e3d951bf-873f-49ac-a658-b2dcb91d3289",
  "965cdd16-fe22-4d96-a161-3d05490ac421",
  input
);

  console.log(data);
})();
```

## deleteMockServerResponse

Deletes a mock server's server response.

- HTTP Method: `DELETE`
- Endpoint: `/mocks/{mockId}/server-responses/{serverResponseId}`

**Parameters**

| Name             | Type   | Required | Description               |
| :--------------- | :----- | :------- | :------------------------ |
| mockId           | string | ✅       | The mock's ID.            |
| serverResponseId | string | ✅       | The server response's ID. |

**Return Type**

`DeleteMockServerResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.mocks.deleteMockServerResponse(
    'e3d951bf-873f-49ac-a658-b2dcb91d3289',
    '965cdd16-fe22-4d96-a161-3d05490ac421',
  );

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
