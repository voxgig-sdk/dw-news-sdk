# DwNews SDK feature factory

from dwnews_sdk.feature.base_feature import DwNewsBaseFeature
from dwnews_sdk.feature.ratelimit_feature import DwNewsRatelimitFeature
from dwnews_sdk.feature.retry_feature import DwNewsRetryFeature
from dwnews_sdk.feature.test_feature import DwNewsTestFeature
from dwnews_sdk.feature.timeout_feature import DwNewsTimeoutFeature


_FEATURES = {
    "base": lambda: DwNewsBaseFeature(),
    "ratelimit": lambda: DwNewsRatelimitFeature(),
    "retry": lambda: DwNewsRetryFeature(),
    "test": lambda: DwNewsTestFeature(),
    "timeout": lambda: DwNewsTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
