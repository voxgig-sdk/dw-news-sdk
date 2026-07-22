# DwNews SDK exists test

require "minitest/autorun"
require_relative "../DwNews_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = DwNewsSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
