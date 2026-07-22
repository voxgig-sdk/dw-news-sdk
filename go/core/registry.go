package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewNewEntityFunc func(client *DwNewsSDK, entopts map[string]any) DwNewsEntity

