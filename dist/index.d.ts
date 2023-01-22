/// <reference types="react" />
export declare enum Theme {
    LIGHT = "light",
    DARK = "dark"
}
interface Props {
    selectedTheme: Theme;
    onChange: (theme: Theme) => void;
    id?: string;
}
export default function ToggleTheme({ selectedTheme, onChange, id }: Props): JSX.Element;
export {};
