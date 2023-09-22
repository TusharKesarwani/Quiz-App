import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "../components";
import { Footer } from "../components";

const RootLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default RootLayout;
