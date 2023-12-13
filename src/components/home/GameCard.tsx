import React from 'react';
import { Link } from 'react-router-dom';

import { TGame } from '@/stores/barbooks';

import Image from '../Image';

interface IGameCardProps {
  game: TGame;
}

const GameCard: React.FC<IGameCardProps> = ({ game }) => {
  return (
    <div className="game-card">
      <p className="game-card__name">{game.title}</p>
      <div className="game-card__details">
        <Image
          src={game.thumbnail}
          alt={game.title}
          className="game-card__image"
        />
        <p className="game-card__description">{game.shortDescription}</p>
        <Link to={String(game.id)} className="game-card__link">
          View More &#8250;
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
