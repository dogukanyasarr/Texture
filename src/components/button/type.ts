export type ButtonComponentType = {
    text: string;
    onPress: () => void;
    isChange: boolean;
    width?: number | string;
    fontSize?: number;
    marginRight?: number;
    marginLeft?: number;
    marginTop?: number;
    marginBottom?: number;
    backgroundColor?: string;
}