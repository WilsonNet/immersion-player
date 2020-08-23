import React from 'react'

type ButtonProps = {
	text: String
}

const Button = ({ text }: ButtonProps) => {
	return (
		<div>
			<button class="bg-pink-700 hover:bg-pink-500 text-white font-bold py-2 px-4">
				{text}
			</button>
		</div>
	)
}

export default Button
