import Image from "next/image";
import aboutDarkImg from '../../../public/images/image-about-dark.jpg';
import aboutLightImg from '../../../public/images/image-about-light.jpg';
export default function AboutSection() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-13 w-full">
            <div className="md:col-span-4">
                <Image 
                    src={aboutDarkImg} 
                    alt="about-dark" 
                    className="w-full h-full object-cover"
                />
            </div>
            <article className="md:col-span-5 flex flex-col justify-center p-6 md:p-10 space-y-4">
                <h2 className="text-md font-semibold uppercase tracking-[5px] mb-4">About Our Furniture</h2>
                <p className="text-subTitleColor text-sm leading-relaxed">
                    Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                    or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </article>
            <div className="md:col-span-4">
                <Image 
                    src={aboutLightImg} 
                    alt="about-light" 
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    )
}