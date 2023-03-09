import React from 'react';
import Body from '../layout/Body';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

const HomeContent = () => {
    return (
        <>
            <section className="ant-layout layout css-dev-only-do-not-override-1me4733">
                <Header />
                <Body />
                <Footer />
            </section>
        </>
    );
}

export default HomeContent;