# GetMonitor

**Properties**

| Name    | Type              | Required | Description |
| :------ | :---------------- | :------- | :---------- |
| monitor | GetMonitorMonitor | ❌       |             |

# GetMonitorMonitor

**Properties**

| Name           | Type             | Required | Description                                                                                                                             |
| :------------- | :--------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| id             | string           | ❌       | The monitor's ID.                                                                                                                       |
| name           | string           | ❌       | The monitor's name.                                                                                                                     |
| uid            | string           | ❌       | The monitor's unique ID.                                                                                                                |
| owner          | number           | ❌       | The ID of monitor's owner.                                                                                                              |
| collectionUid  | string           | ❌       | The unique ID of the monitor's associated collection.                                                                                   |
| environmentUid | string           | ❌       | The unique ID of the monitor's associated environment.                                                                                  |
| distribution   | string[]         | ❌       | A list of the monitor's [geographic regions](https://learning.postman.com/docs/monitoring-your-api/setting-up-monitor/#adding-regions). |
| lastRun        | LastRun          | ❌       | Information about the monitor's previous run.                                                                                           |
| notifications  | Notifications    | ❌       | Information about the monitor's notification settings.                                                                                  |
| options        | Options          | ❌       | Information about the monitor's option settings.                                                                                        |
| schedule       | MonitorSchedule2 | ❌       | Information about the monitor's schedule.                                                                                               |

# LastRun

Information about the monitor's previous run.

**Properties**

| Name       | Type         | Required | Description                                                      |
| :--------- | :----------- | :------- | :--------------------------------------------------------------- |
| finishedAt | string       | ❌       | The date and time at which the monitor's previous run completed. |
| startedAt  | string       | ❌       | The date and time at which the monitor's previous run started.   |
| stats      | LastRunStats | ❌       | Information about the monitor's stats.                           |
| status     | string       | ❌       | The monitor's status after its last run.                         |

# LastRunStats

Information about the monitor's stats.

**Properties**

| Name       | Type             | Required | Description                                 |
| :--------- | :--------------- | :------- | :------------------------------------------ |
| assertions | StatsAssertions1 | ❌       | Information about the monitor's assertions. |
| requests   | StatsRequests1   | ❌       | Information about the monitor's requests.   |

# StatsAssertions1

Information about the monitor's assertions.

**Properties**

| Name   | Type   | Required | Description                          |
| :----- | :----- | :------- | :----------------------------------- |
| failed | number | ❌       | The total number of test failures.   |
| total  | number | ❌       | The total number of tests performed. |

# StatsRequests1

Information about the monitor's requests.

**Properties**

| Name  | Type   | Required | Description                   |
| :---- | :----- | :------- | :---------------------------- |
| total | number | ❌       | The total number of requests. |

# Notifications

Information about the monitor's notification settings.

**Properties**

| Name      | Type        | Required | Description |
| :-------- | :---------- | :------- | :---------- |
| onError   | OnError[]   | ❌       |             |
| onFailure | OnFailure[] | ❌       |             |

# OnError

**Properties**

| Name  | Type   | Required | Description                                               |
| :---- | :----- | :------- | :-------------------------------------------------------- |
| email | string | ❌       | The email address of the user to notify on monitor error. |

# OnFailure

**Properties**

| Name  | Type   | Required | Description                                                 |
| :---- | :----- | :------- | :---------------------------------------------------------- |
| email | string | ❌       | The email address of the user to notify on monitor failure. |

# Options

Information about the monitor's option settings.

**Properties**

| Name            | Type    | Required | Description                          |
| :-------------- | :------ | :------- | :----------------------------------- |
| followRedirects | boolean | ❌       | If true, follow redirects enabled.   |
| requestDelay    | number  | ❌       | The monitor's request delay value.   |
| requestTimeout  | number  | ❌       | The monitor's request timeout value. |
| strictSsl       | boolean | ❌       | If true, strict SSL enabled.         |

# MonitorSchedule2

Information about the monitor's schedule.

**Properties**

| Name     | Type   | Required | Description                                        |
| :------- | :----- | :------- | :------------------------------------------------- |
| cron     | string | ❌       | The monitor's cron frequency value.                |
| nextRun  | string | ❌       | The date and time of monitor's next scheduled run. |
| timezone | string | ❌       | The monitor's timezone.                            |

<!-- This file was generated by liblab | https://liblab.com/ -->
