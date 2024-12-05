"use client";

import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import { Ellipsis } from "lucide-react";
import Key from "@/components/Key";
import { motion } from "framer-motion";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

const parentVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.7,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Features() {
    return (
        <section className="py-24 ">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl m-auto">
                    Where power meets{" "}
                    <span className="text-lime-400">simplicity</span>
                </h2>
                <motion.div
                    variants={parentVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <FeatureCard
                                title="Real-time collaboration"
                                description="Work together seamlessly with conflict-free team editing"
                                className="md:col-span-2 lg:col-span-1"
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
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <FeatureCard
                                title="Interactive prototyping"
                                description="Engage your clients with prototypes that react
                                to user actions"
                                className="md:col-span-2 lg:col-span-1 group transition duration-500"
                            >
                                <div className="aspect-video flex items-center justify-center">
                                    <p className="group-hover:text-white/40 transition duration-500 text-4xl font-extrabold text-white/20 text-center">
                                        We've achived{" "}
                                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                            incrideible
                                        </span>{" "}
                                        growth this year
                                    </p>
                                </div>
                            </FeatureCard>
                        </motion.div>

                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <FeatureCard
                                title="Keyboard quick actions"
                                description="Powerfull commands to make design quickly"
                                className="group md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
                            >
                                <div className="aspect-video flex justify-center items-center gap-4">
                                    <Key className="w-28 outline outline-2 outline-transparent group-hover:outline-lime-400 transition-all duration-500 outline-offset-2 group-hover:translate-y-1">
                                        shift
                                    </Key>
                                    <Key className="outline outline-2 outline-transparent group-hover:outline-lime-400 transition-all duration-500 outline-offset-2 group-hover:translate-y-1 delay-150">
                                        alt
                                    </Key>
                                    <Key className="outline outline-2 outline-transparent group-hover:outline-lime-400 transition-all duration-500 outline-offset-2 group-hover:translate-y-1 delay-300">
                                        C
                                    </Key>
                                </div>
                            </FeatureCard>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="my-8 flex items-center justify-center flex-wrap gap-2 max-w-3xl m-auto">
                    {features.map((feature) => (
                        <div
                            className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 md:py-2 py-1.5 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
                            key={feature}
                        >
                            <span className="bg-lime-400 text-neutral-900 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
