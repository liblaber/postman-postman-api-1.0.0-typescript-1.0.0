# GetCollectionRoles

Information about the collection's roles.

**Properties**

| Name  | Type                     | Required | Description                             |
| :---- | :----------------------- | :------- | :-------------------------------------- |
| group | Group[]                  | ❌       | A list of the collection's group roles. |
| team  | GetCollectionRolesTeam[] | ❌       | A list of the collection's team roles.  |
| user  | GetCollectionRolesUser[] | ❌       | A list of the collection's user roles.  |

# Group

Information about the group role.

**Properties**

| Name | Type      | Required | Description                                                                                                     |
| :--- | :-------- | :------- | :-------------------------------------------------------------------------------------------------------------- |
| role | GroupRole | ❌       | The role type: - `VIEWER` — Can view, fork, and export collections. - `EDITOR` — Can edit collections directly. |
| id   | number    | ❌       | The role's ID.                                                                                                  |

# GroupRole

The role type: - `VIEWER` — Can view, fork, and export collections. - `EDITOR` — Can edit collections directly.

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| VIEWER | string | ✅       | "VIEWER"    |
| EDITOR | string | ✅       | "EDITOR"    |

# GetCollectionRolesTeam

Information about the team role.

**Properties**

| Name | Type     | Required | Description                                                                                                     |
| :--- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------- |
| role | TeamRole | ❌       | The role type: - `VIEWER` — Can view, fork, and export collections. - `EDITOR` — Can edit collections directly. |
| id   | number   | ❌       | The role's ID.                                                                                                  |

# TeamRole

The role type: - `VIEWER` — Can view, fork, and export collections. - `EDITOR` — Can edit collections directly.

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| VIEWER | string | ✅       | "VIEWER"    |
| EDITOR | string | ✅       | "EDITOR"    |

# GetCollectionRolesUser

Information about the user role.

**Properties**

| Name | Type     | Required | Description                                                                                                     |
| :--- | :------- | :------- | :-------------------------------------------------------------------------------------------------------------- |
| role | UserRole | ❌       | The role type: - `VIEWER` — Can view, fork, and export collections. - `EDITOR` — Can edit collections directly. |
| id   | number   | ❌       | The role's ID.                                                                                                  |

# UserRole

The role type: - `VIEWER` — Can view, fork, and export collections. - `EDITOR` — Can edit collections directly.

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| VIEWER | string | ✅       | "VIEWER"    |
| EDITOR | string | ✅       | "EDITOR"    |

<!-- This file was generated by liblab | https://liblab.com/ -->
