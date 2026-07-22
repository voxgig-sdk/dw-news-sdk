<?php
declare(strict_types=1);

// DwNews SDK base feature

class DwNewsBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(DwNewsContext $ctx, array $options): void {}
    public function PostConstruct(DwNewsContext $ctx): void {}
    public function PostConstructEntity(DwNewsContext $ctx): void {}
    public function SetData(DwNewsContext $ctx): void {}
    public function GetData(DwNewsContext $ctx): void {}
    public function GetMatch(DwNewsContext $ctx): void {}
    public function SetMatch(DwNewsContext $ctx): void {}
    public function PrePoint(DwNewsContext $ctx): void {}
    public function PreSpec(DwNewsContext $ctx): void {}
    public function PreRequest(DwNewsContext $ctx): void {}
    public function PreResponse(DwNewsContext $ctx): void {}
    public function PreResult(DwNewsContext $ctx): void {}
    public function PreDone(DwNewsContext $ctx): void {}
    public function PreUnexpected(DwNewsContext $ctx): void {}
}
