# MonitorsService

A list of all methods in the `MonitorsService` service. Click on the method name to view detailed information about that method.

| Methods                         | Description                                                                                         |
| :------------------------------ | :-------------------------------------------------------------------------------------------------- |
| [getMonitors](#getmonitors)     | Gets all monitors.                                                                                  |
| [createMonitor](#createmonitor) | Creates a monitor. **Note:** You cannot create monitors for collections added to an API definition. |
| [getMonitor](#getmonitor)       | Gets information about a monitor.                                                                   |
| [updateMonitor](#updatemonitor) | Updates a monitor.                                                                                  |
| [deleteMonitor](#deletemonitor) | Deletes a monitor.                                                                                  |
| [runMonitor](#runmonitor)       | Runs a monitor and returns its run results.                                                         |

## getMonitors

Gets all monitors.

- HTTP Method: `GET`
- Endpoint: `/monitors`

**Parameters**

| Name      | Type   | Required | Description                                       |
| :-------- | :----- | :------- | :------------------------------------------------ |
| workspace | string | ❌       | Return only results found in the given workspace. |

**Return Type**

`GetMonitors`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.monitors.getMonitors({
    workspace: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
  });

  console.log(data);
})();
```

## createMonitor

Creates a monitor. **Note:** You cannot create monitors for collections added to an API definition.

- HTTP Method: `POST`
- Endpoint: `/monitors`

**Parameters**

| Name      | Type                                                      | Required | Description         |
| :-------- | :-------------------------------------------------------- | :------- | :------------------ |
| body      | [CreateMonitorRequest](../models/CreateMonitorRequest.md) | ❌       | The request body.   |
| workspace | string                                                    | ❌       | The workspace's ID. |

**Return Type**

`CreateMonitorOkResponse`

**Example Usage Code Snippet**

```typescript
import { CreateMonitorRequest, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const monitorSchedule1: MonitorSchedule1 = {
    cron: '0 0 * * *',
    timezone: 'America/Chicago',
  };

  const createMonitorMonitor1: CreateMonitorMonitor1 = {
    collection: '12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2',
    environment: '12345678-5daabc50-8451-43f6-922d-96b403b4f28e',
    name: 'Test Monitor',
    schedule: monitorSchedule1,
  };

  const input: CreateMonitorRequest = {
    monitor: createMonitorMonitor1,
  };

  const { data } = await postmanClient.monitors.createMonitor(input, {
    workspace: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
  });

  console.log(data);
})();
```

## getMonitor

Gets information about a monitor.

- HTTP Method: `GET`
- Endpoint: `/monitors/{monitorId}`

**Parameters**

| Name      | Type   | Required | Description       |
| :-------- | :----- | :------- | :---------------- |
| monitorId | string | ✅       | The monitor's ID. |

**Return Type**

`GetMonitor`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.monitors.getMonitor('1e6b6cc1-c760-48e0-968f-4bfaeeae9af1');

  console.log(data);
})();
```

## updateMonitor

Updates a monitor.

- HTTP Method: `PUT`
- Endpoint: `/monitors/{monitorId}`

**Parameters**

| Name      | Type                                                      | Required | Description       |
| :-------- | :-------------------------------------------------------- | :------- | :---------------- |
| body      | [UpdateMonitorRequest](../models/UpdateMonitorRequest.md) | ❌       | The request body. |
| monitorId | string                                                    | ✅       | The monitor's ID. |

**Return Type**

`UpdateMonitorOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, UpdateMonitorRequest } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const monitorSchedule3: MonitorSchedule3 = {
    cron: '*/5 * * * *',
    timezone: 'America/Chicago',
  };

  const updateMonitorMonitor1: UpdateMonitorMonitor1 = {
    name: 'Test Monitor',
    schedule: monitorSchedule3,
  };

  const input: UpdateMonitorRequest = {
    monitor: updateMonitorMonitor1,
  };

  const { data } = await postmanClient.monitors.updateMonitor('1e6b6cc1-c760-48e0-968f-4bfaeeae9af1', input);

  console.log(data);
})();
```

## deleteMonitor

Deletes a monitor.

- HTTP Method: `DELETE`
- Endpoint: `/monitors/{monitorId}`

**Parameters**

| Name      | Type   | Required | Description       |
| :-------- | :----- | :------- | :---------------- |
| monitorId | string | ✅       | The monitor's ID. |

**Return Type**

`DeleteMonitor`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.monitors.deleteMonitor('1e6b6cc1-c760-48e0-968f-4bfaeeae9af1');

  console.log(data);
})();
```

## runMonitor

Runs a monitor and returns its run results.

- HTTP Method: `POST`
- Endpoint: `/monitors/{monitorId}/run`

**Parameters**

| Name      | Type   | Required | Description       |
| :-------- | :----- | :------- | :---------------- |
| monitorId | string | ✅       | The monitor's ID. |

**Return Type**

`RunMonitor`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.monitors.runMonitor('1e6b6cc1-c760-48e0-968f-4bfaeeae9af1');

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
