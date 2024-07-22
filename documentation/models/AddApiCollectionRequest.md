# AddApiCollectionRequest

# AddApiCollection1

**Properties**

| Name          | Type                           | Required | Description                   |
| :------------ | :----------------------------- | :------- | :---------------------------- |
| data          | AddApiCollection1Data          | ❌       |                               |
| operationType | AddApiCollection1OperationType | ❌       | The `COPY_COLLECTION` method. |

# AddApiCollection1Data

**Properties**

| Name         | Type   | Required | Description                           |
| :----------- | :----- | :------- | :------------------------------------ |
| collectionId | string | ❌       | The collection ID to copy to the API. |

# AddApiCollection1OperationType

The `COPY_COLLECTION` method.

**Properties**

| Name           | Type   | Required | Description       |
| :------------- | :----- | :------- | :---------------- |
| COPYCOLLECTION | string | ✅       | "COPY_COLLECTION" |

# AddApiCollection2

**Properties**

| Name          | Type                           | Required | Description                                                                                                                                                                                                                                                                                                                   |
| :------------ | :----------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name          | string                         | ❌       | The collection's name.                                                                                                                                                                                                                                                                                                        |
| operationType | AddApiCollection2OperationType | ❌       | The `GENERATE_FROM_SCHEMA` method.                                                                                                                                                                                                                                                                                            |
| options       | any                            | ❌       | The advanced creation options for collections and their values. For a complete list of properties and their values, see Postman's [OpenAPI 3.0 to Postman Collection v2.1.0 Converter OPTIONS documentation](https://github.com/postmanlabs/openapi-to-postman/blob/develop/OPTIONS.md). These properties are case-sensitive. |

# AddApiCollection2OperationType

The `GENERATE_FROM_SCHEMA` method.

**Properties**

| Name               | Type   | Required | Description            |
| :----------------- | :----- | :------- | :--------------------- |
| GENERATEFROMSCHEMA | string | ✅       | "GENERATE_FROM_SCHEMA" |

# AddApiCollection3

**Properties**

| Name          | Type                           | Required | Description                                                                                                                                                                                                                |
| :------------ | :----------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data          | AddApiCollection3Data          | ❌       | Information about the collection's contents, such as requests and responses. For a complete list of values, refer to the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json). |
| operationType | AddApiCollection3OperationType | ❌       | The `CREATE_NEW` method.                                                                                                                                                                                                   |

# AddApiCollection3Data

Information about the collection's contents, such as requests and responses. For a complete list of values, refer to the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json).

**Properties**

| Name | Type     | Required | Description                                                                                                                                                                                                   |
| :--- | :------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| info | DataInfo | ❌       | Information about the collection.                                                                                                                                                                             |
| item | any[]    | ❌       | Information about the requests and responses in the collection. For a complete list of values, refer to the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json). |

# DataInfo

Information about the collection.

**Properties**

| Name   | Type       | Required | Description                     |
| :----- | :--------- | :------- | :------------------------------ |
| name   | string     | ❌       | The collection's name.          |
| schema | InfoSchema | ❌       | The collection's schema format. |

# InfoSchema

The collection's schema format.

**Properties**

| Name                                                       | Type   | Required | Description                                                            |
| :--------------------------------------------------------- | :----- | :------- | :--------------------------------------------------------------------- |
| HTTPSSCHEMAGETPOSTMANCOMJSONCOLLECTIONV2_1_0COLLECTIONJSON | string | ✅       | "https://schema.getpostman.com/json/collection/v2.1.0/collection.json" |

# AddApiCollection3OperationType

The `CREATE_NEW` method.

**Properties**

| Name      | Type   | Required | Description  |
| :-------- | :----- | :------- | :----------- |
| CREATENEW | string | ✅       | "CREATE_NEW" |

<!-- This file was generated by liblab | https://liblab.com/ -->
