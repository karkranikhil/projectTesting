import { LightningElement, track } from "lwc";
// import getContactLists from "@salesforce/apex/ContactController.getContactLists";
// import getAccountLists from "@salesforce/apex/AccountController.getAccountLists";
export default class XlsxDemo extends LightningElement {
  @track xlsHeader = [];
  @track workSheetNameList = [];
  @track xlsData = [];
  @track filename = "nikhil_demo.xlsx";
  @track accountData = [];
  @track contactData = [];
  
  connectedCallback() {
    getContactLists()
      .then(result => {
        console.log(result);
        this.contactHeader = Object.keys(result[0]);
        this.contactData = [...this.contactData, ...result];
        this.xlsFormatter(result, "Contacts");
      })
      .catch(error => {
        console.error(error);
      });
    getAccountLists()
      .then(result => {
        console.log(result);
        this.accountHeader = Object.keys(result[0]);
        this.accountData = [...this.accountData, ...result];
        this.xlsFormatter(result, "Accounts");
      })
      .catch(error => {
        console.error(error);
      });
  }

  xlsFormatter(data, sheetName) {
    let Header = Object.keys(data[0]);
    this.xlsHeader.push(Header);
    this.workSheetNameList.push(sheetName);
    this.xlsData.push(data);
  }

  download() {
    this.template.querySelector("c-xlsx-main").download();
  }
}