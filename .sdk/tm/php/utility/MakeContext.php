<?php
declare(strict_types=1);

// DwNews SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class DwNewsMakeContext
{
    public static function call(array $ctxmap, ?DwNewsContext $basectx): DwNewsContext
    {
        return new DwNewsContext($ctxmap, $basectx);
    }
}
