import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type TGame = {
  id: number;
  title: string;
  thumbnail: string;
  shortDescription: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  releaseDate: string;
};

export type TScreenshot = {
  id: number;
  image: string;
};

export type TGameFull = TGame & {
  description: string;
  minimumSystemRequirements?: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  screenshots: TScreenshot[];
};

export type TGameFilters = {
  category?: string;
  platform?: string;
  'sort-by'?: string;
};

export const barbooksApi = createApi({
  reducerPath: 'barbooksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL + '/api',
  }),
  endpoints: (builder) => ({
    getGames: builder.query<TGame[], TGameFilters>({
      query: (filters) => {
        return {
          url: '/games',
          params: filters,
        };
      },
    }),
    getGameById: builder.query<TGameFull, number | string>({
      query: (id) => {
        return {
          url: `/game`,
          params: { id },
        };
      },
    }),
  }),
});

export const { useGetGamesQuery, useGetGameByIdQuery } = barbooksApi;
