# GetStatusOfAnAsyncTask

**Properties**

| Name      | Type                         | Required | Description                                           |
| :-------- | :--------------------------- | :------- | :---------------------------------------------------- |
| id        | string                       | ❌       | The task's ID.                                        |
| meta      | GetStatusOfAnAsyncTaskMeta   | ❌       | The response's non-standard meta information.         |
| status    | GetStatusOfAnAsyncTaskStatus | ❌       | The task's current status.                            |
| details   | Details                      | ❌       |                                                       |
| createdAt | string                       | ❌       | The date and time at which the task was created.      |
| updatedAt | string                       | ❌       | The date and time at which the task was last updated. |

# GetStatusOfAnAsyncTaskMeta

The response's non-standard meta information.

**Properties**

| Name   | Type      | Required | Description                                               |
| :----- | :-------- | :------- | :-------------------------------------------------------- |
| url    | string    | ❌       | The endpoint URL that created the task.                   |
| model  | MetaModel | ❌       | The model for which the task is performing the operation. |
| action | Action    | ❌       | The task's action.                                        |

# MetaModel

The model for which the task is performing the operation.

**Properties**

| Name       | Type   | Required | Description   |
| :--------- | :----- | :------- | :------------ |
| COLLECTION | string | ✅       | "collection"  |
| APIVERSION | string | ✅       | "api-version" |

# Action

The task's action.

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| UPDATE | string | ✅       | "update"    |
| CREATE | string | ✅       | "create"    |

# GetStatusOfAnAsyncTaskStatus

The task's current status.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| PENDING   | string | ✅       | "pending"   |
| FAILED    | string | ✅       | "failed"    |
| COMPLETED | string | ✅       | "completed" |

# Details

# Details1

Information about the task's resources.

**Properties**

| Name      | Type                | Required | Description |
| :-------- | :------------------ | :------- | :---------- |
| resources | Details1Resources[] | ❌       |             |

# Details1Resources

**Properties**

| Name | Type   | Required | Description                       |
| :--- | :----- | :------- | :-------------------------------- |
| id   | string | ❌       | The ID of the assigned resource.  |
| url  | string | ❌       | The task's assigned resource URL. |

# Details2

Information about the error that occurred during the task's processing.

**Properties**

| Name  | Type  | Required | Description |
| :---- | :---- | :------- | :---------- |
| error | Error | ❌       |             |

# Error

**Properties**

| Name    | Type   | Required | Description               |
| :------ | :----- | :------- | :------------------------ |
| message | string | ❌       | The task's error message. |

<!-- This file was generated by liblab | https://liblab.com/ -->
