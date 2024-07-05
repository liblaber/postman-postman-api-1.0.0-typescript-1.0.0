// This file was generated by liblab | https://liblab.com/

import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { BillingService } from './services/billing';
import { ApiService } from './services/api';
import { TagsService } from './services/tags';
import { AuditLogsService } from './services/audit-logs';
import { CollectionsService } from './services/collections';
import { CollectionItemsService } from './services/collection-items';
import { CollectionFoldersService } from './services/collection-folders';
import { CollectionRequestsService } from './services/collection-requests';
import { CollectionResponsesService } from './services/collection-responses';
import { SecretScannerService } from './services/secret-scanner';
import { EnvironmentsService } from './services/environments';
import { Import_Service } from './services/import_';
import { UserService } from './services/user';
import { MocksService } from './services/mocks';
import { MonitorsService } from './services/monitors';
import { PrivateApiNetworkService } from './services/private-api-network';
import { PullRequestsService } from './services/pull-requests';
import { ApiSecurityService } from './services/api-security';
import { ScimService } from './services/scim';
import { WebhooksService } from './services/webhooks';
import { WorkspacesService } from './services/workspaces';

export class PostmanClient {
  public readonly billing: BillingService;

  public readonly api: ApiService;

  public readonly tags: TagsService;

  public readonly auditLogs: AuditLogsService;

  public readonly collections: CollectionsService;

  public readonly collectionItems: CollectionItemsService;

  public readonly collectionFolders: CollectionFoldersService;

  public readonly collectionRequests: CollectionRequestsService;

  public readonly collectionResponses: CollectionResponsesService;

  public readonly secretScanner: SecretScannerService;

  public readonly environments: EnvironmentsService;

  public readonly import_: Import_Service;

  public readonly user: UserService;

  public readonly mocks: MocksService;

  public readonly monitors: MonitorsService;

  public readonly privateApiNetwork: PrivateApiNetworkService;

  public readonly pullRequests: PullRequestsService;

  public readonly apiSecurity: ApiSecurityService;

  public readonly scim: ScimService;

  public readonly webhooks: WebhooksService;

  public readonly workspaces: WorkspacesService;

  constructor(public config: SdkConfig) {
    const baseUrl = config.environment || config.baseUrl || Environment.DEFAULT;
    this.config = {
      ...config,
      baseUrl,
    };
    this.billing = new BillingService(this.config);

    this.api = new ApiService(this.config);

    this.tags = new TagsService(this.config);

    this.auditLogs = new AuditLogsService(this.config);

    this.collections = new CollectionsService(this.config);

    this.collectionItems = new CollectionItemsService(this.config);

    this.collectionFolders = new CollectionFoldersService(this.config);

    this.collectionRequests = new CollectionRequestsService(this.config);

    this.collectionResponses = new CollectionResponsesService(this.config);

    this.secretScanner = new SecretScannerService(this.config);

    this.environments = new EnvironmentsService(this.config);

    this.import_ = new Import_Service(this.config);

    this.user = new UserService(this.config);

    this.mocks = new MocksService(this.config);

    this.monitors = new MonitorsService(this.config);

    this.privateApiNetwork = new PrivateApiNetworkService(this.config);

    this.pullRequests = new PullRequestsService(this.config);

    this.apiSecurity = new ApiSecurityService(this.config);

    this.scim = new ScimService(this.config);

    this.webhooks = new WebhooksService(this.config);

    this.workspaces = new WorkspacesService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.billing.baseUrl = baseUrl;
    this.api.baseUrl = baseUrl;
    this.tags.baseUrl = baseUrl;
    this.auditLogs.baseUrl = baseUrl;
    this.collections.baseUrl = baseUrl;
    this.collectionItems.baseUrl = baseUrl;
    this.collectionFolders.baseUrl = baseUrl;
    this.collectionRequests.baseUrl = baseUrl;
    this.collectionResponses.baseUrl = baseUrl;
    this.secretScanner.baseUrl = baseUrl;
    this.environments.baseUrl = baseUrl;
    this.import_.baseUrl = baseUrl;
    this.user.baseUrl = baseUrl;
    this.mocks.baseUrl = baseUrl;
    this.monitors.baseUrl = baseUrl;
    this.privateApiNetwork.baseUrl = baseUrl;
    this.pullRequests.baseUrl = baseUrl;
    this.apiSecurity.baseUrl = baseUrl;
    this.scim.baseUrl = baseUrl;
    this.webhooks.baseUrl = baseUrl;
    this.workspaces.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.billing.baseUrl = environment;
    this.api.baseUrl = environment;
    this.tags.baseUrl = environment;
    this.auditLogs.baseUrl = environment;
    this.collections.baseUrl = environment;
    this.collectionItems.baseUrl = environment;
    this.collectionFolders.baseUrl = environment;
    this.collectionRequests.baseUrl = environment;
    this.collectionResponses.baseUrl = environment;
    this.secretScanner.baseUrl = environment;
    this.environments.baseUrl = environment;
    this.import_.baseUrl = environment;
    this.user.baseUrl = environment;
    this.mocks.baseUrl = environment;
    this.monitors.baseUrl = environment;
    this.privateApiNetwork.baseUrl = environment;
    this.pullRequests.baseUrl = environment;
    this.apiSecurity.baseUrl = environment;
    this.scim.baseUrl = environment;
    this.webhooks.baseUrl = environment;
    this.workspaces.baseUrl = environment;
  }

