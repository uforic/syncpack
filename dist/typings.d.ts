import { CommanderStatic } from 'commander';
export interface IDictionary<T> {
    [key: string]: T;
}
export declare type IManifestKey = 'dependencies' | 'devDependencies' | 'peerDependencies';
export interface IManifest {
    dependencies: IDictionary<string>;
    devDependencies: IDictionary<string>;
    peerDependencies: IDictionary<string>;
    [otherProps: string]: string | IDictionary<string>;
}
export interface IFileDescriptor {
    path: string;
    data: object;
}
export interface IManifestDescriptor {
    path: string;
    data: IManifest;
}
export declare type CommanderApi = CommanderStatic;
