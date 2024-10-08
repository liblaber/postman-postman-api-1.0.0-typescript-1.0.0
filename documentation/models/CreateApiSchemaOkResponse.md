# CreateApiSchemaOkResponse

Information about the created API schema.

**Properties**

| Name      | Type                    | Required | Description                                             |
| :-------- | :---------------------- | :------- | :------------------------------------------------------ |
| id        | string                  | ❌       | The schema's ID.                                        |
| type      | CreateApiSchemaType2    | ❌       | The schema's type.                                      |
| files     | CreateApiSchemaFiles2[] | ❌       | The list of the schema's files.                         |
| createdAt | string                  | ❌       | The date and time at which the schema was created.      |
| createdBy | string                  | ❌       | The user ID of the user that created the schema.        |
| updatedAt | string                  | ❌       | The date and time at which the schema was last updated. |
| updatedBy | string                  | ❌       | The user ID of the user that updated the schema.        |

# CreateApiSchemaType2

The schema's type.

**Properties**

| Name       | Type   | Required | Description   |
| :--------- | :----- | :------- | :------------ |
| PROTO2     | string | ✅       | "proto:2"     |
| PROTO3     | string | ✅       | "proto:3"     |
| GRAPHQL    | string | ✅       | "graphql"     |
| OPENAPI3_1 | string | ✅       | "openapi:3_1" |
| OPENAPI3   | string | ✅       | "openapi:3"   |
| OPENAPI2   | string | ✅       | "openapi:2"   |
| OPENAPI1   | string | ✅       | "openapi:1"   |
| RAML1      | string | ✅       | "raml:1"      |
| RAML0_8    | string | ✅       | "raml:0_8"    |
| WSDL2      | string | ✅       | "wsdl:2"      |
| WSDL1      | string | ✅       | "wsdl:1"      |
| ASYNCAPI2  | string | ✅       | "asyncapi:2"  |

# CreateApiSchemaFiles2

Information about the schema file.

**Properties**

| Name      | Type   | Required | Description                                           |
| :-------- | :----- | :------- | :---------------------------------------------------- |
| id        | string | ❌       | The schema file's ID.                                 |
| name      | string | ❌       | The schema file's name.                               |
| path      | string | ❌       | The file system path to the schema file.              |
| createdAt | string | ❌       | The date and time at which the file was created.      |
| createdBy | string | ❌       | The user ID of the user that created the file.        |
| updatedAt | string | ❌       | The date and time at which the file was last updated. |
| updatedBy | string | ❌       | The user ID of the user that last updated the file.   |

<!-- This file was generated by liblab | https://liblab.com/ -->
