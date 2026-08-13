# DwNews SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

DwNewsUtility.registrar = ->(u) {
  u.clean = DwNewsUtilities::Clean
  u.done = DwNewsUtilities::Done
  u.make_error = DwNewsUtilities::MakeError
  u.feature_add = DwNewsUtilities::FeatureAdd
  u.feature_hook = DwNewsUtilities::FeatureHook
  u.feature_init = DwNewsUtilities::FeatureInit
  u.fetcher = DwNewsUtilities::Fetcher
  u.make_fetch_def = DwNewsUtilities::MakeFetchDef
  u.make_context = DwNewsUtilities::MakeContext
  u.make_options = DwNewsUtilities::MakeOptions
  u.make_request = DwNewsUtilities::MakeRequest
  u.make_response = DwNewsUtilities::MakeResponse
  u.make_result = DwNewsUtilities::MakeResult
  u.make_point = DwNewsUtilities::MakePoint
  u.make_spec = DwNewsUtilities::MakeSpec
  u.make_url = DwNewsUtilities::MakeUrl
  u.param = DwNewsUtilities::Param
  u.prepare_auth = DwNewsUtilities::PrepareAuth
  u.prepare_body = DwNewsUtilities::PrepareBody
  u.prepare_headers = DwNewsUtilities::PrepareHeaders
  u.prepare_method = DwNewsUtilities::PrepareMethod
  u.prepare_params = DwNewsUtilities::PrepareParams
  u.prepare_path = DwNewsUtilities::PreparePath
  u.prepare_query = DwNewsUtilities::PrepareQuery
  u.graphql_body = DwNewsUtilities::GraphqlBody
  u.graphql_errors = DwNewsUtilities::GraphqlErrors
  u.result_basic = DwNewsUtilities::ResultBasic
  u.result_body = DwNewsUtilities::ResultBody
  u.result_headers = DwNewsUtilities::ResultHeaders
  u.transform_request = DwNewsUtilities::TransformRequest
  u.transform_response = DwNewsUtilities::TransformResponse
}
