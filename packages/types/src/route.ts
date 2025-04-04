import { RouteComponentProps } from 'react-router-dom'
import { ISSRContext } from './ctx'
import { IConfig } from './config'

export interface LayoutProps {
  ctx?: ISSRContext
  config?: IConfig
  children?: JSX.Element
  staticList?: StaticList
}
export interface StaticList {
  injectCss: JSX.Element[]
  injectScript: JSX.Element[]
}

export interface ProvisionalFeRouteItem {
  path?: string
  layout: string
  fetch?: string
  component?: string
}

export type ReactFetch = (params: ISSRContext | RouteComponentProps) => Promise<any>

export type ReactESMFetch = () => Promise<{
  default: ReactFetch
}>

export type ESMLayout = () => Promise<React.FC<LayoutProps>>

export interface FC<T={}> extends React.FC<T> {
  fetch?: ReactESMFetch
  layoutFetch?: ReactFetch
  preload?: () => Promise<FC>
}

export type ReactServerESMFeRouteItem<T = {}, U={}> = {
  path: string
  fetch?: ReactFetch
  component: FC<T>
  webpackChunkName: string
} & U

export type ReactClientESMFeRouteItem<T = {}, U={}> = {
  path: string
  fetch?: ReactESMFetch
  component: FC<T>
  webpackChunkName: string
} & U

export interface ReactRoutesType {
  Layout: React.FC<LayoutProps>
  App?: React.FC
  layoutFetch: ReactFetch
  FeRoutes: ReactServerESMFeRouteItem[]
}
export interface ReactClientRoutesType {
  Layout: React.FC<LayoutProps>
  App?: React.FC
  layoutFetch: ReactFetch
  FeRoutes: ReactClientESMFeRouteItem[]
}

export type ESMFeRouteItem<T={}> = {
  path: string
  webpackChunkName: string
} & T

export interface ParseFeRouteItem {
  path?: string
  fetch?: string
  component?: string
  webpackChunkName?: string
}
