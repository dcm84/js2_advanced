class Orders {
    render(){
        return `            <h2 id="orders">Заказы</h2>
        <div class="table-responsive">
        <table class="table table-striped table-sm">
            <thead>
            <tr>
                <th scope="col">Номер заказа</th>
                <th scope="col">ФИО покупателя</th>
                <th scope="col">Общая цена</th>
                <th scope="col">Статус</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1001</td>
                <td>random</td>
                <td>data</td>
                <td>placeholder</td>
            </tr>
            <tr>
                <td>1002</td>
                <td>placeholder</td>
                <td>irrelevant</td>
                <td>visual</td>
            </tr>                 
            <tr>
                <td>1003</td>
                <td>random</td>
                <td>data</td>
                <td>placeholder</td>
            </tr>
            <tr>
                <td>1004</td>
                <td>placeholder</td>
                <td>irrelevant</td>
                <td>visual</td>
            </tr>                 
            <tr>
                <td>1005</td>
                <td>random</td>
                <td>data</td>
                <td>placeholder</td>
            </tr>
            <tr>
                <td>1006</td>
                <td>placeholder</td>
                <td>irrelevant</td>
                <td>visual</td>
            </tr>                 
            </tbody>
        </table>
        </div>`
    }
}

export default Orders;