class Goods {
    render(){
        return `            <h2 id="goods">Товары</h2>
        <div class="table-responsive">
        <table class="table table-striped table-sm">
            <thead>
            <tr>
                <th scope="col">Артикул товара</th>
                <th scope="col">Изображение</th>
                <th scope="col">Название</th>
                <th scope="col">Цена</th>
                <th scope="col">Количество</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1001</td>
                <td>random</td>
                <td>data</td>
                <td>placeholder</td>
                <td>placeholder</td>
            </tr>
            <tr>
                <td>1002</td>
                <td>placeholder</td>
                <td>irrelevant</td>
                <td>visual</td>
                <td>visual</td>
            </tr>                                     
            </tbody>
        </table>
        </div>`
    } 
}

export default Goods;