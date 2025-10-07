import { baseApi } from "@/app/baseApi"

export const captchaApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCaptcha: builder.query<{url: string}, void>({
      query: () => "/security/get-captcha-url"
    }),
  }),
})


export const { useGetCaptchaQuery } = captchaApi