import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddSongs () {
	const [ formData, setFormData ] = useState({
		releaseDate: '',
		artworkURL: ''
	});

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
	};

	const { releaseDate, artworkURL } = formData;

	return (
		<div className='form'>
			<h1 className='title'>Add a new song</h1>
			<div onSubmit={onSubmit}>
				<div class='field'>
					<label class='label'>Song</label>
					<div class='control'>
						<input class='input' type='text' placeholder='Enter a song name' />
					</div>
				</div>

				<div class='field'>
					<label class='label'>Date released</label>
					<div class='control'>
						<input class='input' type='date' name='releaseDate' value={releaseDate} onChange={onChange} />
					</div>
				</div>

				<div class='field'>
					<div class='control'>
						<label class='label'>Artwork</label>
						<div style={{ display: 'flex' }}>
							<input
								class='input'
								name='artwork'
								value={artworkURL}
								onChange={onChange}
								placeholder='Add image URL'
							/>
							<div
								style={{ marginTop: '8px', marginLeft: '8px' }}
								title='Search for the artwork on Google images, right click on the image, then select "Copy image address" and paste it above'
							>
								<span>
									<i class='far fa-question-circle' />
								</span>
							</div>
						</div>
					</div>
				</div>

				<div class='field'>
					<label class='label'>Artists</label>
					<div class='control'>
						<div class='select'>
							<select>
								<option>Select artist</option>
								<option>Avicii</option>
								<option>Avicii</option>
								<option>Avicii</option>
							</select>
						</div>
					</div>
				</div>

				<div class='field is-grouped'>
					<div class='control'>
						<input type='submit' class='button is-dark' />
					</div>
					<div class='control'>
						<Link to='/' class='button is-light'>
							Cancel
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddSongs;
