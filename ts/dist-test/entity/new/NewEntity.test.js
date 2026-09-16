"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('NewEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when DW_NEWS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('DW_NEWS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.DwNewsSDK.test();
        const ent = testsdk.New();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.DW_NEWS_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'new.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "breakingNews", "req": false, "type": "`$ARRAY`", "index$": 0 }], "name": "new", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /ru/breaking-news", "json": "{\"operationId\":\"getBreakingNews\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"properties\":{\"breakingNews\":{\"items\":{\"properties\":{\"category\":{\"description\":\"Category or topic of the news article\",\"type\":\"string\"},\"description\":{\"description\":\"Brief description or summary of the article\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the news article\",\"type\":\"string\"},\"imageUrl\":{\"description\":\"URL to the article's main image\",\"format\":\"uri\",\"type\":\"string\"},\"publishedAt\":{\"description\":\"Publication date and time\",\"format\":\"date-time\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the news article\",\"type\":\"string\"},\"url\":{\"description\":\"URL to the full article\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with breaking news data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request - Invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal Server Error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/ru/breaking-news", "segments": [{ "lit": "ru" }, { "lit": "breaking-news" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "new", "name__orig": "new", "Name": "New", "name_": "new", "name-": "new", "NAME": "NEW", "index$": 0 }, { "active": true, "entity": "new", "key$": "BasicNewFlow", "kind": "basic", "name": "BasicNewFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "new_ref01", "srcdatavar": "new_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-new_ref01" } }], "index$": 0 }] }, 'New');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let new_ref01_data = Object.values(setup.data.existing.new)[0];
        // LOAD
        const new_ref01_ent = client.New();
        const new_ref01_match_dt0 = {};
        const new_ref01_data_dt0 = (await new_ref01_ent.load(new_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != new_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/new/NewTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.DwNewsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['new01', 'new02', 'new03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'DW_NEWS_TEST_NEW_ENTID': idmap,
        'DW_NEWS_TEST_LIVE': 'FALSE',
        'DW_NEWS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['DW_NEWS_TEST_NEW_ENTID'];
    const live = 'TRUE' === env.DW_NEWS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['DW_NEWS_TEST_NEW_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.DwNewsSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.DW_NEWS_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=NewEntity.test.js.map