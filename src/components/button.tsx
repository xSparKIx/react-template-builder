import { FC } from "react";

interface Props {
    styles: { [key:string]: string };
}

const Button: FC<Props> = ({ styles }) => {
    return (
        <button style={styles}>Тест</button>
    )
}

export default Button;