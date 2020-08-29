import { LightningElement, track } from "lwc";
import retriveNews from "@salesforce/apex/newsController.retriveNews";

export default class NewsComponent extends LightningElement {
  @track isModalOpen = false;
  @track result = [];
  @track selectedNews = {};
  showModal(event) {
    let id = event.target.dataset.item;
    this.result.forEach(item => {
      if (item.id === id) {
        this.selectedNews = { ...item };
      }
    });
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }

  get modalClass() {
    return `slds-modal ${this.isModalOpen ? "slds-fade-in-open" : ""}`;
  }
  get modalBackdropClass() {
    return `slds-backdrop ${this.isModalOpen ? "slds-backdrop_open" : ""}`;
  }

  dateFormatter(date) {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(date);
    const secondDate = new Date();
    var diffDays = Math.round(Math.abs((secondDate - firstDate) / oneDay));
    return diffDays ? `${diffDays} days ago` : "Today";
  }

  connectedCallback() {
    this.fetchNews();
  }
  fetchNews() {
    retriveNews()
      .then(response => {
        this.formatNewsData(response.articles);
      })
      .catch(error => {
        console.error(error);
      });
  }
  formatNewsData(res) {
    this.result = res.map((item, index) => {
      let date = this.dateFormatter(item.publishedAt);
      let id = `news_${index + 1}`;
      let name = item.source.name;
      return { ...item, date: date, id: id, name: name };
    });
  }
}