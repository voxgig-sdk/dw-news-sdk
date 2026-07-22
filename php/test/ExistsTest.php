<?php
declare(strict_types=1);

// DwNews SDK exists test

require_once __DIR__ . '/../dwnews_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = DwNewsSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
