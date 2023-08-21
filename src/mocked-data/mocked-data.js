import { BiUser } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { LuShirt } from 'react-icons/lu';
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { LogoutSVG, MeasureSVG } from 'assets/custom-icons/CustomIcons';

export const navLinks = [
    {linkName: 'Measurements', icon: MeasureSVG, linkUrl: '#'},
    {linkName: 'Orders', icon: HiOutlineShoppingBag, linkUrl: '#'},
    {linkName: 'Products', icon: LuShirt, linkUrl: '#'},
    {linkName: 'Customers', icon: FiUsers, linkUrl: '#'},
    {linkName: 'My Profile', icon: BiUser, linkUrl: '#'},
    {linkName: 'LogOut', icon: LogoutSVG, linkUrl: '#'},
]
