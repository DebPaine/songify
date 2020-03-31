import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
	let songs;

	return (
		<div className='container'>
			<br />
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
						<th>Average Rating</th>
						<th>Rate song</th>
					</tr>
				</thead>
				<tbody>
					{songs &&
						songs.map((song) => (
							<tr key={song._id}>
								<td>
									<figure class='image is-4by3'>
										<img alt='' src={song.coverart} />
									</figure>
								</td>
								<td>{song.name}</td>
								<td>{song.artists}</td>
								<td>{song.avgrating}</td>
								<td>
									<input type='number' name='rating' />
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default Landing;
