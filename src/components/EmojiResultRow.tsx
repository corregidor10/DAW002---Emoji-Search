import { FC } from 'react';
import './EmojiResultRow.css';

interface EmojiResultsRowProps {
    name: string;
    code: string;
    image: string;
    character: string;
}

const EmojiResultsRow: FC<EmojiResultsRowProps> = ({ name, code, image, character }) => {
    return (
        <div className="component-emoji-result-row copy-to-clipboard" data-clipboard-text={character}>
            <img alt={name} src={image} />
            <span className="title">{name}</span>
            <span className="info">Click to copy emoji</span>
        </div>
    );
};

export default EmojiResultsRow;
