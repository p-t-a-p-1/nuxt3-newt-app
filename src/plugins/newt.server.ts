import {
  AppMeta,
  Contents,
  GetAppParams,
  GetContentParams,
  GetContentsParams,
  GetFirstContentParams,
  createClient,
} from 'newt-client-js'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  console.log(config)
  const newtClient = createClient({
    spaceUid: config.newt.spaceUid,
    token: config.newt.cdnApiToken,
    apiType: 'cdn',
  })

  return {
    provide: {
      newtClient,
    },
  }
})

declare module '#app' {
  interface NuxtApp {
    $newtClient: {
      getContents: <T>({
        appUid,
        modelUid,
        query,
      }: GetContentsParams) => Promise<Contents<T>>
      getContent: <T_1>({
        appUid,
        modelUid,
        contentId,
        query,
      }: GetContentParams) => Promise<T_1>
      getFirstContent: <T_2>({
        appUid,
        modelUid,
        query,
      }: GetFirstContentParams) => Promise<T_2 | null>
      getApp: ({ appUid }: GetAppParams) => Promise<AppMeta>
    }
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $newtClient: {
      getContents: <T>({
        appUid,
        modelUid,
        query,
      }: GetContentsParams) => Promise<Contents<T>>
      getContent: <T_1>({
        appUid,
        modelUid,
        contentId,
        query,
      }: GetContentParams) => Promise<T_1>
      getFirstContent: <T_2>({
        appUid,
        modelUid,
        query,
      }: GetFirstContentParams) => Promise<T_2 | null>
      getApp: ({ appUid }: GetAppParams) => Promise<AppMeta>
    }
  }
}
