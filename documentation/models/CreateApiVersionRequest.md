# CreateApiVersionRequest

# CreateApiVersion1

Information about the API version.

**Properties**

| Name         | Type                           | Required | Description                                                              |
| :----------- | :----------------------------- | :------- | :----------------------------------------------------------------------- |
| name         | string                         | ✅       | The version's name.                                                      |
| schemas      | CreateApiVersion1Schemas[]     | ✅       | A list of the version's schemas.                                         |
| collections  | CreateApiVersion1Collections[] | ✅       | A list of the version's collections.                                     |
| releaseNotes | string                         | ❌       | Information about the API version release. For example, changelog notes. |

# CreateApiVersion1Schemas

Information about the schema.

**Properties**

| Name | Type   | Required | Description      |
| :--- | :----- | :------- | :--------------- |
| id   | string | ❌       | The schema's ID. |

# CreateApiVersion1Collections

Information about the collection.

**Properties**

| Name | Type   | Required | Description          |
| :--- | :----- | :------- | :------------------- |
| id   | string | ❌       | The collection's ID. |

# CreateApiVersion2

Information about the API version.

**Properties**

| Name         | Type                           | Required | Description                                                              |
| :----------- | :----------------------------- | :------- | :----------------------------------------------------------------------- |
| name         | string                         | ✅       | The version's name.                                                      |
| branch       | string                         | ✅       | The branch ID.                                                           |
| schemas      | CreateApiVersion2Schemas[]     | ✅       | A list of the version's schemas.                                         |
| collections  | CreateApiVersion2Collections[] | ✅       | A list of the version's collections.                                     |
| releaseNotes | string                         | ❌       | Information about the API version release. For example, changelog notes. |

# CreateApiVersion2Schemas

Information about the schema.

**Properties**

| Name     | Type   | Required | Description                                             |
| :------- | :----- | :------- | :------------------------------------------------------ |
| filePath | string | ❌       | The path to the schema root file in the Git repository. |

# CreateApiVersion2Collections

Information about the collection.

**Properties**

| Name     | Type   | Required | Description                                 |
| :------- | :----- | :------- | :------------------------------------------ |
| filePath | string | ❌       | Path to a collection in the Git repository. |

# CreateApiVersion3

Information about the API version.

**Properties**

| Name         | Type                           | Required | Description                                                              |
| :----------- | :----------------------------- | :------- | :----------------------------------------------------------------------- |
| name         | string                         | ✅       | The version's name.                                                      |
| branch       | string                         | ✅       | The branch ID.                                                           |
| schemas      | CreateApiVersion3Schemas[]     | ✅       | A list of the version's schemas.                                         |
| collections  | CreateApiVersion3Collections[] | ✅       | A list of the version's collections.                                     |
| releaseNotes | string                         | ❌       | Information about the API version release. For example, changelog notes. |

# CreateApiVersion3Schemas

Information about the schema.

**Properties**

| Name          | Type   | Required | Description                                                                    |
| :------------ | :----- | :------- | :----------------------------------------------------------------------------- |
| directoryPath | string | ❌       | The path to the root directory where schemas are stored in the Git repository. |

# CreateApiVersion3Collections

Information about the collection.

**Properties**

| Name     | Type   | Required | Description                                       |
| :------- | :----- | :------- | :------------------------------------------------ |
| filePath | string | ❌       | The path to the collection in the Git repository. |

This is a union type which means it could be any of several possible types.

# CreateApiVersion1

See all details about CreateApiVersion1 model [here](CreateApiVersion1.md).

# CreateApiVersion2

See all details about CreateApiVersion2 model [here](CreateApiVersion2.md).

# CreateApiVersion3

See all details about CreateApiVersion3 model [here](CreateApiVersion3.md).

<!-- This file was generated by liblab | https://liblab.com/ -->
