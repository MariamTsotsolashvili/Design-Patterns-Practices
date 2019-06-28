export type TStrategy = (amount: number) => number;
export interface Content {
    checkout(): number;
    setAmount(amount: number): void;
}
