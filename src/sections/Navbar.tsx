import logoImage from "@/assets/images/logo.svg";
import { Menu } from "lucide-react";
import Image from "next/image";
import Button from "@/components/Button";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return (
        <section className="py-4 lg:py-8">
            <div className="container max-w-5xl">
                <figure className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 py-2 lg:px-2 px-4 rounded-full items-center">
                    <div>
                        <Image
                            src={logoImage}
                            alt="layer logo"
                            className="h-9 w-auto md:h-auto"
                        />
                    </div>
                    <div className="hidden lg:flex justify-center items-center ">
                        <nav className="flex gap-6 font-medium ">
                            {navLinks.map((each) => (
                                <a href={each.href} key={each.href}>
                                    {each.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="flex justify-end gap-4">
                        <Menu className="text-white lg:hidden" size={30} />
                        <Button
                            variant="secondary"
                            className="hidden lg:inline-flex items-center"
                        >
                            Login
                        </Button>
                        <Button
                            variant="primary"
                            className="hidden lg:inline-flex items-center"
                        >
                            Signup
                        </Button>
                    </div>
                </figure>
            </div>
        </section>
    );
}
