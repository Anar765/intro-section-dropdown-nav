import Menu from '../images/icon-menu.svg';
import Close from '../images/icon-close-menu.svg';
import ArrowUp from '../images/icon-arrow-up.svg';
import ArrowDown from '../images/icon-arrow-down.svg';

import ToDo from '../images/icon-todo.svg';
import Reminders from '../images/icon-reminders.svg';
import Planning from '../images/icon-planning.svg';
import Calendar from '../images/icon-calendar.svg';

import { useState } from 'react';

const NavBar = () => {

    const [menu, setMenu] = useState(false);
    const [features, setFeatures] = useState(false);
    const [company, setCompany] = useState(false);

    return (
        <>
            <button onClick={() => {setMenu(true)}}>
                <img src={Menu} alt="Menu" />
            </button>

            {menu && 
            <>
            <nav className='fixed z-20 right-0 top-0 min-h-full w-50 bg-white text-Gray-500 flex flex-col gap-6 py-6 px-4 animate-navBar'>
                <button onClick={() => {setMenu(false)}} className='self-end'>
                    <img src={Close} alt="Close Menu" />
                </button>

                <div className='space-y-3'>
                    <div id="features" className='space-y-4'>
                        <button className='navBar_buttons' onClick={() => {setFeatures(prevFeat => !prevFeat)}}>
                            Features
                            <img src={features ? ArrowDown : ArrowUp} alt="Arrow" />
                        </button>

                        {features && 
                        
                            <div className='space-y-2'>
                                <button id="todo">
                                    <img src={ToDo} alt="ToDo Icon" />
                                    Todo List
                                </button>
                                <button id="calendar">
                                    <img src={Calendar} alt="Calendar Icon" />
                                    Calendar
                                </button>
                                <button id="reminders">
                                    <img src={Reminders} alt="Reminders Icon" />
                                    Reminders
                                </button>
                                <button id="planning">
                                    <img src={Planning} alt="Planning Icon" />
                                    Planning
                                </button>
                            </div>    

                        }

                    </div>

                    <div id="company" className='space-y-4'>
                        <button className='navBar_buttons' onClick={() => {setCompany(prevComp => !prevComp)}}>
                            Company
                            <img src={company ? ArrowDown : ArrowUp} alt="Arrow" />
                        </button>

                        {company && 

                            <div className='space-y-2'>
                                <button>History</button>
                                <button>Our Team</button>
                                <button>Blog</button>
                            </div>

                        }
                    </div>

                    <p className='cursor'>Careers</p>
                    <p className='cursor'>About</p>
                </div>

                <div id="auth" className='flex flex-col gap-6'>
                    <button id="login" type='button'>
                        Login
                    </button>

                    <button id="register" type='button' className='border-Gray-500 border-2 rounded-xl py-2'>
                        Register
                    </button>
                </div>
            </nav>
            <div className='fixed bg-Gray-950 opacity-50 top-0 left-0 h-full w-full' onClick={() => setMenu(false)}></div>
            </>
            }
        </>
    )
}

export default NavBar