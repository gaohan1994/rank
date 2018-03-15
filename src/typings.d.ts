// declare module '*.css' {
//     const content: {[className: string]: string};
//     export default content;
// }

// declare module '*.css' {
//     interface IClassNames {
//       [className: string]: string
//     }
//     const classNames: IClassNames;
//     export = classNames;
// }

// declare var require: {
//     <T>(path: string): T;
//     (paths: string[], callback: (...modules: any[]) => void): void;
//     ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
//  };

// export interface IMyConponentCss {
//     'match-css': string;
// }

// declare const styles: IMyConponentCss;

// export default styles;