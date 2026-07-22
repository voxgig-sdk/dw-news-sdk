package voxgigdwnewssdk

import (
	"github.com/voxgig-sdk/dw-news-sdk/go/core"
	"github.com/voxgig-sdk/dw-news-sdk/go/entity"
	"github.com/voxgig-sdk/dw-news-sdk/go/feature"
	_ "github.com/voxgig-sdk/dw-news-sdk/go/utility"
)

// Type aliases preserve external API.
type DwNewsSDK = core.DwNewsSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type DwNewsEntity = core.DwNewsEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type DwNewsError = core.DwNewsError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewNewEntityFunc = func(client *core.DwNewsSDK, entopts map[string]any) core.DwNewsEntity {
		return entity.NewNewEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewDwNewsSDK = core.NewDwNewsSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewDwNewsSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *DwNewsSDK  { return NewDwNewsSDK(nil) }
func Test() *DwNewsSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
