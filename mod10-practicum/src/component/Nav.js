class Nav {
    render(){
        return `
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">
            <ul class="nav flex-column">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#dashboard">
                    <span data-feather="home"></span>
                    Дашборд
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#orders">
                    <span data-feather="file"></span>
                    Заказы
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#goods">
                    <span data-feather="shopping-cart"></span>
                    Товары
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#customers">
                    <span data-feather="users"></span>
                    Покупатели
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#reports">
                    <span data-feather="bar-chart-2"></span>
                    Отчёты
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#integrations">
                    <span data-feather="layers"></span>
                    Интеграции
                </a>
                </li>
            </ul>

            </div>
        </nav>`
    } 
}

export default Nav;