  set apiKey(apiKey: string) {
    this.billing.apiKey = apiKey;
    this.api.apiKey = apiKey;
    this.tags.apiKey = apiKey;
    this.auditLogs.apiKey = apiKey;
    this.collections.apiKey = apiKey;
    this.collectionItems.apiKey = apiKey;
    this.collectionFolders.apiKey = apiKey;
    this.collectionRequests.apiKey = apiKey;
    this.collectionResponses.apiKey = apiKey;
    this.secretScanner.apiKey = apiKey;
    this.environments.apiKey = apiKey;
    this.import_.apiKey = apiKey;
    this.user.apiKey = apiKey;
    this.mocks.apiKey = apiKey;
    this.monitors.apiKey = apiKey;
    this.privateApiNetwork.apiKey = apiKey;
    this.pullRequests.apiKey = apiKey;
    this.apiSecurity.apiKey = apiKey;
    this.scim.apiKey = apiKey;
    this.webhooks.apiKey = apiKey;
    this.workspaces.apiKey = apiKey;
  }

  set apiKeyHeader(apiKeyHeader: string) {
    this.billing.apiKeyHeader = apiKeyHeader;
    this.api.apiKeyHeader = apiKeyHeader;
    this.tags.apiKeyHeader = apiKeyHeader;
    this.auditLogs.apiKeyHeader = apiKeyHeader;
    this.collections.apiKeyHeader = apiKeyHeader;
    this.collectionItems.apiKeyHeader = apiKeyHeader;
    this.collectionFolders.apiKeyHeader = apiKeyHeader;
    this.collectionRequests.apiKeyHeader = apiKeyHeader;
    this.collectionResponses.apiKeyHeader = apiKeyHeader;
    this.secretScanner.apiKeyHeader = apiKeyHeader;
    this.environments.apiKeyHeader = apiKeyHeader;
    this.import_.apiKeyHeader = apiKeyHeader;
    this.user.apiKeyHeader = apiKeyHeader;
    this.mocks.apiKeyHeader = apiKeyHeader;
    this.monitors.apiKeyHeader = apiKeyHeader;
    this.privateApiNetwork.apiKeyHeader = apiKeyHeader;
    this.pullRequests.apiKeyHeader = apiKeyHeader;
    this.apiSecurity.apiKeyHeader = apiKeyHeader;
    this.scim.apiKeyHeader = apiKeyHeader;
    this.webhooks.apiKeyHeader = apiKeyHeader;
    this.workspaces.apiKeyHeader = apiKeyHeader;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
