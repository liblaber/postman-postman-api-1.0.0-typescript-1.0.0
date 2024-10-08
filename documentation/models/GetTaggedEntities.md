# GetTaggedEntities

**Properties**

| Name | Type                  | Required | Description                                  |
| :--- | :-------------------- | :------- | :------------------------------------------- |
| data | GetTaggedEntitiesData | ❌       | An object containing the paginated elements. |
| meta | GetTaggedEntitiesMeta | ❌       | The response's pagination information.       |

# GetTaggedEntitiesData

An object containing the paginated elements.

**Properties**

| Name     | Type       | Required | Description                                                |
| :------- | :--------- | :------- | :--------------------------------------------------------- |
| entities | Entities[] | ✅       | A list of the Postman elements that contain the given tag. |

# Entities

**Properties**

| Name       | Type               | Required | Description                  |
| :--------- | :----------------- | :------- | :--------------------------- |
| entityId   | string             | ❌       | The element's unique ID.     |
| entityType | EntitiesEntityType | ❌       | The type of Postman element. |

# EntitiesEntityType

The type of Postman element.

**Properties**

| Name       | Type   | Required | Description  |
| :--------- | :----- | :------- | :----------- |
| API        | string | ✅       | "api"        |
| COLLECTION | string | ✅       | "collection" |
| WORKSPACE  | string | ✅       | "workspace"  |

# GetTaggedEntitiesMeta

The response's pagination information.

**Properties**

| Name       | Type   | Required | Description                                                              |
| :--------- | :----- | :------- | :----------------------------------------------------------------------- |
| count      | number | ✅       | The number of tagged elements returned in the response.                  |
| nextCursor | string | ❌       | The pagination cursor that points to the next record in the results set. |

<!-- This file was generated by liblab | https://liblab.com/ -->
