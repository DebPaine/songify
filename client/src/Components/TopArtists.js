import React from 'react';

const TopArtists = () => {
	let artists;

	return (
		<div className='container'>
			<br />
			<h1 className='title'>Top 10 Artists</h1>
			<table className='table is-striped is-hoverable is-fullwidth'>
				<thead>
					<tr>
						<th>Artists</th>
						<th>Date of Birth</th>
						<th>Songs</th>
						<th>Average Rating</th>
					</tr>
				</thead>
				<tbody>
					{artists &&
						artists.map((artist) => (
							<tr key={artist._id}>
								<td>{artist.name}</td>
								<td>{artist.dob}</td>
								<td>{artist.songs}</td>
								<td>{artist.avgrating}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default TopArtists;
