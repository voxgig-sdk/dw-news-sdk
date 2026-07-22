<?php
declare(strict_types=1);

// DwNews SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class DwNewsFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new DwNewsBaseFeature();
            case "test":
                return new DwNewsTestFeature();
            default:
                return new DwNewsBaseFeature();
        }
    }
}
