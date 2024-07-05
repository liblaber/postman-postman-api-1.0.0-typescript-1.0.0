# GetWorkspaces

**Properties**

| Name       | Type         | Required | Description |
| :--------- | :----------- | :------- | :---------- |
| workspaces | Workspaces[] | ❌       |             |

# Workspaces

Information about the workspace.

**Properties**

| Name       | Type                 | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :--------- | :------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id         | string               | ❌       | The workspace's ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| name       | string               | ❌       | The workspace's name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| createdBy  | number               | ❌       | The user who created the workspace. The response only returns workspaces that you have access to.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| type\_     | WorkspacesType       | ❌       | The type of workspace.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| visibility | WorkspacesVisibility | ❌       | The workspace's visibility. [Visibility](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) determines who can access the workspace: - `personal` — Only you can access the workspace. - `team` — All team members can access the workspace. - `private` — Only invited team members can access the workspace ([**Professional** and **Enterprise** plans only](https://www.postman.com/pricing)). - `public` — Everyone can access the workspace. - `partner` — Only invited team members and [partners](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access the workspace ([**Professional** and **Enterprise** plans only](https://www.postman.com/pricing)). |

# WorkspacesType

The type of workspace.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| personal | string | ✅       | "personal"  |
| team     | string | ✅       | "team"      |
| private  | string | ✅       | "private"   |
| public   | string | ✅       | "public"    |
| partner  | string | ✅       | "partner"   |

# WorkspacesVisibility

The workspace's visibility. [Visibility](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) determines who can access the workspace: - `personal` — Only you can access the workspace. - `team` — All team members can access the workspace. - `private` — Only invited team members can access the workspace ([**Professional** and **Enterprise** plans only](https://www.postman.com/pricing)). - `public` — Everyone can access the workspace. - `partner` — Only invited team members and [partners](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access the workspace ([**Professional** and **Enterprise** plans only](https://www.postman.com/pricing)).

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| personal | string | ✅       | "personal"  |
| team     | string | ✅       | "team"      |
| private  | string | ✅       | "private"   |
| public   | string | ✅       | "public"    |
| partner  | string | ✅       | "partner"   |

<!-- This file was generated by liblab | https://liblab.com/ -->
