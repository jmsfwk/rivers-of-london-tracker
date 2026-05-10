export type Character = {
    name: string;
    luck: number;
    magic: {
        starting: number | null;
        current: number | null;
    };
    impaired: boolean;
}
