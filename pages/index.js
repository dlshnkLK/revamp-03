import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import Grow from './components/Grow';
import ScrollOut from "scroll-out";
import { useEffect } from 'react';
import $ from 'jquery';


const openNav = (e) => {
	var element = document.getElementById("myNav");
	element.classList.add("heightHigh");
	element.classList.remove("heightLow");
}

const closeNav = (e) => {
	var element = document.getElementById("myNav");
	element.classList.add("heightLow");
	element.classList.remove("heightHigh");
}

export default function Home() {
	useEffect(() => {
		// back-to-top
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
		// back-to-top-end


		ScrollOut({
			threshold: .8,
			once: true
		});

		ScrollOut();
	}, []);
	return (
		<div className="scroll-smooth">
			<Head>
				<title>MinuteCode - Creative design solutions agency</title>
				<meta name="description" content="We are a web design agency for architects and interior designers bringing them better awareness, happier clients & more revenues" />
				<meta property="og:title" content="MinuteCode Labs - Creative design solutions agency" />
				<meta property="og:description" content="We are a web design agency for architects and interior designers bringing them better awareness, happier clients & more revenues" />
				<meta property="og:keywords" content="Web Design,Web Development,USA,Architects,Interior Designers, Washington DC, DC, Web design agency for architects in Washington DC, Web design agency for interior designers in Washington DC" />
				<meta property="og:author" content="minutecodelabs" />
				<meta property="og:url" content="https://minutecodelabs.com" />
				<link rel="icon" href="/fav.png" />
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
			</Head>


			{/* Landing page */}
			<div className=''>
				<div>
					<div className='landing-section-home'>
						<div className='hidden lg:flex flex-row'>
							<div className='w-1/2 p-4 lg:ml-10'>
								<div className="w-230px h-60px">
									<NextLink href="/"><a href="/"><img src="/Resources/About/Logo.png" alt="logo" /></a></NextLink>
								</div>
							</div>
							<div className='w-1/2'>
								<ul className="flex flex-row justify-between text-3xl text-gray-200">
									<li className="p-4"><NextLink href="/case-study"><a href="/case-study">Case Studies</a></NextLink></li>
									<li className="p-4"><NextLink href="/capabilities"><a href="/capablities">Capabilities</a></NextLink></li>

									<li className="p-4"><NextLink href="/process"><a href="/process">Process</a></NextLink></li>
									<li className="py-4 px-10 bg-mcl-blue"><NextLink href="/contact"><a href="/contact">Let's Talk</a></NextLink></li>
								</ul>
							</div>
						</div>
						<div data-scroll className='container-mcl landing-section-home-mid-content hidden'>
							<h1 className='text-f60 text-gray-200 Inter-Regular'>Websites for Architects</h1>
							<p className='text-f30 text-gray-200 Inter-Regular'>That attract right clients, better projects, and earn more profit. Period</p>

							<div className='bg-mcl-blue max-w-max mt-12 py-4 px-8 flex flex-row'>
								<NextLink href="/contact"><a className='text-gray-300 Inter-Regular' href="/contact">Book your Discovery Call</a></NextLink>
								<p className='ml-4'><span className='material-icons text-gray-300'>arrow_forward</span></p>
							</div>
						</div>

						<nav className="lg:hidden block mx-8">
							<div className="flex justify-between">
								<NextLink href="/"><a href="/" ><img className='w-134px h-34px mt-4' id="logo" src="/Resources/About/Logo.png" alt="logo" /></a></NextLink>
								<a href="#" className='mt-4'>
									<img src="/Resources/Mobile/m-menu.png" onClick={openNav} className="cursor-pointer w-5 h-4 mt-2" alt="mobile-menu" />
								</a>
							</div>
						</nav>

						{/* mobile navbar */}
						<div>
							<div id="myNav" className="overlay">
								<a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
								<div className="overlay-content">
									<NextLink href="/"><a href="/">Home</a></NextLink>
									<NextLink href="/about"><a href="/about">About</a></NextLink>
									<NextLink href="/capabilities"><a href="/capabilities">Capabilities</a></NextLink>
									<NextLink href="/case-study"><a href="/case-study">Case Studies</a></NextLink>
									<NextLink href="/contact"><a href="/contact">Contact</a></NextLink>
								</div>
							</div>
							{/* <span className="md:hidden flex text-gray-700 hover:text-white rlow"
                    onClick={openNav}>&#9776;</span> */}
						</div>
						{/* mobile navbar end */}
					</div>

				</div>
			</div>


			{/* times-are-changing */}
			<div className='times-are-changing'>
				<div className='flex flex-row mx-44'>
					<div className='w-1/2'></div>
					<div className='w-1/2'>
						<div className='flex flex-col mt-52 max-w-2xl text-white'>
							<h1 data-scroll className='text-f48 Inter-Regular mt-8'>Times are changing</h1>
							<p data-scroll className='text-f22 Inter-Regular mt-8'>Before the pandemic, architecture firms relied on their good
								names and reputations to create connections and referrals.</p>
							<p data-scroll className='text-f22 Inter-Regular mt-8'>
								After the pandemic, the rules changed. Days of selling AEC
								professional services from a portfolio are coming to an end.
								You are only one out of many choices for the evolved AEC
								buyers
							</p>
							<p data-scroll className='text-f22 Inter-Regular mt-8'>
								In fact, 83% of AEC buyers will eliminate your firm from
								consideration because of your website, according to Hinge.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* times-are-changing-end */}


			{/* your-buyers-are-evolving */}
			<div className='your-buyers-are-evolving'>
				<div className='flex flex-row mx-44'>
					<div className='w-1/2'>
						<div className='flex flex-col mt-52 max-w-2xl text-white '>
							<h1 data-scroll className='text-f48 Inter-Regular mt-8'>Your buyers are evolving</h1>
							<p data-scroll className='text-f22 Inter-Regular mt-8'>
								Your ideal clients are all online. More than you can even deal
								with, that are actively looking for a firm to partner with. Then
								what’s the problem?
							</p>
							<p data-scroll className='text-f22 Inter-Regular mt-8'>
								Buyers these days are increasingly seeking expertise and
								credibility. On average 57% of a buyer’s mind is made up
								before they even issue an RFP or pick up the phone.
							</p>
							<p data-scroll className='text-f22 Inter-Regular mt-8'>
								Where the buyers used to know only the problem, now they
								also know how to solve the problem, and who is qualified to
								do the work.
							</p>
						</div>
					</div>
					<div className='w-1/2'></div>
				</div>
			</div>
			{/* your-buyers-are-evolving-end */}



			{/* bridging-this-gap */}
			<div className='bridging-this-gap'>
				<div className='flex flex-row mx-44'>
					<div className='w-1/2'>

					</div>
					<div className='w-1/2'>
						<div className='flex flex-col mt-52 max-w-xl text-white '>
							<h1 data-scroll className='text-f48 Inter-Regular mt-8'>Success lies in bridging
								this gap.</h1>
							<p data-scroll className='text-f22 Inter-Regular mt-8'>
								We get it. You’re busy running your architecture practice.
								The last thing you have time for is your website.
							</p>
							<p data-scroll className='text-f22 Inter-Regular mt-8'>
								But here’s the thing: to attract the right client, to get better
								work, and to earn more profits (that you deserve) - you
								need a strategy.
							</p>
							<p data-scroll className='text-f22 Inter-Regular mt-8'>
								A strategy that aligns with business goals and solves
								business problems.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* bridging-this-gap-end */}

			{/* fix-your-problems */}
			<div className='fix-your-problems'>
				<div className='flex flex-row mx-44'>
					<div className='w-1/2'>
						<div className='flex flex-col mt-36 max-w-2xl text-white '>
							<h1 data-scroll className='text-f48 Inter-Regular mt-8'>
								Fix your problems with our
								proven process.</h1>
							<p data-scroll className='text-f22 Inter-Regular mt-8'>
								Architects are overworked and underappreciated, highly
								educated and poorly compensated, & very devoted and
								badly supported.
							</p>
							<p data-scroll className='text-f22 Inter-Regular mt-8'>
								We believe a good website can help you overcome these.
							</p>
							<p data-scroll className='text-f22 Inter-Regular mt-8'>
								We create websites that go beyond solving your problems to
								achieving your business goals. Websites that build awareness,
								trust, authority, generate the right clients, and better work.
							</p>
							<p data-scroll className='text-f22 Inter-Regular mt-8'>
								So that you can keep designing & doing what you do BEST in
								business and most importantly, spend more free time with
								your family, and do what you LOVE in life.
							</p>
						</div>
					</div>
					<div className='w-1/2'>

					</div>
				</div>
			</div>
			{/* fix-your-problems-end */}


			{/* process */}
			<div className="mx-28">
				<img className='w-auto h-auto' src='/Resources/NewHome/process.png' alt="process" />
			</div>
			{/* process-end */}

			{/* what-if-you-could */}
			<div className='mx-44 mt-16'>
				<div className='mx-auto'>
					<h1 className='Inter-Regular text-f40 text-center'>What if you could,</h1>
				</div>
				<div className='grid grid-cols-3 gap-24 mt-12'>
					<div className='pt-8 px-8 pb-24 bg-gray-200 rounded-md'>
						<h1 className='text-f60 Inter-Regular'>01</h1>
						<p className='Inter-Regular text-f20'>Create a consistent flow of great
							projects</p>
					</div>
					<div className='pt-8 px-8 pb-24 bg-gray-200 rounded-md'>
						<h1 className='text-f60 Inter-Regular'>02</h1>
						<p className='Inter-Regular text-f20'>Get more qualified leads</p>
					</div>
					<div className='pt-8 px-8 pb-24 bg-gray-200 rounded-md'>
						<h1 className='text-f60 Inter-Regular'>03</h1>
						<p className='Inter-Regular text-f20'>Build your place within the
							AEC industry</p>
					</div>
					<div className='pt-8 px-8 pb-24 bg-gray-200 rounded-md'>
						<h1 className='text-f60 Inter-Regular'>04</h1>
						<p className='Inter-Regular text-f20'>Get clients that treat
							collaboration as a needed thing</p>
					</div>
					<div className='pt-8 px-8 pb-24 bg-gray-200 rounded-md'>
						<h1 className='text-f60 Inter-Regular'>05</h1>
						<p className='Inter-Regular text-f20'>Never have to justify your fees
							again</p>
					</div>
					<div className='pt-8 px-8 pb-24 bg-gray-200 rounded-md'>
						<h1 className='text-f60 Inter-Regular'>06</h1>
						<p className='Inter-Regular text-f20'>Get clients that understand the
							value of good design</p>
					</div>
				</div>
				<div className='mt-20'>
					<h1 className='Inter-Regular text-f40 text-center'>That's how our result can help you.</h1>
				</div>

			</div>
			{/* what-if-you-could-end */}



			{/* case study */}
			<div className="lg:mt-24 mt-16 container-mcl">
				<div className="lg:mx-2">

					<div data-scroll><h1 className="text-f25 lg:text-f40 Inter-Medium text-center">Case Studies</h1></div>

					<div className="mt-8">
						<div className='flex flex-col justify-center items-center'>
							{/* <img className="object-cover w-auto lg:h-72 h-auto" src="/Resources/Home/case-study-1-cover.png" alt="case-1" /> */}
							<div className="container">
								<div className="content">
									<NextLink href="/case-study"><a href="/case-study">
										<div className="content-overlay"></div>
										<img className="content-image" src="/Resources/NewHome/2.jpg" alt="case-1" />
										<div className="content-details fadeIn-top">
											<h3>Gensler:Reimagining the digital</h3>
											<h3>forefront in 2022</h3>
										</div>
									</a></NextLink>
								</div>
							</div>


							{/* <p className="hidden lg:block mt-2 text-center text-f20 Inter-Regular text-gray-700">Gensler</p> */}
						</div>
					</div>

				</div>
			</div>

			{/* Ready to grow*/}
			<div className='container-mcl'>
				<Grow></Grow>
			</div>

			{/*Footer*/}
			<div>
				<Footer></Footer>
			</div>

			{/*Empty div*/}
			<div></div>

			{/* back to top button */}
			<a id="button"></a>
		</div >
	)
}
