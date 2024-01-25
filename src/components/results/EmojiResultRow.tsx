import { FC } from 'react';
import './EmojiResultRow.css';
import { EmojiData } from '../../model/IEmojiData';

interface EmojiResultsRowProps {
    emoji: EmojiData;
}

const EmojiResultsRow: FC<EmojiResultsRowProps> = ({ emoji }) => {
    const { name, image, character } = emoji;
    return (
        <div className="component-emoji-result-row copy-to-clipboard" data-clipboard-text={character}>
            <img alt={name} src={image} />
            <span className="title">{name}</span>
            <span className="info">Click to copy emoji</span>
        </div>
    );
};

export default EmojiResultsRow;
