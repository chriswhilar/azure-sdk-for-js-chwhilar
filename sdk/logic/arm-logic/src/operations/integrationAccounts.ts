/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { IntegrationAccounts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { LogicManagementClientContext } from "../logicManagementClientContext";
import {
  IntegrationAccount,
  IntegrationAccountsListBySubscriptionNextOptionalParams,
  IntegrationAccountsListBySubscriptionOptionalParams,
  IntegrationAccountsListByResourceGroupNextOptionalParams,
  IntegrationAccountsListByResourceGroupOptionalParams,
  KeyVaultKey,
  ListKeyVaultKeysDefinition,
  IntegrationAccountsListKeyVaultKeysOptionalParams,
  IntegrationAccountsListBySubscriptionResponse,
  IntegrationAccountsListByResourceGroupResponse,
  IntegrationAccountsGetOptionalParams,
  IntegrationAccountsGetResponse,
  IntegrationAccountsCreateOrUpdateOptionalParams,
  IntegrationAccountsCreateOrUpdateResponse,
  IntegrationAccountsUpdateOptionalParams,
  IntegrationAccountsUpdateResponse,
  IntegrationAccountsDeleteOptionalParams,
  GetCallbackUrlParameters,
  IntegrationAccountsListCallbackUrlOptionalParams,
  IntegrationAccountsListCallbackUrlResponse,
  IntegrationAccountsListKeyVaultKeysResponse,
  TrackingEventsDefinition,
  IntegrationAccountsLogTrackingEventsOptionalParams,
  RegenerateActionParameter,
  IntegrationAccountsRegenerateAccessKeyOptionalParams,
  IntegrationAccountsRegenerateAccessKeyResponse,
  IntegrationAccountsListBySubscriptionNextResponse,
  IntegrationAccountsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing IntegrationAccounts operations. */
export class IntegrationAccountsImpl implements IntegrationAccounts {
  private readonly client: LogicManagementClientContext;

  /**
   * Initialize a new instance of the class IntegrationAccounts class.
   * @param client Reference to the service client
   */
  constructor(client: LogicManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of integration accounts by subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: IntegrationAccountsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<IntegrationAccount> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: IntegrationAccountsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<IntegrationAccount[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: IntegrationAccountsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<IntegrationAccount> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of integration accounts by resource group.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: IntegrationAccountsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<IntegrationAccount> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: IntegrationAccountsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<IntegrationAccount[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: IntegrationAccountsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<IntegrationAccount> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the integration account's Key Vault keys.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param listKeyVaultKeys The key vault parameters.
   * @param options The options parameters.
   */
  public listKeyVaultKeys(
    resourceGroupName: string,
    integrationAccountName: string,
    listKeyVaultKeys: ListKeyVaultKeysDefinition,
    options?: IntegrationAccountsListKeyVaultKeysOptionalParams
  ): PagedAsyncIterableIterator<KeyVaultKey> {
    const iter = this.listKeyVaultKeysPagingAll(
      resourceGroupName,
      integrationAccountName,
      listKeyVaultKeys,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listKeyVaultKeysPagingPage(
          resourceGroupName,
          integrationAccountName,
          listKeyVaultKeys,
          options
        );
      }
    };
  }

  private async *listKeyVaultKeysPagingPage(
    resourceGroupName: string,
    integrationAccountName: string,
    listKeyVaultKeys: ListKeyVaultKeysDefinition,
    options?: IntegrationAccountsListKeyVaultKeysOptionalParams
  ): AsyncIterableIterator<KeyVaultKey[]> {
    let result = await this._listKeyVaultKeys(
      resourceGroupName,
      integrationAccountName,
      listKeyVaultKeys,
      options
    );
    yield result.value || [];
  }

  private async *listKeyVaultKeysPagingAll(
    resourceGroupName: string,
    integrationAccountName: string,
    listKeyVaultKeys: ListKeyVaultKeysDefinition,
    options?: IntegrationAccountsListKeyVaultKeysOptionalParams
  ): AsyncIterableIterator<KeyVaultKey> {
    for await (const page of this.listKeyVaultKeysPagingPage(
      resourceGroupName,
      integrationAccountName,
      listKeyVaultKeys,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of integration accounts by subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: IntegrationAccountsListBySubscriptionOptionalParams
  ): Promise<IntegrationAccountsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Gets a list of integration accounts by resource group.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: IntegrationAccountsListByResourceGroupOptionalParams
  ): Promise<IntegrationAccountsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Gets an integration account.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    integrationAccountName: string,
    options?: IntegrationAccountsGetOptionalParams
  ): Promise<IntegrationAccountsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, integrationAccountName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates an integration account.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param integrationAccount The integration account.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    integrationAccountName: string,
    integrationAccount: IntegrationAccount,
    options?: IntegrationAccountsCreateOrUpdateOptionalParams
  ): Promise<IntegrationAccountsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        integrationAccount,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Updates an integration account.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param integrationAccount The integration account.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    integrationAccountName: string,
    integrationAccount: IntegrationAccount,
    options?: IntegrationAccountsUpdateOptionalParams
  ): Promise<IntegrationAccountsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        integrationAccount,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Deletes an integration account.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    integrationAccountName: string,
    options?: IntegrationAccountsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, integrationAccountName, options },
      deleteOperationSpec
    );
  }

  /**
   * Gets the integration account callback URL.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param parameters The callback URL parameters.
   * @param options The options parameters.
   */
  listCallbackUrl(
    resourceGroupName: string,
    integrationAccountName: string,
    parameters: GetCallbackUrlParameters,
    options?: IntegrationAccountsListCallbackUrlOptionalParams
  ): Promise<IntegrationAccountsListCallbackUrlResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, integrationAccountName, parameters, options },
      listCallbackUrlOperationSpec
    );
  }

  /**
   * Gets the integration account's Key Vault keys.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param listKeyVaultKeys The key vault parameters.
   * @param options The options parameters.
   */
  private _listKeyVaultKeys(
    resourceGroupName: string,
    integrationAccountName: string,
    listKeyVaultKeys: ListKeyVaultKeysDefinition,
    options?: IntegrationAccountsListKeyVaultKeysOptionalParams
  ): Promise<IntegrationAccountsListKeyVaultKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, integrationAccountName, listKeyVaultKeys, options },
      listKeyVaultKeysOperationSpec
    );
  }

  /**
   * Logs the integration account's tracking events.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param logTrackingEvents The callback URL parameters.
   * @param options The options parameters.
   */
  logTrackingEvents(
    resourceGroupName: string,
    integrationAccountName: string,
    logTrackingEvents: TrackingEventsDefinition,
    options?: IntegrationAccountsLogTrackingEventsOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, integrationAccountName, logTrackingEvents, options },
      logTrackingEventsOperationSpec
    );
  }

  /**
   * Regenerates the integration account access key.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param regenerateAccessKey The access key type.
   * @param options The options parameters.
   */
  regenerateAccessKey(
    resourceGroupName: string,
    integrationAccountName: string,
    regenerateAccessKey: RegenerateActionParameter,
    options?: IntegrationAccountsRegenerateAccessKeyOptionalParams
  ): Promise<IntegrationAccountsRegenerateAccessKeyResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        regenerateAccessKey,
        options
      },
      regenerateAccessKeyOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: IntegrationAccountsListBySubscriptionNextOptionalParams
  ): Promise<IntegrationAccountsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The resource group name.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: IntegrationAccountsListByResourceGroupNextOptionalParams
  ): Promise<IntegrationAccountsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Logic/integrationAccounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccount
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccount
    },
    201: {
      bodyMapper: Mappers.IntegrationAccount
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.integrationAccount,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccount
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.integrationAccount,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listCallbackUrlOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/listCallbackUrl",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CallbackUrl
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listKeyVaultKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/listKeyVaultKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.KeyVaultKeyCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.listKeyVaultKeys,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const logTrackingEventsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/logTrackingEvents",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.logTrackingEvents,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const regenerateAccessKeyOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/regenerateAccessKey",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccount
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.regenerateAccessKey,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
