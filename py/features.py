# DwNews SDK feature factory

from feature.base_feature import DwNewsBaseFeature
from feature.test_feature import DwNewsTestFeature


def _make_feature(name):
    features = {
        "base": lambda: DwNewsBaseFeature(),
        "test": lambda: DwNewsTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
