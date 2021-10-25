import style from './styles/header.module.scss'
const Header = () => {
    return (<section className={style.wrapper}>
        <h1>LOGO</h1>
        <ul>
            <li><a href="javascript:">Men</a></li>
            <li><a href="javascript:">Women</a></li>
            <li><a href="javascript:">Kids</a></li>
            <li><a href="javascript:">Ftw</a></li>
            <li><a href="javascript:">Accessories</a></li>
        </ul>
        <div className="input-group mb-3 p-0">
            <input type="text" className="form-control" placeholder="Search Here" />
            <button type="submit" className="input-group-text btn-light"><i className="bi bi-search me-2"></i></button>
        </div>
    </section>)
}

export default Header;