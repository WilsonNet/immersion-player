import React, { useState } from 'react'
import Button from '../../Components/Button'

const Home = () => {
	const [currentVideo, setCurrentVideo] = useState('')
	function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
		console.log()
		const file = evt.target.files[0]
		const objectUrl = URL.createObjectURL(file)
		setCurrentVideo(objectUrl)
	}

	return (
		<div>
			<input
				type="file"
				name=""
				accept="video/*"
				onChange={handleChange}
				id=""
			/>
			{currentVideo !== '' && (
				<video controls autoPlay>
					<source src={currentVideo} type="" />
				</video>
			)}
			<Button text={'Botão exemplo'} />
		</div>
	)
}

export default Home
