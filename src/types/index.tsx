export interface StoreState {
    languageName: string;
    testNumber: number;
}

export interface Stores {
    demo: Demo;
}

export interface Demo {
    test: number;
}