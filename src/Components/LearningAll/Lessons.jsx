import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Lessons = () => {
    const vocabularies = useLoaderData();
    const [selectedVocab, setSelectedVocab] = useState(null);

    document.title = `Lesson ${vocabularies.length} - Lingo Bingo`;

    const speakWord = (word) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(word);

            utterance.lang = 'ja-JP';
            const voices = speechSynthesis.getVoices();
            console.log(voices);
            utterance.voice = voices.find(voice => voice.lang === 'ja-JP') || voices[0];
            speechSynthesis.speak(utterance);
        } else {
            console.error('Speech Synthesis API is not supported in this browser.');
        }
    };

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">Lessons</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {vocabularies.length > 0 ? (
                    vocabularies.map((vocab) => (
                        <div
                            key={vocab.id}
                            className={`card p-4 border rounded shadow-lg ${vocab.difficulty === "easy"
                                ? "bg-green-100"
                                : vocab.difficulty === "medium"
                                    ? "bg-yellow-100"
                                    : "bg-red-100"
                                }`}
                        >
                            <h1 className="text-xl font-bold">{vocab.id}</h1>
                            <h2 className="text-xl font-semibold">{vocab.word}</h2>
                            <p><strong>Meaning:</strong> {vocab.meaning}</p>
                            <p><strong>Pronunciation:</strong> {vocab.pronunciation}</p>
                            <p><strong>Part of Speech:</strong> {vocab.part_of_speech}</p>
                            <button
                                className="btn btn-primary mt-2"
                                onClick={() => {
                                    speakWord(vocab.word);
                                    setSelectedVocab(vocab);
                                    document.getElementById('vocab_modal').showModal();
                                }}
                            >
                                When to Say
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No vocabularies found.</p>
                )}
            </div>
            {/* <div className="flex justify-center items-center my-5">
                <Link to='/start_learning'>
                    <button className="btn btn-outline btn-success">Back to Lesson</button>
                </Link>
            </div> */}

            {/* Modal Structure */}
            <dialog id="vocab_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-green-300">
                    {selectedVocab && (
                        <>
                            <h3 className="font-bold text-lg">Details for {selectedVocab.word}</h3>
                            <p className="py-2"><strong>Word:</strong> {selectedVocab.word}</p>
                            <p className="py-2"><strong>Meaning:</strong> {selectedVocab.meaning}</p>
                            <p className="py-2"><strong>When to Say:</strong> {selectedVocab.when_to_say}</p>
                            <p className="py-2"><strong>Example:</strong> {selectedVocab.example}</p>
                        </>
                    )}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-outline btn-success">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <div className="flex justify-center items-center my-5">
                <Link to='/start_learning'>
                    <button className="btn btn-outline btn-success">Back to Lesson</button>
                </Link>
            </div>
        </div>
    );
};

export default Lessons;
