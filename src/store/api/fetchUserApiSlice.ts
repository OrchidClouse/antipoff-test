import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from 'types/users'

export const fetchUserApi = createApi({
	reducerPath: 'fetchUserApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
	endpoints: (builder) => ({
		fetchUser: builder.query<User[], string>({
			query: () => `users`,
		}),
		getUserById: builder.query<User, number>({
			query: (id) => `users/${id}`,
		}),
	}),
})

export const {useFetchUserQuery, useGetUserByIdQuery} = fetchUserApi
