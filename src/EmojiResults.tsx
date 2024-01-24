import Clipboard from 'clipboard';
import { FC, useEffect, useRef } from 'react';

import EmojiResultRow from './EmojiResultRow';
import './EmojiResults.css';

interface EmojiData {
    code: string;
    name: string;
    image: string;
    character: string;
}

interface EmojiResultsProps {
    emojiData: Array<EmojiData>;
}

const EmojiResults: FC<EmojiResultsProps> = ({ emojiData }) => {
    const clipboard = useRef<Clipboard | null>(null);

    useEffect(() => {
        clipboard.current = new Clipboard('.copy-to-clipboard');

        return () => {
            clipboard.current?.destroy();
        };
    }, []);

    return (
        <div className="component-emoji-results">
            {emojiData.map((emoji) => (
                <EmojiResultRow key={emoji.code} code={emoji.code} name={emoji.name} image={emoji.image} character={emoji.character} />
            ))}
        </div>
    );
};

export default EmojiResults;
