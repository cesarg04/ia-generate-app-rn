export interface QRTKValues<B = unknown, P = unknown, Q = unknown> {
    body: B;
    params: P;
    query: Q;
  }
  
  export type WithBody<B> = Pick<QRTKValues<B, unknown, unknown>, "body">;
  export type WithParams<P> = Pick<QRTKValues<unknown, P, unknown>, "params">;
  export type WithQuery<Q> = Pick<QRTKValues<unknown, unknown, Q>, "query">;
  export type WithBodyAndParams<B, P> = Pick<QRTKValues<B, P, unknown>, "body" | "params">;
  export type WithBodyAndQuery<B, Q> = Pick<QRTKValues<B, unknown, Q>, "body" | "query">;
  export type WithParamsAndQuery<P, Q> = Pick<QRTKValues<unknown, P, Q>, "params" | "query">;
  export type WithAll<B, P, Q> = QRTKValues<B, P, Q>;
  