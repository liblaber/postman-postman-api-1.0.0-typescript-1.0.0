# ScimService

A list of all methods in the `ScimService` service. Click on the method name to view detailed information about that method.

| Methods                                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getScimGroupResources](#getscimgroupresources)               | Gets information about all Postman team members.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [createScimGroup](#createscimgroup)                           | Creates a new user group in Postman and creates a new account for each group member. Each account is added to your Postman team and authentication is activated for each user. If an existing Postman account uses an email that matches a group member's email ID, an [email invite](https://postman.postman.co/docs/administration/managing-your-team/managing-your-team/#invites) to join your Postman team is sent to that user. Once the user accepts the invite, they'll be added to your team. By default, the system assigns new users the developer role. You can [update user roles in Postman](https://learning.postman.com/docs/administration/managing-your-team/managing-your-team/#managing-team-roles). |
| [getScimGroupResource](#getscimgroupresource)                 | Gets information about a Postman group within the team.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [scimUpdateGroup](#scimupdategroup)                           | Updates a group's information. Using this endpoint you can: - Update a group's name. - Add or remove members from a Postman group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [deleteScimGroup](#deletescimgroup)                           | Deletes a group in Postman. User accounts that were in the deleted group are deactivated in Postman if the app is assigned to the user only with the deleted group. User accounts and the data corresponding to them are not deleted. To permanently delete user accounts and their data, [contact Postman support](https://www.postman.com/support/).                                                                                                                                                                                                                                                                                                                                                                  |
| [getScimResourceTypes](#getscimresourcetypes)                 | Gets all the resource types supported by Postman's SCIM API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [getScimServiceProviderConfig](#getscimserviceproviderconfig) | Gets the Postman SCIM API configuration information. This includes a list of supported operations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [getScimUserResources](#getscimuserresources)                 | Gets information about all Postman team members.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [createScimUser](#createscimuser)                             | Creates a new user account in Postman and adds the user to your organization's Postman team. If the account does not already exist, this also activates the user so they can authenticate in to your Postman team. If the account already exists, the system sends the user an [email invite](https://learning.postman.com/docs/administration/managing-your-team/managing-your-team/#inviting-users) to join the Postman team. The user joins the team once they accept the invite. By default, the system assigns new users the developer role. You can [update user roles in Postman](https://learning.postman.com/docs/administration/managing-your-team/managing-your-team/#managing-team-roles).                  |
| [getScimUserResource](#getscimuserresource)                   | Gets information about a Postman team member.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [updateScimUser](#updatescimuser)                             | Updates a user's first and last name in Postman. **Note:** You can only use the SCIM API to update a user's first and last name. You cannot update any other user attributes with the API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [updateScimUserState](#updatescimuserstate)                   | Updates a user's active state in Postman. **Reactivating a user** By setting the `active` property from `false` to `true`, this reactivates an account. This allows the account to authenticate in to Postman and adds the account back on to your Postman team.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## getScimGroupResources

Gets information about all Postman team members.

- HTTP Method: `GET`
- Endpoint: `/scim/v2/Groups`

**Parameters**

| Name       | Type   | Required | Description                                                                                                                                                                                                                           |
| :--------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| startIndex | number | ❌       | The index entry by which to begin the list of returned results.                                                                                                                                                                       |
| count      | number | ❌       | Limit the number of results returned in a single response.                                                                                                                                                                            |
| filter     | string | ❌       | Filter results by a specific word or phrase. This query parameter only supports the `displayName` filter and has the following requirements: - Filter values are case-sensitive. - Special characters and spaces must be URL encoded. |

**Return Type**

`GetScimGroupResources`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
	apiKey: 'YOUR_API_KEY'});

  const { data } = await postmanClient.scim.getScimGroupResources(
  {
    startIndex: 1,
    count: 2,
    filter: "displayName eq "Test-API"",
  }
);

  console.log(data);
})();
```

## createScimGroup

Creates a new user group in Postman and creates a new account for each group member. Each account is added to your Postman team and authentication is activated for each user. If an existing Postman account uses an email that matches a group member's email ID, an [email invite](https://postman.postman.co/docs/administration/managing-your-team/managing-your-team/#invites) to join your Postman team is sent to that user. Once the user accepts the invite, they'll be added to your team. By default, the system assigns new users the developer role. You can [update user roles in Postman](https://learning.postman.com/docs/administration/managing-your-team/managing-your-team/#managing-team-roles).

- HTTP Method: `POST`
- Endpoint: `/scim/v2/Groups`

**Parameters**

| Name | Type                                                          | Required | Description       |
| :--- | :------------------------------------------------------------ | :------- | :---------------- |
| body | [CreateScimGroupRequest](../models/CreateScimGroupRequest.md) | ❌       | The request body. |

**Return Type**

`CreateScimGroupCreatedResponse`

**Example Usage Code Snippet**

```typescript
import { CreateScimGroupRequest, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const createScimGroupMembers1: CreateScimGroupMembers1 = {
    value: '405775fe15ed41872a8eea4c8aa2b38cda9749812cc55c99',
    display: 'Taylor Lee',
  };

  const input: CreateScimGroupRequest = {
    schemas: ['urn:ietf:params:scim:schemas:core:2.0:Group'],
    displayName: 'Test-API',
    members: [createScimGroupMembers1],
  };

  const { data } = await postmanClient.scim.createScimGroup(input);

  console.log(data);
})();
```

## getScimGroupResource

Gets information about a Postman group within the team.

- HTTP Method: `GET`
- Endpoint: `/scim/v2/Groups/{groupId}`

**Parameters**

| Name    | Type   | Required | Description     |
| :------ | :----- | :------- | :-------------- |
| groupId | string | ✅       | The group's ID. |

**Return Type**

`GetScimGroupResource`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.scim.getScimGroupResource('405775fe15ed41872a8eea4c8aa2b38cda9749812cc55c99');

  console.log(data);
})();
```

