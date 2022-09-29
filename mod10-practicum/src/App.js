import Customer from "./component/Customers";
import Dashboard from "./component/Dashboard";
import Goods from "./component/Goods";
import Header from "./component/Header";
import Integrations from "./component/Integrations";
import Modal from "./component/Modal";
import Nav from "./component/Nav";
import NotFound from "./component/NotFound";
import Orders from "./component/Orders";
import Reports from "./component/Reports";

class App {

    constructor(selector) {
        this.root = document.querySelector(selector)
    }

    render(selector) {
        if(selector) {
            this.root = document.querySelector(selector)
        }

        let html = "";
        
        const header = new Header();
        html += header.render();
        
        html +=`<div class="container-fluid"><div class="row">`;
        
        const nav = new Nav();
        html += nav.render();

        html += `<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">`;

        const dashboard = new Dashboard();
        html += dashboard.render();
        
        const orders = new Orders();
        html += orders.render();
        
        const goods = new Goods();
        html += goods.render();

        const customers = new Customer();
        html += customers.render();

        const reports = new Reports();
        html += reports.render();

        const integrations = new Integrations();
        html += integrations.render();

        html += `</main></div></div>`

        this.root.innerHTML = html;
    }
}

export default App;