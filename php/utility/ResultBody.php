<?php
declare(strict_types=1);

// DwNews SDK utility: result_body

class DwNewsResultBody
{
    public static function call(DwNewsContext $ctx): ?DwNewsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
