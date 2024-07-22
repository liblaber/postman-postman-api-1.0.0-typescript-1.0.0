# GetPanElementsAndFolders

**Properties**

| Name     | Type                         | Required | Description                                                                                                |
| :------- | :--------------------------- | :------- | :--------------------------------------------------------------------------------------------------------- |
| elements | Elements[]                   | ❌       | Information about a Private API Network's folder elements. Elements are APIs, collections, and workspaces. |
| folders  | Folders[]                    | ❌       | Information about the Private API Network's folders.                                                       |
| meta     | GetPanElementsAndFoldersMeta | ❌       | The response's non-standard meta information.                                                              |

# Elements

**Properties**

| Name           | Type   | Required | Description                                                                                                                   |
| :------------- | :----- | :------- | :---------------------------------------------------------------------------------------------------------------------------- |
| createdAt      | string | ❌       | The date and time at which the element was created.                                                                           |
| createdBy      | number | ❌       | The user who created the element.                                                                                             |
| updatedAt      | string | ❌       | The date and time at which the element was last updated.                                                                      |
| updatedBy      | number | ❌       | The user who updated the element.                                                                                             |
| addedAt        | string | ❌       | The date and time at which the element was published to Private API Network. This value is the same as the `updatedAt` value. |
| addedBy        | number | ❌       | The user ID of the user who published the element.                                                                            |
| description    | string | ❌       | The element's description.                                                                                                    |
| id             | string | ❌       | The element's ID.                                                                                                             |
| name           | string | ❌       | The element's name.                                                                                                           |
| summary        | string | ❌       | The element's summary.                                                                                                        |
| type           | string | ❌       | The element's type.                                                                                                           |
| parentFolderId | number | ❌       | The element's parent folder ID.                                                                                               |
| href           | string | ❌       | The element's HREF.                                                                                                           |

# Folders

**Properties**

| Name           | Type   | Required | Description                                        |
| :------------- | :----- | :------- | :------------------------------------------------- |
| id             | number | ❌       | The folder's ID.                                   |
| parentFolderId | number | ❌       | The folder's parent folder ID.                     |
| updatedAt      | string | ❌       | The date and time at which the folder was updated. |
| updatedBy      | number | ❌       | The user ID of the user who updated the folder.    |
| createdAt      | string | ❌       | The date and time at which the folder was created. |
| createdBy      | number | ❌       | The user who created the folder.                   |
| name           | string | ❌       | The folder's name.                                 |
| description    | string | ❌       | The folder's description.                          |
| type           | string | ❌       | The element's type. This value is always `folder`. |

# GetPanElementsAndFoldersMeta

The response's non-standard meta information.

**Properties**

| Name       | Type   | Required | Description                                                                                                                       |
| :--------- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| limit      | number | ❌       | The maximum number of elements returned. If the value exceeds the maximum value of `1000`, then the system uses the `1000` value. |
| offset     | number | ❌       | The zero-based offset of the first item returned.                                                                                 |
| totalCount | number | ❌       | The total count of the `elements` and `folders` items.                                                                            |

<!-- This file was generated by liblab | https://liblab.com/ -->
