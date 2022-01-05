const faq = [
    {
        id: 1,
        question: 'When is the drop?',
        answer: 'On Wednesday and Friday! We will share the countdown on instagram before the drop!!',
    },
    {
        id: 2,
        question: 'How much does it cost for an Ape?',
        answer: '0.1 ETH + gas',
    },
    {
        id: 3,
        question: 'Where can I get an Ape?',
        answer: 'https://opensea.io/collection/cyborgape',
    },
    {
        id: 4,
        question: 'Is there a whitelist?',
        answer: 'No! You can get the Ape on our Opensea once we listed it!',
    },
    {
        id: 5,
        question: 'What do the Mutant Ape mean in the Roadmap?',
        answer: 'Every Mutant Ape Yacht Club holders are given commercial rights to their specific ape. You can sell its likeness or make derivatives of it. So we will make the traits and add it to our Mutant Ape then share it to Cyborg Ape holders!',
    },
    {
        id: 6,
        question: 'What is derivative Ape?',
        answer: 'Every Ape Yacht Club holders are given commercial rights to their specific ape. You can sell its likeness or make derivatives of it.',
    },
    {
        id: 7,
        question: 'What is Cyborg Ape Kids',
        answer: 'Cyborg Ape Kids is a derivative project from Ape Kids Club, There will be 5K collections for Cyborg Ape Kids. We will choose 5 Holders that will manage our new project! Every Cyborg Ape Holders also get Free 1x Mint for Cyborg Ape Kids. (Not Affiliated With Ape Kids Club)',
    },
]

export default function Faq() {
    return (
        <>
            <div className="px-12 md:px-20" id="faq">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 max-w-[90rem] mx-auto">
                    <div className="w-full md:w-1/3">
                        <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Question</h2>
                        <p className="mt-4 text-sm md:text-base">
                            Can`t find the answer you`re looking for? Reach out to our <span className="font-semibold text-secondary">customer support</span> team.
                        </p>
                    </div>
                    <div className="w-full md:w-2/3 space-y-8">
                        {faq.map((item) => (
                            <div key={item.id}>
                                <p className="font-semibold text-sm md:text-base">{item.question}</p>
                                <p className="mt-2 text-gray-500 text-sm md:text-base">{item.answer}</p>
                            </div>
                        ))}
                        <div>
                            <p className="font-semibold text-sm md:text-base">This is awesome. How do I get involved in it?</p>
                            <p className="mt-2 text-gray-500 text-sm md:text-base">
                                Just hop over to this{' '}
                                <a href="https://discord.gg/YK3BjTmAFB" target="_blank" rel="noreferrer" className="font-semibold text-secondary border-secondary hover:underline">
                                    link
                                </a>
                                , join in on the conversation, and let us know your ideas!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
