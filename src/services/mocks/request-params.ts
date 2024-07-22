// This file was generated by liblab | https://liblab.com/

import { GetMockCallLogsSort } from './models/get-mock-call-logs-sort';
import { AscDesc } from '../common/asc-desc';

export interface GetMocksParams {
  teamId?: string;
  workspace?: string;
}

export interface CreateMockParams {
  workspaceId?: string;
}

export interface GetMockCallLogsParams {
  limit?: number;
  cursor?: string;
  until?: string;
  since?: string;
  responseStatusCode?: number;
  responseType?: string;
  requestMethod?: string;
  requestPath?: string;
  sort?: GetMockCallLogsSort;
  direction?: AscDesc;
  include?: string;
}
