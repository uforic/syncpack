import { IManifestDescriptor, IManifestKey } from '../typings';
export interface IVersionsByName {
    [name: string]: string[];
}
export declare type GetVersionsByName = (dependencyTypes: IManifestKey[], pkgs: IManifestDescriptor[], dependencyFilterPattern?: string) => IVersionsByName;
export declare const getDependencyFilter: (dependencyFilterPattern?: string | undefined) => (dependencyName: string) => boolean;
export declare const getVersionsByName: GetVersionsByName;
export declare const getMismatchedVersionsByName: GetVersionsByName;
