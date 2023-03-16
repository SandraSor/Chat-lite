import React from 'react';
import socket from '../socket';
import axios from 'axios';

function JoinBlock({ onLogin }) {
	const [roomId, setRoomId] = React.useState('');
	const [userName, setUserName] = React.useState('');
	const [isLoading, setIsLoading] = React.useState(false);

	const onClickInput = async () => {
		if (!roomId || !userName) {
			return alert('Неверные данные');
		}
		const obj = {
			roomId,
			userName,
		};
		setIsLoading(true);
		await axios.post('/rooms', obj);
		onLogin(obj);
	};

	return (
		<div className='join-block'>
			<input
				type='text'
				placeholder='Room ID'
				value={roomId}
				onChange={(e) => setRoomId(e.target.value)}
			/>
			<input
				type='text'
				placeholder='Ваше имя'
				value={userName}
				onChange={(e) => setUserName(e.target.value)}
			/>
			<button
				disabled={isLoading}
				className='btn btn-success'
				onClick={onClickInput}
			>
				{isLoading ? 'ВХОД...' : 'ВОЙТИ'}
			</button>
		</div>
	);
}

export default JoinBlock;
