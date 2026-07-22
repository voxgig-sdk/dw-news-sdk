
import { Context } from './Context'


class DwNewsError extends Error {

  isDwNewsError = true

  sdk = 'DwNews'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  DwNewsError
}

