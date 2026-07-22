
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { DwNewsSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await DwNewsSDK.test()
    equal(null !== testsdk, true)
  })

})
