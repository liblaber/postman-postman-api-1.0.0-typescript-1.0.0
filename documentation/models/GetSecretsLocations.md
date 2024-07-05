# GetSecretsLocations

**Properties**

| Name | Type                      | Required | Description |
| :--- | :------------------------ | :------- | :---------- |
| data | GetSecretsLocationsData[] | ❌       |             |
| meta | GetSecretsLocationsMeta   | ❌       |             |

# GetSecretsLocationsData

Information about the secret finding locations.

**Properties**

| Name              | Type             | Required | Description                                                                                                                                                                                            |
| :---------------- | :--------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isResourceDeleted | boolean          | ❌       | If true, the resource in which the secret was found was deleted.                                                                                                                                       |
| leakedBy          | number           | ❌       | The ID of the user who exposed the secret.                                                                                                                                                             |
| location          | string           | ❌       | The location where the secret was found.                                                                                                                                                               |
| occurrences       | number           | ❌       | The number of times the secret occurs in the location.                                                                                                                                                 |
| parentResourceId  | string           | ❌       | The parent resource's unique ID. If the resource is a request, folder, or example, this value is a collection ID. If the resource is a collection, globals, or environment, this is the resource's ID. |
| resourceId        | string           | ❌       | The unique ID of the resource where the secret was detected.                                                                                                                                           |
| resourceType      | DataResourceType | ❌       | The type of resource in which the secret was detected.                                                                                                                                                 |
| detectedAt        | string           | ❌       | The date and time at which the secret was detected.                                                                                                                                                    |
| url               | string           | ❌       | The URL to the resource that contains the secret.                                                                                                                                                      |

# DataResourceType

The type of resource in which the secret was detected.

**Properties**

| Name        | Type   | Required | Description   |
| :---------- | :----- | :------- | :------------ |
| collection  | string | ✅       | "collection"  |
| folder      | string | ✅       | "folder"      |
| request     | string | ✅       | "request"     |
| example     | string | ✅       | "example"     |
| environment | string | ✅       | "environment" |
| globals     | string | ✅       | "globals"     |
| api         | string | ✅       | "api"         |

# GetSecretsLocationsMeta

**Properties**

| Name             | Type           | Required | Description                                                                 |
| :--------------- | :------------- | :------- | :-------------------------------------------------------------------------- |
| activityFeed     | ActivityFeed[] | ❌       | The history of the secret's resolution status changes.                      |
| cursor           | string         | ❌       | The pointer to the first record of the set of paginated results.            |
| limit            | number         | ❌       | The maximum number of rows to return in the response.                       |
| nextCursor       | string         | ❌       | The Base64-encoded value that points to the next record in the results set. |
| obfuscatedSecret | string         | ❌       | The secret's obfuscated value.                                              |
| secretHash       | string         | ❌       | The secret's SHA-256 hash.                                                  |
| secretType       | string         | ❌       | The type of thesecret.                                                      |
| total            | number         | ❌       | The total number of discovered secret locations.                            |

# ActivityFeed

**Properties**

| Name       | Type               | Required | Description                                                                                                                                                                                                                                                                                                                                 |
| :--------- | :----------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| resolvedAt | string             | ❌       | The date and time at which the resolution status was last updated.                                                                                                                                                                                                                                                                          |
| resolvedBy | number             | ❌       | The ID of the user that updated the secret's resolution status.                                                                                                                                                                                                                                                                             |
| status     | ActivityFeedStatus | ❌       | The secret's current resolution status: - `ACTIVE` — The secret is active. - `FALSE_POSITIVE` — The discovered secret is not an actual secret. - `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue. - `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it. |

# ActivityFeedStatus

The secret's current resolution status: - `ACTIVE` — The secret is active. - `FALSE_POSITIVE` — The discovered secret is not an actual secret. - `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue. - `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it.

**Properties**

| Name           | Type   | Required | Description      |
| :------------- | :----- | :------- | :--------------- |
| FALSE_POSITIVE | string | ✅       | "FALSE_POSITIVE" |
| ACCEPTED_RISK  | string | ✅       | "ACCEPTED_RISK"  |
| REVOKED        | string | ✅       | "REVOKED"        |
| ACTIVE         | string | ✅       | "ACTIVE"         |

<!-- This file was generated by liblab | https://liblab.com/ -->
