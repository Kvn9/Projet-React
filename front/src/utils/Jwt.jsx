/**
 * JWT decoder
 */

class Jwt {
    // function which decode the token pass like args
    parse(token) {
      // return error if token is invalid
      if (!token | (token === undefined) | (token === null)) {
        return;
      }
      // split the token and take the second
      const base64Url = token.split(".")[1];
      // replace "-" with "+; "_" with "/"
      const base64 = base64Url.replace("-", "+").replace("_", "/");
      // return the result parsed in JSON
      return JSON.parse(window.atob(base64));
    }
  }
  
  export default new Jwt();