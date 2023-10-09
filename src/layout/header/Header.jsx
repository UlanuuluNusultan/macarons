import React from 'react'
import style from './Header.module.css'
import logo from '../../assets/logo.png'
import { DownOutlined } from '@ant-design/icons'
import { headerData, headerMenuData, } from '../../utils/constants/constants'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className={style.header}>
            <header>
                <div className={style.back1}>
                    <div className={style.header_first}>
                        <div className={style.header_menu}>
                            {headerMenuData.map((item) => (
                                <ul className={style.menu} key={item.id}>
                                    <li><Link to={item.path}>{item.title}</Link> </li>
                                </ul>
                            ))}
                        </div>
                        {headerData.map((item) => (
                            <div className={style.header_actions} key={item.id}>
                                <div className={style.actions}>
                                    <img src={item.svg} alt="" />
                                    <span>{item.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.back2}>
                    <div className={style.header_second}>
                        <div className={style.nav}>
                            <ul>
                                <li><Link to='/sales_week'>СЛАДКИЕ ДНИ</Link></li>
                                <li>ПОДАРОЧНЫЕ НАБОРЫ<DownOutlined />
                                    <ul>
                                        <li>ВСЕ НАБОРЫ</li>
                                        <li>ДЕНЬ УЧИТЕЛЯ</li>
                                        <li>ДЕНЬ РОЖДЕНИЯ</li>
                                        <li>МАКАРОНС КЛАСИЧЕСКИЕ</li>
                                        <li>СВАДЕБНЫЕ ПРЕДЛОЖЕНИЯ</li>
                                        <li>КИНДЕР-БАРЫ</li>
                                        <li>ДЕТСКИЕ ПРАЗДНИКИ</li>
                                    </ul>
                                </li>
                                <li>СОБРАТЬ НАБОР</li>
                            </ul>
                        </div>
                        <div>
                        <Link to='/'> <img src={logo} alt="" /></Link>
                           
                        </div>
                        <div className={style.nav}>
                            <ul>
                                <li>СОЗДАТЬ ДИЗАЙН</li>
                                <li>КОМПАНИЯМ <DownOutlined />
                                    <ul>
                                        <li>ОПТОВЫЕ ПОСТАВКИ</li>
                                        <li>КАРАМЕЛЬ НА ПАЛОЧКЕ ОПТОМ</li>
                                        <li>КОРПОРАТИВНЫЕ ПОДАКИ</li>
                                        <li>ЭЛКЕРЫ ОПТОМ</li>
                                    </ul>
                                </li>
                                <li>ВЕСЬ КАТАЛОГ <DownOutlined />
                                    <ul>
                                        <li>МАКАРОН</li>
                                        <li>ЭЛКЕРЫ</li>
                                        <li>ПОДАРОЧНЫЕ НАБОРЫ</li>
                                        <li>КОМБО-НАБОРЫ</li>
                                        <li>КАРАМЕЛЬ НА ПАЛОЧКЕ</li>
                                        <li>ВАФЕЛЬНЫЕ ТРУБОЧКИ</li>
                                        <li>КЕЙК-ПОПСЫ</li>
                                        <li>ДЕСЕРТ КАРТОШКА</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Header