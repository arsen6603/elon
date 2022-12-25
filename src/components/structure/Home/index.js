import React from 'react';
import Layout from "../../layouts/Layout";

const Home = () => {
    return (
        <div className='Home'>
            <Layout>
                <div className="Home__Content">
                    <div className="Home__Content_Title">
                        <h1>ПУТЕШЕСТВИЕ</h1>
                        <p>на красную планету</p>

                        <button className='Home__Content_Button'>
                            <div className="Home__Button_Border"/>
                            Начать путешествие
                        </button>
                        <img src="/images/mrs.png" className='Mars__Image'/>
                    </div>
                    <div className="Home__Content_Analytics">
                        <div className="Content__Analytics_Item">
                            <div className="Analytics__Item_Text">
                                <p>мы</p>
                                <b>1</b>
                                <p>на рынке</p>
                            </div>

                        </div>
                        <div className="Content__Analytics_Item">
                            <div className="Analytics__Item_Text">
                                <p>гарантируем</p>
                                <b>50%</b>
                                <p>безопасность</p>
                            </div>

                        </div>
                        <div className="Content__Analytics_Item">
                            <div className="Analytics__Item_Text">
                                <p>календарик за</p>
                                <b>2001<span>г.</span></b>
                                <p>в подарок</p>
                            </div>

                        </div>
                        <div className="Content__Analytics_Item">
                            <div className="Analytics__Item_Text">
                                <p>путешествие</p>
                                <b>597</b>
                                <p>дней</p>
                            </div>

                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Home;