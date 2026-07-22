# DwNews SDK utility: make_context

from core.context import DwNewsContext


def make_context_util(ctxmap, basectx):
    return DwNewsContext(ctxmap, basectx)
