# EnvironmentsService

A list of all methods in the `EnvironmentsService` service. Click on the method name to view detailed information about that method.

| Methods                                       | Description                                                                                                                                                                                                                |
| :-------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getEnvironments](#getenvironments)           | Gets information about all of your [environments](https://learning.postman.com/docs/sending-requests/managing-environments/).                                                                                              |
| [createEnvironment](#createenvironment)       | Creates an environment.                                                                                                                                                                                                    |
| [getEnvironment](#getenvironment)             | Gets information about an environment.                                                                                                                                                                                     |
| [updateEnvironment](#updateenvironment)       | Updates an environment.                                                                                                                                                                                                    |
| [deleteEnvironment](#deleteenvironment)       | Deletes an environment.                                                                                                                                                                                                    |
| [getEnvironmentForks](#getenvironmentforks)   | Gets all of an environment's forked environments.                                                                                                                                                                          |
| [forkEnvironment](#forkenvironment)           | Creates a [fork](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/) of an existing environment.                                                                           |
| [mergeEnvironmentFork](#mergeenvironmentfork) | [Merges](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/#merge-changes-from-a-fork) a forked environment back into its parent environment.                              |
| [pullEnvironment](#pullenvironment)           | [Pulls](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/#pull-updates-from-a-parent-element) the changes from a parent (source) environment into the forked environment. |

## getEnvironments

Gets information about all of your [environments](https://learning.postman.com/docs/sending-requests/managing-environments/).

- HTTP Method: `GET`
- Endpoint: `/environments`

**Parameters**

| Name      | Type   | Required | Description         |
| :-------- | :----- | :------- | :------------------ |
| workspace | string | ❌       | The workspace's ID. |

**Return Type**

`GetEnvironments`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.environments.getEnvironments({
    workspace: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
  });

  console.log(data);
})();
```

## createEnvironment

Creates an environment.

- HTTP Method: `POST`
- Endpoint: `/environments`

**Parameters**

| Name      | Type                                                              | Required | Description         |
| :-------- | :---------------------------------------------------------------- | :------- | :------------------ |
| body      | [CreateEnvironmentRequest](../models/CreateEnvironmentRequest.md) | ❌       | The request body.   |
| workspace | string                                                            | ❌       | The workspace's ID. |

**Return Type**

`CreateEnvironmentOkResponse`

**Example Usage Code Snippet**

```typescript
import { CreateEnvironmentRequest, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const valuesType1 = ValuesType1.SECRET;

  const environmentValues1: EnvironmentValues1 = {
    enabled: true,
    key: 'apiKey',
    value: 'PMAK-XXX',
    type: valuesType1,
  };

  const createEnvironmentEnvironment1: CreateEnvironmentEnvironment1 = {
    name: 'Test Environment',
    values: [environmentValues1],
  };

  const input: CreateEnvironmentRequest = {
    environment: createEnvironmentEnvironment1,
  };

  const { data } = await postmanClient.environments.createEnvironment(input, {
    workspace: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
  });

  console.log(data);
})();
```

## getEnvironment

Gets information about an environment.

- HTTP Method: `GET`
- Endpoint: `/environments/{environmentId}`

**Parameters**

| Name          | Type   | Required | Description           |
| :------------ | :----- | :------- | :-------------------- |
| environmentId | string | ✅       | The environment's ID. |

**Return Type**

`GetEnvironment`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.environments.getEnvironment('5daabc50-8451-43f6-922d-96b403b4f28e');

  console.log(data);
})();
```

## updateEnvironment

Updates an environment.

- HTTP Method: `PUT`
- Endpoint: `/environments/{environmentId}`

**Parameters**

| Name          | Type                                                              | Required | Description           |
| :------------ | :---------------------------------------------------------------- | :------- | :-------------------- |
| body          | [UpdateEnvironmentRequest](../models/UpdateEnvironmentRequest.md) | ❌       | The request body.     |
| environmentId | string                                                            | ✅       | The environment's ID. |

**Return Type**

`UpdateEnvironmentOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, UpdateEnvironmentRequest } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const valuesType3 = ValuesType3.SECRET;

  const environmentValues3: EnvironmentValues3 = {
    enabled: true,
    key: 'apiKey',
    value: 'PMAK-XXX',
    type: valuesType3,
  };

  const updateEnvironmentEnvironment1: UpdateEnvironmentEnvironment1 = {
    name: 'Test Environment',
    values: [environmentValues3],
  };

  const input: UpdateEnvironmentRequest = {
    environment: updateEnvironmentEnvironment1,
  };

  const { data } = await postmanClient.environments.updateEnvironment('5daabc50-8451-43f6-922d-96b403b4f28e', input);

  console.log(data);
})();
```

## deleteEnvironment

Deletes an environment.

- HTTP Method: `DELETE`
- Endpoint: `/environments/{environmentId}`

**Parameters**

| Name          | Type   | Required | Description           |
| :------------ | :----- | :------- | :-------------------- |
| environmentId | string | ✅       | The environment's ID. |

**Return Type**

`DeleteEnvironment`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.environments.deleteEnvironment('5daabc50-8451-43f6-922d-96b403b4f28e');

  console.log(data);
})();
```

## getEnvironmentForks

Gets all of an environment's forked environments.

- HTTP Method: `GET`
- Endpoint: `/environments/{environmentId}/forks`

**Parameters**

| Name          | Type                                                            | Required | Description                                                                                                                                |
| :------------ | :-------------------------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| environmentId | string                                                          | ✅       | The environment's unique ID.                                                                                                               |
| cursor        | string                                                          | ❌       | The pointer to the first record of the set of paginated results. To view the next response, use the `nextCursor` value for this parameter. |
| direction     | [AscDesc](../models/AscDesc.md)                                 | ❌       | Sort results in ascending (`asc`) or descending (`desc`) order.                                                                            |
| limit         | number                                                          | ❌       | The maximum number of rows to return in the response.                                                                                      |
| sort          | [GetEnvironmentForksSort](../models/GetEnvironmentForksSort.md) | ❌       | Sort the results by the date and time of creation.                                                                                         |

**Return Type**

`GetEnvironmentForks`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const direction = AscDesc.ASC;
  const sort = GetEnvironmentForksSort.CREATEDAT;

  const { data } = await postmanClient.environments.getEnvironmentForks(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    {
      cursor: 'RnJpIEZlYiAyNCAyMDIzIDEzOjI0OjA5IEdNVCswMDAwIChDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZSk=',
      direction: direction,
      limit: 10,
      sort: sort,
    },
  );

  console.log(data);
})();
```

## forkEnvironment

Creates a [fork](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/) of an existing environment.

- HTTP Method: `POST`
- Endpoint: `/environments/{environmentId}/forks`

**Parameters**

| Name          | Type                                                          | Required | Description                  |
| :------------ | :------------------------------------------------------------ | :------- | :--------------------------- |
| body          | [ForkEnvironmentRequest](../models/ForkEnvironmentRequest.md) | ❌       | The request body.            |
| environmentId | string                                                        | ✅       | The environment's unique ID. |
| workspaceId   | string                                                        | ✅       | The workspace's ID.          |

**Return Type**

`ForkEnvironmentOkResponse`

**Example Usage Code Snippet**

```typescript
import { ForkEnvironmentRequest, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const input: ForkEnvironmentRequest = {
    forkName: 'My fork',
  };

  const { data } = await postmanClient.environments.forkEnvironment(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    input,
    {
      workspaceId: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    },
  );

  console.log(data);
})();
```

## mergeEnvironmentFork

[Merges](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/#merge-changes-from-a-fork) a forked environment back into its parent environment.

- HTTP Method: `POST`
- Endpoint: `/environments/{environmentId}/merges`

**Parameters**

| Name          | Type                                                                    | Required | Description                  |
| :------------ | :---------------------------------------------------------------------- | :------- | :--------------------------- |
| body          | [MergeEnvironmentForkRequest](../models/MergeEnvironmentForkRequest.md) | ❌       | The request body.            |
| environmentId | string                                                                  | ✅       | The environment's unique ID. |

**Return Type**

`MergeEnvironmentForkOkResponse`

**Example Usage Code Snippet**

```typescript
import { MergeEnvironmentForkRequest, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const input: MergeEnvironmentForkRequest = {
    source: '12345678-d9c7dc8f-904e-4bba-99b5-4d490aae1957',
    deleteSource: true,
  };

  const { data } = await postmanClient.environments.mergeEnvironmentFork(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    input,
  );

  console.log(data);
})();
```

## pullEnvironment

[Pulls](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/#pull-updates-from-a-parent-element) the changes from a parent (source) environment into the forked environment.

- HTTP Method: `POST`
- Endpoint: `/environments/{environmentId}/pulls`

**Parameters**

| Name          | Type                                                          | Required | Description                  |
| :------------ | :------------------------------------------------------------ | :------- | :--------------------------- |
| body          | [PullEnvironmentRequest](../models/PullEnvironmentRequest.md) | ❌       | The request body.            |
| environmentId | string                                                        | ✅       | The environment's unique ID. |

**Return Type**

`PullEnvironmentOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, PullEnvironmentRequest } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const input: PullEnvironmentRequest = {
    source: '12345678-d9c7dc8f-904e-4bba-99b5-4d490aae1957',
  };

  const { data } = await postmanClient.environments.pullEnvironment(
    '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    input,
  );

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
