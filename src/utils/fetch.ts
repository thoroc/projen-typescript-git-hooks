import * as https from "https";

/**
 * Get the content of a file from the given `url`.
 *
 * @param {String} url
 *
 * @returns {Promise<void>}
 */
export async function getContent(url: string): Promise<string> {
  // console.log(`Attempting to get data from ${url}`);

  return new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      response.setEncoding("utf8");
      let body: string = "";
      const code = response.statusCode ?? 0;

      if (code >= 400) {
        return reject(new Error(response.statusMessage));
      }

      // handle redirects
      if (code > 300 && code < 400 && !!response.headers.location) {
        return resolve(getContent(response.headers.location));
      }

      /**
       * deal with incoming data
       */
      response.on("data", (chunk) => {
        body += chunk;
      });

      response.on("end", () => {
        resolve(body);
      });

      return body;
    });

    /***
     * handles the errors on the request
     */
    request.on("error", (err) => {
      console.log(err);
      reject(err);
    });

    /***
     * handles the timeout error
     */
    request.on("timeout", (err: string) => {
      console.log(err);
      request.destroy();
    });

    /***
     * unhandle errors on the request
     */
    request.on("uncaughtException", (err) => {
      console.log(err);
      request.destroy();
    });

    /**
     * end the request to prevent ECONNRESETand socket hung errors
     */
    request.end(() => {
      console.log("request ends");
    });
  });
}
