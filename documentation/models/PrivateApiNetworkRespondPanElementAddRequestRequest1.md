# PrivateApiNetworkRespondPanElementAddRequestRequest1

**Properties**

| Name     | Type                                | Required | Description                         |
| :------- | :---------------------------------- | :------- | :---------------------------------- |
| status   | RespondPanElementAddRequestStatus   | ✅       | The request's status.               |
| response | RespondPanElementAddRequestResponse | ❌       | The response to the user's request. |

# RespondPanElementAddRequestStatus

The request's status.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| DENIED   | string | ✅       | "denied"    |
| APPROVED | string | ✅       | "approved"  |

# RespondPanElementAddRequestResponse

The response to the user's request.

**Properties**

| Name    | Type   | Required | Description                                               |
| :------ | :----- | :------- | :-------------------------------------------------------- |
| message | string | ❌       | A message that details why the user's request was denied. |

<!-- This file was generated by liblab | https://liblab.com/ -->
