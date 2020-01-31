import React, { useContext }  from 'react'
import AppContext from '../../../context';

export default function Header() {
    const context = useContext(AppContext);
    const { name, cutest, nickNames } = context;
    
    return (
        <>
            <header className="page-header">
                <nav>
                    <a href="#0">
                        <img className="logo" src="logo.svg" alt="forecastr logo" />
                    </a>
                    <button className="toggle-mob-menu" aria-expanded="false" aria-label="open menu">
                        <svg width="20" height="20" aria-hidden="true">
                            
                        </svg>
                    </button>
                    <ul className="admin-menu">
                        <li className="menu-heading">
                            <h3>Admin</h3>
                        </li>
                        <li>
                            <a href="#0">
                            <svg>
                                
                            </svg>
                            <span>Pages</span>
                            </a>
                        </li>
                    
                        
                        <li>
                            <button className="collapse-btn" aria-expanded="true" aria-label="collapse menu">
                                <svg aria-hidden="true">
                                    
                                </svg>
                                <span>Collapse</span>
                            </button>
                        </li>
                    </ul>
                </nav>
        </header>
    </>
    )
}
