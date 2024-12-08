import React from 'react';

type CardProps = {
    cover: any;
    content: string;
    onCancel: () => void;
    onConfirm: () => void;
};

export function Card(props: CardProps) {
    const {cover, content, onCancel, onConfirm} = props;

    return (
        <div className="flex flex-col border border-white border-solid p-3 rounded-2xl gap-6">
            <div className="flex gap-4">
                <img
                    src={cover.source}
                    alt={cover.altText}
                    width={128}
                    height={128}
                    loading="lazy"
                    decoding="async"
                    className="rounded-full"
                />

                <div className="my-auto">
                    <p className="font-semibold text-left">{content}</p>
                </div>
            </div>

            <div className="ml-auto space-x-3">
                <button onClick={onCancel}>Cancel</button>
                <button onClick={onConfirm}>Confirm</button>
            </div>
        </div>
    );
}
