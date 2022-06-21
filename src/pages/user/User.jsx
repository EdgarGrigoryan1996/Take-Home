import React from 'react'
import { useSelector } from 'react-redux'

export default function User() {
	const user = useSelector((state) => {
		return state
	})
	return (
		<div>
			<div>{user.firstName}</div>
			<div>{user.lastName}</div>
			<div>{user.email}</div>
			<div>{user.dob}</div>
			<div>{user.agreement1}</div>
			<div>{user.agreement2}</div>
		</div>
	)
}
