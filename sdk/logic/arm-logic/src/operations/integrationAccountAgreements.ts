/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { IntegrationAccountAgreements } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { LogicManagementClientContext } from "../logicManagementClientContext";
import {
  IntegrationAccountAgreement,
  IntegrationAccountAgreementsListNextOptionalParams,
  IntegrationAccountAgreementsListOptionalParams,
  IntegrationAccountAgreementsListResponse,
  IntegrationAccountAgreementsGetOptionalParams,
  IntegrationAccountAgreementsGetResponse,
  IntegrationAccountAgreementsCreateOrUpdateOptionalParams,
  IntegrationAccountAgreementsCreateOrUpdateResponse,
  IntegrationAccountAgreementsDeleteOptionalParams,
  GetCallbackUrlParameters,
  IntegrationAccountAgreementsListContentCallbackUrlOptionalParams,
  IntegrationAccountAgreementsListContentCallbackUrlResponse,
  IntegrationAccountAgreementsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing IntegrationAccountAgreements operations. */
export class IntegrationAccountAgreementsImpl
  implements IntegrationAccountAgreements {
  private readonly client: LogicManagementClientContext;

  /**
   * Initialize a new instance of the class IntegrationAccountAgreements class.
   * @param client Reference to the service client
   */
  constructor(client: LogicManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of integration account agreements.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    integrationAccountName: string,
    options?: IntegrationAccountAgreementsListOptionalParams
  ): PagedAsyncIterableIterator<IntegrationAccountAgreement> {
    const iter = this.listPagingAll(
      resourceGroupName,
      integrationAccountName,
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
        return this.listPagingPage(
          resourceGroupName,
          integrationAccountName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    integrationAccountName: string,
    options?: IntegrationAccountAgreementsListOptionalParams
  ): AsyncIterableIterator<IntegrationAccountAgreement[]> {
    let result = await this._list(
      resourceGroupName,
      integrationAccountName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        integrationAccountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    integrationAccountName: string,
    options?: IntegrationAccountAgreementsListOptionalParams
  ): AsyncIterableIterator<IntegrationAccountAgreement> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      integrationAccountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of integration account agreements.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    integrationAccountName: string,
    options?: IntegrationAccountAgreementsListOptionalParams
  ): Promise<IntegrationAccountAgreementsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, integrationAccountName, options },
      listOperationSpec
    );
  }

  /**
   * Gets an integration account agreement.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param agreementName The integration account agreement name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    integrationAccountName: string,
    agreementName: string,
    options?: IntegrationAccountAgreementsGetOptionalParams
  ): Promise<IntegrationAccountAgreementsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, integrationAccountName, agreementName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates an integration account agreement.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param agreementName The integration account agreement name.
   * @param agreement The integration account agreement.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    integrationAccountName: string,
    agreementName: string,
    agreement: IntegrationAccountAgreement,
    options?: IntegrationAccountAgreementsCreateOrUpdateOptionalParams
  ): Promise<IntegrationAccountAgreementsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        agreementName,
        agreement,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes an integration account agreement.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param agreementName The integration account agreement name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    integrationAccountName: string,
    agreementName: string,
    options?: IntegrationAccountAgreementsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, integrationAccountName, agreementName, options },
      deleteOperationSpec
    );
  }

  /**
   * Get the content callback url.
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param agreementName The integration account agreement name.
   * @param listContentCallbackUrl The callback url parameters.
   * @param options The options parameters.
   */
  listContentCallbackUrl(
    resourceGroupName: string,
    integrationAccountName: string,
    agreementName: string,
    listContentCallbackUrl: GetCallbackUrlParameters,
    options?: IntegrationAccountAgreementsListContentCallbackUrlOptionalParams
  ): Promise<IntegrationAccountAgreementsListContentCallbackUrlResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        integrationAccountName,
        agreementName,
        listContentCallbackUrl,
        options
      },
      listContentCallbackUrlOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The resource group name.
   * @param integrationAccountName The integration account name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    integrationAccountName: string,
    nextLink: string,
    options?: IntegrationAccountAgreementsListNextOptionalParams
  ): Promise<IntegrationAccountAgreementsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, integrationAccountName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountAgreementListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements/{agreementName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountAgreement
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
    Parameters.integrationAccountName,
    Parameters.agreementName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements/{agreementName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountAgreement
    },
    201: {
      bodyMapper: Mappers.IntegrationAccountAgreement
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.agreement,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName,
    Parameters.agreementName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements/{agreementName}",
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
    Parameters.integrationAccountName,
    Parameters.agreementName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listContentCallbackUrlOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements/{agreementName}/listContentCallbackUrl",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowTriggerCallbackUrl
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.listContentCallbackUrl,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.integrationAccountName,
    Parameters.agreementName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationAccountAgreementListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.integrationAccountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
