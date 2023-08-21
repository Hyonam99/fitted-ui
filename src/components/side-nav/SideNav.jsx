/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react";
import "./side-nav.scss";
import logo from "assets/Images/fitted-logo.svg";
import editIcon from "assets/Images/edit-icon.svg";
import handFist from 'assets/Images/hand_fist.svg'
import {
	Avatar,
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import { BsLink45Deg } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { navLinks } from "mocked-data/mocked-data";
import { DashboardContext } from "contextAPI/DashboardContext";

const SideNav = () => {
	const { setScreen } = useContext(DashboardContext)
	const [isDefault, setIsDefault] = useState(4);

	useEffect(() => {
		if (isDefault === 4) {
			setScreen("PROFILE")
		}
	}, [isDefault])
	return (
		<section className="side-nav_container">
			<div className="side-nav_logo">
				<img src={logo} alt="fitted-logo" />
			</div>
			<div className="side-nav_header">
				<div className="side-nav_header_avatar-wrapper">
					<Avatar
						name="Sikiru Agbaje"
						bg="#000cb5"
						color="white"
						size="lg"
						fontSize="2rem"
						className="custom-avatar-name"
					/>
					<Avatar size="sm" src={editIcon} />
				</div>
				<h2>Sikiru Agbaje</h2>
				<div className="side-nav_header_link-wrapper">
					www.tailors.fitted.ng/sikiru <BsLink45Deg size={24} />
				</div>
				<p>Get measurements from any customer via this link</p>
				<div className="side-nav_header_user-button">
					<Menu>
						<MenuButton as={Button} rightIcon={<MdKeyboardArrowDown />} className="user-btn">
							Non-Vetted Tailor
						</MenuButton>
						<MenuList>
							<MenuItem className="user-menu-item" color='black' onClick={() => {setScreen('REGISTER'); setIsDefault(-1)}}>Apply to be a vetted tailor</MenuItem>
						</MenuList>
					</Menu>
				</div>
			</div>
			<div className="side-nav_header_links">
				<ul>
					{navLinks.map((link, index) => (
						<li
							key={link.linkName}
							onClick={() => setIsDefault(index)}
							className={navLinks.indexOf(link) === isDefault ? "is-active" : null}
						>
						    <link.icon />	{link.linkName}
						</li>
					))}
				</ul>
			</div>
			<div className="side-nav_footer-image">
				<img src={handFist} alt="handFist" />
			</div>
		</section>
	);
};

export default SideNav;
