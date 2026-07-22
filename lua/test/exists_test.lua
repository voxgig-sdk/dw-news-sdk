-- DwNews SDK exists test

local sdk = require("dw-news_sdk")

describe("DwNewsSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
