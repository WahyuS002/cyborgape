/* eslint-disable @next/next/no-img-element */

export default function Hero() {
    return (
        <>
            <div>
                <div className="flex justify-center mt-0 lg:-mt-16">
                    <img src="/img/hero.png" alt="Hero Image" className="min-w-full" />
                </div>
                <div className="px-12 mt-20">
                    <div className="text-center space-y-5 md:space-y-7">
                        <h1 className="text-3xl md:text-5xl font-bold">Cyborg Ape</h1>
                        <p className="md:px-36 text-gray-500 text-sm md:text-base">
                            Cyborg Ape is a collection combined from the Ape element and Robot element! All Apes are Hand Made! Detail and Uniqueness are our priority!Derivative Ape. (Not Affiliated
                            with BAYC).
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
