<?php
declare(strict_types=1);

// DwNews SDK utility: result_headers

class DwNewsResultHeaders
{
    public static function call(DwNewsContext $ctx): ?DwNewsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
