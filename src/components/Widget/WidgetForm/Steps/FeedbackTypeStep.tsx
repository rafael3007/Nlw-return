import { FeedbackType, feedbackTypes } from ".."

interface FeedbackTypeProps {
    onFeedbackTypeChanged: (type:FeedbackType) => void;
}

export default function FeedbackTypeStep({onFeedbackTypeChanged}:FeedbackTypeProps) {
    return (
        <div className="flex py-8 gap-2 w-full">
            {
                Object.entries(feedbackTypes).map(([key, value])=>{
                    return(
                        <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            type="button"
                            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                        >
                            <img src={value.img.source} alt={value.img.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                })
            }
        </div>
    )
};
