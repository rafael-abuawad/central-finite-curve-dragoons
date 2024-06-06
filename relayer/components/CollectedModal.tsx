export type CollectedModalProps = {
  open?: boolean;
  hash?: string;
  handleClick: () => void
};

export const CollectedModal = ({ open, hash, handleClick }: CollectedModalProps) => {
    return (
        <dialog open={open}>
            <article>
                <header>
                    <button aria-label="Close"></button>
                    <p>
                        <strong>🐲 Thank You for Minting!</strong>
                    </p>
                </header>
                <p>
                    We're excited to have you join and becoming
                    a Central Finite Curve Dragoon holder!

                    Check yout transaction at <a target="_blank" href={`https://ftmscan.com/tx/${hash}`}>Fantom Scan</a>
                </p>
                <footer>
                    <button onClick={handleClick}>Thanks!</button>
                </footer>
            </article>
        </dialog>
    )
}