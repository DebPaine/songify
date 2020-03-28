import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<div className='container'>
			<div style={{ display: 'flex ', justifyContent: 'space-between' }}>
				<h1 className='title'>Top 10 Songs</h1>
				<Link to='/addsongs' class='button is-medium'>
					<span class='icon'>
						<i class='fas fa-plus' />
					</span>
					<span>Add songs</span>
				</Link>
			</div>
			<table className='table is-striped is-hoverable is-fullwidth'>
				<thead>
					<tr>
						<th>Artwork</th>
						<th>Song</th>
						<th>Artists</th>
						<th>Rating</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<figure class='image is-4by3'>
								<img
									alt=''
									src='https://upload.wikimedia.org/wikipedia/en/7/7a/Minutes_to_Midnight_cover.jpg'
								/>
							</figure>
						</td>
						<td>New song</td>
						<td>New song</td>
						<td>New song</td>
					</tr>
					<tr>
						<td>
							<figure class='image is-2by1'>
								<img alt='' src='https://bulma.io/images/placeholders/256x256.png' />
							</figure>
						</td>
						<td>New song</td>
						<td>New song</td>
						<td>New song</td>
					</tr>
					<tr>
						<td>
							<figure class='image is-2by1'>
								<img alt='' src='https://bulma.io/images/placeholders/256x256.png' />
							</figure>
						</td>
						<td>New song</td>
						<td>New song</td>
						<td>New song</td>
					</tr>
					<tr>
						<td>
							<figure class='image is-2by1'>
								<img alt='' src='https://bulma.io/images/placeholders/256x256.png' />
							</figure>
						</td>
						<td>New song</td>
						<td>New song</td>
						<td>New song</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Landing;
