import Button from "@/components/Button";
import designExample1 from "@/assets/images/design-example-1.png";
import designExample2 from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative ">
                <div className="absolute -left-32 top-16 hidden lg:block">
                    <Image src={designExample1} alt="design example 1" />
                </div>
                <div className="absolute -right-64 -top-16 hidden lg:block">
                    <Image src={designExample2} alt="design example 2" />
                </div>
                <div className="absolute top-96 left-56 hidden lg:block">
                    <Pointer name="Andrea" />
                </div>
                <div className="absolute -top-4 right-80 hidden lg:block">
                    <Pointer color="red" name="Brew" />
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨ $7.5M eed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 ">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Design tool shouldn't slow you down. Create, prototype, and
                    test with ease.
                </p>
                <form className="mx-auto flex border border-white/50 rounded-full p-2 mt-8 max-w-lg">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 flex-1 w-full"
                    />
                    <Button
                        size="sm"
                        className="whitespace-nowrap"
                        type="submit"
                        variant="primary"
                    >
                        Sign Up
                    </Button>
                </form>
                
            </div>
        </section>
    );
}
