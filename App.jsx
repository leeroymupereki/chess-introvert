import React, { useState } from 'react';
import Lobby from './components/Lobby';
import Board from './components/Board';
import Controls from './components/Controls';
import Timer from './components/Timer';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

function App() {
  const [gameId, setGameId] = useState('');
  const [fen, setFen] = useState('');
  const [inGame, setInGame] = useState(false);
  const [undoFunc, setUndoFunc] = useState(() => {});

  return (
    <div className="App">
      {!inGame && <Lobby socket={socket} setGameId={setGameId} setInGame={setInGame} />}
      {inGame && (
        <>
          <Board socket={socket} fen={fen} setFen={setFen} gameId={gameId} setUndoFunc={setUndoFunc} />
          <Controls socket={socket} gameId={gameId} undoFunc={undoFunc} />
          <Timer />
        </>
      )}
    </div>
  );
}

export default App;
