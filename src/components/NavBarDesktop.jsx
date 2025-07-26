import ArrowUp from '../images/icon-arrow-up.svg';
import ArrowDown from '../images/icon-arrow-down.svg';

import ToDo from '../images/icon-todo.svg';
import Reminders from '../images/icon-reminders.svg';
import Planning from '../images/icon-planning.svg';
import Calendar from '../images/icon-calendar.svg';

import { useState } from 'react';

const NavBarDesktop = () => {

    const [features, setFeatures] = useState(false);
    const [company, setCompany] = useState(false);

    return (
        <nav className='flex w-full justify-between ml-10 items-center'>
            <div className='flex gap-6'>
                <div id="features" className='relative'>
                    <button className='navbarButtonsDesktop' onClick={() => { setFeatures(prevFeat => !prevFeat) }}>
                        Features
                        <img src={features ? ArrowDown : ArrowUp} alt="Arrow" />
                    </button>

                    {features &&

                        <div className='space-y-2 absolute top-8 right-0 bg-white px-6 py-4 rounded-xl shadow-[0_0_20px_hsl(0%,0%,30%)]'>
                            <button id="todo" className='w-[7rem]'>
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

                <div id="company" className='relative'>
                    <button className='navbarButtonsDesktop' onClick={() => { setCompany(prevComp => !prevComp) }}>
                        Company
                        <img src={company ? ArrowDown : ArrowUp} alt="Arrow" />
                    </button>

                    {company &&

                        <div className='space-y-2 absolute top-8 -left-8 bg-white px-6 py-4 rounded-xl'>
                            <button className='w-[4.6rem]'>History</button>
                            <button>Our Team</button>
                            <button>Blog</button>
                        </div>

                    }
                </div>

                <p className='cursor'>Careers</p>
                <p className='cursor'>About</p>

            </div>

            <div id="auth" className='flex flex-row gap-6'>
                <button id="login" type='button'>
                    Login
                </button>

                <button id="register" type='button' className='border-Gray-500 border-2 rounded-xl py-2 px-4 hover:border-Gray-950'>
                    Register
                </button>
            </div>
        </nav>
    )
}

export default NavBarDesktop