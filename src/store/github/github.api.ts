import { ServerResponse, IUser, IRepo } from './../../models/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const githubAPI = createApi({
	reducerPath: 'github/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.github.com/'
	}),
	refetchOnFocus: true,
	endpoints: build => ({
		searchUsers: build.query<IUser[], string>({
			query: (search: string) => ({
				url: `search/users`,
				params: {
					q: search,
					per_page: 10
				}
			}),
			transformResponse: (response: ServerResponse<IUser>) => response.items
		}),
		getUserRepos: build.query<IRepo[], string>({
			query: (username: string) => ({
				url: `users/${username}/repos`
			}) 
		}),
		createUser: build.mutation<any, void>({
			query: () => ``
		})
	})
})

export const {useSearchUsersQuery, useLazyGetUserReposQuery} = githubAPI