
export type ButtonComponentType = {
    text: string;
    onPress: () => void;
    isChange: boolean;
    width?: number | string;
    fontSize?: number;
    paddingRight?: number;
    paddingLeft?: number;
    paddingTop?: number;
    paddingBottom?: number;
}