import React from 'react';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import ScrollProgress from './Components/ScrollProgress';
import BackToTop from './Components/BackToTop';
import "./App.css";



export default function App() {
  return (
	<>
			{/* <img src={BG} className="fixed h-full w-full top-0 left-0 z-[-1] "></img> */}
			<ScrollProgress />
			<Nav />
			
			<div className=" flex w-full">
				<Home />
			</div>
			<Footer />
			<BackToTop />
			{/* <Resume/> */}
		</>
  );
}
