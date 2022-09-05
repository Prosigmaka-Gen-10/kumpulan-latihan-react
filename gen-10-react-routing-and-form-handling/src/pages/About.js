import React from 'react'
import { Link, Routes, Route, Outlet } from 'react-router-dom'

import Kontak from './About/Kontak'
import Sejarah from './About/Sejarah'

export default function About () {
	return <>
		<p>Ini About</p>
		
		<Outlet />
		
		<Link to="/">
			Kembali ke halaman home
		</Link>
	</>
}