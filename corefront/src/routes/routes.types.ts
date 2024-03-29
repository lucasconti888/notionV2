import { NonIndexRouteObject } from "react-router-dom";

export interface RoutesTreeNode {
    name: string;
    path: string;
    hasElement: boolean;
    isNavigateElement: boolean;
    children: RoutesTreeNode[];
    parent: RoutesTreeNode;
    depth: number;
    hideGoBack: boolean;
    showChildren: boolean;
    hasSubItems: boolean;
}

type SomeRequired<T, K extends keyof T> = Pick<Required<T>, K> & Omit<T, K>;

export type Route = Omit<NonIndexRouteObject, "children"> & 
Omit<
SomeRequired<Partial<RoutesTreeNode>, "name" | "path">,
"depth" | "parent" | "hasElement" | "children"
> & {
    children?: Routes;
    isFullScreen?: boolean; 
}

export type Routes = Record<string, Route>;