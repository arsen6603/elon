import React, {useState} from 'react';

const HeaderComponent = () => {
    const [isOpen, setIsOpen] = useState(false)

    const changeMenuVisible = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='HeaderComponent'>
            <div className="HeaderComponent__Logo">
                <img src="/images/logo.png" alt=""/>
                <div className="HeaderComponent__Logo_Border"/>
            </div>

            <div className={`HamburgerMenu ${isOpen ? 'HamburgerMenu__Open' : null}`} onClick={changeMenuVisible}>
                <div className="bar-top"></div>
                <div className="bar-middle"></div>
                <div className="bar-bottom"></div>
            </div>
            <div className={`HamburgerMenu__Items ${isOpen ? 'HamburgerMenu__Items_Open' : null}`}>
                <div className="HamburgerMenu__Item">Главная</div>
                <div className="HamburgerMenu__Item">Технология</div>
                <div className="HamburgerMenu__Item">График полетов</div>
                <div className="HamburgerMenu__Item">Гарантии</div>
                <div className="HamburgerMenu__Item">О Компании</div>
                <div className="HamburgerMenu__Item">Контакты</div>
            </div>
            <div className="HeaderComponent__Navigations">
                <div className="HeaderComponent__Navigations_Item">Главная</div>
                <div className="HeaderComponent__Navigations_Item">Технология</div>
                <div className="HeaderComponent__Navigations_Item">График полетов</div>
                <div className="HeaderComponent__Navigations_Item">Гарантии</div>
                <div className="HeaderComponent__Navigations_Item">О Компании</div>
                <div className="HeaderComponent__Navigations_Item">Контакты</div>
            </div>
        </div>
    );
};

export default HeaderComponent;