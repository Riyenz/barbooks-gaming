import React from 'react';
import { Link } from 'react-router-dom';

import { TGameFull } from '@/stores/barbooks';

import Image from '../Image';

interface IGameOverviewProps {
  game: TGameFull;
}

const GameOverview: React.FC<IGameOverviewProps> = ({ game }) => {
  const requirements = Object.entries(game.minimumSystemRequirements || {});

  return (
    <div className="game-overview">
      <Image src={game.thumbnail} className="game-overview__image" />

      <div className="game-overview__requirements">
        <p className="game-overview__title">Requirements</p>
        {requirements.map(([key, value]) => (
          <div className="game-overview__requirement">
            <p className="game-overview__caption">{key}</p>
            <p className="game-overview__value">{value}</p>
          </div>
        ))}
      </div>

      <div className="game-overview__details">
        <p className="game-overview__title">{game.title}</p>
        <p className="game-overview__description">{game.description}</p>
        <button
          className="game-overview__back"
          onClick={() => window.history.back()}
        >
          &#8249; Back
        </button>
      </div>
    </div>
  );
};

export default GameOverview;
