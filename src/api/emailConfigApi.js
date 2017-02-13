import delay from './delay';
const emailConfig = {
  "emailProviderSettings": {
    "SendGrid": {
      "ApiKey": "xxxxxx",
      "FromName": "LendFoundry Development",
      "FromAddress": "development@lendfoundry.com"
    }
  },
  "emailProvider": "SendGrid"
};

class emailConfigApi {
  static getEmailConfig() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        debugger;
        resolve(emailConfig);
      }, delay);
    });
  }
}

export default emailConfigApi;
