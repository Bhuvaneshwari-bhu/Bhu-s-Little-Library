import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function About() {
  return (
    <section className="relative overflow-hidden py-20 px-6 bg-[#CFE4FF] text-[#5B4E46]">

  {/* Background Blue Hearts */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

{/* top area */}
<span className="absolute top-8 left-8 text-2xl text-[#60A5FA] opacity-25">💙</span>
<span className="absolute top-12 left-1/4 text-xl text-[#3B82F6] opacity-20">💙</span>
<span className="absolute top-6 left-1/2 text-2xl text-[#93C5FD] opacity-15">💙</span>
<span className="absolute top-10 right-10 text-xl text-[#60A5FA] opacity-25">💙</span>
<span className="absolute top-16 right-1/3 text-2xl text-[#3B82F6] opacity-20">💙</span>

{/* upper-mid */}
<span className="absolute top-1/3 left-10 text-xl text-[#93C5FD] opacity-20">💙</span>
<span className="absolute top-1/3 left-1/3 text-2xl text-[#60A5FA] opacity-15">💙</span>
<span className="absolute top-1/3 right-10 text-xl text-[#3B82F6] opacity-20">💙</span>
<span className="absolute top-1/2 left-1/2 text-2xl text-[#93C5FD] opacity-10">💙</span>

{/* bottom area */}
<span className="absolute bottom-10 left-10 text-2xl text-[#60A5FA] opacity-20">💙</span>
<span className="absolute bottom-16 left-1/4 text-xl text-[#3B82F6] opacity-15">💙</span>
<span className="absolute bottom-10 left-1/2 text-2xl text-[#93C5FD] opacity-20">💙</span>
<span className="absolute bottom-14 right-1/4 text-xl text-[#60A5FA] opacity-15">💙</span>
<span className="absolute bottom-8 right-10 text-2xl text-[#3B82F6] opacity-25">💙</span>

{/* extra scattered layer */}
<span className="absolute top-24 left-20 text-xl text-[#93C5FD] opacity-10">💙</span>
<span className="absolute top-40 right-24 text-2xl text-[#60A5FA] opacity-15">💙</span>
<span className="absolute bottom-40 left-24 text-xl text-[#3B82F6] opacity-10">💙</span>

</div>
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: .8 }}
  className="relative max-w-7xl mx-auto mb-14"
>

  <div className="flex items-center gap-5">

    <div className="w-14 h-px bg-[#CDB8A5]" />

    <span
  className="
  px-7
  py-3
  rounded-full
  bg-[#FFECA6]
  border
  border-[#E5D37A]
  text-[14px]
  font-bold
  tracking-[0.18em]
  uppercase
  text-[#5C4A36]
  shadow-sm
  "
>
      Ryakala Bhuvaneshwari
    </span>

  </div>

</motion.div>
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">

        {/* LEFT SIDE */}
        <motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>

  {/* About Card */}
  <div className="
      relative
      overflow-hidden
      rounded-[38px]
      border border-[#F1DCD3]
      bg-[#FFD9CF]
      p-10
      shadow-[0_25px_70px_rgba(194,162,145,.12)]
  ">

    {/* Decorative watercolor circles */}
    <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#FFD8D2]/50 blur-3xl" />

    <div className="absolute -bottom-16 -left-16 w-36 h-36 rounded-full bg-[#FFF4C8]/50 blur-3xl" />

    {/* Heading */}
    <div className="relative">

      <span className="
        inline-block
        rounded-full
        bg-[#FFFFFF]/70
        px-4
        py-2
        text-[11px]
        uppercase
        tracking-[0.25em]
        text-[#b0684d]
      ">
        About Me
      </span>


      <p className="
        mt-8
        text-base
leading-7
        text-[#6B564B]
      ">
        I'm a Computer Science and Engineering student with a love for
        illustration, visual storytelling, and thoughtful design.

        <br /><br />

        Alongside building software, I create children's books and coloring
        books—from character concepts and illustrations to page layouts and
        publishing.

        <br /><br />

        I enjoy turning simple ideas into warm, imaginative artwork that makes
        stories memorable for young readers.
      </p>

    </div>

  </div>

  {/* Tags */}

  <div className="mt-8 flex flex-wrap gap-3">

    

    <span className="rounded-full bg-[#EAF7E7] px-5 py-2 text-sm text-[#5C8761]">
      Children's Illustration
    </span>

    <span className="rounded-full bg-[#F1ECFD] px-5 py-2 text-sm text-[#6D61A1]">
      Book Covers
    </span>

    <span className="rounded-full bg-[#FFF5D9] px-5 py-2 text-sm text-[#A17B28]">
    Picture Books
    </span>

  </div>

</motion.div>

        {/* RIGHT SIDE */}
        <motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative"
>

          {/* Book stack */}
          <motion.div
            animate={{ rotate: -5, y: 8 }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute w-[320px] h-[400px] bg-white/30 rounded-[30px]"
          />

          <motion.div
            animate={{ rotate: 3, y: -5 }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute w-[320px] h-[400px] bg-white/50 rounded-[30px]"
          />

          {/* Main book */}
          

          {/* RIGHT SIDE - CONTACT CARD */}
{/* RIGHT SIDE */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="relative flex items-center justify-center"
>

  {/* Glow background */}
  {/* Pastel watercolor glow */}

  {/* Contact Card */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="
    relative
    w-[500px]
    rounded-[34px]
   bg-[#DDF3D8]
    border border-[#E7DDD2]
    shadow-[0_20px_60px_rgba(162,140,120,0.12)]
    p-10
    "
  >

    {/* Accent line */}
    <div className="w-16 h-[3px] rounded-full bg-[#DDBB95] mb-8" />

    {/* Title */}
    <h3 className="text-[34px] leading-none font-serif text-[#5B4E46] mb-4">
      Let’s collaborate
    </h3>

    {/* Text */}
    <p className="text-[16px] leading-8 text-[#7A675B] mb-8">
      If you have ideas for children’s books, creative projects,
      or AI-assisted storytelling experiments, feel free to reach out.
      Open for picture books, children's illustrations, book covers and creative collaborations.
    </p>

    {/* Email Block */}
    
   

     

    <a
  href="mailto:bhuvaneshwariryakala@gmail.com"
  className="
    mt-2
    flex
    items-center
    gap-2
    rounded-2xl
    bg-[#FFF1A8]
border
border-[#E5D37A]
    px-5
    py-4
    transition
    hover:-translate-y-1
    hover:shadow-lg
  "
>
<Mail className="w-5 h-5 text-[#5C4A36] flex-shrink-0" />

<span className="min-w-0 text-[15px] font-semibold tracking-[0.01em] text-[#4B3D30] truncate">
    bhuvaneshwariryakala@gmail.com
  </span>
</a>
    

    {/* Footer note */}
    <div className="mt-10 text-xs text-[#2F3A4A]/40">
      Usually responds within a day
    </div>
  </motion.div>
</motion.div>

        </motion.div>
      </div>

      
    </section>
  );
}