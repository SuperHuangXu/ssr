import { initialSSRDevProxy } from 'ssr-server-utils'
import { Application } from 'egg'

class AppBootHook {
  app: Application
  constructor (app) {
    this.app = app
  }

  didReady () {
    initialSSRDevProxy(this.app)
  }
}

export default AppBootHook
