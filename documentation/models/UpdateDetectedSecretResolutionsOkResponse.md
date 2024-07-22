# UpdateDetectedSecretResolutionsOkResponse

**Properties**

| Name        | Type                               | Required | Description                                                                                                                                                                                                                                                                                                                                 |
| :---------- | :--------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| history     | History[]                          | ❌       | The history of the secret's resolution status changes.                                                                                                                                                                                                                                                                                      |
| resolution  | UpdateSecretResolutionsResolution2 | ❌       | The secret's current resolution status: - `ACTIVE` — The secret is active. - `FALSE_POSITIVE` — The discovered secret is not an actual secret. - `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue. - `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it. |
| secretHash  | string                             | ❌       | The SHA-256 hash of the detected secret.                                                                                                                                                                                                                                                                                                    |
| workspaceId | string                             | ❌       | The ID of the workspace that contains the secret.                                                                                                                                                                                                                                                                                           |

# History

**Properties**

| Name       | Type              | Required | Description                                                                                                                                                                                                                                                                                                                                 |
| :--------- | :---------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| actor      | number            | ❌       | The ID of the user that updated the secret's resolution status.                                                                                                                                                                                                                                                                             |
| createdAt  | string            | ❌       | The date and time at which the resolution status was updated.                                                                                                                                                                                                                                                                               |
| resolution | HistoryResolution | ❌       | The secret's updated resolution status: - `ACTIVE` — The secret is active. - `FALSE_POSITIVE` — The discovered secret is not an actual secret. - `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue. - `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it. |

# HistoryResolution

The secret's updated resolution status: - `ACTIVE` — The secret is active. - `FALSE_POSITIVE` — The discovered secret is not an actual secret. - `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue. - `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it.

**Properties**

| Name          | Type   | Required | Description      |
| :------------ | :----- | :------- | :--------------- |
| FALSEPOSITIVE | string | ✅       | "FALSE_POSITIVE" |
| ACCEPTEDRISK  | string | ✅       | "ACCEPTED_RISK"  |
| REVOKED       | string | ✅       | "REVOKED"        |
| ACTIVE        | string | ✅       | "ACTIVE"         |

# UpdateSecretResolutionsResolution2

The secret's current resolution status: - `ACTIVE` — The secret is active. - `FALSE_POSITIVE` — The discovered secret is not an actual secret. - `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue. - `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it.

**Properties**

| Name          | Type   | Required | Description      |
| :------------ | :----- | :------- | :--------------- |
| FALSEPOSITIVE | string | ✅       | "FALSE_POSITIVE" |
| ACCEPTEDRISK  | string | ✅       | "ACCEPTED_RISK"  |
| REVOKED       | string | ✅       | "REVOKED"        |
| ACTIVE        | string | ✅       | "ACTIVE"         |

<!-- This file was generated by liblab | https://liblab.com/ -->
