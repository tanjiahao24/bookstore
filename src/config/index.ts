interface BaseConf {
  baseApi: string
  mockBaseApi: string
}

interface EnvConf {
  development: BaseConf
  production: BaseConf
}

class AllConf {
  env!: keyof EnvConf
  isMock: boolean = false
  baseApi!: string
  mockBaseApi!: string
}

class EnvConfigClass {
  static envConfigClass: EnvConfigClass = new EnvConfigClass()
  readonly curEnv = import.meta.env.MODE === 'development' ? 'development' : 'production'
  envConf!: EnvConf
  allEnvConf!: AllConf
  private constructor() {
    this.initEnvConf()
    this.initAllEnvConf()
  }
  initEnvConf() {
    this.envConf = {
      development: {
        baseApi: '/bookstore',
        mockBaseApi: '',
      },
      production: {
        baseApi: '',
        mockBaseApi: '',
      },
    }
  }

  initAllEnvConf() {
    this.allEnvConf = {
      env: this.curEnv,
      isMock: false,
      ...this.envConf[this.curEnv],
    }
  }
}

export default EnvConfigClass.envConfigClass.allEnvConf
