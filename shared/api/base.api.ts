import axios, { AxiosRequestConfig } from "axios";
import { ENVIRONMENT_VAR } from "../constants/env/env.const";
import * as SecureStore from "expo-secure-store";

export class ApiAdapter {
  private apiUrl: string;
  public token: string | null = null;

  constructor() {
    this.apiUrl = ENVIRONMENT_VAR.API_URL;
    this.initToken();
  }

  // Método para inicializar el token si es necesario
  async initToken(): Promise<void> {
    const tokennn = await SecureStore.getItemAsync("token");
    this.token = tokennn;
  }

  // Método privado para construir los headers
  private buildHeaders(
    customHeaders?: Record<string, string>,
    requireToken: boolean = true
  ): Record<string, string> {
    const headers: Record<string, string> = {
      "Content-Type": "multipart/form-data",
      ...customHeaders,
    };

    if (requireToken && this.token) {
      headers["x-token"] = this.token;
    }
    return headers;
  }

  // Métodos para las peticiones
  async get<T>(
    url: string,
    params?: object,
    headers?: Record<string, string>,
    requireToken: boolean = true
  ): Promise<T> {
    if (requireToken && !this.token) {
      throw new Error("No token provided");
    }
    const config: AxiosRequestConfig = {
      headers: this.buildHeaders(headers, requireToken),
      params,
    };

    const response = await axios.get<T>(this.apiUrl + url, config);
    return response.data;
  }

  async post<T>(
    url: string,
    data: any,
    params?: object,
    headers?: Record<string, string>,
    requireToken: boolean = true
  ): Promise<T> {
    const config: AxiosRequestConfig = {
      headers: this.buildHeaders(headers, requireToken),
      params,
    };

    const response = await axios.post<T>(this.apiUrl + url, data, config);
    return response.data;
  }

  async patch<T>(
    url: string,
    data: any,
    params?: object,
    headers?: Record<string, string>,
    requireToken: boolean = true
  ): Promise<T> {
    const config: AxiosRequestConfig = {
      headers: this.buildHeaders(headers, requireToken),
      params,
    };

    const response = await axios.patch<T>(this.apiUrl + url, data, config);
    return response.data;
  }

  async delete<T>(
    url: string,
    params?: object,
    headers?: Record<string, string>,
    requireToken: boolean = true
  ): Promise<T> {
    const config: AxiosRequestConfig = {
      headers: this.buildHeaders(headers, requireToken),
      params,
    };

    const response = await axios.delete<T>(this.apiUrl + url, config);
    return response.data;
  }
}
