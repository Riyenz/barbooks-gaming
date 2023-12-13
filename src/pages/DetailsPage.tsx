import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import Image from '@/components/Image';
import GameOverview from '@/components/details/GameOverview';

import { useGetGameByIdQuery } from '@/stores/barbooks';

const Game: React.FC = () => {
  const { id } = useParams();
  const { data: game } = useGetGameByIdQuery(String(id));

  if (!game) return null;

  return (
    <>
      <Helmet>
        <title>BarBooks Gaming - {game?.title}</title>
      </Helmet>
      <div className="details-page">
        <div className="details-page__hero">
          <h1 className="details-page__title">
            Find and track the best free-to-play games!
          </h1>
          <p className="details-page__description">
            Search for what to play next!
          </p>
        </div>

        <GameOverview game={game} />

        <div className="details-page__screenshots">
          {game.screenshots.map((screenshot) => (
            <Image
              key={screenshot.id}
              src={screenshot.image}
              className="details-page__screenshot"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Game;
