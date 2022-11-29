import './styles.scss';
import { Link } from 'react-router-dom';
import { setGame } from '../../store/slices/gameSlice';
import { useAppDispatch } from '../../store/config';

const Game = () => {
  const disPatch = useAppDispatch();
  disPatch(
    setGame({
      playGame: 1,
      deviation: 0,
      include: [],
      exclude: [],
    }),
  );

  return (
    <div className="start-container">
      <div className="d-flex justify-content-center align-items-center">
        <div className="start-title ">GagaLottos</div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <Link to={'/playlotto'} className="start-btn text-decoration-none">
          Start
        </Link>
      </div>
    </div>
  );
};

export default Game;