## scimUpdateGroup

Updates a group's information. Using this endpoint you can: - Update a group's name. - Add or remove members from a Postman group.

- HTTP Method: `PATCH`
- Endpoint: `/scim/v2/Groups/{groupId}`

**Parameters**

| Name    | Type                                                          | Required | Description       |
| :------ | :------------------------------------------------------------ | :------- | :---------------- |
| body    | [ScimUpdateGroupRequest](../models/ScimUpdateGroupRequest.md) | ❌       | The request body. |
| groupId | string                                                        | ✅       | The group's ID.   |

**Return Type**

`ScimUpdateGroupOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, ScimUpdateGroupRequest } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const operationsOp1 = OperationsOp1.replace;

  const operationsValue1: OperationsValue1 = {
    id: '561631fq14ed41872a8eea4c8aa2b38cda9749812cc55c00',
    displayName: 'Test-API',
  };

  const scimUpdateGroupOperations: ScimUpdateGroupOperations = {
    op: operationsOp1,
    path: 'members',
    value: operationsValue1,
  };

  const input: ScimUpdateGroupRequest = {
    schemas: ['urn:ietf:params:scim:api:messages:2.0:PatchOp'],
    operations: [scimUpdateGroupOperations],
  };

  const { data } = await postmanClient.scim.scimUpdateGroup('405775fe15ed41872a8eea4c8aa2b38cda9749812cc55c99', input);

  console.log(data);
})();
```

## deleteScimGroup

Deletes a group in Postman. User accounts that were in the deleted group are deactivated in Postman if the app is assigned to the user only with the deleted group. User accounts and the data corresponding to them are not deleted. To permanently delete user accounts and their data, [contact Postman support](https://www.postman.com/support/).

- HTTP Method: `DELETE`
- Endpoint: `/scim/v2/Groups/{groupId}`

**Parameters**

| Name    | Type   | Required | Description     |
| :------ | :----- | :------- | :-------------- |
| groupId | string | ✅       | The group's ID. |

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.scim.deleteScimGroup('405775fe15ed41872a8eea4c8aa2b38cda9749812cc55c99');

  console.log(data);
})();
```

## getScimResourceTypes

Gets all the resource types supported by Postman's SCIM API.

- HTTP Method: `GET`
- Endpoint: `/scim/v2/ResourceTypes`

**Return Type**

`GetScimResourceTypes[]`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.scim.getScimResourceTypes();

  console.log(data);
})();
```

## getScimServiceProviderConfig

Gets the Postman SCIM API configuration information. This includes a list of supported operations.

- HTTP Method: `GET`
- Endpoint: `/scim/v2/ServiceProviderConfig`

**Return Type**

`GetScimServiceProviderConfig`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.scim.getScimServiceProviderConfig();

  console.log(data);
})();
```

## getScimUserResources

Gets information about all Postman team members.

- HTTP Method: `GET`
- Endpoint: `/scim/v2/Users`

**Parameters**

| Name       | Type   | Required | Description                                                                                                                                                                                                                        |
| :--------- | :----- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| startIndex | number | ❌       | The index entry by which to begin the list of returned results.                                                                                                                                                                    |
| count      | number | ❌       | Limit the number of results returned in a single response.                                                                                                                                                                         |
| filter     | string | ❌       | Filter results by a specific word or phrase. This query parameter only supports the `userName` filter and has the following requirements: - Filter values are case-sensitive. - Special characters and spaces must be URL encoded. |

**Return Type**

`GetScimUserResources`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.scim.getScimUserResources({
    startIndex: 1,
    count: 2,
    filter: 'filter',
  });

  console.log(data);
})();
```

