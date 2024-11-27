import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import { Ellipsis } from "lucide-react";
import Key from "@/components/Key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24 ">
            <div className="container ">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 ">
                    Where power meets{" "}
                    <span className="text-lime-400">simplicity</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 gap-8">
                    <FeatureCard
                        title="Real-time collaboration"
                        description="Work together seamlessly with conflict-free team editing"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    alt="Avatar 1"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-30">
                                <Image
                                    src={avatar2}
                                    alt="Avatar 2"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-20">
                                <Image
                                    src={avatar3}
                                    alt="Avatar 3"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent z-10">
                                <div className="rounded-full flex justify-center items-center size-full bg-neutral-700">
                                    <Ellipsis size={30} />
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Interactive prototyping"
                        description="Engage your clients with prototypes that react
                                to user actions"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center">
                                We've achived{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    incrideible
                                </span>{" "}
                                growth this year
                            </p>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Keyboard quick actions"
                        description="Powerfull commands to make design quickly"
                    >
                        <div className="aspect-video flex justify-center items-center gap-2">
                            <Key>shift</Key>
                            <Key>alt</Key>
                            <Key>C</Key>
                        </div>
                    </FeatureCard>

                    <div>
                        {features.map((feature) => (
                            <div key={feature}>
                                <span></span>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
