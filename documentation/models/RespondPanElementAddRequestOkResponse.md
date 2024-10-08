# RespondPanElementAddRequestOkResponse

**Properties**

| Name    | Type                                  | Required | Description                                        |
| :------ | :------------------------------------ | :------- | :------------------------------------------------- |
| request | RespondPanElementAddRequestRequest2[] | ❌       | Information about the Private API Network request. |

# RespondPanElementAddRequestRequest2

**Properties**

| Name      | Type            | Required | Description                                                                                                                                 |
| :-------- | :-------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| id        | number          | ❌       | The request's ID.                                                                                                                           |
| createdAt | string          | ❌       | The date and time at which the request was created.                                                                                         |
| createdBy | number          | ❌       | The ID of the user who created the request.                                                                                                 |
| message   | string          | ❌       | The user's optional message included in the request.                                                                                        |
| response  | RequestResponse | ❌       | Information about the response to the element's request. This object only returns when the network manager denied a request with a message. |
| element   | RequestElement  | ❌       | Information about the requested element.                                                                                                    |
| status    | RequestStatus   | ❌       | The request's status.                                                                                                                       |

# RequestResponse

Information about the response to the element's request. This object only returns when the network manager denied a request with a message.

**Properties**

| Name      | Type   | Required | Description                                                        |
| :-------- | :----- | :------- | :----------------------------------------------------------------- |
| createdAt | string | ❌       | The date and time at which the network manager denied the request. |
| createdBy | number | ❌       | The network manager's user ID.                                     |
| message   | string | ❌       | The network manager's request response message.                    |

# RequestElement

Information about the requested element.

**Properties**

| Name      | Type         | Required | Description                                                                               |
| :-------- | :----------- | :------- | :---------------------------------------------------------------------------------------- |
| id        | string       | ❌       | The element's ID.                                                                         |
| createdAt | string       | ❌       | The date and time at which the element was approved and added to the Private API Network. |
| createdBy | number       | ❌       | The user ID of the user who requested to add the element to the Private API Network.      |
| type      | ElementType2 | ❌       | The element type.                                                                         |
| name      | string       | ❌       | The element's name.                                                                       |
| summary   | string       | ❌       | If applicable, the element's short summary.                                               |

# ElementType2

The element type.

**Properties**

| Name       | Type   | Required | Description  |
| :--------- | :----- | :------- | :----------- |
| API        | string | ✅       | "api"        |
| WORKSPACE  | string | ✅       | "workspace"  |
| COLLECTION | string | ✅       | "collection" |

# RequestStatus

The request's status.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| APPROVED | string | ✅       | "approved"  |
| DENIED   | string | ✅       | "denied"    |

<!-- This file was generated by liblab | https://liblab.com/ -->
