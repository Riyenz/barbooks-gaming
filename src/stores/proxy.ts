import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const proxyApi = createApi({
  reducerPath: 'proxyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  endpoints: (builder) => ({
    getCategorie: builder.query<string[], void>({
      query: () => '/categories',
    }),
  }),
});

export const { useGetCategorieQuery } = proxyApi;
