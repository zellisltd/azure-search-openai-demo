import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What new features are available in the latest release of ResourceLink?",
        value: "What new features are available in the latest release of ResourceLink?"
    },
    { text: "How do I run a payroll calculation?", value: "How do I run a payroll calculation?" },
    { text: "What is wagestream and is it available in ResourceLink?", value: "What is wagestream and is it available in ResourceLink?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
