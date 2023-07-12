// App.js
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { createBoard } from "./features/boards/boardsSlice";
import "./App.css";
import Board from "./components/Board";
// import { changeBoard } from "./features/boardView/boardViewSlice";

function App() {
  const boards = useSelector((state) => state.boards);
  const boardView = useSelector((state) => state.boardView);

  const board = boards[boardView.index];
  const dispatch = useDispatch();

  const handleCreateBoard = () => {
    const boardId = uuidv4();
    dispatch(createBoard(boardId));
    // dispatch(changeBoard(boards.length-1))
    console.log(boards,boardView);
  };

  return (
    <div className="App">
      <div className="board-btn">
        <button onClick={handleCreateBoard}>Create Board</button>
      </div>
      <div className="boards-container">
      {
        board ? <Board board={board} />:<></>
      }
          
        
      </div>
    </div>
  );
}

export default App;
