import { ChangeEvent, FC, useState } from "react";

interface Props {
    styles: { [key: string]: string },
    onChange: (...args: unknown[]) => unknown,
}

/**
 * @todo Сделать логику сохранения CSS в формате JS в JSON
 * @param param0 
 * @returns 
 */
const Input: FC<Props> = ({ onChange, styles }) => {
    const [value, setValue] = useState("");

    /**
     * Мутируем значение и используем callback из конструктора.
     * @param e 
     */
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(() => e.target.value);

        if (onChange) {
            onChange();
        }
    };

    return (
        <input
            type="text"
            value={value}
            style={styles}
            onChange={handleChange}
        ></input>
    )
}

export default Input;