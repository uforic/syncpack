import { IManifestKey } from './typings';
export declare const DEPENDENCY_TYPES: IManifestKey[];
export declare const SORT_AZ: string[];
export declare const SORT_FIRST: string[];
export declare const VERSION: any;
export declare const GREATER = 1;
export declare const LESSER = -1;
export declare const SAME = 0;
export declare const RANGE_ANY = "*";
export declare const RANGE_EXACT = "";
export declare const RANGE_GT = ">";
export declare const RANGE_GTE = ">=";
export declare const RANGE_LOOSE = ".x";
export declare const RANGE_LT = "<";
export declare const RANGE_LTE = "<=";
export declare const RANGE_MINOR = "^";
export declare const RANGE_PATCH = "~";
export declare const SEMVER_ORDER: string[];
export declare const FIX_MISMATCHES: {
    command: string;
    description: string;
};
export declare const FORMAT: {
    command: string;
    description: string;
};
export declare const LIST: {
    command: string;
    description: string;
};
export declare const LIST_MISMATCHES: {
    command: string;
    description: string;
};
export declare const SET_SEMVER_RANGES: {
    command: string;
    description: string;
};
export declare const OPTION_SEMVER_RANGE: {
    default: string;
    description: string;
    spec: string;
};
export declare const OPTION_SOURCES: {
    default: string[];
    description: string;
    spec: string;
};
export declare const OPTIONS_PROD: {
    description: string;
    spec: string;
};
export declare const OPTIONS_DEV: {
    description: string;
    spec: string;
};
export declare const OPTIONS_PEER: {
    description: string;
    spec: string;
};
export declare const OPTIONS_FILTER_DEPENDENCIES: {
    description: string;
    spec: string;
};
export declare const OPTION_INDENT: {
    default: string;
    description: string;
    spec: string;
};
