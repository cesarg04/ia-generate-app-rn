export type TApiAdapterGet = {
  url: string;
  params?: object;
  headers?: Record<string, string>;
  requireToken?: boolean;
};

export type TApiAdapterPost = {
  url: string;
  data: any;
  params?: object;
  headers?: Record<string, string>;
  requireToken?: boolean;
};

export type TApiAdapterPatch = {
  url: string;
  data: any;
  params?: object;
  headers?: Record<string, string>;
  requireToken?: boolean;
};

export type TApiAdapterDelete = {
  url: string;
  params?: object;
  headers?: Record<string, string>;
  requireToken?: boolean;
};
