import {Endpoint} from "../models/Endpoint.model";
import {ServiceUrl} from "../constants/rest.constants";

export abstract class RestUrlBuilder {
  private static get usingNonprod(): boolean {
    const host = window.location.host;
    return host.includes("local") || host.includes("nonprod");
  }

  public static buildRestUrl(endpoint: Endpoint): string {
    const serviceString = this.getServiceString(endpoint);
    const controllerString = this.getControllerString(endpoint);
    const paramString = this.getParamString(endpoint);
    const collectionString = this.getCollectionString(endpoint);
    return serviceString + controllerString + paramString + collectionString;
  }

  private static getServiceString(endpoint: Endpoint): string {
    if (endpoint.service) {
      if (RestUrlBuilder.usingNonprod) {
        if (endpoint.service === ServiceUrl.BasicExpress) {
          return ServiceUrl.NonProdBasicExpress;
        }
      }
      return endpoint.service;
    } else {
      return "";
    }
  }

  private static getControllerString(endpoint: Endpoint): string {
    if (endpoint.controller) {
      return "/" + endpoint.controller;
    } else {
      return "";
    }
  }

  private static getParamString(endpoint: Endpoint): string {
    if (endpoint.params) {
      return "/" + endpoint.params;
    } else {
      return "";
    }
  }

  private static getCollectionString(endpoint: Endpoint): string {
    if (endpoint.collection) {
      return "/" + endpoint.collection;
    } else {
      return "";
    }
  }
}
