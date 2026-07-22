# DwNews SDK utility: make_context
require_relative '../core/context'
module DwNewsUtilities
  MakeContext = ->(ctxmap, basectx) {
    DwNewsContext.new(ctxmap, basectx)
  }
end
