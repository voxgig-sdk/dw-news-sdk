# DwNews SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module DwNewsFeatures
  def self.make_feature(name)
    case name
    when "base"
      DwNewsBaseFeature.new
    when "ratelimit"
      DwNewsRatelimitFeature.new
    when "retry"
      DwNewsRetryFeature.new
    when "test"
      DwNewsTestFeature.new
    when "timeout"
      DwNewsTimeoutFeature.new
    else
      DwNewsBaseFeature.new
    end
  end
end
