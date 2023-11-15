import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from 'types/users'

export const authUserApi = createApi({
	reducerPath: 'authUserApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (user) => ({
				url: 'register',
				method: 'POST',
				body: user,
			})
		}),
		login: builder.mutation({
			query: (user) => ({
				url: 'login',
				method: 'POST',
				body: user,
			})
		})
	}),
})

export const {useRegisterMutation, useLoginMutation} = authUserApi
