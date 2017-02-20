import delay from './delay';
const settings = {
  "apiKey": "xxxxxx",
  "fromName": "LendFoundry Development",
  "fromAddress": "development@lendfoundry.com",
  "emailProvider": "SendGrid"
};

class emailConfigApi {
  static getEmailConfig() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(settings);
      }, delay);
    });
  }

  static saveEmailConfig(updatedEmailConfig) {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(updatedEmailConfig);
      }, delay);
    });
  }
}

export default emailConfigApi;
