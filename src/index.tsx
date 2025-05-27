// Dependencies
import styles from './styles.css';

// Other
export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}
interface Props {
    selectedTheme: Theme;
    onChange: (theme: Theme) => void;
    id?: string;
}

// Component
export default function ToggleTheme({ selectedTheme, onChange, id = 'toggle-theme-switch' }: Props) {
    return (
        <>
            <input
                type='checkbox'
                id={id}
                checked={selectedTheme === Theme.DARK}
                onChange={(e) => {
                    const newTheme = e.target.checked
                        ? Theme.DARK
                        : Theme.LIGHT;
                    onChange(newTheme);
                }}
            />

            <label htmlFor={id}>
                <div className={styles.toggleContainer}>
                    <div className={styles.circle}>
                        <svg
                            className={styles.moon}
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentcolor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
                        </svg>
                    </div>
                </div>
            </label>
        </>
    );
}