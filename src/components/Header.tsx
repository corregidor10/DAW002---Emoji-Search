import { FC } from 'react';
import './Header.css';

const Header: FC = () => {
    return (
        <header className="component-header">
            <img src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png" width="32" height="32" alt="" />
            <span>Emoji Search</span>
            <img src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png" width="32" height="32" alt="" />
        </header>
    );
};

export default Header;
