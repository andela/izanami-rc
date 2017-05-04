import { Shops, Products, Orders, Cart, Accounts, Emails } from "/lib/collections";

export default () => {
  // Global API configuration
  const Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true
  });

  const restfulEndpoints = (collectionName) => {
    return {
      routeOptions: {
        authRequired: true
      },
      endpoints: {
        // GET all items in collection
        get: {
          authRequired: false,
          action() {
            const records = collectionName.find();
            if (records) {
              return { statusCode: 201, status: "success", data: records };
            }
            return {
              statusCode: 404,
              status: "fail",
              message: "error"
            };
          }
        },
        // POST into a collection
        post: {
          action() {
            const toInsert = collectionName.insert(this.bodyParams);
            if (toInsert) {
              return { statusCode: 201, status: "success", data: toInsert };
            }

            return { status: "fail", message: "error" };
          }
        },

        // UPDATE a collection
        put: {
          action() {
            const toUpdate = collectionName.update(this.urlParams.id, {
              $set: this.bodyParams
            });
            if (toUpdate) {
              return { statusCode: 201, status: "success", data: toUpdate };
            }
            return { status: "fail", message: "record not found" };
          }
        },

        // DELETE an record in a collection
        delete: {
          action() {
            const toDelete = collectionName.remove(this.urlParams.id);

            if (toDelete) {
              return { status: "success", data: { message: "record deleted" } };
            }
            return { status: "fail", message: "record not found" };
          }
        }
      }
    };
  };

  Api.addCollection(Shops, restfulEndpoints(Shops));
  Api.addCollection(Products, restfulEndpoints(Products));
  Api.addCollection(Orders, restfulEndpoints(Orders));
  Api.addCollection(Cart, restfulEndpoints(Cart));
  Api.addCollection(Accounts, restfulEndpoints(Accounts));
  Api.addCollection(Emails, restfulEndpoints(Emails));
};
