import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002/' }),
  endpoints: (builder) => ({
    getArticleById: builder.query<any, number>({
      query: (id) => `articles/${id}`,
    }),
    getAllArticles: builder.query({
      query: () => 'articles',
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetArticleByIdQuery,
  useLazyGetArticleByIdQuery,
  useGetAllArticlesQuery,
  useLazyGetAllArticlesQuery,
} = articlesApi;
