# DwNews SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module DwNewsFeatures
  def self.make_feature(name)
    case name
    when "base"
      DwNewsBaseFeature.new
    when "test"
      DwNewsTestFeature.new
    else
      DwNewsBaseFeature.new
    end
  end
end
