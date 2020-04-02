import { ImportMap } from ".";
export { parseImportMap, resolveImportMap, resolveIfNotPlainOrUrl } from './common';
export declare function getPackageBase(url: string, jspmProjectPath: string): string;
export declare function extend(importMap: ImportMap, extendMap: ImportMap): ImportMap;
export declare function getScopeMatch(path: any, matchObj: any): any;
export declare function getImportMatch(path: any, matchObj: any): any;
export declare function rebaseMap(map: ImportMap, fromPath: string, toPath: string, absolute?: boolean): ImportMap;
export declare function flattenScopes(importMap: ImportMap): void;
export declare function clean(importMap: ImportMap): void;
export declare function validateImportMap(fileName: any, json: any): void;