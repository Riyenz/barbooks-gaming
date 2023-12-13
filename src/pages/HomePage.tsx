import React, { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';

import SearchInput from '@/components/SearchInput';
import GameCard from '@/components/home/GameCard';
import GameFilters from '@/components/home/GameFilters';

import { useGetGamesQuery } from '@/stores/barbooks';

import { debounce } from '@/lib/utils';

const Games: React.FC = () => {
  const [searchParams] = useSearchParams();
  const platform = searchParams.get('platform') || undefined;
  const category = searchParams.get('category') || undefined;
  const sortBy = searchParams.get('sort-by') || undefined;

  const [searchInput, setSearchInput] = React.useState('');

  const { data: games } = useGetGamesQuery({
    platform,
    category,
    'sort-by': sortBy,
  });

  const filteredGames = useMemo(() => {
    if (!games) return [];

    if (!searchInput) return games;

    return games.filter((game) =>
      game.title.toLowerCase().includes(searchInput.toLowerCase()),
    );
  }, [searchInput, games]);

  const handleSearch = debounce((query: string) => {
    setSearchInput(query);
  }, 500);

  useEffect(() => {
    searchParams;
  }, [searchParams]);

  return (
    <>
      <Helmet>
        <title>BarBooks Gaming</title>
      </Helmet>

      <div className="home-page">
        <div className="home-page__hero">
          <h1 className="home-page__title">
            Find and track the best free-to-play games!
          </h1>
          <p className="home-page__description">
            Search for what to play next!
          </p>

          <SearchInput
            placeholder="Search your game here"
            onSearch={handleSearch}
          />
        </div>

        <div className="home-page__list">
          <GameFilters />

          <div className="home-page__cards">
            {filteredGames &&
              Array.isArray(filteredGames) &&
              filteredGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Games;
