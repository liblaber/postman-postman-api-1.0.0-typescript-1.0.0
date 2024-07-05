# DetectedSecretsQueriesOkResponse

**Properties**

| Name | Type                         | Required | Description                                            |
| :--- | :--------------------------- | :------- | :----------------------------------------------------- |
| data | DetectedSecretsQueriesData[] | ❌       |                                                        |
| meta | DetectedSecretsQueriesMeta   | ❌       | The response's meta information for paginated results. |

# DetectedSecretsQueriesData

Information about the secret finding.

**Properties**

| Name                | Type                    | Required | Description                                                                                                                                                                                                                                                                                                                      |
| :------------------ | :---------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| obfuscatedSecret    | string                  | ❌       | The secret's obfuscated value.                                                                                                                                                                                                                                                                                                   |
| occurrences         | number                  | ❌       | The number of times the secret was found in the workspace.                                                                                                                                                                                                                                                                       |
| resolution          | DataResolution          | ❌       | The secret's current status: - `ACTIVE` — The secret is active. - `FALSE_POSITIVE` — The discovered secret is not an actual secret. - `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue. - `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it. |
| secretHash          | string                  | ❌       | The SHA-256 hash of the detected secret.                                                                                                                                                                                                                                                                                         |
| secretId            | string                  | ❌       | The detected secret's ID.                                                                                                                                                                                                                                                                                                        |
| secretType          | string                  | ❌       | The type of the secret.                                                                                                                                                                                                                                                                                                          |
| detectedAt          | string                  | ❌       | The date and time at which the secret was first detected.                                                                                                                                                                                                                                                                        |
| workspaceId         | string                  | ❌       | The ID of the workspace that contains the secret.                                                                                                                                                                                                                                                                                |
| workspaceVisibility | DataWorkspaceVisibility | ❌       | The workspace's [visibility setting](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility).                                                                                                                                                            |

# DataResolution

The secret's current status: - `ACTIVE` — The secret is active. - `FALSE_POSITIVE` — The discovered secret is not an actual secret. - `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue. - `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it.

**Properties**

| Name           | Type   | Required | Description      |
| :------------- | :----- | :------- | :--------------- |
| FALSE_POSITIVE | string | ✅       | "FALSE_POSITIVE" |
| ACCEPTED_RISK  | string | ✅       | "ACCEPTED_RISK"  |
| REVOKED        | string | ✅       | "REVOKED"        |
| ACTIVE         | string | ✅       | "ACTIVE"         |

# DataWorkspaceVisibility

The workspace's [visibility setting](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility).

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| personal | string | ✅       | "personal"  |
| private  | string | ✅       | "private"   |
| team     | string | ✅       | "team"      |
| public   | string | ✅       | "public"    |

# DetectedSecretsQueriesMeta

The response's meta information for paginated results.

**Properties**

| Name       | Type   | Required | Description                                                                                                                                                 |
| :--------- | :----- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| limit      | number | ❌       | The maximum number of records in the paginated response.                                                                                                    |
| nextCursor | string | ❌       | The pagination cursor that points to the next record in the results set.                                                                                    |
| total      | number | ❌       | The number of records that match the defined criteria. This will only be present if the `include` query parameter is specified with the `meta.total` value. |

<!-- This file was generated by liblab | https://liblab.com/ -->
