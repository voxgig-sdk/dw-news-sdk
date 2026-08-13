# frozen_string_literal: true

# Typed models for the DwNews SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# New entity data model.
#
# @!attribute [rw] breakingNews
#   @return [Array, nil]
New = Struct.new(
  :breakingNews,
  keyword_init: true
)

# Request payload for New#load.
#
# @!attribute [rw] breakingNews
#   @return [Array, nil]
NewLoadMatch = Struct.new(
  :breakingNews,
  keyword_init: true
)

