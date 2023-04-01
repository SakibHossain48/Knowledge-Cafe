import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="header flex justify-between p-4 lg:px-12 lg:py-5 bg-slate-200">
                <div className="navbar-brand">
                    <h1 className='text-3xl font-semibold'>Knoewledge Cafe</h1>
                </div>
                <div className="user-profile w-10">
                    <img className='rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_square.jpg/800px-Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_square.jpg" alt="MARK JUKERBERG" />
                </div>
            </div>
        </div>
    );
}

export default Header;
