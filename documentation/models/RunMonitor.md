# RunMonitor

**Properties**

| Name | Type | Required | Description                        |
| :--- | :--- | :------- | :--------------------------------- |
| run  | Run  | ❌       | Information about the monitor run. |

# Run

Information about the monitor run.

**Properties**

| Name       | Type         | Required | Description                                                      |
| :--------- | :----------- | :------- | :--------------------------------------------------------------- |
| info       | RunInfo      | ❌       | Information about the monitor.                                   |
| stats      | RunStats     | ❌       | Information about the monitor run's stats.                       |
| executions | Executions[] | ❌       | Information about the monitor run's executions.                  |
| failures   | any[]        | ❌       | If the monitor run failed, information about the run's failures. |

# RunInfo

Information about the monitor.

**Properties**

| Name           | Type   | Required | Description                                             |
| :------------- | :----- | :------- | :------------------------------------------------------ |
| jobId          | string | ❌       | The monitor's run job ID.                               |
| collectionUid  | string | ❌       | The unique ID of the monitor's associated collection.   |
| environmentUid | string | ❌       | The unique ID of the monitor's associated environment.  |
| monitorId      | string | ❌       | The monitor's ID.                                       |
| name           | string | ❌       | The monitor's name.                                     |
| status         | string | ❌       | The monitor run's status.                               |
| startedAt      | string | ❌       | The date and time at which the monitor run began.       |
| finishedAt     | string | ❌       | The date and time at which the monitor's run completed. |

# RunStats

Information about the monitor run's stats.

**Properties**

| Name       | Type             | Required | Description                         |
| :--------- | :--------------- | :------- | :---------------------------------- |
| assertions | StatsAssertions2 | ❌       | The monitor run's assertions stats. |
| requests   | StatsRequests2   | ❌       | The monitor run's request stats.    |

# StatsAssertions2

The monitor run's assertions stats.

**Properties**

| Name   | Type   | Required | Description                          |
| :----- | :----- | :------- | :----------------------------------- |
| total  | number | ❌       | The total number of tests performed. |
| failed | number | ❌       | The total number of test failures.   |

# StatsRequests2

The monitor run's request stats.

**Properties**

| Name   | Type   | Required | Description                     |
| :----- | :----- | :------- | :------------------------------ |
| total  | number | ❌       | The total number of requests.   |
| failed | number | ❌       | The number of request failures. |

# Executions

**Properties**

| Name     | Type                | Required | Description                                   |
| :------- | :------------------ | :------- | :-------------------------------------------- |
| id       | number              | ❌       | The execution ID.                             |
| item     | ExecutionsItem      | ❌       | Information about the executed item.          |
| request  | ExecutionsRequest1  | ❌       | Information about the monitor run's requests. |
| response | ExecutionsResponse1 | ❌       | Information about the monitor run's response. |

# ExecutionsItem

Information about the executed item.

**Properties**

| Name | Type   | Required | Description               |
| :--- | :----- | :------- | :------------------------ |
| name | string | ❌       | The executed item's name. |

# ExecutionsRequest1

Information about the monitor run's requests.

**Properties**

| Name      | Type   | Required | Description                                                                                           |
| :-------- | :----- | :------- | :---------------------------------------------------------------------------------------------------- |
| method    | string | ❌       | The request method.                                                                                   |
| url       | string | ❌       | The request's URL.                                                                                    |
| body      | any    | ❌       | Information about the request body, such as Content-Length.                                           |
| headers   | any    | ❌       | Information about the request headers, such as Content-Type, Accept, encoding, and other information. |
| timestamp | string | ❌       | The date and time of the request.                                                                     |

# ExecutionsResponse1

Information about the monitor run's response.

**Properties**

| Name         | Type   | Required | Description                                                                                            |
| :----------- | :----- | :------- | :----------------------------------------------------------------------------------------------------- |
| body         | any    | ❌       | Information about the request body, such as Content-Length.                                            |
| code         | number | ❌       | The response's HTTP status code.                                                                       |
| headers      | any    | ❌       | Information about the response headers, such as Content-Type, Accept, encoding, and other information. |
| responseSize | number | ❌       | The response size, in bytes.                                                                           |
| responseTime | number | ❌       | The response time, in milliseconds.                                                                    |

<!-- This file was generated by liblab | https://liblab.com/ -->
