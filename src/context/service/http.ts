import swal from "sweetalert";
import { HTTPContentType, HTTPMetod } from "@typing/enums";
import { ServiceError } from "@utils";
import globalConfig from "@config";

import type {
  HTTPBodyFiles,
  HTTPConfigConnection,
  HTTPConfigGet,
  HTTPConfigMethods,
  HTTPConnectionReturn
} from "@typing/contexts";

export default class Http {
  private api: string;

  constructor(private token?: string) {
    this.api = globalConfig.api;

    Object.freeze(this);
  }

  private async connection<T, R>(config: HTTPConfigConnection<T>): Promise<HTTPConnectionReturn<R>> {
    try {
      const contentType = config.contentType ?? HTTPContentType.JSON;
      const headers = {
        ...(contentType !== HTTPContentType.FILES && config.method !== HTTPMetod.GET ? {
          "Content-Type": contentType
        } : {}),
        ...(config.secure ? {
          Authorization: `Bearer ${this.token}`
        } : {})
      };
      let body: string | FormData;

      switch (contentType) {
        case HTTPContentType.FILES:
          const { files = [], file, ...addToFormData } = config.body as HTTPBodyFiles<T>;
          body = new FormData();
          files.forEach((fileItem, index) => {
            (body as FormData).append(`file${index}`, fileItem, fileItem.name);
          });

          if (file) body.append("file", file, file.name);

          Object.keys(addToFormData).forEach((key) => {
            (body as FormData).append(key, addToFormData[key]);
          });
          break;
        default:
          body = JSON.stringify(config.body);
          break;
      }

      const requestConfig = config.method === HTTPMetod.GET ? {
        method: config.method,
        headers
      } : {
        method: config.method,
        headers,
        body
      };

      const request = await fetch(`${this.api}/${config.endpoint}${config.query}`, {
        ...requestConfig,
        ...(config.signal ? { signal: config.signal } : {})
      });

      switch (contentType) {
        default:
          const response = await request.json();

          if (response.errors || request.status !== 200) {
            throw new ServiceError({
              message: config.errorMessage ?? response.message,
              code: response?.code ?? "",
              status: response.status,
              errors: response.errors ?? response.error ?? ""
            });
          }

          return {
            success: response.success,
            message: response.message,
            payload: response.payload
          };
      }
    } catch (error) {
      let message = "¡Oh no!";
      let name = "Error";
      if (error instanceof Error) {
        message = error.message;
        name = error.name;
      }
      if (error instanceof ServiceError) {
        message = error.message;
        name = error.name;

        throw new ServiceError(error.viewData());
      }

      if (!name.includes("AbortError")) {
        swal("Error!", message, "error");
      }

      throw new Error(message);
    }
  }

  async get<R>({ endpoint, query = "", secure = true, ...config }: HTTPConfigGet) {

    return this.connection<never, R>({
      method: HTTPMetod.GET,
      secure,
      endpoint,
      query,
      ...config
    });
  }

  async put<T, R>({ endpoint, query = "", secure = true, ...config }: HTTPConfigMethods<T>) {

    return this.connection<T, R>({
      method: HTTPMetod.PUT,
      secure,
      endpoint,
      query,
      ...config
    });
  }

  async post<T, R>({ endpoint, query = "", secure = true, ...config }: HTTPConfigMethods<T>) {

    return this.connection<T, R>({
      method: HTTPMetod.POST,
      secure,
      endpoint,
      query,
      ...config
    });
  }

  async delete<T, R>({ endpoint, query = "", secure = true, ...config }: HTTPConfigMethods<T>) {

    return this.connection<T, R>({
      method: HTTPMetod.DELETE,
      secure,
      endpoint,
      query,
      ...config
    });
  }
}
