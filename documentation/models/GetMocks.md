# GetMocks

**Properties**

| Name  | Type            | Required | Description |
| :---- | :-------------- | :------- | :---------- |
| mocks | GetMocksMocks[] | ❌       |             |

# GetMocksMocks

Information about the mock servers.

**Properties**

| Name        | Type        | Required | Description                                                                                                                        |
| :---------- | :---------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| id          | string      | ❌       | The mock server's ID.                                                                                                              |
| owner       | string      | ❌       | The ID of mock server's owner.                                                                                                     |
| uid         | string      | ❌       | The mock server's unique ID.                                                                                                       |
| collection  | string      | ❌       | The unique ID of the mock's associated collection.                                                                                 |
| mockUrl     | string      | ❌       | The mock server URL.                                                                                                               |
| config      | MocksConfig | ❌       | Information about the mock server's configuration.                                                                                 |
| createdAt   | string      | ❌       | The date and time at which the mock server was created.                                                                            |
| environment | string      | ❌       | The mock server's associated environment ID.                                                                                       |
| isPublic    | boolean     | ❌       | If true, the mock server is public and visible to all users. This field does not indicate the mock server's access control status. |
| name        | string      | ❌       | The mock server's name.                                                                                                            |
| updatedAt   | string      | ❌       | The date and time at which the mock server was last updated.                                                                       |

# MocksConfig

Information about the mock server's configuration.

**Properties**

| Name             | Type     | Required | Description                                                                                                                                        |
| :--------------- | :------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| delay            | Delay    | ❌       | Information about the mock server's simulated network delay settings. This returns a null value if there are no configured network delay settings. |
| headers          | string[] | ❌       | A list of the mock server's headers.                                                                                                               |
| matchBody        | boolean  | ❌       | If true, match the request body.                                                                                                                   |
| matchQueryParams | boolean  | ❌       | If true, match query parameters.                                                                                                                   |
| matchWildcards   | boolean  | ❌       | If true, use wildcard variable matching.                                                                                                           |
| serverResponseId | string   | ❌       | The ID of mock server's default response for requests. All calls to the mock server will return the defined response.                              |

# Delay

Information about the mock server's simulated network delay settings. This returns a null value if there are no configured network delay settings.

**Properties**

| Name     | Type      | Required | Description                                                                                                                                       |
| :------- | :-------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| type\_   | DelayType | ❌       | The type of simulated delay value: - `fixed` — The delay value is a fixed value.                                                                  |
| preset   | Preset    | ❌       | The simulated fixed network delay value: - `1` — 2G (300 ms). - `2` — 3G (100 ms). The object does not return this value for custom delay values. |
| duration | number    | ❌       | The configured delay, in milliseconds.                                                                                                            |

# DelayType

The type of simulated delay value: - `fixed` — The delay value is a fixed value.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| fixed | string | ✅       | "fixed"     |

# Preset

The simulated fixed network delay value: - `1` — 2G (300 ms). - `2` — 3G (100 ms). The object does not return this value for custom delay values.

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| 1    | string | ✅       | "1"         |
| 2    | string | ✅       | "2"         |

<!-- This file was generated by liblab | https://liblab.com/ -->
