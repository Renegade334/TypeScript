currentDirectory:: /user/username/projects/myproject useCaseSensitiveFileNames:: false
Input::
//// [/user/username/projects/myproject/src/main.ts] Inode:: 6
import { foo } from "bar"; foo();

//// [/user/username/projects/myproject/node_modules/bar/index.d.ts] Inode:: 9
export { foo } from "./foo";

//// [/user/username/projects/myproject/node_modules/bar/foo.d.ts] Inode:: 10
export function foo(): string;

//// [/user/username/projects/myproject/node_modules/bar/fooBar.d.ts] Inode:: 11
export function fooBar(): string;

//// [/user/username/projects/myproject/node_modules/bar/temp/index.d.ts] Inode:: 13
export function temp(): string;

//// [/user/username/projects/myproject/tsconfig.json] Inode:: 14
{
  "exclude": [
    "node_modules"
  ],
  "watchOptions": {
    "excludeDirectories": [
      "**/temp"
    ]
  }
}

//// [/home/src/tslibs/TS/Lib/lib.d.ts] Inode:: 20
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };


/home/src/tslibs/TS/Lib/tsc.js -w -extendedDiagnostics
Output::
[[90mHH:MM:SS AM[0m] Starting compilation in watch mode...

Current directory: /user/username/projects/myproject CaseSensitiveFileNames: false
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} Config file
Synchronizing program
CreatingProgramWith::
  roots: ["/user/username/projects/myproject/src/main.ts"]
  options: {"watch":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/main.ts 250 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} Source file
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/bar/index.d.ts 250 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} Source file
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} Failed Lookup Locations
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/bar/foo.d.ts 250 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} Source file
FileWatcher:: Added:: WatchInfo: /home/src/tslibs/TS/Lib/lib.d.ts 250 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} Source file
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src 1 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src 1 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} Failed Lookup Locations
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/bar/package.json 2000 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} File location affecting resolution
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/package.json 2000 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} File location affecting resolution
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/package.json 2000 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} File location affecting resolution
FileWatcher:: Added:: WatchInfo: /user/username/projects/package.json 2000 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} File location affecting resolution
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} Type roots
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} Type roots
[[90mHH:MM:SS AM[0m] Found 0 errors. Watching for file changes.

DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 1 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} Wild card directory
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject 1 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} Wild card directory


//// [/user/username/projects/myproject/src/main.js] Inode:: 119
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bar_1 = require("bar");
(0, bar_1.foo)();



PolledWatches::
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/bar/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/node_modules/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/home/src/tslibs/TS/Lib/lib.d.ts: *new*
  {"inode":20}
/user/username/projects/myproject: *new*
  {"inode":4}
/user/username/projects/myproject/node_modules: *new*
  {"inode":7}
/user/username/projects/myproject/node_modules/bar: *new*
  {"inode":8}
/user/username/projects/myproject/node_modules/bar/foo.d.ts: *new*
  {"inode":10}
/user/username/projects/myproject/node_modules/bar/index.d.ts: *new*
  {"inode":9}
/user/username/projects/myproject/src: *new*
  {"inode":5}
/user/username/projects/myproject/src/main.ts: *new*
  {"inode":6}
/user/username/projects/myproject/tsconfig.json: *new*
  {"inode":14}

Timeout callback:: count: 1
1: timerToUpdateChildWatches *new*

Program root files: [
  "/user/username/projects/myproject/src/main.ts"
]
Program options: {
  "watch": true,
  "extendedDiagnostics": true,
  "configFilePath": "/user/username/projects/myproject/tsconfig.json"
}
Program structureReused: Not
Program files::
/home/src/tslibs/TS/Lib/lib.d.ts
/user/username/projects/myproject/node_modules/bar/foo.d.ts
/user/username/projects/myproject/node_modules/bar/index.d.ts
/user/username/projects/myproject/src/main.ts

Semantic diagnostics in builder refreshed for::
/home/src/tslibs/TS/Lib/lib.d.ts
/user/username/projects/myproject/node_modules/bar/foo.d.ts
/user/username/projects/myproject/node_modules/bar/index.d.ts
/user/username/projects/myproject/src/main.ts

Shape signatures in builder refreshed for::
/home/src/tslibs/ts/lib/lib.d.ts (used version)
/user/username/projects/myproject/node_modules/bar/foo.d.ts (used version)
/user/username/projects/myproject/node_modules/bar/index.d.ts (used version)
/user/username/projects/myproject/src/main.ts (used version)

exitCode:: ExitStatus.undefined

Change:: Directory watch updates because of main.js creation

Input::

Before running Timeout callback:: count: 1
1: timerToUpdateChildWatches

After running Timeout callback:: count: 0
Output::
sysLog:: onTimerToUpdateChildWatches:: 1
sysLog:: invokingWatchers:: Elapsed:: *ms:: 0
DirectoryWatcher:: Triggered with /user/username/projects/myproject/src/main.js 0:: WatchInfo: /user/username/projects/myproject/src 1 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} Failed Lookup Locations
Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/src/main.js 0:: WatchInfo: /user/username/projects/myproject/src 1 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} Failed Lookup Locations
DirectoryWatcher:: Triggered with /user/username/projects/myproject/src/main.js 0:: WatchInfo: /user/username/projects/myproject 1 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} Wild card directory
Project: /user/username/projects/myproject/tsconfig.json Detected file add/remove of non supported extension: /user/username/projects/myproject/src/main.js
Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/src/main.js 0:: WatchInfo: /user/username/projects/myproject 1 {"excludeDirectories":["/user/username/projects/myproject/**/temp"]} Wild card directory
sysLog:: Elapsed:: *ms:: onTimerToUpdateChildWatches:: 0 undefined




exitCode:: ExitStatus.undefined

Change:: add new folder to temp

Input::
//// [/user/username/projects/myproject/node_modules/bar/temp/fooBar/index.d.ts] Inode:: 121
export function temp(): string;



exitCode:: ExitStatus.undefined
