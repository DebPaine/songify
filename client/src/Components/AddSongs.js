import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

function AddSongs () {
	const [ formData, setFormData ] = useState({
		releaseDate: '',
		artworkURL: '',
		artistName: '',
		artistDOB: '',
		addArtist: false
	});

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
	};

	const onClick = (e) => {
		setFormData({ ...formData, addArtist: !addArtist });
	};

	const options = [ { label: 'Avicii', value: 'Avicii' }, { label: 'David Guetta', value: 'David Guetta' } ];

	const { releaseDate, artworkURL, addArtist } = formData;

	return (
		<div className='form'>
			<br />
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
								title='Search for the artwork on Google images, right click on the image, then select "Copy image address" and paste it'
							>
								<span>
									<i class='far fa-question-circle' />
								</span>
							</div>
						</div>
					</div>
				</div>

				<label class='label'>Artists</label>
				<div class='field is-grouped'>
					<div class='control'>
						<ReactMultiSelectCheckboxes options={options} />
					</div>
					<div class='control'>
						<button className='button is-light' onClick={onClick}>
							<span class='icon is-small'>
								<i class='fas fa-plus' />
							</span>
							<span>Add new artist</span>
						</button>
					</div>
				</div>
				{addArtist && (
					<Fragment>
						<div class='field'>
							<div class='control'>
								<label class='label'>Artist name</label>
								<input class='input' type='text' placeholder='eg: Avicii' />
							</div>
						</div>
						<div className='field'>
							<div class='control'>
								<label class='label'>Date of Birth</label>
								<input class='input' type='date' />
							</div>
						</div>
					</Fragment>
				)}
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<div class='field is-grouped'>
					<div class='control'>
						<input type='submit' class='button is-dark' />
					</div>
					<div class='control'>
						<Link to='/topsongs' class='button is-light'>
							Cancel
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddSongs;
