-- DwNews SDK error

local DwNewsError = {}
DwNewsError.__index = DwNewsError


function DwNewsError.new(code, msg, ctx)
  local self = setmetatable({}, DwNewsError)
  self.is_sdk_error = true
  self.sdk = "DwNews"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function DwNewsError:error()
  return self.msg
end


function DwNewsError:__tostring()
  return self.msg
end


return DwNewsError
