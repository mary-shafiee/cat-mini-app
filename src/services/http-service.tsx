import apiClient from "./api-client";

// interface Entity {
//   id: number;
// }

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  getWithMinWeight<T>(weight = 1) {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(`${this.endpoint}?min_weight=${weight}`, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  Add<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  //   Delete(id: number) {
  //     return apiClient.delete(this.endpoint + "/" + id);
  //   }

  //   Update<T extends Entity>(entity: T) {
  //     return apiClient.patch(this.endpoint + "/" + entity.id, entity);
  //   }
}

const create = (endpoint: string) => new HttpService(endpoint); // lambda function

export default create;
