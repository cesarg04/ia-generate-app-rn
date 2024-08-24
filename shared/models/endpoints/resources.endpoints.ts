enum ResourcesStatic {
  /**
   * @member {string}
   * @method post
   * @version 1.0
   * @type public
   * @description Create a resource
   */
  createResource = "api/resources",

  /**
   * @member {string}
   * @method get
   * @version 1.0
   * @type public
   * @description get Resources
   */
  getResources = "api/resources",
}

const ResourcesDynamic = {
  /**
   * @member {string}
   * @method post
   * @version 2.0
   * @description Get Resources By Id
   */
  getResourcesById: (id: string) => `api/resources/${id}`,
};

export const ResourcesEndpoints = {
  ...ResourcesDynamic,
  ...ResourcesStatic,
};

export type ResourcesEndpoints = typeof ResourcesEndpoints;
