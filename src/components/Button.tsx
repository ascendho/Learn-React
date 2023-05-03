interface Props {
    children: string;

    // 1. make color optional so that ts compiler won't complain when we
    //    don't specify color attribute

    // 2. limit the value of color in case invalid input

    color?: 'primary' | 'secondary' | 'success';
    onClick: () => void;
}

// default value
const Button = ({children, color = "primary", onClick}: Props) => {
    return (
        <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
    )
}

export default Button;