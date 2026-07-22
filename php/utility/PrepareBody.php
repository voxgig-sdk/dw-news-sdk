<?php
declare(strict_types=1);

// DwNews SDK utility: prepare_body

class DwNewsPrepareBody
{
    public static function call(DwNewsContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
