# CreateUpdateApiSchemaFileRequest

Information about schema file.

**Properties**

| Name    | Type                          | Required | Description                                                                                 |
| :------ | :---------------------------- | :------- | :------------------------------------------------------------------------------------------ |
| name    | string                        | ❌       | The schema file's name.                                                                     |
| root    | CreateUpdateApiSchemaFileRoot | ❌       | Information about the schema's root file. This tag only applies to protobuf specifications. |
| content | string                        | ❌       | The schema file's content.                                                                  |

# CreateUpdateApiSchemaFileRoot

Information about the schema's root file. This tag only applies to protobuf specifications.

**Properties**

| Name    | Type    | Required | Description                             |
| :------ | :------ | :------- | :-------------------------------------- |
| enabled | boolean | ❌       | If true, tag the file as the root file. |

<!-- This file was generated by liblab | https://liblab.com/ -->
