import React from 'react';

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark p-3' style={{ padding: '0.5rem 1rem' }}>
                    <div className='container-fluid justify-content-center'>
                        <a className='navbar-brand m-5' href="" style={{ margin: '0' }}>
                        <span style={{ color: 'green' }}>Student Management System LTKA Albert & Komang</span>
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default HeaderComponent;
