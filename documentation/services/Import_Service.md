# Import_Service

A list of all methods in the `Import_Service` service. Click on the method name to view detailed information about that method.

| Methods                                             | Description                                                                                                                                                 |
| :-------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [importOpenApiDefinition](#importopenapidefinition) | Imports an OpenAPI definition into Postman as a new [Postman Collection](https://learning.postman.com/docs/getting-started/creating-the-first-collection/). |

## importOpenApiDefinition

Imports an OpenAPI definition into Postman as a new [Postman Collection](https://learning.postman.com/docs/getting-started/creating-the-first-collection/).

- HTTP Method: `POST`
- Endpoint: `/import/openapi`

**Parameters**

| Name      | Type                                                                          | Required | Description         |
| :-------- | :---------------------------------------------------------------------------- | :------- | :------------------ |
| body      | [ImportOpenApiDefinitionRequest](../models/ImportOpenApiDefinitionRequest.md) | ❌       | The request body.   |
| workspace | string                                                                        | ❌       | The workspace's ID. |

**Return Type**

`ImportOpenApiDefinitionOkResponse`

**Example Usage Code Snippet**

```typescript
import { ImportOpenApiDefinitionRequest, JsonSchema, JsonStringified, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const jsonSchemaType = JsonSchemaType.JSON;

  const importOpenApiDefinitionRequest: JsonSchema = {
    type: jsonSchemaType,
    input: {},
    options: {},
  };

  const { data } = await postmanClient.import_.importOpenApiDefinition(input, {
    workspace: '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
