export interface StoreState {
    languageName: string;
    testNumber: number;
}

export interface Stores {
    demo: Demo;
}

export interface Demo {
    test: number;
    products: Array<Object>;
}

export type PlayerType = {
    name: string;
    class: number;
    win: boolean;
};

export type MatchType = {
    date: Date;
    players: Array<PlayerType>;
    winner: number;
};