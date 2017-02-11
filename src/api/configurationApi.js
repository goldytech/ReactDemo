import delay from './delay';
const services = [
  {
    id : "email",
    name : "Email Service",
    path : "config/email"
  },
  {
    id : "otp",
    name : "OTP Service",
    path : "config/otp"
  },
  {
    id: "application",
    name: "Application Service",
    path: "config/application"
  }

]
class ConfigurationApi{
  static getAllServices(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(Object.assign([],services));
      },delay);
    });
  }
}
export default ConfigurationApi;
