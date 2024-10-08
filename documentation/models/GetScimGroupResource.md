# GetScimGroupResource

**Properties**

| Name       | Type                          | Required | Description                                                              |
| :--------- | :---------------------------- | :------- | :----------------------------------------------------------------------- |
| schemas    | string[]                      | ❌       | The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml). |
| id         | string                        | ❌       | The group's SCIM ID.                                                     |
| userName   | string                        | ❌       | The group's display name.                                                |
| members    | GetScimGroupResourceMembers[] | ❌       | Information about the group's members.                                   |
| externalId | string                        | ❌       | The group's external ID.                                                 |
| meta       | GetScimGroupResourceMeta      | ❌       | The response's non-standard meta information.                            |

# GetScimGroupResourceMembers

**Properties**

| Name    | Type   | Required | Description                |
| :------ | :----- | :------- | :------------------------- |
| value   | string | ❌       | The member's SCIM ID.      |
| display | string | ❌       | The member's display name. |

# GetScimGroupResourceMeta

The response's non-standard meta information.

**Properties**

| Name         | Type   | Required | Description                                             |
| :----------- | :----- | :------- | :------------------------------------------------------ |
| resourceType | string | ❌       | The resource type.                                      |
| created      | string | ❌       | The date and time at which the group was created.       |
| lastModified | string | ❌       | The date and time at which the group was last modified. |

<!-- This file was generated by liblab | https://liblab.com/ -->
