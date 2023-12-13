import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { useGetCategorieQuery } from '@/stores/proxy';

import { FILTER_PLATFORMS, FILTER_SORT_BY } from '@/constants/filters.const';

import SelectInput from '../SelectInput';

const GameFilters: React.FC = () => {
  const { data: categories } = useGetCategorieQuery();

  const [searchParams, setSearchParams] = useSearchParams();
  const platform = searchParams.get('platform');
  const category = searchParams.get('category');
  const sortBy = searchParams.get('sort-by');

  const handleChange = (key: string, value: string): void => {
    searchParams.set(key, value.toLowerCase());

    if (!value) searchParams.delete(key);

    setSearchParams(searchParams);
  };

  const handlePlatformChange = (value: string) =>
    handleChange('platform', value);
  const handleCategoryChange = (value: string) =>
    handleChange('category', value);
  const handleSortChange = (value: string) => handleChange('sort-by', value);

  return (
    <div className="game-filters">
      <div className="game-filters__filter">
        <p className="game-filters__label">Filter by Platform</p>
        <SelectInput
          options={FILTER_PLATFORMS}
          defaultValue="All"
          value={platform}
          onChange={handlePlatformChange}
        />
      </div>
      <div className="game-filters__filter game-filters__filter--lg">
        <p className="game-filters__label">Filter by Category</p>
        <SelectInput
          options={categories || []}
          value={category}
          placeholder="Start typing..."
          isSearchable
          onChange={handleCategoryChange}
        />
      </div>
      <div className="game-filters__filter">
        <p className="game-filters__label">Sort by</p>
        <SelectInput
          options={FILTER_SORT_BY}
          defaultValue="Release Date"
          value={sortBy}
          onChange={handleSortChange}
        />
      </div>
    </div>
  );
};

export default GameFilters;
