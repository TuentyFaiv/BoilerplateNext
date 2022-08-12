import swal from "sweetalert";
import { HTTPContentType, HTTPMetod } from "@typing";
import globalConfig from "@config";

import type {
  HTTPBodyFiles,
  HTTPConfigConnection,
  HTTPConfigGet,
  HTTPConfigMethods,
  HTTPConnectionReturn
} from "@typing";

export default class Http {
  private api: string;

  constructor(private token?: string, private secret?: string) {
    this.api = globalConfig.api;

    Object.freeze(this);
  }

  private async connection<T, R>(config: HTTPConfigConnection<T>): Promise<HTTPConnectionReturn<R>> {
    try {
      const contentType = config.contentType ?? HTTPContentType.JSON;
      const headers = {
        "Accept-Language": config.lang ?? "",
        ...(contentType !== HTTPContentType.FILES && config.method !== HTTPMetod.GET ? {
          "Content-Type": contentType
        } : {}),
        ...(config.secure ? {
          Authorization: `Bearer ${this.token}`,
          Key: this.secret
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

      if (!request.ok) throw new Error(config.errorMessage ?? "");

      switch (contentType) {
        default:
          const { data, error, result } = await request.json();

          if (error && !result) throw new Error(config.errorMessage ?? error);

          return {
            data,
            error,
            result
          };
      }
    } catch (error) {
      let message = "¡Oh no!";
      let name = "Error";
      if (error instanceof Error) {
        message = error.message;
        name = error.name;
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
