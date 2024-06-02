import { useState } from 'react';

export default function CollabCard({ activeLink }) {
    const [queue, setQueue] = useState(0);
    return (
        <div
            className={`card bg-white col-span-4 ${activeLink !== 'Collab' && activeLink !== 'All' ? 'blur-sm' : ''
                }`}
        >
            <div
                id="queueCollab"
                className="card flex flex-col gap-2 p-8 min-h-[323px] col-span-3 order-4"
            >
                <h3 className="text-neutral-950 font-black text-2xl">
                    Still pushing for collaboration?
                </h3>
                <p className="text-neutral-700">
                    Sure, if you&apos;re still interested in collaborating with me, you can fill
                    out the email form, and you&apos;ll receive a queue number.
                </p>
                <input
                    id="queue"
                    type="email"
                    placeholder="Enter your email."
                    className="inline-block w-full mb-3"
                    autoComplete="off"
                />
                <div className="flex flex-col justify-between items-center gap-3">
                    <a className="bg-white px-5 py-2 rounded-full ring-emerald-100 flex items-center cursor-pointer">
                        <button
                            onClick={() => setQueue(queue + 1)}
                            className="text-sm leading-5 ml-2"
                        >
                            Take queue 🎉
                        </button>
                    </a>
                    <div className="flex flex-row gap-1 align-baseline">
                        <p className="text-base font-extrabold">
                            You will get a queue number here.
                        </p>
                    </div>
                    <p className="text-base font-extrabold">{queue}</p>
                </div>
            </div>
        </div>
    );
}