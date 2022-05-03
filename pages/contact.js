import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Head from 'next/head';
import ScrollOut from "scroll-out";
import $ from "jquery";


const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [thinking, setThinking] = useState("");
    const [company, setCompany] = useState("");
    const [website, setWebsite] = useState("");
    const [budget, setBudget] = useState("");
    const [find, setFind] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        // back to top
        var btn = $('#button');
        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });
        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, '300');
        });
        // back to top end
        ScrollOut({
            threshold: .8,
            once: true
        });

        ScrollOut();
    }, []);

    return (
        <div className='container-mcl'>
            <Head>
                <title>Contact Us</title>
                <meta name="description" content="Say hello" />
                <meta property="og:title" content="Contact Us" />
                <meta property="og:description" content="What we do" />
                <meta property="og:keywords" content="Web Design,Web Development,USA,Architects,Interior Designers, Washington DC, DC, Web design agency for architects in Washington DC, Web design agency for interior designers in Washington DC" />
                <meta property="og:author" content="minutecodelabs" />
                <meta property="og:url" content="https://minutecodelabs.com/contact" />
                <link rel="icon" href="/fav.png" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />

            </Head>

            <div className='bg-hero-dark lg:pb-14 lg:pt-0 pb-6 pt-2'>
                <div className='container-mcl'>
                    <Header />
                </div>
            </div>

            <div data-scroll className='flex flex-col justify-center items-center lg:my-24 my-12'>
                <p className='lg:text-f16 text-f14 Inter-Regular'>Say Hello</p>
                <h1 className='Inter-Medium lg:text-f40 text-f25'>Let's work together</h1>
            </div>


            {/* form */}
            <div className="px-12 py-6 lg:mx-44">
                <form action="https://formspree.io/f/xvolabwl" method="POST">



                    <div className='flex lg:flex-row flex-col lg:space-x-5'>
                        <div className='grid gap-y-2 lg:w-1/2'>
                            <label data-scroll className="lg:text-f16 text-f12 Inter-Regular" htmlFor="name">Your Name*</label>
                            <input value={name} onChange={(e) => { setName(e.target.value) }} className='w-full border-2 lg:h-16 h-14 p-2' type="text" name="name" required />
                        </div>
                        <div className='grid gap-y-2 lg:w-1/2 mt-4 lg:mt-0'>
                            <label data-scroll className="lg:text-f16 text-f12 Inter-Regular" htmlFor='email'>Your Email*</label>
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='w-full border-2 lg:h-16 h-14 p-2' type="email" id="email" name="email" required />
                        </div>
                    </div>

                    <div className='grid gap-y-2 mt-10'>
                        <label data-scroll for="their-thinking" className="lg:text-f16 text-f12 Inter-Regular" htmlFor='thinking'>What are you thinking?</label>
                        <select name="their-thinking" id="their-thinking" value={thinking} onChange={(e) => { setThinking(e.target.value) }} className="w-full border-2 lg:h-16 h-14 p-2 hover:cursor-pointer">
                            <option value="thinking-0" selected="">What are you thinking?</option>
                            <option value="start-a-project">Start a project</option>
                            <option value="general-enquiry">General Enquiry</option>
                        </select>
                    </div>

                    <div className='flex lg:flex-row flex-col lg:space-x-5 mt-10'>
                        <div className='grid gap-y-2 lg:w-1/2'>
                            <label data-scroll className="lg:text-f16 text-f12 Inter-Regular" htmlFor="name">Your company/brand name*</label>
                            <input value={company} onChange={(e) => { setCompany(e.target.value) }} className='w-full border-2 lg:h-16 h-14 p-2' type="text" id="company" name="company" />
                        </div>
                        <div className='grid gap-y-2 lg:w-1/2 mt-4 lg:mt-0'>
                            <label data-scroll className="lg:text-f16 text-f12 Inter-Regular" htmlFor='email'>Current website (Mention No if applicable)</label>
                            <input value={website} onChange={(e) => { setWebsite(e.target.value) }} className='w-full border-2 lg:h-16 h-14 p-2' type="text" id="website" name="website" />
                        </div>
                    </div>

                    <div className='flex lg:flex-row flex-col lg:space-x-5 mt-10'>
                        <div className='grid gap-y-2 lg:w-1/2'>
                            <label data-scroll for="budget" className="lg:text-f16 text-f12 Inter-Regular" htmlFor="name">Your readiness of investment into growing your business*</label>
                            <select name="budget" id="budget" value={budget} onChange={(e) => { setBudget(e.target.value) }} className="w-full border-2 lg:h-16 h-14 p-2 hover:cursor-pointer">
                                <option value="Choose your option">Choose your option</option>
								<option value="$10,000-$20,000">$10,000 - $20,000</option>
                                <option value="$20,000-$30,000">$20,000 - $30,000</option>
                                <option value="$30,000+">$30,000+</option>
                            </select>
                        </div>
                        <div className='grid gap-y-2 lg:w-1/2 mt-4 lg:mt-0'>
                            <label data-scroll for="find" className="lg:text-f16 text-f12 Inter-Regular" htmlFor='email'>How did you find us?</label>
                            <select name="find" id="find" value={find} onChange={(e) => { setFind(e.target.value) }} className="w-full border-2 lg:h-16 h-14 p-2 hover:cursor-pointer">
                                <option value="On-Google">On Google</option>
                                <option value="LinkedIn">LinkedIn</option>
                                <option value="Referral">Referral or Recommendation</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className='mt-10 grid gap-y-2'>
                        <label data-scroll className="lg:text-f16 text-f12 Inter-Regular" htmlFor='email'>Tell us a bit about your what you are thinking*</label>
                        <textarea value={message} onChange={(e) => { setMessage(e.target.value) }} placeholder='Project details, timeline and such' className='w-full border-2 p-2' rows={10} type="text" id="deets" name="deets" ></textarea>
                    </div>

                    <input data-scroll type="submit" value="Submit" className="Inter-SemiBold mt-10 text-gray-200 hover:cursor-pointer py-6 px-16 bg-mcl-blue lg:text-f20 text-f14 flex mx-auto lg:mx-0" />


                </form>
            </div >
            {/* form-end */}



            <div div className='mt-60' >
                <Footer />
            </div>




            {/* back to top button */}
            <a id="button"></a>

        </div >
    )
};

export default Contact;