## createScimUser

Creates a new user account in Postman and adds the user to your organization's Postman team. If the account does not already exist, this also activates the user so they can authenticate in to your Postman team. If the account already exists, the system sends the user an [email invite](https://learning.postman.com/docs/administration/managing-your-team/managing-your-team/#inviting-users) to join the Postman team. The user joins the team once they accept the invite. By default, the system assigns new users the developer role. You can [update user roles in Postman](https://learning.postman.com/docs/administration/managing-your-team/managing-your-team/#managing-team-roles).

- HTTP Method: `POST`
- Endpoint: `/scim/v2/Users`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [CreateScimUserRequest](../models/CreateScimUserRequest.md) | ❌       | The request body. |

**Return Type**

`CreateScimUserCreatedResponse`

**Example Usage Code Snippet**

```typescript
import { CreateScimUserRequest, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const createScimUserName1: CreateScimUserName1 = {
    givenName: 'Taylor',
    familyName: 'Lee',
  };

  const input: CreateScimUserRequest = {
    schemas: ['urn:ietf:params:scim:schemas:core:2.0:User'],
    userName: 'taylor.lee@example.com',
    active: true,
    externalId: '12345678',
    groups: ['Test Group'],
    locale: 'en-US',
    name: createScimUserName1,
  };

  const { data } = await postmanClient.scim.createScimUser(input);

  console.log(data);
})();
```

## getScimUserResource

Gets information about a Postman team member.

- HTTP Method: `GET`
- Endpoint: `/scim/v2/Users/{userId}`

**Parameters**

| Name   | Type   | Required | Description         |
| :----- | :----- | :------- | :------------------ |
| userId | string | ✅       | The user's SCIM ID. |

**Return Type**

`GetScimUserResourceOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.scim.getScimUserResource('405775fe15ed41872a8eea4c8aa2b38cda9749812cc55c99');

  console.log(data);
})();
```

## updateScimUser

Updates a user's first and last name in Postman. **Note:** You can only use the SCIM API to update a user's first and last name. You cannot update any other user attributes with the API.

- HTTP Method: `PUT`
- Endpoint: `/scim/v2/Users/{userId}`

**Parameters**

| Name   | Type                                          | Required | Description         |
| :----- | :-------------------------------------------- | :------- | :------------------ |
| body   | [UpdateScimUser](../models/UpdateScimUser.md) | ❌       | The request body.   |
| userId | string                                        | ✅       | The user's SCIM ID. |

**Return Type**

`GetScimUserResourceOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, UpdateScimUser } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const updateScimUserName: UpdateScimUserName = {
    givenName: 'Taylor',
    familyName: 'Lee',
  };

  const input: UpdateScimUser = {
    schemas: ['urn:ietf:params:scim:schemas:core:2.0:User'],
    name: updateScimUserName,
  };

  const { data } = await postmanClient.scim.updateScimUser('405775fe15ed41872a8eea4c8aa2b38cda9749812cc55c99', input);

  console.log(data);
})();
```

## updateScimUserState

Updates a user's active state in Postman. **Reactivating a user** By setting the `active` property from `false` to `true`, this reactivates an account. This allows the account to authenticate in to Postman and adds the account back on to your Postman team.

- HTTP Method: `PATCH`
- Endpoint: `/scim/v2/Users/{userId}`

**Parameters**

| Name   | Type                                                    | Required | Description         |
| :----- | :------------------------------------------------------ | :------- | :------------------ |
| body   | [UpdateScimUserState](../models/UpdateScimUserState.md) | ❌       | The request body.   |
| userId | string                                                  | ✅       | The user's SCIM ID. |

**Return Type**

`GetScimUserResourceOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, UpdateScimUserState } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const operationsOp2 = OperationsOp2.replace;

  const operationsValue2: OperationsValue2 = {
    active: true,
  };

  const updateScimUserStateOperations: UpdateScimUserStateOperations = {
    op: operationsOp2,
    value: operationsValue2,
  };

  const input: UpdateScimUserState = {
    schemas: ['urn:ietf:params:scim:api:messages:2.0:PatchOp'],
    operations: [updateScimUserStateOperations],
  };

  const { data } = await postmanClient.scim.updateScimUserState(
    '405775fe15ed41872a8eea4c8aa2b38cda9749812cc55c99',
    input,
  );

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
