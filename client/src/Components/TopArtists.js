import React from 'react';

const TopArtists = () => {
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
					<tr>
						<td>Avicii</td>
						<td>New song</td>
						<td>New song</td>
						<td>New song</td>
					</tr>
					<tr>
						<td>Avicii</td>
						<td>New song</td>
						<td>New song</td>
						<td>New song</td>
					</tr>
					<tr>
						<td>Avicii</td>
						<td>New song</td>
						<td>New song</td>
						<td>New song</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default TopArtists;
